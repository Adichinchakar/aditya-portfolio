"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Grid } from "lucide-react";
import { useRef } from "react";
import { CASE_STUDIES } from "./next-case-study";

export function NextCaseStudyHero({ currentSlug }: { currentSlug: string }) {
    const containerRef = useRef<HTMLElement>(null);

    const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === currentSlug);
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % CASE_STUDIES.length;
    const nextStudy = currentIndex === -1 ? null : CASE_STUDIES[nextIndex];

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    if (!nextStudy) return null;

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[600px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center text-white"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 z-0 origin-bottom"
            >
                {/* Background gradient/pattern specifically for the next study.
                    In a real app, this would be `nextStudy.heroImage`.
                    We use strong gradients here to create the premium, cinematic feel. */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

                {/* A subtle colored ambient glow based on the slug to differentiate them */}
                {nextStudy.slug === "simplifai-design-system" && <div className="absolute inset-0 bg-indigo-500/10 mix-blend-screen" />}
                {nextStudy.slug === "aulys" && <div className="absolute inset-0 bg-emerald-500/10 mix-blend-screen" />}
                {nextStudy.slug === "simplifai" && <div className="absolute inset-0 bg-purple-500/10 mix-blend-screen" />}
            </motion.div>

            {/* Content Overlay */}
            <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-zinc-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-8 block font-bold"
                >
                    Up Next
                </motion.span>

                <Link href={`/work/${nextStudy.slug}`} className="group inline-flex flex-col items-center outline-none">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 transition-colors group-hover:text-white/90"
                    >
                        {nextStudy.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold group-hover:bg-white group-hover:text-zinc-950 transition-all duration-500"
                    >
                        Continue Reading
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                </Link>
            </div>

            {/* View All Projects Overlay Trigger */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
                <Link
                    href="/#work" // For now, links back to the homepage grid. Can be upgraded to a full-screen menu later.
                    className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors"
                >
                    <Grid className="w-4 h-4" />
                    <span>View All Projects</span>
                </Link>
            </div>
        </section>
    );
}
