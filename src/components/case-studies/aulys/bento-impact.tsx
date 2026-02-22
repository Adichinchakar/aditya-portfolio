import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, FileCheck } from "lucide-react";

export function BentoImpact() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        The Impact
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">
                        Aulys fundamentally changed how teams approach accessibility, turning a painful compliance requirement into a seamless part of the design and engineering pipeline.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 bg-zinc-900 text-white p-10 rounded-[2rem] overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <FileCheck className="w-10 h-10 text-blue-400 mb-8" />
                            <div className="text-6xl font-black mb-4 tracking-tighter">10.4.0</div>
                            <h3 className="text-2xl font-bold mb-2">Production Verified</h3>
                            <p className="text-zinc-400 max-w-md leading-relaxed">
                                Continuous releases ensure compliance with the latest WCAG 2.2 standards, including Focus Appearance and Target Size requirements.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-blue-50 border border-blue-100 p-10 rounded-[2rem] flex flex-col justify-center"
                    >
                        <Globe className="w-8 h-8 text-blue-500 mb-6" />
                        <div className="text-4xl font-black text-blue-900 mb-2 tracking-tighter">RTL/CJK</div>
                        <p className="text-blue-700/80 font-medium">Ready for global markets with comprehensive multilingual typography support.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-emerald-50 border border-emerald-100 p-10 rounded-[2rem] flex flex-col justify-center"
                    >
                        <Users className="w-8 h-8 text-emerald-500 mb-6" />
                        <div className="text-4xl font-black text-emerald-900 mb-2 tracking-tighter">Teams</div>
                        <p className="text-emerald-700/80 font-medium">Enterprise rollouts featuring unified workspaces, SSO, and CI/CD integrations.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 bg-zinc-50 border border-zinc-200 p-10 rounded-[2rem]"
                    >
                        <h3 className="text-2xl font-bold text-zinc-900 mb-6">The Future of Automation</h3>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                            By leveraging OpenAI's GPT-4, Aulys not only identifies structural DOM issues but actively generates remediation code, pushing automated accessibility testing from a reporting tool to an active engineering companion.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["GPT-4 Remediation", "Playwright Matrix Testing", "Figma Canvas API"].map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 shadow-sm">
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
