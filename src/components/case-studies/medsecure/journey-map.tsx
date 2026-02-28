"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileWarning, Banknote, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2, QrCode } from "lucide-react";

const OLD_JOURNEY = [
    {
        title: "Paper Lost in Transit",
        desc: "Ramesh travels 150km to AIIMS, but forgets his previous X-ray films.",
        icon: FileWarning,
        color: "text-red-500 bg-red-500/10 border-red-500/20",
    },
    {
        title: "Repeated Tests",
        desc: "Doctor cannot access history. Ramesh must pay ₹2,000 to repeat the same tests.",
        icon: Banknote,
        color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
        title: "Diagnosis Delayed",
        desc: "Waiting 3 days for new test results. Critical treatment is postponed.",
        icon: HelpCircle,
        color: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    },
];

const NEW_JOURNEY = [
    {
        title: "ABHA QR Scan",
        desc: "Ramesh shows his MedSecure QR code at the AIIMS reception desk.",
        icon: QrCode,
        color: "text-[#005EB8] bg-[#005EB8]/10 border-[#005EB8]/20",
    },
    {
        title: "Consent Granted",
        desc: "Approve 1-time access via biometric thumbprint. Smart contract logs the event.",
        icon: ShieldCheck,
        color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
        title: "Instant Treatment",
        desc: "Doctor instantly retrieves PHC history. Treatment begins same-day. Zero extra cost.",
        icon: CheckCircle2,
        color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
];

export function JourneyMap() {
    return (
        <section className="py-32 px-6 bg-zinc-50 border-t border-zinc-200">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm font-semibold mb-6 shadow-sm"
                    >
                        The "Messy Middle"
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight"
                    >
                        Fixing the Care Continuum.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto font-medium"
                    >
                        When a patient is referred from a village Primary Health Center (PHC) to a city hospital, the system breaks.
                    </motion.p>
                </div>

                <div className="space-y-16 lg:space-y-24">
                    {/* The Old Way */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-100 -translate-y-1/2 hidden md:block" />

                        <div className="flex flex-col md:flex-row gap-8 relative z-10">
                            <div className="md:w-48 shrink-0 flex items-center md:justify-end pr-8 md:border-r-2 border-red-200">
                                <h3 className="text-2xl font-black text-red-500 tracking-tight">Before</h3>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 flex-1">
                                {OLD_JOURNEY.map((step, i) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm relative group"
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${step.color}`}>
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-zinc-900 font-bold mb-2">{step.title}</h4>
                                        <p className="text-sm text-zinc-500 font-medium leading-relaxed">{step.desc}</p>

                                        {i < OLD_JOURNEY.length - 1 && (
                                            <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-red-300 w-6 h-6 hidden md:block" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* The New Way */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-emerald-100 -translate-y-1/2 hidden md:block" />

                        <div className="flex flex-col md:flex-row gap-8 relative z-10">
                            <div className="md:w-48 shrink-0 flex items-center md:justify-end pr-8 md:border-r-2 border-emerald-200">
                                <h3 className="text-2xl font-black text-emerald-500 tracking-tight">MedSecure</h3>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 flex-1">
                                {NEW_JOURNEY.map((step, i) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.15) }}
                                        className="bg-white border border-emerald-100/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative ring-1 ring-emerald-500/10 group hover:-translate-y-1 transition-transform"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${step.color}`}>
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-zinc-900 font-bold mb-2">{step.title}</h4>
                                        <p className="text-sm text-zinc-500 font-medium leading-relaxed">{step.desc}</p>

                                        {i < NEW_JOURNEY.length - 1 && (
                                            <ArrowRight className="absolute -right-6 top-1/2 -translate-y-1/2 text-emerald-300 w-6 h-6 hidden md:block" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
