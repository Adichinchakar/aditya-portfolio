"use client";

import React from "react";
import { Hero } from "@/components/case-studies/aulys/hero";
import { ProblemStatement } from "@/components/case-studies/aulys/problem-statement";
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
