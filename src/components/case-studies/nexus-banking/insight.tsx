"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { Lightbulb, ArrowRight, BrainCircuit } from "lucide-react";

export function Insight() {
    return (
        <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" aria-hidden="true" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
                        02 — The Pivot
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
                        From Features to Intent
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 p-8 rounded-[2rem] border border-white/5 relative"
                    >
                        <div className="absolute top-8 right-8 text-white/5">
                            <BrainCircuit className="w-24 h-24" />
                        </div>
                        <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">The Surface Problem</p>
                        <h3 className="text-2xl font-bold text-zinc-200 mb-4 leading-tight">
                            "The app is too cluttered and hard to navigate."
                        </h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            Conventional wisdom says to simplify the UI, hide secondary features in a hamburger menu, and increase whitespace. But fintechs are in an arms race to bundle services. <em>Reducing</em> features isn't a viable business strategy for a super-app.
                        </p>
                    </motion.div>

                    {/* Arrow (hidden on mobile, visible on desktop) */}
                    <div className="hidden md:flex justify-center -mx-4 z-20">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="w-12 h-12 rounded-full bg-blue-500 border-4 border-zinc-950 flex items-center justify-center text-white"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </div>

                    {/* Arrow for mobile */}
                    <div className="flex md:hidden justify-center my-[-1rem] z-20 relative">
                        <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-zinc-950 flex items-center justify-center text-white">
                            <ArrowRight className="w-4 h-4 rotate-90" />
                        </div>
                    </div>

                    {/* Insight */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-blue-900/20 p-8 rounded-[2rem] border border-blue-500/20 relative"
                    >
                        <div className="absolute top-8 right-8 text-blue-500/10">
                            <Lightbulb className="w-24 h-24" />
                        </div>
                        <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">The Deep Insight</p>
                        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                            Users don't open banking apps to "browse." They open them with a specific financial intent.
                        </h3>
                        <p className="text-blue-100/70 leading-relaxed mb-6">
                            The IA shouldn't organize by <em>product type</em> (Cards, Crypto, Savings). It must organize by <em>user intent</em> (Daily Spending, Wealth Generation, Crisis Management). When intent drives the architecture, complexity is progressively disclosed only when relevant.
                        </p>
                    </motion.div>
                </div>

                {/* Competitor Context */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-zinc-900/80 p-8 rounded-[2rem] border border-white/5"
                >
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-blue-400">Nexus</span> vs <span className="text-zinc-500">Current Super-Apps</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">The Super-App Model</p>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                "The everything app." Apps like Revolut or WeChat dump every possible financial product onto a single, infinitely scrolling dashboard. The user carries the cognitive load of ignoring 90% of the UI to find the 10% they need today.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">The Nexus Model</p>
                            <p className="text-zinc-300 leading-relaxed text-sm">
                                "The intent-driven app." Nexus asks the user to declare their context immediately via a spatial architecture. If they swipe into the "Wealth" space, the daily spending features completely disappear. It offers the feature density of a super-app with the cognitive ease of a single-purpose app.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
