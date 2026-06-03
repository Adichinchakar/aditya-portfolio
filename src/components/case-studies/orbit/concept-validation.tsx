"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function ConceptValidation() {
    return (
        <section className="py-24 px-6 bg-[#0e0e0e] relative overflow-hidden border-y border-white/5">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-orange-400 uppercase tracking-[0.2em] mb-4">Methodology</p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
                        Concept Validation & Testing
                    </h2>
                    <p className="text-zinc-400 leading-relaxed max-w-2xl text-lg">
                        Before building the map visualization, we ran 5 validation sessions with cross-functional managers using low-fidelity clickable prototypes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-6 h-6 text-red-400" />
                            <h3 className="text-xl font-bold text-white">What Failed</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">The "Network Graph" view:</strong> Early concepts used node-and-edge graphs to show reporting lines. Users found it visually overwhelming and too abstract to use for daily tasks.
                                </p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">Over-engineered filters:</strong> We provided 15+ filter parameters (location, tenure, skills, etc.). Managers were suffering from paradox of choice.
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            <h3 className="text-xl font-bold text-white">What Survived</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">Spatial Hierarchy:</strong> The "zoom-in" interaction paradigm (Company → Division → Team → Person) felt completely natural, akin to Google Maps.
                                </p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-400 leading-relaxed">
                                    <strong className="text-zinc-200">Contextual search:</strong> Users wanted to search for "designers in Berlin" via a single input field rather than toggling 5 different dropdowns.
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
