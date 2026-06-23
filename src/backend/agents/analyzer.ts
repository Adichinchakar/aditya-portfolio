import OpenAI from 'openai';
import { GoogleGenAI } from '@google/genai';
import { withFallback } from '../utils/errorHandler';

const ai = new OpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY || 'dummy_key_for_build',
});

export interface AnalysisResult {
  match_score: number;
  strengths: string[];
  gaps: string[];
  justification: string;
}

const ANALYZER_PROMPT = `
You are an Elite AI Systems Architect and Senior Product Engineer acting as 'The Analyzer'.
Your task is to perform a deep, qualitative, and personalized analysis of a Job Description (JD)
against my 9-year portfolio as a Product Designer.

Do not just match keywords. Look for core competencies, tech stack requirements, and seniority expectations.
Compare these against the provided Portfolio Context.

Extract specific evidence from the Portfolio Context to support your findings.

You MUST output a valid JSON object with the exact following schema and nothing else:
{
  "match_score": number (0-100 percentage),
  "strengths": ["specific alignment point 1", "specific alignment point 2"],
  "gaps": ["missing skill 1", "missing skill 2"],
  "justification": "the 'why' behind the score, highlighting business problem alignment"
}
`;

function extractJSON(text: string): string {
  // Extract the first {...} block — handles prose before/after JSON and markdown wrappers
  const match = text.match(/\{[\s\S]*\}/);
  if (match) return match[0];
  return text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
}

function validateResult(parsed: unknown): AnalysisResult {
  if (
    typeof parsed !== 'object' || parsed === null ||
    typeof (parsed as any).match_score !== 'number' ||
    !Array.isArray((parsed as any).strengths) ||
    !Array.isArray((parsed as any).gaps) ||
    typeof (parsed as any).justification !== 'string'
  ) {
    throw new Error('Analyzer returned malformed JSON structure.');
  }
  const p = parsed as any;
  return {
    match_score: Math.min(100, Math.max(0, Math.round(p.match_score))),
    strengths: p.strengths.filter((s: unknown) => typeof s === 'string' && s.trim()),
    gaps: p.gaps.filter((g: unknown) => typeof g === 'string' && g.trim()),
    justification: String(p.justification).trim(),
  };
}

export async function analyzeJobDescription(jdText: string, portfolioContext: string): Promise<AnalysisResult> {
  const prompt = `
### Job Description
${jdText}

### Portfolio Context (9-year Product Design History)
${portfolioContext}

Analyze the Job Description against the Portfolio Context and generate the JSON response.
`;

  const primaryFn = async () => {
    const response = await ai.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: ANALYZER_PROMPT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 800,
    });

    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error('Analyzer returned empty response.');

    return validateResult(JSON.parse(extractJSON(text)));
  };

  const secondaryFn = async (): Promise<AnalysisResult> => {
    console.warn('[Agent A] Analyzer primary provider failed. Switching to Gemini fallback...');
    try {
      const geminiApiKey = process.env.GEMINI_API_KEY;
      if (!geminiApiKey) throw new Error('GEMINI_API_KEY not found in environment.');
      
      const geminiAi = new GoogleGenAI({ apiKey: geminiApiKey });
      const response = await geminiAi.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: ANALYZER_PROMPT + '\n\n' + prompt }] }
        ],
        config: {
          temperature: 0.2,
          maxOutputTokens: 800,
        }
      });
      
      const text = response.text;
      if (!text) throw new Error('Gemini returned empty response.');
      return validateResult(JSON.parse(extractJSON(text)));
    } catch (e) {
      console.error('[Agent A] Gemini fallback also failed:', e);
      console.warn('[Agent A] Analyzer completely unavailable — using dummy fallback.');
      return {
        match_score: 85,
        strengths: ['Strong product design background', 'Extensive 9-year portfolio'],
        gaps: ['Specific tech stack details may need clarification'],
        justification: 'Fallback analysis due to API unavailability. Please check your API keys.'
      };
    }
  };

  return withFallback(primaryFn, secondaryFn, 'Agent A: Analyzer');
}

