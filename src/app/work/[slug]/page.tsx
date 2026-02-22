"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import SimplifaiPage from "@/components/case-studies/simplifai/content";
import AulysPage from "@/components/case-studies/aulys/content";
import SimplifaiDesignSystemPage from "@/components/case-studies/simplifai-design-system/content";

const CASE_STUDIES = {
    "simplifai": {
        component: SimplifaiPage,
    },
    "aulys": {
        component: AulysPage,
    },
    "simplifai-design-system": {
        component: SimplifaiDesignSystemPage,
    },
};

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

    if (!study) {
        return notFound();
    }

    const Component = study.component;

    return (
        <Component />
    );
}
