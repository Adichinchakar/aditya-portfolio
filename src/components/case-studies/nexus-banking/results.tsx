import React from "react";
import { motion } from "@/lib/motion";
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
                                Feature velocity is not the same as product value. Every feature added to a home screen is a tax on the user's attention — and attention is the scarcest resource in a daily banking app.
                            </p>
                            <p className="text-blue-200">
                                The core finding: cognitive overload in primary financial flows is a design problem with a design solution. Intent-led architecture — routing users to the right context before surfacing options — reduces abandonment without removing features. The hypothesis is that completion rates on core flows are a stronger predictor of 12-month retention than cross-sell engagement rate.
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
                                            -25% <ArrowUpRight className="w-4 h-4 text-emerald-400 rotate-180" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-blue-100 font-medium">Primary Flow Completion Rate</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            +40% <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-blue-100 font-medium">UI Complexity Score</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            -60% <ArrowUpRight className="w-4 h-4 text-emerald-400 rotate-180" />
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100 font-medium">Retention Rate</span>
                                        <span className="text-2xl font-black text-white flex items-center gap-1">
                                            ↑ Directional Est.
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
