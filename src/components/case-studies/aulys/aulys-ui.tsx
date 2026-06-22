"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import {
    Eye, Volume2, CircleCheck, History, SlidersHorizontal,
    X, Check, ScanLine, Minus, Plus, RefreshCw, Copy, Frame,
} from "lucide-react";

type TabKey = "audit" | "reader" | "vision" | "history" | "settings";

const TABS: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: "vision", label: "Vision", icon: Eye },
    { key: "reader", label: "Reader", icon: Volume2 },
    { key: "audit", label: "Audit", icon: CircleCheck },
    { key: "history", label: "History", icon: History },
    { key: "settings", label: "Settings", icon: SlidersHorizontal },
];

const NOTES: Record<TabKey, string> = {
    audit: "Checks are severity-tiered. The four Critical rules are on by default; the eight Important ones are opt-in — so a designer's first scan flags what matters, not 200 nitpicks.",
    reader: "A screen-reader preview, inside Figma. It reads the frame in announcement order and flags the elements that announce as a bare “button” — the failure sighted designers never hear.",
    vision: "A color-vision simulator across eight deficiency types with a live severity slider — so you see the design the way a user with achromatomaly does, not the way you assume.",
    history: "Scan history tracks issue count per frame over time. Compliance becomes a trend a team watches drop — not a one-off spot-check before handoff.",
    settings: "Target any WCAG version and conformance level. The default is 2.2 AA — the current bar, including 24px minimum touch targets.",
};

