"use client";

import { Card } from "@/components/ui/card";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Aulys Accessibility Suite",
        category: "Design Engineering / React 19",
        description: "Production-ready accessibility suite built with React 19, TypeScript 5.9, and Vite 7. Automated WCAG 2.2 AAA compliance.",
        year: "2024",
    },
    {
        title: "Infosys Design System",
        category: "Design Architecture",
        description: "Architected a multi-brand design system that accelerated development cycles by 42%. Scaled to 50+ enterprise applications.",
        year: "2023",
    },
    {
        title: "AI-Native Fintech Dashboard",
        category: "Product Design",
        description: "Lead product designer for a predictive analytics dashboard. Integrated LLM-driven insights into complex data visualizations.",
        year: "2023",
    },
    {
        title: "Figma Plugin Engine",
        category: "Tooling / API",
        description: "Developed custom Figma plugins to bridge the gap between design tokens and production code, automating handoff.",
        year: "2022",
    },
];

export function Work() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="container mx-auto space-y-20">
                <div className="flex justify-between items-end">
                    <TextReveal tag="h2" className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Selected Work
                    </TextReveal>
                    <span className="hidden md:block text-muted-foreground">(0{projects.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true, margin: "-10%" }}
                        >
                            <Card className="group cursor-pointer h-full min-h-[400px] flex flex-col justify-between hover:bg-white/5">
                                <div className="p-4 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <span className="text-sm font-mono text-accent">{project.category}</span>
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 text-accent" />
                                    </div>
                                    <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                                </div>

                                {/* Fallback visual since we don't have images yet */}
                                <div className="w-full h-64 bg-white/5 rounded-lg overflow-hidden relative m-4 group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-6xl select-none">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="px-4 pb-4">
                                    <p className="text-muted-foreground">{project.description}</p>
                                </div>
                            </Card>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
