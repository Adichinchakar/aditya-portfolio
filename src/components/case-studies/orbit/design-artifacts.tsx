"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { GitBranch, Box, Monitor, MessageSquare, Layers } from "lucide-react";

const ARTIFACTS = [
    {
        icon: GitBranch,
        title: "Spatial user journey map",
        type: "Journey Map",
        description: "A non-linear journey map plotted across four onboarding sessions (Day 1, Week 1, Week 2, Month 1), tracking spatial awareness, cognitive load, AI agent touchpoints, and emotional state. Depth notation shows when information is revealed in the foreground vs mid-ground plane — reflecting the actual disclosure model rather than a linear page flow.",
        decision: "Connects to Decision 03 — Progressive disclosure",
        accent: "#d0bcff"
    },
    {
        icon: Box,
        title: "3D information architecture diagram",
        type: "IA / Structure",
        description: "A depth-annotated IA diagram showing how content is distributed across Orbit's three spatial planes. Foreground: personal context (my team, my tools, today's focus). Mid-ground: department context. Background: organisational context. Each plane has a defined interaction grammar — foreground uses gaze + pinch, mid-ground uses dwell, background uses AI agent-initiated disclosure.",
        decision: "Connects to Decisions 03 + 04 — Depth planes + FOV constraint",
        accent: "#c0c1ff"
    },
    {
        icon: Monitor,
        title: "Vision Pro UI screens (4 key states)",
        type: "UI Screens",
        description: "Four production-ready visionOS screens: (1) Spatial Org Map home state — floating team cards in a constellation within the 60° comfort zone. (2) Team Detail panel — mid-ground slides forward with role cards and AI-suggested introductions. (3) Tool Discovery panel — 3D dock of enterprise tools with contextual tooltips. (4) Day 1 Checklist — ambient floating checklist in far-left peripheral zone.",
        decision: "Connects to all five design decisions",
        accent: "#d0bcff"
    },
    {
        icon: MessageSquare,
        title: "AI agent conversation flow",
        type: "Conversation Design",
        description: "A branching conversation flow for the Orbit AI agent across the Day 1 session. Key moments: welcome + spatial orientation (no menu required), first gaze event detection triggering proactive context injection, error-graceful fallbacks when gaze is ambiguous, and the transition from guided to autonomous navigation at session end. Role-parameterised: an engineer and an account manager receive different first-hour disclosure paths.",
        decision: "Connects to Decision 02 — Voice-first AI agent",
        accent: "#c0c1ff"
    },
    {
        icon: Layers,
        title: "Depth plane wireframe concept",
        type: "Wireframe",
        description: "A low-fidelity wireframe annotated with depth plane distances (in metres from eye position), interaction grammar per plane, and motion vectors for transitions between foreground, mid-ground, and background states. Includes a reduced-motion variant showing the accessibility path — all transitions replaced with cross-fades and static position changes, no parallax or scaling effects.",
        decision: "Connects to Decisions 04 + 05 — FOV constraint + accessibility",
        accent: "#d0bcff"
    }
];

export function DesignArtifacts() {
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
                        04 — Artefacts
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-4 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        What got made.
                    </h2>
                    <p className="text-lg text-[#adaaaa] max-w-2xl leading-relaxed">
                        Five design artefacts that translate the concept into concrete deliverables — each described in production-ready detail for Figma implementation.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-5">
                    {ARTIFACTS.map((artifact, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="p-8 rounded-2xl bg-[#131313] border border-white/[0.06] hover:border-[#d0bcff]/10 transition-colors"
                        >
                            <div className="flex items-start gap-6">
                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: `${artifact.accent}15` }}
                                >
                                    <artifact.icon className="w-5 h-5" style={{ color: artifact.accent }} aria-hidden="true" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[9px] font-mono font-bold uppercase tracking-widest mb-2" style={{ color: artifact.accent }}>{artifact.type}</p>
                                    <h3 className="text-base font-bold text-white mb-3">{artifact.title}</h3>
                                    <p className="text-sm text-[#adaaaa] leading-relaxed mb-4">{artifact.description}</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                                        <span className="text-[10px] font-semibold text-white/40">{artifact.decision}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
