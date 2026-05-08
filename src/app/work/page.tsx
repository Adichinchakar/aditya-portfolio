"use client";

import { MouseEvent, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";

const DOMAIN_FILTERS = ["All", "AI / ML", "Design Systems", "FinTech", "Healthcare", "Spatial UX"] as const;
type DomainFilter = typeof DOMAIN_FILTERS[number];

const PROJECTS = [
    {
        slug: "orbit",
        title: "Orbit",
        category: "Spatial UX · Apple Vision Pro",
        description: "AI agent-guided enterprise onboarding for Apple Vision Pro. Collapses 3 weeks of org context into 3 hours through spatial mapping and gaze-first navigation.",
        tags: ["Spatial UX", "Vision Pro", "AI Agent"],
        domain: "Spatial UX" as DomainFilter,
        year: "2025",
        role: "Lead Designer",
        metric: "60% Faster Onboarding",
        spotlight: "rgba(139, 92, 246, 0.12)",
        border: "group-hover:border-violet-500/30",
    },
    {
        slug: "aulys",
        title: "Aulys",
        category: "AI Agent · Figma Plugin",
        description: "96% of the web fails accessibility. I built a Figma plugin that scans 500 layers in under 10 seconds and tells you exactly what to fix.",
        tags: ["AI Agent", "Figma Plugin", "Typescript"],
        domain: "AI / ML" as DomainFilter,
        year: "2024",
        role: "Design Engineer",
        metric: "WCAG 2.2 AAA Compliance",
        spotlight: "rgba(16, 185, 129, 0.12)",
        border: "group-hover:border-emerald-500/30",
    },
    {
        slug: "simplifai",
        title: "Simplifai Workflow Engine",
        category: "Node Builder · Enterprise",
        description: "Enterprise teams were building AI workflows in spreadsheets. I redesigned the entire experience — adoption went from stuck to 73% in one quarter.",
        tags: ["Node Builder", "UX Strategy", "Enterprise"],
        domain: "AI / ML" as DomainFilter,
        year: "2023",
        role: "Senior Product Designer",
        metric: "Zero-Code Automation",
        spotlight: "rgba(249, 115, 22, 0.12)",
        border: "group-hover:border-orange-500/30",
    },
    {
        slug: "simplifai-design-system",
        title: "Simplifai Design System",
        category: "Design Systems · Architecture",
        description: "Five product teams, one design system. Built 60+ components with clear usage rules — dev cycle dropped 42%. Designers stopped arguing about buttons.",
        tags: ["Design Systems", "Architecture", "10x Faster UI"],
        domain: "Design Systems" as DomainFilter,
        year: "2023",
        role: "Lead Architect",
        metric: "42% Faster Dev Cycle",
        spotlight: "rgba(99, 102, 241, 0.12)",
        border: "group-hover:border-indigo-500/30",
    },
    {
        slug: "medsecure",
        title: "MedSecure",
        category: "Healthcare · Blockchain",
        description: "Blockchain medical records platform giving every Indian patient a sovereign, tamper-proof health identity — online or offline.",
        tags: ["Blockchain", "Healthcare", "ABDM"],
        domain: "Healthcare" as DomainFilter,
        year: "2024",
        role: "Product Lead",
        metric: "34% Fewer Medical Errors",
        spotlight: "rgba(0, 94, 184, 0.12)",
        border: "group-hover:border-blue-600/30",
    },
    {
        slug: "nexus-banking",
        title: "Nexus Fintech App",
        category: "FinTech · UX Strategy",
        description: "Super-apps fail because they try to be everything. I spent 6 weeks mapping why — and designed an intent-led architecture that puts context before features.",
        tags: ["FinTech", "UX Strategy", "Architecture"],
        domain: "FinTech" as DomainFilter,
        year: "2024",
        role: "Principal Designer",
        metric: "Strategy Case Study",
        spotlight: "rgba(59, 130, 246, 0.12)",
        border: "group-hover:border-blue-500/30",
    },
    {
        slug: "infosys",
        title: "Infosys × Imagine Learning",
        category: "GenAI · Enterprise · Education",
        description: "Teachers at a 50-state US school network were spending 3 hours building one assessment. I designed AI tools that cut that to 20 minutes — across 5 product teams.",
        tags: ["GenAI", "Enterprise", "Design Systems"],
        domain: "AI / ML" as DomainFilter,
        year: "2024",
        role: "Senior Product Designer",
        metric: "70% Faster Assessments",
        spotlight: "rgba(99, 102, 241, 0.12)",
        border: "group-hover:border-indigo-500/30",
    },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.07, type: "spring", stiffness: 260, damping: 22 }}
        >
            <Link href={`/work/${project.slug}`} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-[2rem]">
                <article
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "relative h-full overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-xl p-7 md:p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[280px]",
                        project.border
                    )}
                >
                    {/* Cursor spotlight */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${project.spotlight}, transparent 80%)`,
                        }}
                    />

                    <div className="relative z-10 flex flex-col h-full gap-6">
                        {/* Top row */}
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-bold text-zinc-400 font-mono tracking-widest">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white/70 border border-white/80 flex items-center justify-center shadow-sm backdrop-blur-md transform group-hover:scale-110 transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-900 transition-colors" aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">
                                {project.category}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-zinc-900 mb-3 group-hover:text-zinc-950 transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-zinc-500 leading-relaxed font-medium line-clamp-3 mb-6">
                                {project.description}
                            </p>

                            {/* Impact Info */}
                            <div className="flex flex-col gap-2 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider w-16">Role</span>
                                    <span className="text-sm font-semibold text-zinc-700">{project.role}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider w-16">Impact</span>
                                    <span className="text-sm border border-zinc-200 bg-white/50 px-2 py-0.5 rounded-md font-semibold text-zinc-800 backdrop-blur-sm shadow-sm">{project.metric}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
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

export default function WorkIndex() {
    const [activeFilter, setActiveFilter] = useState<DomainFilter>("All");
    const filtered = activeFilter === "All" ? PROJECTS : PROJECTS.filter(p => p.domain === activeFilter);

    return (
        <div className="min-h-screen bg-zinc-50 pt-32 pb-24 relative overflow-hidden">
            {/* Ambient glow orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Header */}
                <div className="flex justify-between items-end border-b border-zinc-200/60 pb-8 mb-12">
                    <TextReveal tag="h1" className="text-4xl md:text-5xl font-black tracking-tighter">
                        Selected Work
                    </TextReveal>
                    <span className="font-mono text-zinc-400 font-bold hidden sm:block tracking-widest text-sm">
                        (0{filtered.length})
                    </span>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-lg text-zinc-500 leading-relaxed font-medium mb-8 max-w-2xl"
                >
                    Products, tools, and strategic case studies — spanning design systems, AI tooling, healthcare, and fintech.
                </motion.p>

                {/* Domain filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-10"
                    role="group"
                    aria-label="Filter by domain"
                >
                    {DOMAIN_FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            aria-pressed={activeFilter === filter}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                activeFilter === filter
                                    ? "bg-zinc-900 text-white border-zinc-900"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {filtered.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
