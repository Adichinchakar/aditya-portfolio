"use client";

import { TextReveal } from "@/components/ui/text-reveal";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SelectedWork({ title = "Selected Work", excludeHref }: { title?: string; excludeHref?: string }) {
    // Show top 4 projects by default, unless excluded
    const displayedWorks = excludeHref 
        ? PROJECTS.filter(w => w.href !== excludeHref).slice(0, 4) 
        : PROJECTS.slice(0, 4);

    return (
        <section id="work" className="py-16 md:py-24 px-6 relative overflow-hidden bg-zinc-50">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl space-y-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end border-b border-zinc-200/60 pb-8 gap-4">
                    <TextReveal tag="h2" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                        {title}
                    </TextReveal>
                    <span className="font-mono text-zinc-600 font-bold hidden sm:block tracking-widest text-sm">(0{displayedWorks.length})</span>
                </div>

                <p className="text-lg text-zinc-600 leading-relaxed font-medium max-w-2xl -mt-4">
                    Real products, real outcomes — six shipped case studies, four up front.
                </p>

                <div className="flex flex-col gap-8">
                    {displayedWorks.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>

                <div className="pt-8 flex justify-center">
                    <Link href="/work" className="group inline-flex items-center justify-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-zinc-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <span>View All Work</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
