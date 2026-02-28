"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb } from "lucide-react";
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left — Philosophy statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                        className="rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.05)]"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900 mb-8 leading-none">
                            Why I Build.
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-zinc-500 leading-relaxed font-medium">
                            <p>
                                Most designers hand off mockups and hope for the best.{" "}
                                <span className="text-zinc-900 font-bold">I leverage AI and product intuition to deliver working prototypes.</span>
                            </p>
                            <p>
                                I operate at the intersection of{" "}
                                <span className="text-blue-600 font-bold">Product Strategy</span>,{" "}
                                <span className="text-blue-600 font-bold">UX Design</span>, and{" "}
                                <span className="text-blue-600 font-bold">Rapid Execution</span>.
                                I don't just design interfaces; I orchestrate how they come to life.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="pt-4 flex items-center gap-4 flex-wrap"
                            >
                                <button
                                    onClick={() => setIsContactSheetOpen(true)}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors shadow-sm"
                                >
                                    Let's Talk
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                                <a
                                    href="/Aditya_Chinchakar_V1_FoundingDesigner.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-50 border border-zinc-200/80 transition-colors shadow-sm"
                                >
                                    Download Resume
                                    <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right — Stats bento grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="rounded-[1.5rem] bg-white/40 backdrop-blur-xl border border-white/40 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 min-h-[140px]"
                            >
                                <span className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">{stat.value}</span>
                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mt-4">{stat.label}</span>
                            </motion.div>
                        ))}
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
