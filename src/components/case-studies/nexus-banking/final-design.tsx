import React from "react";
import { motion } from "@/lib/motion";

export function FinalDesign() {
    return (
        <section className="py-24 bg-zinc-950 text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                        Visualizing the Solution
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        High-fidelity structural concepts demonstrating the "Intent-Led" redesign in practice.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* View 1 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="font-bold text-xl mb-4 text-zinc-100">1. The Bifurcated Home</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                Massive, clean numerical display of fiat balance.
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                Physical toggle to switch environment from "Spend" to "Invest".
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                Bottom nav reduced from 5 items to 3.
                            </li>
                        </ul>
                    </motion.div>

                    {/* View 2 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="font-bold text-xl mb-4 text-zinc-100">2. The Action Drawer</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                Swipe up reveals curated, search-driven action menu.
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                Replaces static, overwhelming grid of icons.
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                Focus on high-legibility text and fast hit-targets.
                            </li>
                        </ul>
                    </motion.div>

                    {/* View 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 relative overflow-hidden group md:col-span-2 lg:col-span-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h3 className="font-bold text-xl mb-4 text-red-400">3. The Crisis Node</h3>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                Live progress bar showing internal review steps.
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                Prominent "Emergency Cash Release" feature.
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                Stripped of all promotional/upsell UI elements.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
