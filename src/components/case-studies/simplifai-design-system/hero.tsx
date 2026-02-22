"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-50 pointer-events-none" />

            {/* Navigation */}
            <div className="absolute top-8 left-0 w-full px-6 z-50">
                <div className="container mx-auto max-w-6xl">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Work
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2 mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Design System Architecture
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 tracking-tight mb-8">
                        Simplifai <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            Design System
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed">
                        Scaling AI-native interfaces with a semantic token architecture and automated handoff pipelines.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
