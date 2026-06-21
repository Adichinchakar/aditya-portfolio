"use client";

import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "@/lib/motion";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TldrStat {
    value: string;
    label: string;
}

export interface CaseStudyTldrProps {
    /** The single sharpest sentence of the study. Large type, top of card. */
    hook: string;
    /** Three outcome stats. Big number + short label. */
    stats: TldrStat[];
    role: string;
    timeline: string;
    /** Reuse the readTime value from src/data/projects.ts */
    readTime: string;
    /** Tailwind text color for stat numbers, e.g. "text-emerald-600". Must pass AA on the card bg. */
    accentClass?: string;
    /** rgba() string for the cursor spotlight, e.g. "rgba(16,185,129,0.10)" */
    spotlight?: string;
    /** "light" for light pages, "dark" for dark-themed studies (e.g. Infosys). */
    variant?: "light" | "dark";
}

export function CaseStudyTldr({
    hook,
    stats,
    role,
    timeline,
    readTime,
    accentClass,
    spotlight = "rgba(0,0,0,0.05)",
    variant = "light",
}: CaseStudyTldrProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const dark = variant === "dark";
    const t = {
        section: dark ? "bg-zinc-950" : "bg-white",
        card: dark
            ? "bg-zinc-900 border-white/10 shadow-[0_4px_24px_rgb(0,0,0,0.4)]"
            : "bg-white border-zinc-200/80 shadow-[0_4px_24px_rgb(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.12)]",
        label: dark ? "text-zinc-500" : "text-zinc-400",
        hook: dark ? "text-white" : "text-zinc-900",
        accent: accentClass ?? (dark ? "text-indigo-400" : "text-zinc-900"),
        statLabel: dark ? "text-zinc-400" : "text-zinc-500",
        divider: dark ? "border-white/10" : "border-zinc-100",
        metaText: dark ? "text-zinc-400" : "text-zinc-500",
        metaRole: dark ? "text-zinc-200" : "text-zinc-700",
        metaDot: dark ? "text-zinc-700" : "text-zinc-300",
    };

    return (
        <section className={cn("px-6 pt-16 pb-4", t.section)}>
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "group relative overflow-hidden rounded-[2rem] border p-8 sm:p-10 transition-all duration-500",
                        t.card
                    )}
                >
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${spotlight}, transparent 80%)`,
                        }}
                    />

                    <div className="relative z-10">
                        <span className={cn("text-xs font-mono font-bold uppercase tracking-[0.2em]", t.label)}>
                            The short version
                        </span>

                        <p className={cn("mt-4 text-2xl sm:text-3xl font-semibold leading-snug tracking-tight max-w-3xl", t.hook)}>
                            {hook}
                        </p>

                        <div className={cn("mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t pt-8", t.divider)}>
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className={cn("text-3xl font-bold tracking-tight", t.accent)}>
                                        {stat.value}
                                    </div>
                                    <div className={cn("mt-1 text-sm", t.statLabel)}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className={cn("mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm", t.metaText)}>
                            <span className={cn("font-semibold", t.metaRole)}>{role}</span>
                            <span aria-hidden className={t.metaDot}>·</span>
                            <span>{timeline}</span>
                            <span aria-hidden className={t.metaDot}>·</span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {readTime}
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
