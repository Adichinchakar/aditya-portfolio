"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { DecisionCallout } from "@/components/ui/decision-callout";
import { Hero } from "@/components/case-studies/medsecure/hero";
import { CaseStudyTldr } from "@/components/case-studies/case-study-tldr";
import { TheCrisis } from "@/components/case-studies/medsecure/the-crisis";
import { Personas } from "@/components/case-studies/medsecure/personas";
import { DesignArtifacts } from "@/components/case-studies/medsecure/design-artifacts";
import { CareCircle } from "@/components/case-studies/medsecure/care-circle";
import { TechnicalArchitecture } from "@/components/case-studies/medsecure/technical-architecture";
import { Impact } from "@/components/case-studies/medsecure/impact";
import { InclusiveDesign } from "@/components/case-studies/medsecure/inclusive-design";
import { JourneyMap } from "@/components/case-studies/medsecure/journey-map";
import { LiveTransaction } from "@/components/case-studies/medsecure/live-transaction";
import { HookModel } from "@/components/case-studies/hook-model";
import { ConceptValidation } from "@/components/case-studies/medsecure/concept-validation";
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
                Lead Product Designer — shaped the patient-provider UX, offline architecture, and ABDM integration.
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
                <p className="text-lg font-semibold text-zinc-900">12 Weeks</p>
                <p className="text-zinc-400 text-sm font-medium mt-1">2023 · Healthcare Concept · India</p>
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
                {["Figma", "React Native", "Blockchain", "ABDM Guidelines"].map((tool) => (
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

const learnings = [
    {
        type: "failure",
        icon: AlertTriangle,
        iconColor: "text-amber-500",
        iconBg: "bg-amber-500/10",
        heading: "What didn't work: V1 enrollment flow",
        body: "The initial ABHA enrollment UX assumed patients had reliable OTP delivery. In prototype testing with rural users, a large share failed the first enrollment attempt because of SMS delivery delays on low-bandwidth networks. The design had over-indexed on the tech architecture and under-indexed on last-mile connectivity constraints. V2 added a QR-scan fallback via PHC kiosks, which cut enrollment failure dramatically.",
    },
    {
        type: "learning",
        icon: Lightbulb,
        iconColor: "text-blue-500",
        iconBg: "bg-blue-500/10",
        heading: "If I started over: validate the consent model earlier",
        body: "The family-consent (CareCircle) feature was designed in week 3 and tested only in week 10. In practice, patients had deeply varying expectations about who should control record access — a 65-year-old farmer in a rural district vs. a 28-year-old in a metro. I'd run consent-model interviews in the first research sprint, not the last. This would have surfaced the 'proxy guardian' edge case far earlier.",
    },
];

export default function MedSecurePage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-[#005EB8]/30">
            <Hero />

            {/* The short version — recruiter scan card */}
            <CaseStudyTldr
                hook="A heart attack patient reaches the ER and the doctor knows nothing about them — no allergies, no history. 60 seconds to make a life-or-death call, blind. MedSecure is the record that travels with the patient instead."
                stats={[
                    { value: "30→<4%", label: "enrollment failure, V1 to V2" },
                    { value: "8", label: "languages, fully offline-capable" },
                    { value: "<60s", label: "to pull a full record at the bedside" },
                ]}
                badge="Self-initiated concept"
                contribution="solo concept — research, service design, and every screen. Outcomes are projected, not shipped."
                role="Lead Product Designer · 0→1 concept"
                timeline="2023 · Healthcare · India"
                readTime="6 min read"
                accentClass="text-blue-700"
                spotlight="rgba(0, 94, 184, 0.10)"
            />

            <ExecutiveSummary items={summaryItems} />
            <TheCrisis />

            {/* Hook Model */}
            <HookModel
                accentColor="text-blue-400"
                external="An adverse drug event: the wrong medication administered at point-of-care because the doctor had no access to the patient's allergy history."
                internal="Doctor uncertainty in the consultation room: 'I don't have this patient's full history. I'm making a decision blind.'"
                action="Scan the patient's ABHA QR code — the complete, verified health record appears instantly, online or offline."
                reward="Every patient scan reveals different history: different medications, different conditions, different flags. No two records are the same. That unpredictability keeps the system active."
                investment="Every consultation visit adds data to the patient's record. The more complete the record, the more the doctor trusts it — and the more the patient expects it at every visit. Switching cost becomes clinical risk."
            />

            <JourneyMap />
            <InclusiveDesign />
            <Personas />
            <DesignArtifacts />
            <ConceptValidation />
            <CareCircle />
            <TechnicalArchitecture />

            <div className="px-6 py-8 bg-zinc-50">
                <div className="container mx-auto max-w-4xl">
                    <DecisionCallout
                        chose="Offline-First PWA with ServiceWorker local cache"
                        rejected="Cloud-only real-time sync"
                        why="In low-connectivity regions, a large share of PHC visits occur in areas with intermittent 2G/3G. Cloud-only would fail silently — doctors seeing blank screens mid-consultation. ServiceWorker caches critical records locally and syncs on reconnect, making connectivity a non-blocking constraint instead of a hard dependency."
                    />
                </div>
            </div>

            <LiveTransaction />
            <Impact />

            {/* 10 — Learnings */}
            <section className="py-24 px-6 bg-white border-t border-zinc-100">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">10 — Reflections</p>
                        <h2 className="text-4xl font-black tracking-tighter text-zinc-900">What Failed & What I'd Change</h2>
                    </motion.div>

                    <div className="space-y-6">
                        {learnings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50/50 p-8"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                                        <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-zinc-900 mb-3">{item.heading}</h3>
                                        <p className="text-zinc-600 leading-relaxed">{item.body}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
