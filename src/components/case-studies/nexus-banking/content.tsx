"use client";

import { Hero } from "./hero";
import { Setup } from "./setup";
import { TheProblem } from "./the-problem";
import { IntentArchitecture } from "./intent-architecture";
import { FinalDesign } from "./final-design";
import { Results } from "./results";
import { NexusUI } from "./nexus-ui";

export default function NexusBankingPage() {
    return (
        <article className="min-h-screen bg-zinc-50 selection:bg-blue-500/30">
            <Hero />
            <Setup />
            <TheProblem />
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
