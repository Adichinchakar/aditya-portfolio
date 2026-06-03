"use client";

import { MouseEvent, useRef } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "@/lib/motion";
import { Bot, Paintbrush, Sparkles, Layout, PenTool, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const skillsData = [
    {
        category: "Visual & UI Design",
        icon: Paintbrush,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
        spotlight: "rgba(139, 92, 246, 0.14)",
        skills: ["Design Systems", "Figma Auto Layout", "Micro-interactions", "Prototyping", "Motion Design"],
        border: "group-hover:border-violet-500/30",
        label: "Core Craft",
        proof: { label: "Simplifai DS → 42% faster dev cycles", href: "/work/simplifai-design-system" },
    },
    {
        category: "UX Strategy & Product",
        icon: Layout,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        spotlight: "rgba(245, 158, 11, 0.12)",
        skills: ["User Research", "Journey Mapping", "Wireframing", "A/B Testing", "Information Architecture"],
        border: "group-hover:border-amber-500/30",
        label: "Product Thinking",
        proof: { label: "MedSecure → 34% fewer medical errors", href: "/work/medsecure" },
    },
    {
        category: "Design Engineering",
        icon: PenTool,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        spotlight: "rgba(59, 130, 246, 0.12)",
        skills: ["React & Next.js", "Framer Motion", "TypeScript", "Tailwind CSS", "Figma Plugin API"],
        border: "group-hover:border-blue-500/30",
        label: "Builds What I Design",
        proof: { label: "Aulys Plugin → WCAG 2.2 AAA compliance", href: "/work/aulys" },
    },
    {
        category: "AI & Agentic Workflows",
        icon: Bot,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        spotlight: "rgba(16, 185, 129, 0.12)",
        skills: ["Prompt Engineering", "Custom AI Agents", "LLM Integration", "Automated Workflows", "AI-Augmented Design"],
        border: "group-hover:border-emerald-500/30",
        label: "Emerging Edge",
        proof: { label: "Infosys → 70% faster assessment cycles", href: "/work/infosys" },
    },
];

function SkillCard({ item, index }: { item: typeof skillsData[0]; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, type: "spring" as const, stiffness: 280, damping: 22 }}
            viewport={{ once: true, margin: "-80px" }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-xl p-8 flex flex-col gap-5 transition-all duration-500 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
                item.border
            )}
        >
            {/* Cursor-tracking spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${item.spotlight}, transparent 80%)`,
                }}
            />

            {/* Label pill */}
            <div className={cn("self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full", item.bg, item.color)}>
                {item.label}
            </div>

            {/* Icon + Category */}
            <div className="flex items-center gap-3">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center ring-1 ring-inset ring-white/50 shadow-sm backdrop-blur-sm flex-shrink-0", item.bg)}>
                    <item.icon className={cn("w-6 h-6", item.color)} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-900">{item.category}</h3>
            </div>

            {/* Skill chips */}
            <ul className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                    <li
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-white/60 border border-white/80 text-xs font-semibold text-zinc-700 backdrop-blur-md shadow-sm"
                    >
                        {skill}
                    </li>
                ))}
            </ul>

            {/* Proof link */}
            <Link
                href={item.proof.href}
                className={cn("inline-flex items-center gap-1 text-xs font-bold mt-auto pt-2 border-t border-white/60 hover:underline underline-offset-4 transition-colors", item.color)}
            >
                {item.proof.label}
                <ArrowUpRight className="w-3 h-3" />
            </Link>
        </motion.div>
    );
}

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden" ref={ref}>
            {/* Ambient background orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 mb-8 backdrop-blur-md shadow-sm"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                        What I Bring
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900"
                    >
                        Design-first. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">Execution-ready.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="text-zinc-500 mt-5 text-lg md:text-xl font-medium max-w-2xl"
                    >
                        Rare combination of deep craft, product thinking, and the ability to ship.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((item, index) => (
                        <SkillCard key={item.category} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
