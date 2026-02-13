"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export function SmartButton() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleClick = () => {
        if (status !== "idle") return;
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
        }, 2000);
    };

    const handleReset = () => {
        setStatus("idle");
    };

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="h-12 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {status === "idle" && (
                        <motion.button
                            key="idle"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleClick}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow-lg shadow-blue-500/20 transition-colors"
                        >
                            Deploy Project
                        </motion.button>
                    )}

                    {status === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ width: "48px", borderRadius: "24px", opacity: 0 }}
                            animate={{ width: "48px", borderRadius: "50%", opacity: 1 }}
                            exit={{ width: "48px", opacity: 0, scale: 0.8 }}
                            className="bg-zinc-700 text-white w-12 h-12 flex items-center justify-center rounded-full"
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
                            className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium shadow-lg shadow-green-500/20"
                        >
                            <Check className="w-4 h-4" />
                            <span>Deployed!</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={handleReset}
                className={cn(
                    "text-zinc-500 hover:text-zinc-300 text-sm flex items-center gap-2 transition-colors",
                    status === "idle" && "opacity-0 pointer-events-none"
                )}
            >
                <RefreshCcw className="w-3 h-3" />
                Reset
            </button>
        </div>
    );
}
