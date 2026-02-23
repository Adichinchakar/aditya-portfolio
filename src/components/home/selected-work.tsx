"use client";

import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";
import Link from "next/link";

const works = [
    {
        index: "01",
        company: "Simplifai Design System",
        description: "A comprehensive design system scaling across enterprise Automation products. Built for consistency and speed.",
        tags: ["Design Systems", "Architecture", "10x Faster UI"],
        href: "/work/simplifai-design-system",
        spotlight: "rgba(99, 102, 241, 0.12)",
        border: "group-hover:border-indigo-500/30",
        delay: 0,
        role: "Lead Architect",
        metric: "42% Faster Dev Cycle",
    },
    {
        index: "02",
        company: "Aulys",
        description: "Intelligent layout and design compliance automation tool for Figma. Empowering designers with instant feedback.",
        tags: ["AI Agent", "Figma Plugin", "Typescript"],
        href: "/work/aulys",
        spotlight: "rgba(16, 185, 129, 0.12)",
        border: "group-hover:border-emerald-500/30",
        delay: 0.1,
        role: "Frontend Engineer",
        metric: "WCAG 2.2 AAA Compliance",
    },
    {
        index: "03",
        company: "Simplifai Workflow Engine",
        description: "Node-based visual builder for complex enterprise AI automations. Democratizing logic creation without code.",
        tags: ["Node Builder", "UX Strategy", "Enterprise"],
        href: "/work/simplifai",
        spotlight: "rgba(249, 115, 22, 0.12)",
        border: "group-hover:border-orange-500/30",
        delay: 0.2,
        role: "Product Designer",
        metric: "Zero-Code Automation",
    },
    {
        index: "04",
        company: "Keywordio Dashboard",
        description: "High-density data visualization dashboards for digital marketing ad performance.",
        tags: ["Data Viz", "B2B SaaS"],
        href: "#work",
        spotlight: "rgba(168, 85, 247, 0.12)",
        border: "group-hover:border-violet-500/30",
        delay: 0.3,
        role: "Product Designer",
        metric: "Data Visualization",
    },
];

function WorkCard({ work }: { work: typeof works[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: work.delay, type: "spring" as const, stiffness: 260, damping: 22 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <Link href={work.href} className="block group h-full">
                <article
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "relative h-full overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[340px]",
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

                    <div className="relative z-10 flex flex-col h-full gap-6">
                        {/* Top row */}
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-bold text-zinc-400 font-mono tracking-widest">{work.index}</span>
                            <div className="w-10 h-10 rounded-full bg-white/70 border border-white/80 flex items-center justify-center shadow-sm backdrop-blur-md transform group-hover:scale-110 transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900 transition-colors" />
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

export function SelectedWork() {
    return (
        <section id="work" className="py-32 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl space-y-16 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-end border-b border-zinc-200/60 pb-8">
                    <TextReveal tag="h2" className="text-4xl md:text-5xl font-black tracking-tighter">
                        Case Studies
                    </TextReveal>
                    <span className="font-mono text-zinc-400 font-bold hidden sm:block tracking-widest text-sm">(0{works.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {works.map((work) => (
                        <WorkCard key={work.index} work={work} />
                    ))}
                </div>
            </div>
        </section>
    );
}
