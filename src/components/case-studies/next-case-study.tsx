import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CASE_STUDIES = [
    {
        slug: "orbit",
        title: "Orbit",
        description: "AI agent-guided spatial onboarding for Apple Vision Pro.",
    },
    {
        slug: "aulys",
        title: "Aulys Accessibility",
        description: "Intelligent layout and design compliance automation tool for Figma.",
    },
    {
        slug: "simplifai",
        title: "Simplifai Workflow Engine",
        description: "Node-based visual builder for complex enterprise AI automations.",
    },
    {
        slug: "simplifai-design-system",
        title: "Simplifai Design System",
        description: "Built for consistency and speed scaling across enterprise products.",
    },
    {
        slug: "medsecure",
        title: "MedSecure",
        description: "Blockchain medical records giving every Indian patient a sovereign health identity.",
    },
    {
        slug: "nexus-banking",
        title: "Nexus Fintech App",
        description: "Solving the 'Super-App' paradox with an Intent-Led architectural strategy.",
    },
    {
        slug: "infosys",
        title: "Infosys × Imagine Learning",
        description: "GenAI-powered assessment tools for enterprise-scale educational platforms.",
    },
];

// The NextCaseStudy component was removed in favor of NextCaseStudyHero
// but this constant is still used for cycling through the projects.
