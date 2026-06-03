"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { UserX, Scale, Server } from "lucide-react";

export function TheInsight() {
    return (
        <section className="py-24 px-6 bg-[#0e0e0e] relative">
            {/* Subtle section separator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#d0bcff]/20" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-[0.25em] mb-5">
                        02 — Research & Insight
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-4 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        Three perspectives.<br />One broken system.
                    </h2>
                    <p className="text-sm text-[#adaaaa]/60 font-medium max-w-xl">
                        Synthesised from secondary research, published enterprise HR studies, and domain expertise. No primary user interviews — this is a speculative concept grounded in published evidence.
                    </p>
                </motion.div>

                {/* Personas */}
                <div className="grid md:grid-cols-3 gap-5 mb-12">
                    {[
                        {
                            icon: UserX,
                            role: "New Hire",
                            name: "Priya, Software Engineer",
                            pain: "Overwhelm",
                            quote: "I have 47 unread Slack messages, a 90-page onboarding deck, and zero idea who actually makes decisions around here.",
                            insight: "Context without spatial structure doesn't reduce overwhelm — it amplifies it. Priya can find information. She can't find her place.",
                            accent: "#d0bcff"
                        },
                        {
                            icon: Scale,
                            role: "HR Ops",
                            name: "Marcus, People Ops Lead",
                            pain: "Scaling pain",
                            quote: "We're onboarding 80 people a quarter. Our buddy system doesn't scale and our wiki is 4 years out of date.",
                            insight: "HR teams know the current process fails at scale but cannot personalise onboarding without a 10× headcount increase.",
                            accent: "#c0c1ff"
                        },
                        {
                            icon: Server,
                            role: "IT Admin",
                            name: "Lan, IT Operations",
                            pain: "Device fleet management",
                            quote: "I spend two days per new hire on setup tickets. Half of them are basic things — app access, VPN config, printer setup.",
                            insight: "IT overhead in week one is largely a context problem, not a technical one. New hires raise tickets because they don't know what they have access to.",
                            accent: "#d0bcff"
                        }
                    ].map((persona, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-7 rounded-2xl bg-[#131313] border border-white/[0.06] flex flex-col gap-5"
                        >
                            <div className="flex items-start gap-3">
                                <div
                                    className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${persona.accent}15` }}
                                >
                                    <persona.icon className="w-5 h-5" style={{ color: persona.accent }} aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: persona.accent }}>{persona.role}</p>
                                    <p className="text-sm font-bold text-white">{persona.name}</p>
                                    <p className="text-[11px] text-white/30 font-medium">Core pain: {persona.pain}</p>
                                </div>
                            </div>
                            <blockquote className="text-sm text-[#adaaaa] italic leading-relaxed border-l border-[#d0bcff]/20 pl-4">
                                &ldquo;{persona.quote}&rdquo;
                            </blockquote>
                            <p className="text-xs text-white/40 leading-relaxed">
                                <span className="font-bold text-white/60">Insight: </span>{persona.insight}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Key insight — full dark card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 p-10 rounded-2xl relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #1a1919 0%, #131313 100%)", border: "1px solid rgba(208,188,255,0.12)" }}
                >
                    <div
                        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle, rgba(208,188,255,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
                        aria-hidden="true"
                    />
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-widest mb-4">Key insight from secondary research</p>
                    <p
                        className="text-2xl md:text-3xl font-bold leading-snug text-white mb-4"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        Spatial memory retention is significantly higher in 3D environments vs flat screens.
                    </p>
                    <p className="text-[#adaaaa] text-sm leading-relaxed max-w-2xl">
                        Research in cognitive science and spatial learning (including studies at Stanford&apos;s Virtual Human Interaction Lab) consistently shows that people navigate, recall, and build mental models more effectively in three-dimensional space. Our brains evolved to understand place. Enterprise onboarding ignores this completely.
                    </p>
                </motion.div>

                {/* Design bet */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            {
                                label: "The bet",
                                title: "Spatial org map on day one",
                                desc: "A 3D, navigable map of the organisation — teams, tools, key people, and workflows — delivered spatially in visionOS collapses 3 weeks of informal context-building into 3 hours.",
                                accent: "#d0bcff"
                            },
                            {
                                label: "The mechanism",
                                title: "AI agent as guide, not chatbot",
                                desc: "A voice-first AI agent walks new hires through their spatial environment proactively — surfacing what they need before they know to ask. Not a search interface. A guide.",
                                accent: "#c0c1ff"
                            },
                            {
                                label: "The constraint",
                                title: "Progressive disclosure, not info dump",
                                desc: "Orbit reveals depth planes of information on demand, tied to gaze focus and session progress. Context is earned, not front-loaded — preventing the overwhelm that makes flat onboarding fail.",
                                accent: "#d0bcff"
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-[#131313] border border-white/[0.06]">
                                <p className="text-[10px] font-bold font-mono uppercase tracking-widest mb-2" style={{ color: item.accent }}>{item.label}</p>
                                <p className="text-sm font-bold text-white mb-2">{item.title}</p>
                                <p className="text-xs text-[#adaaaa] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
