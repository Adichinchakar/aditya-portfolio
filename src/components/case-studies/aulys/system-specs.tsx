import React from "react";
import { motion } from "@/lib/motion";

const SPECS = [
    {
        category: "Frontend Application",
        rationale: "Next.js 14 for SSR performance; React 18 concurrent features for real-time scan updates.",
        technologies: ["Next.js 14", "React 18", "Tailwind CSS"]
    },
    {
        category: "Backend & Scan Engine",
        rationale: "Playwright over Puppeteer for cross-browser coverage; BullMQ for multi-tenant job prioritization.",
        technologies: ["Express.js", "Playwright", "axe-core", "BullMQ"]
    },
    {
        category: "Infrastructure",
        rationale: "Supabase for instant Postgres + RLS; Redis for scan result caching; Vercel for zero-config deploys.",
        technologies: ["PostgreSQL (Supabase)", "Redis", "Vercel", "GitHub Actions"]
    },
    {
        category: "AI & Integrations",
        rationale: "GPT-4 for remediation suggestions; Figma Plugin API for canvas-level layer traversal.",
        technologies: ["OpenAI GPT-4", "Figma Plugin API", "Razorpay (India launch)"]
    }
];

export function SystemSpecs() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-amber-700 uppercase tracking-[0.2em] mb-4">
                        04 — Phase 2 Architecture
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                        Planned — Phase 2 platform in development, not yet shipped
                    </div>
                    <h2 className="text-2xl font-bold font-mono tracking-tight text-zinc-900 mb-4 uppercase">
                        Platform Architecture
                    </h2>
                    <p className="text-zinc-600 max-w-xl">
                        The shipped product is the Figma plugin (Phase 1). This is the architecture I&apos;ve designed for the Phase 2 CI/CD platform — currently in development. Each choice was made deliberately, not yet battle-tested in production.
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
                            <h3 className="text-lg font-semibold text-zinc-900 mb-1">{spec.category}</h3>
                            <p className="text-xs text-zinc-600 mb-4 leading-relaxed">{spec.rationale}</p>
                            <div className="flex flex-wrap gap-2">
                                {spec.technologies.map(tech => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        className="px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 shadow-sm hover:shadow-md hover:border-zinc-300 hover:text-zinc-900 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
