"use client";

import React from "react";
import { Hero } from "@/components/case-studies/aulys/hero";
import { ProblemStatement } from "@/components/case-studies/aulys/problem-statement";
import { HookModel } from "@/components/case-studies/hook-model";
import { TheInsight } from "@/components/case-studies/aulys/insight";
import { TheStory } from "@/components/case-studies/aulys/the-story";
import { DesignArtifacts } from "@/components/case-studies/aulys/design-artifacts";
import { SystemSpecs } from "@/components/case-studies/aulys/system-specs";
import { BentoImpact } from "@/components/case-studies/aulys/bento-impact";
import { Learnings } from "@/components/case-studies/aulys/learnings";
import { WcagBadge } from "@/components/case-studies/aulys/wcag-badge";

export default function AulysPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-blue-500/30">
            {/* Hero */}
            <Hero />

            {/* 01 — Problem */}
            <ProblemStatement />

            {/* Hook Model */}
            <HookModel
                accentColor="text-blue-400"
                external="96.3% of the web fails accessibility. A client's shipped design just failed an audit — post-launch."
                internal="Designer anxiety: 'I'm about to ship something broken and I won't know until it's live and on someone's screen.'"
                action="One-click scan inside Figma — during the design phase, before handoff ever happens."
                reward="Results vary per file: some runs surface zero violations (relief), others flag critical contrast failures or missing focus states (urgency to act)."
                investment="Each scan trains the designer's eye. Over weeks, they stop making the violations. The tool doesn't just fix problems — it builds intuition."
            />

            {/* 02 — The Insight */}
            <TheInsight />

            {/* 03 — How I Built It */}
            <TheStory />

            {/* 03.5 — Design */}
            <DesignArtifacts />

            {/* 04 — Architecture */}
            <SystemSpecs />

            {/* 05 — Impact */}
            <BentoImpact />

            {/* 06 — Reflection */}
            <Learnings />

            {/* WCAG 2.1 AA Compliance Badge — Living proof */}
            <WcagBadge />
        </div>
    );
}
