"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code, LayoutTemplate, Sparkles, ChevronRight, Terminal, Award } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";

export function Hero() {
    const [isEngineer, setIsEngineer] = useState(false);
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const technologies = [
        "React 19", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "WebGL", "Figma Plugin API", "WCAG 2.2", "Node.js", "PostgreSQL"
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-32 overflow-hidden selection:bg-blue-100 bg-background">
            {/* --- Premium Light Background --- */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

            {/* Colorful floating orbs — use mix-blend-multiply so they blend on white */}
            <motion.div
                style={{
                    x: useTransform(springX, (v) => v * -2),
                    y: useTransform(springY, (v) => v * -2),
                }}
                className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-300/40 rounded-full blur-[130px] -z-10 pointer-events-none mix-blend-multiply"
            />
            <motion.div
                style={{
                    x: useTransform(springX, (v) => v * 2),
                    y: useTransform(springY, (v) => v * 2),
                }}
                className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-blue-300/30 rounded-full blur-[140px] -z-10 pointer-events-none mix-blend-multiply"
            />
            <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-rose-200/30 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-multiply" />

            <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-10 z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={() => setIsContactSheetOpen(true)}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-zinc-200 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all cursor-pointer"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">
                        Available for Founding Designer / PM Roles
                    </span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors group-hover:translate-x-0.5" />
                </motion.div>

                {/* Headlines */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 leading-[1.1]"
                    >
                        Bridging the gap between <br className="hidden md:block" />
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                                Design
                            </span>
                            <motion.svg className="absolute -bottom-2 left-0 w-full h-[0.2em]" viewBox="0 0 100 10" preserveAspectRatio="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="url(#designGrad)" strokeWidth="3" strokeLinecap="round" />
                                <defs><linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#7c3aed" /><stop offset="100%" stopColor="#6366f1" /></linearGradient></defs>
                            </motion.svg>
                        </span>
                        {" "}&{" "}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                AI-Driven Execution
                            </span>
                            <motion.svg className="absolute -bottom-2 left-0 w-full h-[0.2em]" viewBox="0 0 100 10" preserveAspectRatio="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
                                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="url(#engGrad)" strokeWidth="3" strokeLinecap="round" />
                                <defs><linearGradient id="engGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs>
                            </motion.svg>
                        </span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Senior Product Designer & Builder specializing in AI Workflows, Design Systems, and 0-to-1 Product Incubation. Currently driving product at Infosys.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full px-4 sm:px-0"
                    >
                        <button
                            onClick={() => setIsContactSheetOpen(true)}
                            className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-zinc-900 text-white font-semibold flex items-center gap-2 hover:bg-zinc-700 hover:scale-105 active:scale-95 transition-all shadow-md group"
                        >
                            Let's Talk
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="/Aditya_Chinchakar_V1_FoundingDesigner.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full bg-white text-zinc-900 font-semibold flex items-center gap-2 border border-zinc-200 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 hover:scale-105 active:scale-95 transition-all"
                        >
                            Download Resume
                        </a>
                    </motion.div>

                    {/* GAP IDENTIFIED: Trust Signals - Adding social proof elements to increase conversion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 text-sm font-medium text-zinc-500"
                    >
                        <div className="flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-violet-500" />
                            <span>10+ Years Experience</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="flex items-center gap-1.5">
                            <LayoutTemplate className="w-4 h-4 text-blue-500" />
                            <span>50+ Products Shipped</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="flex items-center gap-1.5">
                            <Award className="w-4 h-4 text-amber-500" />
                            <span>Awwwards Nominee</span>
                        </div>
                    </motion.div>
                </div>

                {/* Interactive Component Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
                    className="w-full max-w-2xl mx-auto mt-12 bg-white/80 border border-zinc-200 rounded-3xl p-2 backdrop-blur-xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* Header Controls */}
                    <div className="flex items-center justify-between p-3 border-b border-zinc-100 bg-zinc-50/80 rounded-2xl mb-2 relative z-10 backdrop-blur-md">
                        <div className="flex gap-1.5 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/90"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400/90"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/90"></div>
                        </div>

                        {/* Custom Animated Segmented Control */}
                        <div className="flex p-0.5 bg-zinc-100 rounded-lg relative overflow-hidden border border-zinc-200 shadow-inner">
                            <div
                                className="absolute inset-y-0.5 bg-white rounded-md shadow-sm border border-zinc-200 transition-all duration-500"
                                style={{
                                    left: isEngineer ? '50%' : '2px',
                                    width: 'calc(50% - 2px)',
                                }}
                            />
                            <button
                                onClick={() => setIsEngineer(false)}
                                className={cn(
                                    "relative z-10 flex items-center justify-center gap-2 px-6 py-1.5 text-sm font-semibold transition-colors duration-300 rounded-md",
                                    !isEngineer ? "text-violet-600" : "text-zinc-400 hover:text-zinc-600"
                                )}
                            >
                                <LayoutTemplate className="w-4 h-4" />
                                Designer
                            </button>
                            <button
                                onClick={() => setIsEngineer(true)}
                                className={cn(
                                    "relative z-10 flex items-center justify-center gap-2 px-6 py-1.5 text-sm font-semibold transition-colors duration-300 rounded-md",
                                    isEngineer ? "text-blue-600" : "text-zinc-400 hover:text-zinc-600"
                                )}
                            >
                                <Terminal className="w-4 h-4" />
                                Engineer
                            </button>
                        </div>
                    </div>

                    {/* Canvas Area */}
                    <div className="relative h-72 bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 flex items-center justify-center z-10">
                        {/* Grid Background — light version */}
                        <div
                            className="absolute inset-0 bg-[linear-gradient(to_right,#18181b0a_1px,transparent_1px),linear-gradient(to_bottom,#18181b0a_1px,transparent_1px)] bg-[size:20px_20px] opacity-60"
                            style={{ WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)", maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)" }}
                        ></div>

                        <AnimatePresence mode="wait">
                            {!isEngineer ? (
                                <motion.div
                                    key="designer"
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative flex flex-col items-center gap-6"
                                >
                                    {/* Designer UI Mock */}
                                    <div className="relative group/btn cursor-pointer">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur opacity-20 group-hover/btn:opacity-50 transition duration-500"></div>
                                        <div className="relative flex items-center gap-2 px-8 py-4 bg-white rounded-xl border border-zinc-200 shadow-md text-zinc-900 font-semibold overflow-hidden">
                                            <Sparkles className="w-5 h-5 text-violet-500" />
                                            <span>Start Crafting</span>

                                            {/* Ripple effect */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-violet-100 rounded-full group-hover/btn:w-[300px] group-hover/btn:h-[300px] transition-all duration-700 ease-out"></div>
                                        </div>
                                    </div>

                                    {/* Component properties mock */}
                                    <div className="flex gap-4 relative z-20">
                                        <div className="px-4 py-2 bg-white backdrop-blur-sm rounded-lg border border-zinc-200 shadow-sm text-xs font-medium text-zinc-500 hover:shadow-md transition-all cursor-pointer">
                                            Auto Layout <span className="text-violet-500 ml-2">Flex</span>
                                        </div>
                                        <div className="px-4 py-2 bg-white backdrop-blur-sm rounded-lg border border-zinc-200 shadow-sm text-xs font-medium text-zinc-500 hover:shadow-md transition-all cursor-pointer">
                                            Variants <span className="text-violet-500 ml-2">Primary</span>
                                        </div>
                                    </div>

                                    {/* Decorative UI elements */}
                                    <div className="absolute -top-12 -left-16 w-24 h-24 border-2 border-dashed border-purple-300 rounded-lg opacity-50 rotate-12 animate-pulse pointer-events-none"></div>
                                    <div className="absolute top-4 -right-20 w-32 h-8 bg-pink-200 rounded-full opacity-40 -rotate-12 blur-[2px] pointer-events-none"></div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="engineer"
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full p-4 relative"
                                >
                                    <div className="absolute inset-0 bg-[#0d1117]/95 -z-10 rounded-xl shadow-inner border border-white/5"></div>
                                    <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                                        <span className="text-xs text-blue-400 font-mono">Button.tsx</span>
                                        <span className="text-xs text-zinc-500 font-mono">globals.css</span>
                                    </div>

                                    {/* Syntax Highlighting Mock */}
                                    <pre className="font-mono text-[13px] leading-[1.6] text-zinc-300 overflow-x-auto text-left pl-2">
                                        <motion.code
                                            initial="hidden"
                                            animate="visible"
                                            variants={{
                                                visible: { transition: { staggerChildren: 0.05 } }
                                            }}
                                        >
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">1</span>
                                                <span><span className="text-pink-400">export</span> <span className="text-pink-400">function</span> <span className="text-yellow-200">Button</span>() {"{"}</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">2</span>
                                                <span>  <span className="text-pink-400">return</span> (</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">3</span>
                                                <span>    <span className="text-zinc-400">&lt;</span><span className="text-sky-300">motion.button</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">4</span>
                                                <span>      <span className="text-blue-300">whileHover</span>=<span className="text-zinc-300">{"{{"}</span> <span className="text-sky-200">scale:</span> <span className="text-orange-300">1.05</span> <span className="text-zinc-300">{"}}"}</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">5</span>
                                                <span>      <span className="text-blue-300">whileTap</span>=<span className="text-zinc-300">{"{{"}</span> <span className="text-sky-200">scale:</span> <span className="text-orange-300">0.95</span> <span className="text-zinc-300">{"}}"}</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">6</span>
                                                <span>      <span className="text-blue-300">className</span>=<span className="text-green-300">"relative px-8 py-4 bg-zinc-900 rounded-xl shadow-sm"</span><span className="text-zinc-400">&gt;</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">7</span>
                                                <span>      <span className="text-zinc-400">&lt;</span><span className="text-sky-300">Sparkles</span> <span className="text-blue-300">className</span>=<span className="text-green-300">"w-5 h-5 text-purple-500"</span> <span className="text-zinc-400">/&gt;</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">8</span>
                                                <span>      <span className="text-zinc-300">Start Crafting</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">9</span>
                                                <span>    <span className="text-zinc-400">&lt;/</span><span className="text-sky-300">motion.button</span><span className="text-zinc-400">&gt;</span></span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">10</span>
                                                <span>  );</span>
                                            </div>
                                            <div className="flex">
                                                <span className="text-zinc-600 w-8 select-none">11</span>
                                                <span>{"}"}</span>
                                            </div>
                                        </motion.code>
                                    </pre>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Tech Stack Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="w-full relative overflow-hidden py-4 mask-linear-fade mt-8 flex"
                >
                    <motion.div
                        className="flex whitespace-nowrap gap-6 text-sm font-semibold tracking-wide text-zinc-400 items-center justify-start min-w-full"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 35,
                        }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <React.Fragment key={i}>
                                {technologies.map((tech, j) => (
                                    <React.Fragment key={`${i}-${j}`}>
                                        <span className="hover:text-zinc-700 transition-colors duration-300 cursor-default">{tech}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mx-2"></span>
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Very Subtle bottom fade to bleed into the next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none z-20"></div>

            <ContactSheet
                isOpen={isContactSheetOpen}
                onClose={() => setIsContactSheetOpen(false)}
            />
        </section>
    );
}
