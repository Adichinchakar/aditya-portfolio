"use client";

import { notFound } from "next/navigation";
import { Hero } from "@/components/home/hero";
import { FlowPreview } from "@/components/case-studies/simplifai/flow-preview";
import { BentoImpact } from "@/components/case-studies/simplifai/bento-impact";
import { TechnicalEvolution } from "@/components/case-studies/simplifai/technical-evolution";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";

const CASE_STUDIES = {
    simplifai: {
        title: "Simplifai Flow Automation",
        description: "Visual workflow builder for enterprise AI automations.",
        component: SimplifaiContent,
    },
};

function SimplifaiContent() {
    return (
        <>
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <Link href="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Work
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 tracking-tighter">
                            Simplifai <span className="text-purple-500">Flow</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-2xl">
                            Redesigning the workflow engine for Keywordio to help non-technical teams build complex AI automations without writing code.
                        </p>
                    </motion.div>
                </div>
            </section>

            <FlowPreview />
            <BentoImpact />
            <TechnicalEvolution />
        </>
    );
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

    if (!study) {
        return notFound();
    }

    const Component = study.component;

    return (
        <div className="min-h-screen bg-zinc-50">
            <Component />
        </div>
    );
}
