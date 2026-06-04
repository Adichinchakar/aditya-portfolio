"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";

/* ─── iOS Mobile Wrapper ───────────────────────────────── */
function IOSWrapper({ children, theme = "dark" }: { children: React.ReactNode, theme?: "light" | "dark" }) {
    const isDark = theme === "dark";
    return (
        <div className="relative w-[340px] h-[720px] rounded-[48px] shadow-[0_0_0_12px_#09090b,0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden shrink-0 mx-auto" style={{ backgroundColor: isDark ? "#000" : "#fff" }}>
            {/* iOS Status Bar */}
            <div className="absolute top-0 w-full h-12 flex items-center justify-between px-7 z-50">
                <span className={`text-[13px] font-bold tracking-tight mt-1 ${isDark ? "text-white" : "text-black"}`}>9:41</span>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px]" />
                <div className={`flex items-center gap-1.5 mt-1 ${isDark ? "text-white" : "text-black"}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h20V2z"/></svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                </div>
            </div>

            {/* App Content */}
            <div className="w-full h-full relative z-10">{children}</div>

            {/* iOS Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-full z-50" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.8)" }} />
        </div>
    );
}

/* ─── Screen 1: Dashboard (Before Redesign) ────────────── */
function BeforeDashboard() {
    return (
        <IOSWrapper theme="light">
            <div className="w-full h-full bg-[#f4f6f8] pt-14 flex flex-col font-sans">
                {/* Header */}
                <div className="px-6 py-4 bg-white shadow-sm flex items-center justify-between">
                    <div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Total Balance</div>
                        <div className="text-3xl font-black text-gray-900 tracking-tight">$14,209.52</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">JD</div>
                </div>

                {/* Generic Actions */}
                <div className="grid grid-cols-4 gap-2 px-6 py-6 bg-white border-b border-gray-200">
                    {[
                        { label: "Send", icon: "↗" },
                        { label: "Request", icon: "↙" },
                        { label: "Top Up", icon: "+" },
                        { label: "More", icon: "..." },
                    ].map(a => (
                        <div key={a.label} className="flex flex-col items-center gap-2 cursor-pointer">
                            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl">{a.icon}</div>
                            <span className="text-xs text-gray-600 font-medium">{a.label}</span>
                        </div>
                    ))}
                </div>

                {/* Generic List */}
                <div className="flex-1 overflow-auto bg-[#f4f6f8]">
                    <div className="px-6 py-4 flex justify-between items-center">
                        <span className="font-bold text-gray-800">Recent Transactions</span>
                        <span className="text-sm text-blue-600 cursor-pointer">View All</span>
                    </div>
                    <div className="bg-white">
                        {[
                            { name: "Starbucks", date: "Today", amount: "-$4.50", type: "out" },
                            { name: "Direct Deposit", date: "Yesterday", amount: "+$2,500.00", type: "in" },
                            { name: "Uber Ride", date: "May 14", amount: "-$14.20", type: "out" },
                            { name: "Netflix Subscription", date: "May 12", amount: "-$15.99", type: "out" },
                            { name: "Whole Foods", date: "May 10", amount: "-$84.32", type: "out" },
                            { name: "Venmo Transfer", date: "May 08", amount: "+$45.00", type: "in" },
                            { name: "Target", date: "May 05", amount: "-$112.40", type: "out" },
                        ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${t.type === 'in' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800 text-[14px]">{t.name}</div>
                                        <div className="text-[12px] text-gray-500">{t.date}</div>
                                    </div>
                                </div>
                                <div className={`font-bold ${t.type === 'in' ? 'text-green-600' : 'text-gray-900'}`}>{t.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Generic Nav */}
                <div className="h-20 bg-white border-t border-gray-200 flex justify-around items-center px-4 pb-4">
                    {["Home", "Cards", "Invest", "Profile"].map((item, i) => (
                        <div key={item} className={`text-[10px] font-bold flex flex-col items-center gap-1 ${i === 0 ? "text-blue-600" : "text-gray-400"}`}>
                            <div className="w-6 h-6 rounded-full bg-current opacity-20 mb-1" />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </IOSWrapper>
    );
}

/* ─── Screen 2: Dashboard (After Redesign) ─────────────── */
export function AfterDashboard() {
    return (
        <IOSWrapper theme="dark">
            <div className="w-full h-full bg-black pt-16 flex flex-col font-sans relative overflow-hidden text-white">
                {/* Ambient glow */}
                <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

                {/* Header */}
                <div className="px-6 flex justify-between items-center mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 p-0.5 border border-white/20 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=JD&backgroundColor=transparent" alt="Avatar" className="w-full h-full object-cover bg-slate-800" />
                        </div>
                        <div>
                            <div className="text-[11px] text-white/50 uppercase tracking-widest font-bold">Good morning,</div>
                            <div className="text-[15px] font-bold tracking-tight">Johnathan</div>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center relative cursor-pointer backdrop-blur-md">
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                        <div className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    </div>
                </div>

                {/* Card Widget */}
                <div className="px-6 mb-6 relative z-10">
                    <div className="relative w-full h-[180px] rounded-2xl overflow-hidden p-6 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.02)" }}>
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-emerald-500/30 blur-[60px] rounded-full pointer-events-none" />
                        
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <div className="text-[11px] text-white/50 font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    Nexus Secure Card
                                </div>
                                <div className="text-3xl font-black tracking-tighter text-white flex items-center gap-1">
                                    <span className="text-white/40 font-normal">$</span>14,209<span className="text-white/40 text-xl">.52</span>
                                </div>
                            </div>
                            <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="none"><path d="M2 8.5C2 5.46243 4.46243 3 7.5 3H16.5C19.5376 3 22 5.46243 22 8.5V15.5C22 18.5376 19.5376 21 16.5 21H7.5C4.46243 21 2 18.5376 2 15.5V8.5Z" stroke="white" strokeWidth="1.5"/><circle cx="8" cy="12" r="3" fill="white" fillOpacity="0.5"/><circle cx="16" cy="12" r="3" fill="white" fillOpacity="0.5"/></svg>
                        </div>
                        
                        <div className="relative z-10 flex justify-between items-end">
                            <div className="flex gap-4 text-[13px] font-mono tracking-widest text-white/70">
                                <span>••••</span>
                                <span>••••</span>
                                <span>••••</span>
                                <span className="text-white">4092</span>
                            </div>
                            <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest">08/28</div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="px-6 grid grid-cols-4 gap-3 mb-6 relative z-10">
                    {[
                        { label: "Send", icon: "M5 12h14M12 5l7 7-7 7" },
                        { label: "Receive", icon: "M19 12H5M12 19l-7-7 7-7" },
                        { label: "Top Up", icon: "M12 5v14M5 12h14" },
                        { label: "Exchange", icon: "M17 1l4 4-4 4M7 23l-4-4 4-4M3 5h18M21 19H3" },
                    ].map((a, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-white/10 transition-colors shadow-inner">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={a.icon} />
                                </svg>
                            </div>
                            <span className="text-[11px] font-bold text-white/60">{a.label}</span>
                        </div>
                    ))}
                </div>

                {/* Activity List */}
                <div className="flex-1 bg-[#09090b] rounded-t-[32px] px-6 pt-6 pb-20 relative z-10 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex flex-col">
                    <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-white tracking-tight">Recent Activity</span>
                        <span className="text-[12px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">See All</span>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto space-y-4 pb-4">
                        {[
                            { name: "Apple", cat: "Electronics", date: "Today, 14:32", amount: "-$1,299.00", icon: "🍏", color: "bg-slate-800" },
                            { name: "Salary Deposit", cat: "Income", date: "Yesterday, 09:00", amount: "+$4,250.00", icon: "💼", color: "bg-emerald-900", in: true },
                            { name: "Uber", cat: "Transport", date: "May 14, 21:15", amount: "-$24.50", icon: "🚗", color: "bg-slate-800" },
                            { name: "Whole Foods", cat: "Groceries", date: "May 12, 18:40", amount: "-$142.30", icon: "🥑", color: "bg-slate-800" },
                            { name: "Transfer to Sarah", cat: "Peer to Peer", date: "May 10, 11:20", amount: "-$50.00", icon: "👩", color: "bg-slate-800" },
                        ].map((t, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-3.5">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border border-white/5 shadow-inner ${t.color}`}>
                                        {t.icon}
                                    </div>
                                    <div>
                                        <div className="font-bold text-[14px] text-white tracking-tight mb-0.5">{t.name}</div>
                                        <div className="text-[11px] font-medium text-white/40">{t.cat} • {t.date}</div>
                                    </div>
                                </div>
                                <div className={`font-bold tracking-tight ${t.in ? 'text-emerald-400' : 'text-white'}`}>{t.amount}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full h-24 bg-black/80 backdrop-blur-2xl border-t border-white/10 flex justify-around items-center px-4 pb-6 z-50">
                    {[
                        { label: "Home", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", active: true },
                        { label: "Stats", icon: "M18 20V10M12 20V4M6 20v-6", active: false },
                        { label: "Cards", icon: "M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z M1 10h22", active: false },
                        { label: "Profile", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", active: false },
                    ].map((item, i) => (
                        <div key={i} className={`flex flex-col items-center gap-1.5 ${item.active ? "text-white" : "text-white/30"}`}>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                {item.icon.split(' M').map((d, j) => <path key={j} d={d.trim()} />)}
                            </svg>
                            <div className={`w-1 h-1 rounded-full ${item.active ? "bg-white" : "bg-transparent"}`} />
                        </div>
                    ))}
                </div>
            </div>
        </IOSWrapper>
    );
}

/* ─── Main Component ───────────────────────────────────── */
export function NexusUI() {
    const [view, setView] = useState<"before" | "after">("after");

    return (
        <section className="py-24 px-6 bg-[#000000] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                            04c — Consumer FinTech
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                            Production-Grade Reality
                        </h2>
                        <p className="text-lg text-white/50 font-medium leading-relaxed">
                            A highly authentic B2C mobile banking interface wrapped in a realistic iOS device frame. Compares a generic white-label "Before" app with a hyper-premium, trust-inducing "After" redesign featuring Apple Card-style glowing gradients and dense transaction histories.
                        </p>
                    </div>

                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                        <button
                            onClick={() => setView("before")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "before" ? "bg-white text-black shadow-sm" : "text-white/50 hover:text-white"}`}
                        >
                            Before (Generic)
                        </button>
                        <button
                            onClick={() => setView("after")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "after" ? "bg-white text-black shadow-sm" : "text-white/50 hover:text-white"}`}
                        >
                            After (Premium)
                        </button>
                    </div>
                </motion.div>

                <div className="relative flex justify-center py-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={view}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {view === "before" ? <BeforeDashboard /> : <AfterDashboard />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
