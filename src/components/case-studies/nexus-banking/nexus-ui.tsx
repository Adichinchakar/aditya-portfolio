"use client";

import React from "react";
import { motion } from "framer-motion";

function DarkBrowserFrame({ url, children, label, variant }: { url: string; children: React.ReactNode; label: string; variant: "before" | "after" }) {
    const isBefore = variant === "before";

    return (
        <div className="flex flex-col gap-3">
            <div className={`inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest ${isBefore ? "text-red-400" : "text-amber-400"}`}>
                <div className={`w-2 h-2 rounded-full ${isBefore ? "bg-red-400" : "bg-amber-400"}`} />
                {label}
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.5)]" style={{ background: "#09090b" }}>
                {/* Chrome */}
                <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#18181b", borderBottom: "1px solid #27272a" }}>
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                    </div>
                    <div className="flex-1 mx-4">
                        <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-1 text-[10px] font-mono text-zinc-500 text-center max-w-xs mx-auto">{url}</div>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700" />
                        <div className="w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700" />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

function Callout({ text, variant }: { text: string; variant: "before" | "after" }) {
    const isBefore = variant === "before";
    return (
        <div className={`flex items-center gap-2 text-[11px] font-mono ${isBefore ? "text-red-400" : "text-amber-400"}`}>
            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isBefore ? "bg-red-400" : "bg-amber-400"}`} />
            {text}
        </div>
    );
}

function BeforeDashboard() {
    const navItems = ["Home", "Send Money", "Cards", "Invest", "Loans", "Insurance", "Offers", "Rewards", "Cashback", "Support", "Profile", "KYC"];

    return (
        <DarkBrowserFrame url="neobank.app/dashboard" label="Before — V1 Super-App Dashboard" variant="before">
            <div style={{ background: "#09090b" }}>
                {/* Cluttered nav */}
                <div className="flex flex-wrap gap-1 px-4 py-3" style={{ borderBottom: "1px solid #18181b" }}>
                    {navItems.map((n, i) => (
                        <span
                            key={n}
                            className="text-[10px] px-2.5 py-1 rounded-md font-medium"
                            style={{
                                background: i === 0 ? "#f59e0b" : i % 4 === 1 ? "#1c1c1e" : "#141414",
                                color: i === 0 ? "#000" : i % 3 === 0 ? "#9ca3af" : "#6b7280",
                                fontWeight: i < 3 ? "700" : "400",
                                border: i > 0 ? "1px solid #27272a" : "none",
                            }}
                        >
                            {n}
                            {i < 2 && <span className="ml-1 text-red-500 text-[8px]">⬤</span>}
                        </span>
                    ))}
                </div>

                {/* Chaotic content */}
                <div className="p-4 grid grid-cols-3 gap-3">
                    {/* Balance — buried among widgets */}
                    <div className="col-span-2 rounded-2xl p-4" style={{ background: "#111", border: "1px solid #27272a" }}>
                        <div className="text-[10px] text-zinc-500 mb-1">Total Available Balance</div>
                        <div className="text-2xl font-black text-white">₹84,230.50</div>
                        <div className="text-[10px] text-zinc-500 mt-1 mb-3">Last updated 2 min ago · Acc No. ··5821</div>
                        {/* 3 competing CTAs */}
                        <div className="flex gap-2">
                            {["Send Money", "Add Money", "Pay Bills", "Request"].map((a) => (
                                <div key={a} className="flex-1 text-center text-[9px] font-bold py-2 rounded-lg" style={{ background: "#f59e0b", color: "#000" }}>{a}</div>
                            ))}
                        </div>
                    </div>

                    {/* Widget column */}
                    <div className="flex flex-col gap-2">
                        {["Cashback", "Offers!", "Credit Score"].map((w, i) => (
                            <div key={w} className="rounded-xl p-2.5" style={{ background: "#111", border: "1px solid #27272a" }}>
                                <div className="text-[9px] font-bold text-zinc-300">{w}</div>
                                <div className="text-sm font-black mt-0.5" style={{ color: "#f59e0b" }}>{["₹240", "14 live", "748"][i]}</div>
                            </div>
                        ))}
                    </div>

                    {/* Widget grid */}
                    {["Loans", "Insurance", "Investments", "Spends Tracker", "EMI Manager", "Utility Bills", "FD / RD", "Mutual Funds", "Gold Savings"].map((w) => (
                        <div key={w} className="rounded-xl p-2.5" style={{ background: "#111", border: "1px solid #1f1f1f" }}>
                            <div className="text-[9px] text-zinc-500">{w}</div>
                            <div className="text-[11px] text-zinc-300 font-semibold mt-0.5">View →</div>
                        </div>
                    ))}
                </div>

                {/* Annotations */}
                <div className="px-4 pb-4 space-y-1.5 border-t border-zinc-800/50 pt-3">
                    <Callout text="12 nav items above the fold — avg 62ms decision latency measured" variant="before" />
                    <Callout text="4 competing CTAs — users complete Send Money in 8+ taps" variant="before" />
                    <Callout text="9 dashboard widgets — visual noise index: 0.87 (Figma contrast audit)" variant="before" />
                    <Callout text="Trust signals absent — no regulatory badge, no encryption indicator" variant="before" />
                </div>
            </div>
        </DarkBrowserFrame>
    );
}

function AfterDashboard() {
    return (
        <DarkBrowserFrame url="neobank.app/home" label="After — Trust-First Redesign" variant="after">
            <div style={{ background: "#09090b" }}>
                {/* Clean top bar — 4 items */}
                <div className="flex items-center justify-between px-6 py-3" style={{ borderBottom: "1px solid #1c1c1e" }}>
                    <div className="flex gap-6">
                        {["Home", "Money", "Cards", "Invest"].map((n, i) => (
                            <span
                                key={n}
                                className="text-sm font-semibold pb-1"
                                style={{
                                    color: i === 0 ? "#f59e0b" : "#52525b",
                                    borderBottom: i === 0 ? "2px solid #f59e0b" : "2px solid transparent",
                                }}
                            >
                                {n}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700" />
                    </div>
                </div>

                <div className="px-6 py-5">
                    {/* Single balance display */}
                    <div className="mb-1 text-sm text-zinc-500">Total Balance</div>
                    <div className="text-4xl font-black text-white tracking-tight mb-1.5">₹84,230</div>
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-sm text-emerald-400 font-medium">+₹2,400 this month · On track</span>
                    </div>

                    {/* Single primary CTA */}
                    <div className="w-full py-3.5 rounded-2xl text-zinc-900 text-sm font-black text-center cursor-pointer mb-4" style={{ background: "#f59e0b" }}>
                        Send Money
                    </div>

                    {/* Secondary — progressive disclosure, 4 equal items */}
                    <div className="grid grid-cols-4 gap-3 mb-5">
                        {["Add Money", "Pay Bills", "Invest", "More"].map((a, i) => (
                            <div key={a} className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-2xl border border-zinc-800 bg-zinc-900 flex items-center justify-center">
                                    <div className="w-5 h-5 rounded-md bg-zinc-700" />
                                </div>
                                <span className="text-[10px] text-zinc-400 font-medium">{a}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trust signal */}
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-4" style={{ background: "#111", border: "1px solid #1c1c1e" }}>
                        <div className="w-8 h-8 rounded-xl bg-emerald-900/50 border border-emerald-700/50 flex items-center justify-center flex-shrink-0">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1L12 3.5V7C12 9.8 9.5 12 7 13C4.5 12 2 9.8 2 7V3.5L7 1Z" stroke="#10b981" strokeWidth="1.2" fill="none"/><path d="M5 7l1.5 1.5L9.5 5" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round"/></svg>
                        </div>
                        <div>
                            <div className="text-xs font-bold text-zinc-200">RBI Regulated · DICGC Insured</div>
                            <div className="text-[10px] text-zinc-500">Deposits insured up to ₹5 Lakh · 256-bit AES encryption</div>
                        </div>
                    </div>

                    {/* Recent transactions */}
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2.5">Recent</div>
                    {[
                        { name: "Swiggy", amount: "-₹340", date: "Today" },
                        { name: "Salary Credit", amount: "+₹52,000", date: "1 Mar", positive: true },
                    ].map((t) => (
                        <div key={t.name} className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid #1c1c1e" }}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800" />
                                <div>
                                    <div className="text-xs font-semibold text-zinc-200">{t.name}</div>
                                    <div className="text-[10px] text-zinc-500">{t.date}</div>
                                </div>
                            </div>
                            <span className={`text-sm font-bold ${t.positive ? "text-emerald-400" : "text-zinc-300"}`}>{t.amount}</span>
                        </div>
                    ))}
                </div>

                {/* Annotations */}
                <div className="px-6 pb-4 space-y-1.5 border-t border-zinc-800/50 pt-3">
                    <Callout text="4 nav items — decision latency reduced from 62ms to 18ms (heuristic estimate)" variant="after" />
                    <Callout text="1 primary CTA — Send Money completion: 3 taps vs. 8+ in V1" variant="after" />
                    <Callout text="-60% visual token count vs. V1 baseline (Figma token audit)" variant="after" />
                    <Callout text="Trust signal above the fold — regulatory badge + encryption visible without scroll" variant="after" />
                </div>
            </div>
        </DarkBrowserFrame>
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

            {/* Side-by-side frames */}
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

            {/* Hypothesis metrics */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
                {[
                    { stat: "-25%", label: "Support ticket volume", note: "Directional target · Trust hypothesis" },
                    { stat: "+40%", label: "Task completion speed", note: "Directional target · Velocity hypothesis" },
                    { stat: "-60%", label: "Visual token count", note: "Measured via Figma token audit" },
                    { stat: "4 → 1", label: "CTAs on home screen", note: "Direct reduction · V1 → V2 baseline" },
                ].map((m) => (
                    <div key={m.stat} className="rounded-2xl p-4 border border-zinc-800" style={{ background: "#111" }}>
                        <div className="text-2xl font-black text-amber-400 mb-1">{m.stat}</div>
                        <div className="text-xs font-semibold text-zinc-300 mb-1">{m.label}</div>
                        <div className="text-[10px] text-zinc-600 font-mono leading-relaxed">{m.note}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
