import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "@/lib/motion";
import { PieChart, ShieldAlert, Zap, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { AfterDashboard } from "./nexus-ui";

function MetricCard({
    icon: Icon,
    label,
    value,
    sub,
    spotlight,
    hoverBorder,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
    sub: string;
    spotlight: string;
    hoverBorder: string;
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
            className={`group relative overflow-hidden rounded-[1.25rem] bg-white/5 border border-white/10 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] ${hoverBorder}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${spotlight}, transparent 80%)`,
                }}
                aria-hidden="true"
            />
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                        <Icon className="w-4 h-4 text-zinc-300" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest" aria-hidden="true">{label}</span>
                </div>
                <div className="text-3xl font-black text-white mb-0.5 tracking-tighter">{value}</div>
                <div className="text-xs text-zinc-400 font-medium">{sub}</div>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-950">
            {/* Ambient FinTech Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded-md px-2 py-1 -ml-2"
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
                        {/* Pill badge */}
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-8 backdrop-blur-md"
                            aria-label="Case study type: Strategy Case Study · Conceptual"
                        >
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                            </span>
                            UX Audit · Speculative Design · 4 min read
                        </div>

                        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300 font-medium mb-6">
                            ⚡ Strategic deep-dive: This is an unsolicited UX audit and architectural proposal for Tier-1 Neobanks. No production deployment. Metrics shown are strategic targets, not validated outcomes.
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[1.05]">
                            Nexus:<br />
                            <span className="text-zinc-400 font-bold">
                                Intent-Led FinTech.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-6 leading-relaxed font-medium">
                            A heuristic audit of Tier-1 Neobanks. The core finding: horizontal feature expansion increases cognitive load on primary financial flows — and that's a design problem with a design solution.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-bold tracking-wide border border-white/5">
                                Principal Product Designer
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-400 text-xs font-semibold border border-white/5">
                                2024 Strategy Case
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Side: Metrics / Impact Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                        aria-label="Strategic KPI Targets"
                    >
                        <div className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden p-2 shadow-[0_20px_60px_rgb(0,0,0,0.5)]">
                            <div className="bg-zinc-900/60 rounded-[1.5rem] p-6 border border-white/5 backdrop-blur-sm">
                                <div className="pointer-events-none origin-top overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-zinc-950 w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[400px] xl:h-[450px] relative">
                                    <div className="absolute top-0 left-0 w-[900px] origin-top-left scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.55] xl:scale-[0.65]">
                                        <AfterDashboard />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/30 rounded-full blur-[60px] pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
