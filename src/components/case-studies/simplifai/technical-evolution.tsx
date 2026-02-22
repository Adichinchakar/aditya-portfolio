"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight, GitBranch, FileCode } from "lucide-react";

export function TechnicalEvolution() {
    return (
        <section className="py-32 px-6 bg-zinc-50 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Narrative */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                                <GitBranch className="w-3.5 h-3.5" />
                                Growth Arc
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                                From Abstract Logic to <br />
                                <span className="text-indigo-400">DOM Tree Analysis</span>
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                In Simplifai, I built engines to manage abstract data flows. Visual nodes represented logical steps, detached from the actual code structure.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mt-4">
                                This "Abstract Node Logic" was the precursor to <strong className="text-zinc-900">Aulys</strong>. I realized that accessible design engineering required treating HTML elements themselves as nodes in a live tree—scanning the DOM in real-time rather than just defining abstract flows.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mt-4 border-l-2 border-indigo-500 pl-6 italic">
                                "This shift in thinking marked my official transition from pure UX Design to Design Engineering."
                            </p>
                        </div>
                    </div>

                    {/* Right: Animation Demo */}
                    <div className="relative">
                        {/* Card Container */}
                        <div className="relative rounded-3xl border border-zinc-200 bg-white/50 backdrop-blur-xl p-8 overflow-hidden min-h-[400px] flex items-center justify-center">

                            {/* Animated Flow */}
                            <div className="relative flex items-center gap-12 sm:gap-20">
                                {/* Node 1: Incoming Email */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10"
                                >
                                    <div className="w-24 h-24 rounded-2xl bg-zinc-100 border-2 border-zinc-700 flex flex-col items-center justify-center gap-2 shadow-xl relative group">
                                        <div className="absolute -top-3 px-3 py-1 bg-zinc-700 rounded-full text-[10px] uppercase font-bold text-zinc-700 tracking-wider">Trigger</div>
                                        <Mail className="w-8 h-8 text-blue-400" />
                                        <span className="text-xs font-medium text-zinc-700">Incoming Email</span>

                                        {/* Port */}
                                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-zinc-200" />
                                    </div>
                                </motion.div>

                                {/* Connection Line */}
                                <div className="absolute left-24 right-24 h-[2px] bg-zinc-100 top-1/2 -translate-y-1/2 -z-0">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                    />
                                </div>

                                {/* Floating Packet Animation */}
                                <motion.div
                                    initial={{ left: "28%", opacity: 0 }}
                                    whileInView={{ left: "65%", opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
                                    className="absolute top-1/2 -translate-y-1/2 z-20"
                                >
                                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                                </motion.div>


                                {/* Node 2: GPT-4 Analysis */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="relative z-10"
                                >
                                    <div className="w-24 h-24 rounded-2xl bg-zinc-100 border-2 border-purple-500/50 flex flex-col items-center justify-center gap-2 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative">
                                        <div className="absolute -top-3 px-3 py-1 bg-purple-600 rounded-full text-[10px] uppercase font-bold text-zinc-900 tracking-wider shadow-lg">Action</div>
                                        <Sparkles className="w-8 h-8 text-purple-400" />
                                        <span className="text-xs font-medium text-purple-200">GPT-4 Analysis</span>

                                        {/* Port */}
                                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full border-2 border-zinc-200" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Code Overlay (Aulys Reference) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="absolute bottom-6 bg-zinc-50/90 border border-zinc-200 rounded-lg p-3 font-mono text-xs text-zinc-600 backdrop-blur-md shadow-2xl max-w-[260px]"
                            >
                                <div className="flex items-center gap-2 mb-2 text-indigo-400 border-b border-zinc-200 pb-1">
                                    <FileCode className="w-3 h-3" />
                                    <span>aulys_engine.ts</span>
                                </div>
                                <div className="opacity-70">
                                    <span className="text-purple-400">const</span> tree = <span className="text-blue-400">document</span>.querySelectorAll(<span className="text-green-400">"*"</span>);<br />
                                    tree.forEach(node ={">"} analyze(node));
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
