"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";
import { PROJECTS, DomainFilter, DOMAIN_FILTERS } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";

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
                        className="flex flex-col gap-8"
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
