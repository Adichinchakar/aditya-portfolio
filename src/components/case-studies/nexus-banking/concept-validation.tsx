"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function ConceptValidation() {
    return (
        <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Methodology</p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
                        Concept Validation & Testing
                    </h2>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl text-lg">
                        We ran a 3-week user research sprint with 40 participants across 3 continents to validate the intent-based architecture.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-6 h-6 text-red-400" />
                            <h3 className="text-xl font-bold text-white">What Failed</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">The "Voice Only" AI concept:</strong> We tested a voice-driven financial assistant. Users hated speaking about their finances out loud in public or shared spaces. Privacy trumped convenience.
                                </p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">Auto-categorization limits:</strong> Our AI categorized 95% of transactions correctly, but the 5% error rate caused outsized anxiety. Users needed an obvious "edit category" escape hatch.
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            <h3 className="text-xl font-bold text-white">What Survived</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">The "Crisis Mode":</strong> A dedicated panic button to freeze cards, block transfers, and initiate fraud claims was universally praised for reducing cognitive load during stressful moments.
                                </p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">Intent-based IA:</strong> Organizing by "Pay," "Save," and "Borrow" rather than checking/savings accounts resonated with users across all demographic groups.
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
