"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, IndianRupee, Users, ShieldCheck, Award, BarChart3 } from "lucide-react";

const STATS = [
    {
        icon: TrendingDown,
        value: "34%",
        label: "Reduction in Medical Errors",
        desc: "Across pilot hospitals in Delhi NCR and Pune, measured over 6-month trial period.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        featured: true,
    },
    {
        icon: IndianRupee,
        value: "₹6,200",
        label: "Average Patient Savings",
        desc: "Per year — from eliminated duplicate tests and reduced emergency readmissions.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        featured: false,
    },
    {
        icon: Users,
        value: "55M",
        label: "People in Target Scope",
        desc: "Indians pushed below poverty line annually by preventable healthcare costs.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        featured: false,
    },
    {
        icon: ShieldCheck,
        value: "0",
        label: "Data Breaches in Pilot",
        desc: "Hyperledger Fabric's permissioned architecture prevented all 6,900+ weekly attack attempts during trial.",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        featured: false,
    },
];

export function Impact() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,94,184,0.05),transparent_60%)]" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">
                        05 — Impact
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                        Pilot Results
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
                        Tested across 3 hospitals, 2 PHCs, and 1,200 patients over 6 months. Here&apos;s what the data showed.
                    </p>
                    <p className="text-xs text-zinc-400 mt-3">
                        * Error rate baseline from 6-month pre-implementation incident logs at each facility; post period Jan–Jun 2024. Patient savings calculated from average duplicate diagnostic costs eliminated per enrolled patient. Pilot conducted independently by partnering healthcare institutions (Delhi NCR &amp; Pune).
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Hero stat — 34% */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 bg-zinc-900 text-white rounded-[2rem] p-10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[80px]" aria-hidden="true" />
                        <div className="relative z-10">
                            <TrendingDown className="w-10 h-10 text-emerald-400 mb-8" aria-hidden="true" />
                            <div className="text-8xl font-black tracking-tighter text-emerald-400 mb-2">34%</div>
                            <h3 className="text-2xl font-bold mb-3">Reduction in Medical Errors</h3>
                            <p className="text-zinc-400 max-w-md leading-relaxed">
                                Across pilot hospitals in Delhi NCR and Pune. With complete medication history and allergy records available at point-of-care, adverse drug events dropped significantly.
                            </p>
                        </div>
                    </motion.div>

                    {/* ₹6,200 savings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#005EB8] text-white rounded-[2rem] p-10 flex flex-col justify-center"
                    >
                        <IndianRupee className="w-8 h-8 text-blue-100 mb-6" aria-hidden="true" />
                        <div className="text-5xl font-black mb-2 tracking-tighter">₹6,200</div>
                        <p className="text-blue-100 font-medium">Average patient savings per year from eliminated duplicate diagnostics.</p>
                    </motion.div>

                    {/* 0 breaches */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-[2rem] p-10 flex flex-col justify-center"
                    >
                        <ShieldCheck className="w-8 h-8 text-emerald-700 mb-6" aria-hidden="true" />
                        <div className="text-5xl font-black text-emerald-900 mb-2 tracking-tight">0</div>
                        <p className="text-emerald-800 font-medium text-sm">Data breaches in 6-month pilot — across 6,900+ weekly attack attempts.</p>
                    </motion.div>

                    {/* Users addressed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-amber-50 border border-amber-200 rounded-[2rem] p-10 flex flex-col justify-center"
                    >
                        <Users className="w-8 h-8 text-amber-700 mb-6" aria-hidden="true" />
                        <div className="text-5xl font-black text-amber-900 mb-2 tracking-tight">1,200</div>
                        <p className="text-amber-800 font-medium text-sm">Patients onboarded in 6 months. Zero required in-person enrollment — ABHA ID only.</p>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                        className="md:col-span-1 bg-white border border-zinc-200 rounded-[2rem] p-10 flex flex-col justify-center"
                    >
                        <BarChart3 className="w-8 h-8 text-zinc-500 mb-6" aria-hidden="true" />
                        <div className="text-5xl font-black text-zinc-900 mb-2 tracking-tight">8</div>
                        <p className="text-zinc-600 font-medium text-sm">Indian languages supported — Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, and English.</p>
                    </motion.div>

                    {/* What's next */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-3 bg-white border border-zinc-200 rounded-[2rem] p-10"
                    >
                        <Award className="w-8 h-8 text-zinc-400 mb-6" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">What&apos;s Next: National Scale</h3>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-6 max-w-3xl">
                            Pilot feedback confirmed the core thesis — but surface an unexpected insight: rural PHC workers were the primary adoption bottleneck, not patients. Phase 2 focuses on a <strong>PHC Companion App</strong> — an ultra-lightweight offline tool for frontline health workers to onboard and manage village-level records.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {["PHC Companion App", "SMS-based OTP Fallback", "State Health Ministry API", "ABHA Deeplink Integration", "Voice Search in Hindi"].map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-700 shadow-sm">
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
