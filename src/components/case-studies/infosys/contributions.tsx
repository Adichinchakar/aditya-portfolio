"use client";

import React from "react";
import { motion } from "@/lib/motion";

const contributions = [
    "Designed UX for GenAI-powered rubric generation engines — reducing manual evaluation from hours to minutes",
    "Led design system expansion for Imagine Learning — adding AI-specific interaction patterns and states",
    "Created end-to-end flows for adaptive content recommendation systems",
    "Ran design sprints with cross-functional teams (ML engineers, curriculum designers, product managers)",
    "Established accessibility standards (WCAG 2.2) across all AI-facing features",
    "Delivered high-fidelity prototypes for executive stakeholder reviews",
];

export function Contributions() {
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
    );
}
