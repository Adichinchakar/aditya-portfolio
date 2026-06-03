"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { FileX2, Database, Globe, AlertCircle, Lock, HardDrive, Lightbulb, ArrowRight } from "lucide-react";

const PROBLEMS = [
    {
        icon: FileX2,
        title: "Scattered Paper Records",
        desc: "85% of India's medical records still exist on paper — lost in floods, fires, or simply left behind when a patient moves cities.",
        color: "text-red-400",
        bg: "bg-red-50/60",
    },
    {
        icon: Database,
        title: "Hospital Data Silos",
        desc: "Every hospital runs its own proprietary system. An AIIMS patient record cannot be accessed at a district hospital 2km away.",
        color: "text-orange-400",
        bg: "bg-orange-50/60",
    },
    {
        icon: Globe,
        title: "No Offline Access for Rural India",
        desc: "Over 600M Indians live in areas with poor connectivity. Existing digital health solutions require a stable internet connection.",
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
];

const CONSEQUENCES = [
    { icon: AlertCircle, text: "Duplicate tests ordered because history is unavailable — wasting ₹2,400+ per patient visit", color: "text-red-400" },
    { icon: Lock, text: "Patient data sold on the dark web — 6,900+ cyberattacks per week on Indian healthcare sector", color: "text-red-400" },
    { icon: HardDrive, text: "Emergency physicians make critical decisions blind — no allergy or medication history available", color: "text-red-400" },
];

export function TheCrisis() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.04),transparent_60%)]" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-red-400 uppercase tracking-[0.2em] mb-4">
                        01 — The Crisis
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6 max-w-2xl">
                        India's Healthcare Data Is{" "}
                        <span className="text-red-400">Broken by Design.</span>
                    </h2>
                </motion.div>

                {/* Split Screen */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Left — Problem Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <div className="rounded-3xl bg-zinc-900 text-white p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" aria-hidden="true" />
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-zinc-400 uppercase tracking-wide mb-2 text-sm">The Reality</h3>
                                <p className="text-3xl font-black tracking-tighter leading-tight mb-4">
                                    A heart attack patient arrives at ER.
                                    <br />
                                    <span className="text-red-400">The doctor knows nothing about them.</span>
                                </p>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    No allergies. No medication history. No chronic conditions. Just a 60-second window to make life-or-death drug decisions — blind.
                                </p>
                            </div>
                        </div>

                        {PROBLEMS.map((problem, i) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 rounded-2xl border border-zinc-100 ${problem.bg} flex gap-4 items-start`}
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center shrink-0 shadow-sm">
                                    <problem.icon className={`w-5 h-5 ${problem.color}`} aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-900 mb-1">{problem.title}</h3>
                                    <p className="text-sm text-zinc-600 leading-relaxed">{problem.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right — Data viz + Consequences */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Big stat */}
                        <div className="rounded-3xl bg-zinc-900 text-white p-10 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.08),transparent)]" aria-hidden="true" />
                            <div className="relative z-10">
                                <div className="text-8xl font-black tracking-tighter mb-2">₹2.4L</div>
                                <div className="text-zinc-300 font-semibold text-lg mb-1">Crore Lost Annually</div>
                                <div className="text-zinc-400 text-sm">to duplicate medical tests because records aren't shared between hospitals</div>
                            </div>
                        </div>

                        {/* Consequence list */}
                        <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-8">
                            <h3 className="font-black text-zinc-900 mb-6 text-lg">The Downstream Cost</h3>
                            <ul className="space-y-5" role="list">
                                {CONSEQUENCES.map((c, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <c.icon className={`w-5 h-5 ${c.color} shrink-0 mt-0.5`} aria-hidden="true" />
                                        <span className="text-sm text-zinc-700 leading-relaxed font-medium">{c.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quote */}
                        <blockquote className="rounded-3xl bg-[#005EB8]/8 border border-[#005EB8]/20 p-8">
                            <p className="text-zinc-800 text-lg font-semibold leading-relaxed mb-4 italic">
                                &quot;We needed a system that works for a farmer in Haryana and a software engineer in Bangalore — at the same time.&quot;
                            </p>
                            <cite className="text-zinc-500 text-sm font-medium not-italic">
                                — Research Participant, Pilot Study
                            </cite>
                        </blockquote>
                    </motion.div>
                </div>

                {/* The Insight Pivot */}
                <div className="mt-8 bg-zinc-900 p-8 md:p-12 rounded-[2rem] border border-zinc-800 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                        <div className="flex-1">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">The Surface Problem</p>
                            <h3 className="text-xl font-bold text-white mb-3">"We need a better EHR system for hospitals."</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                The immediate instinct in digital health is to build another, better Electronic Health Record (EHR) system and convince hospitals to switch to it. But asking thousands of fragmented, competing hospitals to abandon their legacy systems and agree on a single standard is a losing battle.
                            </p>
                        </div>
                        
                        <div className="hidden md:flex items-center justify-center pt-8">
                            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border-4 border-zinc-900 shadow-sm">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex md:hidden items-center justify-center w-full my-[-1rem]">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border-4 border-zinc-900 shadow-sm">
                                <ArrowRight className="w-4 h-4 rotate-90" />
                            </div>
                        </div>

                        <div className="flex-1 bg-red-500/5 p-6 rounded-2xl border border-red-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="w-5 h-5 text-red-400" />
                                <p className="text-xs font-bold text-red-400 uppercase tracking-widest">The Deep Insight</p>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Decentralize the record. Empower the patient.</h3>
                            <p className="text-zinc-300 leading-relaxed text-sm">
                                We realized the patient is the only entity present at every single medical event. Instead of forcing hospitals to integrate with each other, we give the patient a digital vault. <em>The patient</em> becomes the interoperability layer. MedSecure doesn't replace hospital systems; it bridges them through the user.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
