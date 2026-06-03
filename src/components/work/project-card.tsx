"use client";

import { MouseEvent } from "react";
import { motion } from "@/lib/motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/data/projects";
import { ProjectIllustration } from "./project-illustration";

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
        currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.07, type: "spring", stiffness: 260, damping: 22 }}
        >
            <Link href={`/work/${project.slug}`} className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00BC7C] focus-visible:ring-offset-2 rounded-[2rem]">
                <article
                    onMouseMove={handleMouseMove}
                    className={cn(
                        "relative h-full overflow-hidden rounded-[2rem] border transition-all duration-700 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] min-h-[400px] flex flex-col md:flex-row items-stretch",
                        project.highlight 
                            ? "bg-zinc-950 border-white/10 group-hover:border-[#00BC7C]/40" 
                            : "bg-white/40 backdrop-blur-xl border-white/40 group-hover:bg-white/60",
                        !project.highlight && project.border
                    )}
                >
                    {/* Cursor spotlight */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100 z-20"
                        style={{
                            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.spotlight}, transparent 80%)`,
                        }}
                    />

                    <div className="relative z-10 flex-1 flex flex-col gap-6 p-7 md:p-12 md:pr-10">
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
                                {project.domain}
                            </p>
                            <h2 className={cn("text-3xl md:text-4xl font-black tracking-tight mb-4 transition-colors", project.highlight ? "text-white group-hover:text-zinc-100" : "text-zinc-900 group-hover:text-zinc-950")}>
                                {project.company}
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
                    
                    {/* Graphic Side */}
                    <div className={cn("relative overflow-hidden transition-colors flex-shrink-0", project.highlight ? "hidden md:flex flex-1 border-l border-white/5" : "h-64 md:h-auto md:w-5/12 lg:w-1/2 border-t md:border-t-0 md:border-l border-white/40 bg-white/30")}>
                        <ProjectIllustration slug={project.slug} />
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}

export { ProjectCard };
