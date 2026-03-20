"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const certifications = [
    {
        title: "Community Member",
        issuer: "UI Collective",
        date: "Apr 2025",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
    },
    {
        title: "AI Associate",
        issuer: "Salesforce",
        date: "Sep 2024",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        title: "Design Accessibility",
        issuer: "Uxcel",
        date: "Jun 2023",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
    {
        title: "UX Design Foundations",
        issuer: "Uxcel",
        date: "Jan 2023",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-100",
    },
];

// Split into two arrays for counter-scrolling marquee effect
const rowOne = certifications.slice(0, 2);
const rowTwo = certifications.slice(2, 4);

const awards = [
    {
        title: "Hackathon 2.0 Winner",
        issuer: "Simplifai",
        date: "2022",
        description: "Awarded 1st place for designing an innovative AI-driven workflow builder that reduced setup time by 40%.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
    },
];

export function SocialProof() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    return (
        <section
            className="container mx-auto px-6 py-24 overflow-hidden max-w-6xl"
            aria-label="Certifications and Awards"
            ref={ref}
        >
            <div className="flex flex-col items-center mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-6 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Continuous Learning
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900"
                >
                    Credentials & Recognition
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="text-zinc-500 mt-4 text-lg font-medium max-w-2xl"
                >
                    A commitment to mastering the bleeding edge of design and technology, validated by industry leaders.
                </motion.p>
            </div>

            <div className="flex flex-col gap-6">

                {/* 1. Hero Award Bento Box (Top) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.1 }}
                    className="relative group bg-gradient-to-br from-[#FFFBF2] to-[#FFF9F0] border border-amber-200/60 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-[0_8px_40px_rgb(245,158,11,0.06)]"
                >
                    {/* Background glow & decoration */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                    <div className="flex flex-col md:flex-row md:justify-between md:items-start relative z-10 gap-6">
                        <div className="flex justify-between items-start w-full md:w-auto md:order-2">
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">1st Place</span>
                            </div>
                        </div>

                        <div className="md:order-1">
                            <div className="w-fit p-4 rounded-2xl bg-white shadow-sm border border-amber-100 text-amber-500 mb-8">
                                <Trophy className="w-8 h-8" />
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-amber-600/80 mb-3">
                                <span>Simplifai</span>
                                <span className="w-1 h-1 rounded-full bg-amber-300" />
                                <span>2022</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 leading-[1.1] mb-6">
                                Hackathon 2.0 <br className="hidden md:block" /> Winner
                            </h2>
                            <p className="text-lg text-amber-900/70 font-medium leading-relaxed max-w-lg">
                                Awarded 1st place for designing an innovative AI-driven workflow builder that reduced setup time by 40%.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Certifications Marquee Area (Bottom) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.2 }}
                    className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[2.5rem] py-8 lg:py-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col justify-center relative"
                >
                    {/* Gradient Masks for smooth scroll fading */}
                    <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    <div className="flex items-center gap-4 mb-8 px-8 lg:px-10">
                        <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm shrink-0">
                            <Award className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">4 Industry Credentials</h2>
                    </div>

                    {/* Infinite Marquee Rows */}
                    <div className="flex flex-col gap-4 md:gap-5 relative z-0">
                        {/* Row 1 (Scrolling Left) */}
                        <div className="group/marquee flex overflow-hidden">
                            <div className="flex animate-[marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused] gap-4 md:gap-5 px-4 md:px-5">
                                {/* Duplicate the array directly to make it infinite loop seamlessly */}
                                {[...rowOne, ...rowOne, ...rowOne].map((cert, index) => (
                                    <CertCard key={index} cert={cert} />
                                ))}
                            </div>
                        </div>

                        {/* Row 2 (Scrolling Right) */}
                        <div className="group/marquee flex overflow-hidden">
                            <div className="flex animate-[marquee-reverse_35s_linear_infinite] group-hover/marquee:[animation-play-state:paused] gap-4 md:gap-5 px-4 md:px-5">
                                {[...rowTwo, ...rowTwo, ...rowTwo].map((cert, index) => (
                                    <CertCard key={index} cert={cert} />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}


// Reusable micro-component for the scrolling bento cards
function CertCard({ cert }: { cert: any }) {
    return (
        <div className="w-[320px] shrink-0 bg-white border border-zinc-200/80 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-300 group cursor-default relative overflow-hidden flex flex-col justify-between h-[160px]">
            {/* Hover gradient bleed */}
            <div className={cn("absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500", cert.bg)} />

            <div>
                <p className="font-bold text-zinc-900 leading-snug mb-3 group-hover:text-black transition-colors line-clamp-2 pr-4 text-[17px]">
                    {cert.title}
                </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-[11px] font-bold">
                    <span className="text-zinc-500 uppercase tracking-widest">{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <span className="text-zinc-900">{cert.date}</span>
                </div>
                <div className={cn("shrink-0 p-1.5 rounded-lg border", cert.bg, cert.color, cert.border)}>
                    <Award className="w-3.5 h-3.5" />
                </div>
            </div>

            {/* Subtle corner icon on hover to imply interaction/validation */}
            <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
    )
}
