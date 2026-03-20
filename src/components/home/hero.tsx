"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { LayoutTemplate, Sparkles, ChevronRight, Terminal, Layers, Zap, ArrowUpRight } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";
import Link from "next/link";

// ─── Role Data ───────────────────────────────────────────────────────────────

const roles = [
    {
        id: "lead-designer",
        label: "Lead Designer",
        icon: Layers,
        color: "indigo" as const,
        headline: "Led design org across 5+ product teams",
        proof: "Built design systems, OKR-driven design ops, and cross-functional processes at Infosys and Simplifai. Comfortable owning roadmap, direction, and mentorship.",
        tags: ["Design Systems", "Design Ops", "Team Mentoring"],
        caseStudy: { label: "Simplifai DS → 42% Faster Dev Cycle", href: "/work/simplifai-design-system" },
    },
    {
        id: "staff-designer",
        label: "Staff Designer",
        icon: Sparkles,
        color: "violet" as const,
        headline: "Platform-level impact across multiple product lines",
        proof: "Designed AI tools and platform-level systems scaling across teams. Cut assessment time 70% at Infosys; shipped WCAG 2.2 AAA-compliant tools at Aulys.",
        tags: ["AI Tooling", "Platform Design", "WCAG 2.2 AAA"],
        caseStudy: { label: "Aulys Plugin → WCAG 2.2 AAA Compliance", href: "/work/aulys" },
    },
    {
        id: "head-of-design",
        label: "Head of Design",
        icon: Zap,
        color: "amber" as const,
        headline: "Ships design and code. Owns the full function.",
        proof: "Full-stack designer who writes React + TypeScript. Taken 3 products from 0→1. Can own hiring, process, vision, and execution — ready to build and lead a design org from scratch.",
        tags: ["React + Next.js", "0→1 Products", "Design Leadership"],
        caseStudy: { label: "MedSecure → 34% Fewer Medical Errors", href: "/work/medsecure" },
    },
    {
        id: "founding-designer",
        label: "Founding Designer",
        icon: Terminal,
        color: "emerald" as const,
        headline: "Took Aulys from 0→1 as sole designer, engineer, and PM.",
        proof: "Built a live Figma plugin from scratch — designed the WCAG 2.2 algorithm, wrote the TypeScript plugin, and onboarded 30 beta designers in 6 months. No team. No runway.",
        tags: ["0→1 Product", "Figma Plugin API", "Solo Execution"],
        caseStudy: { label: "Aulys Plugin → 500+ Frames Under 10 Seconds", href: "/work/aulys" },
    },
];

// Static color maps so Tailwind doesn't purge dynamic class names
const colorMap = {
    indigo: {
        bg: "bg-indigo-50/80",
        border: "border-indigo-100",
        text: "text-indigo-700",
        tag: "bg-white text-indigo-700 border-indigo-200",
        tab: "bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm",
        glow: "bg-indigo-400/20",
    },
    violet: {
        bg: "bg-violet-50/80",
        border: "border-violet-100",
        text: "text-violet-700",
        tag: "bg-white text-violet-700 border-violet-200",
        tab: "bg-violet-50 text-violet-700 border-violet-200 shadow-sm",
        glow: "bg-violet-400/20",
    },
    amber: {
        bg: "bg-amber-50/80",
        border: "border-amber-100",
        text: "text-amber-700",
        tag: "bg-white text-amber-700 border-amber-200",
        tab: "bg-amber-50 text-amber-700 border-amber-200 shadow-sm",
        glow: "bg-amber-400/20",
    },
    emerald: {
        bg: "bg-emerald-50/80",
        border: "border-emerald-100",
        text: "text-emerald-700",
        tag: "bg-white text-emerald-700 border-emerald-200",
        tab: "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-sm",
        glow: "bg-emerald-400/20",
    },
};

// ─── Skills: strategic + leadership, not just tools ──────────────────────────

const unifiedSkills = [
    "Design Systems Architecture",
    "Product Strategy",
    "0→1 Product Building",
    "Design Leadership",
    "AI Product Design",
    "User Research & Strategy",
    "Stakeholder Management",
    "WCAG 2.2 Accessibility",
    "React + Next.js",
    "GenAI Workflows",
    "Design Operations",
    "Roadmapping",
    "Cross-functional Teams",
    "Figma Expert",
    "Systems Thinking",
    "Rapid Prototyping",
];

// ─── Role Matcher Card ────────────────────────────────────────────────────────

