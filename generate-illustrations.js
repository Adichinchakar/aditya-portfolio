const fs = require('fs');
const path = require('path');

const code = `"use client";

import { motion } from "@/lib/motion";

function ProjectIllustration({ slug }: { slug: string }) {
    switch (slug) {
        case "aulys":
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-50/50 overflow-hidden group-hover:bg-emerald-100/50 transition-colors duration-1000">
                    {/* Ambient Gradients - Aulys Colors */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,188,124,0.1),transparent_60%)]" aria-hidden="true" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,188,124,0.05),transparent_60%)]" aria-hidden="true" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00BC7C] opacity-5 blur-[100px] rounded-full group-hover:opacity-10 transition-opacity duration-700" aria-hidden="true" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.2] group-hover:opacity-[0.3] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(0,188,124,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,124,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    {/* Abstract illustration of layers being scanned */}
                    <div className="relative w-64 h-64 flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 perspective-[1000px]">
                        
                        {/* Layer 3 (Bottom) */}
                        <div className="absolute top-[60%] w-48 h-48 border border-[#00BC7C]/10 rounded-2xl bg-white/80 backdrop-blur-sm transform rotate-x-[60deg] rotate-z-[45deg] shadow-xl shadow-[#00BC7C]/5 transition-all duration-700 group-hover:-translate-y-2 preserve-3d"></div>
                        
                        {/* Layer 2 (Middle) */}
                        <div className="absolute top-[50%] w-48 h-48 border border-[#00BC7C]/20 rounded-2xl bg-white/90 backdrop-blur-md transform rotate-x-[60deg] rotate-z-[45deg] shadow-xl shadow-[#00BC7C]/10 transition-all duration-700 delay-75 group-hover:-translate-y-6 preserve-3d"></div>
                        
                        {/* Layer 1 (Top - Active Scan) */}
                        <div className="absolute top-[40%] w-48 h-48 border border-[#00BC7C]/40 rounded-2xl bg-white transform rotate-x-[60deg] rotate-z-[45deg] shadow-[0_20px_40px_rgba(0,188,124,0.15)] transition-all duration-700 delay-150 group-hover:-translate-y-10 overflow-hidden preserve-3d">
                            {/* Scanning laser line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C] to-transparent w-full h-1 opacity-50 blur-[1px] animate-[scan_2s_ease-in-out_infinite]" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BC7C]/10 to-transparent animate-[scan_2s_ease-in-out_infinite]" />
                        </div>

                        {/* Aulys Logo hovering above */}
                        <div className="absolute top-[15%] w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-2xl shadow-[#00BC7C]/20 flex items-center justify-center transition-all duration-700 delay-200 group-hover:-translate-y-12 z-20">
                            <svg viewBox="0 0 128 106" fill="none" className="w-8 h-8 text-[#00BC7C]" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61.6982 10.0812C75.1001 9.44539 75.2754 12.4175 80.8997 23.4662L118 95.5453C112.67 95.6015 106.321 96.0207 101.144 94.9411C97.7722 94.2378 95.4385 88.1796 93.9116 85.1711L87.9193 73.4022L65.0721 28.8272L64.146 27.1631C63.2026 29.2586 61.5496 32.2502 60.4668 34.364L53.124 48.7154L39.1459 75.928C36.683 80.72 32.8562 89.686 30.6221 94.2303C29.591 96.3277 10 95.9782 10 95.9782L47.9697 22.3418C51.9076 14.6116 52.2777 10.9168 61.6982 10.0812Z" fill="currentColor"/>
                                <path d="M50.9006 76.4027C60.5242 76.4027 71.5227 76.4032 81.1464 76.4029C82.3369 79.6171 84.3806 85.878 84.6639 89.358C84.9751 93.1817 83.5523 95.9782 75.6471 95.9782H53.3065C49.1821 95.9782 44.7139 95.9782 40.5895 95.9782C42.8461 90.7806 46.5323 81.6215 48.9746 76.4242L50.9006 76.4027Z" fill="currentColor"/>
                                <path d="M62.6225 54.5018C66.6223 53.6239 70.5664 56.2033 71.4414 60.2695C72.3164 64.3357 69.7923 68.3554 65.7977 69.2575C61.7864 70.1636 57.8144 67.5829 56.9356 63.4994C56.0569 59.4162 58.6058 55.3835 62.6225 54.5018Z" fill="currentColor"/>
                            </svg>
                        </div>
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
                        <svg className="absolute inset-0 w-full h-full" fill="none">
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-500/10 stroke-2" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-500/10 stroke-2" />
                            <path d="M 70% 30% L 85% 30%" className="stroke-orange-500/10 stroke-2" />
                            <path d="M 70% 70% L 85% 70%" className="stroke-orange-500/10 stroke-2" />
                            
                            {/* Animated pulses */}
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-400 stroke-2 opacity-0 group-hover:opacity-100 group-hover:animate-[dash_2s_linear_infinite]" strokeDasharray="20 100" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-400 stroke-2 opacity-0 group-hover:opacity-100 group-hover:animate-[dash_2s_linear_infinite] [animation-delay:1s]" strokeDasharray="20 100" />
                            
                            {/* Connection lines */}
                            <path d="M 30% 50% C 50% 50%, 50% 30%, 70% 30%" className="stroke-orange-400/50 stroke-[3px] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] ease-in-out" />
                            <path d="M 30% 50% C 50% 50%, 50% 70%, 70% 70%" className="stroke-orange-400/50 stroke-[3px] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] ease-in-out delay-150" />
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
                        <div className="flex-1 flex gap-3 transition-all duration-[1200ms] flex-row group-hover:flex-row-reverse">
                            {/* Sidebar */}
                            <div className="h-full bg-indigo-50/50 border border-indigo-100/50 rounded-xl transition-all duration-[1200ms] w-1/3 group-hover:w-1/4 p-2 flex flex-col gap-2">
                                <div className="w-full h-4 bg-indigo-100/80 rounded" />
                                <div className="w-3/4 h-4 bg-indigo-50 rounded" />
                                <div className="w-5/6 h-4 bg-indigo-50 rounded" />
                            </div>
                            
                            {/* Main Grid */}
                            <div className="flex-1 flex flex-col gap-3">
                                {/* Masonry Top */}
                                <div className="flex gap-3 h-20 transition-all duration-[1200ms]">
                                    <div className="h-full bg-indigo-500/5 border border-indigo-500/20 rounded-xl transition-all duration-[1200ms] w-[60%] group-hover:w-[40%] group-hover:bg-indigo-500/10" />
                                    <div className="h-full bg-indigo-50 border border-indigo-100/50 rounded-xl transition-all duration-[1200ms] flex-1 group-hover:bg-white" />
                                </div>
                                {/* Masonry Bottom */}
                                <div className="flex-1 bg-white border border-indigo-100 rounded-xl transition-all duration-[1200ms] shadow-sm flex items-center justify-center">
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
                    
                    {/* Biometric Encryption Scanner */}
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        
                        {/* Fingerprint Base (SVG Pattern) */}
                        <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-10 transition-opacity duration-1000" viewBox="0 0 100 100">
                            <path d="M50 20 Q 70 20 70 50 Q 70 80 50 80 Q 30 80 30 50 Q 30 20 50 20" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5" />
                            <path d="M50 30 Q 60 30 60 50 Q 60 70 50 70 Q 40 70 40 50 Q 40 30 50 30" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                            <circle cx="50" cy="50" r="5" fill="none" stroke="#10b981" strokeWidth="2" />
                        </svg>

                        {/* Scanning Laser */}
                        <div className="absolute top-0 w-full h-1 bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)] opacity-0 group-hover:opacity-100 transform -translate-y-12 group-hover:translate-y-[12rem] transition-all duration-[2000ms] ease-in-out z-20" />
                        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-transparent to-emerald-400/20 opacity-0 group-hover:opacity-100 transform -translate-y-12 group-hover:translate-y-[12rem] transition-all duration-[2000ms] ease-in-out z-10" />

                        {/* Unlocked Medical Cross (Draws on Hover) */}
                        <div className="relative z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[1000ms] drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                            <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <path d="M35 20 H 65 V 35 H 80 V 65 H 65 V 80 H 35 V 65 H 20 V 35 H 35 V 20 Z" className="stroke-emerald-500 stroke-[4] fill-white/80 stroke-dasharray-[300] stroke-dashoffset-[300] group-hover:stroke-dashoffset-[0] transition-all duration-[1500ms] delay-[1000ms] ease-out" />
                                <circle cx="50" cy="50" r="6" className="fill-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[2000ms]" />
                            </svg>
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
                    
                    {/* Financial Data Visualization */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[800px]">
                        
                        {/* Dynamic Wealth Curves */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="nexusLightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
                                </linearGradient>
                            </defs>
                            <path d="M 0 150 C 100 150, 150 80, 400 40" fill="none" stroke="url(#nexusLightGradient)" strokeWidth="4" className="drop-shadow-[0_4px_10px_rgba(59,130,246,0.3)] stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:animate-[dash_4s_ease-out_forwards]" />
                            <path d="M 0 180 C 150 180, 200 120, 400 90" fill="none" stroke="url(#nexusLightGradient)" strokeWidth="2" opacity="0.4" className="stroke-dasharray-[1000] stroke-dashoffset-[1000] group-hover:animate-[dash_4s_ease-out_forwards] [animation-delay:0.5s]" />
                        </svg>

                        {/* Floating Glass Cards */}
                        <div className="absolute w-40 h-24 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(59,130,246,0.1)] transform -translate-x-24 translate-y-12 rotate-y-[15deg] group-hover:-translate-y-4 group-hover:rotate-y-[0deg] transition-all duration-1000 flex flex-col p-4 justify-between z-10">
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                                </div>
                                <div className="h-1.5 w-8 bg-zinc-200 rounded-full" />
                            </div>
                            <div>
                                <div className="h-3 w-16 bg-zinc-800 rounded mb-1.5" />
                                <div className="h-2 w-10 bg-zinc-400 rounded" />
                            </div>
                        </div>

                        <div className="absolute w-48 h-28 rounded-2xl bg-white backdrop-blur-xl border border-blue-100 shadow-[0_15px_40px_rgba(59,130,246,0.15)] transform translate-x-20 -translate-y-8 -rotate-y-[15deg] group-hover:-translate-y-16 group-hover:rotate-y-[0deg] group-hover:scale-110 transition-all duration-1000 flex flex-col p-5 justify-between z-20">
                            <div className="flex justify-between items-start">
                                <div className="h-2 w-12 bg-blue-200 rounded-full" />
                                <div className="w-5 h-5 rounded-md border border-blue-200 flex items-center justify-center bg-blue-50">
                                    <div className="w-2 h-2 rounded-sm bg-blue-500" />
                                </div>
                            </div>
                            <div>
                                <div className="h-5 w-24 bg-zinc-800 rounded mb-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)]" />
                                <div className="flex gap-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                                </div>
                            </div>
                        </div>
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
`;

fs.writeFileSync(path.join(__dirname, 'src/components/work/project-illustration.tsx'), code);
console.log('Done');
