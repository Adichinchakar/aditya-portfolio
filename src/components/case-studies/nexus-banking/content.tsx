"use client";

import { Hero } from "./hero";
import { Setup } from "./setup";
import { TheProblem } from "./the-problem";
import { IntentArchitecture } from "./intent-architecture";
import { FinalDesign } from "./final-design";
import { Results } from "./results";

export default function NexusBankingPage() {
    return (
        <article className="min-h-screen bg-zinc-50 selection:bg-blue-500/30">
            <Hero />
            <Setup />
            <TheProblem />
            <IntentArchitecture />
            <FinalDesign />
            <Results />
        </article>
    );
}
