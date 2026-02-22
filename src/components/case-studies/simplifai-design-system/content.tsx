"use client";

import React from "react";
import { Hero } from "@/components/case-studies/simplifai-design-system/hero";
import { AtomicExplorer } from "@/components/case-studies/simplifai-design-system/atomic-explorer";
import { TokenGraph } from "@/components/case-studies/simplifai-design-system/token-graph";
import { ComponentPlayground } from "@/components/case-studies/simplifai-design-system/component-playground";
import { ComponentRedlines } from "@/components/case-studies/simplifai-design-system/component-redlines";
import { SystemGovernance } from "@/components/case-studies/simplifai-design-system/system-governance";
import { TechnicalEvolution } from "@/components/case-studies/simplifai-design-system/technical-evolution";
import { SystemSpecs } from "@/components/case-studies/simplifai/system-specs";
import { RelatedCaseStudy } from "@/components/case-studies/shared/related-case-study";

export default function SimplifaiDesignSystemPage() {
    return (
        <main className="bg-zinc-50 min-h-screen">
            <Hero />
            <AtomicExplorer />
            <TokenGraph />
            <ComponentPlayground />
            <ComponentRedlines />

            {/* Engineering detail — tokens & spec annotations */}
            <SystemSpecs />

            <SystemGovernance />
            <TechnicalEvolution />

            {/* Cross-link → Flow Builder */}
            <RelatedCaseStudy target="flow-builder" />
        </main>
    );
}
