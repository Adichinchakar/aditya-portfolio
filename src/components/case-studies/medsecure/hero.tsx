"use client";

import React from "react";
import { motion } from "@/lib/motion";
import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle, Wifi } from "lucide-react";
import { PatientHome } from "./medsecure-ui";

const CRISIS_STATS = [
    {
        value: "50L",
        label: "Deaths/year",
        sub: "Due to medical errors",
        icon: AlertTriangle,
        color: "text-rose-400",
        bg: "bg-rose-500/8",
        border: "border-rose-500/15",
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
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50">
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
                            Product Concept · 0→1 Design · 5 min read
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

                        <p className="text-lg md:text-xl text-zinc-600 max-w-lg mb-3 leading-relaxed font-medium">
                            A 65-year-old farmer in rural Punjab and a 28-year-old in South Mumbai share India's healthcare system. They share almost nothing else — language, connectivity, literacy, or access. Designing for both, simultaneously, is the problem.
                        </p>
                        <p className="text-sm text-zinc-500 max-w-lg mb-6 leading-relaxed">
                            MedSecure is a sovereign medical identity for every Indian patient — ABHA ID as the identifier, Hyperledger Fabric for consent and audit, IPFS for off-chain storage. Accessible in 8 languages, usable offline, piloted across 1,200 patients in Delhi NCR and Pune.
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
                            <div className="bg-zinc-50/60 rounded-[1.5rem] p-6 border border-white/60 backdrop-blur-sm flex justify-center items-center">
                                <div className="scale-[0.8] origin-center">
                                    <PatientHome />
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
