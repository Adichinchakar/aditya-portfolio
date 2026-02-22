import React from "react";
import { motion } from "framer-motion";
import { Layers, Cloud, ArrowRight } from "lucide-react";

export function TheStory() {
    return (
        <section className="py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        From Canvas to Cloud
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        We started small, helping designers fix contrast issues in Figma. But we quickly realized accessibility is a continuous engineering problem, not just a design checkpoint.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative">
                    {/* Line connecting the two */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700">
                        <ArrowRight className="w-4 h-4 text-zinc-400" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/30">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Phase 1: Figma Plugin</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            A robust local scanner capable of analyzing 500+ layers in under 10 seconds. We implemented the Polychrom algorithm for accurate WCAG AAA text contrast, text spacing validation, and AI-powered one-click fixes.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-500 font-medium">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                Interactive visual overlays
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                i18n support (RTL/CJK)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                10s large-document scans
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-[2rem] bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                            <Cloud className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Phase 2: CI/CD SaaS</h3>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            To close the loop, we built a global platform. Integrating Playwright and axe-core, the SaaS application monitors deployments, runs scheduled audits, and provides compliance reports for enterprise teams.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-500 font-medium">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Headless browser scanning
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                CI/CD pipeline blocking
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Executive compliance reports
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
