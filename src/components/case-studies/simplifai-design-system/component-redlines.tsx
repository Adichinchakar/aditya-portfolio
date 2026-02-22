"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, MousePointer2, Ruler, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ComponentRedlines() {
    const [isInspectMode, setIsInspectMode] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<string | null>(null);

    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-100 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="max-w-3xl space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-widest">
                        <Ruler className="w-3.5 h-3.5" />
                        Redlines & Specs
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">
                        Designed to spec.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">Built to precision.</span>
                    </h2>
                    <p className="text-lg text-zinc-500 font-medium max-w-xl">
                        Every component is a precise assembly of tokens. Hover the node in inspect mode to reveal its full token specification.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Showcase Area */}
                    <div className="lg:col-span-2 relative">
                        {/* Toolbar */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur border border-zinc-200 rounded-full p-1.5 flex gap-2 shadow-xl">
                            <button
                                onClick={() => setIsInspectMode(false)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!isInspectMode ? "bg-white text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
                                    }`}
                            >
                                Preview
                            </button>
                            <button
                                onClick={() => setIsInspectMode(true)}
                                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${isInspectMode ? "bg-blue-50 text-blue-700 border border-blue-300" : "text-zinc-600 hover:text-zinc-900"
                                    }`}
                            >
                                <Ruler className="w-4 h-4" />
                                Inspect
                            </button>
                        </div>

                        {/* Stage */}
                        <div className="bg-white/30 rounded-3xl border border-zinc-200 p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden group/stage">
                            {/* Grid Background */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '24px 24px' }}
                            />

                            {/* The Component Mock: AI Flow Node */}
                            <div className="relative group">
                                <MockAINode
                                    isInspectMode={isInspectMode}
                                    onHover={setHoveredElement}
                                />
                            </div>

                            {/* Redline Hints */}
                            <AnimatePresence>
                                {isInspectMode && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-xs flex items-center gap-2"
                                    >
                                        <MousePointer2 className="w-3 h-3" />
                                        Hover over elements to view token specifications
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Sidebar Stats & Info */}
                    <div className="space-y-6">
                        {/* Token Details Card (Dynamic) */}
                        <Card className="min-h-[200px] bg-white/50 border-zinc-200 p-6 space-y-4">
                            <div className="flex items-center gap-2 text-zinc-600 text-sm uppercase tracking-wider font-semibold">
                                <Info className="w-4 h-4" />
                                Token Specification
                            </div>
                            {isInspectMode && hoveredElement ? (
                                <TokenSpecs id={hoveredElement} />
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-2 py-8">
                                    <MousePointer2 className="w-8 h-8 opacity-20" />
                                    <p className="text-sm">
                                        {isInspectMode ? "Hover over the component" : "Switch to Inspect Mode"}
                                    </p>
                                </div>
                            )}
                        </Card>

                        {/* WCAG Compliance */}
                        <Card className="bg-emerald-50 border-emerald-200 p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 border border-emerald-200">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-emerald-700 font-bold">WCAG 2.2 AAA Compliant</h4>
                                    <p className="text-sm text-emerald-600 leading-relaxed">
                                        Automated checks ensure <span className="font-semibold">4.5:1 contrast</span> and
                                        <span className="font-semibold"> 44px touch targets</span> on all interactive elements.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Impact Metric */}
                        <Card className="bg-purple-50 border-purple-200 p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 rounded-xl text-purple-600 border border-purple-200">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-purple-700 font-bold">Development Velocity</h4>
                                    <div className="text-3xl font-bold text-zinc-900">42% <span className="text-lg font-normal text-purple-500">faster</span></div>
                                    <p className="text-sm text-purple-600">
                                        Reduction in UI dev time after implementing the tokenized system.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Subcomponents ---

