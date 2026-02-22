"use client";

import { motion } from "framer-motion";
import {
    Settings,
    Layers,
    Zap,
    ShieldCheck,
    Code2,
    Palette,
    Type,
    Grid3x3,
    CheckCircle,
} from "lucide-react";

const tokenRows = [
    { name: "--color-primary", value: "#6366f1", swatch: "#6366f1", type: "Color" },
    { name: "--color-accent", value: "#8b5cf6", swatch: "#8b5cf6", type: "Color" },
    { name: "--color-surface", value: "#f4f4f5", swatch: "#f4f4f5", type: "Color" },
    { name: "--radius-md", value: "12px", swatch: null, type: "Radius" },
    { name: "--radius-xl", value: "24px", swatch: null, type: "Radius" },
    { name: "--font-sans", value: "Inter, system-ui", swatch: null, type: "Font" },
    { name: "--shadow-card", value: "0 4px 20px rgb(0,0,0,0.06)", swatch: null, type: "Shadow" },
];

const componentStats = [
    { icon: Layers, label: "Components built", value: "120+", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
    { icon: Palette, label: "Token categories", value: "8", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
    { icon: Type, label: "Type scales", value: "12", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
    { icon: Grid3x3, label: "Layout patterns", value: "24", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
];

const qualityBadges = [
    { icon: ShieldCheck, label: "WCAG 2.2 AA", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
    { icon: Zap, label: "Framer Motion animated", color: "text-purple-700", bg: "bg-purple-50 border-purple-200" },
    { icon: Code2, label: "Figma → React tokens", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
    { icon: CheckCircle, label: "100% TypeScript", color: "text-zinc-700", bg: "bg-zinc-100 border-zinc-200" },
];

export function SystemSpecs() {
    return (
        <section className="py-24 px-6 bg-white border-t border-zinc-100 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto max-w-6xl relative z-10">

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-semibold mb-6"
                    >
                        <Settings className="w-3.5 h-3.5" />
                        System Specs
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4 max-w-3xl leading-[1.08]"
                    >
                        Engineered,{" "}
                        <span className="text-indigo-600">not just designed</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-500 font-medium max-w-2xl"
                    >
                        The Simplifai Design System was built with semantic design tokens synced directly from Figma to React — creating a single source of truth across design and code.
                    </motion.p>
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                >
                    {componentStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className={`rounded-2xl border p-5 flex flex-col gap-3 ${stat.bg} ${stat.border}`}
                        >
                            <div className={`p-2.5 rounded-xl bg-white/80 w-fit`}>
                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            </div>
                            <div>
                                <div className={`text-3xl font-black mb-0.5 ${stat.color}`}>{stat.value}</div>
                                <div className="text-xs text-zinc-600 font-medium">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Token table + annotated component — side by side */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">

                    {/* Token Table */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                    >
                        {/* Code bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-2 text-xs text-zinc-400 font-mono">tokens.css</span>
                        </div>

                        <div className="divide-y divide-zinc-100">
                            {tokenRows.map((token, i) => (
                                <motion.div
                                    key={token.name}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 + 0.15 }}
                                    className="flex items-center justify-between px-5 py-3 group hover:bg-zinc-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        {token.swatch ? (
                                            <span
                                                className="w-4 h-4 rounded-full border border-zinc-200 shrink-0"
                                                style={{ backgroundColor: token.swatch }}
                                            />
                                        ) : (
                                            <span className="w-4 h-4 rounded border border-zinc-200 bg-zinc-100 shrink-0 flex items-center justify-center">
                                                <span className="text-[7px] font-bold text-zinc-400">{token.type[0]}</span>
                                            </span>
                                        )}
                                        <span className="font-mono text-xs text-indigo-600 font-semibold">{token.name}</span>
                                    </div>
                                    <span className="font-mono text-xs text-zinc-500 truncate max-w-[160px] text-right">{token.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Annotated Component Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 flex flex-col gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)]"
                    >
                        <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Component Annotation</p>

                        {/* The annotated button */}
                        <div className="relative flex justify-center items-center py-12 rounded-xl bg-white border border-zinc-200">
                            {/* Grid dot bg */}
                            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-40"
                                style={{
                                    backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                }}
                            />
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                {/* Top annotation — radius */}
                                <div className="flex flex-col items-center">
                                    <div className="bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold text-zinc-600 shadow-sm">
                                        border-radius: var(--radius-md)
                                    </div>
                                    <div className="h-6 w-px border-l border-dashed border-zinc-300 mt-1" />
                                </div>

                                {/* The button with left/right callouts */}
                                <div className="relative flex items-center gap-0">
                                    {/* Left callout */}
                                    <div className="flex items-center mr-3 absolute right-full">
                                        <div className="bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold text-zinc-600 shadow-sm whitespace-nowrap">
                                            :focus-visible ring
                                        </div>
                                        <div className="w-6 h-px border-t border-dashed border-zinc-300" />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="px-8 py-3 bg-[#6366f1] text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.35)] text-sm ring-2 ring-[#6366f1]/20 ring-offset-2"
                                    >
                                        Start Automation
                                    </motion.button>

                                    {/* Right callout */}
                                    <div className="flex items-center ml-3 absolute left-full">
                                        <div className="w-6 h-px border-t border-dashed border-zinc-300" />
                                        <div className="bg-white border border-zinc-200 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold text-zinc-600 shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#6366f1] shrink-0" />
                                            var(--color-primary)
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom annotation — WCAG */}
                                <div className="flex flex-col items-center">
                                    <div className="h-6 w-px border-l border-dashed border-zinc-300 mb-1" />
                                    <div className="bg-white border border-emerald-200 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold text-emerald-700 shadow-sm flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        WCAG 2.2 AA — 7.2:1 contrast
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spec row */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { label: "Height", value: "44px" },
                                { label: "Padding", value: "12px 24px" },
                                { label: "Font weight", value: "600" },
                            ].map((s) => (
                                <div key={s.label} className="rounded-xl bg-white border border-zinc-200 p-3 text-center">
                                    <div className="text-xs text-zinc-400 font-medium mb-1">{s.label}</div>
                                    <div className="font-mono text-xs font-bold text-zinc-800">{s.value}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Quality badges */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-3"
                >
                    {qualityBadges.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold ${badge.bg} ${badge.color}`}
                        >
                            <badge.icon className="w-4 h-4" />
                            {badge.label}
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
