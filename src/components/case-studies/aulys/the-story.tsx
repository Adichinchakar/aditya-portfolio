import React from "react";
import { motion } from "@/lib/motion";
import { Layers, Cloud, ArrowRight } from "lucide-react";
import { DecisionCallout } from "@/components/ui/decision-callout";

export function TheStory() {
    return (
        <section className="py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-20">
                    <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">
                        03 — How I Built It
                    </p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white"
                    >
                        From Canvas to Cloud
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-300 max-w-2xl mx-auto mb-4"
                    >
                        I started with a focused Figma Plugin solving a single, painful problem: contrast checking inline. Once beta users validated it, a larger architectural vision took shape.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18 }}
                        className="text-sm text-zinc-600 max-w-xl mx-auto"
                    >
                        I directed AI tools for all engineering execution — compressing what would have been a 6-month MVP into 10 weeks. Every product decision, architecture choice, and UX direction was mine. The AI was the builder; I was the product owner.
                    </motion.p>
                </div>

                <div className="mb-12">
                    <DecisionCallout
                        chose="Chunked traversal — process nodes in batches of 50, yield between batches"
                        rejected="Single-pass full-page scan"
                        why="Single-pass blocked Figma's UI thread for 3–4 seconds on complex frames — the canvas froze and users closed the plugin. Chunked approach takes the same total time but stays non-blocking throughout."
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 relative">
                    {/* Connector */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-zinc-700 border border-zinc-600 z-10" aria-hidden="true">
                        <ArrowRight className="w-4 h-4 text-zinc-300" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-zinc-800 border border-zinc-700 backdrop-blur-sm"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                                <Layers className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <span className="text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                                ✓ Live in Beta
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Phase 1: Figma Plugin</h3>
                        <p className="text-zinc-300 leading-relaxed mb-6">
                            A local scanner embedded directly in the Figma canvas. I implemented the Polychrom algorithm for accurate WCAG AAA contrast, text-spacing validation, and AI-powered one-click fixes — all without leaving the design tool.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-300 font-medium">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                                Interactive visual overlays on the Figma canvas
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                                i18n support — RTL and CJK typography
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                                Scans 500+ layers in under 10 seconds
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" aria-hidden="true" />
                                GPT-4 suggestions for one-click fixes
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-[2rem] bg-zinc-800 border border-zinc-700 backdrop-blur-sm"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                                <Cloud className="w-6 h-6" aria-hidden="true" />
                            </div>
                            <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                                ⚡ In Development
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Phase 2: CI/CD SaaS</h3>
                        <p className="text-zinc-300 leading-relaxed mb-6">
                            Beta signal validated a bigger need: teams wanted accessibility checks integrated into their engineering pipeline, not just design. I&apos;m now building a platform using Playwright and axe-core to run scheduled audits and block non-compliant deployments.
                        </p>
                        <ul className="space-y-3 text-sm text-zinc-300 font-medium">
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                                Headless browser scanning via Playwright
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                                CI/CD pipeline blocking for non-compliant builds
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                                Executive compliance dashboards and reports
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                                Multi-tenant workspace with SSO (roadmap)
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
