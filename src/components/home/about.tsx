"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Zap, BookOpen, FlaskConical } from "lucide-react";
import Link from "next/link";
import { ContactSheet } from "@/components/ui/contact-sheet";

const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "10+", label: "Products Shipped" },
    { value: "5+", label: "Companies" },
    { value: "1", label: "Live Plugin" },
];

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, type: "spring" as const, stiffness: 280, damping: 24 },
    }),
};

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden" ref={ref}>
            {/* Ambient orbs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Pill badge */}
                <div className="flex justify-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 backdrop-blur-md shadow-sm"
                    >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        Philosophy
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
                    {/* Left — Philosophy statement */}
                    <div className="lg:col-span-7 flex">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                            className="w-full flex-1 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.05)] flex flex-col justify-center"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                                Why I Build.
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
                                <p>
                                    Most designers hand off mockups and hope for the best.{" "}
                                    <span className="text-zinc-900 font-bold bg-blue-500/10 px-2 py-0.5 rounded-md inline-block mt-1">
                                        I leverage AI and product intuition to deliver working prototypes.
                                    </span>
                                </p>
                                <p>
                                    I operate at the intersection of{" "}
                                    <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">Product Strategy</span>,{" "}
                                    <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">UX Design</span>, and{" "}
                                    <span className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">Rapid Execution</span>.
                                    I don't just design interfaces; I orchestrate how they come to life.
                                </p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap"
                                >
                                    <button
                                        onClick={() => setIsContactSheetOpen(true)}
                                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                                    >
                                        Let's Talk
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                    <Link
                                        href="/resume"
                                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-50 border border-zinc-200/80 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
                                    >
                                        View Resume
                                        <svg className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Stats + Currently */}
                    <div className="lg:col-span-5 relative w-full flex flex-col gap-4">
                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    custom={i}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    className={`rounded-[1.5rem] bg-white/60 backdrop-blur-xl border border-white/60 p-6 sm:p-8 flex flex-col justify-center shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 min-h-[120px] ${i === 1 || i === 2 ? "bg-white/40" : ""}`}
                                >
                                    <span className="text-4xl sm:text-5xl font-black tracking-tighter text-zinc-900">{stat.value}</span>
                                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mt-2 leading-relaxed">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Currently card */}
                        <motion.div
                            custom={4}
                            variants={cardVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="rounded-[1.5rem] bg-zinc-900 border border-zinc-800 p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.12)]"
                        >
                            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Currently</span>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <Zap className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Building</p>
                                        <Link href="/work/aulys" className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors">
                                            Aulys — WCAG 2.2 Figma plugin ↗
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Reading</p>
                                        <p className="text-sm font-semibold text-white">The Design of Everyday Things</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <FlaskConical className="w-3.5 h-3.5 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-0.5">Exploring</p>
                                        <p className="text-sm font-semibold text-white">AI-native UX patterns & agent interfaces</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <ContactSheet
                isOpen={isContactSheetOpen}
                onClose={() => setIsContactSheetOpen(false)}
            />
        </section>
    );
}
