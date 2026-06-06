"use client";

import { motion, useScroll, useTransform } from "@/lib/motion";
import Link from "next/link";
import { ArrowRight, Grid, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { CASE_STUDIES } from "./next-case-study";
import { cn } from "@/lib/utils";

const SLUG_COLORS: Record<string, string> = {
    "simplifai-design-system": "bg-indigo-500/20",
    "aulys": "bg-emerald-500/20",
    "aulys-code": "bg-blue-500/20",
    "simplifai": "bg-purple-500/20",
    "medsecure": "bg-blue-500/20",
    "nexus-banking": "bg-amber-500/20",
    "infosys": "bg-violet-500/20",
    "orbit": "bg-rose-500/20",
};

function ParallaxCard({ study, scrollRef, onClick }: { study: any, scrollRef: React.RefObject<HTMLDivElement | null>, onClick: (e: React.MouseEvent) => void }) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const { scrollXProgress } = useScroll({
        target: cardRef,
        container: scrollRef,
        axis: "x",
        offset: ["start end", "end start"]
    });

    // Parallax transforms based on scrollXProgress (0 to 1)
    const bgX = useTransform(scrollXProgress, [0, 1], ["20%", "-20%"]);
    const contentX = useTransform(scrollXProgress, [0, 1], ["5%", "-5%"]);

    return (
        <Link 
            ref={cardRef}
            href={`/work/${study.slug}`} 
            onClick={onClick}
            className="group relative flex-none w-[85vw] md:w-[400px] lg:w-[450px] aspect-[4/3] rounded-3xl overflow-hidden snap-center outline-none bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 cursor-grab active:cursor-grabbing"
            draggable={false}
        >
            <motion.div 
                style={{ x: bgX }}
                className={cn("absolute inset-0 -left-[20%] -right-[20%] opacity-40 transition-opacity duration-500 group-hover:opacity-80 mix-blend-screen", SLUG_COLORS[study.slug] || "bg-zinc-500/20")} 
            />
            
            <motion.div 
                style={{ x: contentX }}
                className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10"
            >
                <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {study.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 mb-6 group-hover:text-zinc-300 transition-colors">
                    {study.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white uppercase mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </motion.div>
        </Link>
    );
}

export function NextCaseStudyHero({ currentSlug }: { currentSlug: string }) {
    const containerRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Exclude the current case study
    const otherStudies = CASE_STUDIES.filter((c) => c.slug !== currentSlug);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -450, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        }
    };

    // Drag to scroll logic
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const scrollLeftStart = useRef(0);
    const hasDragged = useRef(false);

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true);
        hasDragged.current = false;
        dragStartX.current = e.pageX;
        scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        const walk = (e.pageX - dragStartX.current) * 1.5;
        if (Math.abs(walk) > 5) {
            hasDragged.current = true;
        }
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
        }
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (hasDragged.current) {
            e.preventDefault();
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] w-full bg-zinc-950 overflow-hidden flex flex-col justify-center text-white py-24"
        >
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity, scale }}
                className="absolute inset-0 z-0 origin-bottom pointer-events-none"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
            </motion.div>

            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-zinc-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold"
                        >
                            Keep Exploring
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                            className="text-3xl md:text-5xl font-black tracking-tight"
                        >
                            More Case Studies
                        </motion.h2>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={scrollLeft} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md cursor-pointer outline-none focus:ring-2 focus:ring-white/20">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={scrollRight} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md cursor-pointer outline-none focus:ring-2 focus:ring-white/20">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative -mx-6 md:-mx-12 px-6 md:px-12"
                >
                    <div 
                        ref={scrollRef}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerLeave={handlePointerUp}
                        className={cn(
                            "flex overflow-x-auto gap-6 pt-10 pb-12 -mt-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none",
                            isDragging ? "snap-none cursor-grabbing" : "cursor-grab"
                        )}
                    >
                        {otherStudies.map((study) => (
                            <ParallaxCard 
                                key={study.slug} 
                                study={study} 
                                scrollRef={scrollRef} 
                                onClick={handleClick}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* View All Projects Overlay Trigger */}
                <div className="flex justify-center mt-4 relative z-20">
                    <Link
                        href="/work"
                        className="group flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors px-8 py-4 rounded-full border border-white/10 hover:bg-white/5"
                    >
                        <Grid className="w-4 h-4" />
                        <span>View All Projects</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
