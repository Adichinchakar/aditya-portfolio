"use client";

import React from "react";
import { motion } from "@/lib/motion";

/* ─── Browser Chrome ───────────────────────────────────── */
function ChromeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-300 shadow-2xl bg-white flex flex-col font-sans text-sm w-full h-[700px]">
            <div className="h-10 bg-[#f1f5f9] border-b border-slate-300 flex items-center px-4 gap-4 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-2xl mx-auto bg-white border border-slate-200 rounded-md h-6 flex items-center px-3 text-[11px] text-slate-500 font-mono shadow-sm">
                    <svg className="w-3 h-3 mr-2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                    app.infosys.com/enterprise/assessments
                </div>
            </div>
            <div className="flex-1 relative flex overflow-hidden">{children}</div>
        </div>
    );
}

/* ─── Screen: Enterprise Data Table ────────────────────── */
function EnterpriseTableScreen() {
    const tableData = [
        { id: "ASM-8492", client: "GlobalCorp Finance", region: "NA-East", type: "Security Audit", score: 94, status: "Completed", date: "2023-10-14", analyst: "M. Patel", risk: "Low", trend: "up" },
        { id: "ASM-8491", client: "TechFlow Solutions", region: "EMEA", type: "Cloud Migration", score: 72, status: "In Progress", date: "2023-10-12", analyst: "S. Jenkins", risk: "Medium", trend: "down" },
        { id: "ASM-8490", client: "Apex Manufacturing", region: "APAC", type: "Compliance", score: 45, status: "At Risk", date: "2023-10-11", analyst: "D. Kim", risk: "High", trend: "down" },
        { id: "ASM-8489", client: "Nexus Health", region: "NA-West", type: "Infrastructure", score: 88, status: "Completed", date: "2023-10-09", analyst: "R. Sharma", risk: "Low", trend: "up" },
        { id: "ASM-8488", client: "Quantum Retail", region: "LATAM", type: "Security Audit", score: 61, status: "Pending Review", date: "2023-10-08", analyst: "M. Patel", risk: "Medium", trend: "flat" },
        { id: "ASM-8487", client: "Stellar Logistics", region: "EMEA", type: "Cloud Migration", score: 91, status: "Completed", date: "2023-10-05", analyst: "J. Doe", risk: "Low", trend: "up" },
        { id: "ASM-8486", client: "Nova Systems", region: "NA-East", type: "Compliance", score: 78, status: "In Progress", date: "2023-10-02", analyst: "S. Jenkins", risk: "Medium", trend: "up" },
        { id: "ASM-8485", client: "Echo Media", region: "APAC", type: "Infrastructure", score: 52, status: "At Risk", date: "2023-09-28", analyst: "D. Kim", risk: "High", trend: "down" },
    ];

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Completed": return "bg-emerald-100 text-emerald-700 border border-emerald-200";
            case "In Progress": return "bg-blue-100 text-blue-700 border border-blue-200";
            case "At Risk": return "bg-red-100 text-red-700 border border-red-200";
            case "Pending Review": return "bg-amber-100 text-amber-700 border border-amber-200";
            default: return "bg-slate-100 text-slate-700 border border-slate-200";
        }
    };

    const getRiskStyle = (risk: string) => {
        switch (risk) {
            case "Low": return "text-emerald-600 bg-emerald-50";
            case "Medium": return "text-amber-600 bg-amber-50";
            case "High": return "text-red-600 bg-red-50";
            default: return "text-slate-600 bg-slate-50";
        }
    };

    return (
        <ChromeWrapper>
            {/* Sidebar Navigation */}
            <div className="w-56 bg-slate-900 flex flex-col shrink-0">
                <div className="h-16 px-5 border-b border-slate-800 flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-black tracking-tighter">IN</div>
                    <span className="text-[13px] font-bold text-white tracking-wide">Enterprise</span>
                </div>
                <div className="flex-1 py-4 px-3 flex flex-col gap-1 overflow-y-auto">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-2 mt-2">Core Operations</div>
                    {[
                        { name: "Dashboard", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
                        { name: "Assessments", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8", active: true },
                        { name: "Clients", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
                        { name: "Analytics", icon: "M18 20V10 M12 20V4 M6 20v-6" },
                    ].map(item => (
                        <div key={item.name} className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${item.active ? "bg-blue-600/20 text-blue-400" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {item.icon.split(' M').map((d, i) => <path key={i} d={d.trim()} />)}
                            </svg>
                            <span className="text-[13px] font-medium">{item.name}</span>
                        </div>
                    ))}
                    
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 mb-2 mt-6">Administration</div>
                    {[
                        { name: "User Management", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
                        { name: "System Settings", icon: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" },
                        { name: "Audit Logs", icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" },
                    ].map(item => (
                        <div key={item.name} className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors text-slate-400 hover:bg-slate-800 hover:text-white">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {item.icon.split(' M').map((d, i) => <path key={i} d={d.trim()} />)}
                            </svg>
                            <span className="text-[13px] font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col bg-[#f8fafc] overflow-hidden">
                {/* Header Toolbar */}
                <div className="h-16 px-6 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
                    <h1 className="text-[18px] font-bold text-slate-900 tracking-tight">Active Assessments</h1>
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            <input type="text" placeholder="Search assessments ID, client..." className="w-64 pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                        </div>
                        <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] font-bold text-slate-700 shadow-sm hover:bg-slate-50 flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                            Filter
                        </button>
                        <button className="px-4 py-2 bg-blue-600 border border-blue-700 rounded-lg text-[13px] font-bold text-white shadow-sm hover:bg-blue-700 flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            New Assessment
                        </button>
                    </div>
                </div>

                {/* Dense Data Table */}
                <div className="flex-1 overflow-auto p-6">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
                        <div className="overflow-x-auto flex-1">
                            <table className="w-full text-left border-collapse whitespace-nowrap">
                                <thead className="sticky top-0 bg-slate-50 z-10 border-b border-slate-200 shadow-sm">
                                    <tr className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                        <th className="px-5 py-4 w-12 text-center">
                                            <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                        </th>
                                        <th className="px-5 py-4 cursor-pointer hover:text-slate-800">Assmnt ID <span className="inline-block ml-1 text-slate-400">↓</span></th>
                                        <th className="px-5 py-4 cursor-pointer hover:text-slate-800">Client / Region</th>
                                        <th className="px-5 py-4">Assessment Type</th>
                                        <th className="px-5 py-4">Overall Score</th>
                                        <th className="px-5 py-4">Status</th>
                                        <th className="px-5 py-4">Lead Analyst</th>
                                        <th className="px-5 py-4">Risk Level</th>
                                        <th className="px-5 py-4 w-12"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {tableData.map((row, i) => (
                                        <tr key={row.id} className="hover:bg-slate-50/80 transition-colors group">
                                            <td className="px-5 py-4 text-center">
                                                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="text-[13px] font-mono font-medium text-blue-600 hover:underline cursor-pointer">{row.id}</div>
                                                <div className="text-[11px] text-slate-400 mt-0.5">{row.date}</div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="text-[13px] font-bold text-slate-800">{row.client}</div>
                                                <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                                    {row.region}
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-[13px] text-slate-600">{row.type}</td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                        <div 
                                                            className={`h-full rounded-full ${row.score >= 80 ? 'bg-emerald-500' : row.score >= 60 ? 'bg-amber-500' : 'bg-red-500'}`} 
                                                            style={{ width: `${row.score}%` }} 
                                                        />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-slate-700 w-6">{row.score}</span>
                                                    {row.trend === 'up' && <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>}
                                                    {row.trend === 'down' && <svg className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>}
                                                    {row.trend === 'flat' && <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"/></svg>}
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className={`inline-flex px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(row.status)}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2 text-[13px] text-slate-700">
                                                    <div className="w-6 h-6 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">
                                                        {row.analyst.charAt(0)}
                                                    </div>
                                                    {row.analyst}
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded font-bold text-[11px] uppercase tracking-wider border border-transparent ${getRiskStyle(row.risk)}`}>
                                                    <div className="w-2 h-2 rounded-full bg-current" />
                                                    {row.risk}
                                                </div>
                                            </td>
                                            <td className="px-5 py-4 text-center">
                                                <button className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded hover:bg-slate-100">
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        {/* Pagination Footer */}
                        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
                            <div className="text-[12px] text-slate-500 font-medium">Showing <span className="font-bold text-slate-800">1</span> to <span className="font-bold text-slate-800">8</span> of <span className="font-bold text-slate-800">1,249</span> results</div>
                            <div className="flex gap-1">
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 bg-white rounded text-slate-400 cursor-not-allowed">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center border border-blue-600 bg-blue-600 rounded text-white font-bold text-[13px]">1</button>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 bg-white rounded text-slate-600 hover:bg-slate-50 font-bold text-[13px]">2</button>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 bg-white rounded text-slate-600 hover:bg-slate-50 font-bold text-[13px]">3</button>
                                <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
                                <button className="w-8 h-8 flex items-center justify-center border border-slate-200 bg-white rounded text-slate-600 hover:bg-slate-50">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ChromeWrapper>
    );
}

/* ─── Main Component ───────────────────────────────────── */
export function InfosysUI() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Structural Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                            04f — Enterprise Dashboard
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                            Production-Grade Reality
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Replacing generic cards with a hyper-realistic, massively data-dense enterprise table. Features authentic status indicators, embedded data visualizations (sparklines/progress bars), dense pagination, and complex filtering patterns expected in B2B SaaS.
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
                            <EnterpriseTableScreen />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
