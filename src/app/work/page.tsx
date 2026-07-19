"use client";

import { motion } from "@/lib/motion";
import { TextReveal } from "@/components/ui/text-reveal";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";

export default function WorkIndex() {
    const shipped = PROJECTS.filter((p) => !p.conceptual);
    const explorations = PROJECTS.filter((p) => p.conceptual);

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
                        (0{shipped.length})
                    </span>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-lg text-zinc-600 leading-relaxed font-medium mb-12 max-w-2xl"
                >
                    Real products with real outcomes — shipped across AI tooling, enterprise SaaS, and design systems.
                </motion.p>

                <div className="flex flex-col gap-8">
                    {shipped.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>

                {/* Explorations — self-initiated concept work */}
                <div className="mt-24">
                    <div className="border-b border-zinc-200/60 pb-6 mb-4">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900">
                            Explorations
                        </h2>
                    </div>
                    <p className="text-base text-zinc-600 leading-relaxed font-medium mb-10 max-w-2xl">
                        Self-initiated concept work — strategy and interaction studies, not shipped products.
                    </p>
                    <div className="flex flex-col gap-8">
                        {explorations.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
