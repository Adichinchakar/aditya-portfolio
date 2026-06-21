import { NextResponse } from 'next/server';
import { runCompatibilityEngine } from '@/backend/agents/workflow';

export const maxDuration = 300;
export const dynamic = 'force-dynamic';

const PORTFOLIO_CONTEXT = `
# Aditya Chinchakar — Senior Product Designer (9 years)

## Role Scope
Senior Product Designer and Design Engineer. Has operated as Founding Designer (0-to-1), Design Systems Lead, and Lead Product Designer across enterprise SaaS, AI platforms, healthcare, and fintech. Comfortable as the only designer or as a lead within a multi-squad org.

## Core Competencies
- UX Strategy & Product Thinking: defines problem space, shapes roadmap direction, influences prioritisation alongside PMs
- Complex B2B SaaS: multi-step workflows, role-based dashboards, data-heavy interfaces, enterprise admin systems
- AI/ML Interface Design: multi-agent UX, trust & transparency patterns, LLM output displays, real-time streaming UI
- Design Systems: architecture, token systems, governance — built systems adopted by 50+ engineers across 5 product teams
- User Research: generative (interviews, diary studies, friction mapping) and evaluative (usability testing, task analysis)
- Accessibility: WCAG 2.2 AA/AAA expert — built commercial tools that audit accessibility at scale ($250K ADA liability context)
- Cross-functional leadership: embedded with engineering, PM, legal, data science teams; drives alignment across functions
- Frontend ability: ships production code — Next.js, TypeScript, React, Supabase, Python; not just prototypes

## Key Projects & Outcomes

### Aulys — AI Accessibility Figma Plugin (Founding Designer + Engineer)
Solo-built. AI-directed development with 30 beta users. Scans 500 Figma layers in under 10 seconds. Achieves WCAG 2.2 AAA compliance. Built end-to-end: designed, coded, shipped. Addresses $250K+ ADA compliance risk.

### Simplifai Workflow Engine — Enterprise AI SaaS (Lead Product Designer)
Redesigned end-to-end product experience for enterprise AI workflow builder. Before state: 5+ support tickets/week, 3-day onboarding. After: 73% increase in workflow completion rate, 40% efficiency gain. Led design across 3 product squads, collaborated directly with PMs on quarterly roadmap.

### Simplifai Design System (Design Systems Lead)
Built from scratch for 5 product teams, adopted by 50+ engineers. Reduced frontend engineering time by 40%. Defined token architecture, component governance, and contribution model.

### TalentBridge — Infosys Enterprise AI Workbench (Senior Product Designer)
Led 0-to-1 design of an AI workbench for data scientists. Built component library from scratch. Adopted by 500+ data scientists. Designed for 4 distinct user personas (data scientist, ML engineer, business analyst, admin).

### Aulys Code — VS Code Extension (Design Engineer)
Real-time WCAG violation detection inline as developers type. Shipped as production VS Code extension.

### MedSecure — Healthcare Mobile App (UX/UI Designer)
Reduced patient enrollment failure from 30% to under 4%. Designed for high-stakes, low-literacy users across farmer and urban professional segments.

### AI Match Engine — Multi-agent Portfolio Tool (Design Engineer)
Built a live multi-agent AI system (NVIDIA NIM → Groq) into this portfolio. SSE streaming, Supabase persistence, agent critic loop. Demonstrates ability to ship real AI products.

## Tools & Stack
Figma (expert), Framer, React/Next.js (production-level), TypeScript, Supabase, Python (AI integrations), Storybook, Playwright

## Transferable Strengths
- Strong product strategy instinct: has defined problem spaces, written design briefs equivalent to PRDs, shaped roadmaps
- Research-to-decision pipeline: runs studies, synthesises findings, presents recommendations to leadership
- Stakeholder communication: presents to C-suite, legal, enterprise clients
- Can bridge design and engineering: writes production code, contributes to design system APIs
`;

const MIN_JD_LENGTH = 50;
const MAX_JD_LENGTH = 15000;
const RATE_LIMIT_COUNT = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

// In-memory rate limiter — resets on cold start. Sufficient for a portfolio site.
// For multi-instance production use, replace with Upstash Redis.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_COUNT) return false;
  entry.count++;
  return true;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const jdText = typeof body.jdText === 'string' ? body.jdText.trim() : '';

    if (!jdText) {
      return NextResponse.json({ error: 'Job description text is required.' }, { status: 400 });
    }
    if (jdText.length < MIN_JD_LENGTH) {
      return NextResponse.json({ error: 'Job description is too short. Paste the full JD for accurate results.' }, { status: 400 });
    }
    if (jdText.length > MAX_JD_LENGTH) {
      return NextResponse.json({ error: `Job description is too long (${jdText.length.toLocaleString()} chars). Please trim to under ${MAX_JD_LENGTH.toLocaleString()} characters.` }, { status: 400 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: `Too many requests. You can run ${RATE_LIMIT_COUNT} analyses per hour.` },
        { status: 429 }
      );
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const emit = (type: string, payload: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type, ...payload })}\n\n`));
        };

        try {
          emit('status', { message: '[System] Initializing Compatibility Engine...' });
          const result = await runCompatibilityEngine(jdText, PORTFOLIO_CONTEXT, ip, (message) => {
            emit('status', { message });
          });
          emit('status', { message: '[System] Analysis complete.' });
          emit('result', { data: result });
        } catch (err: any) {
          console.error('[API Analyze Stream Error]:', err);
          emit('error', { message: err.message || 'Analysis failed. Please try again.' });
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
    console.error('[API Analyze] Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.', details: error.message },
      { status: 500 }
    );
  }
}
