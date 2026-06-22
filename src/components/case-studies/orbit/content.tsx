"use client";

import React from "react";
import { Hero } from "@/components/case-studies/orbit/hero";
import { CaseStudyTldr } from "@/components/case-studies/case-study-tldr";
import { ProblemStatement } from "@/components/case-studies/orbit/problem-statement";
import { TheInsight } from "@/components/case-studies/orbit/insight";
import { DesignDecisions } from "@/components/case-studies/orbit/design-decisions";
import { DesignArtifacts } from "@/components/case-studies/orbit/design-artifacts";
import { ConceptValidation } from "@/components/case-studies/orbit/concept-validation";
import { OrbitUI } from "@/components/case-studies/orbit/orbit-ui";
import { Outcomes } from "@/components/case-studies/orbit/outcomes";
import { Learnings } from "@/components/case-studies/orbit/learnings";
import { ExecutiveSummary } from "@/components/case-studies/executive-summary";
import { Layout, Clock, Wrench } from "lucide-react";

const summaryItems = [
    {
        id: "role",
        icon: Layout,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        spotlight: "rgba(168, 85, 247, 0.15)",
        hoverBorder: "hover:border-purple-500/50",
        label: "My Role",
        content: (
            <p className="text-lg font-semibold text-zinc-100 leading-snug">
                Lead Spatial Designer — designed gaze-based interactions, spatial UI, and environment transitions.
            </p>
        ),
    },
    {
        id: "timeline",
        icon: Clock,
        iconBg: "bg-emerald-500/10",
        iconColor: "text-emerald-400",
        spotlight: "rgba(16, 185, 129, 0.15)",
        hoverBorder: "hover:border-emerald-500/50",
        label: "Timeline & Scope",
        content: (
            <>
                <p className="text-lg font-semibold text-zinc-100">10 Weeks</p>
                <p className="text-zinc-400 text-sm font-medium mt-1">2024 · Enterprise Spatial App</p>
            </>
        ),
    },
    {
        id: "tools",
        icon: Wrench,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        spotlight: "rgba(59, 130, 246, 0.15)",
        hoverBorder: "hover:border-blue-500/50",
        label: "Tools",
        content: (
            <div className="flex flex-wrap gap-2">
                {["Figma", "Reality Composer Pro", "Apple Vision Pro", "Spatial Audio"].map((tool) => (
                    <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-zinc-300 shadow-sm"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        ),
    },
];

export default function OrbitPage() {
    return (
        <div className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#d0bcff]/30">
            {/* Hero */}
            <Hero />

            {/* The short version — recruiter scan card */}
            <CaseStudyTldr
                variant="dark"
                hook="$1.3T a year vanishes into onboarding that fails. Three weeks in, a new hire still can't see how the org actually works. Orbit hands them the map."
                stats={[
                    { value: "3wk→3hr", label: "context-building, collapsed" },
                    { value: "$1.3T", label: "lost to poor onboarding yearly" },
                    { value: "30+ days", label: "productivity recovered per hire" },
                ]}
                role="Lead Spatial Designer"
                timeline="2024 · Apple Vision Pro"
                readTime="5 min read"
                accentClass="text-[#d0bcff]"
                spotlight="rgba(208, 188, 255, 0.14)"
            />

            {/* Dark mode override for Executive Summary */}
            <div className="[&>section]:bg-[#0e0e0e] [&>section]:border-white/10 [&_.bg-white]:bg-[#1a1a1a] [&_.border-zinc-200\/80]:border-white/10 [&_.text-zinc-900]:text-zinc-100 [&_.text-zinc-600]:text-zinc-400 [&_.text-zinc-400]:text-zinc-500 [&_.bg-white\/60]:bg-white/5 [&_.border-zinc-200]:border-white/10 [&_h4]:text-zinc-500">
                <ExecutiveSummary items={summaryItems} />
            </div>

            {/* 01 — Problem */}
            <ProblemStatement />

            {/* 02 — Research & Insight */}
            <TheInsight />

            {/* 03 — Design Decisions */}
            <DesignDecisions />
            <ConceptValidation />

            {/* 04 — Artefacts */}
            <DesignArtifacts />

            {/* 04b — Product UI */}
            <OrbitUI />

            {/* 05 — Outcomes */}
            <Outcomes />

            {/* 06 — Reflection */}
            <Learnings />
        </div>
    );
}
