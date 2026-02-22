"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Paintbrush, Sparkles, Layout, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";

const skillsData = [
    {
        category: "AI & Agentic Workflows",
        icon: <Bot className="w-6 h-6 text-emerald-400" />,
        skills: ["Prompt Engineering", "Custom AI Agents", "LLM Integration", "Automated Workflows"],
        gradient: "from-emerald-500/10 to-teal-500/5",
        border: "group-hover:border-emerald-500/30"
    },
    {
        category: "Design Engineering",
        icon: <Code2 className="w-6 h-6 text-blue-400" />,
        skills: ["React & Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
        gradient: "from-blue-500/10 to-indigo-500/5",
        border: "group-hover:border-blue-500/30"
    },
    {
        category: "Visual & UI Design",
        icon: <Paintbrush className="w-6 h-6 text-purple-400" />,
        skills: ["Design Systems", "Figma Auto Layout", "Micro-interactions", "Prototyping"],
        gradient: "from-purple-500/10 to-fuchsia-500/5",
        border: "group-hover:border-purple-500/30"
    },
    {
        category: "UX Strategy & Product",
        icon: <Layout className="w-6 h-6 text-amber-400" />,
        skills: ["User Research", "Wireframing", "Journey Mapping", "A/B Testing"],
        gradient: "from-amber-500/10 to-orange-500/5",
        border: "group-hover:border-amber-500/30"
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-zinc-50/50" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl space-y-16 relative z-10">
                <div className="flex justify-between items-end border-b border-zinc-200 pb-8">
                    <TextReveal tag="h2" className="text-4xl md:text-5xl font-bold tracking-tighter">
                        Capabilities & Skills
                    </TextReveal>
                    <div className="flex items-center gap-2 text-zinc-500 hidden sm:flex">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-mono text-sm uppercase tracking-widest">Expertise</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className={cn(
                                "h-full p-8 rounded-2xl bg-white/40 backdrop-blur-sm border border-zinc-200/50 transition-colors duration-500",
                                category.border
                            )}>
                                {/* Hover Gradient */}
                                <div className={cn(
                                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br -z-10",
                                    category.gradient
                                )} />

                                <div className="space-y-6">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-100/50 flex items-center justify-center">
                                        {category.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold text-zinc-900">
                                        {category.category}
                                    </h3>

                                    <ul className="space-y-3">
                                        {category.skills.map((skill, sIndex) => (
                                            <li key={sIndex} className="flex items-center gap-3 text-zinc-600 group-hover:text-zinc-700 transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-zinc-500 transition-colors" />
                                                <span className="text-sm">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
