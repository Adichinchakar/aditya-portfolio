"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Monitor, Bell, Search, Menu, MoreVertical } from "lucide-react";

export function ComponentPlayground() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");
    const [radius, setRadius] = useState<"none" | "sm" | "md" | "lg" | "full">("md");

    const isDark = theme === "dark";

    const containerClasses = `
        w-full max-w-md mx-auto p-6 transition-all duration-300
        ${isDark ? "bg-white border-zinc-200" : "bg-white border-zinc-200"}
        border shadow-xl
        ${radius === "none" ? "rounded-none" : ""}
        ${radius === "sm" ? "rounded-sm" : ""}
        ${radius === "md" ? "rounded-md" : ""}
        ${radius === "lg" ? "rounded-xl" : ""}
        ${radius === "full" ? "rounded-3xl" : ""}
    `;

    const cardClasses = `
        p-4 mb-4 border transition-all duration-300
        ${isDark ? "bg-zinc-50/50 border-zinc-200" : "bg-zinc-50 border-zinc-200"}
        ${radius === "none" ? "rounded-none" : ""}
        ${radius === "sm" ? "rounded-sm" : ""}
        ${radius === "md" ? "rounded-md" : ""}
        ${radius === "lg" ? "rounded-xl" : ""}
        ${radius === "full" ? "rounded-2xl" : ""}
        ${density === "compact" ? "space-y-2" : "space-y-4"}
    `;

    const buttonClasses = `
        px-4 py-2 text-sm font-medium transition-colors
        ${isDark
            ? "bg-purple-600 hover:bg-purple-500 text-zinc-900"
            : "bg-purple-600 hover:bg-purple-700 text-zinc-900"}
        ${radius === "none" ? "rounded-none" : ""}
        ${radius === "sm" ? "rounded-sm" : ""}
        ${radius === "md" ? "rounded-md" : ""}
        ${radius === "lg" ? "rounded-lg" : ""}
        ${radius === "full" ? "rounded-full" : ""}
    `;

    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold text-zinc-900 mb-6">Interactive Playground</h2>
                        <p className="text-zinc-600 mb-12">
                            Test the flexibility of our components. Change themes, densities, and border radii to see how the system adapts instantly.
                        </p>

                        <div className="space-y-8">
                            {/* Theme Control */}
                            <div>
                                <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3 block">Theme</label>
                                <div className="flex gap-2 p-1 bg-white rounded-lg border border-zinc-200 inline-flex">
                                    {["dark", "light"].map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTheme(t as any)}
                                            className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${theme === t
                                                ? "bg-zinc-100 text-zinc-900 shadow-sm"
                                                : "text-zinc-600 hover:text-zinc-700"
                                                }`}
                                        >
                                            {t === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                                            {t.charAt(0).toUpperCase() + t.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Density Control */}
                            <div>
                                <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3 block">Density</label>
                                <div className="flex gap-2 p-1 bg-white rounded-lg border border-zinc-200 inline-flex">
                                    {["comfortable", "compact"].map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => setDensity(d as any)}
                                            className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${density === d
                                                ? "bg-zinc-100 text-zinc-900 shadow-sm"
                                                : "text-zinc-600 hover:text-zinc-700"
                                                }`}
                                        >
                                            <Monitor className="w-4 h-4" />
                                            {d.charAt(0).toUpperCase() + d.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Radius Control */}
                            <div>
                                <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3 block">Corner Radius</label>
                                <div className="flex flex-wrap gap-2">
                                    {["none", "sm", "md", "lg", "full"].map((r) => (
                                        <button
                                            key={r}
                                            onClick={() => setRadius(r as any)}
                                            className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${radius === r
                                                ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                                                : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-700"
                                                }`}
                                        >
                                            {r}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 flex items-center justify-center bg-[url('/grid-pattern.svg')]">
                        <motion.div
                            layout
                            className={containerClasses}
                        >
                            {/* Mock Application Header */}
                            <div className={`flex items-center justify-between mb-6 pb-4 border-b ${isDark ? "border-zinc-200" : "border-zinc-100"}`}>
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 ${isDark ? "bg-purple-600" : "bg-purple-600"} rounded-lg flex items-center justify-center text-zinc-900 font-bold`}>S</div>
                                    <span className={`font-semibold ${isDark ? "text-zinc-900" : "text-zinc-900"}`}>Simplifai</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Search className={`w-4 h-4 ${isDark ? "text-zinc-600" : "text-zinc-500"}`} />
                                    <Bell className={`w-4 h-4 ${isDark ? "text-zinc-600" : "text-zinc-500"}`} />
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                                </div>
                            </div>

                            {/* Mock Dashboard Content */}
                            <div className={cardClasses}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className={`font-semibold ${isDark ? "text-zinc-900" : "text-zinc-900"}`}>Performance Overview</h3>
                                        <p className={`text-xs ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>Last 30 Days</p>
                                    </div>
                                    <MoreVertical className={`w-4 h-4 ${isDark ? "text-zinc-500" : "text-zinc-600"}`} />
                                </div>

                                <div className="flex items-end gap-1 h-24 mt-4">
                                    {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-purple-500/20 rounded-t-sm relative group"
                                            style={{ height: `${h}%` }}
                                        >
                                            <div
                                                className="absolute bottom-0 w-full bg-purple-500 rounded-t-sm transition-all duration-500 group-hover:h-full"
                                                style={{ height: '0%' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className={buttonClasses}>Generate Report</button>
                                <button className={`px-4 py-2 text-sm font-medium transition-colors ${isDark
                                    ? "bg-zinc-100 hover:bg-zinc-700 text-zinc-900"
                                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900"
                                    } ${radius === "none" ? "rounded-none" :
                                        radius === "sm" ? "rounded-sm" :
                                            radius === "md" ? "rounded-md" :
                                                radius === "lg" ? "rounded-lg" :
                                                    radius === "full" ? "rounded-full" : ""
                                    }`}>
                                    Export
                                </button>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
