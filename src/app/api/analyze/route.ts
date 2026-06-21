import { NextResponse } from 'next/server';
import { runCompatibilityEngine } from '@/backend/agents/workflow';

// Placeholder Portfolio Context (in a real app, this might come from the database or a local MD file)
const PORTFOLIO_CONTEXT = `
I am a Senior Product Designer with 9 years of experience.
I specialize in building complex, data-rich B2B SaaS platforms and AI-driven interfaces.
Core Competencies: UX Strategy, UI Design, Design Systems, User Research, Prototyping.
Tech Stack/Tools: Figma, Framer, React/Next.js (basic frontend), Python (basic AI integrations).
Key Achievements:
- Designed a multi-agent AI system interface that improved user efficiency by 40%.
- Led the redesign of a legacy enterprise dashboard, reducing cognitive load and increasing adoption by 25%.
- Built and maintained a comprehensive design system used by 50+ engineers.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jdText } = body;

    if (!jdText || typeof jdText !== 'string') {
      return NextResponse.json({ error: 'Job description text is required.' }, { status: 400 });
    }

    // Capture IP address for rate-limiting or basic tracking (respecting PII constraints)
    // Note: To implement strict rate-limiting, you'd integrate Redis/Upstash here.
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    // To implement streaming responses for Vercel/Next.js, we would use Server-Sent Events (SSE) 
    // or the ai-sdk stream. For this implementation using standard Gemini API, we await the result.
    // If true streaming of the JSON is needed, we'd use streamGenerateContent in analyzer.ts.
    
    const result = await runCompatibilityEngine(jdText, PORTFOLIO_CONTEXT, ip);

    return NextResponse.json(result);

  } catch (error: any) {
    console.error("[API Analyze] Error:", error);
    return NextResponse.json(
      { error: 'An error occurred during analysis.', details: error.message }, 
      { status: 500 }
    );
  }
}
