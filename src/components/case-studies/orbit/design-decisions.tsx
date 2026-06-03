"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { Eye, Mic, Layers, MonitorSmartphone, Accessibility } from "lucide-react";

const DECISIONS = [
    {
        icon: Eye,
        number: "01",
        title: "Gaze + pinch over controller input for primary navigation.",
        chosen: "Gaze + pinch (visionOS native)",
        rejected: "Controller-based cursor navigation",
        rationale: "Controller navigation imports the mental model of a mouse — a flat-screen metaphor that undermines the spatial premise of Orbit. Gaze + pinch is how visionOS was designed to be navigated: effortless, hands-free between actions, and mapped directly to where a user's attention already is. For enterprise onboarding, reducing motor overhead matters — new hires are cognitively loaded on day one. The interaction model should disappear into the experience.",
        accent: "#d0bcff"
    },
    {
        icon: Mic,
        number: "02",
        title: "Voice-first AI agent over traditional UI menus for guidance.",
        chosen: "Proactive voice-first AI agent",
        rejected: "Menu-driven navigation with optional AI assistant",
        rationale: "A menu-driven UI externalises the cognitive work of knowing what to explore next. It assumes the user knows what questions to ask — which a day-one hire definitionally does not. A proactive voice-first agent surfaces the right context at the right moment, guided by session state, gaze history, and role-based onboarding paths. The agent doesn't answer questions. It anticipates them.",
        accent: "#c0c1ff"
    },
    {
        icon: Layers,
        number: "03",
        title: "Progressive disclosure in 3D depth planes over flat menu hierarchy.",
        chosen: "Depth-plane disclosure (foreground → mid → background)",
        rejected: "Flat hierarchical menu navigation",
        rationale: "Flat menus map poorly to spatial environments — they force the user to mentally translate a 2D hierarchy into a 3D space they're already inhabiting. Depth planes use the Z-axis as a semantic layer: foreground is your immediate context, mid-ground is your department, background is the wider org. Depth is not decorative — it is the information architecture.",
        accent: "#d0bcff"
    },
    {
        icon: MonitorSmartphone,
        number: "04",
        title: "Enforced 60° FOV comfort zone over full spatial freedom.",
        chosen: "60° FOV constraint for all primary interaction zones",
        rejected: "Unconstrained spatial UI across full 180° field of view",
        rationale: "Apple's visionOS HIG specifies that placing interactive elements beyond 60° from centre gaze creates physical discomfort and forces excessive head movement. Unconstrained spatial UI would be visually impressive in a demo and exhausting in a real onboarding session lasting 2–3 hours. Orbit enforces the 60° comfort zone strictly for all primary interactions, reserving peripheral space for ambient environmental information only. Ergonomics is not a constraint — it is a feature.",
        accent: "#c0c1ff"
    },
    {
        icon: Accessibility,
        number: "05",
        title: "Motion sensitivity toggle + dwell time customisation built to spec.",
        chosen: "Full visionOS accessibility API integration",
        rejected: "Defer accessibility to post-launch iteration",
        rationale: "Vestibular disorders affect approximately 35% of adults over 40. Enterprise workforces skew older than consumer apps. A spatial experience with unchecked motion can trigger dizziness, nausea, or disorientation in a meaningful proportion of any enterprise deployment. Motion sensitivity toggle and dwell time customisation are first-class features in Orbit — not post-launch additions. Accessibility is not a checkbox at the end of the design process.",
        accent: "#d0bcff"
    }
];

export function DesignDecisions() {
    return (
        <section className="py-24 px-6 bg-[#0e0e0e] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#d0bcff]/15" aria-hidden="true" />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(208,188,255,0.04) 0%, transparent 65%)" }}
                aria-hidden="true"
            />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-[0.25em] mb-5">
                        03 — Design Decisions
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-4 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        Five decisions that<br />defined the spatial UX.
                    </h2>
                    <p className="text-lg text-[#adaaaa] max-w-2xl leading-relaxed">
                        Every design decision is a trade-off. Here are the five that most significantly shaped what Orbit is — and what it deliberately chose not to be.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-5">
                    {DECISIONS.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="p-8 rounded-2xl bg-[#131313] border border-white/[0.06] hover:border-[#d0bcff]/15 transition-colors group"
                        >
                            <div className="flex items-start gap-6">
                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${d.accent}15` }}
                                >
                                    <d.icon className="w-5 h-5" style={{ color: d.accent }} aria-hidden="true" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: d.accent }}>{d.number}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-5 leading-snug">{d.title}</h3>

                                    <div className="grid sm:grid-cols-2 gap-3 mb-5">
                                        <div
                                            className="px-4 py-3 rounded-xl"
                                            style={{ background: `${d.accent}10`, border: `1px solid ${d.accent}20` }}
                                        >
                                            <p className="text-[9px] font-mono font-bold uppercase tracking-widest mb-1" style={{ color: d.accent }}>We chose</p>
                                            <p className="text-sm font-semibold text-white">{d.chosen}</p>
                                        </div>
                                        <div className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                            <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/25 mb-1">Over</p>
                                            <p className="text-sm font-semibold text-white/30 line-through">{d.rejected}</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-[#adaaaa] leading-relaxed">{d.rationale}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
