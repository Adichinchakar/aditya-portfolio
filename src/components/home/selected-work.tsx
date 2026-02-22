"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextReveal } from "@/components/ui/text-reveal";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const works = [
    {
        company: "Simplifai Design System",
        description: "A comprehensive design system scaling across enterprise Automation products. Built for consistency and speed.",
        tags: ["Design Systems", "Architecture", "10x Faster UI"],
        href: "/work/simplifai-design-system",
        gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
        delay: 0
    },
    {
        company: "Aulys",
        description: "Intelligent layout and design compliance automation tool for Figma. Empowering designers with instant feedback.",
        tags: ["AI Agent", "Figma Plugin", "Typescript"],
        href: "/work/simplifai",
        gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
        delay: 0.1
    },
    {
        company: "Infosys Learning AI",
        description: "Conversational UX for large-scale learning platforms, simplifying complex educational workflows.",
        tags: ["AI/ML", "UX Strategy", "Enterprise"],
        href: "#work",
        gradient: "from-orange-500/20 via-rose-500/20 to-pink-500/20",
        delay: 0.2
    },
    {
        company: "Keywordio Dashboard",
        description: "High-density data visualization dashboards for digital marketing ad performance.",
        tags: ["Data Viz", "B2B SaaS"],
        href: "#work",
        gradient: "from-violet-500/20 via-fuchsia-500/20 to-pink-500/20",
        delay: 0.3
    }
];

export function SelectedWork() {
    return (
        <section id="work" className="py-32 px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl space-y-16 relative z-10">
                <div className="flex justify-between items-end border-b border-zinc-200 pb-8">
                    <TextReveal tag="h2" className="text-4xl md:text-5xl font-bold tracking-tighter">
                        Selected Case Studies
                    </TextReveal>
                    <span className="font-mono text-zinc-500 hidden sm:block">(0{works.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: work.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Link href={work.href} className="block group h-full">
                                <Card className="p-1 h-full overflow-hidden transition-all duration-500 border-zinc-200/50 group-hover:border-zinc-700 bg-zinc-50/40 relative">
                                    {/* Hover gradient backdrop */}
                                    <div className={cn(
                                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br",
                                        work.gradient
                                    )} />

                                    <div className="relative h-full flex flex-col p-8 rounded-xl bg-white/60 backdrop-blur-md border border-zinc-200/50 group-hover:bg-white/40 transition-colors duration-500">
                                        <div className="flex-1 space-y-4">
                                            <div className="flex justify-between items-start">
                                                <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight">
                                                    {work.company}
                                                </h3>
                                                <div className="w-10 h-10 rounded-full bg-zinc-100/80 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-xl">
                                                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-black transition-colors" />
                                                </div>
                                            </div>
                                            <p className="text-zinc-600 leading-relaxed max-w-sm line-clamp-3">
                                                {work.description}
                                            </p>
                                        </div>

                                        <div className="mt-12 flex flex-wrap gap-2">
                                            {work.tags.map((tag, tIndex) => (
                                                <span
                                                    key={tIndex}
                                                    className="px-3 py-1.5 rounded-full bg-zinc-50/80 border border-zinc-200/80 text-xs font-medium text-zinc-700 backdrop-blur-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
