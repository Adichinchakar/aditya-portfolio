"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Ticket, Star, Users } from "lucide-react";

export function Outcomes() {
    return (
        <section className="py-24 px-6 bg-[#0e0e0e] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#d0bcff]/15" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-[0.25em] mb-5">
                        05 — Projected Outcomes
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-4 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        The business case<br />in numbers.
                    </h2>
                    <p className="text-lg text-[#adaaaa] max-w-2xl leading-relaxed">
                        Projected metrics modelled from published enterprise onboarding benchmarks and spatial learning research. These represent the hypothesis Orbit is designed to validate.
                    </p>
                </motion.div>

                {/* Bento grid */}
                <div className="grid md:grid-cols-3 gap-5">
                    {/* Hero metric card — 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-12 rounded-2xl bg-[#1a1919] flex flex-col justify-between group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden min-h-[260px]"
                    >
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                            style={{ background: "radial-gradient(circle, rgba(208,188,255,0.06) 0%, transparent 70%)", transform: "translate(30%,-30%)" }}
                            aria-hidden="true"
                        />
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2.5 rounded-xl bg-[#d0bcff]/10">
                                <TrendingUp className="w-5 h-5 text-[#d0bcff]" aria-hidden="true" />
                            </div>
                            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/25">Primary metric</span>
                        </div>
                        <div>
                            <div
                                className="text-[96px] font-black tracking-[-0.04em] leading-none text-[#a27cff] mb-3"
                                style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                            >
                                60%
                            </div>
                            <p className="text-lg font-bold text-white mb-2">Reduction in time-to-full-productivity</p>
                            <p className="text-sm text-[#adaaaa] max-w-sm leading-relaxed">
                                Modelled from Gallup data on onboarding effectiveness. Baseline: month 4. Orbit target: month 1.5.
                            </p>
                        </div>
                    </motion.div>

                    {/* Small card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="p-8 rounded-2xl bg-[#1a1919] flex flex-col justify-between hover:scale-[1.01] transition-all duration-500"
                    >
                        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 bg-[#d0bcff]/10">
                            <Ticket className="w-5 h-5 text-[#d0bcff]" aria-hidden="true" />
                        </div>
                        <div>
                            <div
                                className="text-6xl font-black tracking-[-0.04em] text-white mb-2 leading-none"
                                style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                            >
                                40%
                            </div>
                            <p className="text-sm text-[#adaaaa] font-medium leading-snug">Fewer IT support tickets in week one</p>
                        </div>
                    </motion.div>

                    {/* Small card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 }}
                        className="p-8 rounded-2xl bg-[#1a1919] flex flex-col justify-between hover:scale-[1.01] transition-all duration-500"
                    >
                        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 bg-[#d0bcff]/10">
                            <Star className="w-5 h-5 text-[#d0bcff]" aria-hidden="true" />
                        </div>
                        <div>
                            <div
                                className="text-6xl font-black tracking-[-0.04em] text-white mb-2 leading-none"
                                style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                            >
                                +28
                            </div>
                            <p className="text-sm text-[#adaaaa] font-medium leading-snug">Projected onboarding NPS lift</p>
                        </div>
                    </motion.div>

                    {/* Small card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                        className="p-8 rounded-2xl bg-[#1a1919] flex flex-col justify-between hover:scale-[1.01] transition-all duration-500"
                    >
                        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-6 bg-[#d0bcff]/10">
                            <Users className="w-5 h-5 text-[#d0bcff]" aria-hidden="true" />
                        </div>
                        <div>
                            <div
                                className="text-5xl font-black tracking-[-0.04em] text-white mb-2 leading-none flex items-baseline gap-2"
                                style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                            >
                                3h <span className="text-xl text-[#adaaaa] font-medium">vs</span> 3w
                            </div>
                            <p className="text-sm text-[#adaaaa] font-medium leading-snug">Context-building time, drastically reduced</p>
                        </div>
                    </motion.div>

                    {/* ROI card — full width */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-3 p-[1px] rounded-2xl"
                        style={{ background: "linear-gradient(135deg, rgba(208,188,255,0.12) 0%, transparent 60%)" }}
                    >
                        <div className="p-8 rounded-2xl bg-[#131313] border border-white/[0.04]">
                            <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/30 mb-3">How the ROI case closes</p>
                            <p className="text-sm text-[#adaaaa] leading-relaxed max-w-3xl">
                                At a 500-person annual hire rate and a fully-loaded cost of $120k per employee, a 60% reduction in ramp time represents approximately{" "}
                                <strong className="text-white">$18M in recovered annual productivity</strong>. Device fleet cost for a Vision Pro deployment (~$3.5M hardware + implementation) has a sub-12-month payback period — before accounting for IT ticket reduction, reduced attrition, or HR time savings. The business case closes on productivity alone.
                            </p>
                            <div className="flex gap-3 mt-5">
                                {["Year 1: +12%", "Year 2: +24%"].map((label) => (
                                    <div key={label} className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/[0.08] text-white/40">
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
