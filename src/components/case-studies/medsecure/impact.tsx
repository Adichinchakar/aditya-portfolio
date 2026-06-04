"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { TrendingDown, IndianRupee, Users, ShieldCheck, Award, BarChart3, AlertTriangle } from "lucide-react";
import { AnimatedNumber } from "@/components/ui/animated-number";

const STATS = [
    {
        icon: TrendingDown,
        value: "Major",
        label: "Projected Reduction in Medical Errors",
        desc: "Modeled across representative deployment scenarios.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        featured: true,
    },
    {
        icon: IndianRupee,
        value: "Lower",
        label: "Projected Patient Cost",
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
        label: "Public-Facing Endpoints",
        desc: "Permissioned Hyperledger architecture keeps records off any public network by default.",
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
                        Projected Impact
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
                        Modeled against a representative deployment — community health centres and district hospitals. Here&apos;s what the model projects.
                    </p>
                    <p className="text-xs text-zinc-400 mt-3">
                        * MedSecure is a concept project. Figures are projections modeled from published health-system benchmarks and prototype usability testing — not outcomes from a deployed clinical pilot.
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
                            <div className="text-8xl font-black tracking-tighter text-emerald-400 mb-2">
                                <AnimatedNumber value={34} />%
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Projected Reduction in Medical Errors</h3>
                            <p className="text-zinc-400 max-w-md leading-relaxed">
                                Modeled across representative deployment scenarios. With complete medication history and allergy records available at point-of-care, adverse drug events are projected to drop significantly.
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
                        <div className="text-5xl font-black mb-2 tracking-tighter">
                            ₹<AnimatedNumber value={6200} />
                        </div>
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
                        <p className="text-emerald-800 font-medium text-sm">Public-facing endpoints in the architecture. A permissioned Hyperledger design keeps records off any public network by default.</p>
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
                        <div className="text-5xl font-black text-amber-900 mb-2 tracking-tight">
                            100%
                        </div>
                        <p className="text-amber-800 font-medium text-sm">Remote onboarding by design — zero in-person enrollment required, ABHA ID only.</p>
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

                    {/* V1 failure → V2 fix story — the most important design lesson */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.37 }}
                        className="md:col-span-3 bg-zinc-900 text-white rounded-[2rem] p-10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-amber-500/8 rounded-full blur-[80px]" aria-hidden="true" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-amber-400" aria-hidden="true" />
                                </div>
                                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">Design Failure → Fix</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">V1 Enrollment Tripped Up Rural Users. Here's What We Missed.</h3>
                            <p className="text-zinc-300 leading-relaxed mb-6 max-w-3xl">
                                The initial ABHA enrollment flow assumed reliable OTP delivery via SMS. In prototype testing with representative rural users, a large share couldn&apos;t complete first-attempt enrollment on low-bandwidth networks — SMS delay killed the flow. The design had over-indexed on the technical architecture and under-indexed on last-mile connectivity.
                            </p>
                            <div className="flex flex-wrap gap-6 items-center">
                                <div>
                                    <p className="text-3xl font-black text-red-400">High</p>
                                    <p className="text-xs text-zinc-400 font-semibold mt-1">V1 enrollment failure<br />(rural, low-bandwidth networks)</p>
                                </div>
                                <div className="text-zinc-600 text-2xl font-black">→</div>
                                <div>
                                    <p className="text-3xl font-black text-emerald-400">Minimal</p>
                                    <p className="text-xs text-zinc-400 font-semibold mt-1">V2 failure after adding<br />QR-scan fallback via PHC kiosks</p>
                                </div>
                                <div className="flex-1 min-w-[200px]">
                                    <p className="text-sm text-zinc-400 leading-relaxed border-l border-zinc-700 pl-4">
                                        V2 added a QR-scan enrollment path at PHC kiosks — no SMS dependency. The fix came from watching one rural participant try to enroll several times and give up.
                                    </p>
                                </div>
                            </div>
                        </div>
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
                            Prototype testing confirmed the core thesis — but surfaced an unexpected insight: rural PHC workers were the primary adoption bottleneck, not patients. Phase 2 focuses on a <strong>PHC Companion App</strong> — an ultra-lightweight offline tool for frontline health workers to onboard and manage village-level records.
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