/* ─── Shared plugin chrome ─────────────────────────────── */
function PluginFrame({ active, setActive, children }: {
    active: TabKey;
    setActive: (k: TabKey) => void;
    children: React.ReactNode;
}) {
    return (
        <div className="w-[340px] sm:w-[380px] rounded-[1.5rem] overflow-hidden border border-zinc-200 bg-white shadow-2xl flex flex-col" style={{ height: 620 }}>
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 h-12 bg-zinc-900 shrink-0">
                <div className="flex items-center gap-2">
                    <span className="text-emerald-400" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3 3 19h18L12 3z" /></svg>
                    </span>
                    <span className="text-white text-sm font-bold">Aulys</span>
                </div>
                <X className="w-4 h-4 text-zinc-400" aria-hidden="true" />
            </div>
            {/* Brand row */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 shrink-0">
                <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center" aria-hidden="true">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3 3 19h18L12 3z" /></svg>
                    </span>
                    <div>
                        <p className="text-sm font-bold text-zinc-900 leading-none">Aulys</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">WCAG 2.2 AA Compliant</p>
                    </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold">PRO</span>
            </div>
            {/* Content */}
            <div className="flex-1 overflow-hidden relative bg-white">{children}</div>
            {/* Bottom nav */}
            <nav className="grid grid-cols-5 border-t border-zinc-100 bg-white shrink-0" aria-label="Plugin sections (static mockup)">
                {TABS.map((t) => {
                    const isActive = t.key === active;
                    const Icon = t.icon;
                    return (
                        <button
                            key={t.key}
                            onClick={() => setActive(t.key)}
                            aria-pressed={isActive}
                            className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-inset ${isActive ? "text-emerald-700" : "text-zinc-500 hover:text-zinc-800"}`}
                        >
                            <Icon className="w-4 h-4" aria-hidden="true" />
                            {t.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}

function Row({ children }: { children: React.ReactNode }) {
    return <div className="px-4 py-3 overflow-y-auto h-full">{children}</div>;
}

/* ─── Panels ───────────────────────────────────────────── */
function AuditPanel() {
    const critical = ["Color Contrast", "Non-text Contrast", "Touch Target Size", "Alt Text"];
    const important = [
        { label: "Focus Indicators", on: true },
        { label: "Link Purpose", on: true },
        { label: "Heading Hierarchy", on: false },
        { label: "Reflow", on: false },
        { label: "Label in Name", on: false },
    ];
    return (
        <Row>
            <div className="flex items-center gap-2 mb-4 p-2.5 rounded-xl border border-zinc-200">
                <Frame className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <div>
                    <p className="text-sm font-bold text-zinc-900 leading-none">Merck</p>
                    <p className="text-[10px] text-zinc-500 mt-0.5 tracking-wide">FRAME</p>
                </div>
            </div>
            <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-zinc-900">Configure checks</p>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">6 active</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" aria-hidden="true" />
                <p className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">Critical <span className="text-zinc-500">4/4</span></p>
            </div>
            <ul className="space-y-1.5 mb-4">
                {critical.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 py-1">
                        <span className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center" aria-hidden="true"><Check className="w-3.5 h-3.5 text-white" /></span>
                        <span className="text-sm text-zinc-800">{c}</span>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                <p className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">Important <span className="text-zinc-500">2/8</span></p>
            </div>
            <ul className="space-y-1.5">
                {important.map((c) => (
                    <li key={c.label} className="flex items-center gap-2.5 py-1">
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center ${c.on ? "bg-emerald-500" : "border border-zinc-300"}`} aria-hidden="true">
                            {c.on && <Check className="w-3.5 h-3.5 text-white" />}
                        </span>
                        <span className="text-sm text-zinc-800">{c.label}</span>
                    </li>
                ))}
            </ul>
            <button className="mt-4 w-full py-3 rounded-xl bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2">
                <ScanLine className="w-4 h-4" aria-hidden="true" /> Scan
            </button>
        </Row>
    );
}

function ReaderPanel() {
    const items = [
        { n: 1, t: "Button", bad: true },
        { n: 2, t: "Button: Search" },
        { n: 3, t: "Button: Calicon" },
        { n: 4, t: "Bill Slot Planner" },
        { n: 5, t: "Button: ButtonText" },
        { n: 6, t: "Button", bad: true },
        { n: 7, t: "Button: Profile" },
    ];
    return (
        <Row>
            <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-wide">220 Announcements</p>
                <span className="px-2 py-1 rounded-lg border border-zinc-200 text-[10px] font-semibold text-zinc-700">Re-read</span>
            </div>
            <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 mb-3">
                <span className="text-sm font-bold text-amber-700">18 critical</span>
                <span className="text-[11px] text-amber-800 leading-snug">— a screen reader can&apos;t announce these correctly.</span>
            </div>
            <ul className="space-y-2">
                {items.map((it) => (
                    <li key={it.n} className={`rounded-lg border p-3 ${it.bad ? "border-rose-300 border-l-[3px] border-l-rose-500 bg-rose-50/40" : "border-zinc-200"}`}>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-zinc-500">{it.n}</span>
                            <span className="text-sm font-semibold text-zinc-800">{it.t}</span>
                        </div>
                        {it.bad && (
                            <p className="text-[11px] text-rose-700 mt-1.5 leading-snug">
                                No accessible name — a screen reader announces only “button”. Add a visible label or aria-label.
                            </p>
                        )}
                    </li>
                ))}
            </ul>
            <button className="mt-4 w-full py-3 rounded-xl bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2">
                <Copy className="w-4 h-4" aria-hidden="true" /> Copy report
            </button>
            <p className="text-[10px] text-zinc-500 text-center mt-3">Read-only preview — nothing is changed in your file.</p>
        </Row>
    );
}

function VisionPanel() {
    return (
        <Row>
            <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex-1 px-3 py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-800 flex items-center justify-between">
                    Achromatomaly (Color Weakness)
                    <span className="text-zinc-400" aria-hidden="true">▾</span>
                </div>
                <span className="w-9 h-9 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-500" aria-hidden="true"><RefreshCw className="w-4 h-4" /></span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 mb-3">
                <span className="text-[11px] text-emerald-800 leading-snug">Partial colour blindness with very weak colour perception.</span>
                <span className="text-[10px] font-bold text-emerald-700 ml-2 shrink-0">Rare</span>
            </div>
            {/* Simulated canvas preview */}
            <div className="rounded-lg border border-zinc-200 p-2 mb-4 bg-[length:14px_14px] bg-[linear-gradient(45deg,#f4f4f5_25%,transparent_25%),linear-gradient(-45deg,#f4f4f5_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f4f4f5_75%),linear-gradient(-45deg,transparent_75%,#f4f4f5_75%)]">
                <div className="rounded bg-zinc-100 grid grid-cols-4 gap-1.5 p-2" aria-hidden="true">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded bg-zinc-300/70 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full border-2 border-zinc-400" />
                        </div>
                    ))}
                    <div className="col-span-4 h-16 rounded bg-zinc-200/80" />
                </div>
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wide">Severity</span>
                    <span className="text-xs font-bold text-zinc-900">100%</span>
                </div>
                <div className="h-1.5 rounded-full bg-zinc-200 relative">
                    <div className="absolute inset-y-0 left-0 right-0 rounded-full bg-emerald-500" />
                    <div className="absolute right-0 -top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 border border-zinc-200 rounded-lg px-1.5 py-1.5">
                    <Minus className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                    <span className="text-xs font-semibold text-zinc-700 px-1">100%</span>
                    <Plus className="w-3.5 h-3.5 text-zinc-500" aria-hidden="true" />
                </div>
                <span className="px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-700">Save</span>
            </div>
            <p className="text-[10px] text-zinc-500 text-center mt-3">Snapshot only. Does not modify your design.</p>
        </Row>
    );
}

