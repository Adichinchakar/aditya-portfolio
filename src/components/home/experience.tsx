"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Zap, Layout, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        company: "Infosys",
        role: "Senior Product Designer",
        period: "2023 - Present",
        metric: "40% Increase",
        metricDesc: "in Learning Effectiveness",
        description: "Architected AI-driven rubric generators and recommendation engines. Engineered a custom design system serving 5+ product teams.",
        icon: Bot,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        id: 2,
        company: "Simplifai",
        role: "Product Designer",
        period: "2021 - 2023",
        metric: "40% Faster",
        metricDesc: "Onboarding Time",
        description: "Led design sprints for 'Flow Builder' automation tool. Reduced friction via systematic user research.",
        icon: Zap,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50",
        colSpan: "col-span-1",
    },
    {
        id: 3,
        company: "System Architecture",
        role: "Independent",
        period: "2023",
        metric: "42% Faster",
        metricDesc: "Dev Cycles",
        description: "Built a token-based design system bridging Figma variables to React props.",
        icon: Layout,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "group-hover:border-emerald-500/50",
        colSpan: "col-span-1 md:col-span-3",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 260,
            damping: 20,
        },
    },
};

export function ExperienceGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            className="container mx-auto px-6 py-24"
            aria-label="Work Experience"
            ref={ref}
        >
            <div className="flex flex-col items-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
                    className="text-3xl font-bold tracking-tight text-zinc-100"
                >
                    Engineering Experience
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1,
                    }}
                    className="text-zinc-400 mt-2 text-lg"
                >
                    Architecting scalable solutions.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
                {experiences.map((exp) => (
                    <motion.article
                        key={exp.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                            "relative group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md p-8 flex flex-col justify-between transition-colors duration-300",
                            exp.colSpan,
                            exp.border
                        )}
                    >
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div
                                    className={cn(
                                        "p-3 rounded-lg ring-1 ring-inset transition-colors duration-300",
                                        exp.bg,
                                        exp.color,
                                        "ring-white/5"
                                    )}
                                >
                                    <exp.icon className="w-6 h-6" />
                                </div>
                                <span className="text-sm text-zinc-500 font-mono tracking-wide">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="mb-auto">
                                <h3 className="text-xl font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                                    {exp.company}
                                </h3>
                                <p className="text-zinc-400 text-sm mb-6">{exp.role}</p>

                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-zinc-100 block tracking-tight">
                                        {exp.metric}
                                    </span>
                                    <span className="text-zinc-500 text-xs uppercase tracking-wider font-medium">
                                        {exp.metricDesc}
                                    </span>
                                </div>
                            </div>

                            <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                                {exp.description}
                            </p>
                        </div>

                        {/* Subtle Gradient Glow */}
                        <div
                            className={cn(
                                "absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none",
                                exp.color.replace("text-", "bg-")
                            )}
                        />

                        {/* Interactive Corner Icon */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight className="w-5 h-5 text-zinc-500" />
                        </div>

                        {/* Accessible Link Overlay (if needed later, for now just focus ring on card) */}
                        <div className="absolute inset-0 rounded-2xl ring-offset-2 ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-blue-500 pointer-events-none" />
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
