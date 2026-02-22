"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Box, Component, MousePointer2 } from "lucide-react";

type Level = "atoms" | "molecules" | "organisms";

export function AtomicExplorer() {
    const [activeLevel, setActiveLevel] = useState<Level>("atoms");

    const levels = {
        atoms: {
            title: "Atoms",
            icon: Box,
            description: "The fundamental building blocks. Cannot be broken down further.",
            items: [
                { id: "avatar", label: "Avatar", class: "w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" },
                { id: "label", label: "Label", class: "text-sm font-medium text-zinc-900", content: "Jane Doe" },
                { id: "status", label: "Status", class: "w-3 h-3 rounded-full bg-green-500 ring-2 ring-zinc-950" },
                { id: "icon", label: "Icon", class: "text-zinc-600", content: <Layers className="w-4 h-4" /> }
            ]
        },
        molecules: {
            title: "Molecules",
            icon: Component,
            description: "Groups of atoms tailored for specific utility.",
            items: [
                {
                    id: "user-row",
                    label: "User Row",
                    component: (
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-zinc-200">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 ring-2 ring-zinc-900" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-zinc-900">Jane Doe</div>
                                <div className="text-xs text-zinc-500">Product Designer</div>
                            </div>
                        </div>
                    )
                }
            ]
        },
        organisms: {
            title: "Organisms",
            icon: Layers,
            description: "Complex UI sections composed of groups of molecules and/or atoms.",
            items: [
                {
                    id: "team-card",
                    label: "Team Card",
                    component: (
                        <div className="w-full max-w-xs p-5 rounded-2xl bg-white/50 border border-zinc-200 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-zinc-800 font-medium">Design Team</h3>
                                <div className="px-2 py-1 rounded-md bg-purple-500/10 text-xs text-purple-400 font-mono">ACTIVE</div>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-100/50 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/50 to-blue-500/50" />
                                        <div>
                                            <div className="w-20 h-3 bg-zinc-100 rounded mb-1" />
                                            <div className="w-12 h-2 bg-zinc-100/50 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2 rounded-lg bg-black/5 hover:bg-black/10 text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
                                View All Members
                            </button>
                        </div>
                    )
                }
            ]
        }
    };

    return (
        <section className="py-24 px-6 bg-zinc-50">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Controls */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                            <MousePointer2 className="w-3 h-3" />
                            Interactive
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                            Atomic Construction
                        </h2>
                        <p className="text-zinc-600 text-lg mb-12">
                            We decompose complex interfaces into fundamental building blocks, ensuring consistency at every scale.
                        </p>

                        <div className="space-y-4">
                            {(Object.keys(levels) as Level[]).map((level) => {
                                const isActive = activeLevel === level;
                                const LevelIcon = levels[level].icon;
                                return (
                                    <button
                                        key={level}
                                        onClick={() => setActiveLevel(level)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 ${isActive
                                                ? "bg-white border-purple-500/50 shadow-lg shadow-purple-900/10"
                                                : "bg-transparent border-zinc-200 hover:bg-white/50 hover:border-zinc-700"
                                            }`}
                                    >
                                        <div className={`p-3 rounded-lg ${isActive ? "bg-purple-500 text-zinc-900" : "bg-zinc-100 text-zinc-600"}`}>
                                            <LevelIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold ${isActive ? "text-zinc-900" : "text-zinc-700"}`}>
                                                {levels[level].title}
                                            </h3>
                                            <p className="text-sm text-zinc-500 mt-1">
                                                {levels[level].description}
                                            </p>
                                        </div>
                                        {isActive && (
                                            <div className="ml-auto w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Visualizer */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl rounded-full opacity-30" />

                        <div className="relative min-h-[500px] bg-white/50 border border-zinc-200 rounded-3xl p-8 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeLevel}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10 w-full flex flex-col items-center"
                                >
                                    {activeLevel === "atoms" && (
                                        <div className="grid grid-cols-2 gap-8">
                                            {levels.atoms.items.map((item, i) => (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-600 transition-colors"
                                                >
                                                    <div className="h-16 w-16 flex items-center justify-center">
                                                        {item.content ? item.content : <div className={item.class} />}
                                                    </div>
                                                    <span className="text-xs font-mono text-zinc-500">{item.label}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {activeLevel === "molecules" && (
                                        <div className="w-full max-w-md">
                                            {levels.molecules.items.map((item) => (
                                                <div key={item.id} className="transform scale-125">
                                                    {item.component}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeLevel === "organisms" && (
                                        <div className="w-full flex justify-center">
                                            {levels.organisms.items.map((item) => (
                                                <div key={item.id}>
                                                    {item.component}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
