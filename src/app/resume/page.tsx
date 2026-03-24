import type { Metadata } from "next";
import { resumeData } from "@/data/resume";
import { ResumePage } from "@/components/resume/ResumePage";

export const metadata: Metadata = {
    title: `Resume — Aditya Chinchakar | Founding Designer & AI Product Builder`,
    description: `Full career history of Aditya Chinchakar — 7 years experience as a Founding Designer, Staff Designer, and Product Designer across EdTech (Infosys × Imagine Learning), AI workflow SaaS (Simplifai), and AdTech (Keywordio). Founder of Aulys (WCAG 2.2 AI accessibility plugin). Open to Founding Designer, Lead Designer, and Product Manager roles.`,
    alternates: { canonical: "https://adityachinchakar.com/resume" },
    openGraph: {
        title: `Aditya Chinchakar — Resume & Career History | Founding Designer`,
        description: `7 years shipping AI-powered EdTech, FinTech, and Enterprise SaaS products. Expertise: AI UX, WCAG 2.2 accessibility, Design Systems (60+ components), and 0→1 product builds. Currently at Infosys. Founder of Aulys.`,
        url: "https://adityachinchakar.com/resume",
        type: "profile",
    },
};

export default function Resume() {
    return <ResumePage data={resumeData} />;
}
