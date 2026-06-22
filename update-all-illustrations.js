const fs = require('fs');
fs.writeFileSync('c:/Users/Admin/Desktop/Portfolio Website/src/app/work/page.tsx', `"use client";

import { MouseEvent, useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";

const DOMAIN_FILTERS = ["All", "AI / ML", "Design Systems", "FinTech", "Healthcare", "Spatial UX"] as const;
type DomainFilter = typeof DOMAIN_FILTERS[number];

const PROJECTS: Array<{
    slug: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    domain: DomainFilter;
    year: string;
    role: string;
    metric: string;
    spotlight: string;
    border: string;
    concept?: boolean;
    highlight?: boolean;
}> = [
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
        border: "group-hover:border-[#00BC7C]/30",
        highlight: true,
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
        concept: true,
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
        concept: true,
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
        concept: true,
    },
];


function ProjectIllustration({ slug }: { slug: string }) {
    switch (slug) {
        case "infosys":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-50/30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
                    {/* Abstract GenAI Nodes */}
                    <div className="relative w-full h-full">
                        {/* Center Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_0_20px_rgba(99,102,241,0.2)] border border-indigo-100 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-700">
                            <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse" />
                        </div>
                        {/* Connecting Lines */}
                        <svg className="absolute inset-0 w-full h-full stroke-indigo-200/60 stroke-[1.5]" fill="none">
                            <path d="M 50% 50% L 20% 20%" className="animate-[dash_3s_linear_infinite]" strokeDasharray="4 4" />
                            <path d="M 50% 50% L 80% 30%" className="animate-[dash_3s_linear_infinite] [animation-delay:1s]" strokeDasharray="4 4" />
                            <path d="M 50% 50% L 70% 80%" className="animate-[dash_3s_linear_infinite] [animation-delay:0.5s]" strokeDasharray="4 4" />
                            <path d="M 50% 50% L 30% 75%" className="animate-[dash_3s_linear_infinite] [animation-delay:1.5s]" strokeDasharray="4 4" />
                        </svg>
                        {/* Peripheral Nodes */}
                        <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-indigo-100 shadow-sm group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-700" />
                        <div className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-indigo-100 shadow-sm group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-700" />
                        <div className="absolute top-[80%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border border-indigo-100 shadow-sm group-hover:translate-y-2 transition-transform duration-700" />
                        <div className="absolute top-[75%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-indigo-100 shadow-sm group-hover:translate-y-2 group-hover:-translate-x-2 transition-transform duration-700" />
                    </div>
                </div>
            );
        case "simplifai":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-orange-50/30 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_70%)]" />
                    {/* Workflow blocks */}
                    <div className="relative w-full h-full flex items-center justify-center gap-4 transform group-hover:scale-105 transition-transform duration-700">
                        <div className="w-16 h-12 bg-white rounded-lg border border-orange-200 shadow-sm flex items-center justify-center translate-y-4 group-hover:translate-y-2 transition-transform duration-700">
                            <div className="w-6 h-1.5 bg-orange-200 rounded-full" />
                        </div>
                        <div className="w-8 h-[2px] bg-orange-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-orange-400 w-full animate-[marquee_1s_linear_infinite]" />
                        </div>
                        <div className="w-16 h-12 bg-white rounded-lg border border-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)] flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-700">
                            <div className="w-6 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                        </div>
                        <div className="w-8 h-[2px] bg-orange-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-orange-400 w-full animate-[marquee_1s_linear_infinite] [animation-delay:0.5s]" />
                        </div>
                        <div className="w-16 h-12 bg-white rounded-lg border border-orange-200 shadow-sm flex items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="w-6 h-1.5 bg-orange-200 rounded-full" />
                        </div>
                    </div>
                </div>
            );
        case "simplifai-design-system":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-50/50">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
                    <div className="relative w-full h-full">
                        {/* Design System Grid */}
                        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        
                        {/* Floating Components */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 group-hover:scale-110 transition-transform duration-700">
                            <div className="w-32 h-8 bg-indigo-500 rounded border border-indigo-600 shadow-[0_4px_10px_rgba(99,102,241,0.2)] flex items-center px-3 group-hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-1.5 bg-white/60 rounded-full" />
                            </div>
                            <div className="w-32 h-12 bg-white rounded border border-zinc-200 shadow-sm flex items-center gap-2 px-3 group-hover:translate-x-2 transition-transform">
                                <div className="w-6 h-6 rounded bg-indigo-50" />
                                <div className="flex-1 flex flex-col gap-1.5">
                                    <div className="w-full h-1 bg-zinc-200 rounded-full" />
                                    <div className="w-2/3 h-1 bg-zinc-100 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "orbit":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-violet-50/30 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
                    {/* Spatial Rings */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                        <div className="absolute w-64 h-64 border-[1px] border-violet-300/40 rounded-full transform rotate-x-[70deg] group-hover:rotate-x-[60deg] group-hover:scale-110 transition-all duration-1000 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-48 h-48 border-[1.5px] border-violet-400/50 rounded-full transform rotate-x-[70deg] group-hover:rotate-x-[50deg] transition-all duration-1000 animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                        </div>
                        <div className="absolute w-32 h-32 border-[2px] border-violet-500/60 rounded-full transform rotate-x-[70deg] group-hover:rotate-x-[40deg] transition-all duration-1000 animate-[spin_10s_linear_infinite]">
                            <div className="absolute bottom-0 left-1/2 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-white border-2 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                        </div>
                    </div>
                </div>
            );
        case "medsecure":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-50/30">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]" />
                    {/* Hexagonal Blockchain */}
                    <div className="relative w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <svg width="120" height="120" viewBox="0 0 100 100" className="stroke-emerald-400/50 stroke-[1.5] fill-emerald-100/20">
                            {/* Center Hex */}
                            <path d="M50 20 L76 35 L76 65 L50 80 L24 65 L24 35 Z" className="group-hover:fill-emerald-200/40 transition-colors duration-700" />
                            {/* Inner lines */}
                            <line x1="50" y1="50" x2="50" y2="20" strokeDasharray="3 3" className="animate-[pulse_2s_linear_infinite]" />
                            <line x1="50" y1="50" x2="24" y2="65" strokeDasharray="3 3" className="animate-[pulse_2s_linear_infinite]" />
                            <line x1="50" y1="50" x2="76" y2="65" strokeDasharray="3 3" className="animate-[pulse_2s_linear_infinite]" />
                            <circle cx="50" cy="50" r="4" className="fill-emerald-500 stroke-none animate-pulse" />
                        </svg>
                        {/* Floating data blocks */}
                        <div className="absolute w-3 h-3 bg-white border border-emerald-300 shadow-sm rounded-sm top-[30%] left-[40%] animate-pulse" />
                        <div className="absolute w-2 h-2 bg-emerald-400 rounded-sm top-[60%] right-[35%] animate-pulse" />
                    </div>
                </div>
            );
        case "nexus-banking":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50/30 items-end px-12 pt-12 pb-6">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.1),transparent_70%)]" />
                    {/* Bar Chart & Trends */}
                    <div className="relative w-full h-full flex items-end justify-between gap-2 border-b-2 border-blue-100 pb-0">
                        {/* Bars */}
                        <div className="w-full bg-white border border-blue-200 border-b-0 rounded-t-sm transition-all duration-700 h-[20%] group-hover:h-[30%]" />
                        <div className="w-full bg-white border border-blue-200 border-b-0 rounded-t-sm transition-all duration-700 delay-75 h-[40%] group-hover:h-[50%]" />
                        <div className="w-full bg-blue-100/50 border border-blue-300 border-b-0 rounded-t-sm transition-all duration-700 delay-100 h-[30%] group-hover:h-[45%]" />
                        <div className="w-full bg-white border border-blue-200 border-b-0 rounded-t-sm transition-all duration-700 delay-150 h-[60%] group-hover:h-[80%]" />
                        <div className="w-full bg-blue-500 shadow-[0_-5px_15px_rgba(59,130,246,0.3)] border border-blue-600 border-b-0 rounded-t-sm transition-all duration-700 delay-200 h-[85%] group-hover:h-[100%]" />
                    </div>
                    {/* Trend Line */}
                    <svg className="absolute inset-0 w-full h-full drop-shadow-[0_4px_8px_rgba(59,130,246,0.4)] pointer-events-none" preserveAspectRatio="none">
                        <path d="M 10 90 Q 30 70 50 80 T 80 40 T 150 10" className="stroke-blue-400 stroke-2 fill-none" />
                    </svg>
                </div>
            );
        default:
            return <div className="absolute inset-0 bg-zinc-50" />;
    }
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        currentTarget.style.setProperty("--mouse-x", \`\${clientX - left}px\`);
        currentTarget.style.setProperty("--mouse-y", \`\${clientY - top}px\`);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.07, type: "spring", stiffness: 260, damping: 22 }}
            className={cn(project.highlight && "md:col-span-2")}
        >
            <Link href={\`/work/\${project.slug}\`} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BC7C] focus-visible:ring-offset-2 rounded-[2rem]">
                <article
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "relative h-full overflow-hidden rounded-[2rem] border transition-all duration-700 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[400px] flex flex-col",
                        project.highlight 
                            ? "bg-zinc-950 border-white/10 md:flex-row items-stretch group-hover:border-[#00BC7C]/40" 
                            : "bg-white/40 backdrop-blur-xl border-white/40 group-hover:bg-white/60",
                        !project.highlight && project.border
                    )}
                >
                    {/* Cursor spotlight */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-20"
                        style={{
                            background: \`radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), \${project.spotlight}, transparent 80%)\`,
                        }}
                    />

                    <div className={cn("relative z-10 flex flex-col gap-6", project.highlight ? "flex-1 p-8 md:p-12 md:pr-10" : "flex-1 p-7 md:p-8")}>
                        {/* Top row */}
                        <div className="flex justify-between items-start mb-2">
                            <span className={cn("text-sm font-bold font-mono tracking-widest", project.highlight ? "text-zinc-500" : "text-zinc-600")}>
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-sm backdrop-blur-md transform group-hover:scale-110 transition-all duration-500", project.highlight ? "bg-white/5 border border-white/10 group-hover:bg-[#00BC7C]/20 group-hover:border-[#00BC7C]/30" : "bg-white/70 border border-white/80")}>
                                <ArrowUpRight className={cn("w-4 h-4 transition-colors duration-500", project.highlight ? "text-zinc-400 group-hover:text-[#00BC7C]" : "text-zinc-700 group-hover:text-zinc-900")} aria-hidden="true" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className={cn("text-xs font-mono font-bold uppercase tracking-widest mb-3", project.highlight ? "text-[#00BC7C]" : "text-zinc-400")}>
                                {project.category}
                            </p>
                            <h2 className={cn("text-3xl md:text-4xl font-black tracking-tight mb-4 transition-colors", project.highlight ? "text-white group-hover:text-zinc-100" : "text-zinc-900 group-hover:text-zinc-950")}>
                                {project.title}
                            </h2>
                            <p className={cn("leading-relaxed font-medium mb-8", project.highlight ? "text-zinc-400 text-lg max-w-xl" : "text-zinc-500 line-clamp-3")}>
                                {project.description}
                            </p>

                            {/* Impact Info */}
                            <div className="flex flex-col gap-3 mb-8">
                                <div className="flex items-center gap-3">
                                    <span className={cn("text-xs font-bold uppercase tracking-wider w-16", project.highlight ? "text-zinc-500" : "text-zinc-400")}>Role</span>
                                    <span className={cn("text-sm font-semibold", project.highlight ? "text-zinc-200" : "text-zinc-700")}>{project.role}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={cn("text-xs font-bold uppercase tracking-wider w-16", project.highlight ? "text-zinc-500" : "text-zinc-400")}>Impact</span>
                                    <span className={cn("text-sm border px-2.5 py-1 rounded-md font-bold backdrop-blur-sm shadow-sm", project.highlight ? "border-[#00BC7C]/20 bg-[#00BC7C]/10 text-[#00BC7C]" : "border-zinc-200 bg-white/50 text-zinc-800")}>{project.metric}</span>
                                </div>
                                {project.concept && (
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider w-16">Type</span>
                                        <span className="text-xs border border-amber-300 bg-amber-50 px-2.5 py-1 rounded-full font-bold text-amber-700 tracking-wide">Concept Project · Speculative Design</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={cn("px-3 py-1.5 rounded-full border text-xs font-semibold backdrop-blur-md shadow-sm", project.highlight ? "bg-white/5 border-white/10 text-zinc-400" : "bg-white/60 border-white/80 text-zinc-700")}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    {/* Graphic Side for Highlighted Project */}
                    {project.highlight && (
                        <div className="hidden md:flex flex-1 relative overflow-hidden items-center justify-center border-l border-white/5 bg-[#0a0a0c]">
                            {/* Ambient Gradients - Aulys Colors */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,188,124,0.15),transparent_60%)]" aria-hidden="true" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,188,124,0.05),transparent_60%)]" aria-hidden="true" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00BC7C] opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity duration-700" aria-hidden="true" />
                            
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            {project.slug === 'aulys' ? (
                                <div className="relative z-10 w-full h-full flex items-center justify-center">
                                    {/* Abstract illustration of layers being scanned */}
                                    <div className="relative w-64 h-64 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700">
                                        
                                        {/* Layer 3 (Bottom) */}
                                        <div className="absolute top-[60%] w-48 h-48 border border-white/10 rounded-2xl bg-white/5 transform rotate-x-[60deg] rotate-z-[45deg] shadow-2xl transition-all duration-700 group-hover:-translate-y-2"></div>
                                        
                                        {/* Layer 2 (Middle) */}
                                        <div className="absolute top-[50%] w-48 h-48 border border-white/10 rounded-2xl bg-white/5 transform rotate-x-[60deg] rotate-z-[45deg] shadow-2xl transition-all duration-700 delay-75 group-hover:-translate-y-6"></div>
                                        
                                        {/* Layer 1 (Top - Active Scan) */}
                                        <div className="absolute top-[40%] w-48 h-48 border border-[#00BC7C]/40 rounded-2xl bg-[#00BC7C]/10 transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_0_30px_rgba(0,188,124,0.2)] transition-all duration-700 delay-150 group-hover:-translate-y-10 overflow-hidden">
                                            {/* Scanning laser line */}
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C] to-transparent w-full h-1 opacity-50 blur-[1px] animate-[scan_2s_ease-in-out_infinite]" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C]/20 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
                                        </div>

                                        {/* Aulys Logo hovering above */}
                                        <div className="absolute top-[15%] w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-[#00BC7C]/20 flex items-center justify-center transition-all duration-700 delay-200 group-hover:-translate-y-12">
                                            <svg viewBox="0 0 128 106" fill="none" className="w-8 h-8 text-[#00BC7C]" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M61.6982 10.0812C75.1001 9.44539 75.2754 12.4175 80.8997 23.4662L118 95.5453C112.67 95.6015 106.321 96.0207 101.144 94.9411C97.7722 94.2378 95.4385 88.1796 93.9116 85.1711L87.9193 73.4022L65.0721 28.8272L64.146 27.1631C63.2026 29.2586 61.5496 32.2502 60.4668 34.364L53.124 48.7154L39.1459 75.928C36.683 80.72 32.8562 89.686 30.6221 94.2303C29.591 96.3277 10 95.9782 10 95.9782L47.9697 22.3418C51.9076 14.6116 52.2777 10.9168 61.6982 10.0812Z" fill="currentColor"/>
                                                <path d="M50.9006 76.4027C60.5242 76.4027 71.5227 76.4032 81.1464 76.4029C82.3369 79.6171 84.3806 85.878 84.6639 89.358C84.9751 93.1817 83.5523 95.9782 75.6471 95.9782H53.3065C49.1821 95.9782 44.7139 95.9782 40.5895 95.9782C42.8461 90.7806 46.5323 81.6215 48.9746 76.4242L50.9006 76.4027Z" fill="currentColor"/>
                                                <path d="M62.6225 54.5018C66.6223 53.6239 70.5664 56.2033 71.4414 60.2695C72.3164 64.3357 69.7923 68.3554 65.7977 69.2575C61.7864 70.1636 57.8144 67.5829 56.9356 63.4994C56.0569 59.4162 58.6058 55.3835 62.6225 54.5018Z" fill="currentColor"/>
                                            </svg>
                                        </div>

                                        {/* Aulys Logo Text */}
                                        <div className="absolute bottom-[5%] font-black text-2xl tracking-[0.2em] text-[#00BC7C] opacity-80 drop-shadow-2xl transition-all duration-700 group-hover:opacity-100">AULYS</div>

                                    </div>
                                </div>
                            ) : null}
                        </div>
                    )}
                    {!project.highlight && (
                        <div className="relative h-56 mt-auto border-t border-white/40 bg-white/30 overflow-hidden transition-colors">
                            <ProjectIllustration slug={project.slug} />
                        </div>
                    )}
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
                    <span className="font-mono text-zinc-600 font-bold hidden sm:block tracking-widest text-sm">
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
`);