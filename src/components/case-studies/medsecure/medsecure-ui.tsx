"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BLUE = "#005EB8";
const BLUE_LIGHT = "#e8f1fb";

function PhoneFrame({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="mx-auto rounded-[2.5rem] shadow-2xl flex-shrink-0"
            style={{ border: "4px solid #18181b", background: "#18181b", padding: 4, width: 240 }}
        >
            {/* Status bar area */}
            <div className="rounded-t-[2.2rem] overflow-hidden" style={{ background: BLUE }}>
                <div className="flex items-center justify-between px-5 pt-3 pb-1">
                    <span className="text-white text-[10px] font-bold">9:41</span>
                    <div className="w-14 h-4 rounded-full bg-zinc-900/70 mx-auto" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 8, width: 56 }} />
                    <div className="flex items-center gap-1">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                            <rect x="0.5" y="2.5" width="3" height="7" rx="0.5" fill="white" opacity="0.5"/>
                            <rect x="4.5" y="1.5" width="3" height="8" rx="0.5" fill="white" opacity="0.7"/>
                            <rect x="8.5" y="0.5" width="3" height="9" rx="0.5" fill="white"/>
                        </svg>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 1.5C3 1.5 1.5 3 1.5 5s1.5 3.5 3.5 3.5S8.5 7 8.5 5 7 1.5 5 1.5z" stroke="white" strokeWidth="1.2" fill="none"/>
                            <path d="M3 3.5C3.5 2 4.5 1 5 1" stroke="white" strokeWidth="0.8" fill="none"/>
                        </svg>
                        <div className="flex items-center gap-0.5">
                            <div className="w-5 h-2.5 border border-white/60 rounded-sm">
                                <div className="w-[70%] h-full bg-white rounded-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Screen content */}
            <div className="rounded-b-[2.2rem] overflow-hidden bg-white" style={{ minHeight: 440 }}>
                {children}
            </div>
        </div>
    );
}

