"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code, LayoutTemplate, Sparkles, ChevronRight, Terminal, Award } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";

export function Hero() {
    const [isEngineer, setIsEngineer] = useState(false);
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);
    const [activeCodeTab, setActiveCodeTab] = useState<'DesignSystem.tsx' | 'tokens.ts' | 'index.css'>('DesignSystem.tsx');
    const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

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

    const designerSkills = [
        "Figma", "Design Systems", "Prototyping", "User Research", "Interaction Design", "Wireframing", "WCAG 2.2", "Information Architecture", "Motion Design", "Design Ops"
    ];

    const engineerSkills = [
        "React 19", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "WebGL", "Figma Plugin API", "Node.js", "PostgreSQL", "CSS Modules"
    ];

    const currentSkills = isEngineer ? engineerSkills : designerSkills;

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
                            <span>7+ Years Experience</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="flex items-center gap-1.5">
                            <LayoutTemplate className="w-4 h-4 text-blue-500" />
                            <span>10+ Products Shipped</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-300" />
                        <div className="flex items-center gap-1.5">
                            <Terminal className="w-4 h-4 text-green-500" />
                            <span>0-to-1 Product Builder</span>
                        </div>
                    </motion.div>
                </div>

                {/* Interactive Component Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
                    className="w-full max-w-4xl mx-auto mt-16 bg-white/80 border border-zinc-200/80 rounded-3xl p-2.5 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgb(0,0,0,0.1)] relative overflow-hidden group"
                >
                    {/* Only show glare on Designer view as it washes out the dark Engineer view */}
                    {!isEngineer && (
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
                    )}

                    {/* Inner Container */}
                    <div className="relative rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm flex flex-col h-[400px]">

                        {/* macOS Header & Controls */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/60 backdrop-blur-md border-b border-zinc-100/80 relative z-20">
                            {/* Traffic Lights */}
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm"></div>
                            </div>

                            {/* Center Segmented Control */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="flex p-1 bg-zinc-100/80 rounded-[10px] relative shadow-inner backdrop-blur-sm border border-black/5">
                                    <div
                                        className="absolute inset-y-1 bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-zinc-200/50 transition-all duration-400 cubic-bezier(0.16, 1, 0.3, 1)"
                                        style={{
                                            left: isEngineer ? 'calc(50% + 2px)' : '4px',
                                            width: 'calc(50% - 6px)',
                                        }}
                                    />
                                    <button
                                        onClick={() => setIsEngineer(false)}
                                        className={cn(
                                            "relative z-10 flex items-center justify-center gap-2 px-6 py-1.5 text-sm font-sans transition-colors duration-300 rounded-md w-32",
                                            !isEngineer ? "text-violet-600 font-semibold" : "text-zinc-500 hover:text-zinc-800 font-medium"
                                        )}
                                    >
                                        <LayoutTemplate className="w-4 h-4" />
                                        Designer
                                    </button>
                                    <button
                                        onClick={() => setIsEngineer(true)}
                                        className={cn(
                                            "relative z-10 flex items-center justify-center gap-2 px-6 py-1.5 text-sm font-sans transition-colors duration-300 rounded-md w-32",
                                            isEngineer ? "text-blue-600 font-semibold" : "text-zinc-500 hover:text-zinc-800 font-medium"
                                        )}
                                    >
                                        <Code className="w-4 h-4" />
                                        Engineer
                                    </button>
                                </div>
                            </div>

                            {/* Empty right area for flex balance */}
                            <div className="w-16"></div>
                        </div>

                        {/* Interactive Canvas Area */}
                        <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-[#FAFAFA]">

                            {/* Subtle Grid Background */}
                            <div
                                className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"
                                style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)" }}
                            ></div>

                            <AnimatePresence mode="wait">
                                {!isEngineer ? (
                                    <motion.div
                                        key="designer"
                                        initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative flex items-center justify-between w-full h-full p-6"
                                    >
                                        {/* Left Panel - LAYERS */}
                                        <div className="w-52 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-zinc-200/60 z-20 flex flex-col gap-3 transition-all">
                                            <h3 className="text-[10px] font-bold text-zinc-400 tracking-widest px-2 uppercase">Layers</h3>
                                            <div className="flex flex-col gap-1">
                                                {['Frame', 'Header', 'Body', 'CTA Button', 'Footer'].map(layer => {
                                                    const isActive = hoveredLayer === layer || (layer === 'CTA Button' && hoveredLayer === null);
                                                    return (
                                                        <div
                                                            key={layer}
                                                            onMouseEnter={() => setHoveredLayer(layer)}
                                                            onMouseLeave={() => setHoveredLayer(null)}
                                                            className={cn(
                                                                "flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors",
                                                                isActive ? "bg-violet-50/50 border border-violet-100/50" : "hover:bg-zinc-50 border border-transparent"
                                                            )}
                                                        >
                                                            <div className={cn(
                                                                "w-3 h-3 rounded-full transition-colors",
                                                                isActive ? "border-2 border-violet-500 bg-white" : "border border-zinc-300 group-hover:border-zinc-400"
                                                            )} />
                                                            <span className={cn(
                                                                "text-xs font-medium transition-colors",
                                                                isActive ? "text-violet-700 font-semibold" : "text-zinc-600"
                                                            )}>{layer}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Center - Canvas area */}
                                        <div className="flex-1 flex flex-col items-center justify-center relative">

                                            {/* Dummy wireframes for other layers */}
                                            <AnimatePresence>
                                                {hoveredLayer === 'Frame' && (
                                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-[-40px] border-2 border-dashed border-violet-300 rounded-3xl pointer-events-none z-10" />
                                                )}
                                                {hoveredLayer === 'Header' && (
                                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-[-60px] w-64 h-8 bg-white/50 border border-violet-200 rounded-lg pointer-events-none z-10" />
                                                )}
                                                {hoveredLayer === 'Body' && (
                                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute inset-[-20px] bg-white/30 border border-violet-200 rounded-2xl pointer-events-none z-10" />
                                                )}
                                                {hoveredLayer === 'Footer' && (
                                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute bottom-[-60px] w-64 h-12 bg-white/50 border border-violet-200 rounded-lg pointer-events-none z-10" />
                                                )}
                                            </AnimatePresence>

                                            {/* Main interactive button */}
                                            <div
                                                className="relative group/craft cursor-pointer"
                                                onMouseEnter={() => setHoveredLayer('CTA Button')}
                                                onMouseLeave={() => setHoveredLayer(null)}
                                            >
                                                {/* Length Width markers */}
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1 z-30">
                                                    <div className="px-1.5 py-0.5 bg-white border border-violet-200 shadow-sm rounded text-[9px] font-mono text-violet-600 font-semibold">W 140</div>
                                                    <div className="px-1.5 py-0.5 bg-white border border-violet-200 shadow-sm rounded text-[9px] font-mono text-violet-600 font-semibold">H 36</div>
                                                </div>

                                                {/* Bounding Box Border */}
                                                <div className={cn(
                                                    "absolute -inset-1.5 border-[1.5px] rounded-xl pointer-events-none z-30 transition-all",
                                                    hoveredLayer === 'CTA Button' || hoveredLayer === null ? "border-violet-400 opacity-80" : "border-transparent opacity-0"
                                                )}>
                                                    {/* Corner nodes */}
                                                    <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-white border border-violet-400 rounded-[1px]"></div>
                                                    <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-white border border-violet-400 rounded-[1px]"></div>
                                                    <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-white border border-violet-400 rounded-[1px]"></div>
                                                    <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-white border border-violet-400 rounded-[1px]"></div>
                                                </div>

                                                {/* Actually rendering the button */}
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="relative z-20 w-[140px] h-[36px] bg-gradient-to-r from-violet-600 to-indigo-500 rounded-xl shadow-lg shadow-violet-500/20 flex items-center justify-center gap-1.5 overflow-hidden"
                                                >
                                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/craft:opacity-100 transition-opacity"></div>
                                                    <span className="text-white font-semibold text-sm relative z-10 tracking-tight">Get Started</span>
                                                    <ChevronRight className="w-3.5 h-3.5 text-white relative z-10" />
                                                </motion.div>

                                                {/* Glow effect behind */}
                                                <div className="absolute inset-0 bg-violet-400 mix-blend-multiply blur-2xl opacity-20 -z-10 rounded-full scale-150 pointer-events-none"></div>

                                                {/* Cursor */}
                                                <div className="absolute -bottom-6 right-2 w-4 h-4 z-40">
                                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-violet-600 drop-shadow-md">
                                                        <path d="M4 4l5.34 16.02a1 1 0 001.8.1L14 14l6.12-2.86a1 1 0 00-.1-1.8L4 4z" fill="currentColor" />
                                                    </svg>
                                                    <div className="absolute top-5 left-4 bg-violet-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm tracking-wider whitespace-nowrap">Aditya</div>
                                                </div>

                                            </div>

                                            {/* Property Pills Below */}
                                            <div className="flex gap-3 mt-10 z-20">
                                                <div className="px-3 py-1.5 bg-white rounded-full shadow-sm border border-zinc-200 flex items-center gap-1.5 cursor-crosshair">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-violet-600" />
                                                    <span className="text-[11px] font-medium text-zinc-600 tracking-tight">Primary</span>
                                                </div>
                                                <div className="px-3 py-1.5 bg-white rounded-full shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-white flex items-center gap-1.5 cursor-crosshair">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-50 border border-zinc-200" />
                                                    <span className="text-[11px] font-medium text-zinc-600 tracking-tight">Surface</span>
                                                </div>
                                                <div className="px-3 py-1.5 bg-white rounded-full shadow-sm border border-zinc-200 cursor-crosshair relative">
                                                    <span className="text-[11px] font-medium text-zinc-600 tracking-tight">Text</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Panel - PROPERTIES */}
                                        <div className="w-52 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-zinc-200/60 z-20 flex flex-col gap-4">
                                            <h3 className="text-[10px] font-bold text-zinc-400 tracking-widest px-1 uppercase">Properties</h3>
                                            <div className="flex flex-col gap-3 px-1">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[11px] text-zinc-400">Fill</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                                                        <span className="text-[11px] font-medium text-zinc-700">#7C3AED</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[11px] text-zinc-400">Radius</span>
                                                    <span className="text-[11px] font-medium text-zinc-700">8</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[11px] text-zinc-400">Shadow</span>
                                                    <span className="text-[11px] font-medium text-zinc-700">lg</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[11px] text-zinc-400">Auto-Layout</span>
                                                    <span className="text-[11px] font-medium text-zinc-700">→ Hug</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[11px] text-zinc-400">Variant</span>
                                                    <span className="text-[11px] font-medium text-zinc-700">Primary</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="engineer"
                                        initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full h-full bg-[#161b22] flex flex-col text-left relative overflow-hidden"
                                    >
                                        {/* File Tabs */}
                                        <div className="flex bg-[#0d1117] border-b border-white/5 overflow-x-auto no-scrollbar pt-2 pl-2">
                                            <div
                                                onClick={() => setActiveCodeTab('DesignSystem.tsx')}
                                                className={cn(
                                                    "px-4 py-2 flex items-center gap-2 min-w-max relative z-20 cursor-pointer transition-colors",
                                                    activeCodeTab === 'DesignSystem.tsx' ? "bg-[#161b22] border-t-2 border-t-[#7C3AED] rounded-t-lg" : "border-t-2 border-transparent opacity-60 hover:opacity-100"
                                                )}
                                            >
                                                <div className="w-3.5 h-3.5 flex items-center justify-center">
                                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#61DAFB]"><path fill="currentColor" d="M11.955 2.578a.75.75 0 0 1 .09 0l7.596 2.054a.75.75 0 0 1 .554.72v13.296a.75.75 0 0 1-.554.72l-7.596 2.054a.75.75 0 0 1-.39 0l-7.596-2.054a.75.75 0 0 1-.554-.72V5.352a.75.75 0 0 1 .554-.72l7.596-2.054ZM12 4.14 5.908 5.786v12.428L12 19.86l6.092-1.646V5.786L12 4.14Zm-1.84 9.172c-.854 0-1.428-.485-1.69-1.077l-1.442.846c.465.986 1.433 1.706 3.13 1.706 2.067 0 3.328-1.053 3.328-2.58 0-1.353-.96-2.126-2.613-2.505l-.837-.184c-.958-.216-1.394-.486-1.394-.95 0-.528.486-.88 1.173-.88.75 0 1.25.32 1.554.81l1.378-.813C12.333 6.746 11.332 6.136 10.16 6.136c-1.874 0-3.09 1.042-3.09 2.457 0 1.344.975 2.008 2.507 2.373l.942.222c1.01.24 1.5.545 1.5 1.055 0 .584-.53 1.07-1.3 1.07Z" /></svg>
                                                </div>
                                                <span className="text-xs text-zinc-300 font-mono tracking-wide">DesignSystem.tsx</span>
                                                {activeCodeTab === 'DesignSystem.tsx' && <div className="w-2 h-2 rounded-full bg-yellow-500 ml-1" />}
                                            </div>
                                            <div
                                                onClick={() => setActiveCodeTab('tokens.ts')}
                                                className={cn(
                                                    "px-4 py-2 flex items-center gap-2 min-w-max cursor-pointer transition-colors",
                                                    activeCodeTab === 'tokens.ts' ? "bg-[#161b22] border-t-2 border-t-[#3178C6] rounded-t-lg opacity-100" : "border-t-2 border-transparent opacity-60 hover:opacity-100"
                                                )}
                                            >
                                                <div className="w-3.5 h-3.5 bg-[#3178C6] flex items-center justify-center rounded-[2px] font-bold text-[8px] text-white">TS</div>
                                                <span className="text-xs text-zinc-300 font-mono tracking-wide">tokens.ts</span>
                                                {activeCodeTab === 'tokens.ts' && <div className="w-2 h-2 rounded-full bg-yellow-500 ml-1" />}
                                            </div>
                                            <div
                                                onClick={() => setActiveCodeTab('index.css')}
                                                className={cn(
                                                    "px-4 py-2 flex items-center gap-2 min-w-max cursor-pointer transition-colors",
                                                    activeCodeTab === 'index.css' ? "bg-[#161b22] border-t-2 border-t-[#2965f1] rounded-t-lg opacity-100" : "border-t-2 border-transparent opacity-60 hover:opacity-100"
                                                )}
                                            >
                                                <div className="text-[#2965f1] font-bold text-xs tracking-tighter">CSS</div>
                                                <span className="text-xs text-zinc-300 font-mono tracking-wide">index.css</span>
                                                {activeCodeTab === 'index.css' && <div className="w-2 h-2 rounded-full bg-yellow-500 ml-1" />}
                                            </div>
                                        </div>

                                        {/* Editor Area */}
                                        <div className="flex-1 flex flex-col z-10 min-w-0 p-4">
                                            <div className="flex-1 overflow-hidden text-sm font-mono leading-[1.6] relative text-left text-zinc-300">
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={{
                                                        visible: { transition: { staggerChildren: 0.04 } }
                                                    }}
                                                >
                                                    {activeCodeTab === 'DesignSystem.tsx' && [
                                                        { num: 1, text: <><span className="text-pink-400">import</span> <span className="text-zinc-300">{"{ motion }"}</span> <span className="text-pink-400">from</span> <span className="text-[#CE9178]">'framer-motion'</span></> },
                                                        { num: 2, text: <><span className="text-pink-400">import</span> <span className="text-zinc-300">{"{ useDesignTokens }"}</span> <span className="text-pink-400">from</span> <span className="text-[#CE9178]">'@/hooks'</span></> },
                                                        { num: 3, text: <></> },
                                                        { num: 4, text: <><span className="text-pink-400">export function</span> <span className="text-yellow-200">DesignSystem</span>() {"{"}</> },
                                                        { num: 5, text: <>  <span className="text-pink-400">const</span> <span className="text-[#9CDCFE]">tokens</span> <span className="text-zinc-500">=</span> <span className="text-yellow-200">useDesignTokens</span>()</> },
                                                        { num: 6, text: <></> },
                                                        { num: 7, text: <>  <span className="text-pink-400">return</span> (</> },
                                                        { num: 8, text: <>    <span className="text-zinc-500">&lt;</span><span className="text-[#61DAFB]">motion.div</span> <span className="text-[#9CDCFE]">layout</span> <span className="text-[#9CDCFE]">whileHover</span><span className="text-zinc-500">=</span><span className="text-[#D4D4D4]">{"{{"}</span> <span className="text-[#9CDCFE]">scale:</span> <span className="text-[#B5CEA8]">1.02</span> <span className="text-[#D4D4D4]">{"}}"}</span><motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-[1.1em] bg-blue-400 inline-block align-middle ml-0.5 rounded-sm"></motion.span></>, isHighlight: true },
                                                        { num: 9, text: <>      <span className="text-[#9CDCFE]">className</span><span className="text-zinc-500">=</span><span className="text-[#CE9178]">`glass-card <span className="text-[#569CD6]">{"${tokens.surface}"}</span>`</span></> },
                                                        { num: 10, text: <>      <span className="text-[#9CDCFE]">transition</span><span className="text-zinc-500">=</span><span className="text-[#D4D4D4]">{"{{"}</span> <span className="text-[#9CDCFE]">duration:</span> <span className="text-[#B5CEA8]">0.3</span> <span className="text-[#D4D4D4]">{"}}"}</span><span className="text-zinc-500">&gt;</span></> },
                                                        { num: 11, text: <>      <span className="text-zinc-500">&lt;</span><span className="text-[#4EC9B0]">Sparkles</span> <span className="text-[#9CDCFE]">aria-hidden</span><span className="text-zinc-500">=</span><span className="text-[#CE9178]">"true"</span> <span className="text-zinc-500">/&gt;</span></> },
                                                        { num: 12, text: <>    <span className="text-zinc-500">&lt;/</span><span className="text-[#61DAFB]">motion.div</span><span className="text-zinc-500">&gt;</span></> },
                                                    ].map((line) => (
                                                        <motion.div
                                                            key={`ds-${line.num}`}
                                                            className={cn("flex px-4 py-[1px] group/line -mx-4 transition-colors", line.isHighlight ? "bg-[#2d3748]/50 border-l-[3px] border-blue-500" : "border-l-[3px] border-transparent hover:bg-white/5")}
                                                            variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }}
                                                        >
                                                            <span className="text-[#858585] w-8 select-none pr-4 text-right tabular-nums text-[13px] font-mono">{line.num}</span>
                                                            <div className="flex-1 tracking-wider whitespace-nowrap text-[13px]">
                                                                {line.text}
                                                            </div>
                                                        </motion.div>
                                                    ))}

                                                    {activeCodeTab === 'tokens.ts' && [
                                                        { num: 1, text: <><span className="text-pink-400">export const</span> <span className="text-[#9CDCFE]">designTokens</span> <span className="text-zinc-500">=</span> {"{"}</> },
                                                        { num: 2, text: <>  <span className="text-[#9CDCFE]">surface:</span> <span className="text-[#CE9178]">'#FAFAFA'</span><span className="text-zinc-500">,</span></> },
                                                        { num: 3, text: <>  <span className="text-[#9CDCFE]">primary:</span> <span className="text-[#CE9178]">'#7C3AED'</span><span className="text-zinc-500">,</span></> },
                                                        { num: 4, text: <>  <span className="text-[#9CDCFE]">radius:</span> <span className="text-[#B5CEA8]">8</span><span className="text-zinc-500">,</span></> },
                                                        { num: 5, text: <>  <span className="text-[#9CDCFE]">shadow:</span> <span className="text-[#CE9178]">'0 4px 14px rgba(0,0,0,0.1)'</span><span className="text-zinc-500">,</span></> },
                                                        { num: 6, text: <>  <span className="text-[#9CDCFE]">fontFamily:</span> <span className="text-[#CE9178]">'var(--font-geist)'</span></> },
                                                        { num: 7, text: <>{"}"}<span className="text-zinc-500">;</span></> },
                                                    ].map((line) => (
                                                        <motion.div
                                                            key={`tk-${line.num}`}
                                                            className={cn("flex px-4 py-[1px] group/line -mx-4 transition-colors", "border-l-[3px] border-transparent hover:bg-white/5")}
                                                            variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }}
                                                        >
                                                            <span className="text-[#858585] w-8 select-none pr-4 text-right tabular-nums text-[13px] font-mono">{line.num}</span>
                                                            <div className="flex-1 tracking-wider whitespace-nowrap text-[13px]">
                                                                {line.text}
                                                            </div>
                                                        </motion.div>
                                                    ))}

                                                    {activeCodeTab === 'index.css' && [
                                                        { num: 1, text: <><span className="text-[#D7BA7D]">.glass-card</span> {"{"}</> },
                                                        { num: 2, text: <>  <span className="text-[#9CDCFE]">background</span>: <span className="text-[#CE9178]">rgba(255, 255, 255, 0.7)</span>;</> },
                                                        { num: 3, text: <>  <span className="text-[#9CDCFE]">backdrop-filter</span>: <span className="text-[#CE9178]">blur(12px)</span>;</> },
                                                        { num: 4, text: <>  <span className="text-[#9CDCFE]">border</span>: <span className="text-[#B5CEA8]">1px</span> <span className="text-[#CE9178]">solid rgba(255, 255, 255, 0.2)</span>;</> },
                                                        { num: 5, text: <>  <span className="text-[#9CDCFE]">border-radius</span>: <span className="text-[#CE9178]">var(--radius-lg)</span>;</> },
                                                        { num: 6, text: <>{"}"}</> },
                                                        { num: 7, text: <></> },
                                                        { num: 8, text: <><span className="text-[#D7BA7D]">.mask-linear-fade</span> {"{"}</> },
                                                        { num: 9, text: <>  <span className="text-[#9CDCFE]">mask-image</span>: <span className="text-[#CE9178]">linear-gradient(to right, transparent, black 15%, black 85%, transparent)</span>;</> },
                                                        { num: 10, text: <>{"}"}</> },
                                                    ].map((line) => (
                                                        <motion.div
                                                            key={`css-${line.num}`}
                                                            className={cn("flex px-4 py-[1px] group/line -mx-4 transition-colors", "border-l-[3px] border-transparent hover:bg-white/5")}
                                                            variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }}
                                                        >
                                                            <span className="text-[#858585] w-8 select-none pr-4 text-right tabular-nums text-[13px] font-mono">{line.num}</span>
                                                            <div className="flex-1 tracking-wider whitespace-nowrap text-[13px]">
                                                                {line.text}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Terminal Status Bar overlay at bottom corner */}
                                        <div className="h-8 bg-[#13171f] border-t border-white/5 flex items-center justify-between px-4 z-20 mt-auto">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-[#27C93F] font-mono tracking-tight font-bold">✔</span>
                                                <span className="text-xs text-zinc-400 font-mono tracking-tight">compiled in 847ms</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                                                <span>TypeScript 5.4</span>
                                                <span className="text-[10px]">❖</span>
                                                <span>ESLint</span>
                                                <span className="text-[10px]">❖</span>
                                            </div>
                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                                {currentSkills.map((tech, j) => (
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
