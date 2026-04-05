"use client";

import React from "react";
import { Hero } from "@/components/case-studies/orbit/hero";
import { ProblemStatement } from "@/components/case-studies/orbit/problem-statement";
import { TheInsight } from "@/components/case-studies/orbit/insight";
import { DesignDecisions } from "@/components/case-studies/orbit/design-decisions";
import { DesignArtifacts } from "@/components/case-studies/orbit/design-artifacts";
import { OrbitUI } from "@/components/case-studies/orbit/orbit-ui";
import { Outcomes } from "@/components/case-studies/orbit/outcomes";
import { Learnings } from "@/components/case-studies/orbit/learnings";

export default function OrbitPage() {
    return (
        <div className="min-h-screen bg-[#0e0e0e] text-white selection:bg-[#d0bcff]/30">
            {/* Hero */}
            <Hero />

            {/* 01 — Problem */}
            <ProblemStatement />

            {/* 02 — Research & Insight */}
            <TheInsight />

            {/* 03 — Design Decisions */}
            <DesignDecisions />

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