function RoleMatcher() {
    const [activeRole, setActiveRole] = useState(0);
    const role = roles[activeRole];
    const colors = colorMap[role.color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, type: "spring", stiffness: 220, damping: 24 }}
            className="w-full max-w-xl mx-auto"
        >
            <div className="relative bg-white/80 border border-zinc-200/80 rounded-[2rem] p-6 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgb(0,0,0,0.1)] overflow-hidden">

                {/* Ambient glow that shifts per role */}
                <AnimatePresence>
                    <motion.div
                        key={role.id + "-glow"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            "absolute top-0 right-0 w-72 h-72 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2",
                            colors.glow
                        )}
                    />
                </AnimatePresence>

                {/* Header row */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Open to Roles</span>
                    </div>
                </div>

                {/* Role tabs */}
                <div className="flex flex-wrap gap-2 mb-5 relative z-10">
                    {roles.map((r, i) => (
                        <button
                            key={r.id}
                            onClick={() => setActiveRole(i)}
                            aria-pressed={activeRole === i}
                            className={cn(
                                "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                activeRole === i
                                    ? colorMap[r.color].tab
                                    : "bg-zinc-100/80 text-zinc-600 border-transparent hover:bg-zinc-200/80 hover:text-zinc-800"
                            )}
                        >
                            <r.icon className="w-3 h-3" />
                            {r.label}
                        </button>
                    ))}
                </div>

                {/* Animated content area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={role.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={cn("rounded-2xl p-5 border relative z-10", colors.bg, colors.border)}
                    >
                        <p className={cn("text-base md:text-lg font-black tracking-tight mb-2", colors.text)}>
                            {role.headline}
                        </p>
                        <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                            {role.proof}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                            {role.tags.map(tag => (
                                <span
                                    key={tag}
                                    className={cn("px-2.5 py-1 rounded-full text-xs font-semibold border", colors.tag)}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={role.caseStudy.href}
                            className={cn("inline-flex items-center gap-1.5 text-xs font-bold hover:underline underline-offset-4 transition-colors", colors.text)}
                        >
                            {role.caseStudy.label}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-32 overflow-hidden selection:bg-blue-100 bg-background">

            {/* Grid */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

            {/* Floating orbs — hidden for reduced motion, decorative only */}
            <motion.div
                aria-hidden="true"
                style={{
                    x: useTransform(springX, (v) => v * -2),
                    y: useTransform(springY, (v) => v * -2),
                }}
                className="motion-reduce:hidden absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-300/40 rounded-full blur-[130px] -z-10 pointer-events-none mix-blend-multiply"
            />
            <motion.div
                aria-hidden="true"
                style={{
                    x: useTransform(springX, (v) => v * 2),
                    y: useTransform(springY, (v) => v * 2),
                }}
                className="motion-reduce:hidden absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-blue-300/30 rounded-full blur-[140px] -z-10 pointer-events-none mix-blend-multiply"
            />
            <div aria-hidden="true" className="motion-reduce:hidden absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply" />

            <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-10 z-10">

                {/* Availability badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={() => setIsContactSheetOpen(true)}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                        Open to Remote · Lead / Staff Designer
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors group-hover:translate-x-0.5" />
                </motion.div>

                {/* Headline + subtext + CTAs */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 leading-[1.1]"
                    >
                        Bridging the gap between <br className="hidden md:block" />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">Design</span>
                            <motion.svg
                                className="absolute -bottom-2 left-0 w-full h-[0.2em]"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="url(#designGrad)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#7c3aed" />
                                        <stop offset="100%" stopColor="#6366f1" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                        </span>
                        {" "}&{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI-Driven Execution</span>
                            <motion.svg
                                className="absolute -bottom-2 left-0 w-full h-[0.2em]"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                            >
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="url(#engGrad)" strokeWidth="3" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="engGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#2563eb" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                        </span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Senior Product Designer & Founder · Infosys & Aulys.<br className="hidden sm:block" />
                        AI Products · Design Systems · WCAG · 0→1 Builds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full px-4 sm:px-0"
                    >
                        <button
                            onClick={() => setIsContactSheetOpen(true)}
                            className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-zinc-900 text-white font-semibold flex items-center gap-2 hover:bg-zinc-700 hover:scale-105 active:scale-95 transition-all shadow-md group"
                        >
                            Let&apos;s Talk
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="/Aditya_Chinchakar_V1_FoundingDesigner.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-white text-zinc-900 font-semibold flex items-center gap-2 border border-zinc-200 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 hover:scale-105 active:scale-95 transition-all"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    {/* Trust signals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 text-sm font-medium text-zinc-500"
                    >
                        <div className="flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-violet-500" />
                            <span>7+ Years Experience</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="flex items-center gap-1.5">
                            <LayoutTemplate className="w-4 h-4 text-blue-500" />
                            <span>10+ Products Shipped</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="flex items-center gap-1.5">
                            <Terminal className="w-4 h-4 text-green-500" />
                            <span>0-to-1 Product Builder</span>
                        </div>
                    </motion.div>
                </div>

                {/* Interactive Role Matcher */}
                <RoleMatcher />

                {/* Skills marquee — strategic + leadership focused */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="w-full relative overflow-hidden py-4 mask-linear-fade mt-8 flex"
                >
                    <motion.div
                        className="flex whitespace-nowrap gap-6 text-sm font-semibold tracking-wide text-zinc-400 items-center justify-start min-w-full"
                        animate={{ x: [0, -1200] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                {unifiedSkills.map((tech, j) => (
                                    <React.Fragment key={`${i}-${j}`}>
                                        <span className="hover:text-zinc-700 transition-colors duration-300 cursor-default">{tech}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mx-2" />
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none z-20" />

            <ContactSheet
                isOpen={isContactSheetOpen}
                onClose={() => setIsContactSheetOpen(false)}
            />
        </section>
    );
}
