"use client";

import React from "react";
import { motion } from "@/lib/motion";

/* ─── Screen 1: Dashboard ──────────────────────────────── */
export function PatientHome() {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-white font-sans text-sm flex flex-col h-[640px]">
            {/* Browser Chrome */}
            <div className="h-10 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-4 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-2xl mx-auto bg-white border border-slate-200 rounded-md h-6 flex items-center justify-center text-[11px] text-slate-500 font-mono shadow-sm">
                    <svg className="w-3 h-3 mr-2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    portal.medsecure.health/patient/records
                </div>
            </div>

            {/* Application Layout */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-[#f8fafc] border-r border-slate-200 flex flex-col shrink-0">
                    <div className="p-5 border-b border-slate-200">
                        <div className="flex items-center gap-2 text-blue-700 font-bold text-lg mb-1">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                            MedSecure
                        </div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Patient Portal</div>
                    </div>
                    
                    <div className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-lg border border-blue-200 shadow-sm">EJ</div>
                        <div>
                            <div className="text-[13px] font-bold text-slate-800">Eleanor Jackson</div>
                            <div className="text-[11px] text-slate-500">DOB: 11/04/1982</div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-3 py-2">
                        {[
                            { name: "Overview", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
                            { name: "Clinical Records", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8", active: true },
                            { name: "Lab Results", icon: "M9 3H5a2 2 0 0 0-2 2v4 M21 3h-4a2 2 0 0 0-2 2v4 M12 3v18 M9 21H5a2 2 0 0 1-2-2v-4 M21 21h-4a2 2 0 0 1-2-2v-4" },
                            { name: "Prescriptions", icon: "M10 2v4 M14 2v4 M4 8h16 M4 8v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" },
                            { name: "Secure Messages", icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", badge: "2" },
                        ].map((item) => (
                            <div key={item.name} className={`flex items-center justify-between px-3 py-2.5 rounded-lg mb-1 cursor-pointer transition-colors ${item.active ? "bg-blue-50 text-blue-700 font-bold" : "text-slate-600 hover:bg-slate-100 font-medium"}`}>
                                <div className="flex items-center gap-3">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        {item.icon.split(' M').map((d, i) => <path key={i} d={d.trim()} />)}
                                    </svg>
                                    <span className="text-[13px]">{item.name}</span>
                                </div>
                                {item.badge && <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[10px] font-bold">{item.badge}</span>}
                            </div>
                        ))}
                    </div>

                    <div className="p-4 mt-auto">
                        <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-2">
                            <svg className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <div>
                                <div className="text-[11px] font-bold text-blue-800">HIPAA Compliant</div>
                                <div className="text-[10px] text-blue-600/80 leading-snug mt-0.5">Session encrypted via blockchain HSM layer.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white flex flex-col overflow-hidden">
                    <div className="px-8 py-6 border-b border-slate-200 flex justify-between items-start shrink-0">
                        <div>
                            <h1 className="text-2xl font-black tracking-tight text-slate-900 mb-1">Clinical Records</h1>
                            <div className="flex items-center gap-4 text-[12px] text-slate-500 font-medium">
                                <span className="flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Primary Provider: Dr. Sarah Chen</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                <span className="flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Last updated: Today, 09:41 AM</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-[13px] font-bold shadow-sm hover:bg-slate-50 flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                Export CCDA
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-[13px] font-bold shadow-sm hover:bg-blue-700 flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                                Grant Access
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto bg-slate-50/50 p-8">
                        {/* Vital Signs Grid */}
                        <div className="mb-8">
                            <h2 className="text-[13px] font-bold text-slate-800 uppercase tracking-widest mb-4">Latest Vitals</h2>
                            <div className="grid grid-cols-4 gap-4">
                                {[
                                    { label: "Blood Pressure", val: "120/80", unit: "mmHg", status: "Normal", color: "bg-emerald-50 text-emerald-700" },
                                    { label: "Heart Rate", val: "72", unit: "bpm", status: "Normal", color: "bg-emerald-50 text-emerald-700" },
                                    { label: "Weight", val: "142.5", unit: "lbs", status: "Stable", color: "bg-slate-100 text-slate-600" },
                                    { label: "Hemoglobin A1c", val: "5.4", unit: "%", status: "Optimal", color: "bg-blue-50 text-blue-700" },
                                ].map((v) => (
                                    <div key={v.label} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                                        <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">{v.label}</div>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-2xl font-black tracking-tight text-slate-900">{v.val}</span>
                                            <span className="text-[12px] font-bold text-slate-400">{v.unit}</span>
                                        </div>
                                        <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${v.color}`}>{v.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Encounter History Table */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-[13px] font-bold text-slate-800 uppercase tracking-widest">Encounter History</h2>
                                <div className="relative">
                                    <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                    <input type="text" placeholder="Search encounters..." className="pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-md text-[12px] focus:outline-none w-64 shadow-sm" />
                                </div>
                            </div>
                            
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                            <th className="px-5 py-3 w-32">Date</th>
                                            <th className="px-5 py-3 w-48">Provider</th>
                                            <th className="px-5 py-3">Reason / Diagnosis</th>
                                            <th className="px-5 py-3 w-32">Status</th>
                                            <th className="px-5 py-3 w-16 text-center">Docs</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { date: "Oct 12, 2023", prov: "Dr. Sarah Chen", spec: "Primary Care", diag: "Annual Wellness Exam. Refilled prescriptions.", stat: "Finalized", statColor: "emerald" },
                                            { date: "Aug 04, 2023", prov: "Dr. Marcus Cole", spec: "Dermatology", diag: "Routine skin check. Biopsy negative.", stat: "Finalized", statColor: "emerald" },
                                            { date: "Jun 15, 2023", prov: "Quest Diagnostics", spec: "Laboratory", diag: "Comprehensive Metabolic Panel (CMP)", stat: "Requires Review", statColor: "amber" },
                                            { date: "Jan 22, 2023", prov: "Dr. Sarah Chen", spec: "Primary Care", diag: "Acute bronchitis. Prescribed Azithromycin.", stat: "Finalized", statColor: "emerald" },
                                        ].map((r, i) => (
                                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-5 py-4">
                                                    <div className="text-[13px] font-bold text-slate-800">{r.date}</div>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <div className="text-[13px] font-bold text-blue-700 hover:underline cursor-pointer">{r.prov}</div>
                                                    <div className="text-[11px] text-slate-500 mt-0.5">{r.spec}</div>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <div className="text-[13px] text-slate-700 leading-snug">{r.diag}</div>
                                                </td>
                                                <td className="px-5 py-4">
                                                    <span className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${r.statColor === 'emerald' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                                                        {r.stat}
                                                    </span>
                                                </td>
                                                <td className="px-5 py-4 text-center">
                                                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                                        <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MedSecureUI() {
    return (
        <section className="py-24 px-6 bg-[#f8fafc] relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                            04d — Healthcare Platform
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                            Production-Grade Reality
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            A hyper-realistic Patient Portal displaying strict clinical aesthetics. Features authentic medical terminology, dense tabular data for encounter histories, high-contrast typography for accessibility, and prominent HIPAA-compliance indicators.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <div className="relative w-full overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0">
                        <div className="min-w-[900px]">
                            <PatientHome />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
