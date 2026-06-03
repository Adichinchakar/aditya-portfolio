"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Play, Pause, FastForward, Rewind, Music } from "lucide-react";

export function DynamicIsland() {
    const [expanded, setExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <motion.div
                layout
                onClick={() => setExpanded(!expanded)}
                initial={{ borderRadius: 32 }}
                animate={{
                    width: expanded ? 320 : 160,
                    height: expanded ? 160 : 48,
                    borderRadius: expanded ? 32 : 24,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                }}
                className="bg-black text-white cursor-pointer relative overflow-hidden flex items-center shadow-xl"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpanded(!expanded);
                    }
                }}
            >
                <AnimatePresence mode="wait">
                    {!expanded ? (
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center justify-between w-full px-4"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                    <Music className="w-3 h-3 text-white" />
                                </div>
                                <div className="flex gap-0.5 items-end h-3">
                                    <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-0.5 bg-blue-400 rounded-full" />
                                    <motion.div animate={{ height: [8, 4, 8] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-0.5 bg-blue-400 rounded-full" />
                                    <motion.div animate={{ height: [6, 10, 6] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-0.5 bg-blue-400 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="w-full h-full p-6 flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg" />
                                <div className="flex-1">
                                    <h4 className="font-semibold text-white/90 truncate">Midnight City</h4>
                                    <p className="text-sm text-white/50 truncate">M83</p>
                                </div>
                                <div className="flex gap-0.5 items-end h-4 mt-1">
                                    <motion.div animate={{ height: isPlaying ? [6, 14, 6] : 4 }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-1 bg-blue-400 rounded-full" />
                                    <motion.div animate={{ height: isPlaying ? [10, 4, 10] : 4 }} transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }} className="w-1 bg-blue-400 rounded-full" />
                                    <motion.div animate={{ height: isPlaying ? [8, 16, 8] : 4 }} transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }} className="w-1 bg-blue-400 rounded-full" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-8 mt-2">
                                <button aria-label="Rewind" className="text-white/50 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                    <Rewind className="w-6 h-6 fill-current" />
                                </button>
                                <button
                                    aria-label={isPlaying ? "Pause" : "Play"}
                                    className="text-white hover:scale-110 transition-transform"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsPlaying(!isPlaying);
                                    }}
                                >
                                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current translate-x-0.5" />}
                                </button>
                                <button aria-label="Fast Forward" className="text-white/50 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                    <FastForward className="w-6 h-6 fill-current" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <p className="text-xs text-zinc-400 mt-6 mt-8">Click the pill to expand</p>
        </div>
    );
}
