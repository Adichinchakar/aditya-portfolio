"use client";

import { useRef } from "react";
import { motion, useInView } from "@/lib/motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Aditya doesn't just design; he solves business problems. His AI tooling work measurably cut the time our teams spent on assessment workflows.",
        name: "Senior Delivery Manager",
        role: "Delivery Leadership",
        company: "Fortune 500 IT Services",
        initials: "DL",
        color: "bg-gradient-to-br from-amber-400 to-orange-600"
    },
    {
        quote: "Aditya is a strong design contributor, advancing our design system, ensuring consistency, and bringing ideas to life. His extensive Figma expertise has helped the team upskill.",
        name: "Chief Digital Officer",
        role: "Product & Design",
        company: "US K-12 EdTech",
        initials: "CD",
        color: "bg-gradient-to-br from-emerald-400 to-teal-600"
    },
    {
        quote: "Aditya managed the end-to-end design for our Automation Product with precision and creativity. His contributions to the Design System were instrumental in enhancing consistency.",
        name: "Rishikesh Kulkarni",
        role: "Product Manager",
        company: "Simplifai",
        initials: "RK",
        color: "bg-gradient-to-br from-blue-400 to-indigo-600"
    },
    {
        quote: "His UX skills are truly outstanding, with a deep understanding of user behaviour and a knack for crafting intuitive, seamless experiences. An invaluable asset to any team!",
        name: "Anushka Bennur",
        role: "Product Designer",
        company: "Simplifai",
        initials: "AB",
        color: "bg-gradient-to-br from-rose-400 to-pink-600"
    },
    {
        quote: "His motion design work directly contributed to a measurable lift in customer inquiries and engagement.",
        name: "Campaign Lead",
        role: "Motion & Brand",
        company: "Global Energy Major",
        initials: "CL",
        color: "bg-gradient-to-br from-zinc-600 to-zinc-800"
    },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 overflow-hidden relative" ref={ref} aria-label="Client testimonials" role="region">
            {/* Section header */}
            <div className="container mx-auto px-6 mb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-100 text-sm font-semibold text-blue-700 mb-6 backdrop-blur-md shadow-sm"
                >
                    <Quote className="w-3.5 h-3.5" aria-hidden="true" />
                    Social Proof
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring" as const, stiffness: 260, damping: 20, delay: 0.05 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900"
                >
                    What They Say About The Work
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring" as const, stiffness: 260, damping: 20, delay: 0.1 }}
                    className="text-zinc-500 mt-3 text-base font-medium"
                >
                    From CDO, PM, and delivery leads who shipped with me
                </motion.p>
            </div>

            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden w-full">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
                    {duplicatedTestimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-[320px] md:w-[420px] shrink-0 mx-3 md:mx-4 p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 relative overflow-hidden group"
                        >
                            {/* Subtle gradient hover effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Header: User Info */}
                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm ${t.color}`}>
                                    {t.initials}
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <p className="text-zinc-900 font-bold text-base leading-tight truncate">{t.name}</p>
                                    <p className="text-zinc-500 text-[13px] font-medium truncate mt-0.5">
                                        {t.role} <span className="text-zinc-300 mx-1">•</span> {t.company}
                                    </p>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative flex-1">
                                <Quote className="absolute -top-1 -left-1 w-8 h-8 text-zinc-900/5 rotate-180" />
                                <p className="text-zinc-700 text-[15px] leading-[1.6] font-medium relative z-10 pl-4 border-l-2 border-zinc-200 group-hover:border-blue-200 transition-colors duration-300">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
