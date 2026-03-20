"use client";

import React from "react";
import { motion } from "framer-motion";

const BLUE = "#005EB8";

function PhoneFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto" style={{ width: 160 }}>
            <div
                className="rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ border: "3px solid #18181b", background: "#18181b", padding: "3px" }}
            >
                {/* Status bar */}
                <div
                    className="rounded-t-[1.7rem] overflow-hidden"
                    style={{ background: BLUE, paddingTop: 8, paddingBottom: 0 }}
                >
                    <div className="flex justify-between items-center px-4 pb-1">
                        <span className="text-white text-[7px] font-bold">9:41</span>
                        <div className="w-10 h-2 rounded-full bg-zinc-900/60 mx-auto" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }} />
                        <div className="flex items-center gap-0.5">
                            <div className="w-2.5 h-1.5 border border-white/60 rounded-sm flex items-center px-px">
                                <div className="flex-1 h-full bg-white/80 rounded-sm" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Screen content */}
                <div className="rounded-b-[1.7rem] overflow-hidden bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
}

function PatientHome() {
    const records = [
        { icon: "🩸", name: "Blood Test", date: "15 Mar 2025", org: "Apollo Hospitals", color: "bg-red-50", badge: "bg-red-100 text-red-600" },
        { icon: "💊", name: "Prescription", date: "10 Mar 2025", org: "Dr. Mehta Clinic", color: "bg-blue-50", badge: "bg-blue-100 text-blue-600" },
        { icon: "🫁", name: "Radiology", date: "2 Mar 2025", org: "SRL Diagnostics", color: "bg-indigo-50", badge: "bg-indigo-100 text-indigo-700" },
    ];

    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE }} className="px-3 pt-1 pb-3">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <div className="text-white text-[8px] font-medium opacity-75">Welcome back</div>
                        <div className="text-white text-[11px] font-bold">Rajesh Kumar</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold">RK</span>
                    </div>
                </div>
                {/* ABHA ID card */}
                <div className="bg-white/15 rounded-xl px-2 py-1.5">
                    <div className="text-white text-[7px] font-medium opacity-70">ABHA ID</div>
                    <div className="text-white text-[9px] font-mono font-bold">91-1234-5678-9012</div>
                </div>
            </div>

            {/* Pending requests pill */}
            <div className="flex items-center gap-1.5 mx-3 mt-2 bg-amber-50 border border-amber-200 rounded-lg px-2 py-1">
                <div className="w-3 h-3 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[6px] font-bold">3</span>
                </div>
                <span className="text-[7.5px] text-amber-700 font-medium">3 pending access requests</span>
            </div>

            {/* My Records */}
            <div className="px-3 mt-2 pb-1">
                <div className="text-[8px] font-bold text-zinc-600 mb-1.5">MY HEALTH RECORDS</div>
                <div className="space-y-1.5">
                    {records.map((r) => (
                        <div key={r.name} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${r.color}`}>
                            <span className="text-[13px]">{r.icon}</span>
                            <div className="flex-1 min-w-0">
                                <div className="text-[8.5px] font-bold text-zinc-800">{r.name}</div>
                                <div className="text-[7px] text-zinc-500">{r.org}</div>
                            </div>
                            <div className="text-[6.5px] text-zinc-400">{r.date.split(" ")[0]}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom nav */}
            <div className="grid grid-cols-4 border-t border-zinc-100 mt-2 bg-white">
                {["Home", "Records", "Access", "Profile"].map((t, i) => (
                    <div key={t} className={`flex flex-col items-center py-2 gap-0.5 text-[7px] font-medium ${i === 0 ? "text-[#005EB8]" : "text-zinc-400"}`}>
                        <div className={`w-3.5 h-3.5 rounded-sm ${i === 0 ? "bg-[#005EB8]" : "bg-zinc-200"}`} />
                        {t}
                    </div>
                ))}
            </div>
        </PhoneFrame>
    );
}

function DoctorAccessRequest() {
    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE }} className="px-3 pt-1 pb-3">
                <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-white text-[9px]">←</span>
                    <span className="text-white text-[9px] font-semibold">Access Request</span>
                </div>
            </div>

            <div className="px-3 pt-3 pb-2">
                {/* Doctor card */}
                <div className="flex flex-col items-center text-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#005EB8]/10 flex items-center justify-center mb-1.5">
                        <span className="text-[18px]">👨‍⚕️</span>
                    </div>
                    <div className="text-[10px] font-bold text-zinc-800">Dr. Vikram Mehta</div>
                    <div className="text-[8px] text-zinc-500">Apollo Hospitals, Mumbai</div>
                    <div className="text-[7.5px] text-zinc-400">MBBS, MD · Reg #MH-12345</div>
                </div>

                {/* Request message */}
                <div className="bg-blue-50 border border-[#005EB8]/20 rounded-xl p-2.5 mb-3">
                    <div className="text-[7.5px] text-zinc-600 leading-relaxed">
                        <span className="font-bold text-zinc-800">Dr. Mehta</span> is requesting access to your{" "}
                        <span className="font-bold text-[#005EB8]">Blood Test Report</span> for consultation on 18 Mar 2025.
                    </div>
                </div>

                {/* Duration picker */}
                <div className="mb-3">
                    <div className="text-[7.5px] font-bold text-zinc-600 mb-1">Access Duration</div>
                    <div className="flex gap-1">
                        {["24h", "7 days", "Permanent"].map((d, i) => (
                            <div
                                key={d}
                                className={`flex-1 text-[7px] font-semibold text-center py-1.5 rounded-lg border ${i === 1 ? "border-[#005EB8] bg-[#005EB8]/10 text-[#005EB8]" : "border-zinc-200 text-zinc-500"}`}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-2">
                    <div className="flex-1 bg-zinc-100 text-zinc-600 text-[9px] font-bold text-center py-2.5 rounded-xl border border-zinc-200">
                        Deny
                    </div>
                    <div className="flex-1 text-white text-[9px] font-bold text-center py-2.5 rounded-xl" style={{ background: BLUE }}>
                        Allow Access
                    </div>
                </div>
            </div>

            {/* Nav */}
            <div className="grid grid-cols-4 border-t border-zinc-100 bg-white">
                {["Home", "Records", "Access", "Profile"].map((t, i) => (
                    <div key={t} className={`flex flex-col items-center py-2 gap-0.5 text-[7px] font-medium ${i === 2 ? "text-[#005EB8]" : "text-zinc-400"}`}>
                        <div className={`w-3.5 h-3.5 rounded-sm ${i === 2 ? "bg-[#005EB8]" : "bg-zinc-200"}`} />
                        {t}
                    </div>
                ))}
            </div>
        </PhoneFrame>
    );
}

function CareCircle() {
    const guardians = [
        { name: "Sunita (Mummy)", role: "Mother", initials: "SM", canView: true, canApprove: true },
        { name: "Ramesh (Papa)", role: "Father", initials: "RP", canView: true, canApprove: false },
        { name: "Priya (Wife)", role: "Spouse", initials: "PW", canView: true, canApprove: true },
    ];

    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE }} className="px-3 pt-1 pb-3">
                <div className="flex items-center gap-1.5">
                    <span className="text-white text-[9px]">←</span>
                    <span className="text-white text-[9px] font-semibold">Care Circle</span>
                </div>
                <div className="text-white/70 text-[7px] mt-0.5">Family guardians who can manage your health records</div>
            </div>

            <div className="px-3 pt-2 pb-2">
                <div className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider mb-2">3 Guardians</div>

                <div className="space-y-1.5">
                    {guardians.map((g) => (
                        <div key={g.name} className="bg-zinc-50 rounded-xl p-2 border border-zinc-100">
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0" style={{ background: BLUE }}>
                                    {g.initials}
                                </div>
                                <div className="flex-1">
                                    <div className="text-[8.5px] font-bold text-zinc-800">{g.name}</div>
                                    <div className="text-[7px] text-zinc-400">{g.role}</div>
                                </div>
                                {/* Toggle */}
                                <div className="w-8 h-4 rounded-full relative flex-shrink-0" style={{ background: BLUE }}>
                                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm" />
                                </div>
                            </div>
                            {/* Permission dots */}
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                    <div className={`w-1.5 h-1.5 rounded-full ${g.canView ? "bg-emerald-500" : "bg-zinc-300"}`} />
                                    <span className="text-[6.5px] text-zinc-500">Can view</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className={`w-1.5 h-1.5 rounded-full ${g.canApprove ? "bg-[#005EB8]" : "bg-zinc-300"}`} />
                                    <span className="text-[6.5px] text-zinc-500">Can approve</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAB */}
                <div className="mt-3 text-white text-[9px] font-bold text-center py-2.5 rounded-xl flex items-center justify-center gap-1.5" style={{ background: BLUE }}>
                    <span className="text-[12px] leading-none">+</span> Add Guardian
                </div>
            </div>

            {/* Nav */}
            <div className="grid grid-cols-4 border-t border-zinc-100 bg-white">
                {["Home", "Records", "Access", "Profile"].map((t, i) => (
                    <div key={t} className={`flex flex-col items-center py-2 gap-0.5 text-[7px] font-medium ${i === 2 ? "text-[#005EB8]" : "text-zinc-400"}`}>
                        <div className={`w-3.5 h-3.5 rounded-sm ${i === 2 ? "bg-[#005EB8]" : "bg-zinc-200"}`} />
                        {t}
                    </div>
                ))}
            </div>
        </PhoneFrame>
    );
}

const screens = [
    {
        Component: PatientHome,
        label: "Patient Home — Health Dashboard",
        desc: "ABHA ID–linked records dashboard. 8-language support, large touch targets, icon-first hierarchy for low-literacy users.",
    },
    {
        Component: DoctorAccessRequest,
        label: "Doctor Access Request",
        desc: "Real-time consent flow with tiered duration control. Designed after 2-clinic field pilot revealed 30% refusal due to permanent access default.",
    },
    {
        Component: CareCircle,
        label: "Care Circle — Family Consent",
        desc: "Guardian permission model with view/approve granularity. Surfaced from rural field research: families manage elders' healthcare decisions.",
    },
];

export function MedSecureUI() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {screens.map(({ Component, label, desc }, i) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center gap-4"
                >
                    <Component />
                    <div className="w-full max-w-[200px]">
                        <div className="text-sm font-semibold text-zinc-800">{label}</div>
                        <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
