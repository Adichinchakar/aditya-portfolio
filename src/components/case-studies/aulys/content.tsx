"use client";

import React from "react";
import { Hero } from "@/components/case-studies/aulys/hero";
import { ProblemStatement } from "@/components/case-studies/aulys/problem-statement";
import { TheStory } from "@/components/case-studies/aulys/the-story";
import { SystemSpecs } from "@/components/case-studies/aulys/system-specs";
import { BentoImpact } from "@/components/case-studies/aulys/bento-impact";
import { RelatedCaseStudy } from "@/components/case-studies/shared/related-case-study";

export default function AulysPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-blue-500/30">
            {/* Hero */}
            <Hero />

            {/* Problem Statement */}
            <ProblemStatement />

            {/* The Story Grid */}
            <TheStory />

            {/* System Specifications */}
            <SystemSpecs />

            {/* Impact Details */}
            <BentoImpact />

            {/* Cross-link → Simplifai */}
            <RelatedCaseStudy target="flow-builder" />
        </div>
    );
}
