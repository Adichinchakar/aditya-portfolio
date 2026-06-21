"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, MotionConfig } from "@/lib/motion";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";
import { ChevronRight, Terminal, Layers, Sparkles, Zap, ArrowUpRight } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";
import Link from "next/link";

// ─── Role Data ───────────────────────────────────────────────────────────────

const roles = [
    {
        id: "founding-designer",
        label: "Founding Designer",
        icon: Terminal,
        color: "emerald" as const,
        headline: "Built Aulys 0→1. Solo designer, zero funding.",
        proof: "I took Aulys from idea to 30 live users — designed the product, directed the AI-assisted build, shipped the Figma plugin, ran the beta. 6 months. No team. No funding. That kind of ownership shapes how I work inside a team too.",
        tags: ["0→1 Product", "Figma Plugin API", "AI-Directed Build"],
        caseStudy: { label: "Aulys → 500+ Frames Scanned Under 10 Seconds", href: "/work/aulys" },
    },
    {
        id: "lead-designer",
        label: "Lead Designer",
        icon: Layers,
        color: "indigo" as const,
        headline: "Design system that served 5 product teams.",
        proof: "At Simplifai I built the design language from scratch — token architecture, 60+ components, documented usage rules. Five teams, one source of truth. Dev cycles dropped 42%. Designers stopped debating buttons.",
        tags: ["Design Systems", "Design Ops", "Team Mentoring"],
        caseStudy: { label: "Simplifai DS → 42% Faster Dev Cycle", href: "/work/simplifai-design-system" },
    },
    {
        id: "staff-designer",
        label: "Staff Designer",
        icon: Sparkles,
        color: "violet" as const,
        headline: "Platform decisions, not screen decisions.",
        proof: "At Infosys I designed across 5 product teams — set the direction, not just the pixels. Cut teacher assessment time by 70%. At Aulys, shipped WCAG 2.2 AAA compliance into Figma — a capability that didn't exist before.",
        tags: ["AI Tooling", "Platform Design", "WCAG 2.2 AAA"],
        caseStudy: { label: "Infosys × Imagine Learning → 70% Faster Assessments", href: "/work/infosys" },
    },
    {
        id: "head-of-design",
        label: "Head of Design",
        icon: Zap,
        color: "amber" as const,
        headline: "Owns the full function. Gets it to market.",
        proof: "I use AI to build in production — real Figma plugins, real repos, real users. Shipped 3 products solo this way. I can hire your first designer, set the process, and still care about the pixels on Friday. I don't need hand-holding — I need a problem worth solving.",
        tags: ["AI-Directed Build", "0→1 Products", "Design Leadership"],
        caseStudy: { label: "MedSecure → 34% Fewer Medical Errors", href: "/work/medsecure" },
    },
];

// Static color maps so Tailwind doesn't purge dynamic class names
const colorMap = {
    indigo: {
        accent: "bg-indigo-500",
        text: "text-indigo-600",
        tabActive: "bg-indigo-600 text-white shadow-md shadow-indigo-200/50",
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-500",
    },
    violet: {
        accent: "bg-violet-500",
        text: "text-violet-600",
        tabActive: "bg-violet-600 text-white shadow-md shadow-violet-200/50",
        iconBg: "bg-violet-50",
        iconColor: "text-violet-500",
    },
    amber: {
        accent: "bg-amber-500",
        text: "text-amber-600",
        tabActive: "bg-amber-600 text-white shadow-md shadow-amber-200/50",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
    },
    emerald: {
        accent: "bg-emerald-500",
        text: "text-emerald-600",
        tabActive: "bg-emerald-600 text-white shadow-md shadow-emerald-200/50",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-500",
    },
};

// ─── Role Matcher Card ────────────────────────────────────────────────────────

function RoleMatcher() {
    const [activeRole, setActiveRole] = useState(0);
    const role = roles[activeRole];
    const colors = colorMap[role.color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
        >
            <div className="relative bg-white/70 border border-zinc-200/60 rounded-2xl p-5 sm:p-6 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgb(0,0,0,0.08)] overflow-hidden">

                {/* Role tabs — inverted active state */}
                <div className="flex flex-nowrap gap-1.5 mb-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                    {roles.map((r, i) => (
                        <button
                            key={r.id}
                            onClick={() => setActiveRole(i)}
                            aria-pressed={activeRole === i}
                            className={cn(
                                "flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                activeRole === i
                                    ? colorMap[r.color].tabActive
                                    : "bg-zinc-100/80 text-zinc-500 hover:bg-zinc-200/80 hover:text-zinc-700"
                            )}
                        >
                            <r.icon className="w-3 h-3" />
                            {r.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={role.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="rounded-xl border border-zinc-200/70 bg-white relative overflow-hidden"
                    >
                        {/* Thin colored top accent */}
                        <div className={cn("absolute inset-x-0 top-0 h-[2px]", colors.accent)} />

                        <div className="p-4 sm:p-5 pt-5 sm:pt-6">
                            {/* Icon + headline row */}
                            <div className="flex items-start gap-3 mb-3">
                                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5", colors.iconBg)}>
                                    <role.icon className={cn("w-4 h-4", colors.iconColor)} aria-hidden="true" />
                                </div>
                                <p className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 leading-snug">
                                    {role.headline}
                                </p>
                            </div>

                            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                                {role.proof}
                            </p>

                            {/* Tags — neutral */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {role.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 text-zinc-600 border border-zinc-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Case study link */}
                            <Link
                                href={role.caseStudy.href}
                                className={cn(
                                    "inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-4 transition-opacity hover:opacity-80",
                                    colors.text
                                )}
                            >
                                {role.caseStudy.label}
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
    const reduce = useReducedMotion();

    return (
        <MotionConfig reducedMotion="user">
        <section
            className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden selection:bg-emerald-100 bg-background"
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

            <div className="max-w-4xl w-full z-10 flex flex-col items-start md:items-start text-left">

                {/* ── Fold 1 — The Statement ─────────────────────── */}
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
                            Available August 2026 · Open globally
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
                        I design AI products{" "}
                        <span className="text-zinc-400">and ship them to production.</span>
                    </motion.h1>

                    {/* Subline — earned credibility, not adjectives */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                        className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed"
                    >
                        Founder of Aulys. Ex-Infosys. 9 years turning complex enterprise problems into software people actually use — the design, the system, and the code.
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
                </div>

                {/* ── Fold 2 — The Role Matcher ─────────────────────── */}
                <div className="mt-16 md:mt-20 w-full">
                    <RoleMatcher />
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
