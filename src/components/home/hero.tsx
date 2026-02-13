"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code, LayoutTemplate } from "lucide-react";

export function Hero() {
    const [isEngineer, setIsEngineer] = useState(false);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-32 overflow-hidden">
            <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-8">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-300">Available for Senior Roles</span>
                </div>

                {/* Headlines */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-100">
                        Bridging the gap between <br className="hidden md:block" />
                        <span className="text-zinc-100">Design</span> & <span className="text-zinc-100">Engineering</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Senior Product Designer specializing in Design Systems, WCAG 2.2 Accessibility, and AI Workflows. Currently building tools at Infosys.
                    </p>
                </div>

                {/* Tech Stack Marquee */}
                <div className="w-full max-w-2xl overflow-hidden py-4 mask-linear-fade">
                    <motion.div
                        className="flex whitespace-nowrap gap-8 text-sm font-medium text-zinc-500"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span>React 19</span> <span>•</span>
                                <span>TypeScript</span> <span>•</span>
                                <span>Design Systems</span> <span>•</span>
                                <span>WCAG 2.2</span> <span>•</span>
                                <span>Figma Plugin API</span> <span>•</span>
                                <span>AI Agents</span> <span>•</span>
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>

                {/* Designer vs Engineer Toggle Interaction */}
                <div className="mt-12 p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm w-full max-w-md mx-auto">
                    {/* Toggle Switch */}
                    <div className="flex p-1 bg-zinc-950/50 rounded-xl mb-6 relative">
                        <div
                            className="absolute inset-y-1 w-1/2 bg-zinc-800 rounded-lg shadow-sm transition-all duration-300 ease-spring"
                            style={{ left: isEngineer ? '50%' : '4px', width: 'calc(50% - 6px)' }}
                        />
                        <button
                            onClick={() => setIsEngineer(false)}
                            className={cn(
                                "relative z-10 flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors duration-200",
                                !isEngineer ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            <LayoutTemplate className="w-4 h-4" />
                            Designer
                        </button>
                        <button
                            onClick={() => setIsEngineer(true)}
                            className={cn(
                                "relative z-10 flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium transition-colors duration-200",
                                isEngineer ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                            )}
                        >
                            <Code className="w-4 h-4" />
                            Engineer
                        </button>
                    </div>

                    {/* Interaction Visual */}
                    <div className="h-48 flex items-center justify-center border-t border-zinc-800/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-50" />

                        {/* DESIGNER STATE */}
                        <motion.div
                            initial={false}
                            animate={{ opacity: isEngineer ? 0 : 1, scale: isEngineer ? 0.95 : 1, y: isEngineer ? 10 : 0 }}
                            className={cn("absolute", isEngineer && "pointer-events-none")}
                        >
                            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                                Start Project
                            </button>
                        </motion.div>

                        {/* ENGINEER STATE */}
                        <motion.div
                            initial={false}
                            animate={{ opacity: isEngineer ? 1 : 0, scale: isEngineer ? 1 : 0.95, y: isEngineer ? 0 : -10 }}
                            className={cn("absolute w-full px-8 text-left", !isEngineer && "pointer-events-none")}
                        >
                            <pre className="font-mono text-xs bg-zinc-950/80 p-4 rounded-lg border border-zinc-800 overflow-x-auto">
                                <code>
                                    <span className="text-purple-400">export</span> <span className="text-purple-400">function</span> <span className="text-yellow-200">Button</span>() {"{"}
                                    {"\n"}  <span className="text-purple-400">return</span> (
                                    {"\n"}    <span className="text-zinc-400">&lt;</span><span className="text-blue-400">button</span>
                                    {"\n"}      <span className="text-sky-300">className</span>=<span className="text-green-300">"bg-blue-600..."</span><span className="text-zinc-400">&gt;</span>
                                    {"\n"}      Start Project
                                    {"\n"}    <span className="text-zinc-400">&lt;/</span><span className="text-blue-400">button</span><span className="text-zinc-400">&gt;</span>
                                    {"\n"}  );
                                    {"\n"}{"}"}
                                </code>
                            </pre>
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Subtle Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-zinc-900/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none mix-blend-screen" />
        </section>
    );
}
