"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CheckCircle2, Globe2, ArrowRight, AlertCircle, CheckCheck, Eye, Type, Contrast } from "lucide-react";

// ── Accessibility Audit Simulation Data ────────────────────────────────────────
const auditChecks = [
    {
        id: "contrast",
        icon: Contrast,
        label: "Color Contrast",
        element: "Button / CTA",
        ratio: "7.2:1",
        status: "pass",
        wcag: "AAA",
        delay: 0.6,
    },
    {
        id: "text-size",
        icon: Type,
        label: "Text Size",
        element: "Body Copy",
        ratio: "16px",
        status: "pass",
        wcag: "AA",
        delay: 1.1,
    },
    {
        id: "focus",
        icon: Eye,
        label: "Focus Indicators",
        element: "Nav Links",
        ratio: "3px ring",
        status: "pass",
        wcag: "AA",
        delay: 1.6,
    },
    {
        id: "alt-text",
        icon: AlertCircle,
        label: "Alt Text Missing",
        element: "Hero Image",
        ratio: "—",
        status: "fail",
        wcag: "A",
        delay: 2.1,
    },
];

function AuditPanel() {
    const [progress, setProgress] = useState(0);
    const [fixed, setFixed] = useState(false);

    useEffect(() => {
        // Animate progress bar to 94%
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setProgress((p) => {
                    if (p >= 94) { clearInterval(interval); return 94; }
                    return p + 2;
                });
            }, 30);
        }, 400);
        // Show "Fixed" badge after all checks complete
        const fixedTimer = setTimeout(() => setFixed(true), 3200);
        return () => { clearTimeout(timer); clearTimeout(fixedTimer); };
    }, []);

    return (
        <div className="relative bg-white border border-zinc-200 rounded-xl shadow-xl overflow-hidden flex flex-col" style={{ minHeight: 320 }}>
            {/* Window chrome */}
            <div className="h-10 border-b border-zinc-100 bg-zinc-50 flex items-center px-4 gap-2 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto text-xs text-zinc-400 font-mono tracking-tight">Aulys — Accessibility Audit</div>
            </div>

            {/* Body */}
            <div className="flex-1 p-5 space-y-4">
                {/* Progress bar */}
                <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium text-zinc-500">
                        <span>Scanning layers…</span>
                        <span className="tabular-nums">{progress}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            style={{ width: `${progress}%` }}
                            transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        />
                    </div>
                </div>

                {/* Audit checks */}
                <div className="space-y-2">
                    {auditChecks.map((check) => {
                        const Icon = check.icon;
                        const isPass = check.status === "pass";
                        return (
                            <motion.div
                                key={check.id}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: check.delay, duration: 0.3 }}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border text-sm ${isPass
                                        ? "bg-emerald-50/60 border-emerald-100"
                                        : "bg-red-50/60 border-red-100"
                                    }`}
                            >
                                <div className={`shrink-0 p-1.5 rounded-lg ${isPass ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-500"}`}>
                                    <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="font-semibold text-zinc-800 text-xs">{check.label}</span>
                                        <span className="text-zinc-400 text-[11px]">{check.element}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${isPass ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                                        WCAG {check.wcag}
                                    </span>
                                    {isPass
                                        ? <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        : <AlertCircle className="w-4 h-4 text-red-400" />}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Fixed badge */}
            <AnimatePresence>
                {fixed && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                        className="absolute -bottom-3 -right-3 bg-white border border-zinc-200 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                    >
                        <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
                            <CheckCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-zinc-900">Auto-Fixed 1 Issue</div>
                            <div className="text-xs text-zinc-500">Alt text applied via AI</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function AulysShowcase() {
    return (
        <section className="container mx-auto px-6 py-24 max-w-6xl">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200 p-8 md:p-12 lg:p-16">

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-semibold">
                                Featured Project
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
                                Aulys: The AI Accessibility Engine
                            </h2>
                            <p className="text-lg text-zinc-600 max-w-xl">
                                Figma Plugin &amp; SaaS Platform • Built with React 19, Vite, &amp; TypeScript.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <div className="p-2 w-fit rounded-lg bg-white border border-zinc-200 text-zinc-900">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-zinc-900">Ultra Fast</h4>
                                <p className="text-sm text-zinc-500">Scans 500+ layers in &lt;10s</p>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2 w-fit rounded-lg bg-white border border-zinc-200 text-zinc-900">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-zinc-900">Auto Fix</h4>
                                <p className="text-sm text-zinc-500">Automated WCAG 2.2 Fixes</p>
                            </div>
                            <div className="space-y-2">
                                <div className="p-2 w-fit rounded-lg bg-white border border-zinc-200 text-zinc-900">
                                    <Globe2 className="w-5 h-5" />
                                </div>
                                <h4 className="font-semibold text-zinc-900">Global</h4>
                                <p className="text-sm text-zinc-500">Internationalization (RTL/CJK)</p>
                            </div>
                        </div>

                        <Link href="/work/aulys">
                            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-sm">
                                View Technical Case Study <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>

                    {/* Audit Simulation Panel */}
                    <div className="relative pb-6 pr-6">
                        <AuditPanel />
                    </div>
                </div>
            </div>
        </section>
    );
}