function HistoryPanel() {
    const scans = [
        { name: "Merck", date: "5 Jun", level: "2.2 AA", score: 133 },
        { name: "Merck", date: "5 Jun", level: "2.2 AA", score: 122 },
        { name: "Merck", date: "5 Jun", level: "2.2 AA", score: 133 },
        { name: "App", date: "3 Jun", level: "2.1 AA", score: 0 },
        { name: "Merck", date: "3 Jun", level: "2.1 AA", score: 104 },
        { name: "Mobile App Dashboard Design", date: "18 Apr", level: "2.2 AA", score: 71 },
        { name: "Merck", date: "18 Apr", level: "2.2 AA", score: 490 },
    ];
    return (
        <Row>
            <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold text-zinc-600 uppercase tracking-wide">Recent Scans</p>
                <span className="text-[11px] font-semibold text-zinc-500">Clear All</span>
            </div>
            <ul className="space-y-2">
                {scans.map((s, i) => (
                    <li key={i} className={`flex items-center justify-between rounded-xl border p-3 ${i === 0 ? "border-emerald-300" : "border-zinc-200"}`}>
                        <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-500 flex items-center justify-center shrink-0" aria-hidden="true"><Frame className="w-3.5 h-3.5" /></span>
                            <div className="min-w-0">
                                <p className="text-sm font-bold text-zinc-900 truncate">{s.name}</p>
                                <p className="text-[10px] text-zinc-500">{s.date} · {s.level}</p>
                            </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border shrink-0 ${s.score === 0 ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"}`}>
                            {s.score === 0 ? "✓ 0" : s.score}
                        </span>
                    </li>
                ))}
            </ul>
        </Row>
    );
}

function SettingsPanel() {
    return (
        <Row>
            <p className="text-sm font-bold text-zinc-900 mb-2">Appearance</p>
            <div className="rounded-xl border border-zinc-200 p-3 mb-5">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-zinc-800">Theme</p>
                        <p className="text-[10px] text-zinc-500 max-w-[140px] leading-snug mt-0.5">Override Figma&apos;s auto-detected theme</p>
                    </div>
                    <div className="flex rounded-lg border border-zinc-200 overflow-hidden text-[11px] font-semibold">
                        <span className="px-2.5 py-1.5 bg-zinc-900 text-white">Auto</span>
                        <span className="px-2.5 py-1.5 text-zinc-600">Light</span>
                        <span className="px-2.5 py-1.5 text-zinc-600">Dark</span>
                    </div>
                </div>
            </div>
            <p className="text-sm font-bold text-zinc-900 mb-2">Compliance Standard</p>
            <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-zinc-800">Target Version</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">Choose compliance year</p>
                    </div>
                    <span className="px-3 py-2 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-800">WCAG 2.2 ▾</span>
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-zinc-800">Conformance Level</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">Strictness of rules</p>
                    </div>
                    <span className="px-3 py-2 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-800">Level AA ▾</span>
                </div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200 mb-4">
                <p className="text-[11px] text-zinc-600 leading-snug">
                    <strong className="text-zinc-800">Note:</strong> WCAG 2.2 AA is the recommended standard for modern web accessibility, requiring 24px target sizes.
                </p>
            </div>
            <button className="w-full py-3 rounded-xl bg-emerald-500/60 text-white text-sm font-bold">Save Preferences</button>
        </Row>
    );
}

const PANELS: Record<TabKey, React.ReactNode> = {
    audit: <AuditPanel />,
    reader: <ReaderPanel />,
    vision: <VisionPanel />,
    history: <HistoryPanel />,
    settings: <SettingsPanel />,
};

/* ─── Main ─────────────────────────────────────────────── */
export function AulysUI() {
    const [active, setActive] = useState<TabKey>("audit");
    const activeTab = TABS.find((t) => t.key === active)!;

    return (
        <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                        04a — Production UI
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        The Live Plugin
                    </h2>
                    <p className="text-lg text-zinc-300 font-medium leading-relaxed">
                        Five tools, one panel, all inside Figma — audit, screen-reader preview, vision
                        simulation, scan history, and compliance settings. Tap a tab to explore the
                        plugin beta testers use today.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center">
                    <div className="mx-auto lg:mx-0">
                        <PluginFrame active={active} setActive={setActive}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full"
                                >
                                    {PANELS[active]}
                                </motion.div>
                            </AnimatePresence>
                        </PluginFrame>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active + "-note"}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="inline-flex items-center gap-2 mb-4">
                                <activeTab.icon className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                                <p className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-[0.2em]">{activeTab.label}</p>
                            </div>
                            <p className="text-xl md:text-2xl text-zinc-100 leading-relaxed max-w-xl">
                                {NOTES[active]}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
