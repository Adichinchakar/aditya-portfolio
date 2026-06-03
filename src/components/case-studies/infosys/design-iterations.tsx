"use client";

import React from "react";
import { motion } from "@/lib/motion";

export function DesignIterations() {
    return (
        <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                        04 — Design Iterations
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        How the AI Confidence Signal Evolved
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                        3 rounds of internal testing with teachers before the confidence signal shipped. Each round invalidated a prior assumption.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {[
                        {
                            round: "Round 1",
                            label: "Raw percentage (68% confident)",
                            finding: "Teachers over-trusted 80%+ scores as guarantees; dismissed 60%- scores entirely. Binary thinking, not probabilistic.",
                            decision: "Drop percentages. Switch to qualitative signals.",
                            color: "border-red-500/20",
                            accent: "text-red-400",
                        },
                        {
                            round: "Round 2",
                            label: "Traffic-light system (Red / Amber / Green)",
                            finding: "Green triggered rubber-stamping — teachers stopped reading the rubric text. 'Green means approve' was too automatic.",
                            decision: "Remove green. Reframe as signal, not verdict.",
                            color: "border-amber-500/20",
                            accent: "text-amber-400",
                        },
                        {
                            round: "Round 3",
                            label: "3-tier signal (Verified / Suggested / Uncertain)",
                            finding: "Teachers engaged differently at each tier — Verified rubrics were approved 2× faster; Uncertain triggered review. Acceptance rate: 41% → 74%.",
                            decision: "Ship this version. Anchored in pedagogical action, not probability.",
                            color: "border-emerald-500/20",
                            accent: "text-emerald-400",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-6 rounded-2xl bg-zinc-950 border ${item.color} grid md:grid-cols-3 gap-4`}
                        >
                            <div>
                                <div className={`text-xs font-bold uppercase tracking-widest ${item.accent} mb-1`}>{item.round}</div>
                                <div className="text-sm font-semibold text-zinc-200">{item.label}</div>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-zinc-600 uppercase tracking-wider mb-1">Finding</div>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.finding}</p>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-zinc-600 uppercase tracking-wider mb-1">Decision</div>
                                <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.decision}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
