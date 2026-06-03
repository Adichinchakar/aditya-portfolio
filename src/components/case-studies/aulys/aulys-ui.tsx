"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";

const GREEN = "#00BC7C"; // Using the color from the user's SVG

function AulysLogo({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 128 106" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M61.6982 10.0812C75.1001 9.44539 75.2754 12.4175 80.8997 23.4662L118 95.5453C112.67 95.6015 106.321 96.0207 101.144 94.9411C97.7722 94.2378 95.4385 88.1796 93.9116 85.1711L87.9193 73.4022L65.0721 28.8272L64.146 27.1631C63.2026 29.2586 61.5496 32.2502 60.4668 34.364L53.124 48.7154L39.1459 75.928C36.683 80.72 32.8562 89.686 30.6221 94.2303C29.591 96.3277 10 95.9782 10 95.9782L47.9697 22.3418C51.9076 14.6116 52.2777 10.9168 61.6982 10.0812Z" fill="currentColor"/>
            <path d="M50.9006 76.4027C60.5242 76.4027 71.5227 76.4032 81.1464 76.4029C82.3369 79.6171 84.3806 85.878 84.6639 89.358C84.9751 93.1817 83.5523 95.9782 75.6471 95.9782H53.3065C49.1821 95.9782 44.7139 95.9782 40.5895 95.9782C42.8461 90.7806 46.5323 81.6215 48.9746 76.4242L50.9006 76.4027Z" fill="currentColor"/>
            <path d="M62.6225 54.5018C66.6223 53.6239 70.5664 56.2033 71.4414 60.2695C72.3164 64.3357 69.7923 68.3554 65.7977 69.2575C61.7864 70.1636 57.8144 67.5829 56.9356 63.4994C56.0569 59.4162 58.6058 55.3835 62.6225 54.5018Z" fill="currentColor"/>
        </svg>
    );
}

function Header() {
    return (
        <>
            <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-900 text-white rounded-t-xl">
                <div className="flex items-center gap-2">
                    <div className="text-[#00BC7C]">
                        <AulysLogo className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide">Aulys (Beta)</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                    <button aria-label="Settings" className="hover:text-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </button>
                    <button aria-label="Close" className="hover:text-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-zinc-100 shadow-sm relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#00BC7C]">
                        <AulysLogo className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-zinc-900 leading-tight">Aulys</div>
                        <div className="text-[11px] font-medium text-zinc-600">WCAG 2.2 AA Compliant</div>
                    </div>
                </div>
                <div className="px-2.5 py-1 bg-[#00BC7C] rounded-full">
                    <span className="text-[10px] font-bold text-emerald-950 tracking-wider">PRO</span>
                </div>
            </div>
        </>
    );
}

