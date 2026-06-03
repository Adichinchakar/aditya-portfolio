"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "@/lib/motion";
import { Check, Loader2, RefreshCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export function SmartButton() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const buttonRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const magneticX = useTransform(x, [-100, 100], [-20, 20]);
    const magneticY = useTransform(y, [-100, 100], [-20, 20]);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleClick = () => {
        if (status !== "idle") return;
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            // Reset magnetic effect on click so it doesn't stay stuck
            x.set(0);
            y.set(0);
        }, 2000);
    };

    const handleReset = () => {
        setStatus("idle");
    };

    return (
        <div className="flex flex-col items-center gap-8 w-full max-w-sm mx-auto">
            <div className="h-24 flex items-center justify-center relative w-full">
                <AnimatePresence mode="wait">
                    {status === "idle" && (
                        <motion.button
                            ref={buttonRef}
                            key="idle"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ x: magneticX, y: magneticY }}
                            onClick={handleClick}
                            className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium px-8 py-3.5 rounded-2xl shadow-xl transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            Deploy Project
                        </motion.button>
                    )}

                    {status === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ width: "48px", borderRadius: "24px", opacity: 0 }}
                            animate={{ width: "48px", borderRadius: "50%", opacity: 1 }}
                            exit={{ width: "48px", opacity: 0, scale: 0.8 }}
                            className="bg-zinc-700 text-zinc-900 w-12 h-12 flex items-center justify-center rounded-full"
                        >
                            <Loader2 className="w-5 h-5 animate-spin" />
                        </motion.div>
                    )}

                    {status === "success" && (
                        <motion.div
                            key="success"
                            initial={{ width: "48px", opacity: 0, scale: 0.8 }}
                            animate={{ width: "auto", borderRadius: "24px", opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-green-500 text-emerald-950 px-5 py-3 rounded-full flex items-center gap-2.5 font-semibold shadow-lg shadow-green-500/20 relative"
                        >
                            {/* Celebration particles */}
                            <motion.div
                                initial={{ opacity: 1, scale: 0 }}
                                animate={{ opacity: 0, scale: 1.5 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 bg-green-400 rounded-full z-0"
                            />
                            <div className="relative z-10 flex items-center gap-2">
                                <Check className="w-5 h-5" />
                                <span>Deployed!</span>
                                <Sparkles className="w-4 h-4 text-emerald-800 animate-pulse ml-1" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={handleReset}
                className={cn(
                    "text-zinc-500 hover:text-zinc-700 text-sm flex items-center gap-2 transition-colors",
                    status === "idle" && "opacity-0 pointer-events-none"
                )}
            >
                <RefreshCcw className="w-3 h-3" />
                Reset
            </button>
        </div>
    );
}
