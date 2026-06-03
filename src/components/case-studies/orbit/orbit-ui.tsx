"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";

const SCREENS = [
    { id: "org_map", label: "Spatial Org Map", tag: "Home State" },
    { id: "team_detail", label: "Team Detail", tag: "After Gaze" },
    { id: "tool_discovery", label: "Tool Discovery", tag: "Step 2 of 5" },
    { id: "ai_agent", label: "AI Guide — Ava", tag: "Day 1 Session" },
];

/* ─── Waveform bars helper ───────────────────────────── */
function Waveform({ color = "#d0bcff", bars = 5, height = 14 }: { color?: string; bars?: number; height?: number }) {
    const heights = bars === 5 ? [0.4, 0.7, 1, 0.7, 0.4] : [0.3, 0.5, 0.7, 1, 0.7, 0.5, 0.3, 0.5, 0.7];
    return (
        <div className="flex items-center gap-[2px]">
            {heights.slice(0, bars).map((h, i) => (
                <div key={i} className="w-[2.5px] rounded-full" style={{ height: h * height, background: color, opacity: 0.85 }} />
            ))}
        </div>
    );
}

/* ─── Screen 1: Spatial Org Map ─────────────────────── */
function OrgMapScreen() {
    const teams = [
        { name: "Engineering", count: "12 members", x: 50, y: 44, focused: true, color: "#d0bcff" },
        { name: "Design", count: "8 members", x: 22, y: 28, focused: false, color: "#a78bfa" },
        { name: "Product", count: "6 members", x: 75, y: 26, focused: false, color: "#818cf8" },
        { name: "Data", count: "9 members", x: 16, y: 58, focused: false, color: "#7dd3fc" },
        { name: "DevOps", count: "5 members", x: 82, y: 56, focused: false, color: "#6ee7b7" },
        { name: "Security", count: "4 members", x: 50, y: 74, focused: false, color: "#fda4af" },
        { name: "HR Ops", count: "7 members", x: 28, y: 72, focused: false, color: "#fcd34d" },
        { name: "Finance", count: "11 members", x: 70, y: 72, focused: false, color: "#c084fc" },
    ];
    return (
        <div className="relative w-full h-full overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0e0e0e 60%, #0c0a14 100%)" }}>
            {/* Layered atmospheric glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 44%, rgba(208,188,255,0.13) 0%, transparent 70%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 35% at 80% 18%, rgba(129,140,248,0.10) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 35% 30% at 18% 65%, rgba(125,211,252,0.07) 0%, transparent 60%)" }} />
            </div>

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 pt-5 pb-3 z-20">
                <span className="text-base font-black tracking-[0.15em] uppercase" style={{ color: "#d0bcff", fontFamily: "var(--font-epilogue, var(--font-inter))", textShadow: "0 0 20px rgba(208,188,255,0.4)" }}>
                    Orbit
                </span>
                <span className="text-[9px] font-mono tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>DAY 1 · SESSION 1 OF 4</span>
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
                </div>
            </div>

            {/* SVG connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ opacity: 0.18 }}>
                {teams.filter(t => !t.focused).slice(0, 5).map((t, i) => (
                    <line key={i}
                        x1="50%" y1="44%"
                        x2={`${t.x}%`} y2={`${t.y}%`}
                        stroke="white" strokeWidth="0.8"
                        strokeDasharray="3 4"
                    />
                ))}
            </svg>

            {/* Team cards */}
            {teams.map((card) => (
                <div
                    key={card.name}
                    className="absolute z-10"
                    style={{
                        left: `${card.x}%`,
                        top: `${card.y}%`,
                        transform: "translate(-50%, -50%)",
                        width: card.focused ? 148 : 118,
                        padding: card.focused ? "14px 16px" : "10px 14px",
                        borderRadius: 16,
                        background: card.focused
                            ? "rgba(208,188,255,0.10)"
                            : "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(28px)",
                        WebkitBackdropFilter: "blur(28px)",
                        border: card.focused
                            ? `1.5px solid rgba(208,188,255,0.35)`
                            : "1px solid rgba(255,255,255,0.10)",
                        boxShadow: card.focused
                            ? "0 0 32px rgba(208,188,255,0.18), 0 0 8px rgba(208,188,255,0.10), inset 0 1px 0 rgba(255,255,255,0.08)"
                            : "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
                        scale: card.focused ? 1 : 1,
                    }}
                >
                    {card.focused && (
                        <div
                            className="absolute -top-7 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[8px] font-bold whitespace-nowrap"
                            style={{ background: "rgba(208,188,255,0.18)", border: "1px solid rgba(208,188,255,0.35)", color: "#d0bcff", backdropFilter: "blur(12px)" }}
                        >
                            Your team
                        </div>
                    )}
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: card.color + "60", border: `1.5px solid ${card.color}`, boxShadow: `0 0 6px ${card.color}50` }} />
                        <span className={`font-bold text-white leading-none ${card.focused ? "text-[11px]" : "text-[9px]"}`}>{card.name}</span>
                    </div>
                    <span className="text-[8px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{card.count}</span>
                </div>
            ))}

            {/* Bottom progress pill */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-5 py-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.10)" }}>
                <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>Day 1 Progress</span>
                <div className="flex gap-1">
                    {[1,2,3,4,5,6,7].map((n) => (
                        <div key={n} className="w-1.5 h-1.5 rounded-full" style={{ background: n <= 3 ? "#d0bcff" : "rgba(255,255,255,0.18)", boxShadow: n <= 3 ? "0 0 4px rgba(208,188,255,0.6)" : undefined }} />
                    ))}
                </div>
                <span className="text-[9px] font-bold font-mono" style={{ color: "#d0bcff" }}>3/7</span>
            </div>
        </div>
    );
}

