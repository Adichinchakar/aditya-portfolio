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
                        Heuristic evaluation against Nielsen's 10 principles surfaced three compounding failure modes — each solvable at the design layer, independent of backend reliability.
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
                        <h3 className="text-xl font-bold text-zinc-900 mb-4">Crisis UX Failure</h3>
                        <p className="text-zinc-600 mb-6">
                            Account freezes from over-sensitive fraud models drop users into a generic support bot with no status visibility, no ETA, and no escalation path. This is a solvable UX problem — not a trust problem. The product works; the crisis flow doesn't.
                        </p>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm italic text-zinc-500">
                            "Your account is frozen. We'll get back to you." — with zero queue time, zero human ETA, zero card status shown.
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
                            Checking accounts, high-yield vaults, and volatile crypto coexist in a single scrolling "Hub" with no visual hierarchy between them. Each new feature launch appends to the bottom — never restructures the top. This is an IA problem with a measurable cost: task abandonment on primary flows increases with every non-core feature added to the home screen.
                        </p>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm italic text-zinc-500">
                            Heuristic #8 (Aesthetic minimalism): "Every extra unit of information competes with the relevant units of information and diminishes their relative visibility."
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
                        <h3 className="text-xl font-bold text-zinc-900 mb-4">Flattened Intent Hierarchy</h3>
                        <p className="text-zinc-600 mb-6">
                            Grocery spending cash and a fluctuating crypto portfolio render at the same visual weight. Users who open the app to check their balance are interrupted by market tickers. The IA conflates two fundamentally different user intents — daily liquidity management and wealth generation — into a single undifferentiated surface.
                        </p>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm italic text-zinc-500">
                            The fix isn't removing features — it's routing users to the right context before showing them anything. Intent-first navigation over feature-first navigation.
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
