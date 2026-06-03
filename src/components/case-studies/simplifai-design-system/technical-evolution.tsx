"use client";

import { motion } from "@/lib/motion";
import { ArrowRight, Check, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function TechnicalEvolution() {
    return (
        <section className="py-24 px-6 bg-white border-t border-zinc-100 relative overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-20 relative z-10">

                {/* Header */}
                <div className="max-w-3xl space-y-5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        The Challenge
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900">
                        The gap between<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                            spec and production.
                        </span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-xl font-medium">
                        A design system is only as strong as its enforcement. Even the best-documented system drifts when developers are under pressure.
                    </p>
                </div>

                {/* Split comparison */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left: The Ideal */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 uppercase tracking-widest">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                </span>
                                Design System Spec
                            </div>
                            <h3 className="text-2xl font-black text-zinc-900">The &ldquo;Ideal&rdquo; State</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                We built a robust system. Tokens were defined, guidelines were clear, and the Figma library was pristine.
                                <br /><br />
                                Yet, as we scaled, I noticed a recurring pattern: <span className="text-zinc-800 font-semibold">implementation drift.</span>
                            </p>
                        </div>

                        <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 relative group">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex gap-2 text-[10px] bg-white border border-zinc-200 shadow-sm rounded px-2 py-1 text-zinc-500 font-mono">
                                    <span>bg-blue-600</span>
                                    <span>text-white</span>
                                    <span>h-11</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center h-40 gap-4">
                                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold shadow-sm hover:bg-blue-700 transition-colors">
                                    Confirm Action
                                </button>
                                <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
                                    <Check className="w-4 h-4" />
                                    <span>WCAG AAA Compliant</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Reality */}
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200 uppercase tracking-widest">
                                <AlertTriangle className="w-3 h-3" />
                                Production Reality
                            </div>
                            <h3 className="text-2xl font-black text-zinc-900">The gap between design intent and product reality.</h3>
                            <p className="text-zinc-500 leading-relaxed">
                                Small deviations—a hex code here, a hardcoded margin there—were breaking accessibility silently.
                                <br /><br />
                                This realization sparked a question: <span className="text-orange-700 font-semibold">What if the product could govern its own quality?</span>
                            </p>
                        </div>

                        <div className="p-8 bg-zinc-50 rounded-2xl border border-orange-200 relative overflow-hidden group">
                            {/* Scanner line */}
                            <motion.div
                                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent z-20"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                            />

                            <div className="flex flex-col items-center justify-center h-40 gap-4 relative">
                                {/* "Broken" button */}
                                <button className="px-6 py-2.5 bg-blue-700 text-white rounded-lg font-medium cursor-not-allowed relative">
                                    Confirm Action
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 1 }}
                                        className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white border-2 border-white z-10"
                                    >
                                        <span className="text-xs font-bold">!</span>
                                    </motion.div>
                                </button>

                                {/* Error tooltip */}
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="bg-white border border-red-200 shadow-md text-red-700 text-xs p-3 rounded-xl max-w-[200px]"
                                >
                                    <div className="flex items-center gap-2 mb-1 font-bold text-red-600">
                                        <ShieldCheck className="w-3 h-3" />
                                        Contrast Violation
                                    </div>
                                    <p className="text-red-700">Ratio is 3.1:1. Expected 4.5:1 (AA).</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Closing statement bridging to Aulys */}
                <div className="bg-zinc-900 rounded-3xl p-12 text-center space-y-8">
                    <blockquote className="text-2xl md:text-4xl font-black leading-tight text-white">
                        &ldquo;A design system is only as strong as its enforcement.{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                            Aulys is the automated layer of that enforcement.
                        </span>
                        &rdquo;
                    </blockquote>

                    <Link
                        href="/work/aulys"
                        className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-zinc-900 rounded-full font-bold text-sm hover:bg-zinc-100 transition-all hover:gap-4 group"
                    >
                        See How I Built Aulys
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <p className="text-zinc-400 text-sm">Continue the journey</p>
                </div>

            </div>
        </section>
    );
}
