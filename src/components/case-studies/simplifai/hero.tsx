import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock, Users } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50 min-h-[90vh] flex flex-col justify-center">
            {/* Ambient Background - Subtle & Premium */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -z-10 opacity-40" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link href="/work" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-12 transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium tracking-tight">Back to Work</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Eyebrow / Kicker */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Case Study 2024
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
                            40% Faster <br />
                            Time-to-Value:<br />
                            <span className="text-zinc-500">
                                Re-engineering the AI Workflow.
                            </span>
                        </h1>

                        <p className="text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
                            Redesigning the core automation engine to enable non-technical teams to build complex AI agents without writing code.
                        </p>

                        {/* CTAs / Links (Optional, keeping it clean) */}
                    </motion.div>

                    {/* Right Side: Metrics Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Abstract Interface Mockup Container */}
                        <div className="relative rounded-3xl border border-zinc-200 bg-white/50 backdrop-blur-xl overflow-hidden p-1 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                            <div className="bg-zinc-50/80 rounded-[20px] p-8 border border-zinc-100">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-zinc-900 font-semibold tracking-tight text-lg">Impact Overview</h3>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid gap-4">
                                    {/* Metric 1 */}
                                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 hover:border-purple-500/30 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded-lg bg-zinc-100/50 text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Efficiency</span>
                                        </div>
                                        <div className="text-4xl font-bold text-zinc-900 mb-1 tracking-tight">40%</div>
                                        <div className="text-sm text-zinc-600 font-medium">Reduction in onboarding time</div>
                                    </div>

                                    {/* Metric 2 */}
                                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-zinc-200 p-6 hover:border-blue-500/30 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="p-2 rounded-lg bg-zinc-100/50 text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Adoption</span>
                                        </div>
                                        <div className="text-4xl font-bold text-zinc-900 mb-1 tracking-tight">73%</div>
                                        <div className="text-sm text-zinc-600 font-medium">Increase in user adoption</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements behind the dashboard */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-[50px] pointer-events-none -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
