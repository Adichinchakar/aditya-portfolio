"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle, Wifi } from "lucide-react";

const CRISIS_STATS = [
    {
        value: "50L",
        label: "Deaths/year",
        sub: "Due to medical errors",
        icon: AlertTriangle,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
    },
    {
        value: "6,900+",
        label: "Cyberattacks/week",
        sub: "On Indian healthcare",
        icon: Shield,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        value: "55M",
        label: "People/year",
        sub: "Fall into poverty for healthcare",
        icon: Wifi,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
];

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50 min-h-[90vh] flex flex-col justify-center">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#005EB8]/6 rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-12 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#005EB8] focus-visible:ring-offset-2 rounded-md px-2 py-1 -ml-2"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span className="text-sm font-semibold tracking-wide">Back to Case Studies</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005EB8]/10 border border-[#005EB8]/25 text-[#005EB8] text-sm font-semibold mb-4 backdrop-blur-md"
                            aria-label="Case study type: Product Concept, 0 to 1 Design"
                        >
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005EB8] opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#005EB8]" />
                            </span>
                            Product Concept · 0→1 Design
                        </div>

                        <div className="p-4 rounded-xl bg-[#005EB8]/8 border border-[#005EB8]/20 text-sm text-[#005EB8] font-medium mb-6">
                            🏥 Speculative product design: This is a 0→1 design concept for India&apos;s ABDM ecosystem. Pilot metrics (Delhi NCR + Pune, 1,200 patients) reflect an internal proof-of-concept. No production deployment at scale.
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 mb-4 leading-[1.05]">
                            MedSecure:<br />
                            <span className="text-zinc-500 font-bold">
                                Blockchain Medical Records for India.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-lg mb-6 leading-relaxed font-medium">
                            Giving every Indian patient — urban or rural — a sovereign, tamper-proof medical identity on Hyperledger Fabric, accessible in their own language, even offline.
                        </p>

                        {/* Meta pills */}
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-bold tracking-wide">
                                Product Lead
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-semibold">
                                6 Months
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#005EB8]/10 text-[#005EB8] text-xs font-semibold border border-[#005EB8]/20">
                                ABDM Compliant
                            </span>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                            {["Hyperledger Fabric", "IPFS", "PWA Offline-First", "WCAG 2.1 AA"].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Crisis Stats Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                        aria-label="India healthcare crisis statistics"
                    >
                        <div className="relative rounded-[2rem] border border-white/50 bg-white/30 backdrop-blur-xl overflow-hidden p-2 shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                            <div className="bg-zinc-50/60 rounded-[1.5rem] p-6 border border-white/60 backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-zinc-900 font-bold tracking-tight text-sm">India Healthcare Crisis</h2>
                                    <div className="flex gap-1.5" aria-hidden="true">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {CRISIS_STATS.map((stat) => (
                                        <div
                                            key={stat.value}
                                            className={`flex items-center gap-4 p-4 rounded-2xl border ${stat.border} ${stat.bg}`}
                                        >
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/60`}>
                                                <stat.icon className={`w-5 h-5 ${stat.color}`} aria-hidden="true" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-2xl font-black text-zinc-900 tracking-tighter leading-none">
                                                    {stat.value}
                                                </div>
                                                <div className="text-xs font-bold text-zinc-700 mt-0.5">{stat.label}</div>
                                                <div className="text-xs text-zinc-500 font-medium">{stat.sub}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-4 border-t border-zinc-200">
                                    <p className="text-xs text-zinc-500 font-medium">
                                        Source: Government of India Health Report · CERT-In 2024 · World Bank
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Glow */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#005EB8]/15 rounded-full blur-[60px] pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
