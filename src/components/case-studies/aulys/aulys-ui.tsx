"use client";

import React from "react";
import { motion } from "framer-motion";

// Plugin frame matching the real Aulys Figma plugin chrome
function PluginFrame({ children, activeTab = "Audit" }: { children: React.ReactNode; activeTab?: string }) {
    const tabs = [
        { name: "Audit", icon: "✓" },
        { name: "Tokens", icon: "⊞" },
        { name: "History", icon: "◷" },
        { name: "Settings", icon: "⚙" },
    ];

    return (
        <div className="rounded-lg overflow-hidden border border-zinc-300 shadow-2xl bg-white mx-auto" style={{ width: "100%", maxWidth: 240 }}>
            {/* Dark title bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#2c2c2c]">
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="text-[10px] font-semibold text-white">Aulys</span>
                </div>
                <span className="text-zinc-400 text-xs">×</span>
            </div>

            {/* Brand header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-[#10B981] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 1L12 4V10L7 13L2 10V4L7 1Z" stroke="white" strokeWidth="1.2" fill="none" />
                            <path d="M5 7l1.5 1.5L9.5 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-zinc-900">Aulys</div>
                        <div className="text-[8px] text-[#10B981] font-medium">WCAG 2.2 AA Compliant</div>
                    </div>
                </div>
                <div className="bg-[#10B981] text-white text-[8px] font-bold px-2 py-0.5 rounded-full">PRO</div>
            </div>

            {/* Content */}
            <div style={{ minHeight: 220 }}>{children}</div>

            {/* Bottom tab bar */}
            <div className="grid grid-cols-4 border-t border-zinc-200 bg-white">
                {tabs.map((t) => (
                    <button
                        key={t.name}
                        className={`flex flex-col items-center gap-0.5 py-2 text-[8px] font-medium ${t.name === activeTab ? "text-[#10B981]" : "text-zinc-400"}`}
                    >
                        <span className="text-[11px]">{t.icon}</span>
                        {t.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

function AuditScreen() {
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
        <PluginFrame activeTab="Audit">
            {/* Frame selected banner */}
            <div className="mx-2 mt-2 flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-md p-2">
                <div className="w-6 h-6 rounded bg-[#10B981] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[9px] font-bold">#</span>
                </div>
                <div>
                    <div className="text-[8px] font-bold text-zinc-800">AI Rubric Generator Screen Design</div>
                    <div className="text-[7px] font-bold text-[#10B981] uppercase tracking-wide">Frame Selected</div>
                </div>
            </div>

            {/* What to check */}
            <div className="px-3 mt-2">
                <div className="flex items-center justify-between mb-1">
                    <div className="text-[9px] font-bold text-zinc-700 flex items-center gap-1">
                        <span className="text-zinc-400">≡</span> What to Check
                    </div>
                    <span className="text-zinc-400 text-[10px]">⌃</span>
                </div>
                <div className="space-y-0.5">
                    {checks.map((c) => (
                        <div key={c.label} className="flex items-center justify-between py-1 border-b border-zinc-50">
                            <div className="flex items-center gap-2">
                                <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${c.checked ? "bg-[#10B981]" : "border border-zinc-300 bg-white"}`}>
                                    {c.checked && (
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M1.5 4L3 5.5L6.5 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                    )}
                                </div>
                                <span className={`text-[8.5px] ${c.checked ? "text-zinc-700" : "text-zinc-400"}`}>{c.label}</span>
                                {c.isNew && (
                                    <span className="text-[6.5px] font-bold text-[#10B981] border border-[#10B981] rounded-full px-1 py-px">NEW</span>
                                )}
                            </div>
                            <span className="text-zinc-300 text-[10px]">ℹ</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scan CTA */}
            <div className="px-3 py-2">
                <div className="bg-[#10B981] text-white text-[10px] font-bold text-center py-2 rounded-md flex items-center justify-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="4" cy="4" r="3" stroke="white" strokeWidth="1.2" />
                        <path d="M6.5 6.5L8.5 8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Scan
                </div>
            </div>
        </PluginFrame>
    );
}

function SimulationScreen() {
    return (
        <PluginFrame activeTab="Audit">
            {/* Frame selected banner */}
            <div className="mx-2 mt-2 flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-md px-2 py-1.5">
                <div className="w-5 h-5 rounded bg-[#10B981] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[8px]">#</span>
                </div>
                <div className="text-[7px] font-bold text-[#10B981] uppercase tracking-wide">Frame Selected</div>
                <div className="ml-auto">
                    <span className="text-[7px] text-[#10B981] border border-[#10B981] rounded px-1 py-px flex items-center gap-0.5">
                        <span>◉</span> Preview
                    </span>
                </div>
            </div>

            {/* Simulation mode */}
            <div className="px-3 mt-3">
                <div className="text-[9px] font-bold text-zinc-700 flex items-center gap-1 mb-2">
                    <span>◉</span> Simulation Mode
                </div>
                <div className="flex items-center gap-1.5">
                    <select className="flex-1 text-[8.5px] text-zinc-700 border border-zinc-200 rounded-md px-2 py-1.5 bg-white">
                        <option>Protanopia (Red Blind)</option>
                    </select>
                    <div className="w-6 h-6 border border-zinc-200 rounded flex items-center justify-center text-zinc-400 text-[10px]">↻</div>
                </div>
            </div>

            {/* Empty state */}
            <div className="flex flex-col items-center justify-center px-4 py-6 text-center mt-2">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="9" rx="1.5" stroke="#9ca3af" strokeWidth="1.2" />
                        <path d="M5 12H11M8 11V12" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="text-[10px] font-bold text-zinc-800 mb-1">Ready to Visualize</div>
                <div className="text-[8.5px] text-zinc-400 leading-relaxed">
                    Select a layer on the canvas to simulate color blindness conditions.
                </div>
                <div className="mt-4 w-full bg-[#10B981] text-white text-[9px] font-bold text-center py-2 rounded-md flex items-center justify-center gap-1.5">
                    <span>↻</span> Generate Preview
                </div>
            </div>

            {/* Scan CTA */}
            <div className="px-3 pb-2">
                <div className="bg-[#10B981] text-white text-[10px] font-bold text-center py-2 rounded-md flex items-center justify-center gap-1.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="4" cy="4" r="3" stroke="white" strokeWidth="1.2" />
                        <path d="M6.5 6.5L8.5 8.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Scan
                </div>
            </div>
        </PluginFrame>
    );
}

function HistoryScreen() {
    const scans = [
        { name: "AI Rubric Generator Screen Design", date: "28 Feb", level: "2.2 AAA", issues: 12 },
        { name: "AI Rubric Generator Screen Design", date: "28 Feb", level: "2.2 AAA", issues: 12 },
        { name: "AI Rubric Generator Screen Design", date: "28 Feb", level: "2.2 AAA", issues: 39 },
        { name: "New problem - Manual edit S…", date: "27 Feb", level: "2.2 AAA", issues: 4 },
        { name: "AI Rubric Generator Screen Design", date: "21 Feb", level: "2.1 AAA", issues: 39 },
        { name: "AI Rubric Generator Screen Design", date: "21 Feb", level: "2.1 AAA", issues: 39 },
    ];

    return (
        <PluginFrame activeTab="History">
            <div className="px-3 py-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Recent Scans</div>
                    <div className="text-[8px] text-zinc-400">Clear All</div>
                </div>
                <div className="space-y-1">
                    {scans.map((s, i) => (
                        <div key={i} className="flex items-center gap-2 py-1.5 border-b border-zinc-100">
                            <div className="w-6 h-6 bg-zinc-100 rounded-md flex items-center justify-center flex-shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <rect x="1.5" y="1.5" width="7" height="7" rx="1" stroke="#9ca3af" strokeWidth="1" />
                                    <path d="M3 5H7M3 3.5H5" stroke="#9ca3af" strokeWidth="1" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[8px] font-medium text-zinc-700 truncate">{s.name}</div>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <span className="text-[7px] text-zinc-400">{s.date}</span>
                                    <span className="text-zinc-300">·</span>
                                    <span className="text-[6.5px] font-bold text-zinc-500 border border-zinc-300 rounded-full px-1">{s.level}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-0.5 flex-shrink-0">
                                <div className="w-4 h-4 bg-red-50 rounded flex items-center justify-center">
                                    <span className="text-[7px] text-red-500">⊙</span>
                                </div>
                                <span className="text-[8px] font-bold text-red-400">{s.issues}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PluginFrame>
    );
}

const screens = [
    {
        Component: AuditScreen,
        label: "WCAG Audit — Scan Panel",
        desc: "9 configurable checks including WCAG 2.2 rules (Alt Text, Heading Hierarchy, Link Purpose) added as new criteria.",
    },
    {
        Component: SimulationScreen,
        label: "Color Blindness Simulator",
        desc: "Simulates 8 vision conditions (Protanopia, Deuteranopia, Tritanopia, etc.) directly inside Figma — no context switching.",
    },
    {
        Component: HistoryScreen,
        label: "Scan History",
        desc: "Persistent audit log across frames and sessions. Real scan data from the AI Rubric Generator project, Feb 2025.",
    },
];

export function AulysUI() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {screens.map(({ Component, label, desc }, i) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-4"
                >
                    <Component />
                    <div className="w-full max-w-[240px]">
                        <div className="text-sm font-semibold text-zinc-800">{label}</div>
                        <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
