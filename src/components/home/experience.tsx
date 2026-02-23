"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
import { Bot, Zap, Layout } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        id: 1,
        company: "Infosys",
        role: "Senior Product Designer",
        period: "2023 - Present",
        metric: "Enterprise AI Rubrics",
        metricDesc: "Led design architecture for GenAI educational tools.",
        description: "Architected AI-driven rubric generators and recommendation engines. Engineered a custom design system serving 5+ product teams.",
        icon: Bot,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
    },
    {
        id: 2,
        company: "Simplifai",
        role: "Product Designer",
        period: "2021 - 2023",
        metric: "B2B Automation",
        metricDesc: "Led UX for 'Flow Builder' reducing user onboarding time.",
        description: "Led design sprints for 'Flow Builder' automation tool. Reduced friction via systematic user research.",
        icon: Zap,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
    },
    {
        id: 3,
        company: "Keywordio",
        role: "UI/UX Designer",
        period: "2020 - 2022",
        metric: "CRM Dashboard UI",
        metricDesc: "Revamped core internal tools to drive user adoption.",
        description: "Designed modern internal and CRM dashboards, implementing a cohesive design system that improved employee efficiency.",
        icon: Layout,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
    },
    {
        id: 4,
        company: "Green Earth",
        role: "Motion Graphic Designer",
        period: "2019 - 2020",
        metric: "Safety Campaigns",
        metricDesc: "Authored visual motion graphics for incident prevention.",
        description: "Developed compelling safety awareness animations for Shell Petroleum, effectively conveying best practices.",
        icon: Layout,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
    },
    {
        id: 5,
        company: "Windows Film",
        role: "Motion Graphic Designer",
        period: "2017 - 2018",
        metric: "Video Production",
        metricDesc: "Directed high-fidelity promotional motion materials.",
        description: "Created captivating motion graphics for advertising campaigns and award-winning documentaries.",
        icon: Layout,
        color: "text-pink-600",
        bg: "bg-pink-50",
        border: "border-pink-100",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 28 },
    },
};

function ExperienceListCard({ exp }: { exp: typeof experiences[0] }) {
    return (
        <motion.article
            variants={itemVariants}
            className="group relative bg-white border border-zinc-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 overflow-hidden"
        >
            {/* Subtle background gradient on hover */}
            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent to-current", exp.color)} />

            {/* Left Column: Role & Company */}
            <div className="md:w-1/3 shrink-0 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                    <div className={cn("p-3 rounded-2xl border", exp.bg, exp.color, exp.border)}>
                        <exp.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-zinc-500 font-mono tracking-widest uppercase bg-zinc-100 px-3 py-1 rounded-full">
                        {exp.period}
                    </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 mb-1 group-hover:text-black transition-colors">
                    {exp.company}
                </h3>
                <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest">
                    {exp.role}
                </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-zinc-100 self-stretch shrink-0" />
            <div className="block md:hidden h-px bg-zinc-100 w-full shrink-0 my-2" />

            {/* Right Column: Impact & Description */}
            <div className="md:w-2/3 flex flex-col justify-center relative z-10">
                <div className="flex flex-col gap-1 mb-5">
                    <span className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                        {exp.metric}
                    </span>
                    <span className="text-zinc-500 text-sm font-medium">
                        {exp.metricDesc}
                    </span>
                </div>

                <p className="text-zinc-600 text-base leading-relaxed text-pretty">
                    {exp.description}
                </p>
            </div>

            {/* Accessible Link Focus Ring */}
            <div className="absolute inset-0 rounded-3xl ring-offset-2 ring-offset-zinc-50 focus-visible:ring-2 focus-visible:ring-blue-500 pointer-events-none" />
        </motion.article>
    );
}

export function ExperienceGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            className="container mx-auto px-6 py-32"
            aria-label="Work Experience"
            ref={ref}
        >
            <div className="flex flex-col items-center mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-8 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Career Journey
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900"
                >
                    Product & Design Experience
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                    className="text-zinc-500 mt-6 text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
                >
                    Driving product strategy and bridging the gap between user needs and rapid execution.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col gap-8 max-w-5xl mx-auto"
            >
                {experiences.map((exp) => (
                    <ExperienceListCard key={exp.id} exp={exp} />
                ))}
            </motion.div>
        </section>
    );
}
