"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import {
    User,
    AlertCircle,
    Users,
    Quote,
    Target,
    Clock,
    CheckCircle,
    ArrowRight,
    BarChart,
    Layers,
} from "lucide-react";

type Tab = "persona" | "jtbd" | "dayinlife";

const dayBefore = [
    { time: "9:00 AM", task: "Check CRM for new leads", duration: "25 min", type: "manual" },
    { time: "9:25 AM", task: "Copy data to spreadsheet", duration: "45 min", type: "manual" },
    { time: "10:10 AM", task: "Email sales team manually", duration: "20 min", type: "manual" },
    { time: "10:30 AM", task: "Update Slack channel", duration: "10 min", type: "manual" },
    { time: "10:40 AM", task: "Actual strategy work", duration: "1.5 hr", type: "actual" },
];

const dayAfter = [
    { time: "9:00 AM", task: "Simplifai handles lead routing automatically", duration: "0 min", type: "automated" },
    { time: "9:00 AM", task: "Sales gets instant Slack + email notification", duration: "0 min", type: "automated" },
    { time: "9:02 AM", task: "CRM updated in real-time", duration: "0 min", type: "automated" },
    { time: "9:02 AM", task: "Actual strategy work", duration: "5 hr", type: "actual" },
];

export function UserPersonaIA() {
    const [tab, setTab] = useState<Tab>("persona");

    return (
        <section className="py-20 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-purple-500/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Chapter label */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-semibold">
                        <User className="w-3.5 h-3.5" />
                        Chapter 1 — The User
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4 max-w-3xl leading-[1.08]"
                >
                    Before writing a single line —{" "}
                    <span className="text-blue-600">we listened</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-zinc-600 font-medium mb-12 max-w-2xl"
                >
                    100+ user interviews across 8 enterprise clients. One archetype emerged as the primary user: the non-technical operations lead.
                </motion.p>

                {/* Tab switcher */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200 mb-8 w-fit">
                    {([
                        { id: "persona", label: "User Persona" },
                        { id: "jtbd", label: "Jobs to be Done" },
                        { id: "dayinlife", label: "Day in the Life" },
                    ] as { id: Tab; label: string }[]).map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${tab === t.id
                                ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                : "text-zinc-600 hover:text-zinc-700"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {/* ── PERSONA TAB ── */}
                    {tab === "persona" && (
                        <motion.div
                            key="persona"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="grid lg:grid-cols-2 gap-8 items-start"
                        >
                            {/* Persona Card */}
                            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.06)] p-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/6 to-transparent pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px]">
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                                <User className="w-8 h-8 text-zinc-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900">Sarah, Operations Lead</h3>
                                            <p className="text-purple-600 text-sm font-semibold">Non-Technical · Enterprise</p>
                                        </div>
                                    </div>

                                    {/* Metric badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {[
                                            { label: "5+ tools daily", color: "bg-zinc-100 text-zinc-700 border-zinc-200" },
                                            { label: "20% rework rate", color: "bg-red-50 text-red-800 border-red-200" },
                                            { label: "3 hrs/day on manual tasks", color: "bg-orange-50 text-orange-700 border-orange-200" },
                                        ].map((b) => (
                                            <span
                                                key={b.label}
                                                className={`px-3 py-1.5 rounded-full text-xs font-bold border ${b.color}`}
                                            >
                                                {b.label}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <div className="flex items-center gap-2 text-sm text-zinc-600 uppercase tracking-wider font-bold mb-3">
                                                <AlertCircle className="w-4 h-4 text-red-500" />
                                                Pain Points
                                            </div>
                                            <ul className="space-y-2.5">
                                                <li className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                                    Manual data entry errors causing <span className="font-bold text-red-800 ml-1">20% rework</span>.
                                                </li>
                                                <li className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                                    Fragmented workflows across 5+ different tools.
                                                </li>
                                                <li className="flex items-start gap-2.5 text-sm text-zinc-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                                    <span className="italic text-zinc-600">&ldquo;I feel dependent on engineering for every small change.&rdquo;</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="pt-4 border-t border-zinc-100">
                                            <div className="flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-xl p-4">
                                                <Users className="w-5 h-5 text-purple-600 shrink-0" />
                                                <p className="text-sm text-zinc-700">
                                                    <span className="font-bold text-zinc-900">Research Validation:</span> Conducted user research with <span className="font-bold text-purple-700">100+ participants</span> to validate these flows.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quote + stat */}
                            <div className="flex flex-col gap-6">
                                <div className="rounded-2xl bg-zinc-900 p-6 relative overflow-hidden">
                                    <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-purple-600/20 to-transparent pointer-events-none" />
                                    <Quote className="w-6 h-6 text-purple-400 mb-3" />
                                    <p className="text-white font-semibold text-lg leading-snug mb-3">
                                        &ldquo;If I have to file another IT ticket just to change a field name, I&apos;m going to lose my mind.&rdquo;
                                    </p>
                                    <p className="text-zinc-400 text-sm">— Real participant, Interview #14</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: "8", label: "Enterprise clients interviewed", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
                                        { value: "72%", label: "Wanted self-service editing", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
                                        { value: "3.2 hrs", label: "Lost daily to context switching", color: "text-red-800", bg: "bg-red-50 border-red-200" },
                                        { value: "100+", label: "User studies conducted", color: "text-purple-600", bg: "bg-purple-50 border-purple-200" },
                                    ].map((s) => (
                                        <div key={s.label} className={`rounded-2xl border p-5 ${s.bg}`}>
                                            <div className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</div>
                                            <div className="text-xs text-zinc-600 font-medium leading-tight">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ── JTBD TAB ── */}
                    {tab === "jtbd" && (
                        <motion.div
                            key="jtbd"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-5"
                        >
                            <p className="text-sm text-zinc-600 font-medium mb-6">
                                Jobs To Be Done — what Sarah is actually trying to accomplish when she uses the product.
                            </p>
                            {[
                                {
                                    context: "When a new lead comes in",
                                    job: "I want it auto-routed to the right sales rep",
                                    outcome: "So I don't have to babysit the process",
                                    icon: Target,
                                    color: "text-purple-600",
                                    bg: "bg-purple-50",
                                    border: "border-purple-200",
                                },
                                {
                                    context: "When a workflow fails",
                                    job: "I want to know immediately what broke and why",
                                    outcome: "So I can fix it without calling an engineer",
                                    icon: AlertCircle,
                                    color: "text-red-800",
                                    bg: "bg-red-50",
                                    border: "border-red-200",
                                },
                                {
                                    context: "When I need to change automation logic",
                                    job: "I want to edit the rule myself in minutes",
                                    outcome: "So my team isn't blocked waiting on IT",
                                    icon: Layers,
                                    color: "text-emerald-600",
                                    bg: "bg-emerald-50",
                                    border: "border-emerald-200",
                                },
                                {
                                    context: "When reviewing weekly performance",
                                    job: "I want all metrics in one dashboard",
                                    outcome: "So I can make decisions based on real data",
                                    icon: BarChart,
                                    color: "text-blue-600",
                                    bg: "bg-blue-50",
                                    border: "border-blue-200",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    className={`rounded-2xl border p-6 ${item.bg} ${item.border}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-2.5 rounded-xl bg-white/80 shrink-0`}>
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div className="flex flex-wrap gap-2 items-center text-sm font-medium text-zinc-700 leading-relaxed">
                                            <span className="text-zinc-600 font-semibold">{item.context},</span>
                                            <span className="font-bold text-zinc-900">{item.job}</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
                                            <span className="italic text-zinc-600">{item.outcome}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* ── DAY IN THE LIFE TAB ── */}
                    {tab === "dayinlife" && (
                        <motion.div
                            key="dayinlife"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {/* Before */}
                            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                                <div className="flex items-center gap-2 mb-5">
                                    <Clock className="w-4 h-4 text-red-500" />
                                    <span className="text-sm font-bold text-red-800 uppercase tracking-widest">Before Simplifai</span>
                                </div>
                                <div className="space-y-3">
                                    {dayBefore.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                            className={`flex items-start gap-3 p-3 rounded-xl ${item.type === "actual"
                                                ? "bg-white/60 border border-red-200"
                                                : "bg-white/40"
                                                }`}
                                        >
                                            <span className="text-xs text-zinc-600 font-mono shrink-0 mt-0.5">{item.time}</span>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm font-semibold ${item.type === "actual" ? "text-zinc-800" : "text-red-800"}`}>
                                                    {item.task}
                                                </p>
                                                <p className={`text-xs mt-0.5 font-bold ${item.type === "actual" ? "text-emerald-600" : "text-red-500"}`}>
                                                    {item.duration}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 rounded-xl bg-red-100 border border-red-200">
                                    <p className="text-xs text-red-800 font-bold">⚠️ Only ~1.5 hrs of actual strategic work</p>
                                </div>
                            </div>

                            {/* After */}
                            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                                <div className="flex items-center gap-2 mb-5">
                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm font-bold text-emerald-800 uppercase tracking-widest">After Simplifai</span>
                                </div>
                                <div className="space-y-3">
                                    {dayAfter.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                            className={`flex items-start gap-3 p-3 rounded-xl ${item.type === "actual"
                                                ? "bg-white/70 border border-emerald-200"
                                                : "bg-white/40"
                                                }`}
                                        >
                                            <span className="text-xs text-zinc-600 font-mono shrink-0 mt-0.5">{item.time}</span>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm font-semibold ${item.type === "actual" ? "text-zinc-800" : "text-emerald-800"}`}>
                                                    {item.task}
                                                </p>
                                                <p className={`text-xs mt-0.5 font-bold ${item.type === "actual" ? "text-emerald-600" : "text-emerald-500"}`}>
                                                    {item.duration === "0 min" ? "✨ Automated" : item.duration}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 rounded-xl bg-emerald-100 border border-emerald-200">
                                    <p className="text-xs text-emerald-800 font-bold">🚀 5 hours freed up for strategic work daily</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
