"use client";

import React from "react";
import { Hero } from "@/components/case-studies/medsecure/hero";
import { TheCrisis } from "@/components/case-studies/medsecure/the-crisis";
import { Personas } from "@/components/case-studies/medsecure/personas";
import { CareCircle } from "@/components/case-studies/medsecure/care-circle";
import { TechnicalArchitecture } from "@/components/case-studies/medsecure/technical-architecture";
import { Impact } from "@/components/case-studies/medsecure/impact";

import { InclusiveDesign } from "@/components/case-studies/medsecure/inclusive-design";
import { JourneyMap } from "@/components/case-studies/medsecure/journey-map";
import { LiveTransaction } from "@/components/case-studies/medsecure/live-transaction";

export default function MedSecurePage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-[#005EB8]/30">
            {/* Hero */}
            <Hero />

            {/* 01 — The Crisis (split-screen data fragmentation) */}
            <TheCrisis />

            {/* 02 — The Messy Middle (Patient Journey Map) */}
            <JourneyMap />

            {/* 03 — Next Billion Users (Inclusive Design / Accessibility) */}
            <InclusiveDesign />

            {/* 04 — User Research (Priya, Ramesh, Dr. Rajesh) */}
            <Personas />

            {/* 05 — Family Consent Management (interactive Care Circle) */}
            <CareCircle />

            {/* 06 — Technical Architecture (Hyperledger + IPFS) */}
            <TechnicalArchitecture />

            {/* 07 — Interactive Auth Flow (Live Transaction Simulation) */}
            <LiveTransaction />

            {/* 09 — Impact & Pilot Results */}
            <Impact />
        </div>
    );
}
