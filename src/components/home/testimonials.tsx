"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Aditya's AI tools reduced our assessment time by 70%. He doesn't just design; he solves business problems.",
        role: "Stakeholder",
        company: "Infosys",
    },
    {
        quote: "Reduced user onboarding friction by 40%. One of the few designers who understands the API as well as the UI.",
        role: "Product Manager",
        company: "Simplifai",
    },
    {
        quote: "His motion design work directly contributed to a 15% increase in customer inquiries.",
        role: "Client",
        company: "Shell",
    },
    {
        quote: "Aditya's design system accelerated our dev cycles by 42%. A true force multiplier.",
        role: "Team Member",
        company: "Independent",
    },
    {
        quote: "Aditya's AI tools reduced our assessment time by 70%. He doesn't just design; he solves business problems.",
        role: "Stakeholder",
        company: "Infosys",
    },
    {
        quote: "Reduced user onboarding friction by 40%. One of the few designers who understands the API as well as the UI.",
        role: "Product Manager",
        company: "Simplifai",
    },
    {
        quote: "His motion design work directly contributed to a 15% increase in customer inquiries.",
        role: "Client",
        company: "Shell",
    },
    {
        quote: "Aditya's design system accelerated our dev cycles by 42%. A true force multiplier.",
        role: "Team Member",
        company: "Independent",
    },
];

export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 overflow-hidden relative" ref={ref}>
            {/* Section header */}
            <div className="container mx-auto px-6 mb-14 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 mb-6 backdrop-blur-md shadow-sm"
                >
                    <Quote className="w-3.5 h-3.5 text-blue-500" />
                    Social Proof
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ type: "spring" as const, stiffness: 260, damping: 20, delay: 0.05 }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900"
                >
                    What People Say
                </motion.h2>
            </div>

            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="w-[360px] shrink-0 mx-4 p-8 rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex flex-col gap-5"
                    >
                        <Quote className="w-8 h-8 text-blue-400/50" />
                        <p className="text-zinc-700 text-base leading-relaxed font-medium flex-1">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        <div>
                            <p className="text-zinc-900 text-sm font-bold">{t.role}</p>
                            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mt-0.5">{t.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
