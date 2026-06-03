"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Palette, Type, Box, CornerUpRight, ArrowRight } from "lucide-react";

type TokenId = "c-brand" | "c-surface" | "c-text" | "t-heading" | "t-body" | "s-gap" | "s-radius";
type SemanticId = "bg-interactive" | "bg-surface" | "text-primary" | "text-secondary" | "space-section" | "radius-ui";
type ComponentId = "Button" | "Card" | "Input" | "Badge" | "Sidebar";

interface Primitive {
    id: TokenId;
    label: string;
    raw: string;
    type: "color" | "type" | "space";
    preview: string; // tailwind bg or text class, or emoji
}

interface Semantic {
    id: SemanticId;
    label: string;
    alias: string;
    primitives: TokenId[];
}

interface ComponentItem {
    id: ComponentId;
    uses: SemanticId[];
}

const primitives: Primitive[] = [
    { id: "c-brand", label: "purple-600", raw: "#7C3AED", type: "color", preview: "#7C3AED" },
    { id: "c-surface", label: "zinc-50", raw: "#FAFAFA", type: "color", preview: "#FAFAFA" },
    { id: "c-text", label: "zinc-900", raw: "#18181B", type: "color", preview: "#18181B" },
    { id: "t-heading", label: "font-black", raw: "900", type: "type", preview: "" },
    { id: "t-body", label: "text-sm", raw: "14px", type: "type", preview: "" },
    { id: "s-gap", label: "space-4", raw: "16px", type: "space", preview: "" },
    { id: "s-radius", label: "rounded-lg", raw: "8px", type: "space", preview: "" },
];

const semantics: Semantic[] = [
    { id: "bg-interactive", label: "bg.interactive", alias: "Button bg", primitives: ["c-brand"] },
    { id: "bg-surface", label: "bg.surface", alias: "Card bg", primitives: ["c-surface"] },
    { id: "text-primary", label: "text.primary", alias: "Heading text", primitives: ["c-text", "t-heading"] },
    { id: "text-secondary", label: "text.secondary", alias: "Body copy", primitives: ["c-text", "t-body"] },
    { id: "space-section", label: "space.section", alias: "Layout gap", primitives: ["s-gap"] },
    { id: "radius-ui", label: "radius.ui", alias: "Corner radius", primitives: ["s-radius"] },
];

const components: ComponentItem[] = [
    { id: "Button", uses: ["bg-interactive", "text-primary", "radius-ui"] },
    { id: "Card", uses: ["bg-surface", "space-section", "radius-ui"] },
    { id: "Input", uses: ["bg-surface", "text-secondary", "radius-ui"] },
    { id: "Badge", uses: ["bg-surface", "text-secondary", "radius-ui"] },
    { id: "Sidebar", uses: ["bg-surface", "space-section"] },
];

