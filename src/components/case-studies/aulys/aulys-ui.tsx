"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GREEN = "#10B981";

// Realistic plugin chrome matching the production Aulys plugin
function PluginChrome({ activeTab, children }: { activeTab: string; children: React.ReactNode }) {
    const tabs = [
        { name: "Audit", icon: "✓" },
        { name: "Tokens", icon: "⊞" },
        { name: "History", icon: "◷" },
        { name: "Settings", icon: "⚙" },
    ];

    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-300 shadow-2xl bg-white mx-auto" style={{ maxWidth: 360, width: "100%" }}>
            {/* Figma dark title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#2c2c2c]">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: GREEN }} />
                    <span className="text-sm font-semibold text-white">Aulys</span>
                </div>
                <span className="text-zinc-400 text-sm cursor-pointer hover:text-zinc-200">×</span>
            </div>

            {/* Brand header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: GREEN }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 2L15 5.5V12.5L9 16L3 12.5V5.5L9 2Z" stroke="white" strokeWidth="1.5" fill="none" />
                            <path d="M6.5 9L8 10.5L11.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-zinc-900">Aulys</div>
                        <div className="text-[11px] font-semibold" style={{ color: GREEN }}>WCAG 2.2 AA Compliant</div>
                    </div>
                </div>
                <div className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ background: GREEN }}>PRO</div>
            </div>

            {/* Content */}
            <div>{children}</div>

            {/* Bottom tabs */}
            <div className="grid grid-cols-4 border-t border-zinc-200 bg-white">
                {tabs.map((t) => (
                    <button key={t.name} className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors ${t.name === activeTab ? "text-emerald-600" : "text-zinc-400"}`}>
                        <span className="text-sm">{t.icon}</span>
                        {t.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

// Panel 1: WCAG Audit (matching real production UI)
function AuditPanel() {
    const checks = [
        { label: "Color Contrast", checked: true, isNew: false },
        { label: "Text Spacing", checked: true, isNew: false },
        { label: "Line Height", checked: true, isNew: false },
        { label: "Paragraph Spacing", checked: true, isNew: false },
        { label: "Non-text Contrast", checked: true, isNew: false },
        { label: "Alt Text", checked: true, isNew: true },
        { label: "Heading Hierarchy", checked: true, isNew: true },
        { label: "Link Purpose", checked: true, isNew: true },
        { label: "Touch Target Size", checked: false, isNew: false },
    ];

    return (
        <PluginChrome activeTab="Audit">
            {/* Frame selected banner */}
            <div className="mx-3 mt-3 flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: GREEN }}>
                    <span className="text-white text-sm font-bold">#</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-zinc-800 truncate">AI Rubric Generator Screen Design</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: GREEN }}>Frame Selected</div>
                </div>
                <div className="flex-shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded border flex items-center gap-1" style={{ color: GREEN, borderColor: GREEN }}>
                    <span>◉</span> Preview
                </div>
            </div>

            {/* Checklist */}
            <div className="px-4 pt-3 pb-1">
                <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 3h12M1 7h8M1 11h10" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/></svg>
                        What to Check
                    </div>
                    <span className="text-zinc-400">⌃</span>
                </div>
                <div className="space-y-0.5">
                    {checks.map((c) => (
                        <div key={c.label} className="flex items-center justify-between py-2 border-b border-zinc-50 last:border-0">
                            <div className="flex items-center gap-2.5">
                                <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0" style={{ background: c.checked ? GREEN : "transparent", border: c.checked ? "none" : "1.5px solid #d1d5db" }}>
                                    {c.checked && (
                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                                            <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                <span className={`text-sm ${c.checked ? "text-zinc-700" : "text-zinc-400"}`}>{c.label}</span>
                                {c.isNew && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full" style={{ color: GREEN, border: `1px solid ${GREEN}` }}>NEW</span>
                                )}
                            </div>
                            <span className="text-zinc-300 text-sm">ℹ</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scan CTA */}
            <div className="px-4 py-3">
                <div className="text-sm font-bold text-white text-center py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity" style={{ background: GREEN }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="white" strokeWidth="1.5"/><path d="M9 9l3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    Scan
                </div>
            </div>
        </PluginChrome>
    );
}

// Panel 2: Scan Results with real violations
function ResultsPanel() {
    const groups = [
        { criterion: "1.4.3 Contrast (Minimum)", count: 7, sev: "critical", items: ["Button text: 2.1:1 (req 4.5:1)", "Body copy on #F0F0F0: 3.8:1", "Placeholder text: 2.7:1"] },
        { criterion: "1.4.11 Non-text Contrast", count: 3, sev: "serious", items: ["Icon stroke on white: 2.3:1", "Input border inactive: 1.8:1"] },
        { criterion: "1.3.1 Info and Relationships", count: 2, sev: "moderate", items: ["Form labels not programmatic", "Table lacks headers"] },
    ];

    const sevColor: Record<string, string> = {
        critical: "bg-red-100 text-red-700",
        serious: "bg-amber-100 text-amber-700",
        moderate: "bg-blue-100 text-blue-700",
    };

    return (
        <PluginChrome activeTab="Audit">
            {/* Results summary */}
            <div className="px-4 pt-3">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-sm font-bold text-zinc-800">12 Issues Found</div>
                        <div className="text-[11px] text-zinc-400">AI Rubric Generator · WCAG 2.2 AA</div>
                    </div>
                    <div className="text-xs font-bold text-white px-2.5 py-1 rounded-lg cursor-pointer" style={{ background: GREEN }}>Fix All</div>
                </div>

                {/* Issue groups */}
                <div className="space-y-2">
                    {groups.map((g, i) => (
                        <div key={i} className="rounded-xl border border-zinc-100 overflow-hidden">
                            <div className="flex items-center justify-between px-3 py-2.5 bg-zinc-50">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                                    <span className="text-xs font-bold text-zinc-700">{g.criterion}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${sevColor[g.sev]}`}>{g.sev}</span>
                                    <span className="text-xs font-bold text-red-500">{g.count}</span>
                                </div>
                            </div>
                            <div className="px-3 pb-2 pt-1 space-y-1">
                                {g.items.map((item, j) => (
                                    <div key={j} className="flex items-center justify-between py-1 border-b border-zinc-50 last:border-0">
                                        <span className="text-[11px] text-zinc-600">{item}</span>
                                        <button className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: GREEN, border: `1px solid ${GREEN}` }}>Fix</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 py-3">
                <div className="text-sm font-bold text-white text-center py-3 rounded-xl" style={{ background: GREEN }}>Re-Scan</div>
            </div>
        </PluginChrome>
    );
}

// Panel 3: Scan History (matching real production history)
function HistoryPanel() {
    const scans = [
        { name: "AI Rubric Generator Screen Design", date: "28 Feb", level: "2.2 AAA", issues: 12 },
        { name: "AI Rubric Generator Screen Design", date: "28 Feb", level: "2.2 AAA", issues: 12 },
        { name: "AI Rubric Generator Screen Design", date: "28 Feb", level: "2.2 AAA", issues: 39 },
        { name: "New problem - Manual edit S…", date: "27 Feb", level: "2.2 AAA", issues: 4 },
        { name: "AI Rubric Generator Screen Design", date: "21 Feb", level: "2.1 AAA", issues: 39 },
        { name: "AI Rubric Generator Screen Design", date: "21 Feb", level: "2.1 AAA", issues: 39 },
        { name: "New problem - Manual edit S…", date: "21 Feb", level: "2.1 AAA", issues: 4 },
    ];

    return (
        <PluginChrome activeTab="History">
            <div className="px-4 py-3">
                <div className="flex items-center justify-between mb-3">
                    <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Recent Scans</div>
                    <div className="text-xs text-zinc-400 cursor-pointer hover:text-zinc-600">Clear All</div>
                </div>
                <div className="space-y-1">
                    {scans.map((s, i) => (
                        <div key={i} className="flex items-center gap-3 py-2.5 border-b border-zinc-50 last:border-0 cursor-pointer hover:bg-zinc-50 -mx-2 px-2 rounded-lg transition-colors">
                            <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="#9ca3af" strokeWidth="1.2" />
                                    <path d="M4 7H10M4 5H7" stroke="#9ca3af" strokeWidth="1" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-semibold text-zinc-700 truncate">{s.name}</div>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-[10px] text-zinc-400">{s.date}</span>
                                    <span className="text-zinc-300">·</span>
                                    <span className="text-[9px] font-bold text-zinc-500 border border-zinc-300 rounded-full px-1.5 py-px">{s.level}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0">
                                <div className="w-5 h-5 rounded-md bg-red-50 flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="#ef4444" strokeWidth="1.2"/><path d="M5 3v2.5M5 7v.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/></svg>
                                </div>
                                <span className="text-xs font-bold text-red-500">{s.issues}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PluginChrome>
    );
}

const panels = [
    {
        shortLabel: "WCAG Audit",
        Component: AuditPanel,
        caption: "9 configurable checks including 3 new WCAG 2.2 criteria (Alt Text, Heading Hierarchy, Link Purpose). Each check maps to a specific success criterion — not just a generic \"accessibility\" bucket.",
    },
    {
        shortLabel: "Scan Results",
        Component: ResultsPanel,
        caption: "Violations are grouped by WCAG criterion with severity (critical / serious / moderate) and inline Fix buttons. The one-click fix applies AI-suggested remediation directly to the Figma frame — no context switching.",
    },
    {
        shortLabel: "Scan History",
        Component: HistoryPanel,
        caption: "Persistent audit log across sessions. Real data from Feb 2025 — scanning the AI Rubric Generator design (Infosys engagement) using WCAG 2.2 AAA criteria across multiple iteration rounds.",
    },
];

export function AulysUI() {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/* Tab bar */}
            <div className="flex gap-1 mb-8 border-b border-zinc-200">
                {panels.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${active === i ? "text-emerald-700" : "text-zinc-400 hover:text-zinc-600"}`}
                    >
                        {p.shortLabel}
                        {active === i && (
                            <motion.div layoutId="aulys-tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-t" />
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start gap-10"
                >
                    {(() => { const Panel = panels[active].Component; return <Panel />; })()}
                    <div className="flex-1 pt-2">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-3">Live Production UI</div>
                        <p className="text-base text-zinc-600 leading-relaxed">{panels[active].caption}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
