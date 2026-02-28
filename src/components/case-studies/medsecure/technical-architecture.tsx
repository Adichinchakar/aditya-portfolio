"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Wifi, ShieldCheck, ArrowRight } from "lucide-react";

const STACK = [
    {
        layer: "Blockchain",
        technology: "Hyperledger Fabric",
        rationale: "Enterprise-grade permissioned blockchain with ABDM integration. Patient controls their own private key — no hospital owns the data.",
        icon: ShieldCheck,
        color: "text-[#005EB8]",
        bg: "bg-[#005EB8]/10",
        border: "border-[#005EB8]/20",
    },
    {
        layer: "Storage",
        technology: "IPFS (Off-chain)",
        rationale: "Manages high-resolution scans and large files. Hash stored on-chain, file on IPFS — cost-efficient and tamper-evident.",
        icon: Database,
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200",
    },
    {
        layer: "Connectivity",
        technology: "Offline-First PWA",
        rationale: "Essential for rural India's spotty 4G/5G. ServiceWorker caches critical records locally; syncs when back online.",
        icon: Wifi,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
    },
    {
        layer: "Identity",
        technology: "Aadhaar + ABHA",
        rationale: "Uses the existing Ayushman Bharat Digital Health Account (ABHA ID) as the universal patient identifier — no new enrollment needed.",
        icon: Server,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
    },
];

const FLOW_STEPS = [
    { step: "01", label: "Patient scans QR at hospital", sub: "No login required" },
    { step: "02", label: "ABHA ID verified on Hyperledger", sub: "Sub-second response" },
    { step: "03", label: "Consent granted via Smart Contract", sub: "Blockchain-logged" },
    { step: "04", label: "Doctor sees records via IPFS hash", sub: "Full history in 2s" },
];

export function TechnicalArchitecture() {
    return (
        <section className="py-24 px-6 bg-zinc-900 text-white relative overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#005EB8]/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">
                        04 — Technical Architecture
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">
                        How MedSecure Works
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Privacy-by-design at every layer. No central database. No hospital owns your data. Consent is code.
                    </p>
                </motion.div>

                {/* Flow */}
                <div className="mb-16">
                    <div className="flex flex-wrap items-center gap-0 md:gap-0">
                        {FLOW_STEPS.map((s, i) => (
                            <React.Fragment key={s.step}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex-1 min-w-[180px] p-5 text-center"
                                >
                                    <div className="text-4xl font-black text-[#005EB8]/40 mb-2 tracking-tighter">{s.step}</div>
                                    <div className="font-bold text-white text-sm mb-1">{s.label}</div>
                                    <div className="text-xs text-zinc-500 font-medium">{s.sub}</div>
                                </motion.div>
                                {i < FLOW_STEPS.length - 1 && (
                                    <ArrowRight className="w-5 h-5 text-zinc-600 hidden md:block shrink-0" aria-hidden="true" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mt-4" />
                </div>

                {/* Stack Cards */}
                <div className="grid md:grid-cols-2 gap-5">
                    {STACK.map((item, i) => (
                        <motion.div
                            key={item.layer}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`rounded-2xl border ${item.border} bg-white/5 backdrop-blur-sm p-6 flex gap-5 items-start`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.bg}`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} aria-hidden="true" />
                            </div>
                            <div>
                                <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">{item.layer}</div>
                                <div className="text-lg font-black text-white mb-2">{item.technology}</div>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.rationale}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ABDM Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5"
                >
                    <p className="text-sm text-emerald-300 font-medium leading-relaxed">
                        <strong className="text-white">ABDM Integration:</strong> MedSecure is built on top of India's Ayushman Bharat Digital Mission (ABDM) infrastructure — leveraging existing ABHA IDs and Health Lockers, so no new patient enrollment is required. It extends the national stack, not replaces it.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
