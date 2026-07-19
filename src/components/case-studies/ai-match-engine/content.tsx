"use client";

import { motion } from "@/lib/motion";
import { CaseStudyTldr } from "@/components/case-studies/case-study-tldr";
import { Terminal, Bot, Zap, Database, BrainCircuit, Target } from "lucide-react";
import EngineUI from "@/components/CompatibilityEngine/EngineUI";

export default function AiMatchEnginePage() {
    return (
        <div className="min-h-screen bg-zinc-50 pb-32">
            
            <div className="pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">AI Match Engine</h1>
                </div>
            </div>

            <CaseStudyTldr
                hook="I built a fully functional Multi-Agent AI system directly into my portfolio. It reads job descriptions and rigorously debates whether my skills match the role."
                stats={[
                    { value: "Dual", label: "Agent Architecture" },
                    { value: "<15s", label: "Analysis Time" },
                    { value: "Live", label: "Production Deployment" },
                ]}
                contribution="end-to-end — agent architecture, prompt design, UI, and the production Next.js code."
                role="Design Engineer"
                timeline="3 Days"
                readTime="4 min read"
                accentClass="text-indigo-600"
                spotlight="rgba(99, 102, 241, 0.10)"
            />

            <div className="container mx-auto px-6 max-w-5xl mt-24">
                
                {/* 1. The Problem */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-zinc-900">
                        The 6-Second Problem
                    </h2>
                    <div className="prose prose-zinc prose-lg max-w-3xl">
                        <p>
                            Recruiters spend an average of 6 seconds scanning a portfolio. In that time, they are pattern-matching against a specific Job Description (JD). If they don't see the exact keywords they are looking for, they bounce.
                        </p>
                        <p>
                            But as a Senior Product Designer with deep technical expertise in AI and Design Systems, my background doesn't fit neatly into a standard template. I needed a way to instantly prove alignment to the right teams, while gracefully filtering out the wrong ones.
                        </p>
                    </div>
                </motion.section>

                {/* 2. The Solution */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-zinc-900">
                        The "Agent Console" Pattern
                    </h2>
                    <div className="prose prose-zinc prose-lg max-w-3xl mb-12">
                        <p>
                            I built an interactive "AI Match Engine" directly into my site. A recruiter can paste a JD, and my custom multi-agent system will analyze it against my resume and case studies. 
                        </p>
                        <p>
                            To build trust, I designed an <strong>Agent Console</strong> — a terminal-like UI that streams the AI's internal reasoning logs in real-time while the user waits. Exposing the system's "thought process" turns a boring loading spinner into an engaging, transparent experience.
                        </p>
                    </div>
                    
                    <div className="w-full relative mt-16 p-8 bg-zinc-900/5 border border-zinc-200/60 rounded-[3rem] shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]">
                        <EngineUI />
                    </div>
                </motion.section>

                {/* 3. The Architecture */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-zinc-900">
                        Dual-Agent Architecture
                    </h2>
                    <div className="prose prose-zinc prose-lg max-w-3xl mb-12">
                        <p>
                            If an AI just says "100% Match!" to everything, it loses all credibility. To prevent LLM sycophancy, I implemented a strict <strong>Analyzer-Critic</strong> workflow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="col-span-1 md:col-span-2 bg-indigo-50/50 border border-indigo-100 p-8 rounded-3xl">
                            <BrainCircuit className="w-8 h-8 text-indigo-500 mb-4" />
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">The Analyzer</h3>
                            <p className="text-zinc-600">Parses the JD against my experience and drafts an initial compatibility score, strengths, and gaps.</p>
                        </div>
                        <div className="col-span-1 bg-rose-50/50 border border-rose-100 p-8 rounded-3xl">
                            <Target className="w-8 h-8 text-rose-500 mb-4" />
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">The Critic</h3>
                            <p className="text-zinc-600">A secondary LLM prompt designed exclusively to find flaws in the Analyzer's logic.</p>
                        </div>
                        <div className="col-span-1 bg-amber-50/50 border border-amber-100 p-8 rounded-3xl">
                            <Zap className="w-8 h-8 text-amber-500 mb-4" />
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">Server-Sent Events</h3>
                            <p className="text-zinc-600">Streaming text generation via Next.js Edge Functions to keep the UI instantly responsive.</p>
                        </div>
                        <div className="col-span-1 md:col-span-2 bg-emerald-50/50 border border-emerald-100 p-8 rounded-3xl">
                            <Database className="w-8 h-8 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">Supabase Analytics</h3>
                            <p className="text-zinc-600">Every analyzed JD is stored securely in PostgreSQL to help me track inbound demand.</p>
                        </div>
                    </div>
                </motion.section>

                {/* 4. Designing for AI Failure */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-zinc-900">
                        Designing for AI Failure
                    </h2>
                    <div className="prose prose-zinc prose-lg max-w-3xl mb-12">
                        <p>
                            AI is probabilistic—meaning hallucinations and edge cases are inevitable. I design for failure states first.
                            The Engine includes a strict <strong>Confidence Threshold (95%)</strong>. If the Critic agent detects ambiguity or the score falls below the threshold, the system gracefully degrades to a Human-in-the-Loop (HITL) fallback: <em>"This JD is complex. Let's schedule a call to clarify."</em>
                        </p>
                    </div>
                </motion.section>

                {/* 5. The Data Flywheel */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-zinc-900">
                        The Data Flywheel
                    </h2>
                    <div className="prose prose-zinc prose-lg max-w-3xl">
                        <p>
                            A true enterprise AI product gets better with use. I built a data architecture that captures implicit and explicit feedback. When recruiters provide a "Thumbs Up/Down" on the generated match synthesis, that signal is written back to Supabase. This creates a <strong>Data Flywheel</strong>, allowing me to fine-tune the system's accuracy over time while simultaneously tracking market demand for my skills.
                        </p>
                        <p className="text-sm text-zinc-500 italic mt-4">
                            * Note on Multimodal Readiness: The entire agentic backend is decoupled from the Next.js frontend, meaning this engine is ready to plug into Voice (e.g. OpenAI Realtime API) or ambient interfaces when the time comes.
                        </p>
                    </div>
                </motion.section>

                {/* 6. Outcome */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="bg-zinc-900 rounded-3xl p-12 text-center relative overflow-hidden border border-zinc-800">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
                        
                        <Bot className="w-12 h-12 text-indigo-400 mx-auto mb-6 relative z-10" />
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 text-white relative z-10">
                            A Self-Qualifying Portfolio
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 relative z-10">
                            The portfolio is no longer just a static document. It is a live SaaS tool that actively qualifies incoming opportunities, saving time for both recruiters and myself.
                        </p>
                    </div>
                </motion.section>

            </div>
        </div>
    );
}
