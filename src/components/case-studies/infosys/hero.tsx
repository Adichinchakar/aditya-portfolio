"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "@/lib/motion";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { MouseEvent } from "react";

function MetricCard({
    value,
    label,
    sub,
}: {
    value: string;
    label: string;
    sub?: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-[1.25rem] bg-white/5 border border-white/10 p-5 transition-all duration-300 hover:border-indigo-500/30"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(99,102,241,0.15), transparent 80%)`,
                }}
                aria-hidden="true"
            />
            <div className="relative z-10">
                <div className="text-3xl font-black text-white mb-1 tracking-tighter">{value}</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{label}</div>
                {sub && <div className="text-xs text-zinc-400 mt-1">{sub}</div>}
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-950">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-2 py-1 -ml-2"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span className="text-sm font-semibold tracking-wide">Back to Case Studies</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8 backdrop-blur-md">
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                            </span>
                            Enterprise · Fortune 500 · Senior Product Designer
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
                            Infosys:<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                GenAI for EdTech
                            </span>
                            <br />
                            <span className="text-zinc-400 font-bold text-4xl sm:text-5xl md:text-6xl">
                                teachers trust.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-3 leading-relaxed font-medium">
                            Designing AI tooling for K-12 education — where the hard part isn&rsquo;t the model, it&rsquo;s getting teachers to trust its output enough to act on it. Shipped inside a Fortune Global 500 delivery org, with stakeholders at every layer.
                        </p>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                <p className="text-sm text-zinc-300 leading-relaxed"><span className="font-bold text-white">GenAI for EdTech</span> — AI rubric engines and adaptive recommendation UX for K-12 education. The flagship work on this page: trust, latency, and a design system across five teams.</p>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                                <p className="text-sm text-zinc-300 leading-relaxed"><span className="font-bold text-white">Enterprise talent platform</span> — a second engagement: an internal marketplace matching a global workforce to projects across delivery units, geographies, and skill domains.</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-bold tracking-wide border border-white/5">
                                Senior Product Designer
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-xs font-semibold border border-white/5">
                                2023 – Present
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-xs font-semibold border border-white/5">
                                Infosys · Fortune Global 500
                            </span>
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                            <Lock className="w-4 h-4 text-zinc-400 shrink-0" aria-hidden="true" />
                            <p className="text-sm text-zinc-300 font-medium">
                                Selected work shown. I&rsquo;m happy to walk through the deeper process and artifacts on a call.
                            </p>
                        </div>
                    </motion.div>

                    {/* Metrics dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                        aria-label="Key outcomes"
                    >
                        <div className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden p-2 shadow-[0_20px_60px_rgb(0,0,0,0.5)]">
                            <div className="bg-zinc-900/60 rounded-[1.5rem] p-6 border border-white/5 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-white font-bold tracking-tight text-sm">Key Outcomes</h2>
                                    <div className="flex gap-2" aria-hidden="true">
                                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                                        <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <MetricCard value="~70%" label="Faster Assessment" sub="vs. manual baseline" />
                                    <MetricCard value="3" label="AI Tools Shipped" sub="In production" />
                                    <MetricCard value="0" label="Design-System Forks" sub="across 5 product teams" />
                                    <MetricCard value="≈2×" label="AI-Output Acceptance" sub="usability testing · directional" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-600/20 rounded-full blur-[60px] pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
