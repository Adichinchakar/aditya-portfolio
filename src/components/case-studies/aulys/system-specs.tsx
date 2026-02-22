import React from "react";
import { motion } from "framer-motion";

const SPECS = [
    {
        category: "Frontend Application",
        technologies: ["Next.js 14", "React 18", "Tailwind CSS", "shadcn/ui"]
    },
    {
        category: "Backend & Engine",
        technologies: ["Express.js", "Playwright", "axe-core", "BullMQ"]
    },
    {
        category: "Infrastructure",
        technologies: ["PostgreSQL (Supabase)", "Redis", "Vercel", "GitHub Actions"]
    },
    {
        category: "AI & Integrations",
        technologies: ["OpenAI GPT-4", "Razorpay", "Figma Plugin API"]
    }
];

export function SystemSpecs() {
    return (
        <section className="py-24 px-6 bg-zinc-50">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold font-mono tracking-tight text-zinc-900 mb-4 uppercase">
                        System Specifications
                    </h2>
                    <p className="text-zinc-500 max-w-xl">
                        A robust, distributed architecture designed for high-concurrency scraping and real-time design validation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {SPECS.map((spec, index) => (
                        <motion.div
                            key={spec.category}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-t border-zinc-200 pt-6"
                        >
                            <h3 className="text-lg font-semibold text-zinc-900 mb-4">{spec.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {spec.technologies.map(tech => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
