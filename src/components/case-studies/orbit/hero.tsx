"use client";

import React from "react";
import { motion } from "@/lib/motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OrgMapScreen } from "./orbit-ui";

export function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-[#0e0e0e] flex flex-col justify-center">
            {/* Atmospheric spatial glows */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 40%, rgba(208,188,255,0.12) 0%, rgba(14,14,14,0) 65%)" }}
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 85% 15%, rgba(192,193,255,0.07) 0%, rgba(14,14,14,0) 55%)" }}
                aria-hidden="true"
            />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/work"
                    className="group inline-flex items-center gap-2 text-[#adaaaa] hover:text-white mb-14 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d0bcff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e] rounded-md px-2 py-1 -ml-2"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span className="text-xs tracking-[0.2em] uppercase font-semibold">Case Studies</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                        className="flex flex-col gap-8"
                    >
                        {/* Status badge */}
                        <div
                            className="inline-flex items-center gap-3 self-start px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                            aria-label="Case study type: Spatial UX, Concept, Apple Vision Pro"
                        >
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d0bcff] opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d0bcff]" />
                            </span>
                            <span className="text-[10px] tracking-[0.2em] font-bold text-[#d0bcff] uppercase">
                                Spatial Design · Apple Vision Pro · 5 min read
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-3">
                            <h1
                                className="text-[72px] sm:text-[88px] md:text-[96px] leading-[0.9] tracking-[-0.04em] font-black text-white uppercase"
                                style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                            >
                                Orbit:
                            </h1>
                            <p
                                className="text-2xl md:text-3xl tracking-tight text-[#d0bcff]/60 font-bold"
                                style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                            >
                                Spatial onboarding for the enterprise.
                            </p>
                        </div>

                        {/* Body */}
                        <p className="text-lg text-[#adaaaa] leading-relaxed max-w-lg">
                            New enterprise hires lose 3–6 months of productivity to context overload. Orbit is an AI agent-guided onboarding experience on Apple Vision Pro — collapsing weeks of context-building into hours through spatial mapping, gaze navigation, and progressive disclosure.
                        </p>

                        {/* Role badges */}
                        <div className="flex flex-wrap gap-3">
                            <div className="bg-[#1c1b1b] border border-white/10 rounded-full px-6 py-2.5">
                                <span className="text-xs text-white/80 tracking-wide font-semibold">Lead Designer · Speculative Concept</span>
                            </div>
                            <div className="bg-[#1c1b1b] border border-white/10 rounded-full px-6 py-2.5">
                                <span className="text-xs text-[#d0bcff] font-bold tracking-widest">2025</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column — metrics dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                        aria-label="Projected impact metrics for Orbit"
                    >
                        <div
                            className="relative p-[1px] rounded-2xl"
                            style={{ background: "linear-gradient(135deg, rgba(208,188,255,0.2) 0%, rgba(14,14,14,0) 60%)" }}
                        >
                            <div className="bg-white/5 backdrop-blur-3xl rounded-2xl p-6 border border-white/[0.07] shadow-[0_20px_50px_rgba(208,188,255,0.06)]">
                                <div className="pointer-events-none origin-top h-[380px] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-zinc-950/50">
                                    <div className="scale-[1] origin-top h-[380px]">
                                        <OrgMapScreen />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow behind panel */}
                        <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#d0bcff]/10 rounded-full blur-[80px] pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
