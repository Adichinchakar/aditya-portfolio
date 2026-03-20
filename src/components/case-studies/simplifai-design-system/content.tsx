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

export default function SimplifaiDesignSystemPage() {
    return (
        <main className="bg-zinc-50 min-h-screen">
            <Hero />
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