export function TokenGraph() {
    const [activeToken, setActiveToken] = useState<TokenId | null>(null);
    const [activeComponent, setActiveComponent] = useState<ComponentId | null>(null);

    // Compute which semantics are lit
    const litSemantics: Set<SemanticId> = new Set();
    const litPrimitives: Set<TokenId> = new Set();

    if (activeToken) {
        semantics.forEach(s => {
            if (s.primitives.includes(activeToken)) litSemantics.add(s.id);
        });
        litPrimitives.add(activeToken);
    }
    if (activeComponent) {
        const comp = components.find(c => c.id === activeComponent);
        comp?.uses.forEach(sid => {
            litSemantics.add(sid);
            const sem = semantics.find(s => s.id === sid);
            sem?.primitives.forEach(pid => litPrimitives.add(pid));
        });
    }

    const isHighlighting = activeToken !== null || activeComponent !== null;

    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-100">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Palette className="w-3.5 h-3.5" />
                        Token Architecture
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4"
                    >
                        One change.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            Everywhere, instantly.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-xl font-medium"
                    >
                        Click any token or component below to trace its connections through the system. This is how a rebrand takes 4 minutes, not 4 weeks.
                    </motion.p>
                </div>

                {/* Interactive graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 overflow-x-auto"
                >
                    <div className="min-w-[760px] grid grid-cols-[1fr_80px_1fr_80px_1fr] items-start gap-0">

                        {/* Column 1: Primitives */}
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-5 text-center">Primitive Tokens</div>
                            <div className="space-y-3">
                                {primitives.map((p) => {
                                    const lit = !isHighlighting || litPrimitives.has(p.id);
                                    return (
                                        <button
                                            key={p.id}
                                            onClick={() => setActiveToken(activeToken === p.id ? null : p.id)}
                                            className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${activeToken === p.id
                                                ? "bg-purple-50 border-purple-300 shadow-sm"
                                                : lit
                                                    ? "bg-white border-zinc-200 hover:border-zinc-300"
                                                    : "bg-zinc-50 border-zinc-100 opacity-30"
                                                }`}
                                        >
                                            <div className="w-7 h-7 rounded-lg border border-zinc-200 flex items-center justify-center flex-shrink-0 bg-white">
                                                {p.type === "color" && (
                                                    <div className="w-4 h-4 rounded-md border border-zinc-200" style={{ backgroundColor: p.preview }} />
                                                )}
                                                {p.type === "type" && <Type className="w-3.5 h-3.5 text-zinc-500" />}
                                                {p.type === "space" && <Box className="w-3.5 h-3.5 text-zinc-500" />}
                                            </div>
                                            <div className="overflow-hidden">
                                                <div className="text-xs font-mono font-semibold text-zinc-700 truncate">{p.label}</div>
                                                <div className="text-[10px] text-zinc-400 truncate">{p.raw}</div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Arrow 1 */}
                        <div className="flex items-center justify-center pt-10">
                            <ArrowRight className="w-5 h-5 text-zinc-300" />
                        </div>

                        {/* Column 2: Semantic tokens */}
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-purple-500 mb-5 text-center">Semantic Tokens</div>
                            <div className="space-y-3">
                                {semantics.map((s) => {
                                    const lit = !isHighlighting || litSemantics.has(s.id);
                                    return (
                                        <div
                                            key={s.id}
                                            className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${lit
                                                ? "bg-purple-50 border-purple-200"
                                                : "bg-zinc-50 border-zinc-100 opacity-20"
                                                }`}
                                        >
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${lit ? "bg-purple-100" : "bg-zinc-100"}`}>
                                                <CornerUpRight className={`w-3.5 h-3.5 ${lit ? "text-purple-500" : "text-zinc-400"}`} />
                                            </div>
                                            <div className="overflow-hidden">
                                                <div className={`text-xs font-mono font-semibold truncate ${lit ? "text-purple-700" : "text-zinc-500"}`}>{s.label}</div>
                                                <div className="text-[10px] text-zinc-400 truncate">{s.alias}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Arrow 2 */}
                        <div className="flex items-center justify-center pt-10">
                            <ArrowRight className="w-5 h-5 text-zinc-300" />
                        </div>

                        {/* Column 3: Components */}
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-5 text-center">Components</div>
                            <div className="space-y-3">
                                {components.map((c) => {
                                    const isActive = activeComponent === c.id;
                                    const hasLitSemantic = isHighlighting && c.uses.some(s => litSemantics.has(s));
                                    const dimmed = isHighlighting && !hasLitSemantic && !isActive;
                                    return (
                                        <button
                                            key={c.id}
                                            onClick={() => setActiveComponent(activeComponent === c.id ? null : c.id)}
                                            className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left font-semibold text-sm transition-all duration-200 ${isActive
                                                ? "bg-blue-50 border-blue-300 shadow-sm text-blue-800"
                                                : dimmed
                                                    ? "bg-zinc-50 border-zinc-100 opacity-20 text-zinc-500"
                                                    : hasLitSemantic
                                                        ? "bg-blue-50/50 border-blue-200 text-blue-700"
                                                        : "bg-white border-zinc-200 hover:border-zinc-300 text-zinc-700"
                                                }`}
                                        >
                                            <span>{c.id}</span>
                                            <span className="text-[10px] font-mono font-normal text-zinc-400">{c.uses.length} tokens</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Bottom insight strip */}
                    <AnimatePresence>
                        {isHighlighting && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                className="mt-10 flex items-center gap-3 p-4 rounded-2xl bg-purple-50 border border-purple-200"
                            >
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse flex-shrink-0" />
                                <p className="text-sm text-purple-700 font-medium">
                                    {activeToken
                                        ? `"${primitives.find(p => p.id === activeToken)?.label}" flows into ${litSemantics.size} semantic token${litSemantics.size !== 1 ? "s" : ""}, powering every component that uses them.`
                                        : `"${activeComponent}" is built from ${litSemantics.size} semantic tokens, rooted in ${litPrimitives.size} primitive${litPrimitives.size !== 1 ? "s" : ""}.`
                                    }
                                </p>
                                <button
                                    onClick={() => { setActiveToken(null); setActiveComponent(null); }}
                                    className="ml-auto text-xs text-purple-400 hover:text-purple-600 font-semibold flex-shrink-0"
                                >
                                    Clear
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
