"use client";

import { motion } from "framer-motion";
import { ArrowRight, Palette, Type, Layout, Code2 } from "lucide-react";

const primitives = [
    { id: "p1", label: "purple-500", value: "#8b5cf6", type: "color" },
    { id: "p2", label: "zinc-900", value: "#18181b", type: "color" },
    { id: "p3", label: "text-lg", value: "1.125rem", type: "typography" },
    { id: "p4", label: "rounded-lg", value: "0.5rem", type: "spacing" },
];

const semantic = [
    { id: "s1", label: "primary-main", reference: "p1", description: "Main brand color" },
    { id: "s2", label: "surface-raised", reference: "p2", description: "Card background" },
    { id: "s3", label: "heading-md", reference: "p3", description: "Section titles" },
    { id: "s4", label: "radius-md", reference: "p4", description: "Default border radius" },
];

const components = [
    { id: "c1", label: "Button", tokens: ["s1", "s4"] },
    { id: "c2", label: "Card", tokens: ["s2", "s4"] },
    { id: "c3", label: "Title", tokens: ["s3"] },
];

export function TokenGraph() {
    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Semantic Token Architecture</h2>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        We abstract raw values into semantic meanings, allowing for instant theming and systematic updates across 50+ applications.
                    </p>
                </div>

                <div className="relative overflow-x-auto pb-12">
                    <div className="min-w-[800px] flex justify-between items-center bg-white/20 p-12 rounded-3xl border border-zinc-200">
                        {/* Primitives Column */}
                        <div className="space-y-6">
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-6 text-center">Primitives</div>
                            {primitives.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative flex items-center gap-3 p-3 bg-white border border-zinc-200 rounded-lg w-48 hover:border-zinc-600 transition-colors"
                                >
                                    <div className="w-2 h-full absolute -right-3 top-0 flex items-center justify-center">
                                        <div className="w-full h-px bg-zinc-100 group-hover:bg-zinc-600 transition-colors" />
                                    </div>
                                    <div className={`w-8 h-8 rounded flex items-center justify-center bg-zinc-50 border border-zinc-200`}>
                                        {p.type === 'color' && <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.value }} />}
                                        {p.type === 'typography' && <Type className="w-4 h-4 text-zinc-500" />}
                                        {p.type === 'spacing' && <Layout className="w-4 h-4 text-zinc-500" />}
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-zinc-600">{p.label}</div>
                                        <div className="text-[10px] text-zinc-600">{p.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Arrows Layer 1 */}
                        <div className="flex-1 px-8 relative h-[300px] flex flex-col justify-around opacity-30">
                            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                                <path d="M0,30 C50,30 50,30 100,30" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M0,110 C50,110 50,110 100,110" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M0,190 C50,190 50,190 100,190" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M0,270 C50,270 50,270 100,270" stroke="white" strokeWidth="1" fill="none" />
                            </svg>
                        </div>

                        {/* Semantic Column */}
                        <div className="space-y-6">
                            <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-6 text-center">Semantic Tokens</div>
                            {semantic.map((s, i) => (
                                <motion.div
                                    key={s.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="group relative flex items-center gap-3 p-3 bg-purple-900/10 border border-purple-500/20 rounded-lg w-56 hover:bg-purple-900/20 transition-colors"
                                >
                                    <div className="w-2 h-full absolute -left-3 top-0 flex items-center justify-center">
                                        <div className="w-full h-px bg-purple-500/20 group-hover:bg-purple-500/50 transition-colors" />
                                    </div>
                                    <div className="w-2 h-full absolute -right-3 top-0 flex items-center justify-center">
                                        <div className="w-full h-px bg-purple-500/20 group-hover:bg-purple-500/50 transition-colors" />
                                    </div>

                                    <div className="w-8 h-8 rounded flex items-center justify-center bg-purple-500/20 text-purple-400">
                                        <Palette className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-zinc-800">{s.label}</div>
                                        <div className="text-[10px] text-purple-300/70">{s.description}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Arrows Layer 2 */}
                        <div className="flex-1 px-8 relative h-[300px] flex flex-col justify-around opacity-30">
                            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                                <path d="M0,30 C50,30 50,30 100,40" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                <path d="M0,110 C50,110 50,100 100,100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                <path d="M0,190 C50,190 50,190 100,190" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                {/* Connecting s4 radius to multiple components if needed */}
                                <path d="M0,270 C50,270 50,60 100,60" stroke="white" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        {/* Components Column */}
                        <div className="space-y-6">
                            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-6 text-center">Components</div>
                            {components.map((c, i) => (
                                <motion.div
                                    key={c.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="relative flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-lg w-48 hover:border-blue-500/50 transition-colors"
                                >
                                    <div className="w-2 h-full absolute -left-3 top-0 flex items-center justify-center">
                                        <div className="w-full h-px bg-zinc-100" />
                                    </div>

                                    <div className="w-8 h-8 rounded flex items-center justify-center bg-blue-500/10 text-blue-400">
                                        <Code2 className="w-4 h-4" />
                                    </div>
                                    <div className="font-semibold text-zinc-800">{c.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
