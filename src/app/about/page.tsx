import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About — Aditya Chinchakar | Senior Product Designer Available for Hire",
    description: "Aditya Chinchakar is a Senior Product Designer with 9+ years shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Immediately available for Founding Designer, Staff Designer, and Lead Designer roles worldwide.",
    alternates: { canonical: "https://adityachinchakar.com/about" },
    openGraph: {
        title: "About Aditya Chinchakar | Senior Product Designer — Available Now",
        description: "9+ years shipping AI products, design systems, and 0→1 builds. Founder of Aulys. Immediately available for hire.",
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
        period: "Ongoing",
        type: "0→1",
        color: "bg-emerald-50 border-emerald-200 text-emerald-700",
        dot: "bg-emerald-500",
        description: "Conceived, designed, and shipped solo: a Figma Plugin scanning 500+ layers in under 10 seconds for WCAG 2.2 compliance, plus a Web Audit SaaS with AI-powered remediation. Owned the full product lifecycle — strategy, research, UI design, and go-to-market.",
    },
    {
        company: "Infosys",
        role: "Product Designer",
        period: "Aug 2024 – Aug 2026 · Notice Period",
        type: "Enterprise",
        color: "bg-blue-50 border-blue-200 text-blue-700",
        dot: "bg-blue-500",
        description: "Shipped a 5-tool AI Teacher Assistant Suite from 0-to-1 — driving adoption across 10,000+ teachers and 50,000+ students. Architected a 60+ component design system across 5 cross-functional teams, cutting stakeholder review from 3 weeks to 5 days.",
    },
    {
        company: "Simplifai Cognitive Services",
        role: "Product Designer",
        period: "Oct 2022 – Jul 2024",
        type: "Scale-up",
        color: "bg-violet-50 border-violet-200 text-violet-700",
        dot: "bg-violet-500",
        description: "Led 0-to-1 UX for the AI no-code Flow Builder across 950+ users and 12+ enterprise clients. Built Simplifai's design practice from scratch — founding the first Design System and establishing a research cadence that reduced dev handoff friction by 60%.",
    },
    {
        company: "Keywordio",
        role: "UI/UX & Motion Designer",
        period: "Jan 2020 – Sep 2022",
        type: "SaaS",
        color: "bg-amber-50 border-amber-200 text-amber-700",
        dot: "bg-amber-400",
        description: "Redesigned 3 core CRM dashboards through research with 100+ users — cutting data access time by 12% and driving a 45% jump in team adoption. Elevated product experience through motion design and visual storytelling.",
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

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-4 leading-[1.08]">
                    I design things<br />
                    <span className="text-zinc-400 font-bold">that actually ship.</span>
                </h1>
                <p className="text-sm font-mono text-zinc-400 mb-8 tracking-wide">Nine years. Three 0→1 products. One live plugin with 30 beta users.</p>

                <p className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed mb-6">
                    I&apos;m <strong className="text-zinc-900">Aditya Chinchakar</strong> — Senior Product Designer and founder of{" "}
                    <Link href="https://aulys-app.vercel.app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">
                        Aulys
                    </Link>
                    , a WCAG 2.2 accessibility plugin I conceived, designed, and coded solo. Previously at Infosys and Simplifai.
                    <strong className="text-zinc-900"> Immediately available</strong> for full-time and contract roles worldwide.
                </p>

                <p className="text-base text-zinc-500 max-w-3xl leading-relaxed mb-6">
                    I got into design because I was bad at accepting &ldquo;that&apos;s just how it is.&rdquo; A broken hospital registration form making a sick person type their name four times. An enterprise dashboard where the search bar didn&apos;t work on the most important page. Things that were obviously wrong and obviously fixable. That&apos;s still what drives me — finding what&apos;s broken and fixing it properly, not just making it prettier.
                </p>

                <p className="text-base text-zinc-500 max-w-3xl leading-relaxed mb-10">
                    I don&apos;t wait for engineering to validate an idea — I prototype it, test it, and arrive at the meeting with data.
                    Based in Pune, India. Open to <strong className="text-zinc-700">Founding Designer</strong>, <strong className="text-zinc-700">Staff Designer</strong>,{" "}
                    <strong className="text-zinc-700">Lead Designer</strong>, and <strong className="text-zinc-700">Product Manager</strong> roles.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
                    >
                        View Case Studies
                    </Link>
                    <Link
                        href="/resume"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
                    >
                        View Resume <ArrowUpRight className="w-3.5 h-3.5" />
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

            {/* What I'm like to work with */}
            <section className="container mx-auto max-w-4xl px-6 py-16 border-t border-zinc-200" aria-labelledby="working-with-heading">
                <h2 id="working-with-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-8">
                    What I&apos;m like to work with
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                    {[
                        {
                            title: "I disagree out loud",
                            desc: "Design shouldn't be a service function. I push back when the brief is wrong, flag when a metric will optimize for the wrong thing, and say so in the room — not in a Slack message two days later.",
                        },
                        {
                            title: "I own the outcome, not the deliverable",
                            desc: "My job ends when the product works for users, not when I hand off the Figma file. I follow features into production, read the data, and come back with changes when the data says something's wrong.",
                        },
                        {
                            title: "High trust + high standards",
                            desc: "Tell me what the problem is and what success looks like. Let me figure out the path. I'll show my work and explain every decision — but I don't do well when the path is pre-decided and design is just decoration.",
                        },
                    ].map((v) => (
                        <div key={v.title} className="bg-white rounded-2xl border border-zinc-100 p-6">
                            <h3 className="text-sm font-bold text-zinc-900 mb-2">{v.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How I work */}
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
