"use client";

import React from "react";
import { motion } from "framer-motion";
import { Languages, Fingerprint, WifiOff, Eye } from "lucide-react";

const FEATURES = [
    {
        title: "Iconography Over Text",
        description: "Designed for varying literacy levels. Core actions rely heavily on universally recognizable medical symbols (e.g., Red Cross, Pill, Stethoscope) rather than text labels.",
        icon: Eye,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        title: "8 Indian Languages",
        description: "Full localization engine supporting Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, Kannada, and English — dynamically switching based on the patient's device locale.",
        icon: Languages,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        title: "Offline-First Architecture",
        description: "Progressive Web App (PWA) caches the most recent medical summary. Patients in low-connectivity rural areas can still show their QR code and basic history to a doctor.",
        icon: WifiOff,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        title: "Aadhaar / ABHA Fingerprint",
        description: "No complex passwords to remember. Authentication leverages India's existing biometric Aadhaar infrastructure for frictionless logins at Primary Health Centers.",
        icon: Fingerprint,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
];

export function InclusiveDesign() {
    return (
        <section className="py-32 px-6 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
            {/* Ambient gradients */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" aria-hidden="true" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="mb-20 md:mb-24 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                            Building for the<br />
                            <span className="text-zinc-500">Next Billion Users.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                            To succeed in India, a healthcare app cannot just be a translated Silicon Valley paradigm. It must fundamentally account for low literacy, cheap smartphones, and spotty 3G connections.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: UI Comparison mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50" />

                        <div className="relative bg-[#1A1A1A] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex">
                            {/* Half 1: English (Urban) */}
                            <div className="w-1/2 border-r border-zinc-800 p-6 opacity-70">
                                <div className="text-[10px] font-bold text-zinc-500 mb-6 uppercase tracking-wider">English Locale</div>
                                <div className="space-y-4">
                                    <div className="h-10 bg-zinc-800/50 rounded-xl w-full" />
                                    <div className="h-6 bg-zinc-800 rounded-lg w-3/4" />
                                    <div className="h-24 bg-zinc-800/50 rounded-xl w-full border border-zinc-700/50" />
                                    <div className="h-12 flex gap-2">
                                        <div className="flex-1 bg-zinc-800/50 rounded-lg" />
                                        <div className="flex-1 bg-zinc-800/50 rounded-lg" />
                                    </div>
                                </div>
                            </div>

                            {/* Half 2: Hindi (Rural + Accessible) */}
                            <div className="w-1/2 p-6 bg-[#222]">
                                <div className="text-[10px] font-bold text-blue-400 mb-6 uppercase tracking-wider">Hindi Locale + Accessible Mode</div>
                                <div className="space-y-4">
                                    <div className="h-10 bg-blue-500/20 rounded-xl w-full flex items-center px-3 border border-blue-500/30">
                                        <div className="w-5 h-5 rounded-full bg-blue-500" />
                                    </div>
                                    {/* Simulated Hindi Script */}
                                    <div className="flex gap-1.5 flex-wrap">
                                        <div className="h-6 bg-zinc-300 rounded-md w-8" />
                                        <div className="h-6 bg-zinc-300 rounded-md w-12" />
                                        <div className="h-6 bg-zinc-300 rounded-md w-10" />
                                    </div>
                                    <div className="h-24 bg-[#2A2A2A] rounded-xl w-full border-2 border-zinc-600 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border-4 border-zinc-500" />
                                    </div>
                                    <div className="h-12 flex gap-2">
                                        <div className="flex-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                                            <div className="w-4 h-4 bg-emerald-500 rounded-full" />
                                        </div>
                                        <div className="flex-1 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                                            <div className="w-4 h-4 bg-red-500 rounded-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Annotations */}
                        <div className="absolute -right-8 top-1/3 bg-zinc-800 border border-zinc-700 text-white text-xs py-1.5 px-3 rounded-full shadow-xl">
                            High Contrast Icons
                        </div>
                        <div className="absolute -left-6 bottom-1/4 bg-blue-900 border border-blue-700 text-blue-100 text-xs py-1.5 px-3 rounded-full shadow-xl">
                            Dynamic Layout
                        </div>
                    </motion.div>

                    {/* Right: Features */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {FEATURES.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-zinc-800/50 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800 transition-colors"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.bg} ${feature.border} border`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed font-medium">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
