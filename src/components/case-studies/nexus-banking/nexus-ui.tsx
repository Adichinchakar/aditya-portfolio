"use client";

import React from "react";
import { motion } from "@/lib/motion";

function BrowserFrame({ url, children, label, variant }: { url: string; children: React.ReactNode; label: string; variant: "before" | "after" }) {
    const isBefore = variant === "before";
    return (
        <div className="flex flex-col gap-3">
            <div className={`inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest ${isBefore ? "text-red-400" : "text-emerald-500"}`}>
                <div className={`w-2 h-2 rounded-full ${isBefore ? "bg-red-400" : "bg-emerald-500"}`} />
                {label}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-zinc-200">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 border-b border-zinc-200">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/70" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="flex-1 mx-3">
                        <div className="bg-white border border-zinc-200 rounded-md px-3 py-1 text-[10px] font-mono text-zinc-400 text-center max-w-[200px] mx-auto">{url}</div>
                    </div>
                </div>
                <div className="bg-white">{children}</div>
            </div>
        </div>
    );
}

function Callout({ text, variant }: { text: string; variant: "before" | "after" }) {
    const isBefore = variant === "before";
    return (
        <div className={`flex items-start gap-2 text-[11px] font-mono leading-relaxed ${isBefore ? "text-red-400" : "text-emerald-600"}`}>
            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${isBefore ? "bg-red-400" : "bg-emerald-500"}`} />
            {text}
        </div>
    );
}

function BeforeDashboard() {
    const navItems = ["Home", "Send Money", "Cards", "Invest", "Loans", "Insurance", "Offers", "Rewards", "Cashback", "Support", "Profile", "KYC"];
    return (
        <BrowserFrame url="neobank.app/dashboard" label="Before — V1 Super-App" variant="before">
            {/* Cluttered top nav */}
            <div className="flex flex-wrap gap-1.5 px-4 py-3 border-b border-zinc-100 bg-zinc-50">
                {navItems.map((n, i) => (
                    <span
                        key={n}
                        className="text-[10px] px-2.5 py-1 rounded-md font-medium border"
                        style={{
                            background: i === 0 ? "#f59e0b" : "#fff",
                            color: i === 0 ? "#000" : "#52525b",
                            fontWeight: i < 3 ? "700" : "400",
                            borderColor: i === 0 ? "#f59e0b" : "#e4e4e7",
                        }}
                    >
                        {n}
                        {i < 2 && <span className="ml-1 text-red-400 text-[8px]">⬤</span>}
                    </span>
                ))}
            </div>

            <div className="p-4 grid grid-cols-3 gap-3">
                {/* Balance card — buried */}
                <div className="col-span-2 rounded-2xl p-4 bg-zinc-50 border border-zinc-200">
                    <div className="text-[10px] text-zinc-400 mb-1">Total Available Balance</div>
                    <div className="text-2xl font-black text-zinc-900">₹84,230.50</div>
                    <div className="text-[10px] text-zinc-400 mt-1 mb-3">Last updated 2 min ago · Acc No. ··5821</div>
                    <div className="flex gap-1.5">
                        {["Send Money", "Add Money", "Pay Bills", "Request"].map((a) => (
                            <div key={a} className="flex-1 text-center text-[8px] font-bold py-1.5 rounded-lg bg-amber-400 text-zinc-900">{a}</div>
                        ))}
                    </div>
                </div>

                {/* Competing widgets */}
                <div className="flex flex-col gap-2">
                    {["Cashback", "Offers!", "Credit Score"].map((w, i) => (
                        <div key={w} className="rounded-xl p-2.5 bg-zinc-50 border border-zinc-200">
                            <div className="text-[9px] text-zinc-400">{w}</div>
                            <div className="text-sm font-black text-amber-500 mt-0.5">{["₹240", "14 live", "748"][i]}</div>
                        </div>
                    ))}
                </div>

                {/* Feature grid overload */}
                {["Loans", "Insurance", "Investments", "Spends Tracker", "EMI Manager", "Utility Bills", "FD / RD", "Mutual Funds", "Gold Savings"].map((w) => (
                    <div key={w} className="rounded-xl p-2.5 bg-white border border-zinc-100">
                        <div className="text-[9px] text-zinc-400">{w}</div>
                        <div className="text-[11px] text-zinc-500 font-semibold mt-0.5">View →</div>
                    </div>
                ))}
            </div>

            <div className="px-4 pb-4 pt-2 space-y-1.5 border-t border-zinc-100 bg-zinc-50/60">
                <Callout text="12 nav items above the fold — avg 62ms decision latency" variant="before" />
                <Callout text="4 competing CTAs — Send Money takes 8+ taps to complete" variant="before" />
                <Callout text="9 widgets — visual noise index 0.87 (Figma audit)" variant="before" />
                <Callout text="No trust signals — missing RBI badge & encryption indicator" variant="before" />
            </div>
        </BrowserFrame>
    );
}

export function AfterDashboard() {
    return (
        <BrowserFrame url="neobank.app/home" label="After — Trust-First Redesign" variant="after">
            {/* Clean 4-item nav */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-100">
                <div className="flex gap-6">
                    {["Home", "Money", "Cards", "Invest"].map((n, i) => (
                        <span
                            key={n}
                            className="text-sm font-semibold pb-1.5"
                            style={{
                                color: i === 0 ? "#18181b" : "#a1a1aa",
                                borderBottom: i === 0 ? "2px solid #18181b" : "2px solid transparent",
                            }}
                        >
                            {n}
                        </span>
                    ))}
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 overflow-hidden flex items-center justify-center text-xs font-bold text-zinc-500">AC</div>
            </div>

            <div className="px-6 py-5">
                {/* Greeting */}
                <div className="text-sm text-zinc-400 mb-4">Good morning, Aditya ☀️</div>

                {/* Balance card */}
                <div className="rounded-2xl bg-zinc-900 p-5 mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-amber-400/10 blur-2xl" />
                    <div className="relative z-10">
                        <div className="text-xs text-zinc-400 mb-1">Total Balance</div>
                        <div className="text-3xl font-black text-white tracking-tight mb-1">₹84,230</div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-xs text-emerald-400 font-medium">+₹2,400 this month · On track</span>
                        </div>
                    </div>
                </div>

                {/* Single primary CTA */}
                <div className="w-full py-3.5 rounded-2xl text-zinc-900 text-sm font-black text-center cursor-pointer mb-4 bg-amber-400 hover:bg-amber-300 transition-colors">
                    Send Money
                </div>

                {/* 4 secondary actions */}
                <div className="grid grid-cols-4 gap-3 mb-5">
                    {[
                        { label: "Add Money", icon: "+" },
                        { label: "Pay Bills", icon: "⚡" },
                        { label: "Invest", icon: "↗" },
                        { label: "More", icon: "⋯" },
                    ].map((a) => (
                        <div key={a.label} className="flex flex-col items-center gap-1.5">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-lg text-zinc-600">
                                {a.icon}
                            </div>
                            <span className="text-[10px] text-zinc-400 font-medium">{a.label}</span>
                        </div>
                    ))}
                </div>

                {/* Trust signal */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-4 bg-emerald-50 border border-emerald-100">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1L12 3.5V7C12 9.8 9.5 12 7 13C4.5 12 2 9.8 2 7V3.5L7 1Z" stroke="#059669" strokeWidth="1.2" fill="none" />
                            <path d="M5 7l1.5 1.5L9.5 5" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xs font-bold text-emerald-800">RBI Regulated · DICGC Insured</div>
                        <div className="text-[10px] text-emerald-600">Deposits insured up to ₹5 Lakh · 256-bit AES</div>
                    </div>
                </div>

                {/* Recent transactions */}
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Recent</div>
                {[
                    { name: "Swiggy", sub: "Food delivery", amount: "−₹340", positive: false, initial: "S", color: "bg-orange-50 text-orange-500" },
                    { name: "Salary Credit", sub: "HDFC Payroll", amount: "+₹52,000", positive: true, initial: "₹", color: "bg-emerald-50 text-emerald-600" },
                    { name: "Netflix", sub: "Subscription", amount: "−₹649", positive: false, initial: "N", color: "bg-red-50 text-red-400" },
                ].map((t) => (
                    <div key={t.name} className="flex items-center justify-between py-2.5 border-b border-zinc-50 last:border-0">
                        <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold ${t.color}`}>{t.initial}</div>
                            <div>
                                <div className="text-xs font-semibold text-zinc-800">{t.name}</div>
                                <div className="text-[10px] text-zinc-400">{t.sub}</div>
                            </div>
                        </div>
                        <span className={`text-sm font-bold ${t.positive ? "text-emerald-600" : "text-zinc-700"}`}>{t.amount}</span>
                    </div>
                ))}
            </div>

            <div className="px-6 pb-4 pt-2 space-y-1.5 border-t border-zinc-100 bg-zinc-50/60">
                <Callout text="4 nav items — decision latency: 62ms → 18ms (heuristic)" variant="after" />
                <Callout text="1 primary CTA — Send Money in 3 taps vs. 8+ in V1" variant="after" />
                <Callout text="−60% visual token count vs. V1 (Figma token audit)" variant="after" />
                <Callout text="Trust signal above the fold — regulatory badge visible without scroll" variant="after" />
            </div>
        </BrowserFrame>
    );
}

