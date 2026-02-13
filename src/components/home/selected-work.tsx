"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";

const works = [
    {
        company: "Infosys (EdTech AI)",
        description: "Conversational UX for large-scale learning platforms.",
        tags: ["AI/ML", "Design Systems", "40% Impact"],
        highlight: false
    },
    {
        company: "Simplifai (Automation)",
        description: "No-code flow builder for enterprise automation.",
        tags: ["SaaS", "B2B", "Complex Workflows"],
        highlight: false
    },
    {
        company: "Keywordio (AdTech)",
        description: "High-density data dashboards for digital marketing.",
        tags: ["Data Viz", "Dashboards", "25% Efficiency"],
        highlight: false
    },
    {
        company: "Shell Petroleum (Motion)",
        description: "Safety and brand awareness campaigns.",
        tags: ["Motion Design", "Storytelling"],
        highlight: false
    }
];

export function SelectedWork() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="container mx-auto max-w-5xl space-y-16">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-8">
                    <TextReveal tag="h2" className="text-4xl md:text-5xl font-bold tracking-tighter">
                        Selected Work
                    </TextReveal>
                    <span className="font-mono text-zinc-500">(0{works.length})</span>
                </div>

                <div className="flex flex-col">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative border-b border-zinc-800/50 py-12 transition-colors hover:bg-zinc-900/30 -mx-6 px-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="space-y-2 md:w-1/3">
                                    <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                        {work.company}
                                    </h3>
                                </div>

                                <div className="md:w-1/3">
                                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                        {work.description}
                                    </p>
                                </div>

                                <div className="md:w-1/3 flex flex-wrap items-center justify-end gap-3">
                                    {work.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="px-2.5 py-1 rounded bg-zinc-800/50 border border-zinc-700/50 text-xs font-mono text-zinc-400 whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    <div className="w-8 h-8 flex items-center justify-center ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-zinc-100" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
