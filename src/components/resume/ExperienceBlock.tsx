"use client";

import { motion } from "framer-motion";

interface ExperienceBlockProps {
    company: string;
    role: string;
    period: string;
    location: string;
    highlights: string[];
    index: number;
}

export function ExperienceBlock({ company, role, period, location, highlights, index }: ExperienceBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="relative pl-8 pb-10 last:pb-0"
        >
            {/* Timeline line */}
            <div className="absolute left-0 top-1.5 bottom-0 w-px bg-zinc-200 last:hidden" />
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-zinc-400" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                    <h3 className="text-base font-semibold text-zinc-900 tracking-tight">{role}</h3>
                    <p className="text-sm font-medium text-zinc-500">{company} · {location}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full h-fit mt-0.5">
                    {period}
                </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-2">
                {highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-zinc-600 leading-relaxed">
                        <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-zinc-400" />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
