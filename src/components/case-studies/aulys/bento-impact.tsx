import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, LayoutGrid, TrendingUp } from "lucide-react";

export function BentoImpact() {
    return (
        <section className="py-24 px-6 bg-zinc-50">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-16">
                    <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
                        05 — Impact
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Early Results
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Aulys is in active beta. Here&apos;s what&apos;s validated so far — and what&apos;s being built next.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big card — beta testers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 bg-zinc-900 text-white p-10 rounded-[2rem] overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]" aria-hidden="true" />
                        <div className="relative z-10">
                            <Users className="w-10 h-10 text-blue-400 mb-8" aria-hidden="true" />
                            <div className="text-7xl font-black mb-4 tracking-tighter">30</div>
                            <h3 className="text-2xl font-bold mb-2">Beta Testers Active</h3>
                            <p className="text-zinc-300 max-w-md leading-relaxed">
                                30 designers are actively testing the plugin, surfacing real-world edge cases across diverse design systems and enterprise-scale Figma files.
                            </p>
                        </div>
                    </motion.div>

                    {/* Frames scanned */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-600 text-white p-10 rounded-[2rem] flex flex-col justify-center"
                    >
                        <LayoutGrid className="w-8 h-8 text-blue-100 mb-6" aria-hidden="true" />
                        <div className="text-5xl font-black mb-2 tracking-tighter">500+</div>
                        <p className="text-blue-100 font-medium">Frames scanned across beta — in under 10 seconds each.</p>
                    </motion.div>

                    {/* i18n */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-emerald-50 border border-emerald-200 p-10 rounded-[2rem] flex flex-col justify-center"
                    >
                        <Globe className="w-8 h-8 text-emerald-700 mb-6" aria-hidden="true" />
                        <div className="text-3xl font-black text-emerald-900 mb-2 tracking-tight">RTL + CJK</div>
                        <p className="text-emerald-800 font-medium text-sm">
                            Validated multilingual typography support — Arabic, Hebrew, Japanese, and Chinese. An edge case most accessibility tools skip entirely.
                        </p>
                    </motion.div>

                    {/* Tester signal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="bg-zinc-900 text-white p-10 rounded-[2rem] flex flex-col justify-center"
                    >
                        <div className="text-4xl font-black mb-2 tracking-tighter">#1</div>
                        <p className="text-zinc-200 font-semibold text-sm mb-2">Most valued feature by beta testers</p>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                            AI-powered one-click fix suggestions — cited by testers as the feature that made them actually <em>act</em> on violations rather than log and ignore them.
                        </p>
                    </motion.div>

                    {/* What's next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 bg-white border border-zinc-200 p-10 rounded-[2rem]"
                    >
                        <TrendingUp className="w-8 h-8 text-zinc-500 mb-6" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">What&apos;s Next: CI/CD Platform</h3>
                        <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                            Beta feedback made one thing clear: teams want accessibility baked into their <strong>deployment pipeline</strong>, not just the design stage. The Phase 2 SaaS platform — currently ~50% built — will integrate Playwright and axe-core to scan live deployments and block non-compliant builds automatically.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["GPT-4 Remediation", "Playwright Matrix Testing", "CI/CD Pipeline Blocking", "Enterprise Dashboards"].map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-800 shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
