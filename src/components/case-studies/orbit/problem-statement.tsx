"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Puzzle, Map } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 px-6 bg-[#0e0e0e] relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-[0.25em] mb-5">
                        01 — Problem
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-8 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        The $1.3T problem<br />hiding in onboarding.
                    </h2>

                    {/* Stat callout */}
                    <div className="inline-flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-[#1a1919] border border-white/[0.07] mb-8">
                        <span className="text-3xl font-black text-white tracking-tight">$1.3T</span>
                        <span className="text-sm text-[#adaaaa] font-medium leading-snug max-w-xs">
                            lost annually to poor employee onboarding — <span className="font-bold text-white">Gallup, 2023</span>
                        </span>
                    </div>

                    <p className="text-lg text-[#adaaaa] leading-relaxed max-w-2xl">
                        Enterprise organisations spend thousands per hire on onboarding that still fails where it matters: inside the new hire&apos;s mental model of how the org actually works. The problem isn&apos;t information volume. It&apos;s spatial disorientation — new hires cannot see the map.
                    </p>
                </motion.div>

                {/* Business frame */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 }}
                    className="mb-10 p-6 rounded-2xl bg-[#131313] border border-white/[0.06]"
                >
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">The business frame</p>
                    <p className="text-base text-[#adaaaa] leading-relaxed">
                        A new enterprise hire reaching full productivity in week 3 instead of month 4 represents <strong className="text-white">30+ recoverable working days</strong> per person. At a 500-person annual intake, that compounds to a measurable revenue line — not a HR metric.
                    </p>
                </motion.div>

                {/* Pain cards */}
                <div className="grid md:grid-cols-3 gap-5">
                    {[
                        {
                            icon: Layers,
                            title: "Context overload",
                            desc: "New hires are flooded with wikis, decks, org charts, Slack channels, and Notion pages on day one. The information exists. The structure does not. Context without spatial anchoring doesn't stick.",
                            accent: "#d0bcff"
                        },
                        {
                            icon: Puzzle,
                            title: "Tool fragmentation",
                            desc: "The average enterprise employee uses 9.4 SaaS tools daily. New hires must context-switch between HRIS, Slack, Jira, Confluence, and email — before they understand what any of it is for.",
                            accent: "#c0c1ff"
                        },
                        {
                            icon: Map,
                            title: "No spatial awareness",
                            desc: "Org charts are static, flat, and abstract. New hires cannot feel where they sit in the organisation, who the real decision-makers are, or how teams connect. This takes 3–6 months to build informally.",
                            accent: "#d0bcff"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-[#131313] border border-white/[0.06] hover:border-white/10 transition-colors group"
                        >
                            <div
                                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
                                style={{ background: `${item.accent}18` }}
                            >
                                <item.icon className="w-5 h-5" style={{ color: item.accent }} aria-hidden="true" />
                            </div>
                            <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-[#adaaaa] leading-relaxed text-sm">{item.desc}</p>
                            <div className="mt-5 w-8 h-px transition-all duration-500 group-hover:w-16" style={{ background: item.accent + "40" }} />
                        </motion.div>
                    ))}
                </div>

                {/* Problem statement */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 p-8 rounded-2xl bg-[#131313] border-l-2 border-[#d0bcff] border border-white/[0.06]"
                    style={{ borderLeftColor: "#d0bcff" }}
                >
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-widest mb-3">Problem statement</p>
                    <p className="text-base font-semibold text-white leading-relaxed">
                        Enterprise new hires are given a flood of information with no spatial structure to anchor it. The result is 3–6 months of below-capacity contribution, avoidable IT overhead, and talent attrition from disengagement — all traceable to a failure of context delivery on day one.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
