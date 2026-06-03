"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";
import Link from "next/link";

const works = [
    {
        index: "01",
        company: "Aulys",
        description: "I found out 96% of the web fails accessibility — then built a Figma plugin that scans 500 layers in under 10 seconds and tells you exactly what to fix.",
        tags: ["AI Agent", "Figma Plugin", "Typescript"],
        href: "/work/aulys",
        spotlight: "rgba(16, 185, 129, 0.12)",
        border: "group-hover:border-emerald-500/30",
        accent: "from-emerald-400 to-teal-500",
        accentBg: "bg-emerald-950",
        readTime: "12 min read",
        delay: 0,
        role: "Design Engineer",
        metric: "WCAG 2.2 AAA Compliance",
    },
    {
        index: "02",
        company: "Simplifai Workflow Engine",
        description: "Enterprise teams were building AI workflows in spreadsheets. I redesigned the entire product experience — adoption went from stuck to 73% in one quarter.",
        tags: ["Node Builder", "UX Strategy", "Enterprise"],
        href: "/work/simplifai",
        spotlight: "rgba(249, 115, 22, 0.12)",
        border: "group-hover:border-orange-500/30",
        accent: "from-orange-400 to-amber-500",
        accentBg: "bg-orange-950",
        readTime: "15 min read",
        delay: 0.1,
        role: "Senior Product Designer",
        metric: "73% User Adoption Increase",
    },
    {
        index: "03",
        company: "Simplifai Design System",
        description: "Five product teams, one design system. Built 60+ components with clear usage rules — dev cycle dropped 42%. Designers stopped arguing about buttons.",
        tags: ["Design Systems", "Architecture", "10x Faster UI"],
        href: "/work/simplifai-design-system",
        spotlight: "rgba(99, 102, 241, 0.12)",
        border: "group-hover:border-indigo-500/30",
        accent: "from-indigo-400 to-violet-500",
        accentBg: "bg-indigo-950",
        readTime: "10 min read",
        delay: 0.2,
        role: "Lead Architect",
        metric: "42% Faster Dev Cycle",
    },
    {
        index: "04",
        company: "MedSecure",
        description: "Blockchain medical records platform giving every Indian patient a sovereign, tamper-proof health identity — online or offline.",
        tags: ["Blockchain", "Healthcare", "ABDM"],
        href: "/work/medsecure",
        spotlight: "rgba(0, 94, 184, 0.12)",
        border: "group-hover:border-blue-600/30",
        accent: "from-blue-500 to-cyan-400",
        accentBg: "bg-blue-950",
        readTime: "14 min read",
        delay: 0.3,
        role: "Product Lead",
        metric: "34% Fewer Medical Errors",
    },
    {
        index: "05",
        company: "Nexus Fintech App",
        description: "Super-apps fail because they try to be everything. I spent 6 weeks mapping why — and designed an intent-led architecture that puts context before features.",
        tags: ["FinTech", "UX Strategy", "Architecture"],
        href: "/work/nexus-banking",
        spotlight: "rgba(59, 130, 246, 0.12)",
        border: "group-hover:border-blue-500/30",
        accent: "from-amber-400 to-yellow-500",
        accentBg: "bg-zinc-900",
        readTime: "8 min read",
        delay: 0.4,
        role: "Principal Designer",
        metric: "Strategy Case Study",
    },
    {
        index: "06",
        company: "Infosys × Imagine Learning",
        description: "Teachers at a 50-state US school network were spending 3 hours building one assessment. I designed AI tools that cut that to 20 minutes — across 5 product teams.",
        tags: ["GenAI", "Enterprise", "Design Systems"],
        href: "/work/infosys",
        spotlight: "rgba(99, 102, 241, 0.12)",
        border: "group-hover:border-indigo-500/30",
        accent: "from-violet-500 to-purple-600",
        accentBg: "bg-violet-950",
        readTime: "10 min read",
        delay: 0.5,
        role: "Senior Product Designer",
        metric: "70% Faster Assessments",
    },
];

function WorkCard({ work }: { work: typeof works[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotX = useSpring(rotateX, { stiffness: 120, damping: 20 });
    const springRotY = useSpring(rotateY, { stiffness: 120, damping: 20 });

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
        rotateX.set(((clientY - top) / height - 0.5) * -8);
        rotateY.set(((clientX - left) / width - 0.5) * 8);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: work.delay, type: "spring" as const, stiffness: 260, damping: 22 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ rotateX: springRotX, rotateY: springRotY, transformPerspective: 1200 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={work.href} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-[2rem]">
                <article
                    className={cn(
                        "relative h-full overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-xl p-7 md:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[280px]",
                        work.border
                    )}
                >
                    {/* Cursor spotlight */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${work.spotlight}, transparent 80%)`,
                        }}
                    />

                    {/* Accent header strip */}
                    <div className={`relative h-24 rounded-t-[2rem] overflow-hidden ${work.accentBg} -mx-7 -mt-7 md:-mx-8 md:-mt-8 mb-6 px-7 md:px-8 flex items-end pb-4`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${work.accent} opacity-30`} />
                        {/* Abstract dot grid */}
                        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
                        <div className="relative z-10 flex justify-between items-end w-full">
                            <span className={`text-xs font-mono font-bold bg-gradient-to-r ${work.accent} bg-clip-text text-transparent tracking-widest`}>{work.index}</span>
                            <span className="text-[10px] font-semibold text-white/50 tracking-wide">{work.readTime}</span>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col h-full gap-6">
                        {/* Top row */}
                        <div className="flex justify-between items-start">
                            <span className="sr-only">{work.index}</span>
                            <div className="ml-auto w-10 h-10 rounded-full bg-white/70 border border-white/80 flex items-center justify-center shadow-sm backdrop-blur-md transform group-hover:scale-110 transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900 transition-colors" aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-950 transition-colors">
                                {work.company}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed font-medium line-clamp-3 mb-6">
                                {work.description}
                            </p>

                            {/* Impact Info */}
                            <div className="flex flex-col gap-2 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider w-16">Role</span>
                                    <span className="text-sm font-semibold text-zinc-700">{work.role}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider w-16">Impact</span>
                                    <span className="text-sm border border-zinc-200 bg-white/50 px-2 py-0.5 rounded-md font-semibold text-zinc-800 backdrop-blur-sm shadow-sm">{work.metric}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {work.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 rounded-full bg-white/60 border border-white/80 text-xs font-semibold text-zinc-700 backdrop-blur-md shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}

export function SelectedWork({ title = "Case Studies", excludeHref }: { title?: string; excludeHref?: string }) {
    const displayedWorks = excludeHref ? works.filter(w => w.href !== excludeHref) : works;

    return (
        <section id="work" className="py-24 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl space-y-12 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-end border-b border-zinc-200/60 pb-8">
                    <TextReveal tag="h2" className="text-4xl md:text-5xl font-black tracking-tighter">
                        {title}
                    </TextReveal>
                    <span className="font-mono text-zinc-600 font-bold hidden sm:block tracking-widest text-sm">(0{displayedWorks.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {displayedWorks.map((work) => (
                        <WorkCard key={work.index} work={work} />
                    ))}
                </div>
            </div>
        </section>
    );
}
