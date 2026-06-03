"use client";

import React from "react";
import { Clock, Layout, Wrench, BookOpen, AlertTriangle, Lightbulb } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "@/lib/motion";
import { FlowPreview } from "@/components/case-studies/simplifai/flow-preview";
import { BentoImpact } from "@/components/case-studies/simplifai/bento-impact";
import { UserPersonaInteractive } from "@/components/case-studies/simplifai/user-persona-interactive";
import { IATree } from "@/components/case-studies/simplifai/ia-tree";
import { Hero } from "@/components/case-studies/simplifai/hero";
import { ProblemStatement } from "@/components/case-studies/simplifai/problem-statement";
import { DesignProcess } from "@/components/case-studies/simplifai/design-process";
import { DesignArtifacts } from "@/components/case-studies/simplifai/design-artifacts";
import { HookModel } from "@/components/case-studies/hook-model";
import { ExecutiveSummary } from "@/components/case-studies/executive-summary";

const glanceCards = [
    {
        id: "role",
        icon: Layout,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-500",
        spotlight: "rgba(168, 85, 247, 0.10)",
        hoverBorder: "hover:border-purple-300/50",
        label: "My Role",
        content: (
            <p className="text-lg font-semibold text-zinc-900 leading-snug">
                Product Design & UX Lead — driving research, IA, interaction design, and usability testing to shape product strategy.
            </p>
        ),
    },
    {
        id: "timeline",
        icon: Clock,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
        spotlight: "rgba(59, 130, 246, 0.10)",
        hoverBorder: "hover:border-blue-300/50",
        label: "Timeline & Scope",
        content: (
            <>
                <p className="text-lg font-semibold text-zinc-900">2 Years</p>
                <p className="text-zinc-600 text-sm font-medium mt-1">2021 – 2023 · B2B SaaS · 5+ enterprise clients</p>
            </>
        ),
    },
    {
        id: "tools",
        icon: Wrench,
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
        spotlight: "rgba(16, 185, 129, 0.10)",
        hoverBorder: "hover:border-emerald-300/50",
        label: "Tools",
        content: (
            <div className="flex flex-wrap gap-2">
                {["Figma", "Framer", "Maze (usability tests)", "Miro"].map((tool) => (
                    <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full bg-white/70 border border-zinc-200 text-xs font-semibold text-zinc-700 shadow-sm"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        ),
    },
];



export default function SimplifaiPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-purple-500/30">
            {/* Hero */}
            <Hero />

            {/* Problem Statement */}
            <ProblemStatement />

            {/* Hook Model */}
            <HookModel
                accentColor="text-purple-400"
                external="Operations manager files a support ticket: 'I need IT to change a workflow rule.' That ticket takes 3–5 days. The business rule changed yesterday."
                internal="Manager frustration: 'Why do I need a developer to do something I could explain in one sentence?'"
                action="Open Flow Builder. Drag one node onto the canvas. Connect it."
                reward="The automation runs. But the time saved varies every run — a simple rule saves minutes; a complex chain saves days. Outcome is never identical."
                investment="Built workflows encode the team's business logic. The more workflows exist, the harder it is to leave — they become institutional memory, not just software."
            />

            {/* At a Glance */}
            <ExecutiveSummary items={glanceCards} />

            {/* User Persona & Pain Points */}
            <UserPersonaInteractive />

            {/* Design Process */}
            <DesignProcess />

            {/* Design Leadership */}
            <section className="py-24 px-6 bg-white border-y border-zinc-100">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-purple-600 uppercase tracking-[0.2em] mb-4">03 — Design Leadership</p>
                        <h2 className="text-4xl font-black tracking-tighter text-zinc-900 mb-4">Beyond the Screen</h2>
                        <p className="text-lg text-zinc-600 max-w-2xl">
                            As the only senior designer on the product team, I owned the design function end-to-end — not just the pixels.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                num: "01",
                                heading: "Weekly design crits",
                                body: "Ran structured critique sessions with 3 product designers and 2 frontend engineers every Thursday. Introduced a feedback rubric (usability, visual hierarchy, accessibility, business alignment) that reduced revision cycles from 3+ rounds to an average of 1.4.",
                                color: "text-purple-600",
                                bg: "bg-purple-50",
                            },
                            {
                                num: "02",
                                heading: "Mentored a junior designer",
                                body: "Paired with a junior UX designer joining the team in Q2 2022. Set a structured 60-day onboarding plan covering Simplifai's design system, design token discipline, and usability testing methodologies. They shipped their first solo feature within 10 weeks.",
                                color: "text-blue-600",
                                bg: "bg-blue-50",
                            },
                            {
                                num: "03",
                                heading: "Stakeholder alignment process",
                                body: "Presented design decisions monthly to the VP of Product and CTO using structured decision logs — a one-page doc covering: problem, options considered, decision made, and success metric. Eliminated the most common stakeholder change requests by building alignment before high-fidelity.",
                                color: "text-emerald-600",
                                bg: "bg-emerald-50",
                            },
                            {
                                num: "04",
                                heading: "Established the first design system",
                                body: "Initiated and built the Simplifai component library from scratch (no prior system existed). Defined a semantic token architecture, authored contribution guidelines, and ran a 2-day design system workshop with the engineering team to drive adoption. Led to 42% faster dev cycles.",
                                color: "text-amber-600",
                                bg: "bg-amber-50",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/50 p-8"
                            >
                                <div className={`text-xs font-black mb-4 ${item.color} uppercase tracking-widest`}>{item.num}</div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-3">{item.heading}</h3>
                                <p className="text-zinc-600 leading-relaxed text-sm">{item.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Artifacts */}
            <DesignArtifacts />

            {/* Information Architecture */}
            <IATree />

            {/* Flow Builder */}
            <FlowPreview />

            {/* Results */}
            <BentoImpact />

            {/* Reflections */}
            <section className="py-24 px-6 bg-white border-t border-zinc-100">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-purple-600 uppercase tracking-[0.2em] mb-4">Reflections</p>
                        <h2 className="text-4xl font-black tracking-tighter text-zinc-900">What Failed & What I'd Change</h2>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/50 p-8"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-amber-500/10">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 mb-3">What didn&apos;t work: the canvas-first architecture</h3>
                                    <p className="text-zinc-600 leading-relaxed">
                                        V1 of the Flow Builder used an infinite canvas with free-form node placement — inspired by tools like FigJam. In usability testing, non-technical users found spatial freedom paralyzing: &ldquo;Where do I even start?&rdquo; We scrapped the canvas in sprint 4 and replaced it with a linear step-builder with smart defaults. Adoption in that cohort jumped 28% within 3 weeks of the switch.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/50 p-8"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-blue-500/10">
                                    <Lightbulb className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 mb-3">If I started over: involve engineers earlier in IA decisions</h3>
                                    <p className="text-zinc-600 leading-relaxed">
                                        The information architecture for conditional branching (if/else logic in workflows) was designed entirely by me before any engineering input. When we handed it off, the nested-condition model required a significant backend refactor. I&apos;d run a technical feasibility session with the eng lead before finalising the IA for any logic-heavy feature. It would have saved 2 weeks of back-and-forth.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
