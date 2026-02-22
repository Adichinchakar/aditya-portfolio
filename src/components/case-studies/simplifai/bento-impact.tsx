"use client";

import { motion } from "framer-motion";
import { Zap, Users, ShieldCheck, FileText, Code } from "lucide-react";

export function BentoImpact() {
    return (
        <section className="py-24 px-6 bg-zinc-50">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Speed (Large Impact) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <Zap className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-zinc-600 font-medium tracking-wide uppercase text-xs">Development Velocity</span>
                            </div>

                            <h3 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-2 tracking-tight">
                                42%
                            </h3>
                            <p className="text-xl text-zinc-700 font-medium mb-8">
                                Faster Development Cycles
                            </p>

                            <div className="p-4 bg-zinc-50/50 rounded-xl border border-zinc-200/50 backdrop-blur-sm max-w-md">
                                <p className="text-blue-200 text-sm font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                    So What? <span className="text-zinc-600 font-normal">Speeding up dev means significantly lower R&D burn.</span>
                                </p>
                            </div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap className="w-96 h-96 text-blue-500" />
                        </div>
                    </motion.div>

                    {/* Card 2: Rigor (User Studies) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-zinc-700 transition-colors"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-purple-500/10 rounded-lg">
                                    <Users className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-zinc-600 font-medium tracking-wide uppercase text-xs">Validation</span>
                            </div>

                            <h3 className="text-5xl font-bold text-zinc-900 mb-2 tracking-tight">
                                100+
                            </h3>
                            <p className="text-lg text-zinc-700 font-medium mb-8">
                                User Studies Conducted
                            </p>

                            <div className="p-4 bg-zinc-50/50 rounded-xl border border-zinc-200/50 backdrop-blur-sm">
                                <p className="text-purple-200 text-sm font-medium">
                                    So What? <span className="text-zinc-600 font-normal block mt-1">Validated decisions reduce post-launch rework.</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Scale (Design System) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3 bg-white border border-zinc-200 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-green-500/10 rounded-lg">
                                        <Code className="w-5 h-5 text-green-400" />
                                    </div>
                                    <span className="text-zinc-600 font-medium tracking-wide uppercase text-xs">Scalability</span>
                                </div>

                                <h3 className="text-3xl font-bold text-zinc-900 mb-4">
                                    Custom Design System
                                </h3>

                                <div className="p-4 bg-zinc-50/50 rounded-xl border border-zinc-200/50 backdrop-blur-sm inline-block">
                                    <p className="text-green-200 text-sm font-medium flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4" />
                                        So What? <span className="text-zinc-600 font-normal">Unified UI reduces technical debt & UI bugs.</span>
                                    </p>
                                </div>
                            </div>

                            {/* Code Snippet Visualization */}
                            <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-4 font-mono text-xs text-zinc-600 overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-8 bg-white/50 border-b border-zinc-200 flex items-center px-3 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    <span className="ml-2 text-zinc-600">theme.ts</span>
                                </div>
                                <div className="mt-8 space-y-1">
                                    <p><span className="text-purple-400">export const</span> <span className="text-yellow-200">theme</span> = {"{"}</p>
                                    <p className="pl-4"><span className="text-blue-400">colors</span>: {"{"}</p>
                                    <p className="pl-8"><span className="text-blue-300">primary</span>: <span className="text-green-300">"#3b82f6"</span>,</p>
                                    <p className="pl-8"><span className="text-blue-300">secondary</span>: <span className="text-green-300">"#18181b"</span>,</p>
                                    <p className="pl-8"><span className="text-blue-300">accent</span>: <span className="text-green-300">"#8b5cf6"</span>,</p>
                                    <p className="pl-4">{"},"}</p>
                                    <p className="pl-4"><span className="text-blue-400">spacing</span>: {"{"}</p>
                                    <p className="pl-8"><span className="text-blue-300">sm</span>: <span className="text-orange-300">4</span>, <span className="text-zinc-600">// 0.25rem</span></p>
                                    <p className="pl-8"><span className="text-blue-300">md</span>: <span className="text-orange-300">8</span>, <span className="text-zinc-600">// 0.5rem</span></p>
                                    <p className="pl-4">{"}"}</p>
                                    <p>{"}"}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
