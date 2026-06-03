"use client";

import React from "react";
import { motion } from "@/lib/motion";
import Image from "next/image";

export function WorkSamples() {
    return (
        <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                        03 — Work Samples
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        The Product We Built
                    </h2>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                        High-fidelity screens from the AI tooling suite. Full documentation available under NDA.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {/* Screen 1 — Rubric Generator */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-zinc-900">
                            {/* Browser chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 font-mono max-w-xs mx-auto text-center">
                                        imagine.infosys.com/rubric-generator
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                                    AI Rubric Generator
                                </span>
                            </div>
                            <Image
                                src="/images/infosys-rubric-generator.png"
                                alt="AI Rubric Generator interface showing learning objective input, generated rubric table with criteria and performance levels, and AI suggestions panel"
                                width={1920}
                                height={944}
                                className="w-full h-auto block"
                                quality={90}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            />
                        </div>
                        <p className="text-sm text-zinc-600 mt-3 ml-1">
                            AI Rubric Generator — generates assessment criteria from a learning objective in seconds, with contextual AI suggestions.
                        </p>
                    </motion.div>

                    {/* Screen 2 — Recommendations Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        <div className="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-zinc-900">
                            {/* Browser chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                                </div>
                                <div className="flex-1 mx-4">
                                    <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-500 font-mono max-w-xs mx-auto text-center">
                                        imagine.infosys.com/recommendations
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                                    Adaptive Recommendations
                                </span>
                            </div>
                            <Image
                                src="/images/infosys-recommendations.png"
                                alt="Student recommendations dashboard showing progress tracking, AI-identified skill gaps, and adaptive content recommendations per student"
                                width={1920}
                                height={944}
                                className="w-full h-auto block"
                                quality={90}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            />
                        </div>
                        <p className="text-sm text-zinc-600 mt-3 ml-1">
                            Adaptive Recommendation Engine — surfaces personalised content per student based on ML-identified skill gaps.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
