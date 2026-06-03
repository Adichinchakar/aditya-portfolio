"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { CreditCard, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function PaymentCard() {
    const [state, setState] = useState<"idle" | "processing" | "success">("idle");

    const handlePay = () => {
        if (state !== "idle") return;
        setState("processing");
        setTimeout(() => setState("success"), 2500);
    };

    const reset = () => {
        setState("idle");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <motion.div
                layout
                className="w-full bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-zinc-100"
            >
                <AnimatePresence mode="wait">
                    {state === "idle" && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="p-6"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-semibold text-zinc-800">Payment Details</h3>
                                <div className="bg-zinc-100 p-2 rounded-full">
                                    <CreditCard className="w-5 h-5 text-zinc-500" />
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="h-12 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center px-4">
                                    <span className="text-zinc-400 font-mono text-sm tracking-widest">**** **** **** 4242</span>
                                    <div className="ml-auto flex gap-1">
                                        <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                                        <div className="w-6 h-4 bg-orange-500 rounded-sm opacity-80 mix-blend-multiply -ml-3"></div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center px-4 flex-1">
                                        <span className="text-zinc-400 font-mono text-sm">12/26</span>
                                    </div>
                                    <div className="h-12 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center px-4 flex-1">
                                        <span className="text-zinc-400 font-mono text-sm">CVC</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-6 px-1">
                                <span className="text-zinc-500 text-sm">Total Amount</span>
                                <span className="text-2xl font-bold text-zinc-900">$99.00</span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handlePay}
                                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 transition-colors relative overflow-hidden group"
                            >
                                <Lock className="w-4 h-4 text-zinc-400" />
                                Pay Now
                                <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />

                                {/* Shiny effect overlay */}
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                            </motion.button>
                        </motion.div>
                    )}

                    {state === "processing" && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="p-12 flex flex-col items-center justify-center h-[340px]"
                        >
                            <div className="relative w-16 h-16 mb-6">
                                <motion.svg
                                    className="absolute inset-0 w-full h-full text-zinc-200"
                                    viewBox="0 0 50 50"
                                >
                                    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" stroke="currentColor" />
                                </motion.svg>
                                <motion.svg
                                    className="absolute inset-0 w-full h-full text-zinc-900 origin-center"
                                    viewBox="0 0 50 50"
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                >
                                    <motion.circle
                                        cx="25" cy="25" r="20" fill="none" strokeWidth="4" stroke="currentColor"
                                        strokeDasharray="1 150"
                                        strokeDashoffset="0"
                                        strokeLinecap="round"
                                        animate={{
                                            strokeDasharray: ["1 150", "90 150", "90 150"],
                                            strokeDashoffset: [0, -40, -120]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 1.5,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.svg>
                            </div>
                            <p className="text-zinc-600 font-medium">Processing payment...</p>
                            <p className="text-zinc-400 text-sm mt-2">Please don't close this window</p>
                        </motion.div>
                    )}

                    {state === "success" && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-12 flex flex-col items-center justify-center h-[340px]"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 relative"
                            >
                                <CheckCircle2 className="w-8 h-8" />
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                    className="absolute inset-0 rounded-full border-2 border-green-400"
                                />
                            </motion.div>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-xl font-bold text-zinc-900 mb-2"
                            >
                                Payment Successful
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-zinc-500 text-center"
                            >
                                Your receipt has been sent to your email.
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {state === "success" && (
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={reset}
                    className="mt-6 text-zinc-400 hover:text-zinc-600 text-sm font-medium transition-colors"
                >
                    Restart Demo
                </motion.button>
            )}
        </div>
    );
}
