"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/home/hero"; // Reuse Hero or create a variant? Let's make a simple one here.

const PROJECTS = [
    {
        slug: "aulys",
        title: "Aulys Accessibility",
        category: "Engineering",
        description: "Automated accessibility scanning engine and dashboard.",
        tags: ["Accessibility", "Performance", "Dashboard"],
        year: "2023"
    },
    {
        slug: "simplifai",
        title: "Simplifai Flow Automation",
        category: "Product Design",
        description: "Visual workflow builder for enterprise AI automations.",
        tags: ["React Flow", "Next.js", "Design System"],
        year: "2024"
    },
    {
        slug: "simplifai-design-system",
        title: "Simplifai Design System",
        category: "Design Systems",
        description: "Enterprise-scale design system with 50+ components.",
        tags: ["Design Tokens", "React", "Storybook"],
        year: "2023"
    },
    {
        slug: "medsecure",
        title: "MedSecure",
        category: "Healthcare · Blockchain",
        description: "Blockchain medical records platform giving every Indian patient a sovereign, tamper-proof health identity.",
        tags: ["Hyperledger Fabric", "IPFS", "PWA", "ABDM"],
        year: "2024"
    },
    {
        slug: "nexus-banking",
        title: "Nexus Fintech App",
        category: "UX Strategy · Architecture",
        description: "Solving the 'Super-App' paradox with Intent-Led architecture.",
        tags: ["FinTech", "UX Research", "Systems Design"],
        year: "2024"
    }
];

export default function WorkIndex() {
    return (
        <div className="min-h-screen bg-zinc-50 pt-32 pb-20">
            <div className="container mx-auto px-6">

                <header className="mb-20 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-bold text-zinc-900 mb-6 tracking-tighter"
                    >
                        Selected Work
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-zinc-600 leading-relaxed"
                    >
                        A collection of products, tools, and experiments I've designed and built.
                    </motion.p>
                </header>

                <div className="grid gap-12 md:gap-20">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <Link href={`/work/${project.slug}`} className="group block border-t border-zinc-200 pt-12">
                                <div className="grid md:grid-cols-12 gap-8 items-start">

                                    <div className="md:col-span-2 text-zinc-500 font-mono text-sm">
                                        {project.year}
                                    </div>

                                    <div className="md:col-span-6">
                                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 group-hover:text-purple-400 transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-lg text-zinc-600 mb-6 max-w-xl">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50/5 text-xs text-zinc-600">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:col-span-4 flex justify-end">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
