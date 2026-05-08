"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenLine, Layers, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecisionCallout } from "@/components/ui/decision-callout";

const steps = [
    {
        id: "research",
        num: "01",
        icon: Search,
        title: "Research",
        tagline: "100+ user interviews & contextual inquiries",
        description:
            "Embedded within the Simplifai team for 3 weeks, interviewing operations leads across 8 enterprise clients. Uncovered the core tension: users needed power without complexity.",
        tags: ["User Interviews", "Journey Mapping", "Competitive Audit"],
        color: "text-blue-700",
        bg: "bg-blue-500/8",
        border: "border-blue-500/20",
        activeBg: "bg-blue-600",
    },
    {
        id: "wireframes",
        num: "02",
        icon: PenLine,
        title: "Wireframes",
        tagline: "Node-based canvas — 3 iterations",
        description:
            "Explored three distinct interaction models for the flow builder. Ultimately selected a canvas-first approach with inline property panels — reducing context switches by 60%.",
        tags: ["Lo-Fi Sketches", "Usability Testing", "A/B Concepts"],
        color: "text-purple-700",
        bg: "bg-purple-500/8",
        border: "border-purple-500/20",
        activeBg: "bg-purple-600",
    },
    {
        id: "system",
        num: "03",
        icon: Layers,
        title: "Design System",
        tagline: "Built 120+ components in Figma",
        description:
            "Established the Simplifai Design System from scratch — semantic tokens, component library, and a documentation site. Reduced engineer handoff time from 3 weeks to 5 days.",
        tags: ["Component Library", "Token Architecture", "Figma → React"],
        color: "text-emerald-700",
        bg: "bg-emerald-500/8",
        border: "border-emerald-500/20",
        activeBg: "bg-emerald-600",
    },
    {
        id: "ship",
        num: "04",
        icon: Rocket,
        title: "Ship",
        tagline: "40% faster onboarding at launch",
        description:
            "Shipped the new flow builder to 3 enterprise pilots. Real-time collaboration, guided onboarding templates, and a no-code condition builder eliminated the dependency on engineering for configuration.",
        tags: ["Pilot Rollout", "Analytics Review", "Iteration"],
        color: "text-amber-700",
        bg: "bg-amber-500/8",
        border: "border-amber-500/20",
        activeBg: "bg-amber-600",
    },
];

export function DesignProcess() {
    const [activeStep, setActiveStep] = useState<string>("research");

    const active = steps.find((s) => s.id === activeStep)!;

    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 backdrop-blur-md shadow-sm">
                        <PenLine className="w-3.5 h-3.5 text-purple-600" />
                        Design Process
                    </div>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-12"
                >
                    How We Got There
                </motion.h2>

                {/* Step Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {steps.map((step, i) => (
                        <motion.button
                            key={step.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            onClick={() => setActiveStep(step.id)}
                            className={cn(
                                "group relative rounded-2xl border p-5 text-left transition-all duration-300",
                                activeStep === step.id
                                    ? `bg-white border-zinc-200 shadow-[0_4px_20px_rgb(0,0,0,0.08)]`
                                    : "bg-white/40 backdrop-blur-sm border-white/60 hover:border-zinc-200 hover:bg-white/70"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-all duration-300",
                                    activeStep === step.id ? step.activeBg + " text-white" : step.bg + " " + step.color
                                )}
                            >
                                <step.icon className="w-4 h-4" />
                            </div>
                            <div className="text-[11px] font-bold text-zinc-500 mb-1 tracking-widest uppercase">
                                {step.num}
                            </div>
                            <div
                                className={cn(
                                    "text-sm font-bold transition-colors duration-300",
                                    activeStep === step.id ? "text-zinc-900" : "text-zinc-600"
                                )}
                            >
                                {step.title}
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Detail Panel */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-[2rem] border border-white/60 bg-white/50 backdrop-blur-xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.05)]"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <p className={cn("text-sm font-bold mb-2 uppercase tracking-widest", active.color)}>
                                    Step {active.num} — {active.title}
                                </p>
                                <h3 className="text-2xl font-black tracking-tight text-zinc-900 mb-4">
                                    {active.tagline}
                                </h3>
                                <p className="text-zinc-600 leading-relaxed font-medium text-base">
                                    {active.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2.5 items-start content-start pt-1 md:pt-8">
                                {active.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={cn(
                                            "px-4 py-2 rounded-full border text-sm font-semibold",
                                            active.bg,
                                            active.border,
                                            active.color
                                        )}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <DecisionCallout
                    chose="Canvas-first node builder with inline property panels"
                    rejected="Form-based workflow configurator"
                    why="Form-based UIs required users to leave the canvas to configure each node — 3 context switches per connection. Canvas-first kept intent and configuration co-located, cutting task completion time by 40% in usability testing."
                />
            </div>
        </section>
    );
}
