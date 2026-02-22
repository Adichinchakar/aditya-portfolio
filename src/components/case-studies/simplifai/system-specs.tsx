"use client";

import { motion } from "framer-motion";

export function SystemSpecs() {
    return (
        <section className="py-24 px-6 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center mb-16">
                <h2 className="text-3xl font-bold text-zinc-900 mb-4">Engineered, Not Just Designed</h2>
                <p className="text-zinc-600">
                    A look under the hood of the Simplifai Design System.
                </p>
            </div>

            <div className="relative max-w-2xl mx-auto py-20 px-10 bg-[url('/grid-pattern.svg')] bg-center rounded-3xl border border-zinc-200">
                {/* Central Object: Primary Button */}
                <div className="relative z-10 flex justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-[#6366f1] text-zinc-900 font-medium rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-shadow"
                    >
                        Start Automation
                    </motion.button>
                </div>

                {/* Technical Callouts - Absolute Positioned */}

                {/* Top Callout: Radius */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <div className="bg-white border border-zinc-700 px-3 py-1 rounded text-xs font-mono text-zinc-600 mb-2">
                        border-radius: 8px
                    </div>
                    <div className="h-12 w-px border-l border-dashed border-zinc-600" />
                </motion.div>

                {/* Right Callout: Color */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center"
                >
                    <div className="w-12 h-px border-t border-dashed border-zinc-600" />
                    <div className="bg-white border border-zinc-700 px-3 py-1 rounded text-xs font-mono text-zinc-600 ml-2">
                        Primary: #6366f1
                    </div>
                </motion.div>

                {/* Bottom Callout: Accessibility */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <div className="h-12 w-px border-l border-dashed border-zinc-600" />
                    <div className="bg-white border border-zinc-700 px-3 py-1 rounded text-xs font-mono text-green-400 mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        WCAG 2.2 Compliant
                    </div>
                </motion.div>

                {/* Left Callout: State */}
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center"
                >
                    <div className="bg-white border border-zinc-700 px-3 py-1 rounded text-xs font-mono text-zinc-600 mr-2">
                        :focus-visible ring
                    </div>
                    <div className="w-12 h-px border-t border-dashed border-zinc-600" />
                </motion.div>
            </div>
        </section>
    );
}
