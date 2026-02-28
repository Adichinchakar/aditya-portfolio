"use client";

import React from "react";
import { Clock, Layout, Wrench, BookOpen } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FlowPreview } from "@/components/case-studies/simplifai/flow-preview";
import { BentoImpact } from "@/components/case-studies/simplifai/bento-impact";
import { UserPersonaInteractive } from "@/components/case-studies/simplifai/user-persona-interactive";
import { IATree } from "@/components/case-studies/simplifai/ia-tree";
import { Hero } from "@/components/case-studies/simplifai/hero";
import { ProblemStatement } from "@/components/case-studies/simplifai/problem-statement";
import { DesignProcess } from "@/components/case-studies/simplifai/design-process";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

const glanceCards = [
    {
        id: "role",
        icon: Layout,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-500",
        spotlight: "rgba(168, 85, 247, 0.10)",
        hoverBorder: "hover:border-purple-300/50",
        label: "My Role",
        content: (
            <p className="text-lg font-semibold text-zinc-900 leading-snug">
                Product Design & UX Lead — driving research, IA, interaction design, and usability testing to shape product strategy.
            </p>
        ),
    },
    {
        id: "timeline",
        icon: Clock,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
        spotlight: "rgba(59, 130, 246, 0.10)",
        hoverBorder: "hover:border-blue-300/50",
        label: "Timeline",
        content: (
            <>
                <p className="text-lg font-semibold text-zinc-900">2 Years</p>
                <p className="text-zinc-400 text-sm font-medium mt-1">2021 – 2023</p>
            </>
        ),
    },
    {
        id: "tools",
        icon: Wrench,
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
        spotlight: "rgba(16, 185, 129, 0.10)",
        hoverBorder: "hover:border-emerald-300/50",
        label: "Tools",
        content: (
            <div className="flex flex-wrap gap-2">
                {["Figma", "Framer", "Maze (usability tests)", "Miro"].map((tool) => (
                    <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full bg-white/70 border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        ),
    },
];

function GlanceCard({ card }: { card: typeof glanceCards[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/60 p-8 flex flex-col gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500",
                card.hoverBorder
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${card.spotlight}, transparent 80%)`,
                }}
            />
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center ring-1 ring-white/50 shadow-sm backdrop-blur-sm group-hover:scale-110 transition-transform duration-300", card.iconBg)}>
                <card.icon className={cn("w-6 h-6", card.iconColor)} />
            </div>
            <div className="relative z-10">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">{card.label}</h4>
                {card.content}
            </div>
        </motion.div>
    );
}

export default function SimplifaiPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-purple-500/30">
            {/* Hero */}
            <Hero />

            {/* Problem Statement */}
            <ProblemStatement />

            {/* At a Glance */}
            <section className="px-6 pb-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 backdrop-blur-md shadow-sm"
                        >
                            <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                            At a Glance
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {glanceCards.map((card) => (
                            <GlanceCard key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* User Persona & Pain Points */}
            <UserPersonaInteractive />

            {/* Design Process */}
            <DesignProcess />

            {/* Information Architecture */}
            <IATree />

            {/* Flow Builder */}
            <FlowPreview />

            {/* Results */}
            <BentoImpact />
        </div>
    );
}
