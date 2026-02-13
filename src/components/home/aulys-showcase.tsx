"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Zap, CheckCircle2, Globe2, ArrowRight } from "lucide-react";

export function AulysShowcase() {
    return (
        <section className="container mx-auto px-6 py-24">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 p-8 md:p-12 lg:p-16">

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                                Featured Project
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100">
                                Aulys: The AI Accessibility Engine
                            </h2>
                            <p className="text-lg text-zinc-400 max-w-xl">
                                Figma Plugin & SaaS Platform • Built with React 19, Vite, & TypeScript.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-zinc-100">Ultra Fast</h4>
                                <p className="text-sm text-zinc-500">Scans 500+ layers in &lt;10s</p>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-zinc-100">Auto Fix</h4>
                                <p className="text-sm text-zinc-500">Automated WCAG 2.2 Fixes</p>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-zinc-100">Global</h4>
                                <p className="text-sm text-zinc-500">Internationalization (RTL/CJK)</p>
                            </div>
                        </div>

                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white gap-2">
                            View Technical Case Study <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Visual Mock Side */}
                    <div className="relative">
                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
                            {/* Mock Header */}
                            <div className="h-10 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="mx-auto text-xs text-zinc-500 font-mono">Aulys Plugin - Scan</div>
                            </div>

                            {/* Mock Body - Animated Scan */}
                            <div className="flex-1 p-6 space-y-4 bg-zinc-950/50 relative">

                                {/* Progress Section */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-zinc-400">
                                        <span>Running Audit...</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-blue-500"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "78%" }}
                                            transition={{ duration: 2, ease: "easeInOut" }}
                                        />
                                    </div>
                                </div>

                                {/* List of Items */}
                                <div className="space-y-3 pt-4">
                                    {[1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.5 }}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800/50"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <div className="h-2 w-24 bg-zinc-800 rounded" />
                                            <div className="h-2 w-12 bg-zinc-800/50 rounded ml-auto" />
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 2 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-blue-900/10 border border-blue-500/20"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <div className="h-2 w-32 bg-blue-500/20 rounded" />
                                        <div className="h-2 w-8 bg-blue-500/10 rounded ml-auto" />
                                    </motion.div>
                                </div>

                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 }}
                            className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-zinc-100">Audit Complete</div>
                                <div className="text-xs text-zinc-500">No errors found</div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