/* ─── Screen 2: Team Detail ─────────────────────────── */
function TeamDetailScreen() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0e0e0e 60%, #0c0a14 100%)" }}>
            {/* Blurred org map backdrop hints */}
            <div className="absolute inset-0 pointer-events-none">
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(208,188,255,0.07) 0%, transparent 70%)", filter: "blur(1px)" }} />
                {/* Ghost team cards visible in background */}
                {[
                    { x: 12, y: 22, w: 80 }, { x: 78, y: 18, w: 72 },
                    { x: 8, y: 62, w: 76 }, { x: 82, y: 60, w: 68 },
                    { x: 45, y: 76, w: 80 },
                ].map((g, i) => (
                    <div key={i} className="absolute rounded-xl" style={{
                        left: `${g.x}%`, top: `${g.y}%`,
                        width: g.w, height: 48,
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        opacity: 0.5, filter: "blur(1px)",
                    }} />
                ))}
            </div>

            {/* Frosted glass panel */}
            <div
                className="relative z-10 w-[420px] rounded-3xl overflow-hidden"
                style={{
                    background: "rgba(255,255,255,0.09)",
                    backdropFilter: "blur(60px)",
                    WebkitBackdropFilter: "blur(60px)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    boxShadow: "0 32px 80px rgba(208,188,255,0.12), 0 8px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.10)",
                }}
            >
                {/* Inner glow top */}
                <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(208,188,255,0.06) 0%, transparent 100%)" }} />

                <div className="relative p-6 flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-2xl flex items-center justify-center" style={{ background: "rgba(208,188,255,0.15)", border: "1px solid rgba(208,188,255,0.30)", boxShadow: "0 0 12px rgba(208,188,255,0.15)" }}>
                                <div className="w-3.5 h-3.5 rounded-full" style={{ background: "linear-gradient(135deg, #d0bcff, #8b5cf6)" }} />
                            </div>
                            <div>
                                <p className="text-base font-black text-white leading-none" style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}>Engineering</p>
                                <p className="text-[9px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>12 members · 3 squads</p>
                            </div>
                        </div>
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px]" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.30)" }}>×</div>
                    </div>

                    {/* Avatar row */}
                    <div className="flex gap-3">
                        {[
                            { initials: "RC", label: "Your buddy", highlight: true },
                            { initials: "AL", label: "Ana L.", highlight: false },
                            { initials: "PK", label: "Priya K.", highlight: false },
                            { initials: "JM", label: "Jamie M.", highlight: false },
                            { initials: "+8", label: "more", highlight: false },
                        ].map((av, i) => (
                            <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                                    style={{
                                        background: av.highlight ? "linear-gradient(135deg, #9b87f5, #6366f1)" : "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(99,102,241,0.5))",
                                        border: av.highlight ? "2px solid rgba(208,188,255,0.70)" : "1.5px solid rgba(255,255,255,0.12)",
                                        boxShadow: av.highlight ? "0 0 14px rgba(208,188,255,0.35), 0 0 4px rgba(208,188,255,0.20)" : undefined,
                                    }}
                                >
                                    {av.initials}
                                </div>
                                <span className="text-[7px] font-medium leading-none text-center" style={{ color: av.highlight ? "#d0bcff" : "rgba(255,255,255,0.35)" }}>{av.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* AI suggestion */}
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: "rgba(208,188,255,0.08)", border: "1px solid rgba(208,188,255,0.22)", backdropFilter: "blur(12px)" }}>
                        <Waveform color="#d0bcff" bars={5} height={16} />
                        <p className="text-[9px] leading-snug flex-1" style={{ color: "rgba(255,255,255,0.80)" }}>
                            Suggested intro: message Rahul about your setup call
                        </p>
                        <div className="px-3 py-1.5 rounded-full text-[8px] font-bold whitespace-nowrap" style={{ background: "rgba(208,188,255,0.18)", border: "1px solid rgba(208,188,255,0.35)", color: "#d0bcff" }}>
                            Send intro
                        </div>
                    </div>

                    {/* How this team works */}
                    <div>
                        <p className="text-[8px] font-mono font-bold uppercase tracking-widest mb-2.5" style={{ color: "rgba(255,255,255,0.28)" }}>How this team works</p>
                        <div className="flex flex-wrap gap-2">
                            {["Async-first", "Weekly sync Tues", "Slack #eng-general"].map((tag) => (
                                <span key={tag} className="px-3 py-1.5 rounded-full text-[8px] font-medium" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.55)" }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Screen 3: Tool Discovery ──────────────────────── */
function ToolDiscoveryScreen() {
    const tools = [
        { name: "Slack", letter: "S", bg: "#4A154B", active: true },
        { name: "Jira", letter: "J", bg: "#0052CC", active: false },
        { name: "Figma", letter: "F", bg: "#F24E1E", active: false },
        { name: "GitHub", letter: "G", bg: "#21262d", active: false },
        { name: "Notion", letter: "N", bg: "#191919", active: false },
        { name: "Workday", letter: "W", bg: "#1f3047", active: false },
    ];

    return (
        <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0e0e0e 60%, #0c0a14 100%)" }}>
            {/* Atmospherics */}
            <div className="absolute inset-0 pointer-events-none">
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(208,188,255,0.09) 0%, transparent 70%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 30% at 20% 80%, rgba(74,21,75,0.12) 0%, transparent 55%)" }} />
            </div>

            <div className="relative z-10 flex flex-col h-full px-7 py-6 gap-5">
                {/* AI voice bar */}
                <div className="flex items-center gap-4 px-6 py-4 rounded-full" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(28px)", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                    <Waveform color="#d0bcff" bars={7} height={16} />
                    <p className="text-[10px] flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                        Your primary tools are ready. Start with Slack — your team is active now.
                    </p>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#d0bcff", boxShadow: "0 0 6px rgba(208,188,255,0.8)" }} />
                </div>

                {/* Tool dock — fills most of the space */}
                <div
                    className="flex-1 flex items-center justify-center px-4 rounded-3xl"
                    style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
                >
                    <div className="flex gap-3 w-full py-4">
                        {tools.map((tool) => (
                            <div
                                key={tool.name}
                                className="flex flex-col items-center gap-3 flex-1 py-5 rounded-2xl"
                                style={{
                                    background: tool.active ? `${tool.bg}ee` : "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(20px)",
                                    border: tool.active ? "1.5px solid rgba(208,188,255,0.40)" : "1px solid rgba(255,255,255,0.08)",
                                    boxShadow: tool.active ? "0 0 24px rgba(208,188,255,0.18), 0 0 6px rgba(74,21,75,0.30), inset 0 1px 0 rgba(255,255,255,0.10)" : "inset 0 1px 0 rgba(255,255,255,0.04)",
                                }}
                            >
                                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-[13px] font-bold text-white" style={{ background: tool.bg, boxShadow: tool.active ? `0 4px 12px ${tool.bg}90` : undefined }}>
                                    {tool.letter}
                                </div>
                                <span className="text-[8px] font-medium text-center leading-tight" style={{ color: tool.active ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)" }}>
                                    {tool.name}
                                </span>
                                {tool.active && (
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#d0bcff", boxShadow: "0 0 6px rgba(208,188,255,0.8)" }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step progress */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <span className="text-[9px] font-mono" style={{ color: "rgba(255,255,255,0.40)" }}>Tool Setup</span>
                        <div className="flex gap-1">
                            {[1,2,3,4,5].map((n) => (
                                <div key={n} className="w-1.5 h-1.5 rounded-full" style={{ background: n <= 2 ? "#d0bcff" : "rgba(255,255,255,0.18)", boxShadow: n <= 2 ? "0 0 4px rgba(208,188,255,0.6)" : undefined }} />
                            ))}
                        </div>
                        <span className="text-[9px] font-bold font-mono" style={{ color: "#d0bcff" }}>Step 2 of 5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ─── Screen 4: AI Agent ─────────────────────────────── */
function AIAgentScreen() {
    const messages = [
        { type: "ai", text: "Welcome to Orbit, Priya. I'm Ava, your spatial guide. Look at the Engineering cluster when you're ready." },
        { type: "system", text: "Gaze detected — Engineering cluster · 2.3s dwell" },
        { type: "ai", text: "That's your core team. Rahul is your buddy. Want me to surface his intro message?" },
        { type: "user", text: "Yes please" },
        { type: "ai", text: "Intro sent to Rahul. Look around — Design cluster to your left works closely with Engineering." },
        { type: "system", text: "Navigating to Design cluster…" },
    ];

    return (
        <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: "linear-gradient(160deg, #0a0a0f 0%, #0e0e0e 55%, #0c0b16 100%)" }}>
            {/* Atmospherics */}
            <div className="absolute inset-0 pointer-events-none">
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 45% at 30% 25%, rgba(139,92,246,0.10) 0%, transparent 65%)" }} />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 40% at 70% 75%, rgba(208,188,255,0.06) 0%, transparent 60%)" }} />
            </div>

            <div className="relative z-10 flex flex-col h-full px-7 py-5 gap-4">
                {/* Ava header */}
                <div className="flex items-center gap-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full" style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 60%, #4338ca 100%)", boxShadow: "0 0 18px rgba(139,92,246,0.40)" }} />
                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center" style={{ background: "#0e0e0e", borderColor: "#0e0e0e" }}>
                            <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.7)" }} />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white leading-none">AI Guide — Ava</p>
                        <p className="text-[8px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Active Listening</p>
                    </div>
                    <div className="ml-auto px-2.5 py-1 rounded-full text-[8px] font-mono font-bold" style={{ background: "rgba(208,188,255,0.10)", border: "1px solid rgba(208,188,255,0.20)", color: "#d0bcff" }}>
                        Day 1 · Session 1
                    </div>
                </div>

                {/* Conversation thread */}
                <div className="flex flex-col gap-3 flex-1 overflow-hidden justify-center">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : msg.type === "system" ? "justify-center" : "justify-start"}`}>
                            {msg.type === "system" ? (
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                    <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
                                    <span className="text-[8px] font-mono italic" style={{ color: "rgba(255,255,255,0.30)" }}>{msg.text}</span>
                                </div>
                            ) : msg.type === "user" ? (
                                <div
                                    className="px-4 py-2.5 rounded-2xl text-[10px] leading-snug max-w-[55%]"
                                    style={{ background: "rgba(208,188,255,0.14)", border: "1px solid rgba(208,188,255,0.25)", color: "rgba(255,255,255,0.90)", backdropFilter: "blur(16px)" }}
                                >
                                    {msg.text}
                                </div>
                            ) : (
                                <div className="flex items-start gap-2.5 max-w-[80%]">
                                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, #8b5cf6, #6366f1)", boxShadow: "0 0 8px rgba(139,92,246,0.35)" }} />
                                    <div
                                        className="px-4 py-2.5 rounded-2xl text-[10px] leading-relaxed"
                                        style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(28px)", border: "1px solid rgba(255,255,255,0.11)", color: "rgba(255,255,255,0.80)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Voice input bar */}
                <div
                    className="flex items-center gap-4 px-5 py-3 rounded-full"
                    style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(28px)", border: "1px solid rgba(255,255,255,0.10)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
                >
                    <Waveform color="#d0bcff" bars={9} height={14} />
                    <span className="text-[9px] flex-1" style={{ color: "rgba(255,255,255,0.22)" }}>Speak or wait for Ava…</span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "rgba(208,188,255,0.15)", border: "1px solid rgba(208,188,255,0.25)" }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: "#d0bcff" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const SCREEN_COMPONENTS: Record<string, React.FC> = {
    org_map: OrgMapScreen,
    team_detail: TeamDetailScreen,
    tool_discovery: ToolDiscoveryScreen,
    ai_agent: AIAgentScreen,
};

/* ─── Main export ──────────────────────────────────────── */
export function OrbitUI() {
    const [active, setActive] = useState("org_map");
    const ActiveScreen = SCREEN_COMPONENTS[active];

    return (
        <section className="py-24 px-6 bg-[#0e0e0e] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#d0bcff]/15" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-[10px] font-bold text-[#d0bcff] uppercase tracking-[0.25em] mb-5">
                        04b — Product UI
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.95] text-white mb-4 uppercase"
                        style={{ fontFamily: "var(--font-epilogue, var(--font-inter))" }}
                    >
                        The product, in space.
                    </h2>
                    <p className="text-lg text-[#adaaaa] max-w-2xl leading-relaxed">
                        Four key states of the Orbit visionOS interface — designed for spatial computing&apos;s gaze, pinch, and voice interaction model.
                    </p>
                </motion.div>

                {/* Tab bar */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-5"
                >
                    {SCREENS.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => setActive(s.id)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
                            style={{
                                background: active === s.id ? "rgba(208,188,255,0.10)" : "rgba(255,255,255,0.04)",
                                border: active === s.id ? "1px solid rgba(208,188,255,0.28)" : "1px solid rgba(255,255,255,0.07)",
                                color: active === s.id ? "#d0bcff" : "rgba(255,255,255,0.40)",
                                boxShadow: active === s.id ? "0 0 16px rgba(208,188,255,0.08)" : undefined,
                            }}
                        >
                            {s.label}
                            <span
                                className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold tracking-widest uppercase"
                                style={{
                                    background: active === s.id ? "rgba(208,188,255,0.15)" : "rgba(255,255,255,0.05)",
                                    color: active === s.id ? "#d0bcff" : "rgba(255,255,255,0.22)",
                                }}
                            >
                                {s.tag}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* visionOS window frame */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="relative rounded-3xl overflow-hidden"
                    style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 48px 120px rgba(208,188,255,0.07), 0 16px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(208,188,255,0.03)",
                    }}
                >
                    {/* Window chrome */}
                    <div
                        className="flex items-center justify-between px-6 py-3.5"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            backdropFilter: "blur(20px)",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(208,188,255,0.40)", boxShadow: "0 0 6px rgba(208,188,255,0.30)" }} />
                            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                            <div className="w-3 h-3 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.20)" }}>
                            Orbit · visionOS · {SCREENS.find(s => s.id === active)?.label}
                        </span>
                        <div className="w-16" />
                    </div>

                    {/* Screen */}
                    <div className="relative" style={{ height: 440 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.985, y: 8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.985, y: -8 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0"
                            >
                                <ActiveScreen />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
