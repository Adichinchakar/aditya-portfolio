"use client";

import React, { useState } from "react";
import { motion, MotionConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";
import Link from "next/link";

// ─── Proof strip — outcomes first, each links to its receipt ─────────────────

const PROOF_STATS = [
    {
        value: "73%",
        label: "adoption lift after redesigning Simplifai's workflow engine",
        href: "/work/simplifai",
    },
    {
        value: "70%",
        label: "faster teacher assessments for enterprise EdTech",
        href: "/work/infosys",
    },
    {
        value: "3",
        label: "products shipped 0→1, solo, with AI — live users",
        href: "/work/aulys",
    },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

    return (
        <MotionConfig reducedMotion="user">
        <section
            className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden selection:bg-emerald-100 bg-background"
        >
            {/* Grid — subtle, static */}
            <div
                className="absolute -inset-4 -z-10 h-[calc(100%+2rem)] w-[calc(100%+2rem)] bg-background bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"
                aria-hidden="true"
            />

            {/* Atmosphere — two barely-visible blobs */}
            <div
                className={cn(
                    "absolute top-0 left-1/4 w-[48vw] h-[48vw] rounded-full blur-[180px] -z-10 pointer-events-none -translate-y-1/2 -translate-x-1/2",
                    "bg-emerald-300/[0.04]"
                )}
                aria-hidden="true"
            />
            <div
                className={cn(
                    "absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full blur-[160px] -z-10 pointer-events-none translate-y-1/2 translate-x-1/3",
                    "bg-indigo-200/[0.06]"
                )}
                aria-hidden="true"
            />

            <div className="max-w-4xl w-full z-10 flex flex-col items-start text-left">

                <div className="flex flex-col items-start gap-6 w-full">

                    {/* Availability pill */}
                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        onClick={() => setIsContactSheetOpen(true)}
                        className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-semibold text-zinc-600 group-hover:text-zinc-900 transition-colors">
                            Interviewing now · Joining from August 2026
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors group-hover:translate-x-0.5" />
                    </motion.button>

                    {/* H1 — the positioning stake */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.035em] text-zinc-900 leading-[1.05] max-w-3xl"
                    >
                        I design enterprise AI products people actually adopt —{" "}
                        <span className="text-blue-700">then I ship them.</span>
                    </motion.h1>

                    {/* Subline — identity + receipts in one breath */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                        className="text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed"
                    >
                        Senior Product Designer · 9 years across EdTech, HealthTech, and
                        Enterprise SaaS. Lifted adoption 73% at Simplifai, cut assessment
                        time 70% for enterprise EdTech — and built Aulys, a production
                        Figma plugin, solo.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1"
                    >
                        <Link
                            href="/work"
                            className="px-7 py-3.5 rounded-full bg-zinc-900 text-white font-semibold flex items-center gap-2 hover:bg-zinc-700 active:scale-[0.97] transition-all shadow-md group"
                        >
                            See the work
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button
                            onClick={() => setIsContactSheetOpen(true)}
                            className="px-7 py-3.5 rounded-full bg-white text-zinc-900 font-semibold flex items-center gap-2 border border-zinc-200 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 active:scale-[0.97] transition-all"
                        >
                            Let&apos;s talk
                        </button>
                        <Link
                            href="/compatibility"
                            className="px-7 py-3.5 rounded-full bg-white border-zinc-200 text-zinc-900 font-semibold flex items-center gap-2 shadow-sm border active:scale-[0.97] transition-all relative overflow-hidden hover:bg-zinc-50 hover:border-zinc-300 group"
                        >
                            <Sparkles className="w-4 h-4 transition-colors text-zinc-400 group-hover:text-indigo-500" />
                            AI Match
                        </Link>
                    </motion.div>

                    {/* Proof strip — three receipts, scannable in two seconds */}
                    <motion.ul
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8 w-full list-none"
                    >
                        {PROOF_STATS.map((stat) => (
                            <li key={stat.href} className="flex-1">
                                <Link
                                    href={stat.href}
                                    className="group flex h-full items-start gap-3 rounded-2xl border border-zinc-200/80 bg-white/70 backdrop-blur-md px-4 py-3.5 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                                >
                                    <span className="text-2xl font-black tracking-tight text-zinc-900 leading-none">
                                        {stat.value}
                                    </span>
                                    <span className="text-xs font-medium text-zinc-600 leading-snug pt-0.5">
                                        {stat.label}
                                        <ArrowUpRight className="inline-block w-3 h-3 ml-1 text-zinc-400 group-hover:text-zinc-900 transition-colors" aria-hidden="true" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none z-20" />

            <ContactSheet
                isOpen={isContactSheetOpen}
                onClose={() => setIsContactSheetOpen(false)}
            />
        </section>
        </MotionConfig>
    );
}
