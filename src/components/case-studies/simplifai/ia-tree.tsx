"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, BarChart2, Plug, Settings,
    Mail, MessageSquare, Database,
    TrendingUp, Activity, Key, Users,
    ArrowRight, Layers, ChevronDown,
    MousePointer2, AlertCircle, ArrowUpRight,
} from "lucide-react";

type View = "before" | "after";

// ─── Before: chaos tiles ────────────────────────────────────────────────────
const beforeTools = [
    { label: "CRM Tool", icon: Users, color: "text-red-600", bg: "bg-red-50", border: "border-red-200", arrow: "→ email" },
    { label: "Email Platform", icon: Mail, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", arrow: "→ Slack" },
    { label: "Analytics Dashboard", icon: BarChart2, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-200", arrow: "→ spreadsheet" },
    { label: "Slack Alerts", icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", arrow: "→ CRM" },
    { label: "Data Warehouse", icon: Database, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200", arrow: "→ email" },
    { label: "Manual Spreadsheets", icon: Activity, color: "text-zinc-500", bg: "bg-zinc-50", border: "border-zinc-200", arrow: "→ dashboard" },
];

// ─── After: structured IA tree ────────────────────────────────────────────────
const iaTree = [
    {
        id: "workflows",
        label: "Workflows",
        icon: Zap,
        color: "text-purple-700",
        bg: "bg-purple-50",
        border: "border-purple-200",
        accent: "bg-purple-600",
        description: "Design, run and monitor multi-step automations",
        children: [
            { icon: Mail, label: "Email Actions", detail: "SMTP · SendGrid · Mailchimp" },
            { icon: MessageSquare, label: "Notifications", detail: "Slack · Teams · Webhooks" },
            { icon: Database, label: "Data Sync", detail: "Postgres · Airtable · Sheets" },
        ],
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: BarChart2,
        color: "text-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-200",
        accent: "bg-blue-600",
        description: "One dashboard for every operational metric",
        children: [
            { icon: TrendingUp, label: "Performance", detail: "Run rates · Success ratios" },
            { icon: Activity, label: "Usage Trends", detail: "User engagement · Volume" },
            { icon: BarChart2, label: "Custom Reports", detail: "Exportable · Scheduled" },
        ],
    },
    {
        id: "integrations",
        label: "Integrations",
        icon: Plug,
        color: "text-emerald-700",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        accent: "bg-emerald-600",
        description: "Connect any tool — no code required",
        children: [
            { icon: Key, label: "API Keys", detail: "Scoped · Revokable" },
            { icon: Plug, label: "Connectors", detail: "50+ native integrations" },
            { icon: ArrowUpRight, label: "Webhooks", detail: "Real-time event delivery" },
        ],
    },
    {
        id: "settings",
        label: "Settings",
        icon: Settings,
        color: "text-amber-700",
        bg: "bg-amber-50",
        border: "border-amber-200",
        accent: "bg-amber-500",
        description: "Governance, permissions and team management",
        children: [
            { icon: Users, label: "Team Members", detail: "Invite · Roles · SSO" },
            { icon: Key, label: "Permissions", detail: "Granular access control" },
        ],
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export function IATree() {
    const [view, setView] = useState<View>("after");
    const [expandedNode, setExpandedNode] = useState<string | null>("workflows");

    const toggle = (id: string) =>
        setExpandedNode((prev) => (prev === id ? null : id));

    return (
        <section className="py-24 px-6 bg-white border-t border-zinc-100 relative overflow-hidden">
            {/* Subtle grid bg */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, #e4e4e7 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Chapter label + headline */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-bold uppercase tracking-widest">
                        <Layers className="w-3.5 h-3.5" />
                        Chapter 2 — Structure
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4 max-w-3xl leading-[1.08]"
                >
                    Turning 6 scattered tools{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        into one mental model
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-zinc-500 font-medium mb-12 max-w-2xl"
                >
                    IA research revealed users were context-switching between 6 disconnected tools to complete a
                    single workflow. We collapsed everything into a single, hierarchical model.
                </motion.p>

                {/* Toggle + metrics */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200">
                        {(["before", "after"] as View[]).map((v) => (
                            <button
                                key={v}
                                onClick={() => setView(v)}
                                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${view === v
                                    ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                    : "text-zinc-500 hover:text-zinc-700"
                                    }`}
                            >
                                {v === "before" ? "❌ Before" : "✅ After"}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                            <span className="text-emerald-700 font-black text-sm">68%</span>
                            <span className="text-emerald-600 text-xs font-medium">fewer navigation steps</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                            <span className="text-blue-700 font-black text-sm">6 apps</span>
                            <ArrowRight className="w-3 h-3 text-blue-500" />
                            <span className="text-blue-700 font-black text-sm">1 dashboard</span>
                        </div>
                    </div>
                </div>

                {/* ── Visualization ────────────────────────────────────────────── */}
                <AnimatePresence mode="wait">

                    {/* BEFORE: chaos grid */}
                    {view === "before" && (
                        <motion.div
                            key="before"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-3xl border border-red-200 bg-red-50/60 p-8"
                        >
                            <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-6">
                                User&apos;s old workflow — 6 disconnected tools, zero unified view
                            </p>

                            {/* Chaos grid with animated arrows */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                {beforeTools.map((tool, i) => (
                                    <motion.div
                                        key={tool.label}
                                        initial={{ opacity: 0, scale: 0.88 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.07, type: "spring", stiffness: 260, damping: 20 }}
                                        className={`relative rounded-2xl border ${tool.bg} ${tool.border} p-4 flex items-start gap-3`}
                                    >
                                        <div className={`p-2 rounded-xl bg-white border ${tool.border} shrink-0`}>
                                            <tool.icon className={`w-4 h-4 ${tool.color}`} />
                                        </div>
                                        <div className="min-w-0">
                                            <div className={`text-xs font-bold ${tool.color} truncate`}>{tool.label}</div>
                                            <div className="text-[10px] text-zinc-400 font-mono mt-1 flex items-center gap-1">
                                                <AlertCircle className="w-2.5 h-2.5 text-red-400 shrink-0" />
                                                manually {tool.arrow}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl bg-red-100 border border-red-200 flex items-start gap-3">
                                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-red-700 font-medium">
                                    <span className="font-bold">Result:</span> No single source of truth.
                                    Users spent an average of <span className="font-bold">3.2 hours/day</span> context-switching between tools — zero visibility into workflow status.
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* AFTER: interactive IA tree */}
                    {view === "after" && (
                        <motion.div
                            key="after"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-3xl border border-zinc-200 bg-white p-8"
                            style={{
                                backgroundImage: "radial-gradient(circle at 1px 1px, #f4f4f5 1px, transparent 0)",
                                backgroundSize: "20px 20px",
                            }}
                        >
                            {/* Hint */}
                            <div className="flex items-center gap-2 mb-8">
                                <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                                    Redesigned IA — Simplifai Dashboard
                                </p>
                                <div className="ml-auto flex items-center gap-1.5 text-[11px] text-zinc-400 font-medium">
                                    <MousePointer2 className="w-3 h-3" />
                                    Click a section to explore
                                </div>
                            </div>

                            {/* Root */}
                            <div className="flex flex-col items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                    className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900 text-white font-bold text-sm shadow-lg border border-zinc-700"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-white" />
                                    </div>
                                    Simplifai Dashboard
                                </motion.div>

                                {/* Vertical stem from root */}
                                <div className="w-px h-7 bg-zinc-300" />

                                {/* Horizontal bar spanning 4 cols */}
                                <div className="relative w-full">
                                    {/* The spanning line */}
                                    <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-zinc-300" />

                                    {/* 4 branch columns */}
                                    <div className="grid grid-cols-4 gap-3 pt-0">
                                        {iaTree.map((node, i) => {
                                            const isOpen = expandedNode === node.id;
                                            return (
                                                <div key={node.id} className="flex flex-col items-center gap-0">
                                                    {/* Vertical stem from bar line */}
                                                    <motion.div
                                                        initial={{ scaleY: 0 }}
                                                        animate={{ scaleY: 1 }}
                                                        transition={{ delay: i * 0.07 + 0.1, duration: 0.3 }}
                                                        style={{ originY: 0 }}
                                                        className="w-px h-7 bg-zinc-300"
                                                    />

                                                    {/* L2 clickable node */}
                                                    <motion.button
                                                        initial={{ opacity: 0, y: 12 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.07 + 0.15, type: "spring", stiffness: 260, damping: 20 }}
                                                        onClick={() => toggle(node.id)}
                                                        className={`w-full rounded-2xl border p-4 flex flex-col items-center gap-2 text-center transition-all duration-200 ${isOpen
                                                            ? `${node.bg} ${node.border} shadow-md scale-[1.03]`
                                                            : `bg-white border-zinc-200 hover:${node.bg} hover:${node.border} hover:shadow-sm`
                                                            }`}
                                                    >
                                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isOpen ? `bg-white` : "bg-zinc-50 border border-zinc-200"}`}>
                                                            <node.icon className={`w-5 h-5 ${isOpen ? node.color : "text-zinc-400"}`} />
                                                        </div>
                                                        <span className={`text-xs font-bold ${isOpen ? node.color : "text-zinc-600"}`}>
                                                            {node.label}
                                                        </span>
                                                        <ChevronDown
                                                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? `${node.color} rotate-180` : "text-zinc-300"}`}
                                                        />
                                                    </motion.button>

                                                    {/* Expand: description + children */}
                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.28 }}
                                                                className="w-full overflow-hidden"
                                                            >
                                                                {/* Stem to children */}
                                                                <div className="flex justify-center">
                                                                    <div className="w-px h-4 bg-zinc-300" />
                                                                </div>

                                                                <div className="flex flex-col gap-2">
                                                                    {node.children.map((child, j) => (
                                                                        <motion.div
                                                                            key={child.label}
                                                                            initial={{ opacity: 0, x: -8 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: j * 0.06 }}
                                                                            className={`flex items-start gap-2.5 px-3 py-2.5 rounded-xl border ${node.bg} ${node.border} w-full`}
                                                                        >
                                                                            <div className={`p-1 rounded-lg bg-white border ${node.border} shrink-0`}>
                                                                                <child.icon className={`w-3 h-3 ${node.color}`} />
                                                                            </div>
                                                                            <div className="min-w-0">
                                                                                <div className={`text-[11px] font-bold ${node.color} truncate`}>{child.label}</div>
                                                                                <div className="text-[10px] text-zinc-400 mt-0.5 truncate">{child.detail}</div>
                                                                            </div>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Result callout */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3"
                            >
                                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                                    <span className="text-white text-[10px] font-black">✓</span>
                                </div>
                                <p className="text-sm text-emerald-700 font-medium">
                                    <span className="font-bold">Result:</span> Everything a user needs is accessible within{" "}
                                    <span className="font-bold">2 clicks</span> from the dashboard.
                                    Zero context switching. <span className="font-bold">68% fewer navigation steps</span> measured in usability testing.
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