function MockAINode({ isInspectMode, onHover }: { isInspectMode: boolean, onHover: (id: string | null) => void }) {
    return (
        <div
            className="relative w-[340px] bg-zinc-50 border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden"
            onMouseEnter={() => onHover("container")}
            onMouseLeave={() => onHover(null)}
        >
            {/* Inspect Overlay: Container */}
            {isInspectMode && <RedlineOverlay type="padding" value="24px" className="inset-0 pointer-events-none" />}

            {/* Header */}
            <div className="p-6 border-b border-zinc-200/50 flex justify-between items-start relative group/header">
                {isInspectMode && <RedlineOverlay type="spacing" value="16px" className="inset-0 border-blue-500/20 bg-blue-500/5" />}

                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/30 relative">
                        {isInspectMode && <RedlineOverlay type="size" value="40px" className="inset-[-4px] border-dashed border-pink-500/50" />}
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-zinc-900 font-medium">Text Analysis</h3>
                        <p className="text-xs text-zinc-500">v2.1.0 • Stable</p>
                    </div>
                </div>
                <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] uppercase tracking-wider font-bold rounded border border-emerald-500/20">
                    Active
                </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 relative group/body"
                onMouseEnter={(e) => { e.stopPropagation(); onHover("body"); }}
                onMouseLeave={(e) => { e.stopPropagation(); onHover("container"); }}
            >
                {isInspectMode && <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-pink-500/50"><span className="absolute left-1 top-1/2 -translate-y-1/2 bg-pink-500 text-[10px] text-zinc-900 px-1">24px</span></div>}
                {isInspectMode && <div className="absolute right-6 top-6 bottom-6 w-[1px] bg-pink-500/50"></div>}

                <div className="flex gap-2 relative">
                    {["NLP", "Sentiment", "Real-time"].map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 relative group/tag"
                            onMouseEnter={(e) => { e.stopPropagation(); onHover("tag"); }}
                        >
                            {tag}
                            {isInspectMode && <div className="absolute inset-0 border border-yellow-500/30 bg-yellow-500/5" />}
                        </span>
                    ))}
                    {isInspectMode && <div className="absolute top-1/2 left-[30px] w-[8px] h-[1px] bg-yellow-500"></div>} {/* Gap visualizer mock */}
                </div>

                <div className="p-4 bg-white/50 rounded-xl border border-zinc-200/50 space-y-3 relative group/content">
                    <div className="flex justify-between text-xs text-zinc-500">
                        <span>Input Tokens</span>
                        <span>4.2k / 10k</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full w-[42%] bg-purple-500 rounded-full" />
                    </div>
                    {isInspectMode && <RedlineOverlay type="padding" value="16px" className="inset-0 border-blue-500/20" />}
                </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-2 flex gap-3 relative"
                onMouseEnter={(e) => { e.stopPropagation(); onHover("footer"); }}
            >
                <button className="flex-1 py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-white transition-colors relative group/btn-sec"
                    onMouseEnter={(e) => { e.stopPropagation(); onHover("button-sec"); }}
                >
                    Settings
                    {isInspectMode && <RedlineOverlay type="size" value="44px height" className="inset-0 border-green-500/30" />}
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors relative group/btn-pri"
                    onMouseEnter={(e) => { e.stopPropagation(); onHover("button-pri"); }}
                >
                    Run Model
                    {isInspectMode && <RedlineOverlay type="target" value="Target: 44px" className="inset-0 border-red-500/50" />}
                </button>
            </div>
        </div>
    );
}

function RedlineOverlay({ type, value, className }: { type: string, value: string, className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`absolute pointer-events-none z-10 ${className}`}
        >
            {type === 'padding' && (
                <>
                    <div className="absolute inset-0 border border-blue-500/30 bg-blue-500/5" />
                    <span className="absolute top-1 left-1 bg-blue-500 text-[9px] text-zinc-900 px-1 rounded-sm">{value}</span>
                </>
            )}
            {type === 'size' && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full pl-2 flex items-center">
                    <span className="bg-pink-500 text-[10px] text-zinc-900 px-1.5 py-0.5 rounded">{value}</span>
                    <div className="w-2 h-[1px] bg-pink-500 absolute left-0" />
                </div>
            )}
            {type === 'target' && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full pt-1 flex flex-col items-center">
                    <div className="h-2 w-[1px] bg-red-500" />
                    <span className="bg-red-500 text-[10px] text-zinc-900 px-1.5 py-0.5 rounded whitespace-nowrap">{value}</span>
                </div>
            )}
        </motion.div>
    );
}

function TokenSpecs({ id }: { id: string }) {
    const specs: Record<string, any> = {
        container: {
            name: "Surface / Card",
            tokens: [
                { label: "Background", value: "var(--bg-zinc-50)" },
                { label: "Border", value: "var(--border-zinc-200)" },
                { label: "Radius", value: "var(--radius-2xl) /* 16px */" },
                { label: "Shadow", value: "var(--shadow-2xl)" },
            ]
        },
        header: {
            name: "Section / Header",
            tokens: [
                { label: "Padding", value: "var(--space-6) /* 24px */" },
                { label: "Border Bottom", value: "1px solid var(--zinc-800)" },
                { label: "Gap", value: "var(--space-4) /* 16px */" },
            ]
        },
        tag: {
            name: "Component / Tag",
            tokens: [
                { label: "Background", value: "var(--bg-white)" },
                { label: "Text", value: "var(--text-xs)" },
                { label: "Padding", value: "var(--space-1) var(--space-2-5)" },
                { label: "Radius", value: "var(--radius-md)" },
            ]
        },
        "button-pri": {
            name: "Component / Button Primary",
            tokens: [
                { label: "Height", value: "var(--size-11) /* 44px */" },
                { label: "Target Size", value: "Min 44x44px (AAA)" },
                { label: "Background", value: "var(--bg-white)" },
                { label: "Text Color", value: "var(--text-zinc-950)" },
            ]
        }
    };

    const data = specs[id] || specs['container'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={id}
            className="space-y-4"
        >
            <h3 className="font-semibold text-zinc-900 border-b border-zinc-200 pb-2">{data.name}</h3>
            <ul className="space-y-3">
                {data.tokens.map((t: any, i: number) => (
                    <li key={i} className="flex justify-between items-center text-sm">
                        <span className="text-zinc-500">{t.label}</span>
                        <code className="text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded text-xs font-mono">{t.value}</code>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

