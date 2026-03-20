"use client";

import React from "react";
import { motion } from "framer-motion";

const tokenColors = [
    { name: "color.interactive.primary", hex: "#7C3AED", label: "Primary", shade: "violet-700" },
    { name: "color.interactive.secondary", hex: "#4338CA", label: "Secondary", shade: "indigo-700" },
    { name: "color.feedback.success", hex: "#059669", label: "Success", shade: "emerald-600" },
    { name: "color.feedback.warning", hex: "#D97706", label: "Warning", shade: "amber-600" },
    { name: "color.feedback.error", hex: "#DC2626", label: "Error", shade: "red-600" },
    { name: "color.surface.default", hex: "#F4F4F5", label: "Surface", shade: "zinc-100" },
];

const typeScale = [
    { name: "Display", size: "48px / 3rem", weight: "700", line: "1.1", sample: "Aa" },
    { name: "Heading 1", size: "36px / 2.25rem", weight: "700", line: "1.2", sample: "Aa" },
    { name: "Heading 2", size: "24px / 1.5rem", weight: "600", line: "1.3", sample: "Aa" },
    { name: "Body Large", size: "18px / 1.125rem", weight: "400", line: "1.6", sample: "Aa" },
    { name: "Body", size: "16px / 1rem", weight: "400", line: "1.6", sample: "Aa" },
    { name: "Caption", size: "12px / 0.75rem", weight: "500", line: "1.4", sample: "Aa" },
];

const buttonVariants = [
    { label: "Primary", bg: "#7C3AED", text: "#fff", border: "transparent" },
    { label: "Secondary", bg: "transparent", text: "#7C3AED", border: "#7C3AED" },
    { label: "Ghost", bg: "transparent", text: "#52525B", border: "transparent" },
    { label: "Destructive", bg: "#DC2626", text: "#fff", border: "transparent" },
];

const inputStates = [
    { label: "Default", border: "#D4D4D8", bg: "#fff", placeholder: "Enter value...", tag: "default" },
    { label: "Focus", border: "#7C3AED", bg: "#fff", placeholder: "Enter value...", tag: "focus" },
    { label: "Error", border: "#DC2626", bg: "#FEF2F2", placeholder: "Invalid input", tag: "error" },
    { label: "Disabled", border: "#E4E4E7", bg: "#F4F4F5", placeholder: "Disabled", tag: "disabled" },
];

export function SystemPreview() {
    return (
        <div className="space-y-12">
            {/* Token Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Color Tokens</p>
                <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {tokenColors.map((t) => (
                            <div key={t.name} className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-lg flex-shrink-0 shadow-sm"
                                    style={{ background: t.hex, border: t.hex === "#F4F4F5" ? "1px solid #e4e4e7" : "none" }}
                                />
                                <div className="min-w-0">
                                    <div className="text-xs font-bold text-zinc-800">{t.label}</div>
                                    <div className="text-[10px] font-mono text-zinc-500 truncate">{t.name.split(".").slice(1).join(".")}</div>
                                    <div className="text-[10px] font-mono text-zinc-400">{t.hex}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
                        42 tokens across 6 categories · Figma Variables + CSS custom properties + Tailwind config
                    </div>
                </div>
            </motion.div>

            {/* Typography Scale */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
                <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Type Scale</p>
                <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-4 text-[10px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100 px-5 py-2.5">
                        <div>Style</div>
                        <div>Size / REM</div>
                        <div>Weight</div>
                        <div>Sample</div>
                    </div>
                    {typeScale.map((t, i) => (
                        <div
                            key={t.name}
                            className={`grid grid-cols-4 items-center px-5 py-2.5 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"}`}
                        >
                            <div className="text-xs font-semibold text-zinc-700">{t.name}</div>
                            <div className="text-[10px] font-mono text-zinc-500">{t.size}</div>
                            <div className="text-[10px] font-mono text-zinc-500">{t.weight} / {t.line}</div>
                            <div
                                className="text-zinc-800 font-sans"
                                style={{
                                    fontSize: Math.max(parseInt(t.size) * 0.35, 10),
                                    fontWeight: parseInt(t.weight),
                                    lineHeight: t.line,
                                }}
                            >
                                {t.sample}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Component Examples */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Components</p>
                <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm space-y-6">
                    {/* Buttons */}
                    <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Button — 4 Variants</div>
                        <div className="flex flex-wrap gap-2">
                            {buttonVariants.map((b) => (
                                <button
                                    key={b.label}
                                    className="text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                                    style={{
                                        background: b.bg,
                                        color: b.text,
                                        border: `1.5px solid ${b.border === "transparent" ? b.bg || "transparent" : b.border}`,
                                    }}
                                >
                                    {b.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Inputs */}
                    <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Input — 4 States</div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {inputStates.map((s) => (
                                <div key={s.label}>
                                    <div className="text-[10px] text-zinc-400 mb-1">{s.label}</div>
                                    <div
                                        className="rounded-lg px-3 py-2 text-xs"
                                        style={{
                                            background: s.bg,
                                            border: `1.5px solid ${s.border}`,
                                            color: s.tag === "disabled" ? "#a1a1aa" : "#27272a",
                                            boxShadow: s.tag === "focus" ? `0 0 0 3px #7C3AED26` : "none",
                                        }}
                                    >
                                        {s.placeholder}
                                    </div>
                                    {s.tag === "error" && (
                                        <div className="text-[9px] text-red-500 mt-0.5">This field is required</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Badges */}
                    <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Badge — Status Variants</div>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { label: "Active", bg: "#D1FAE5", text: "#065F46" },
                                { label: "Pending", bg: "#FEF3C7", text: "#92400E" },
                                { label: "Error", bg: "#FEE2E2", text: "#991B1B" },
                                { label: "Draft", bg: "#F3F4F6", text: "#374151" },
                                { label: "New", bg: "#EDE9FE", text: "#5B21B6" },
                            ].map((badge) => (
                                <span
                                    key={badge.label}
                                    className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                                    style={{ background: badge.bg, color: badge.text }}
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-2 border-t border-zinc-100 text-[11px] text-zinc-400 font-mono">
                        28 components · Atomic design structure · Auto-layout + tokenized · 42% dev iteration improvement
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
