"use client";

import { motion } from "@/lib/motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SystemPreview } from "./system-preview";

export function Hero() {
    return (
        <section className="relative px-6 pt-32 pb-24 overflow-hidden bg-zinc-50">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/6 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/6 rounded-full blur-[110px] pointer-events-none -z-10" />

            {/* Back link */}
            <div className="absolute top-8 left-0 w-full px-6 z-50">
                <div className="container mx-auto max-w-6xl">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-semibold tracking-wide">Back to Case Studies</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Design System · Case Study · 6 min read
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tighter mb-8 leading-[1.05]">
                            Simplifai{" "}
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                                Design System
                            </span>
                        </h1>

                        <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
                            Scaling AI-native interfaces with a semantic token architecture and a token-driven Figma → React sync pipeline — one library serving 5 product teams.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative rounded-[2rem] border border-white/50 bg-white/30 backdrop-blur-xl overflow-hidden p-2 shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                            <div className="bg-zinc-50/60 rounded-[1.5rem] p-6 border border-white/60 backdrop-blur-sm">
                                <div className="pointer-events-none origin-top h-[380px] overflow-hidden">
                                    <div className="scale-[0.8] origin-top">
                                        <SystemPreview />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
