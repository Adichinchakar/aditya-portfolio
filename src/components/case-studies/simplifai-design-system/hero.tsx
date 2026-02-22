"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center px-6 pt-32 pb-24 overflow-hidden bg-zinc-50">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/6 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/6 rounded-full blur-[110px] pointer-events-none -z-10" />

            {/* Back link */}
            <div className="absolute top-8 left-0 w-full px-6 z-50">
                <div className="container mx-auto max-w-6xl">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-semibold tracking-wide">Back to Portfolio</span>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
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
                        Design System · Case Study
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 tracking-tighter mb-8 leading-[1.05]">
                        Simplifai{" "}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                            Design System
                        </span>
                    </h1>

                    <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed font-medium">
                        Scaling AI-native interfaces with a semantic token architecture and automated Figma → React handoff pipelines.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
