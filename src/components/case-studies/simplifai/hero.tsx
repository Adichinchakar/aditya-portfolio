import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowLeft, Clock, Users } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

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
            className={`group relative overflow-hidden rounded-[1.5rem] bg-white/40 backdrop-blur-xl border border-white/40 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] ${hoverBorder}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[1.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${spotlight}, transparent 80%)`,
                }}
            />
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-zinc-100/60 group-hover:bg-white/80 transition-colors">
                        <Icon className="w-5 h-5 text-zinc-600" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
                </div>
                <div className="text-4xl font-black text-zinc-900 mb-1 tracking-tighter">{value}</div>
                <div className="text-sm text-zinc-500 font-medium">{sub}</div>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50 min-h-[90vh] flex flex-col justify-center">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/6 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link href="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-12 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold tracking-wide">Back to Case Studies</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                    >
                        {/* Pill badge — fixed text color for light background */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 text-sm font-semibold mb-8 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                            </span>
                            Product Strategy · Case Study
                        </div>

                        {/* Upgraded heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 mb-8 leading-[1.05]">
                            Accelerating Time-to-Value by 40%:
                            <br />
                            <span className="text-zinc-500 font-bold">
                                Re-engineering the AI Workflow.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-500 max-w-lg mb-10 leading-relaxed font-medium">
                            Redesigning the core automation engine to enable non-technical teams to build complex AI agents without writing code.
                        </p>
                    </motion.div>

                    {/* Right Side: Metrics Dashboard — glassmorphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                    >
                        <div className="relative rounded-[2rem] border border-white/50 bg-white/30 backdrop-blur-xl overflow-hidden p-2 shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                            <div className="bg-zinc-50/60 rounded-[1.5rem] p-8 border border-white/60 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-zinc-900 font-bold tracking-tight">Impact Overview</h3>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400/40" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <MetricCard
                                        icon={Clock}
                                        label="Efficiency"
                                        value="40%"
                                        sub="Reduction in onboarding time"
                                        spotlight="rgba(168, 85, 247, 0.12)"
                                        hoverBorder="group-hover:border-purple-500/30"
                                    />
                                    <MetricCard
                                        icon={Users}
                                        label="Adoption"
                                        value="73%"
                                        sub="Increase in user adoption"
                                        spotlight="rgba(59, 130, 246, 0.12)"
                                        hoverBorder="group-hover:border-blue-500/30"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow behind dashboard */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] pointer-events-none -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
