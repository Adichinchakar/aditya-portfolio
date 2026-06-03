"use client";

import { motion } from "@/lib/motion";

interface SkillListProps {
    category: string;
    items: string[];
    index: number;
}

export function SkillList({ category, items, index }: SkillListProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
        >
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">{category}</p>
            <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                    <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors duration-150 border border-zinc-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
