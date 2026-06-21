import OpenAI from 'openai';
import { withFallback } from '../utils/errorHandler';

// Initialize the OpenAI client for NVIDIA NIM
const ai = new OpenAI({
  baseURL: 'https://integrate.api.nvidia.com/v1',
  apiKey: process.env.NVIDIA_API_KEY
});

export interface AnalysisResult {
  match_score: number;
  strengths: string[];
  gaps: string[];
  justification: string;
}

// System prompt for the Analyzer Agent
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

export async function analyzeJobDescription(jdText: string, portfolioContext: string): Promise<AnalysisResult> {
  const prompt = `
### Job Description
${jdText}

### Portfolio Context (9-year Product Design History)
${portfolioContext}

Analyze the Job Description against the Portfolio Context and generate the JSON response.
`;

  // Define the primary function using NVIDIA NIM (Minimax)
  const primaryFn = async () => {
    const response = await ai.chat.completions.create({
      model: 'minimaxai/minimax-m2.7',
      messages: [
        { role: 'system', content: ANALYZER_PROMPT },
        { role: 'user', content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 4096,
    });

    const text = response.choices[0]?.message?.content;
    if (!text) {
      throw new Error("Analyzer returned empty response.");
    }
    
    // Strip markdown formatting if the model wraps it in \`\`\`json
    const cleanedText = text.replace(/^\`\`\`json/m, '').replace(/^\`\`\`/m, '').trim();

    return JSON.parse(cleanedText) as AnalysisResult;
  };

  const secondaryFn = async () => {
    console.log("Simulating fallback to secondary provider...");
    return {
      match_score: 50,
      strengths: ["Fallback provider used - partial match"],
      gaps: ["Could not fully analyze due to primary provider failure"],
      justification: "Primary API failed, this is a fallback response."
    };
  };

  return withFallback(primaryFn, secondaryFn, 'Agent A: Analyzer');
}
