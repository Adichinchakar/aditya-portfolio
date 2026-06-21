import React from "react";
import { motion } from "@/lib/motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const beforePains = [
    "Inconsistent spacing — each team used different scale",
    "Duplicated components across 5+ product files",
    "Zero shared design tokens or color variables",
    "~14 days average to deliver a new component",
    "Dev handoff required manual re-specification every sprint",
];

const afterGains = [
    "Single source of truth — one Figma library",
    "Semantic token layer: color, spacing, radius, type",
    "42% faster product iteration cycles",
    "Token-driven Figma → React sync via Style Dictionary + auto-generated PRs",
    "Design and engineering speaking the same language",
];

const painByNumbers = [
    { value: "5+", label: "Product teams with conflicting patterns" },
    { value: "3", label: "Separate design files with no shared library" },
    { value: "0", label: "Shared components pre-system" },
    { value: "~14d", label: "Avg. time to deliver one new component" },
];

export function ProblemContext() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">
                        01 — Before State
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Five Teams, Five Different Buttons.
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        The same button existed five ways across five products. Every team rebuilt components from scratch, nothing shared a token, and each new feature widened the gap. The cracks were in the UI, but the cause was structural.
                    </p>
                </motion.div>

                {/* Pain by Numbers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {painByNumbers.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-6 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 text-center"
                        >
                            <p className="text-3xl font-black text-zinc-900 mb-1">{stat.value}</p>
                            <p className="text-xs text-zinc-500 leading-snug">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Before / After */}
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-red-50/60 border border-red-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Before</span>
                        </div>
                        <ul className="space-y-3">
                            {beforePains.map((pain, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                                    {pain}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-emerald-50/60 border border-emerald-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">After</span>
                        </div>
                        <ul className="space-y-3">
                            {afterGains.map((gain, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-700">
                                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                                    {gain}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