function AuditTab() {
    return (
        <div className="flex flex-col h-full bg-white animate-in fade-in duration-300">
            <div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded border border-zinc-200 bg-white flex items-center justify-center shadow-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="3" y1="9" x2="21" y2="9"/>
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-zinc-800">Aulys Frame</div>
                        <div className="text-[10px] text-zinc-600 font-medium tracking-wide">FRAME</div>
                    </div>
                </div>
                <button className="w-7 h-7 rounded bg-white border border-zinc-200 shadow-sm flex items-center justify-center hover:bg-zinc-50 hover:border-zinc-300 transition-all text-zinc-600" aria-label="Refresh Scan">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-8.21l5.67-5.67"/></svg>
                </button>
            </div>

            <div className="flex-1 pb-4 overflow-y-auto" tabIndex={0}>
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 px-2.5 py-1 bg-green-100 rounded-full w-fit">
                            <span className="text-[11px] font-medium text-green-800">6 active rules</span>
                        </div>
                        <div className="text-xs font-semibold text-zinc-800 bg-zinc-100 px-2 py-1 rounded">38 Issues</div>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-red-200 transition-colors cursor-pointer group">
                            <div className="flex items-center justify-between py-1 mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    <span className="text-xs font-bold text-zinc-600 tracking-wider">CRITICAL</span>
                                    <span className="text-xs text-zinc-500 font-medium">4/4</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded flex items-center justify-center bg-[#00BC7C]">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#00BC7C]">Auto-Fix</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 mt-3">
                                <div className="flex items-center justify-center w-5 h-5 text-zinc-500 mt-0.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-zinc-800 leading-tight">Contrast Ratio</div>
                                    <div className="text-xs text-zinc-600 mt-1 leading-relaxed">Text has insufficient contrast with background (3.2:1 vs 4.5:1 AA).</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-amber-200 transition-colors cursor-pointer group">
                            <div className="flex items-center justify-between py-1 mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    <span className="text-xs font-bold text-zinc-600 tracking-wider">IMPORTANT</span>
                                    <span className="text-xs text-zinc-500 font-medium">2/5</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded flex items-center justify-center bg-[#00BC7C]">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <span className="text-[11px] font-bold text-[#00BC7C]">Auto-Fix</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 mt-3">
                                <div className="flex items-center justify-center w-5 h-5 text-zinc-500 mt-0.5">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-zinc-800 leading-tight">Missing Alt Text</div>
                                    <div className="text-xs text-zinc-600 mt-1 leading-relaxed">Image elements must have descriptive alternative text.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 mt-2">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-[11px] font-bold text-zinc-600 tracking-wider">RECENT SCANS</div>
                        <div className="text-[11px] text-zinc-600 font-medium cursor-pointer hover:text-zinc-800 transition-colors">Clear All</div>
                    </div>
                    <div className="space-y-2">
                        {[
                            { name: "Dashboard Wireframes", date: "2m ago", level: "AA" },
                            { name: "Login Flow V2", date: "1h ago", level: "AA" },
                            { name: "Settings Screen", date: "3h ago", level: "A" }
                        ].map((s, i) => (
                            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-50 cursor-pointer transition-colors border border-transparent hover:border-zinc-200">
                                <div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-500">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-bold text-zinc-800 truncate mb-0.5">{s.name}</div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[11px] font-medium text-zinc-600">{s.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                        <span className="text-[10px] font-bold text-zinc-700 bg-zinc-100 border border-zinc-200 rounded px-1">{s.level}</span>
                                    </div>
                                </div>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function EmptyTab({ title }: { title: string }) {
    return (
        <div className="flex flex-col h-full bg-white items-center justify-center px-6 text-center text-zinc-500 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-400">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>
            <h3 className="text-sm font-bold text-zinc-900 mb-1">{title} Module</h3>
            <p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">
                This feature is fully detailed in the case study below.
            </p>
        </div>
    );
}

export function AulysUI() {
    const [activeTab, setActiveTab] = useState("audit");

    const TABS = [
        {
            id: "audit",
            label: "Audit",
            icon: ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 12l5 5 14-14" />
                </svg>
            ),
        },
        {
            id: "tokens",
            label: "Tokens",
            icon: ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="2" />
                    <rect x="14" y="3" width="7" height="7" rx="2" />
                    <rect x="3" y="14" width="7" height="7" rx="2" />
                    <rect x="14" y="14" width="7" height="7" rx="2" />
                </svg>
            ),
        },
        {
            id: "code",
            label: "Code",
            icon: ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
        },
        {
            id: "issues",
            label: "Issues",
            icon: ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            ),
        },
        {
            id: "guide",
            label: "Guide",
            icon: ({ className, strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) => (
                <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
            ),
        }
    ];

    return (
        <div 
            className="rounded-xl overflow-hidden flex flex-col flex-shrink-0 border border-zinc-200/50 shadow-2xl relative"
            style={{ width: 340, height: 680, backgroundColor: "#fff" }}
        >
            <Header />
            
            <div className="flex-1 relative overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                    >
                        {activeTab === "audit" ? <AuditTab /> : <EmptyTab title={TABS.find(t => t.id === activeTab)?.label || ""} />}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pointer Icon guiding the user */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-50"
            >
                <div className="bg-zinc-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg mb-2 tracking-wide flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Click tabs to interact
                </div>
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#18181b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
                        <path d="M22 14a8 8 0 0 1-8 8" />
                        <path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                        <path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                        <path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
                        <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Bottom Navigation */}
            <div className="flex items-center justify-between border-t border-zinc-100 bg-white relative z-10 px-2">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = tab.id === activeTab;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 flex flex-col items-center gap-1.5 py-3 transition-colors ${
                                isActive ? "text-[#00BC7C]" : "text-zinc-500 hover:text-zinc-700"
                            }`}
                        >
                            <Icon className="w-5 h-5 mb-0.5" strokeWidth={isActive ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{tab.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}