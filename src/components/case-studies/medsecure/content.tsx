"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { Hero } from "@/components/case-studies/medsecure/hero";
import { TheCrisis } from "@/components/case-studies/medsecure/the-crisis";
import { Personas } from "@/components/case-studies/medsecure/personas";
import { DesignArtifacts } from "@/components/case-studies/medsecure/design-artifacts";
import { CareCircle } from "@/components/case-studies/medsecure/care-circle";
import { TechnicalArchitecture } from "@/components/case-studies/medsecure/technical-architecture";
import { Impact } from "@/components/case-studies/medsecure/impact";
import { InclusiveDesign } from "@/components/case-studies/medsecure/inclusive-design";
import { JourneyMap } from "@/components/case-studies/medsecure/journey-map";
import { LiveTransaction } from "@/components/case-studies/medsecure/live-transaction";

const learnings = [
    {
        type: "failure",
        icon: AlertTriangle,
        iconColor: "text-amber-500",
        iconBg: "bg-amber-500/10",
        heading: "What didn't work: V1 enrollment flow",
        body: "The initial ABHA enrollment UX assumed patients had reliable OTP delivery. In the Delhi NCR pilot, ~30% of rural users failed the first enrollment attempt because of SMS delivery delays on BSNL networks. We had over-indexed on the tech architecture and under-indexed on last-mile connectivity constraints. V2 added a QR-scan fallback via PHC kiosks, which cut enrollment failure to under 4%.",
    },
    {
        type: "learning",
        icon: Lightbulb,
        iconColor: "text-blue-500",
        iconBg: "bg-blue-500/10",
        heading: "If I started over: validate the consent model earlier",
        body: "The family-consent (CareCircle) feature was designed in week 3 and tested only in week 10. In practice, patients had deeply varying expectations about who should control record access — a 65-year-old farmer in Pune vs. a 28-year-old in Delhi. I'd run consent-model interviews in the first research sprint, not the last. This would have surfaced the 'proxy guardian' edge case before it became a pilot pain point.",
    },
];

export default function MedSecurePage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-[#005EB8]/30">
            <Hero />
            <TheCrisis />
            <JourneyMap />
            <InclusiveDesign />
            <Personas />
            <DesignArtifacts />
            <CareCircle />
            <TechnicalArchitecture />
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
