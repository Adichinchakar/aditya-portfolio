"use client";

import React from "react";
import { Hero } from "@/components/case-studies/simplifai-design-system/hero";
import { AtomicExplorer } from "@/components/case-studies/simplifai-design-system/atomic-explorer";
import { TokenGraph } from "@/components/case-studies/simplifai-design-system/token-graph";
import { ComponentPlayground } from "@/components/case-studies/simplifai-design-system/component-playground";
import { ComponentRedlines } from "@/components/case-studies/simplifai-design-system/component-redlines";
import { SystemGovernance } from "@/components/case-studies/simplifai-design-system/system-governance";
import { TechnicalEvolution } from "@/components/case-studies/simplifai-design-system/technical-evolution";

export default function SimplifaiDesignSystemPage() {
    return (
        <main className="bg-zinc-50 min-h-screen">
            <Hero />
            <AtomicExplorer />
            <TokenGraph />
            <ComponentPlayground />
            <ComponentRedlines />
            <SystemGovernance />
            <TechnicalEvolution />

            <div className="container mx-auto px-6 py-24 text-center">
                <p className="text-zinc-500">More sections coming soon...</p>
            </div>
        </main>
    );
}
