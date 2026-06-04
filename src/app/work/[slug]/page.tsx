import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import SimplifaiPage from "@/components/case-studies/simplifai/content";
import AulysPage from "@/components/case-studies/aulys/content";
import SimplifaiDesignSystemPage from "@/components/case-studies/simplifai-design-system/content";
import MedSecurePage from "@/components/case-studies/medsecure/content";
import NexusBankingPage from "@/components/case-studies/nexus-banking/content";
import InfosysPage from "@/components/case-studies/infosys/content";
import OrbitPage from "@/components/case-studies/orbit/content";
import { NextCaseStudyHero } from "@/components/case-studies/next-case-study-hero";

const CASE_STUDIES = {
    "simplifai": {
        component: SimplifaiPage,
        title: "Simplifai Workflow Engine — Case Study | Aditya Chinchakar",
        description: "Node-based visual builder for complex enterprise AI automations. Redesigned the core automation engine, materially reducing onboarding time and driving a step-change in user adoption.",
    },
    "aulys": {
        component: AulysPage,
        title: "Aulys Accessibility Engine — Case Study | Aditya Chinchakar",
        description: "AI-powered Figma plugin for WCAG 2.2 compliance automation. Designed and built solo — 500+ frames scanned, under 10 seconds per document.",
    },
    "simplifai-design-system": {
        component: SimplifaiDesignSystemPage,
        title: "Simplifai Design System — Case Study | Aditya Chinchakar",
        description: "Enterprise design system scaling across 5+ product teams. Semantic token architecture and automated Figma to React handoff pipelines. 42% faster dev cycles.",
    },
    "medsecure": {
        component: MedSecurePage,
        title: "MedSecure Blockchain Medical Records — Case Study | Aditya Chinchakar",
        description: "Concept for a blockchain medical-records platform giving every Indian patient a sovereign health identity. Projected to meaningfully reduce avoidable medical errors.",
    },
    "nexus-banking": {
        component: NexusBankingPage,
        title: "Nexus Fintech App — Strategy Case Study | Aditya Chinchakar",
        description: "Solving the Super-App paradox with an Intent-Led architectural strategy for Tier-1 Neobanks. An unsolicited UX audit and strategic proposal.",
    },
    "infosys": {
        component: InfosysPage,
        title: "Infosys × Imagine Learning — Case Study | Aditya Chinchakar",
        description: "GenAI-powered assessment tools for enterprise-scale educational platforms. Designed rubric generators and recommendation engines serving multiple product teams, materially cutting assessment time.",
    },
    "orbit": {
        component: OrbitPage,
        title: "Orbit — Spatial Onboarding for Apple Vision Pro | Aditya Chinchakar",
        description: "AI agent-guided enterprise onboarding on Apple Vision Pro. Collapses 3 weeks of context-building into 3 hours through spatial mapping and gaze-first navigation.",
    },
};

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];
    if (!study) return {};
    return {
        title: study.title,
        description: study.description,
        openGraph: {
            title: study.title,
            description: study.description,
            url: `https://adityachinchakar.com/work/${slug}`,
            type: "article",
        },
        twitter: {
            title: study.title,
            description: study.description,
        },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

    if (!study) {
        return notFound();
    }

    const Component = study.component;

    return (
        <>
            <ScrollProgress />
            <Component />
            <NextCaseStudyHero currentSlug={slug} />
        </>
    );
}
