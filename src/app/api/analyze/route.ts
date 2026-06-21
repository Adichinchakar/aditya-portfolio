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

    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const emitProgress = (message: string) => {
          const data = JSON.stringify({ type: 'status', message });
          controller.enqueue(encoder.encode(`data: ${data}\n\n`));
        };

        try {
          emitProgress('[System] Initializing Compatibility Engine...');
          
          const result = await runCompatibilityEngine(jdText, PORTFOLIO_CONTEXT, ip, emitProgress);
          
          emitProgress('[System] Analysis Complete.');
          const finalData = JSON.stringify({ type: 'result', data: result });
          controller.enqueue(encoder.encode(`data: ${finalData}\n\n`));
        } catch (err: any) {
          console.error("[API Analyze Stream Error]:", err);
          const errorData = JSON.stringify({ type: 'error', message: err.message || 'Analysis failed' });
          controller.enqueue(encoder.encode(`data: ${errorData}\n\n`));
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error: any) {
    console.error("[API Analyze] Error:", error);
    return NextResponse.json(
      { error: 'An error occurred during analysis.', details: error.message }, 
      { status: 500 }
    );
  }
}
