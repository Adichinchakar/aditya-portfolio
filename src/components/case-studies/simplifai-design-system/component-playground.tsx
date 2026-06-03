"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Moon, Sun, AlignJustify, AlignCenterHorizontal, Maximize2, Bell, Search, Zap, MoreVertical } from "lucide-react";

type Theme = "light" | "dark";
type Density = "comfortable" | "compact";
type Radius = "none" | "sm" | "lg" | "full";

const radiusMap: Record<Radius, string> = {
    none: "rounded-none",
    sm: "rounded-md",
    lg: "rounded-2xl",
    full: "rounded-full",
};

const radiusCardMap: Record<Radius, string> = {
    none: "rounded-none",
    sm: "rounded-lg",
    lg: "rounded-3xl",
    full: "rounded-[2rem]",
};

export function ComponentPlayground() {
    const [theme, setTheme] = useState<Theme>("light");
    const [density, setDensity] = useState<Density>("comfortable");
    const [radius, setRadius] = useState<Radius>("lg");

    const isDark = theme === "dark";
    const isCompact = density === "compact";

    const surface = isDark ? "bg-zinc-900" : "bg-white";
    const surfaceAlt = isDark ? "bg-zinc-800" : "bg-zinc-50";
    const border = isDark ? "border-zinc-700" : "border-zinc-200";
    const textPrimary = isDark ? "text-white" : "text-zinc-900";
    const textSecondary = isDark ? "text-zinc-400" : "text-zinc-500";
    const iconColor = isDark ? "text-zinc-400" : "text-zinc-500";

    return (
        <section className="py-24 px-6 bg-white border-t border-zinc-100">
            <div className="container mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Maximize2 className="w-3.5 h-3.5" />
                        Interactive Playground
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4"
                    >
                        Tweak the knobs.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Watch the system flex.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-xl font-medium"
                    >
                        Every control here maps to a real token group. Theme, density, and radius all cascade from a single source of truth.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">

                    {/* Controls panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50 border border-zinc-200 rounded-3xl p-7 space-y-8"
                    >

                        {/* Theme */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 block">
                                Theme <span className="font-mono text-zinc-300 normal-case tracking-normal">--color-scheme</span>
                            </label>
                            <div className="flex gap-2 p-1 bg-white border border-zinc-200 rounded-xl">
                                {([["light", Sun], ["dark", Moon]] as [Theme, React.ElementType][]).map(([t, Icon]) => (
                                    <button
                                        key={t}
                                        onClick={() => setTheme(t)}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${theme === t
                                            ? t === "dark"
                                                ? "bg-zinc-900 text-white shadow-sm"
                                                : "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                            : "text-zinc-500 hover:text-zinc-700"
                                            }`}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Density */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 block">
                                Density <span className="font-mono text-zinc-300 normal-case tracking-normal">--space-scale</span>
                            </label>
                            <div className="flex gap-2 p-1 bg-white border border-zinc-200 rounded-xl">
                                {([["comfortable", AlignJustify], ["compact", AlignCenterHorizontal]] as [Density, React.ElementType][]).map(([d, Icon]) => (
                                    <button
                                        key={d}
                                        onClick={() => setDensity(d)}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${density === d
                                            ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                            : "text-zinc-500 hover:text-zinc-700"
                                            }`}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        {d.charAt(0).toUpperCase() + d.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Radius */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 block">
                                Border Radius <span className="font-mono text-zinc-300 normal-case tracking-normal">--radius</span>
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {(["none", "sm", "lg", "full"] as Radius[]).map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setRadius(r)}
                                        className={`py-2.5 text-xs font-semibold border transition-all duration-200 ${radiusMap[r]} ${radius === r
                                            ? "bg-indigo-50 border-indigo-300 text-indigo-700"
                                            : "bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300"
                                            }`}
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Token readout */}
                        <div className="pt-2 border-t border-zinc-200">
                            <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3">Active Token Set</div>
                            <div className="space-y-2 font-mono text-xs">
                                <div className="flex justify-between">
                                    <span className="text-zinc-400">color-scheme:</span>
                                    <span className="text-purple-600 font-semibold">{theme}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-400">space-scale:</span>
                                    <span className="text-blue-600 font-semibold">{density === "comfortable" ? "1.0×" : "0.75×"}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-400">radius:</span>
                                    <span className="text-indigo-600 font-semibold">--radius-{radius}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Live preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`border ${isDark ? "border-zinc-700 bg-zinc-950" : "border-zinc-200 bg-zinc-100"} rounded-3xl p-6`}
                        style={{ backgroundImage: isDark ? "radial-gradient(circle at 1px 1px, #3f3f46 1px, transparent 0)" : "radial-gradient(circle at 1px 1px, #d4d4d8 1px, transparent 0)", backgroundSize: "20px 20px" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${theme}-${density}-${radius}`}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`${surface} border ${border} shadow-xl ${radiusCardMap[radius]} overflow-hidden`}
                            >
                                {/* App bar */}
                                <div className={`flex items-center justify-between ${isCompact ? "px-4 py-2.5" : "px-5 py-4"} border-b ${border} ${surfaceAlt}`}>
                                    <div className="flex items-center gap-2.5">
                                        <div className={`w-7 h-7 bg-purple-600 flex items-center justify-center ${radiusMap[radius]}`}>
                                            <Zap className="w-4 h-4 text-white" />
                                        </div>
                                        <span className={`text-sm font-bold ${textPrimary}`}>Simplifai</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Search className={`w-4 h-4 ${iconColor}`} />
                                        <Bell className={`w-4 h-4 ${iconColor}`} />
                                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                                    </div>
                                </div>

                                {/* Body */}
                                <div className={`${isCompact ? "p-4 space-y-3" : "p-5 space-y-4"}`}>
                                    {/* Stats row */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: "Flows", value: "24" },
                                            { label: "Runs", value: "4.1k" },
                                            { label: "Uptime", value: "99.9%" },
                                        ].map(stat => (
                                            <div
                                                key={stat.label}
                                                className={`${surfaceAlt} border ${border} ${radiusMap[radius]} ${isCompact ? "p-3" : "p-4"} text-center`}
                                            >
                                                <div className={`text-base font-black ${textPrimary}`}>{stat.value}</div>
                                                <div className={`text-[10px] ${textSecondary}`}>{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Card */}
                                    <div className={`${surfaceAlt} border ${border} ${radiusCardMap[radius]} ${isCompact ? "p-3" : "p-4"}`}>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className={`text-sm font-bold ${textPrimary}`}>Recent Flows</span>
                                            <MoreVertical className={`w-4 h-4 ${iconColor}`} />
                                        </div>
                                        <div className={`space-y-${isCompact ? "2" : "3"}`}>
                                            {[
                                                { name: "Lead Qualification", status: "Active", pct: 76 },
                                                { name: "Invoice Processing", status: "Paused", pct: 42 },
                                            ].map(row => (
                                                <div key={row.name} className={`flex items-center justify-between ${isCompact ? "py-1.5" : "py-2"}`}>
                                                    <div>
                                                        <div className={`text-xs font-semibold ${textPrimary}`}>{row.name}</div>
                                                        <div className="mt-1 h-1 w-24 rounded-full overflow-hidden" style={{ background: isDark ? "#3f3f46" : "#e4e4e7" }}>
                                                            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${row.pct}%` }} />
                                                        </div>
                                                    </div>
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 ${radiusMap[radius]} ${row.status === "Active"
                                                        ? isDark ? "bg-emerald-900/30 text-emerald-400 border border-emerald-800" : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                                        : isDark ? "bg-zinc-800 text-zinc-400 border border-zinc-700" : "bg-zinc-100 text-zinc-500 border border-zinc-200"
                                                        }`}>{row.status}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Button row */}
                                    <div className="flex gap-3">
                                        <button className={`flex-1 ${isCompact ? "py-2" : "py-2.5"} text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors ${radiusMap[radius]}`}>
                                            New Flow
                                        </button>
                                        <button className={`flex-1 ${isCompact ? "py-2" : "py-2.5"} text-sm font-semibold border ${border} ${textPrimary} transition-colors ${radiusMap[radius]} ${isDark ? "hover:bg-zinc-700" : "hover:bg-zinc-50"}`}>
                                            Export
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
