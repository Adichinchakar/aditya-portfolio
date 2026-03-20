"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Monitor, ExternalLink } from "lucide-react";

// Stitch-generated screenshot URLs
const HEALTH_PASSPORT_URL = "https://lh3.googleusercontent.com/aida/AOfcidV7CQOteViO2uwZG4MRE5dgKkCvU9tFVnjoZe9dVrZYioIC6RgZ4KBLew6oueSzn3N5iQABSIVqCcX7g_rHGEJrI_tuMhwmF88WpBvjIGTLbSfx6sFvTPnK9PPe-iiIgcnbP9RojmFlztTgnIrwqVOTWK3SqUOhVyrH8bSZQcjNh8J5Upql4nbcBv-_tnkrQQkhN9mVk2x2M586yrBtABDrcBXF2DZR12k4f-G_LB3LTiheK4JOAyqNdP-U";

export function StitchUIs() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,94,184,0.03),transparent_70%)]" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">
                        04b — UI Design (Google Stitch)
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
                        High-Fidelity Screens
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
                        Generated using Google Stitch — each screen was designed for a specific Indian context and accessibility requirement.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Health Passport — Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {/* Label */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#005EB8]/10 flex items-center justify-center">
                                <Smartphone className="w-4 h-4 text-[#005EB8]" aria-hidden="true" />
                            </div>
                            <div>
                                <span className="text-sm font-black text-zinc-900">Digital Health Passport</span>
                                <span className="text-xs text-zinc-400 ml-2">Mobile · Patient View</span>
                            </div>
                        </div>

                        {/* Phone mockup with screenshot */}
                        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 shadow-xl overflow-hidden">
                            <div className="rounded-2xl overflow-hidden bg-white shadow-inner border border-zinc-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={HEALTH_PASSPORT_URL}
                                    alt="MedSecure Digital Health Passport mobile screen — shows patient Priya Sharma's emergency QR code, language selector with 8 Indian languages, and current medications list"
                                    className="w-full h-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="space-y-2 px-1">
                            <h3 className="font-bold text-zinc-900">Patient &quot;Health Passport&quot;</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                High-contrast, outdoor-readable UI in Medical Blue (#005EB8). Large emergency QR for first-responders. Language selector covering 8 Indian languages. Icon-first navigation for limited-literacy users.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {["High Contrast", "8 Indian Languages", "Emergency QR", "WCAG 2.1 AA"].map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ER Dashboard — Tablet */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="space-y-5"
                    >
                        {/* Label */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                                <Monitor className="w-4 h-4 text-red-600" aria-hidden="true" />
                            </div>
                            <div>
                                <span className="text-sm font-black text-zinc-900">Golden 60 Seconds ER View</span>
                                <span className="text-xs text-zinc-400 ml-2">Tablet · Physician View</span>
                            </div>
                        </div>

                        {/* Tablet mockup — inline design since Stitch was still generating */}
                        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-4 shadow-2xl overflow-hidden">
                            <div className="rounded-2xl overflow-hidden bg-[#0f172a] p-0 shadow-inner">
                                {/* ER Dashboard — inline representation */}
                                <div className="text-white font-sans" style={{ fontFamily: "'Lexend', sans-serif" }}>
                                    {/* Top bar */}
                                    <div className="bg-[#0a0f1e] px-5 py-3 flex items-center justify-between border-b border-white/5">
                                        <div>
                                            <span className="font-black text-sm text-white">Ramesh Kumar</span>
                                            <span className="text-zinc-400 text-xs ml-2">52M · ER Bay 4</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-2.5 py-1 rounded-lg bg-zinc-700 text-white text-xs font-black">Blood: B+</span>
                                            <span className="px-2.5 py-1 rounded-lg bg-red-500/15 border border-red-400/40 text-red-400 text-xs font-black">⚠ Penicillin ALLERGY</span>
                                        </div>
                                        <div className="text-zinc-400 text-xs">Dr. Rajesh Mehta · 14:32</div>
                                    </div>

                                    {/* Main grid */}
                                    <div className="grid grid-cols-3 gap-0 divide-x divide-white/5">
                                        {/* Vitals */}
                                        <div className="p-4 space-y-2.5">
                                            <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-3">Vitals</div>
                                            {[
                                                { l: "BP", v: "145/92", badge: "bg-amber-500/20 text-amber-300" },
                                                { l: "HR", v: "88 bpm", badge: "bg-emerald-500/20 text-emerald-300" },
                                                { l: "SpO₂", v: "96%", badge: "bg-emerald-500/20 text-emerald-300" },
                                                { l: "Temp", v: "37.8°C", badge: "bg-zinc-700 text-zinc-300" },
                                            ].map(v => (
                                                <div key={v.l} className="flex items-center justify-between py-1.5 border-b border-white/5">
                                                    <span className="text-zinc-500 text-xs">{v.l}</span>
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${v.badge}`}>{v.v}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Conditions + Labs */}
                                        <div className="p-4 space-y-4">
                                            <div>
                                                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">Chronic Conditions</div>
                                                <div className="space-y-1.5">
                                                    <div className="flex items-center gap-2 text-xs text-white"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />Diabetes Type 2 (2018)</div>
                                                    <div className="flex items-center gap-2 text-xs text-white"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />Hypertension</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">Recent Labs</div>
                                                <div className="space-y-1.5">
                                                    <div className="text-xs flex justify-between"><span className="text-zinc-400">HbA1c</span><span className="text-red-400 font-bold">8.2% ↑</span></div>
                                                    <div className="text-xs flex justify-between"><span className="text-zinc-400">Creatinine</span><span className="text-amber-400 font-bold">1.4</span></div>
                                                    <div className="text-xs flex justify-between"><span className="text-zinc-400">eGFR</span><span className="text-amber-400 font-bold">58</span></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* History */}
                                        <div className="p-4">
                                            <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-3">Visit History</div>
                                            <div className="space-y-3">
                                                {[
                                                    { date: "Jan 2024", hospital: "PGIMS Rohtak", dx: "HTN Follow-up" },
                                                    { date: "Aug 2023", hospital: "Safdarjung Hospital", dx: "Diabetes Review" },
                                                    { date: "Mar 2023", hospital: "PHC Hisar", dx: "General OPD" },
                                                ].map(v => (
                                                    <div key={v.date} className="border-l-2 border-[#005EB8] pl-3">
                                                        <div className="text-[10px] text-zinc-500">{v.date}</div>
                                                        <div className="text-xs text-white font-semibold">{v.dx}</div>
                                                        <div className="text-[10px] text-zinc-500">{v.hospital}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom bar */}
                                    <div className="bg-[#0a0f1e] px-5 py-3 flex items-center justify-between border-t border-white/5 gap-3 flex-wrap">
                                        <button className="flex-1 py-2 px-4 rounded-xl bg-red-500/80 text-white text-xs font-black hover:bg-red-500/90 transition-colors">
                                            🚨 Request Interstate Transfer
                                        </button>
                                        {["Order Labs", "Consult", "Print"].map(b => (
                                            <button key={b} className="py-2 px-3 rounded-xl bg-white/10 text-zinc-300 text-xs font-semibold hover:bg-white/15 transition-colors">
                                                {b}
                                            </button>
                                        ))}
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-[10px] text-emerald-400 font-semibold">MedSecure Verified</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Caption */}
                        <div className="space-y-2 px-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-zinc-900">Golden 60 Seconds ER View</h3>
                                <span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-medium">
                                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                    Stitch Design
                                </span>
                            </div>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Critical-info-first layout for AIIMS ER physicians. Blood group and allergies visible in &lt;2s. Maximum 2 taps to any action. Dark theme reduces eye strain in clinical environments.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                                {["Critical Info First", "2-Click Max", "Dark Theme", "Tablet Optimized"].map(tag => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
