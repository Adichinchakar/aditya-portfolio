"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { Lock, ArrowRight, Lightbulb } from "lucide-react";

export function FeaturedProject() {
    return (
        <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_60%)]" aria-hidden="true" />
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                        02.5 — Featured Project
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        TalentBridge: Making 500K People Visible
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                        Infosys doesn&apos;t have a talent shortage. It has a talent <em>visibility</em> problem. Project managers can&apos;t find people with the right skills because those people are invisible — siloed inside delivery units, tagged by role title, not actual capability.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-[2rem] bg-zinc-950 border border-white/8"
                    >
                        <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-4">The Problem</p>
                        <p className="text-base text-zinc-300 leading-relaxed mb-4">
                            A project manager in Bangalore needs someone with React + financial domain experience available in 3 weeks. That person exists in Mumbai. There is no system that surfaces them. The PM posts the role externally instead.
                        </p>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            This happens thousands of times a year — not from lack of talent, but from a design problem: the internal talent system was built for HR record-keeping, not for managers who think in terms of skills, availability, and project fit.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-[2rem] bg-zinc-950 border border-white/8"
                    >
                        <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-4">The Design Challenge</p>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">Four personas. One system. Completely different mental models:</p>
                        <div className="space-y-3">
                            {[
                                { role: "Employee", need: "Career visibility — I want the right projects to find me" },
                                { role: "Manager", need: "Skill search — I need to staff a project in 72 hours" },
                                { role: "HR", need: "Compliance + bench visibility — who is unallocated right now?" },
                                { role: "Admin", need: "Data integrity — are skill tags accurate and auditable?" },
                            ].map((p, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="text-xs font-bold text-indigo-400 shrink-0 pt-0.5 w-16">{p.role}</span>
                                    <p className="text-xs text-zinc-600 leading-relaxed">{p.need}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* The Insight Pivot */}
                <div className="mt-8 mb-8 bg-zinc-950 p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="flex-1">
                            <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest mb-4">The Surface Problem</p>
                            <h3 className="text-xl font-bold text-white mb-3">"We need a better search tool for HR."</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                The immediate assumption was that HR just needed a more powerful search interface built on top of the existing employee database. But the data itself was the problem. It was based on static job titles, not dynamic skills. A "Senior Consultant" could mean a React developer or a financial analyst.
                            </p>
                        </div>
                        
                        <div className="hidden md:flex items-center justify-center pt-8">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border-4 border-zinc-950 shadow-sm">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex md:hidden items-center justify-center w-full my-[-1rem]">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border-4 border-zinc-950 shadow-sm">
                                <ArrowRight className="w-4 h-4 rotate-90" />
                            </div>
                        </div>

                        <div className="flex-1 bg-indigo-500/5 p-6 rounded-2xl border border-indigo-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="w-5 h-5 text-indigo-400" />
                                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">The Deep Insight</p>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Shift from Title-based to Skill-based matching.</h3>
                            <p className="text-zinc-300 leading-relaxed text-sm">
                                Instead of building a better search for HR, we built a <em>skill marketplace</em> for managers and employees. By empowering employees to declare their actual skills and interests, we transformed a static HR database into a dynamic, intent-driven talent graph.
                            </p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="p-6 rounded-2xl bg-amber-500/8 border border-amber-500/15 flex items-start gap-4"
                >
                    <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-sm text-amber-300 leading-relaxed">
                        Full process documentation — personas, wireframes, IA maps, component decisions, and post-launch analytics — available in a confidential walkthrough. NDA required.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
