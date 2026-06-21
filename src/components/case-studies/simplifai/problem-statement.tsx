"use client";

import { motion } from "@/lib/motion";
import { AlertTriangle, Layers, EyeOff, Clock, Lightbulb, ArrowRight } from "lucide-react";

const problems = [
    {
        id: "manual",
        icon: Clock,
        color: "text-red-500",
        bg: "bg-red-500/8",
        border: "border-red-500/20",
        label: "Manual & Error-Prone",
        description: "Teams spent hours on repetitive data entry, creating bottlenecks and errors.",
    },
    {
        id: "fragmented",
        icon: Layers,
        color: "text-amber-500",
        bg: "bg-amber-500/8",
        border: "border-amber-500/20",
        label: "Fragmented Tools",
        description: "5+ disconnected systems with no unified workflow — every handoff was a risk.",
    },
    {
        id: "opaque",
        icon: EyeOff,
        color: "text-orange-500",
        bg: "bg-orange-500/8",
        border: "border-orange-500/20",
        label: "No Self-Service",
        description: "Every small change required engineering time, killing team velocity.",
    },
];

export function ProblemStatement() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-red-500/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-base text-zinc-600 font-medium mb-8 max-w-2xl"
                >
                    An invoice automation fails overnight. The ops manager who relies on it can&apos;t read the workflow, can&apos;t see what broke, and can&apos;t fix it without filing a ticket and waiting three days. That was Simplifai, an Oslo-based AI automation company, when I joined as their first and only designer.
                </motion.p>

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2.5 mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/8 border border-red-500/20 text-red-800 text-sm font-semibold backdrop-blur-md">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        The Challenge
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4 max-w-3xl leading-[1.08]"
                >
                    Enterprise teams lost{" "}
                    <span className="text-red-500">60% of their time</span>{" "}
                    to broken, fragmented automation.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-zinc-600 font-medium mb-6 max-w-2xl"
                >
                    Simplifai needed a complete reimagination of its core workflow product —
                    turning a developer-only tool into a platform any operations team could own.
                </motion.p>

                {/* Before state callout */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="p-6 rounded-2xl bg-zinc-900 text-white mb-16 max-w-3xl"
                >
                    <p className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest mb-3">The Before State</p>
                    <p className="text-base text-zinc-200 leading-relaxed mb-4">
                        When I joined, building a basic automation workflow required a developer. The UI was built for engineers — ops managers, who would eventually own these workflows, couldn&apos;t read the interface without help. Routine change requests kept turning into support tickets, and that friction showed up most with enterprise clients.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <div className="text-center">
                            <p className="text-2xl font-black text-red-400">Recurring</p>
                            <p className="text-xs text-zinc-600 font-semibold">support tickets<br />for routine config changes</p>
                        </div>
                        <div className="w-px bg-zinc-700" />
                        <div className="text-center">
                            <p className="text-2xl font-black text-amber-400">Days</p>
                            <p className="text-xs text-zinc-600 font-semibold">for an ops team to onboard<br />to a new automation workflow</p>
                        </div>
                        <div className="w-px bg-zinc-700" />
                        <div className="text-center">
                            <p className="text-2xl font-black text-zinc-300">0</p>
                            <p className="text-xs text-zinc-600 font-semibold">self-service actions<br />available to non-technical users</p>
                        </div>
                    </div>
                </motion.div>

                {/* Problem Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={problem.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                            className={`rounded-[1.75rem] border bg-white/60 backdrop-blur-xl p-7 flex flex-col gap-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] ${problem.border}`}
                        >
                            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${problem.bg} ring-1 ring-white/60`}>
                                <problem.icon className={`w-5 h-5 ${problem.color}`} />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-zinc-900 mb-2">{problem.label}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed font-medium">{problem.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Insight Pivot */}
                <div className="mt-16 bg-white p-8 md:p-12 rounded-[2rem] border border-zinc-200 shadow-xl shadow-zinc-200/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="flex-1">
                            <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-4">The Surface Problem</p>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">"The UI is too complicated for non-engineers."</h3>
                            <p className="text-zinc-600 leading-relaxed text-sm">
                                The immediate assumption was that we just needed to simplify the interface—bigger buttons, fewer options, and better tooltips. But that wouldn't solve the core bottleneck: operations teams still had to translate their business logic into a structure that the system (and the developers) could understand.
                            </p>
                        </div>
                        
                        <div className="hidden md:flex items-center justify-center pt-8">
                            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 border-4 border-white shadow-sm">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex md:hidden items-center justify-center w-full my-[-1rem]">
                            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 border-4 border-white shadow-sm">
                                <ArrowRight className="w-4 h-4 rotate-90" />
                            </div>
                        </div>

                        <div className="flex-1 bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="w-5 h-5 text-purple-600" />
                                <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">The Deep Insight</p>
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">The mental model was broken.</h3>
                            <p className="text-zinc-700 leading-relaxed text-sm">
                                Simplifying a developer tool wouldn&apos;t help if it still asked business users to think like developers. The system had to map to how operations teams already plan their work on whiteboards and flowcharts, not to how code executes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
