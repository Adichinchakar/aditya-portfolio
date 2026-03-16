"use client";

import React from "react";
import { Hero } from "@/components/case-studies/infosys/hero";
import { motion } from "framer-motion";
import { Lock, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const outcomes = [
    {
        value: "70%",
        label: "Reduction in assessment time",
        desc: "AI-generated rubric engine replaced manual evaluation workflows across 3 product lines.",
    },
    {
        value: "5+",
        label: "Product teams served",
        desc: "Unified design system components adopted across Imagine Learning's product portfolio.",
    },
    {
        value: "3",
        label: "AI tools shipped to production",
        desc: "Including GenAI rubric generators, adaptive recommendation engine UX, and feedback tools.",
    },
];

const contributions = [
    "Designed UX for GenAI-powered rubric generation engines — reducing manual evaluation from hours to minutes",
    "Led design system expansion for Imagine Learning — adding AI-specific interaction patterns and states",
    "Created end-to-end flows for adaptive content recommendation systems",
    "Ran design sprints with cross-functional teams (ML engineers, curriculum designers, product managers)",
    "Established accessibility standards (WCAG 2.2) across all AI-facing features",
    "Delivered high-fidelity prototypes for executive stakeholder reviews",
];

export default function InfosysPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-indigo-500/30">
            <Hero />

            {/* Scope & NDA */}
            <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06),transparent_60%)]" aria-hidden="true" />
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-6 p-8 rounded-[2rem] bg-amber-500/10 border border-amber-500/20"
                    >
                        <Lock className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-amber-300 mb-3">Scope & NDA</h2>
                            <p className="text-zinc-300 leading-relaxed">
                                This work is covered under a Non-Disclosure Agreement with Infosys and Imagine Learning.
                                Key outcomes and high-level contributions are publicly shareable — design artifacts,
                                full case study documentation, and detailed process notes are available for sharing
                                in a confidential context. Contact me directly to schedule a walkthrough.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Outcomes */}
            <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            01 — Outcomes
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            What We Shipped
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {outcomes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-zinc-900 border border-white/10 hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="text-5xl font-black text-indigo-400 mb-3 tracking-tighter">{item.value}</div>
                                <h3 className="text-base font-bold text-white mb-2">{item.label}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I Did */}
            <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            02 — Contributions
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            What I Did
                        </h2>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {contributions.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/50 border border-white/5">
                                <span className="text-indigo-400 font-bold text-sm shrink-0 mt-0.5">0{i + 1}</span>
                                <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </section>

            {/* Hard Problems */}
            <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.06),transparent_60%)]" aria-hidden="true" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            02.5 — Design Challenges
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            The Hard Problems
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                            Three design tensions that defined the engagement — shareable without violating NDA.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                challenge: "AI Confidence ≠ User Trust",
                                context: "The rubric engine outputs confidence scores, but showing raw percentages caused teachers to either over-trust (80% feels like a guarantee) or dismiss (60% feels unreliable). Designed a 3-tier signal system (Verified / Suggested / Uncertain) that anchored decisions in pedagogical context, not probability.",
                                outcome: "Teacher acceptance rate increased from 41% to 74% in A/B testing.",
                                borderColor: "border-indigo-500/20",
                                accentColor: "text-indigo-400",
                            },
                            {
                                challenge: "GenAI Latency UX",
                                context: "Rubric generation takes 3-8 seconds — far longer than users expect from 'AI'. A generic spinner caused drop-off. Designed a progressive reveal: skeleton rubric structure appears immediately, then cells populate sequentially, creating a perception of real-time generation.",
                                outcome: "Drop-off during generation reduced by 55%.",
                                borderColor: "border-violet-500/20",
                                accentColor: "text-violet-400",
                            },
                            {
                                challenge: "One system, five teams",
                                context: "Five product teams had divergent component needs — elementary literacy, middle-school math, special ed, teacher dashboards, admin tools. Designed a token layer with 4 semantic contexts (learner, educator, admin, assessment) that let the same components adapt across surfaces.",
                                outcome: "Unified system with zero hard forks across 5 products.",
                                borderColor: "border-blue-500/20",
                                accentColor: "text-blue-400",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-[2rem] bg-zinc-900 border ${item.borderColor} flex flex-col gap-6`}
                            >
                                <h3 className={`text-base font-bold ${item.accentColor}`}>{item.challenge}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{item.context}</p>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest mb-1">Outcome</p>
                                    <p className="text-sm text-zinc-300 font-medium">{item.outcome}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Artifacts */}
            <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            03 — Work Samples
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            The Product We Built
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                            High-fidelity screens from the AI tooling suite. Full documentation available under NDA.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {/* Screen 1 — Rubric Generator */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-zinc-900">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 font-mono max-w-xs mx-auto text-center">
                                            imagine.infosys.com/rubric-generator
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                                        AI Rubric Generator
                                    </span>
                                </div>
                                <Image
                                    src="/images/infosys-rubric-generator.png"
                                    alt="AI Rubric Generator interface showing learning objective input, generated rubric table with criteria and performance levels, and AI suggestions panel"
                                    width={1920}
                                    height={944}
                                    className="w-full h-auto block"
                                    quality={95}
                                />
                            </div>
                            <p className="text-sm text-zinc-500 mt-3 ml-1">
                                AI Rubric Generator — generates assessment criteria from a learning objective in seconds, with contextual AI suggestions.
                            </p>
                        </motion.div>

                        {/* Screen 2 — Recommendations Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        >
                            <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-zinc-900">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 font-mono max-w-xs mx-auto text-center">
                                            imagine.infosys.com/recommendations
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                                        Adaptive Recommendations
                                    </span>
                                </div>
                                <Image
                                    src="/images/infosys-recommendations.png"
                                    alt="Student recommendations dashboard showing progress tracking, AI-identified skill gaps, and adaptive content recommendations per student"
                                    width={1920}
                                    height={944}
                                    className="w-full h-auto block"
                                    quality={95}
                                />
                            </div>
                            <p className="text-sm text-zinc-500 mt-3 ml-1">
                                Adaptive Recommendation Engine — surfaces personalised content per student based on ML-identified skill gaps.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-zinc-900">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                            Want to see the full case study?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                            I&apos;m happy to walk you through the work, process, and outcomes in a confidential setting.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:adichinchakar@gmail.com"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg"
                            >
                                <Mail className="w-4 h-4" />
                                Contact for Full Walkthrough
                            </a>
                            <a
                                href="https://linkedin.com/in/adityachinchakar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10"
                            >
                                <Linkedin className="w-4 h-4" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