function PatientHome() {
    const records = [
        { emoji: "🩸", name: "Blood Test", org: "Apollo Hospitals", date: "15 Mar", badge: "New", badgeColor: "bg-emerald-100 text-emerald-700" },
        { emoji: "💊", name: "Prescription", org: "Dr. Mehta Clinic", date: "10 Mar", badge: "Viewed", badgeColor: "bg-zinc-100 text-zinc-500" },
        { emoji: "🫁", name: "Radiology", org: "SRL Diagnostics", date: "2 Mar", badge: "Viewed", badgeColor: "bg-zinc-100 text-zinc-500" },
        { emoji: "💉", name: "Vaccination", org: "PHC Andheri", date: "10 Jan", badge: "Shared", badgeColor: "bg-blue-100 text-blue-600" },
    ];

    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE }} className="px-4 pt-2 pb-4">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <div className="text-white/70 text-[10px] font-medium">Namaste,</div>
                        <div className="text-white text-base font-bold">Rajesh Kumar</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">RK</span>
                    </div>
                </div>
                {/* ABHA card */}
                <div className="rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <div className="text-white/60 text-[9px] font-bold uppercase tracking-wider mb-0.5">ABHA ID</div>
                    <div className="text-white text-[11px] font-mono font-bold">91-1234-5678-9012</div>
                </div>
            </div>

            {/* Pending request alert */}
            <div className="flex items-center gap-2 mx-3 mt-3 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[8px] font-bold">3</span>
                </div>
                <div>
                    <span className="text-[10px] font-bold text-amber-800">3 access requests pending</span>
                    <span className="text-[9px] text-amber-600 ml-1">Tap to review →</span>
                </div>
            </div>

            {/* Records */}
            <div className="px-4 mt-3 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">My Records</div>
                    <div className="text-[10px] font-semibold" style={{ color: BLUE }}>See all</div>
                </div>
                <div className="space-y-2">
                    {records.map((r) => (
                        <div key={r.name} className="flex items-center gap-2.5 rounded-xl p-2.5" style={{ background: BLUE_LIGHT }}>
                            <span className="text-xl flex-shrink-0">{r.emoji}</span>
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-bold text-zinc-800">{r.name}</div>
                                <div className="text-[10px] text-zinc-500">{r.org}</div>
                            </div>
                            <div className="flex flex-col items-end gap-0.5">
                                <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${r.badgeColor}`}>{r.badge}</span>
                                <span className="text-[9px] text-zinc-400">{r.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom nav */}
            <div className="grid grid-cols-4 border-t border-zinc-100 mt-2">
                {[
                    { label: "Home", active: true },
                    { label: "Records", active: false },
                    { label: "Access", active: false },
                    { label: "Profile", active: false },
                ].map((t) => (
                    <div key={t.label} className={`flex flex-col items-center py-2.5 gap-1 text-[9px] font-medium ${t.active ? "text-[#005EB8]" : "text-zinc-400"}`}>
                        <div className={`w-4 h-4 rounded-sm ${t.active ? "bg-[#005EB8]" : "bg-zinc-200"}`} />
                        {t.label}
                    </div>
                ))}
            </div>
        </PhoneFrame>
    );
}

function DoctorRequest() {
    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE }} className="px-4 pt-2 pb-3">
                <div className="flex items-center gap-2">
                    <span className="text-white text-lg">←</span>
                    <span className="text-white text-sm font-semibold">Access Request</span>
                </div>
            </div>

            <div className="px-4 pt-4 pb-3">
                {/* Doctor profile */}
                <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-14 h-14 rounded-full mb-2 flex items-center justify-center text-3xl" style={{ background: BLUE_LIGHT }}>👨‍⚕️</div>
                    <div className="text-sm font-bold text-zinc-900">Dr. Vikram Mehta</div>
                    <div className="text-xs text-zinc-500">Apollo Hospitals · Mumbai</div>
                    <div className="text-[10px] text-zinc-400">MBBS, MD · Reg #MH-12345</div>
                    <div className="mt-1.5 text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#e8f1fb", color: BLUE }}>Verified Provider</div>
                </div>

                {/* Request card */}
                <div className="rounded-xl p-3 mb-4 border" style={{ background: "#f0f7ff", borderColor: "#b3cee8" }}>
                    <div className="text-xs text-zinc-600 leading-relaxed">
                        <span className="font-bold text-zinc-900">Dr. Mehta</span> is requesting access to your{" "}
                        <span className="font-bold" style={{ color: BLUE }}>Blood Test Report</span>{" "}
                        for consultation on <span className="font-semibold">18 March 2025</span>.
                    </div>
                </div>

                {/* Duration selector */}
                <div className="mb-4">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Access Duration</div>
                    <div className="flex gap-1.5">
                        {["24 Hours", "7 Days", "Permanent"].map((d, i) => (
                            <div
                                key={d}
                                className="flex-1 text-[10px] font-semibold text-center py-2 rounded-xl border transition-colors cursor-pointer"
                                style={i === 1 ? { borderColor: BLUE, background: BLUE_LIGHT, color: BLUE } : { borderColor: "#e5e7eb", color: "#9ca3af" }}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-2">
                    <div className="flex-1 bg-zinc-100 text-zinc-600 text-xs font-bold text-center py-3 rounded-xl border border-zinc-200 cursor-pointer">
                        Deny
                    </div>
                    <div className="flex-1 text-white text-xs font-bold text-center py-3 rounded-xl cursor-pointer" style={{ background: BLUE }}>
                        Allow Access
                    </div>
                </div>

                {/* Trust footnote */}
                <div className="mt-3 text-[9px] text-zinc-400 text-center flex items-center justify-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1L8 2.5V5.5C8 7.2 6.5 8.5 5 9C3.5 8.5 2 7.2 2 5.5V2.5L5 1Z" stroke="#9ca3af" strokeWidth="0.8" fill="none"/></svg>
                    NHA verified · Consent logged on blockchain
                </div>
            </div>
        </PhoneFrame>
    );
}

function CareCircleUI() {
    const guardians = [
        { name: "Sunita Kumar", relation: "Mother", initials: "SK", canView: true, canApprove: true, status: "Active" },
        { name: "Ramesh Kumar", relation: "Father", initials: "RK", canView: true, canApprove: false, status: "Active" },
        { name: "Priya Kumar", relation: "Spouse", initials: "PK", canView: true, canApprove: true, status: "Active" },
    ];

    return (
        <PhoneFrame>
            {/* Header */}
            <div style={{ background: BLUE }} className="px-4 pt-2 pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-white text-lg">←</span>
                        <span className="text-white text-sm font-semibold">Care Circle</span>
                    </div>
                    <div className="text-white/70 text-[10px]">3 guardians</div>
                </div>
                <div className="text-white/60 text-[10px] mt-1">Family members who can manage your health records</div>
            </div>

            <div className="px-4 pt-3 pb-3">
                {/* Permission legend */}
                <div className="flex items-center gap-3 mb-3 px-3 py-2 bg-zinc-50 rounded-xl border border-zinc-100">
                    <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-[9px] text-zinc-500">Can view</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: BLUE }} />
                        <span className="text-[9px] text-zinc-500">Can approve</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                        <span className="text-[9px] text-zinc-500">Not granted</span>
                    </div>
                </div>

                {/* Guardian cards */}
                <div className="space-y-2.5">
                    {guardians.map((g) => (
                        <div key={g.name} className="rounded-xl border border-zinc-100 p-3 bg-white shadow-sm">
                            <div className="flex items-center gap-2.5 mb-2.5">
                                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: BLUE }}>
                                    {g.initials}
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-zinc-800">{g.name}</div>
                                    <div className="text-[10px] text-zinc-400">{g.relation}</div>
                                </div>
                                {/* Toggle */}
                                <div className="w-10 h-5 rounded-full relative flex-shrink-0 cursor-pointer" style={{ background: BLUE }}>
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow" />
                                </div>
                            </div>
                            {/* Permission pills */}
                            <div className="flex gap-1.5">
                                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-[9px] font-semibold text-emerald-700">View</span>
                                </div>
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-full border ${g.canApprove ? "bg-blue-50 border-blue-200" : "bg-zinc-50 border-zinc-200"}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${g.canApprove ? "" : "bg-zinc-300"}`} style={g.canApprove ? { background: BLUE } : {}} />
                                    <span className={`text-[9px] font-semibold ${g.canApprove ? "text-blue-700" : "text-zinc-400"}`}>Approve</span>
                                </div>
                                <div className="ml-auto text-[9px] text-zinc-400 self-center">Edit →</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add guardian FAB */}
                <div className="mt-4 text-white text-xs font-bold text-center py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer" style={{ background: BLUE }}>
                    <span className="text-base leading-none">+</span> Add Guardian
                </div>
            </div>
        </PhoneFrame>
    );
}

