"use client";

import { motion } from "framer-motion";
import {
    ArrowRight, Sparkles, Zap, BrainCircuit, GitBranch, Send,
    TrendingDown, Users, Smile, ChevronRight
} from "lucide-react";
import Link from "next/link";

// ─── Vertical Flow Steps (landing-page-only lightweight version) ──────────────
// Shows the Lead Qualification flow as a vertical step list — no wide canvas needed.
const flowSteps = [
    {
        type: "trigger",
        label: "New Lead",
        desc: "Lead enters CRM",
        color: "border-purple-400 bg-purple-50",
        iconColor: "text-purple-600",
        badgeColor: "bg-purple-100 text-purple-700",
        icon: Zap,
    },
    {
        type: "ai",
        label: "AI: Classify Intent",
        desc: "Score lead & estimate contract value",
        color: "border-indigo-400 bg-indigo-50",
        iconColor: "text-indigo-600",
        badgeColor: "bg-indigo-100 text-indigo-700",
        icon: BrainCircuit,
    },
    {
        type: "condition",
        label: "High-Value?",
        desc: "Score ≥ 80 → enterprise track",
        color: "border-amber-400 bg-amber-50",
        iconColor: "text-amber-600",
        badgeColor: "bg-amber-100 text-amber-700",
        icon: GitBranch,
    },
    {
        type: "action",
        label: "Notify Sales",
        desc: "Slack alert + CRM task created in 2s",
        color: "border-emerald-400 bg-emerald-50",
        iconColor: "text-emerald-600",
        badgeColor: "bg-emerald-100 text-emerald-700",
        icon: Send,
    },
];

function VerticalFlowSteps() {
    return (
        <div className="flex flex-col gap-0">
            {flowSteps.map((step, i) => (
                <div key={step.type}>
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.08 }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 ${step.color}`}
                    >
                        <div className={`p-2 rounded-lg bg-white/70 shadow-sm shrink-0 ${step.iconColor}`}>
                            <step.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                                <span className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded ${step.badgeColor}`}>
                                    {step.type}
                                </span>
                                <span className="font-bold text-xs text-zinc-800">{step.label}</span>
                            </div>
                            <p className="text-xs text-zinc-500 leading-tight">{step.desc}</p>
                        </div>
                    </motion.div>
                    {i < flowSteps.length - 1 && (
                        <div className="flex items-center justify-center py-1">
                            <ChevronRight className="w-3 h-3 text-zinc-300 rotate-90" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

// ─── Impact Stats ─────────────────────────────────────────────────────────────
const stats = [
    {
        metric: "42%",
        label: "Faster Iteration",
        icon: TrendingDown,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        metric: "100+",
        label: "User Studies Run",
        icon: Users,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        metric: "20%",
        label: "CSAT Improvement",
        icon: Smile,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
];

// ─── Main Showcase Component ──────────────────────────────────────────────────
export function SimplifaiShowcase() {
    return (
        <section className="relative py-24 bg-zinc-50 overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-purple-500/6 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">

                {/* ── Eyebrow ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 mb-5 text-purple-500"
                >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-mono tracking-wider uppercase">Featured Case Study</span>
                </motion.div>

                {/* ── Title ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                    className="mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-3">
                        Simplifying{" "}
                        <span className="text-purple-500">Automation</span>
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
                        How we redesigned Keywordio's workflow engine so non-technical teams could build enterprise-grade AI automations.
                    </p>
                </motion.div>

                {/* ── Main Card: Two-column layout ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-3xl border border-zinc-200 bg-white shadow-[0_4px_32px_rgb(0,0,0,0.06)] overflow-hidden mb-6"
                >
                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-100">

                        {/* ── Left: Challenge + Solution ── */}
                        <div className="p-8 flex flex-col gap-8">

                            {/* The Challenge */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        The Challenge
                                    </span>
                                </div>
                                <p className="text-zinc-700 text-sm leading-relaxed">
                                    Enterprise automation was locked behind complex code interfaces. Non-technical
                                    teams couldn't build even simple workflows without dev support — creating
                                    a bottleneck that slowed every go-to-market motion.
                                </p>
                            </div>

                            {/* The Solution */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                        The Solution
                                    </span>
                                </div>
                                <p className="text-zinc-700 text-sm leading-relaxed mb-5">
                                    A visual, node-based <strong className="text-zinc-900">Flow Builder</strong> — fully
                                    interactive, zero code required. Teams build automation in minutes, not sprints.
                                </p>
                                {/* 92% vs 41% impact callout */}
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-purple-50 border border-purple-100">
                                    <div className="text-center shrink-0">
                                        <div className="text-2xl font-black text-purple-700">92%</div>
                                        <div className="text-[10px] text-purple-500 font-semibold leading-tight">task completion<br />after redesign</div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-purple-300 shrink-0" />
                                    <div className="text-center shrink-0">
                                        <div className="text-2xl font-black text-zinc-400 line-through decoration-red-400">41%</div>
                                        <div className="text-[10px] text-zinc-400 font-semibold leading-tight">before<br />redesign</div>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-snug border-l border-purple-200 pl-3 ml-1">
                                        Visual programming tested <span className="font-bold text-zinc-700">2.2× better</span> than text-based config in usability sessions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Vertical Flow Steps ── */}
                        <div className="p-8 flex flex-col gap-5 bg-zinc-50/50">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                                    Example: Lead Qualification Flow
                                </span>
                            </div>
                            <VerticalFlowSteps />
                            <p className="text-[11px] text-zinc-400 font-mono text-center">
                                4.5 hrs/week saved per ops manager
                            </p>
                        </div>

                    </div>

                    {/* ── Impact Stats Strip (bottom of card) ── */}
                    <div className="border-t border-zinc-100 px-8 py-5 grid grid-cols-3 divide-x divide-zinc-100">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.metric}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: i * 0.07 }}
                                className="flex flex-col md:flex-row items-center gap-3 px-4 first:pl-0 last:pr-0"
                            >
                                <div className={`p-2 rounded-xl ${s.bg} shrink-0`}>
                                    <s.icon className={`w-4 h-4 ${s.color}`} />
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl font-black text-zinc-900 tracking-tighter leading-none">
                                        {s.metric}
                                    </div>
                                    <div className="text-[11px] text-zinc-500 font-medium leading-tight mt-0.5">
                                        {s.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── CTA at bottom — where intent is highest ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <Link
                        href="/work/simplifai"
                        className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-zinc-200 bg-white hover:border-purple-400 hover:bg-purple-50 hover:text-purple-700 transition-all duration-300 text-sm font-bold text-zinc-800 shadow-sm"
                    >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
