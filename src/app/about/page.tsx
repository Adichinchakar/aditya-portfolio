import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About — Senior Product Designer | Aditya Chinchakar",
    description: "Aditya Chinchakar is a Senior Product Designer with 6+ years shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Currently at Infosys. Open to Senior Designer, Staff Designer, and Founding Designer roles.",
    alternates: { canonical: "https://adityachinchakar.com/about" },
    openGraph: {
        title: "About Aditya Chinchakar | Senior Product Designer",
        description: "6+ years shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Currently at Infosys.",
        url: "https://adityachinchakar.com/about",
        type: "profile",
    },
};

const skills = [
    { category: "Design", items: ["Product Strategy", "UX Research", "Interaction Design", "Design Systems", "Accessibility (WCAG 2.2)", "Prototyping"] },
    { category: "AI & Emerging", items: ["AI UX Design", "Prompt UX", "GenAI Interfaces", "Trust Design", "Conversational UI", "Data Visualization"] },
    { category: "Engineering", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma Plugin API"] },
    { category: "Leadership", items: ["Design Ops", "Cross-functional Collaboration", "Design Critique", "Hiring & Mentorship", "Roadmap Planning", "Stakeholder Communication"] },
];

const timeline = [
    {
        company: "Aulys",
        role: "Founder & Founding Designer",
        period: "2022 – Present",
        type: "0→1",
        color: "bg-emerald-50 border-emerald-200 text-emerald-700",
        dot: "bg-emerald-500",
        description: "Designed and engineered an AI-powered Figma plugin for WCAG 2.2 compliance automation. Built solo — concept, design, engineering, and go-to-market. 30+ beta designers in active testing.",
    },
    {
        company: "Infosys",
        role: "Senior Product Designer",
        period: "2023 – Present",
        type: "Enterprise",
        color: "bg-blue-50 border-blue-200 text-blue-700",
        dot: "bg-blue-500",
        description: "Lead product designer for GenAI-powered educational platforms at Imagine Learning (enterprise client, North America). Architected a unified design system across 5 product teams. 3 AI tools shipped to production.",
    },
    {
        company: "Simplifai",
        role: "Senior Product Designer",
        period: "2021 – 2023",
        type: "Scale-up",
        color: "bg-violet-50 border-violet-200 text-violet-700",
        dot: "bg-violet-500",
        description: "Only senior designer on the team. Redesigned the AI workflow automation engine from scratch. Built the company's first design system. 73% increase in user adoption across 8 enterprise clients.",
    },
    {
        company: "Keywordio",
        role: "UI/UX Designer",
        period: "2019 – 2021",
        type: "SaaS",
        color: "bg-amber-50 border-amber-200 text-amber-700",
        dot: "bg-amber-400",
        description: "Shipped 8 dashboard modules for an AdTech SaaS CRM and analytics platform. Introduced the company's first design tokens and component library.",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            {/* Hero */}
            <section className="container mx-auto max-w-4xl px-6 pt-20 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to opportunities
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.08]">
                    Senior Product Designer.<br />
                    <span className="text-zinc-400 font-bold">Building at the edge of AI.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed mb-8">
                    I&apos;m <strong className="text-zinc-900">Aditya Chinchakar</strong>, a Senior Product Designer with 6+ years shipping AI-powered products,
                    enterprise design systems, and 0→1 builds across startups and large-scale organisations.
                    Currently a Senior Product Designer at <strong className="text-zinc-900">Infosys</strong> and the founder of{" "}
                    <Link href="https://aulys-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">
                        Aulys
                    </Link>
                    , an AI-powered Figma plugin for WCAG 2.2 accessibility automation — designed and engineered solo.
                </p>

                <p className="text-base text-zinc-500 max-w-3xl leading-relaxed mb-10">
                    My work sits at the intersection of <strong className="text-zinc-700">UX strategy</strong>, <strong className="text-zinc-700">AI interface design</strong>, and <strong className="text-zinc-700">front-end engineering</strong>.
                    I design in Figma, ship with React and Next.js, and obsess over design systems architecture,
                    WCAG compliance, and the hard unsolved questions in enterprise AI UX.
                    Based in India. Open to <strong className="text-zinc-700">Senior Product Designer</strong>, <strong className="text-zinc-700">Staff Designer</strong>,{" "}
                    <strong className="text-zinc-700">Founding Designer</strong>, and <strong className="text-zinc-700">Design Lead</strong> roles.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
                    >
                        View Case Studies
                    </Link>
                    <Link
                        href="/Aditya_Chinchakar_V1_FoundingDesigner.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
                    >
                        Download Resume <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/adityachinchakar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
                    >
                        LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </section>

            {/* Skills */}
            <section className="container mx-auto max-w-4xl px-6 py-16 border-t border-zinc-200" aria-labelledby="skills-heading">
                <h2 id="skills-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">
                    Expertise
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {skills.map((group) => (
                        <div key={group.category} className="bg-white rounded-2xl border border-zinc-100 p-6">
                            <h3 className="text-sm font-bold text-zinc-900 mb-4">{group.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-xs text-zinc-600 font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Career Timeline */}
            <section className="container mx-auto max-w-4xl px-6 py-16 border-t border-zinc-200" aria-labelledby="experience-heading">
                <h2 id="experience-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">
                    Career
                </h2>
                <div className="relative pl-6">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200" />

                    <div className="flex flex-col gap-10">
                        {timeline.map((item) => (
                            <div key={item.company} className="relative">
                                <div className={`absolute -left-[25px] top-1 w-3 h-3 rounded-full border-2 border-white ${item.dot}`} />
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="text-base font-bold text-zinc-900">{item.company}</h3>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}>{item.type}</span>
                                    <span className="text-xs text-zinc-400 font-mono ml-auto">{item.period}</span>
                                </div>
                                <p className="text-sm font-semibold text-zinc-500 mb-2 uppercase tracking-wider">{item.role}</p>
                                <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What I value */}
            <section className="container mx-auto max-w-4xl px-6 py-16 border-t border-zinc-200" aria-labelledby="values-heading">
                <h2 id="values-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">
                    How I work
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Research before pixels",
                            desc: "Every design decision is backed by user research, competitive analysis, or a documented hypothesis. I don't skip the thinking.",
                        },
                        {
                            title: "Designers who ship",
                            desc: "I write production React. Not to replace engineers — to collaborate better, prototype with real constraints, and reduce handoff friction.",
                        },
                        {
                            title: "Systems over screens",
                            desc: "A great screen is a side effect of a great system. I think in components, tokens, and patterns before I think in individual layouts.",
                        },
                    ].map((v) => (
                        <div key={v.title} className="bg-white rounded-2xl border border-zinc-100 p-6">
                            <h3 className="text-sm font-bold text-zinc-900 mb-2">{v.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto max-w-4xl px-6 py-16 border-t border-zinc-200">
                <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">Want to work together?</h2>
                        <p className="text-zinc-400 text-sm">Open to full-time roles, consulting, and advisory. Let&apos;s talk.</p>
                    </div>
                    <a
                        href="mailto:adichinchakar@gmail.com"
                        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-colors"
                    >
                        adichinchakar@gmail.com <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