const screens = [
    {
        shortLabel: "Patient Home",
        Component: PatientHome,
        caption: "ABHA ID–linked health record dashboard. Icon-first record cards, 8-language support, large touch targets (min 44×44px). The pending-request alert surfaced from field testing — rural users missed badge notifications but responded to explicit banners.",
    },
    {
        shortLabel: "Doctor Access",
        Component: DoctorRequest,
        caption: "Consent-based record sharing with tiered duration control. V1 defaulted to 'Permanent' access — pilot feedback found 30% of patients refused because of this. V2 defaults to '7 Days' which matched how patients conceptualized a consultation window.",
    },
    {
        shortLabel: "Care Circle",
        Component: CareCircleUI,
        caption: "Family guardian model with granular view/approve permissions. Designed after field research revealed families manage healthcare decisions for elders — a 65-year-old farmer in rural Pune doesn't independently navigate a digital consent flow.",
    },
];

export function MedSecureUI() {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/* Tab bar */}
            <div className="flex gap-1 mb-10 border-b border-zinc-200">
                {screens.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${active === i ? "" : "text-zinc-400 hover:text-zinc-600"}`}
                        style={active === i ? { color: BLUE } : {}}
                    >
                        {s.shortLabel}
                        {active === i && (
                            <motion.div layoutId="medsecure-tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t" style={{ background: BLUE }} />
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-start gap-12"
                >
                    {(() => { const Screen = screens[active].Component; return <Screen />; })()}
                    <div className="flex-1 pt-4">
                        <div className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Mobile UI · Bharat-first design</div>
                        <p className="text-base text-zinc-600 leading-relaxed">{screens[active].caption}</p>

                        {/* Design principles */}
                        <div className="mt-6 space-y-3">
                            {[
                                { title: "Icon-first hierarchy", desc: "No literacy assumption. Every action has an icon before a text label." },
                                { title: "44×44px minimum touch targets", desc: "WCAG 2.5.5 (Target Size) applied to every interactive element." },
                                { title: "8-language support", desc: "Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, English." },
                            ].map((p) => (
                                <div key={p.title} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: BLUE_LIGHT }}>
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke={BLUE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-zinc-800">{p.title}</div>
                                        <div className="text-xs text-zinc-500 mt-0.5">{p.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
