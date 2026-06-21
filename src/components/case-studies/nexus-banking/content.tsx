"use client";

import { Hero } from "./hero";
import { CaseStudyTldr } from "@/components/case-studies/case-study-tldr";
import { Setup } from "./setup";
import { TheProblem } from "./the-problem";
import { Insight } from "./insight";
import { ConceptValidation } from "@/components/case-studies/nexus-banking/concept-validation";
import { IntentArchitecture } from "./intent-architecture";
import { FinalDesign } from "./final-design";
import { Results } from "./results";
import { NexusUI } from "./nexus-ui";
import { ExecutiveSummary } from "@/components/case-studies/executive-summary";
import { Layout, Clock, Wrench } from "lucide-react";

const summaryItems = [
    {
        id: "role",
        icon: Layout,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-500",
        spotlight: "rgba(59, 130, 246, 0.10)",
        hoverBorder: "hover:border-blue-300/50",
        label: "My Role",
        content: (
            <p className="text-lg font-semibold text-zinc-900 leading-snug">
                UX Strategist & Product Designer — conducted the audit, redefined the IA, and proposed the intent-driven model.
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
                <p className="text-lg font-semibold text-zinc-900">3 Weeks</p>
                <p className="text-zinc-400 text-sm font-medium mt-1">Unsolicited UX Strategy · FinTech</p>
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
                {["Figma", "ProtoPie", "Information Architecture", "UX Strategy"].map((tool) => (
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

export default function NexusBankingPage() {
    return (
        <article className="min-h-screen bg-zinc-50 selection:bg-blue-500/30">
            <Hero />

            {/* The short version — recruiter scan card */}
            <CaseStudyTldr
                hook="You open your banking app at 11pm to move money before a payment clears. First you scroll past crypto, travel perks, and 40 features you'll never touch. That friction is a design problem with a design fix."
                stats={[
                    { value: "2×", label: "projected task completion speed" },
                    { value: "3", label: "Tier-1 neobanks audited" },
                    { value: "Self-led", label: "unsolicited UX strategy" },
                ]}
                role="UX Strategist & Product Designer"
                timeline="Unsolicited UX Strategy · FinTech"
                readTime="7 min read"
                accentClass="text-blue-700"
                spotlight="rgba(59, 130, 246, 0.10)"
            />

            <ExecutiveSummary items={summaryItems} />
            <Setup />
            <TheProblem />
            <Insight />
            {/* 03 — Architecture */}
            <ConceptValidation />
            <IntentArchitecture />
            <FinalDesign />
            <section className="py-16 px-6 bg-zinc-950">
                <div className="container mx-auto max-w-5xl">
                    <NexusUI />
                </div>
            </section>
            <Results />
        </article>
    );
}
