"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Component, Layers, ChevronRight, Zap } from "lucide-react";

type Level = "atoms" | "molecules" | "organisms";

const levels: Record<Level, {
    icon: React.ElementType;
    color: string;
    bgColor: string;
    borderColor: string;
    label: string;
    count: string;
    description: string;
    insight: string;
}> = {
    atoms: {
        icon: Atom,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        label: "Atoms",
        count: "67 tokens",
        description: "The indivisible primitives — cannot be broken further. Every pixel decision starts here.",
        insight: "A single token change cascades to 2,400+ instances across the product.",
    },
    molecules: {
        icon: Component,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        label: "Molecules",
        count: "34 components",
        description: "Purposeful groups of atoms that serve one clear function. Reusable, predictable.",
        insight: "Molecules reduced bespoke UI patterns by 78% across the flow builder.",
    },
    organisms: {
        icon: Layers,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        borderColor: "border-indigo-200",
        label: "Organisms",
        count: "21 sections",
        description: "Complex, self-contained UI sections composed from molecules. The product surfaces.",
        insight: "A full automation workflow canvas built in <3 days using organism-level assembly.",
    },
};

// --- Atom Cards ---
const atomItems = [
    {
        label: "Brand Purple",
        preview: <div className="w-7 h-7 rounded-lg bg-purple-600 ring-2 ring-purple-200" />,
        token: "--color-brand",
        value: "#7C3AED",
    },
    {
        label: "Text Primary",
        preview: <div className="w-7 h-7 rounded-lg bg-zinc-900 ring-2 ring-zinc-200" />,
        token: "--color-text",
        value: "#18181B",
    },
    {
        label: "Radius MD",
        preview: (
            <div className="w-7 h-7 rounded-lg border-2 border-blue-400 bg-blue-50" />
        ),
        token: "--radius-md",
        value: "8px",
    },
    {
        label: "Space 4",
        preview: (
            <div className="flex items-center gap-0">
                <div className="w-4 h-4 bg-emerald-400 rounded-sm" />
                <div className="w-1 h-4 bg-emerald-200" />
                <div className="w-4 h-4 bg-emerald-400 rounded-sm" />
            </div>
        ),
        token: "--space-4",
        value: "16px",
    },
    {
        label: "Font Weight",
        preview: <span className="text-sm font-black text-zinc-800 leading-none">Ag</span>,
        token: "--font-bold",
        value: "700",
    },
    {
        label: "Shadow SM",
        preview: (
            <div className="w-7 h-7 rounded-lg bg-white shadow-md border border-zinc-100" />
        ),
        token: "--shadow-sm",
        value: "0 1px 3px",
    },
];

// --- Molecule Preview ---
function MoleculePreview() {
    const [pressed, setPressed] = useState(false);
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Button */}
            <div className="flex flex-col items-start gap-2">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Button</div>
                <button
                    onMouseDown={() => setPressed(true)}
                    onMouseUp={() => setPressed(false)}
                    onMouseLeave={() => setPressed(false)}
                    className={`px-4 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-semibold shadow-md transition-all duration-150 ${pressed ? "scale-95 shadow-sm" : "hover:bg-purple-700"}`}
                >
                    Get Started
                </button>
            </div>
            {/* Input */}
            <div className="flex flex-col items-start gap-2">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Input</div>
                <input
                    className="w-full px-3 py-2 rounded-lg border border-zinc-200 text-sm text-zinc-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 placeholder:text-zinc-400"
                    placeholder="Search flows..."
                    readOnly
                />
            </div>
            {/* Badge */}
            <div className="flex flex-col items-start gap-2">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Badge</div>
                <div className="flex gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">Active</span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold">Review</span>
                </div>
            </div>
            {/* Avatar row */}
            <div className="flex flex-col items-start gap-2">
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">User Row</div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 ring-2 ring-white" />
                    <div>
                        <div className="text-xs font-semibold text-zinc-800">Aditya C.</div>
                        <div className="text-[10px] text-zinc-400">Lead Designer</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 ml-auto ring-1 ring-white" />
                </div>
            </div>
        </div>
    );
}