export function NexusUI() {
    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
            >
                <p className="text-xs font-mono font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">02 — Design Audit</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">The Super-App Paradox</h2>
                <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
                    Tier-1 neobanks added features in place of trust. A cognitive load audit across 14 core flows — mapped against Nielsen heuristics and competitor teardowns of Revolut, Jupiter, and Fi Money — revealed a single root cause: no hierarchy of intent.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <BeforeDashboard />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <AfterDashboard />
                </motion.div>
            </div>

            {/* Metrics */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
                {[
                    { stat: "−25%", label: "Support ticket volume", note: "Directional target · Trust hypothesis" },
                    { stat: "+40%", label: "Task completion speed", note: "Directional target · Velocity hypothesis" },
                    { stat: "−60%", label: "Visual token count", note: "Measured via Figma token audit" },
                    { stat: "4 → 1", label: "CTAs on home screen", note: "Direct reduction · V1 → V2 baseline" },
                ].map((m) => (
                    <div key={m.stat} className="rounded-2xl p-4 border border-zinc-800 bg-zinc-900/60">
                        <div className="text-2xl font-black text-amber-400 mb-1">{m.stat}</div>
                        <div className="text-xs font-semibold text-zinc-300 mb-1">{m.label}</div>
                        <div className="text-[10px] text-zinc-500 font-mono leading-relaxed">{m.note}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
