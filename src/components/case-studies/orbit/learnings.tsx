"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Scissors, Compass } from "lucide-react";

export function Learnings() {
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
                        06 — Reflection
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-4 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        What I&apos;d do differently.
                    </h2>
                    <p className="text-lg text-[#adaaaa] max-w-2xl leading-relaxed">
                        Speculative work earns credibility through honest self-assessment. Here is what I&apos;d validate, what I&apos;d cut, and what designing for a genuinely new modality taught me.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5 mb-10">
                    {[
                        {
                            icon: FlaskConical,
                            label: "What I'd validate first",
                            title: "The 3-hour context claim",
                            body: "The core value proposition — spatial context in 3 hours vs 3 weeks — is the hypothesis everything else rests on. Before building further, I'd run a constrained usability study: two cohorts of enterprise new hires, one through a spatial visionOS prototype, one through standard wiki + Slack onboarding. Measuring time to first correct answer on 10 org-structure questions and self-reported confidence would either validate the bet or force a fundamental reframe. No amount of design quality makes the wrong bet right.",
                            accent: "#d0bcff"
                        },
                        {
                            icon: Scissors,
                            label: "What I'd cut in V2",
                            title: "The background org plane",
                            body: "The three-plane information architecture is conceptually clean but the background plane — full org structure, cross-functional dependencies — is informationally dense for day one. In V2 I'd make it exclusively available from week two onward, unlocked by session completion milestones. This tightens progressive disclosure further and removes the risk of Orbit recreating the information overload it was designed to solve. Depth is only valuable if the content behind it earns the user's attention.",
                            accent: "#c0c1ff"
                        },
                        {
                            icon: Compass,
                            label: "What I learned",
                            title: "Spatial UX has no inherited grammar",
                            body: "Every medium I've designed for — web, mobile, plugin — has an interaction grammar users bring with them. visionOS does not. This means every interaction needs to be taught, not assumed. It surfaced a principle I want to carry forward: when you are designing for a new modality, the onboarding of the onboarding tool is itself a design problem. Orbit would need a 5-minute spatial tutorial before the spatial org map. The meta-layer is not a nice-to-have.",
                            accent: "#d0bcff"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-[#131313] border border-white/[0.06] flex flex-col gap-5 hover:border-[#d0bcff]/10 transition-colors"
                        >
                            <div
                                className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                style={{ background: `${item.accent}15` }}
                            >
                                <item.icon className="w-5 h-5" style={{ color: item.accent }} aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-[9px] font-bold font-mono uppercase tracking-widest mb-2" style={{ color: item.accent }}>{item.label}</p>
                                <p className="text-sm font-bold text-white mb-3">{item.title}</p>
                                <p className="text-xs text-[#adaaaa] leading-relaxed">{item.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-2xl text-center relative overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #1a1919 0%, #131313 100%)",
                        border: "1px solid rgba(208,188,255,0.12)"
                    }}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "radial-gradient(circle at 50% 0%, rgba(208,188,255,0.08) 0%, transparent 60%)" }}
                        aria-hidden="true"
                    />
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-widest mb-4 relative z-10">Why this work exists</p>
                    <p
                        className="text-xl md:text-2xl font-bold leading-snug max-w-2xl mx-auto mb-4 text-white relative z-10"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        Orbit is a bet that spatial computing will reshape how enterprise knowledge is delivered — and that the designers who understand that modality now will define what it becomes.
                    </p>
                    <p className="text-sm text-[#adaaaa] max-w-xl mx-auto relative z-10">
                        This is speculative work — deliberately so. The best time to think carefully about a new interaction paradigm is before the market forces you to think fast. Orbit is that thinking, made concrete.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