// --- Organism Preview ---
function OrganismPreview() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Flows", "Analytics", "Settings"];
    return (
        <div className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            {/* App bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 bg-zinc-50">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-purple-600 flex items-center justify-center">
                        <Zap className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-bold text-zinc-900">Simplifai</span>
                </div>
                <div className="flex gap-1">
                    {tabs.map((t, i) => (
                        <button
                            key={t}
                            onClick={() => setActiveTab(i)}
                            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${activeTab === i ? "bg-white shadow-sm text-purple-700 border border-zinc-200" : "text-zinc-400 hover:text-zinc-600"}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            {/* Body */}
            <div className="p-4 space-y-3">
                {[
                    { name: "Lead Qualification", status: "Active", runs: "2.3k" },
                    { name: "Invoice Processing", status: "Review", runs: "891" },
                    { name: "Support Routing", status: "Active", runs: "4.1k" },
                ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 transition-all">
                        <div>
                            <div className="text-xs font-semibold text-zinc-800">{row.name}</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">{row.runs} runs this week</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.status === "Active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>
                            {row.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function AtomicExplorer() {
    const [activeLevel, setActiveLevel] = useState<Level>("atoms");
    const level = levels[activeLevel];
    const LevelIcon = level.icon;

    return (
        <section className="py-24 px-6 bg-white border-t border-zinc-100">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Atom className="w-3.5 h-3.5" />
                        Atomic Design System
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4"
                    >
                        Built from the ground up,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            one atom at a time.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-xl font-medium"
                    >
                        Every decision is deliberate. Every token reusable. Explore how we went from raw values to full product surfaces.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">

                    {/* Level selector */}
                    <div className="space-y-3">
                        {(Object.keys(levels) as Level[]).map((lvl, i) => {
                            const isActive = activeLevel === lvl;
                            const LvlIcon = levels[lvl].icon;
                            return (
                                <motion.button
                                    key={lvl}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setActiveLevel(lvl)}
                                    className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 ${isActive
                                        ? `${levels[lvl].bgColor} ${levels[lvl].borderColor} shadow-sm`
                                        : "bg-zinc-50 border-zinc-200 hover:border-zinc-300 hover:bg-white"
                                        }`}
                                >
                                    <div className={`mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${isActive ? levels[lvl].bgColor : "bg-white border border-zinc-200"}`}>
                                        <LvlIcon className={`w-4 h-4 ${isActive ? levels[lvl].color : "text-zinc-400"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`font-bold text-sm ${isActive ? "text-zinc-900" : "text-zinc-600"}`}>{levels[lvl].label}</span>
                                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? `${levels[lvl].bgColor} ${levels[lvl].color} border ${levels[lvl].borderColor}` : "bg-zinc-100 text-zinc-500"}`}>
                                                {levels[lvl].count}
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-relaxed">{levels[lvl].description}</p>
                                    </div>
                                    {isActive && <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${level.color}`} />}
                                </motion.button>
                            );
                        })}

                        {/* Insight callout */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLevel}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                className={`p-4 rounded-2xl border ${level.bgColor} ${level.borderColor} flex items-start gap-3`}
                            >
                                <LevelIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${level.color}`} />
                                <p className={`text-sm font-medium ${level.color.replace("600", "700")}`}>{level.insight}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Previewer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 min-h-[420px] flex flex-col"
                        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #e4e4e7 1px, transparent 0)", backgroundSize: "20px 20px" }}
                    >
                        {/* Toolbar */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                            </div>
                            <div className="ml-2 text-xs font-mono text-zinc-400 bg-white px-3 py-1 rounded-lg border border-zinc-200">
                                design-system / {activeLevel}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLevel}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.25 }}
                                className="flex-1"
                            >
                                {activeLevel === "atoms" && (
                                    <div className="grid grid-cols-3 gap-3">
                                        {atomItems.map((atom, i) => (
                                            <motion.div
                                                key={atom.label}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.06 }}
                                                className="group bg-white rounded-2xl border border-zinc-200 p-4 flex flex-col items-center gap-3 hover:border-blue-300 hover:shadow-md transition-all"
                                            >
                                                <div className="h-10 flex items-center justify-center">
                                                    {atom.preview}
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-xs font-bold text-zinc-700">{atom.label}</div>
                                                    <div className="text-[10px] font-mono text-blue-500 mt-0.5">{atom.token}</div>
                                                    <div className="text-[10px] text-zinc-400 mt-0.5">{atom.value}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                                {activeLevel === "molecules" && (
                                    <div className="bg-white rounded-2xl border border-zinc-200 p-6">
                                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Interactive Components</div>
                                        <MoleculePreview />
                                    </div>
                                )}
                                {activeLevel === "organisms" && (
                                    <div className="flex flex-col gap-4">
                                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Flow Dashboard — Full Page Section</div>
                                        <OrganismPreview />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
