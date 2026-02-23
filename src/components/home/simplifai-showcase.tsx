"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { FlowPreview } from "@/components/case-studies/simplifai/flow-preview";
import { BentoImpact } from "@/components/case-studies/simplifai/bento-impact";
import { TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function SimplifaiShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative py-32 bg-zinc-50 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <motion.div
                    style={{ y: backgroundY }}
                    className="absolute top-0 left-0 right-0 h-[1000px] bg-gradient-to-b from-purple-900/20 via-transparent to-transparent blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4 text-purple-400">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-mono tracking-wider uppercase">Featured Deep Dive</span>
                        </div>
                        <div className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 mb-6">
                            <TextReveal tag="span" className="inline-block mr-3">
                                Simplifying
                            </TextReveal>
                            <span className="text-purple-500">Automation</span>
                        </div>
                        <p className="text-xl text-zinc-600 leading-relaxed">
                            How we redesigned the workflow engine for Keywordio to help non-technical teams build complex AI automations.
                        </p>
                    </div>

                    <Link
                        href="/work/simplifai"
                        className="group flex items-center gap-2 px-6 py-3 rounded-full bg-black/5 border border-zinc-200 hover:bg-black/10 hover:border-purple-500/50 transition-all text-sm font-medium text-zinc-900"
                    >
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Sticky Visuals (Desktop) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
                        <div className="p-1 rounded-2xl bg-gradient-to-b from-purple-500/20 to-transparent">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-200 p-2">
                                <FlowPreview />
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <p className="text-sm text-zinc-500 font-mono text-center">
                                Interactive Component: Try hovering/clicking nodes
                            </p>
                        </div>
                    </div>

                    {/* Scrolling Narrative */}
                    <div className="lg:col-span-7 space-y-24">

                        {/* Intro */}
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">The Challenge</h3>
                            <p className="text-zinc-600 text-lg">
                                Enterprise automation is often locked behind complex code interfaces. Our goal was to democratize this power by creating a visual, node-based builder that anyone could use—from marketing interns to engineering leads.
                            </p>
                        </div>

                        {/* Impact Grid (Reusing Bento) */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-purple-500/5 rounded-3xl blur-xl" />
                            <BentoImpact />
                        </div>

                        {/* Tech Evolution Link */}
                        <div className="border-l-2 border-purple-500 pl-6 py-2">
                            <h4 className="text-lg font-bold text-zinc-900 mb-2">Evolution to Aulys</h4>
                            <p className="text-zinc-600 mb-4">
                                The node logic developed here directly informed the architecture of the Aulys Accessibility Scanner.
                            </p>
                            <Link href="/work/simplifai#technical-evolution" className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1">
                                Read about the technical evolution <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
