"use client";

import React from "react";
import { Hero } from "@/components/case-studies/simplifai-design-system/hero";
import { ProblemContext } from "@/components/case-studies/simplifai-design-system/problem-context";
import { SystemPreview } from "@/components/case-studies/simplifai-design-system/system-preview";
import { AtomicExplorer } from "@/components/case-studies/simplifai-design-system/atomic-explorer";
import { TokenGraph } from "@/components/case-studies/simplifai-design-system/token-graph";
import { ComponentPlayground } from "@/components/case-studies/simplifai-design-system/component-playground";
import { ComponentRedlines } from "@/components/case-studies/simplifai-design-system/component-redlines";
import { SystemGovernance } from "@/components/case-studies/simplifai-design-system/system-governance";
import { TechnicalEvolution } from "@/components/case-studies/simplifai-design-system/technical-evolution";
import { SystemSpecs } from "@/components/case-studies/simplifai/system-specs";
import { ExecutiveSummary } from "@/components/case-studies/executive-summary";
import { Layout, Clock, Wrench } from "lucide-react";

const summaryItems = [
    {
        id: "role",
        icon: Layout,
        iconBg: "bg-indigo-500/10",
        iconColor: "text-indigo-500",
        spotlight: "rgba(99, 102, 241, 0.10)",
        hoverBorder: "hover:border-indigo-300/50",
        label: "My Role",
        content: (
            <p className="text-lg font-semibold text-zinc-900 leading-snug">
                Design Systems Lead — created the token architecture, built Figma libraries, and guided React component implementation.
            </p>
        ),
    },
    {
        id: "timeline",
        icon: Clock,
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-500",
        spotlight: "rgba(16, 185, 129, 0.10)",
        hoverBorder: "hover:border-emerald-300/50",
        label: "Timeline & Scope",
        content: (
            <>
                <p className="text-lg font-semibold text-zinc-900">8 Months</p>
                <p className="text-zinc-400 text-sm font-medium mt-1">2022 · Enterprise SaaS · 60+ Components</p>
            </>
        ),
    },
    {
        id: "tools",
        icon: Wrench,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-500",
        spotlight: "rgba(168, 85, 247, 0.10)",
        hoverBorder: "hover:border-purple-300/50",
        label: "Tools",
        content: (
            <div className="flex flex-wrap gap-2">
                {["Figma", "Storybook", "React", "Tailwind CSS", "Design Tokens"].map((tool) => (
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

export default function SimplifaiDesignSystemPage() {
    return (
        <main className="bg-zinc-50 min-h-screen">
            <Hero />
            <ExecutiveSummary items={summaryItems} />
            <ProblemContext />
            <section className="py-20 px-6 bg-zinc-50">
                <div className="container mx-auto max-w-4xl">
                    <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">02 — System Anatomy</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">The Design System</h2>
                    <p className="text-lg text-zinc-500 mb-12 max-w-2xl">Color tokens, type scale, and components — from a single Figma library that eliminated 3 separate design files and 5 teams working in silos.</p>
                    <SystemPreview />
                </div>
            </section>
            <AtomicExplorer />
            <TokenGraph />
            <ComponentPlayground />
            <ComponentRedlines />

            {/* Engineering detail — tokens & spec annotations */}
            <SystemSpecs />

            <SystemGovernance />
            <TechnicalEvolution />
        </main>
    );
}
