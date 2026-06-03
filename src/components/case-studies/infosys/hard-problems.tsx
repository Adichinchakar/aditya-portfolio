"use client";

import React from "react";
import { motion } from "@/lib/motion";

export function HardProblems() {
    return (
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
                        03 — Design Challenges
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        The Hard Problems
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                        Three design tensions from the Imagine Learning engagement — shareable without violating NDA.
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
                                <p className="text-xs text-zinc-600 font-semibold uppercase tracking-widest mb-1">Outcome</p>
                                <p className="text-sm text-zinc-300 font-medium">{item.outcome}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
