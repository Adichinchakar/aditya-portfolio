"use client";

import React from "react";
import { motion } from "framer-motion";

function BrowserFrame({ children, label, variant }: { children: React.ReactNode; label: string; variant: "before" | "after" }) {
    const colors = variant === "before"
        ? { dot1: "#ef4444", dot2: "#f59e0b", dot3: "#22c55e", bar: "#2a2a2a", url: "#3f3f46" }
        : { dot1: "#ef4444", dot2: "#f59e0b", dot3: "#22c55e", bar: "#1e1e1e", url: "#27272a" };

    return (
        <div className="flex flex-col gap-3">
            {/* Label above frame */}
            <div className={`flex items-center gap-2 ${variant === "before" ? "text-red-400" : "text-amber-400"}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${variant === "before" ? "bg-red-400" : "bg-amber-400"}`} />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">{label}</span>
            </div>

            <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-700" style={{ background: "#09090b" }}>
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: colors.bar }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <div className="ml-2 flex-1 rounded text-[9px] px-2 py-0.5 truncate" style={{ background: colors.url, color: "#71717a" }}>
                        {variant === "before" ? "neobank.app/dashboard" : "neobank.app/home"}
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

function Annotation({ text, variant }: { text: string; variant: "before" | "after" }) {
    return (
        <div className={`flex items-center gap-1 ${variant === "before" ? "text-red-400" : "text-amber-400"}`}>
            <div className={`w-1 h-1 rounded-full ${variant === "before" ? "bg-red-400" : "bg-amber-400"} flex-shrink-0`} />
            <span className="text-[8px] font-mono">{text}</span>
        </div>
    );
}

function BeforeDashboard() {
    const navItems = ["Home", "Send", "Cards", "Invest", "Loans", "Insurance", "Offers", "Rewards", "Help", "Settings", "Profile", "KYC"];

    return (
        <BrowserFrame label="Before — Cognitive Overload" variant="before">
            <div style={{ background: "#09090b", minHeight: 210 }}>
                {/* Chaotic nav */}
                <div className="flex flex-wrap gap-0.5 px-2 py-1.5 border-b border-zinc-800">
                    {navItems.map((n, i) => (
                        <span
                            key={n}
                            className="text-[7px] px-1.5 py-0.5 rounded font-medium"
                            style={{
                                background: i === 0 ? "#f59e0b" : i % 3 === 0 ? "#27272a" : "#1c1c1e",
                                color: i === 0 ? "#000" : i % 4 === 0 ? "#a1a1aa" : "#71717a",
                                fontWeight: [0, 1, 4].includes(i) ? "700" : "400",
                            }}
                        >
                            {n}
                            {i < 3 && <span className="ml-0.5 text-red-500 text-[6px]">●</span>}
                        </span>
                    ))}
                </div>

                {/* Cluttered content */}
                <div className="p-2 grid grid-cols-3 gap-1.5">
                    {/* Balance — competing with 3 CTAs */}
                    <div className="col-span-2 bg-zinc-900 rounded-lg p-2 border border-zinc-700">
                        <div className="text-[7px] text-zinc-500 mb-0.5">Available Balance</div>
                        <div className="text-[14px] font-bold text-white">₹84,230.00</div>
                        <div className="flex gap-1 mt-1">
                            {["Send", "Add Money", "Pay Bill"].map((a) => (
                                <div key={a} className="flex-1 text-center text-[6.5px] font-bold py-1 rounded" style={{ background: "#f59e0b", color: "#000" }}>
                                    {a}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Widget stack */}
                    <div className="flex flex-col gap-1">
                        {["Cashback", "Offers", "Credit Score"].map((w, i) => (
                            <div key={w} className="bg-zinc-800 rounded p-1.5 border border-zinc-700">
                                <div className="text-[6.5px] text-zinc-300 font-bold">{w}</div>
                                <div className="text-[7px] text-amber-400 font-bold">{["₹240", "12 live", "748"][i]}</div>
                            </div>
                        ))}
                    </div>

                    {/* More widgets */}
                    {["Loans", "Insurance", "Investments", "Spends", "EMIs", "Utilities"].map((w) => (
                        <div key={w} className="bg-zinc-900 border border-zinc-800 rounded-md p-1.5">
                            <div className="text-[6.5px] text-zinc-500">{w}</div>
                            <div className="text-[8px] text-zinc-300 font-semibold mt-0.5">View →</div>
                        </div>
                    ))}
                </div>

                {/* Red annotations */}
                <div className="px-2 pb-2 space-y-0.5">
                    <Annotation text="12 primary nav items — 62ms avg decision latency" variant="before" />
                    <Annotation text="3 competing CTAs above the fold" variant="before" />
                    <Annotation text="7 dashboard widgets fighting for attention" variant="before" />
                </div>
            </div>
        </BrowserFrame>
    );
}

function AfterDashboard() {
    return (
        <BrowserFrame label="After — Trust-First Architecture" variant="after">
            <div style={{ background: "#09090b", minHeight: 210 }}>
                {/* Clean nav — 4 items only */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/60">
                    <div className="flex gap-3">
                        {["Home", "Money", "Cards", "More"].map((n, i) => (
                            <span key={n} className={`text-[8.5px] font-semibold pb-1 ${i === 0 ? "text-amber-400 border-b border-amber-400" : "text-zinc-500"}`}>
                                {n}
                            </span>
                        ))}
                    </div>
                    <div className="w-5 h-5 rounded-full bg-zinc-800" />
                </div>

                {/* Clean balance card */}
                <div className="px-3 pt-3 pb-2">
                    <div className="text-[8px] text-zinc-500 mb-0.5">Total Balance</div>
                    <div className="text-[22px] font-bold text-white tracking-tight">₹84,230</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[8px] text-emerald-400 font-medium">+₹2,400 this month</span>
                    </div>

                    {/* Single primary CTA */}
                    <div className="mt-3 bg-amber-400 text-zinc-900 text-[10px] font-bold text-center py-2.5 rounded-xl">
                        Send Money
                    </div>

                    {/* Secondary actions — progressive disclosure */}
                    <div className="grid grid-cols-4 gap-1.5 mt-2">
                        {["Add", "Pay", "Invest", "More"].map((a) => (
                            <div key={a} className="flex flex-col items-center gap-1">
                                <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-sm bg-zinc-600" />
                                </div>
                                <span className="text-[7px] text-zinc-400">{a}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trust indicator */}
                    <div className="mt-3 flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5">
                        <div className="w-3 h-3 rounded-sm bg-emerald-600 flex items-center justify-center flex-shrink-0">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                                <path d="M1.5 3.5L2.8 4.8L5.5 2" stroke="white" strokeWidth="1" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-[7.5px] text-zinc-400">RBI regulated · DICGC insured up to ₹5L</span>
                    </div>

                    {/* Amber annotations */}
                    <div className="mt-2 space-y-0.5">
                        <Annotation text="4 nav items — eliminates choice paralysis" variant="after" />
                        <Annotation text="One primary CTA — +40% task completion rate" variant="after" />
                        <Annotation text="-60% visual token count vs. baseline" variant="after" />
                    </div>
                </div>
            </div>
        </BrowserFrame>
    );
}

export function NexusUI() {
    return (
        <section className="py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10"
            >
                <p className="text-xs font-mono font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">
                    02 — Design Audit
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
                    The Super-App Paradox
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    Neobanks chase feature parity instead of foundational trust. The audit mapped cognitive load across 14 flows — then redesigned around a single principle: one confident action beats twelve competing options.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
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
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3"
            >
                {[
                    { stat: "-25%", label: "Support ticket volume", note: "Trust hypothesis" },
                    { stat: "+40%", label: "Task completion speed", note: "Velocity hypothesis" },
                    { stat: "-60%", label: "Visual token count", note: "Measured in audit" },
                    { stat: "4 items", label: "Primary navigation", note: "vs. 12 in baseline" },
                ].map((m) => (
                    <div key={m.stat} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                        <div className="text-xl font-bold text-amber-400">{m.stat}</div>
                        <div className="text-xs text-zinc-300 font-medium mt-0.5">{m.label}</div>
                        <div className="text-[10px] text-zinc-500 mt-1 font-mono">{m.note}</div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
