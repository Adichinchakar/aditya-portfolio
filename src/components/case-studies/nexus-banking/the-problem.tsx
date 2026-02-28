import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, LayoutTemplate, SplitSquareHorizontal } from "lucide-react";

export function TheProblem() {
    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" aria-hidden="true"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
                        The UX Audit: Signal vs. Noise
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        When analyzing user sentiment, three critical failure points emerged that completely invalidate a sleek, shiny UI.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Problem 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200/50"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-4">The Trust Deficit</h3>
                        <p className="text-zinc-600 mb-6">
                            Users report sudden account freezes triggered by over-sensitive fraud models. When funds are locked, users are thrown into a generic "bot-loop" support chat with zero transparency.
                        </p>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm italic text-zinc-500">
                            "A beautiful interface is instantly meaningless if the user feels abandoned during a financial emergency."
                        </div>
                    </motion.div>

                    {/* Problem 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200/50"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                            <LayoutTemplate className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-4">Architectural Bloat</h3>
                        <p className="text-zinc-600 mb-6">
                            Merging standard fiat checking, high-yield vaults, and highly volatile crypto into a single, endlessly scrolling "Hub" creates dangerous ambiguity and massive cognitive load.
                        </p>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm italic text-zinc-500">
                            "We are treating a high-stakes financial dashboard like a social media feed. This violates minimalist design heuristics."
                        </div>
                    </motion.div>

                    {/* Problem 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-200/50"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                            <SplitSquareHorizontal className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-4">Broken Mental Models</h3>
                        <p className="text-zinc-600 mb-6">
                            Cash meant for this week's groceries sits visually adjacent to a rapidly fluctuating crypto portfolio. Visual hierarchies are flattened across highly disparate asset classes.
                        </p>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm italic text-zinc-500">
                            "Daily liquidity and long-term volatile wealth generation require fundamentally different optical treatments to context-switch the brain."
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
