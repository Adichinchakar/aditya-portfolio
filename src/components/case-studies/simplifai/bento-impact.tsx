"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Zap, Users, Smile, Code, Trophy, ShieldCheck } from "lucide-react";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

const cards = [
    {
        id: 1,
        icon: Zap,
        label: "Time-to-Market",
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
        spotlight: "rgba(59, 130, 246, 0.1)",
        hoverBorder: "hover:border-blue-300/60",
        metric: "42%",
        metricSub: "Faster Product Iteration Cycles",
        note: "Speeding up dev means significantly lower R&D burn.",
        decorIcon: Zap,
    },
    {
        id: 2,
        icon: Users,
        label: "Validation",
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-500",
        spotlight: "rgba(168, 85, 247, 0.1)",
        hoverBorder: "hover:border-purple-300/60",
        metric: "100+",
        metricSub: "User Studies Conducted",
        note: "Validated decisions reduce post-launch rework.",
        decorIcon: Users,
    },
    {
        id: 3,
        icon: Smile,
        label: "Client Satisfaction",
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-500",
        spotlight: "rgba(245, 158, 11, 0.1)",
        hoverBorder: "hover:border-amber-300/60",
        metric: "20%",
        metricSub: "Improvement in CSAT Scores",
        note: "Happier users directly translated to contract renewals.",
        decorIcon: Smile,
    },
];

function BentoCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/60 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-all duration-500",
                card.hoverBorder
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${card.spotlight}, transparent 80%)`,
                }}
            />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className={cn("p-3 rounded-2xl ring-1 ring-white/50", card.iconBg)}>
                        <card.icon className={cn("w-5 h-5", card.iconColor)} />
                    </div>
                    <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs">{card.label}</span>
                </div>

                <h3 className="text-6xl md:text-7xl font-black text-zinc-900 mb-2 tracking-tighter">
                    {card.metric}
                </h3>
                <p className="text-xl text-zinc-700 font-semibold mb-8">
                    {card.metricSub}
                </p>

                <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 inline-flex items-start gap-2 max-w-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0" />
                    <p className="text-zinc-600 text-sm font-medium">
                        <span className="text-zinc-900 font-bold">So What?</span>{" "}
                        {card.note}
                    </p>
                </div>
            </div>

            {/* Decorative background icon */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                <card.decorIcon className="w-64 h-64" />
            </div>
        </motion.div>
    );
}

export function BentoImpact() {
    return (
        <section className="py-32 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/4 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 mb-8 backdrop-blur-md shadow-sm"
                    >
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        Measurable Impact
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" as const, stiffness: 260, damping: 20, delay: 0.05 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900"
                    >
                        Results That Speak
                    </motion.h2>
                </div>

                {/* 3 equal metric cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {cards.map((card, i) => (
                        <BentoCard key={card.id} card={card} delay={i * 0.1} />
                    ))}
                </div>

                {/* Full-width Design System card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/60 p-8 relative overflow-hidden group hover:border-emerald-300/60 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl bg-emerald-500/10 ring-1 ring-white/50">
                                    <Code className="w-5 h-5 text-emerald-500" />
                                </div>
                                <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Scalability</span>
                            </div>
                            <h3 className="text-3xl font-black tracking-tighter text-zinc-900 mb-4">
                                Custom Design System
                            </h3>
                            <div className="p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 inline-flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                <p className="text-zinc-600 text-sm font-medium">
                                    <span className="text-zinc-900 font-bold">So What?</span>{" "}
                                    Unified UI reduces technical debt & bugs.
                                </p>
                            </div>
                        </div>

                        {/* Code snippet */}
                        <div className="rounded-2xl bg-[#0d1117] border border-zinc-800/80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.15)]">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-zinc-800/80">
                                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                <span className="ml-2 text-xs text-zinc-500 font-mono">theme.ts</span>
                            </div>
                            <div className="p-5 font-mono text-xs leading-6">
                                <p><span className="text-purple-400">export const </span><span className="text-yellow-300">theme</span><span className="text-zinc-300"> = {"{"}</span></p>
                                <p className="pl-4"><span className="text-blue-400">colors</span><span className="text-zinc-300">: {"{"}</span></p>
                                <p className="pl-8"><span className="text-blue-300">primary</span><span className="text-zinc-400">: </span><span className="text-green-400">"#6366f1"</span><span className="text-zinc-400">,</span></p>
                                <p className="pl-8"><span className="text-blue-300">accent</span><span className="text-zinc-400">: </span><span className="text-green-400">"#8b5cf6"</span><span className="text-zinc-400">,</span></p>
                                <p className="pl-4"><span className="text-zinc-300">{"}"}</span><span className="text-zinc-400">,</span></p>
                                <p className="pl-4"><span className="text-blue-400">spacing</span><span className="text-zinc-300">: {"{"}</span></p>
                                <p className="pl-8"><span className="text-blue-300">sm</span><span className="text-zinc-400">: </span><span className="text-orange-400">4</span><span className="text-zinc-600">, // 0.25rem</span></p>
                                <p className="pl-8"><span className="text-blue-300">md</span><span className="text-zinc-400">: </span><span className="text-orange-400">8</span><span className="text-zinc-600">, // 0.5rem</span></p>
                                <p className="pl-4"><span className="text-zinc-300">{"}"}</span></p>
                                <p><span className="text-zinc-300">{"}"}</span></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
