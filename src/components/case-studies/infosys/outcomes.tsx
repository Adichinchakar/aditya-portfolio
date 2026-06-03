"use client";

import React from "react";
import { motion } from "@/lib/motion";

const outcomes = [
    {
        value: "70%",
        label: "Reduction in assessment time",
        desc: "AI rubric engine vs. manual baseline (time-on-task study, n=28 teachers, pre/post). Specific data available under NDA.",
    },
    {
        value: "41%→74%",
        label: "Teacher acceptance rate",
        desc: "A/B test on confidence signal design — shifting from raw percentages to a 3-tier signal (Verified / Suggested / Uncertain). n=84 sessions, Q3 2024.",
    },
    {
        value: "55%",
        label: "Drop-off reduction during AI generation",
        desc: "Progressive reveal pattern (skeleton → sequential cell population) vs. generic spinner. Eliminated the perception of waiting.",
    },
    {
        value: "3",
        label: "AI tools shipped to production",
        desc: "Including GenAI rubric generators, adaptive recommendation engine UX, and feedback tools.",
    },
    {
        value: "0",
        label: "Design system forks across 5 teams",
        desc: "Token layer with 4 semantic contexts (learner, educator, admin, assessment) — one system, zero hard forks.",
    },
];

export function Outcomes() {
    return (
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-zinc-900 border border-white/10 hover:border-indigo-500/30 transition-colors"
                        >
                            <div className="text-4xl font-black text-indigo-400 mb-3 tracking-tighter">{item.value}</div>
                            <h3 className="text-base font-bold text-white mb-2">{item.label}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <p className="text-xs text-zinc-700 mt-6">
                    * Assessment time reduction: time-on-task study, n=28 teachers, pre/post rubric workflow. Acceptance rate A/B test: n=84 sessions, Q3 2024. Drop-off reduction: progressive reveal vs. spinner, A/B, same cohort.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 rounded-2xl bg-indigo-500/8 border border-indigo-500/20"
                >
                    <p className="text-sm text-indigo-300 leading-relaxed">
                        <span className="font-bold text-indigo-200">Certificate of Recognition</span> — awarded by Jason Fournier, SVP, Imagine Learning (Infosys client). Recognised for AI tool delivery across the Imagine Learning product suite.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
