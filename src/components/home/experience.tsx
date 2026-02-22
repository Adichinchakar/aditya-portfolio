"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue } from "framer-motion";
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
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        spotlight: "rgba(59, 130, 246, 0.12)", // blue-500 glow
        border: "group-hover:border-blue-500/30",
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
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        spotlight: "rgba(168, 85, 247, 0.12)", // purple-500 glow
        border: "group-hover:border-purple-500/30",
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
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        spotlight: "rgba(16, 185, 129, 0.12)", // emerald-500 glow
        border: "group-hover:border-emerald-500/30",
        colSpan: "col-span-1 md:col-span-3",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
};

function MagneticIcon({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.1 }}
            className="p-4 -m-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.article
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/40 backdrop-blur-xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]",
                exp.colSpan,
                exp.border
            )}
        >
            {/* Interactive Spotlight Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${exp.spotlight},
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                    <div
                        className={cn(
                            "p-3.5 rounded-2xl ring-1 ring-inset shadow-sm transition-colors duration-300",
                            exp.bg,
                            exp.color,
                            "ring-white/50 backdrop-blur-sm"
                        )}
                    >
                        <exp.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-zinc-500 font-mono tracking-widest uppercase bg-white/60 px-4 py-1.5 rounded-full border border-white/60 shadow-sm backdrop-blur-md">
                        {exp.period}
                    </span>
                </div>

                <div className="mb-auto">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-950 transition-colors">
                        {exp.company}
                    </h3>
                    <p className="text-zinc-500 text-sm font-semibold mb-8 uppercase tracking-widest">{exp.role}</p>

                    <div className="mb-2">
                        <span className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tighter block">
                            {exp.metric}
                        </span>
                    </div>
                    <div className="mb-8">
                        <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                            {exp.metricDesc}
                        </span>
                    </div>
                </div>

                <p className="text-zinc-600 leading-relaxed max-w-lg font-medium text-base">
                    {exp.description}
                </p>
            </div>

            {/* Interactive Corner Icon */}
            <div className="absolute top-8 right-8 z-20 hidden md:block">
                <MagneticIcon>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 bg-white/90 shadow-sm ring-1 ring-zinc-900/5 p-3 rounded-full backdrop-blur-md">
                        <ArrowUpRight className={cn("w-5 h-5 transition-colors", exp.color)} />
                    </div>
                </MagneticIcon>
            </div>

            {/* Subtle Static Background Glow */}
            <div
                className={cn(
                    "absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none",
                    exp.color.replace("text-", "bg-")
                )}
            />

            {/* Accessible Link Focus Ring */}
            <div className="absolute inset-0 rounded-[2rem] ring-offset-2 ring-offset-zinc-50 focus-visible:ring-2 focus-visible:ring-blue-500 pointer-events-none" />
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
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 mb-8 backdrop-blur-md shadow-sm"
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
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
                {experiences.map((exp) => (
                    <ExperienceCard key={exp.id} exp={exp} />
                ))}
            </motion.div>
        </section>
    );
}
