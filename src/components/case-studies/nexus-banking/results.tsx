import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Results() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Strategic Takeaway & Hypothesis
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                True product innovation in FinTech isn't about adding another feature to a dashboard; it's about making complex financial safety feel completely effortless.
                            </p>
                            <p className="text-blue-200">
                                The industry got distracted by the shiny allure of "Super-Apps." But a Super-App is only successful if the foundational floor is solid concrete. When we design for the user's peace of mind first, secondary engagement metrics naturally follow.
                            </p>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                                    Strategic KPI Targets (Hypothesis)
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-blue-100 font-medium">Support Ticket Volume</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            -30% <ArrowUpRight className="w-4 h-4 text-emerald-400 rotate-180" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-blue-100 font-medium">Task Completion Speed</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            +40% <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-blue-100 font-medium">Dashboard Visual Bloat</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            -60% <ArrowUpRight className="w-4 h-4 text-emerald-400 rotate-180" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100 font-medium">Customer Acquisition Cost</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            ↓ Directional Est.
                                        </span>
                                    </div>
                                </div>
                                <p className="text-blue-200 text-sm mt-4 border-t border-white/10 pt-4">
                                    * These are directional targets derived from industry benchmarks and competitive analysis. Validation would require A/B testing in production.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
