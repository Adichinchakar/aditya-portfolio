"use client";

import { motion } from "@/lib/motion";
import { Wand2 } from "lucide-react";

function ProjectIllustration({ slug }: { slug: string }) {
    switch (slug) {
        case "aulys-code":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50/50 overflow-hidden group-hover:bg-blue-100/40 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_60%)]" aria-hidden="true" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.18) 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />

                    {/* Faux VS Code editor — mirrors the case-study hero */}
                    <div className="relative w-72 h-56 bg-zinc-900 rounded-2xl border border-white/10 shadow-xl flex flex-col overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl">
                        {/* Title bar */}
                        <div className="h-9 border-b border-white/5 bg-zinc-900/80 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5" aria-hidden="true">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                            </div>
                            <span className="ml-1 text-[10px] font-mono text-zinc-500">Dashboard.tsx</span>
                        </div>

                        {/* Code body */}
                        <div className="relative flex-1 p-4 font-mono text-[11px] leading-relaxed">
                            {/* Always-on scan sweep */}
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-blue-400/10 to-transparent animate-[scan_3s_ease-in-out_infinite]" aria-hidden="true" />

                            <div className="flex gap-3">
                                <span className="text-zinc-600 w-3">1</span>
                                <span className="text-zinc-500">return (</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-zinc-600 w-3">2</span>
                                <span className="relative">
                                    <span className="text-rose-300/90 underline decoration-wavy decoration-rose-400/70 underline-offset-4">
                                        &lt;img src=&quot;/logo.png&quot; /&gt;
                                    </span>
                                    {/* Blinking caret */}
                                    <span className="absolute -right-2 top-0 w-[2px] h-4 bg-blue-400 animate-pulse" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-zinc-600 w-3">3</span>
                                <span className="text-zinc-500">)</span>
                            </div>

                            {/* Diagnostic chip — slides in on hover */}
                            <div className="mt-4 rounded-lg border border-rose-500/30 bg-rose-500/10 p-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
                                <div className="text-[9px] font-bold uppercase tracking-widest text-rose-300 mb-1.5">
                                    WCAG 1.1.1 · Missing alt text
                                </div>
                                <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/20 border border-blue-400/30 px-2 py-0.5 text-[9px] font-semibold text-blue-200">
                                    <Wand2 className="w-2.5 h-2.5" aria-hidden="true" /> Quick Fix
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "aulys":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0c] overflow-hidden">
                    {/* Ambient Gradients - Aulys Colors */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,188,124,0.15),transparent_60%)]" aria-hidden="true" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,188,124,0.05),transparent_60%)]" aria-hidden="true" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00BC7C] opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity duration-700" aria-hidden="true" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    {/* Abstract illustration of layers being scanned */}
                    <div className="relative w-64 h-64 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 perspective-[1000px]">
                        
                        {/* Layer 3 (Bottom) */}
                        <div className="absolute top-[60%] w-48 h-48 border border-white/10 rounded-2xl bg-white/5 transform rotate-x-[60deg] rotate-z-[45deg] shadow-2xl transition-all duration-700 group-hover:-translate-y-2 preserve-3d"></div>
                        
                        {/* Layer 2 (Middle) */}
                        <div className="absolute top-[50%] w-48 h-48 border border-white/10 rounded-2xl bg-white/5 transform rotate-x-[60deg] rotate-z-[45deg] shadow-2xl transition-all duration-700 delay-75 group-hover:-translate-y-6 preserve-3d"></div>
                        
                        {/* Layer 1 (Top - Active Scan) */}
                        <div className="absolute top-[40%] w-48 h-48 border border-[#00BC7C]/40 rounded-2xl bg-[#00BC7C]/10 transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_0_30px_rgba(0,188,124,0.2)] transition-all duration-700 delay-150 group-hover:-translate-y-10 overflow-hidden preserve-3d">
                            {/* Scanning laser line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C] to-transparent w-full h-1 opacity-50 blur-[1px] animate-[scan_2s_ease-in-out_infinite]" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C]/20 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
                        </div>

                        {/* Aulys Logo hovering above */}
                        <div className="absolute top-[15%] w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-[#00BC7C]/20 flex items-center justify-center transition-all duration-700 delay-200 group-hover:-translate-y-12 z-20">
                            <svg viewBox="0 0 128 106" fill="none" className="w-8 h-8 text-[#00BC7C]" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61.6982 10.0812C75.1001 9.44539 75.2754 12.4175 80.8997 23.4662L118 95.5453C112.67 95.6015 106.321 96.0207 101.144 94.9411C97.7722 94.2378 95.4385 88.1796 93.9116 85.1711L87.9193 73.4022L65.0721 28.8272L64.146 27.1631C63.2026 29.2586 61.5496 32.2502 60.4668 34.364L53.124 48.7154L39.1459 75.928C36.683 80.72 32.8562 89.686 30.6221 94.2303C29.591 96.3277 10 95.9782 10 95.9782L47.9697 22.3418C51.9076 14.6116 52.2777 10.9168 61.6982 10.0812Z" fill="currentColor"/>
                                <path d="M50.9006 76.4027C60.5242 76.4027 71.5227 76.4032 81.1464 76.4029C82.3369 79.6171 84.3806 85.878 84.6639 89.358C84.9751 93.1817 83.5523 95.9782 75.6471 95.9782H53.3065C49.1821 95.9782 44.7139 95.9782 40.5895 95.9782C42.8461 90.7806 46.5323 81.6215 48.9746 76.4242L50.9006 76.4027Z" fill="currentColor"/>
                                <path d="M62.6225 54.5018C66.6223 53.6239 70.5664 56.2033 71.4414 60.2695C72.3164 64.3357 69.7923 68.3554 65.7977 69.2575C61.7864 70.1636 57.8144 67.5829 56.9356 63.4994C56.0569 59.4162 58.6058 55.3835 62.6225 54.5018Z" fill="currentColor"/>
                            </svg>
                        </div>
                        
                        {/* Aulys Logo Text */}
                        <div className="absolute bottom-[5%] font-black text-2xl tracking-[0.2em] text-[#00BC7C] opacity-80 drop-shadow-2xl transition-all duration-700 group-hover:opacity-100 z-20">AULYS</div>

                    </div>
                </div>
            );
        case "simplifai":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-orange-50/50 overflow-hidden group-hover:bg-orange-100/50 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(249,115,22,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Background SVG connections */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                            <path d="M 30 50 C 50 50, 50 30, 70 30" className="stroke-orange-500/10 stroke-[0.5]" />
                            <path d="M 30 50 C 50 50, 50 70, 70 70" className="stroke-orange-500/10 stroke-[0.5]" />
                            <path d="M 70 30 L 85 30" className="stroke-orange-500/10 stroke-[0.5]" />
                            <path d="M 70 70 L 85 70" className="stroke-orange-500/10 stroke-[0.5]" />
                            
                            {/* Animated pulses */}
                            <path d="M 30 50 C 50 50, 50 30, 70 30" className="stroke-orange-400 stroke-[0.5] opacity-0 group-hover:opacity-100 group-hover:animate-[dash_2s_linear_infinite]" strokeDasharray="5 20" />
                            <path d="M 30 50 C 50 50, 50 70, 70 70" className="stroke-orange-400 stroke-[0.5] opacity-0 group-hover:opacity-100 group-hover:animate-[dash_2s_linear_infinite] [animation-delay:1s]" strokeDasharray="5 20" />
                            
                            {/* Connection lines */}
                            <path d="M 30 50 C 50 50, 50 30, 70 30" className="stroke-orange-400/50 stroke-[1px] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] ease-in-out" />
                            <path d="M 30 50 C 50 50, 50 70, 70 70" className="stroke-orange-400/50 stroke-[1px] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] ease-in-out delay-150" />
                        </svg>

                        {/* Trigger Node */}
                        <div className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 transform group-hover:scale-110 transition-transform duration-700">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-orange-200 flex items-center justify-center shadow-[0_10px_20px_rgba(249,115,22,0.1)] group-hover:border-orange-400 transition-colors">
                                <div className="w-6 h-6 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)] opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
                            </div>
                        </div>

                        {/* Action Nodes */}
                        <div className="absolute left-[70%] -translate-x-1/2 top-[30%] -translate-y-1/2 flex items-center gap-4 z-10 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-700 delay-300">
                            <div className="w-24 h-12 rounded-xl bg-white border border-orange-200 group-hover:border-orange-400 flex items-center justify-center shadow-lg transition-colors duration-700">
                                <div className="flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity duration-700 delay-500">
                                    <div className="w-2 h-2 rounded-full bg-orange-300" />
                                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute left-[70%] -translate-x-1/2 top-[70%] -translate-y-1/2 flex items-center gap-4 z-10 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-700 delay-500">
                            <div className="w-24 h-12 rounded-xl bg-white border border-orange-200 group-hover:border-orange-400 flex items-center px-3 shadow-lg transition-colors duration-700">
                                <div className="w-0 group-hover:w-12 h-2 bg-orange-400/50 rounded-full transition-all duration-[1000ms] delay-700" />
                            </div>
                        </div>
                        
                        {/* Final Output Node */}
                        <div className="absolute left-[85%] -translate-x-1/2 top-[30%] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700 delay-[1200ms]" />
                        <div className="absolute left-[85%] -translate-x-1/2 top-[70%] -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-700 delay-[1400ms]" />
                    </div>
                </div>
            );
        case "simplifai-design-system":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-50/50 overflow-hidden group-hover:bg-indigo-100/40 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.08),transparent_60%)]" />
                    
                    {/* Architectural Grid Backdrop */}
                    <div className="absolute inset-0 pattern-grid opacity-30 text-indigo-900/10 group-hover:opacity-50 transition-opacity duration-1000" />
                    
                    {/* Dynamic Auto-Layout Grid (2D Resizing Canvas) */}
                    <div className="relative w-72 h-64 bg-white/80 backdrop-blur-md rounded-2xl border border-indigo-100 shadow-xl p-4 flex flex-col gap-3 transition-all duration-700 overflow-hidden group-hover:scale-105">
                        {/* Header Bar */}
                        <div className="w-full h-8 flex gap-3">
                            <div className="h-full bg-indigo-100 rounded-lg transition-all duration-[1200ms] w-1/4 group-hover:w-[15%]" />
                            <div className="h-full bg-indigo-50 rounded-lg transition-all duration-[1200ms] flex-1" />
                            <div className="h-full w-8 bg-indigo-500/10 rounded-full" />
                        </div>
                        
                        {/* Body Layout */}
                        <div className="flex-1 flex gap-3 transition-all duration-[1200ms]">
                            {/* Sidebar */}
                            <div className="h-full bg-indigo-50/50 border border-indigo-100/50 rounded-xl transition-all duration-[1200ms] w-1/3 group-hover:w-16 p-2 flex flex-col gap-2 items-center">
                                <div className="w-full h-4 bg-indigo-100/80 rounded transition-all duration-[1200ms] group-hover:w-8 group-hover:h-8 group-hover:rounded-full" />
                                <div className="w-3/4 h-4 bg-indigo-50 rounded transition-all duration-[1200ms] group-hover:w-8 group-hover:h-8 group-hover:rounded-lg" />
                                <div className="w-5/6 h-4 bg-indigo-50 rounded transition-all duration-[1200ms] group-hover:w-8 group-hover:h-8 group-hover:rounded-lg" />
                            </div>
                            
                            {/* Main Grid */}
                            <div className="flex-1 flex flex-col gap-3 transition-all duration-[1200ms]">
                                {/* Masonry Top */}
                                <div className="flex gap-3 h-20 transition-all duration-[1200ms] group-hover:h-32">
                                    <div className="h-full bg-indigo-500/5 border border-indigo-500/20 rounded-xl transition-all duration-[1200ms] w-[60%] group-hover:w-[30%] group-hover:bg-indigo-500/10" />
                                    <div className="h-full bg-indigo-50 border border-indigo-100/50 rounded-xl transition-all duration-[1200ms] flex-1 group-hover:bg-white" />
                                </div>
                                {/* Masonry Bottom */}
                                <div className="flex-1 bg-white border border-indigo-100 rounded-xl transition-all duration-[1200ms] shadow-sm flex items-center justify-center group-hover:shadow-md">
                                    <div className="flex gap-2">
                                        <div className="w-4 h-4 rounded-full bg-indigo-200 transition-all duration-700 delay-100 group-hover:bg-indigo-400 group-hover:scale-125" />
                                        <div className="w-4 h-4 rounded-full bg-indigo-100 transition-all duration-700 delay-200 group-hover:bg-indigo-300 group-hover:scale-125" />
                                        <div className="w-4 h-4 rounded-full bg-indigo-50 transition-all duration-700 delay-300 group-hover:bg-indigo-200 group-hover:scale-125" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "orbit":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-violet-50/50 overflow-hidden group-hover:bg-violet-100/50 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
                    
                    {/* Spatial Rings & Vision OS UI */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                        
                        {/* Orbiting Rings */}
                        <div className="absolute w-72 h-72 border-[1px] border-violet-300/40 rounded-full transform rotate-x-[75deg] group-hover:rotate-x-[65deg] group-hover:scale-110 transition-all duration-1000 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-56 h-56 border-[1.5px] border-violet-400/50 rounded-full transform rotate-x-[75deg] group-hover:rotate-x-[55deg] transition-all duration-1000 animate-[spin_15s_linear_infinite_reverse]">
                            <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                        </div>
                        
                        {/* 3D Glass UI Stack */}
                        <div className="absolute inset-0 flex items-center justify-center transform preserve-3d rotate-y-[-20deg] group-hover:rotate-y-[0deg] transition-all duration-[1500ms]">
                            
                            {/* Layer 1: Background Glass Panel */}
                            <div className="absolute w-48 h-32 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(139,92,246,0.1)] transform translate-z-[-40px] group-hover:translate-z-[-60px] opacity-60 group-hover:opacity-40 transition-all duration-1000 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full border border-violet-300/50" />
                            </div>

                            {/* Layer 2: Main Active Panel */}
                            <div className="absolute w-56 h-40 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(139,92,246,0.15)] transform translate-z-[0px] group-hover:translate-z-[40px] group-hover:scale-105 transition-all duration-1000 flex flex-col p-4 gap-3">
                                <div className="flex justify-between items-center w-full">
                                    <div className="h-2 w-16 bg-violet-200 rounded-full" />
                                    <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center border border-violet-100">
                                        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl bg-white/60 border border-white flex items-center justify-center shadow-inner">
                                    <div className="w-16 h-16 rounded-full bg-violet-100/50 border border-violet-200/50 flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full bg-violet-400/20 blur-sm" />
                                    </div>
                                </div>
                            </div>

                            {/* Layer 3: Floating UI Elements */}
                            <div className="absolute w-24 h-12 rounded-xl bg-white/80 backdrop-blur-md border border-white shadow-lg transform translate-z-[30px] translate-x-24 translate-y-16 group-hover:translate-z-[80px] group-hover:translate-x-32 group-hover:translate-y-20 transition-all duration-1000 flex items-center px-3 gap-2">
                                <div className="w-3 h-3 rounded-full bg-violet-400" />
                                <div className="h-1.5 w-10 bg-violet-200 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case "medsecure":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-50/50 overflow-hidden group-hover:bg-emerald-100/40 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]" />
                    
                        {/* Interactive Bio-Orbital Heart Monitor */}
                        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                            
                            {/* ECG Stream Background */}
                            <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity duration-1000" viewBox="0 0 200 100" preserveAspectRatio="none">
                                <path d="M 0 50 L 40 50 L 50 20 L 60 80 L 70 50 L 100 50" fill="none" stroke="#10b981" strokeWidth="1.5" className="stroke-dasharray-[200] stroke-dashoffset-[200] group-hover:animate-[dash_2s_linear_infinite]" />
                                <path d="M 100 50 L 140 50 L 150 20 L 160 80 L 170 50 L 200 50" fill="none" stroke="#10b981" strokeWidth="1.5" className="stroke-dasharray-[200] stroke-dashoffset-[200] group-hover:animate-[dash_2s_linear_infinite] [animation-delay:1s]" />
                            </svg>

                            {/* Bio-Orbital Rings */}
                            <div className="absolute w-48 h-48 border border-emerald-400/20 rounded-full transform rotate-x-[60deg] group-hover:rotate-x-[75deg] group-hover:scale-110 transition-all duration-1000 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute w-64 h-64 border border-emerald-400/20 rounded-full transform rotate-x-[70deg] rotate-y-[20deg] group-hover:rotate-y-[0deg] group-hover:scale-110 transition-all duration-1000 animate-[spin_15s_linear_infinite_reverse]">
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] -translate-x-1/2 -translate-y-1/2" />
                            </div>

                            {/* Core Medical Node */}
                            <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100 shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-y-[180deg] transition-all duration-[1500ms] preserve-3d">
                                {/* Front Face */}
                                <div className="absolute inset-0 flex items-center justify-center backface-hidden">
                                    <div className="w-12 h-12 relative">
                                        {/* Beating Heart Icon */}
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-emerald-500 drop-shadow-md animate-[pulse_1.5s_ease-in-out_infinite]">
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Back Face */}
                                <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-[180deg] bg-emerald-50 rounded-2xl">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-emerald-600 drop-shadow-md">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Floating UI Data Snippets */}
                            <div className="absolute top-[20%] left-[10%] w-20 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-white flex flex-col justify-center px-3 shadow-lg transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase">BPM</div>
                                <div className="text-sm font-black text-emerald-600">72</div>
                            </div>

                            <div className="absolute bottom-[20%] right-[10%] w-24 h-10 rounded-lg bg-white/60 backdrop-blur-md border border-white flex items-center px-3 gap-2 shadow-lg transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-500">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                <div className="text-[10px] font-bold text-zinc-600">SECURE</div>
                            </div>
                        </div>
                </div>
            );
        case "infosys":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50/50 overflow-hidden group-hover:bg-blue-100/40 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_60%)]" />
                    
                    {/* Generative AI Interface Concept */}
                    <div className="relative w-72 h-56 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-xl flex flex-col overflow-hidden group-hover:shadow-2xl transition-all duration-700 group-hover:scale-105">
                        {/* Header */}
                        <div className="h-10 border-b border-blue-50 bg-white/50 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-200" />
                            <div className="flex-1" />
                            <div className="w-12 h-3 bg-blue-50 rounded-full" />
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 p-4 flex flex-col gap-4">
                            {/* User Bubble */}
                            <div className="self-end w-3/4 h-8 bg-zinc-100 rounded-t-xl rounded-bl-xl rounded-br-sm border border-zinc-200/50" />
                            
                            {/* AI Bubble (Streams in) */}
                            <div className="self-start w-5/6 flex gap-3">
                                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0 flex items-center justify-center shadow-md">
                                    <div className="w-2 h-2 bg-white rounded-sm animate-pulse" />
                                </div>
                                <div className="flex-1 bg-blue-50/50 rounded-t-xl rounded-br-xl rounded-bl-sm border border-blue-100/50 p-3">
                                    {/* Streaming Lines */}
                                    <div className="w-full h-2 bg-blue-200/50 rounded-full mb-2" />
                                    <div className="w-[80%] h-2 bg-blue-200/50 rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300" />
                                    <div className="w-[40%] h-2 bg-blue-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500 relative">
                                        {/* Cursor */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-blue-500 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity delay-700" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Data Particles flowing into AI */}
                        <div className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                            <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-[ping_1s_ease-out_infinite]" />
                            <div className="absolute top-4 left-4 w-1 h-1 bg-indigo-400 rounded-full animate-[ping_1.5s_ease-out_infinite_0.5s]" />
                            <div className="absolute top-2 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-[ping_1.2s_ease-out_infinite_0.2s]" />
                        </div>
                    </div>
                </div>
            );
        case "nexus-banking":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50/50 overflow-hidden group-hover:bg-blue-100/50 transition-colors duration-1000">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_70%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-40" />
                    
                    {/* Holographic NFC Credit Card */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                        
                        {/* NFC Radio Waves Background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300">
                            <div className="absolute w-32 h-32 border-2 border-blue-400/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                            <div className="absolute w-48 h-48 border-2 border-blue-400/20 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                            <div className="absolute w-64 h-64 border-2 border-blue-400/10 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                        </div>

                        {/* Floating Card */}
                        <div className="relative w-64 h-40 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(29,78,216,0.15)] transform rotate-x-[20deg] rotate-y-[-20deg] group-hover:rotate-x-[0deg] group-hover:rotate-y-[0deg] group-hover:scale-110 transition-all duration-[1500ms] preserve-3d overflow-hidden z-20">
                            
                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" />
                            
                            <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                {/* Top Row */}
                                <div className="flex justify-between items-start">
                                    {/* Holographic Chip */}
                                    <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600 flex flex-wrap p-1 gap-0.5 shadow-inner">
                                        <div className="w-[45%] h-[45%] border border-yellow-800/20 rounded-sm" />
                                        <div className="w-[45%] h-[45%] border border-yellow-800/20 rounded-sm" />
                                        <div className="w-[45%] h-[45%] border border-yellow-800/20 rounded-sm" />
                                        <div className="w-[45%] h-[45%] border border-yellow-800/20 rounded-sm" />
                                    </div>
                                    
                                    {/* Tap to Pay Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white drop-shadow-md opacity-70 group-hover:opacity-100 group-hover:animate-pulse">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 12a3.5 3.5 0 017 0M10.5 12a1.5 1.5 0 013 0" />
                                    </svg>
                                </div>

                                {/* Bottom Row */}
                                <div>
                                    <div className="flex gap-4 mb-2">
                                        <div className="text-white/80 font-mono text-lg tracking-[0.2em] drop-shadow-sm">••••</div>
                                        <div className="text-white/80 font-mono text-lg tracking-[0.2em] drop-shadow-sm">••••</div>
                                        <div className="text-white/80 font-mono text-lg tracking-[0.2em] drop-shadow-sm">••••</div>
                                        <div className="text-white font-mono text-lg tracking-[0.2em] drop-shadow-sm font-bold">4289</div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-white/80 text-xs font-semibold tracking-widest uppercase drop-shadow-sm">Nexus Premium</div>
                                        {/* Fake Mastercard/Visa circles */}
                                        <div className="flex">
                                            <div className="w-6 h-6 rounded-full bg-red-500/80 mix-blend-multiply" />
                                            <div className="w-6 h-6 rounded-full bg-yellow-500/80 mix-blend-multiply -ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Coins / Tokens */}
                        <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-indigo-500 shadow-xl transform translate-x-24 -translate-y-16 rotate-y-[30deg] group-hover:-translate-y-24 group-hover:rotate-y-[0deg] transition-all duration-[1500ms] delay-100 flex items-center justify-center border border-white/40 z-10">
                            <div className="text-white font-black text-xl">$</div>
                        </div>
                        <div className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 shadow-xl transform -translate-x-28 translate-y-16 rotate-y-[-30deg] group-hover:translate-y-24 group-hover:rotate-y-[0deg] transition-all duration-[1500ms] delay-200 border border-white/40 z-30" />
                    </div>
                </div>
            );
        default:
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-zinc-200 shadow-sm" />
                </div>
            );
    }
}

export { ProjectIllustration };
