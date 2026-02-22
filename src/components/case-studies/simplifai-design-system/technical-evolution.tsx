"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, AlertTriangle, ShieldCheck, Link as LinkIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function TechnicalEvolution() {
    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-900/20 to-zinc-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-24 relative z-10">

                {/* Visual Bridge: Split View */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: The Ideal (Design System) */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Design System Spec
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900">The "Ideal" State</h3>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                We built a robust system. Tokens were defined, guidelines were clear, and the Figma library was pristine.
                                <br /><br />
                                Yet, as we scaled, I noticed a recurring pattern:
                                <span className="text-zinc-800 font-medium"> implementation drift.</span>
                            </p>
                        </div>

                        {/* Visual Mock: Perfect Button */}
                        <div className="p-8 bg-white/50 rounded-2xl border border-zinc-200/50 relative group">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex gap-2 text-[10px] bg-zinc-50 border border-zinc-200 rounded px-2 py-1 text-zinc-500">
                                    <span>bg-blue-600</span>
                                    <span>text-zinc-900</span>
                                    <span>h-11</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center h-40 gap-4">
                                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors">
                                    Confirm Action
                                </button>
                                <div className="flex items-center gap-2 text-emerald-500 text-sm">
                                    <Check className="w-4 h-4" />
                                    <span>WCAG AAA Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Reality (Aulys) */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium border border-orange-500/20">
                                <AlertTriangle className="w-3 h-3" />
                                Production Reality
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900">The Implementation Gap</h3>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                Small deviations—a hex code here, a hardcoded margin there—were breaking accessibility silently.
                                <br /><br />
                                This realization sparked a question:
                                <span className="text-orange-200 font-medium"> What if the system could police itself?</span>
                            </p>
                        </div>

                        {/* Visual Mock: Broken Button with Aulys Scanner Overlay */}
                        <div className="p-8 bg-white/50 rounded-2xl border border-orange-500/20 relative overflow-hidden group">
                            {/* Scanner Line Animation */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent z-20 shadow-[0_0_20px_rgba(249,115,22,0.5)]"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                            />

                            <div className="flex flex-col items-center justify-center h-40 gap-4 relative">
                                {/* The "Broken" Button */}
                                <button className="px-6 py-2.5 bg-[#2563EB] text-zinc-900/80 rounded-lg font-medium shadow-none cursor-not-allowed opacity-90 relative">
                                    Confirm Action
                                    {/* Error Badge */}
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-zinc-900 border-2 border-zinc-200 z-10"
                                    >
                                        <span className="text-xs font-bold">!</span>
                                    </motion.div>
                                </button>

                                {/* Aulys Tooltip */}
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="bg-zinc-50 border border-red-500/50 text-red-200 text-xs p-3 rounded-lg shadow-2xl max-w-[200px]"
                                >
                                    <div className="flex items-center gap-2 mb-1 font-semibold text-red-400">
                                        <ShieldCheck className="w-3 h-3" />
                                        Contrast Violation
                                    </div>
                                    <p className="opacity-80">Ratio is 3.1:1. Expected 4.5:1 (AA).</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="max-w-4xl mx-auto text-center space-y-12 pt-12">
                    <blockquote className="text-3xl md:text-5xl font-bold leading-tight text-zinc-900">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">
                            "A design system is only as strong as its enforcement.
                        </span>
                        <br />
                        <span className="text-purple-400">
                            Aulys is the automated layer of that enforcement.
                        </span>
                        "
                    </blockquote>

                    <div>
                        <Link href="/work/aulys"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-all hover:gap-4 group"
                        >
                            See How I Built Aulys
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <p className="mt-4 text-zinc-500 text-sm">
                            Continue the journey
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
