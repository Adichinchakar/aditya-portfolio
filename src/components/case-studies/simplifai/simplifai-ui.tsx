"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";

/* ─── Browser Frame Helper ─────────────────────────────── */
export function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
    return (
        <div className="rounded-lg overflow-hidden border border-slate-300 shadow-2xl bg-slate-50 flex flex-col font-sans text-sm">
            <div className="h-10 bg-[#f1f5f9] border-b border-slate-300 flex items-center px-4 gap-4 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-2xl mx-auto bg-white border border-slate-200 rounded-md h-6 flex items-center px-3 text-[11px] text-slate-500 font-mono">
                    <svg className="w-3 h-3 mr-2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    https://{url}
                </div>
            </div>
            <div className="flex-1 relative bg-white">{children}</div>
        </div>
    );
}

/* ─── Screen 1: The Builder Canvas ─────────────────────── */
export function FlowBuilder() {
    return (
        <div className="flex h-[600px] bg-[#fafafa]">
            {/* Sidebar Tools */}
            <div className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
                <div className="p-4 border-b border-slate-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
                    <div>
                        <div className="text-[13px] font-bold text-slate-800">simplifai</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Workspace</div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="relative">
                        <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <input type="text" placeholder="Search apps & logic..." className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-[12px] focus:outline-none focus:border-indigo-500" />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto px-3 pb-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-2 px-1">Triggers</div>
                    {[
                        { name: "Webhook", icon: "🌐", color: "bg-blue-100 text-blue-600" },
                        { name: "Schedule", icon: "⏱", color: "bg-slate-100 text-slate-600" },
                        { name: "Salesforce", icon: "☁️", color: "bg-sky-100 text-sky-600" },
                    ].map(t => (
                        <div key={t.name} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-md cursor-grab mb-1 border border-transparent hover:border-slate-200 transition-colors">
                            <div className={`w-6 h-6 rounded flex items-center justify-center text-xs ${t.color}`}>{t.icon}</div>
                            <span className="text-[12px] font-semibold text-slate-700">{t.name}</span>
                        </div>
                    ))}
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-4 px-1">Actions</div>
                    {[
                        { name: "HTTP Request", icon: "🔗", color: "bg-slate-100 text-slate-600" },
                        { name: "OpenAI GPT-4", icon: "✨", color: "bg-emerald-100 text-emerald-600" },
                        { name: "PostgreSQL", icon: "🐘", color: "bg-indigo-100 text-indigo-600" },
                        { name: "Slack Message", icon: "💬", color: "bg-purple-100 text-purple-600" },
                    ].map(t => (
                        <div key={t.name} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-md cursor-grab mb-1 border border-transparent hover:border-slate-200 transition-colors">
                            <div className={`w-6 h-6 rounded flex items-center justify-center text-xs ${t.color}`}>{t.icon}</div>
                            <span className="text-[12px] font-semibold text-slate-700">{t.name}</span>
                        </div>
                    ))}
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 mt-4 px-1">Logic</div>
                    {[
                        { name: "If/Else Router", icon: "🔀", color: "bg-amber-100 text-amber-600" },
                        { name: "Code (Node.js)", icon: "JS", color: "bg-yellow-100 text-yellow-700 font-bold font-mono text-[8px]" },
                    ].map(t => (
                        <div key={t.name} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-md cursor-grab mb-1 border border-transparent hover:border-slate-200 transition-colors">
                            <div className={`w-6 h-6 rounded flex items-center justify-center text-xs ${t.color}`}>{t.icon}</div>
                            <span className="text-[12px] font-semibold text-slate-700">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                <div className="absolute top-4 left-4 bg-white border border-slate-200 rounded-md shadow-sm px-4 py-2 flex flex-col z-10">
                    <div className="text-[13px] font-bold text-slate-800 flex items-center gap-2">
                        Lead Enrichment & Routing
                        <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[9px] uppercase tracking-widest">Active</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Last edited 2h ago by Alex</div>
                </div>

                <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-md text-[12px] font-bold shadow-sm hover:bg-slate-50">Test Run</button>
                    <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-[12px] font-bold shadow-sm shadow-indigo-600/20 hover:bg-indigo-700">Publish</button>
                </div>

                {/* Nodes & Edges SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                        </marker>
                    </defs>
                    <path d="M 280 150 C 320 150, 340 150, 380 150" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
                    <path d="M 580 150 C 620 150, 640 100, 680 100" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
                    <path d="M 580 150 C 620 150, 640 220, 680 220" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
                </svg>

                {/* Node: Webhook */}
                <div className="absolute left-[80px] top-[115px] w-[200px] bg-white border-2 border-blue-200 rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="bg-blue-50 px-3 py-2 border-b border-blue-100 flex items-center gap-2">
                        <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-xs">🌐</div>
                        <div className="text-[12px] font-bold text-slate-700">Webhook Trigger</div>
                    </div>
                    <div className="p-3">
                        <div className="text-[10px] font-mono text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100 truncate">POST /api/webhooks/v1/lead</div>
                    </div>
                </div>

                {/* Node: OpenAI */}
                <div className="absolute left-[380px] top-[115px] w-[200px] bg-white border-2 border-emerald-500 rounded-xl shadow-lg shadow-emerald-500/10 flex flex-col overflow-hidden z-20">
                    <div className="bg-emerald-50 px-3 py-2 border-b border-emerald-100 flex items-center gap-2">
                        <div className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-xs">✨</div>
                        <div className="text-[12px] font-bold text-slate-700">Extract Details</div>
                    </div>
                    <div className="p-3 flex flex-col gap-2">
                        <div className="text-[10px] font-bold text-slate-500">Model: GPT-4o</div>
                        <div className="text-[11px] text-slate-600 bg-emerald-50/50 p-1.5 rounded border border-emerald-100 italic truncate">"Extract company name, size..."</div>
                    </div>
                </div>

                {/* Node: Salesforce (Path A) */}
                <div className="absolute left-[680px] top-[65px] w-[200px] bg-white border border-sky-200 rounded-xl shadow-sm flex flex-col overflow-hidden opacity-80">
                    <div className="bg-sky-50 px-3 py-2 border-b border-sky-100 flex items-center gap-2">
                        <div className="w-5 h-5 bg-sky-100 text-sky-600 rounded flex items-center justify-center text-xs">☁️</div>
                        <div className="text-[12px] font-bold text-slate-700">Create Lead</div>
                    </div>
                    <div className="p-3">
                        <div className="text-[10px] font-bold text-slate-500">Condition: High Intent</div>
                    </div>
                </div>

                {/* Node: Slack (Path B) */}
                <div className="absolute left-[680px] top-[185px] w-[200px] bg-white border border-purple-200 rounded-xl shadow-sm flex flex-col overflow-hidden opacity-80">
                    <div className="bg-purple-50 px-3 py-2 border-b border-purple-100 flex items-center gap-2">
                        <div className="w-5 h-5 bg-purple-100 text-purple-600 rounded flex items-center justify-center text-xs">💬</div>
                        <div className="text-[12px] font-bold text-slate-700">Send Notification</div>
                    </div>
                    <div className="p-3">
                        <div className="text-[10px] font-bold text-slate-500">Condition: Low Intent</div>
                    </div>
                </div>

                {/* Canvas Controls */}
                <div className="absolute bottom-4 left-4 flex gap-1 bg-white border border-slate-200 rounded-md shadow-sm p-1">
                    <button className="w-6 h-6 flex items-center justify-center text-slate-400 hover:bg-slate-50 rounded"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M5 12h14"/></svg></button>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center px-1">100%</span>
                    <button className="w-6 h-6 flex items-center justify-center text-slate-400 hover:bg-slate-50 rounded"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
                </div>
            </div>

            {/* Properties Panel */}
            <div className="w-80 border-l border-slate-200 bg-white flex flex-col shrink-0 z-30 shadow-[-10px_0_20px_rgba(0,0,0,0.03)]">
                <div className="h-12 border-b border-slate-200 flex items-center justify-between px-4">
                    <div className="text-[13px] font-bold text-slate-800">Node Configuration</div>
                    <button className="text-slate-400 hover:text-slate-600"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
                </div>
                <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center text-lg">✨</div>
                        <div>
                            <div className="text-[14px] font-bold text-slate-900">OpenAI GPT-4</div>
                            <div className="text-[11px] text-slate-500">Extract Details</div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Connection</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-md text-[12px] px-3 py-2 text-slate-700 focus:outline-none focus:border-indigo-500">
                            <option>Prod-OpenAI-Key (•••• 8f2a)</option>
                        </select>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Input Text (Dynamic)</label>
                        <div className="w-full border border-slate-200 rounded-md flex items-center p-1 bg-white">
                            <div className="bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-mono px-2 py-0.5 rounded flex items-center gap-1.5">
                                <span className="bg-blue-200 text-blue-800 rounded-full w-3 h-3 flex items-center justify-center text-[8px]">1</span>
                                webhook.body.lead_text
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5 flex-1 flex flex-col">
                        <div className="flex justify-between items-center">
                            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">System Prompt</label>
                            <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">AI Optimized</span>
                        </div>
                        <textarea 
                            readOnly 
                            className="w-full flex-1 min-h-[120px] bg-slate-900 text-emerald-400 font-mono text-[11px] p-3 rounded-md border border-slate-800 leading-relaxed resize-none focus:outline-none"
                            value={'You are a lead enrichment bot.\nExtract the following from the input JSON:\n- Company Name\n- Employee Count (integer)\n- Intent Signal (High/Low)\n\nReturn ONLY a valid JSON object matching this schema.'}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Max Tokens</label>
                            <input type="number" value={500} readOnly className="w-full bg-slate-50 border border-slate-200 rounded-md text-[12px] px-3 py-2 text-slate-700" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">Temperature</label>
                            <input type="number" value={0.1} readOnly className="w-full bg-slate-50 border border-slate-200 rounded-md text-[12px] px-3 py-2 text-slate-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LogsView() {
    return (
        <div className="flex flex-col h-[600px] bg-white">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Execution History</h2>
                    <p className="text-[12px] text-slate-500 mt-0.5 font-medium">Real-time logs for Lead Enrichment & Routing</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[12px] font-bold text-slate-700">Listening for events...</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-hidden flex">
                <div className="w-1/2 border-r border-slate-200 overflow-y-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Execution ID</th>
                                <th className="px-4 py-3">Trigger</th>
                                <th className="px-4 py-3">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { status: "Success", id: "run_9a2f10bc", trigger: "Webhook", dur: "1.24s", time: "Just now", active: true },
                                { status: "Success", id: "run_8b1e09ad", trigger: "Webhook", dur: "0.98s", time: "5m ago", active: false },
                                { status: "Failed", id: "run_7c0d98bf", trigger: "Webhook", dur: "4.05s", time: "12m ago", active: false },
                                { status: "Success", id: "run_6d9c87ce", trigger: "Webhook", dur: "1.10s", time: "1h ago", active: false },
                                { status: "Success", id: "run_5e8b76df", trigger: "Webhook", dur: "1.05s", time: "2h ago", active: false },
                            ].map((r, i) => (
                                <tr key={i} className={`border-b border-slate-100 cursor-pointer transition-colors ${r.active ? "bg-indigo-50 border-l-2 border-l-indigo-600" : "hover:bg-slate-50 border-l-2 border-l-transparent"}`}>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded border ${r.status === 'Success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                                            {r.status === 'Success' ? '✓' : '✗'} {r.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="text-[12px] font-mono text-indigo-600">{r.id}</div>
                                        <div className="text-[10px] text-slate-400 mt-0.5">{r.time}</div>
                                    </td>
                                    <td className="px-4 py-3 text-[12px] text-slate-700 font-medium">{r.trigger}</td>
                                    <td className="px-4 py-3 text-[12px] font-mono text-slate-500">{r.dur}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-1/2 bg-slate-900 overflow-y-auto p-4 flex flex-col gap-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">Execution Trace: run_9a2f10bc</div>
                    
                    {/* Log Step 1 */}
                    <div className="bg-[#1e1e24] border border-[#333] rounded-md overflow-hidden">
                        <div className="bg-[#2d2d35] px-3 py-2 flex items-center gap-2 border-b border-[#333]">
                            <div className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 px-1.5 rounded font-bold">1</div>
                            <span className="text-[12px] font-bold text-slate-200">Webhook Trigger</span>
                            <span className="text-[10px] font-mono text-slate-400 ml-auto">0ms</span>
                        </div>
                        <div className="p-3 text-[11px] font-mono text-emerald-400 whitespace-pre-wrap">
                            {`{\n  "headers": { "content-type": "application/json" },\n  "body": {\n    "lead_text": "Hi, I'm from Acme Corp. We have 1200 employees and need a solution."\n  }\n}`}
                        </div>
                    </div>

                    {/* Log Step 2 */}
                    <div className="bg-[#1e1e24] border border-[#333] rounded-md overflow-hidden">
                        <div className="bg-[#2d2d35] px-3 py-2 flex items-center gap-2 border-b border-[#333]">
                            <div className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 rounded font-bold">2</div>
                            <span className="text-[12px] font-bold text-slate-200">OpenAI GPT-4</span>
                            <span className="text-[10px] font-mono text-slate-400 ml-auto">+842ms</span>
                        </div>
                        <div className="p-3 text-[11px] font-mono text-emerald-400 whitespace-pre-wrap">
                            {`{\n  "company_name": "Acme Corp",\n  "employee_count": 1200,\n  "intent_signal": "High"\n}`}
                        </div>
                    </div>

                    {/* Log Step 3 */}
                    <div className="bg-[#1e1e24] border border-[#333] rounded-md overflow-hidden">
                        <div className="bg-[#2d2d35] px-3 py-2 flex items-center gap-2 border-b border-[#333]">
                            <div className="text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/30 px-1.5 rounded font-bold">3</div>
                            <span className="text-[12px] font-bold text-slate-200">Salesforce (Create Lead)</span>
                            <span className="text-[10px] font-mono text-slate-400 ml-auto">+401ms</span>
                        </div>
                        <div className="p-3 text-[11px] font-mono text-emerald-400 whitespace-pre-wrap">
                            {`{\n  "success": true,\n  "id": "00Q8a00000cXyZ1EAL",\n  "errors": []\n}`}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


/* ─── Main Component ───────────────────────────────────── */
export function SimplifaiUI() {
    const [view, setView] = useState<"canvas" | "logs">("canvas");

    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto max-w-[1200px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                            04b — B2B Workflow Automation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                            Production-Grade Reality
                        </h2>
                        <p className="text-lg text-slate-600 font-medium leading-relaxed">
                            Simplifai uses authentic layout patterns found in high-end automation platforms (like Zapier or Make). Featuring a real node canvas, detailed property panels, and terminal-style execution logs with actual JSON payloads.
                        </p>
                    </div>

                    <div className="flex bg-slate-200/50 p-1 rounded-xl border border-slate-300 shadow-inner">
                        <button
                            onClick={() => setView("canvas")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "canvas" ? "bg-white text-indigo-700 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Flow Builder
                        </button>
                        <button
                            onClick={() => setView("logs")}
                            className={`px-6 py-2.5 rounded-lg text-[13px] font-bold transition-all ${view === "logs" ? "bg-white text-indigo-700 shadow-sm border border-slate-200" : "text-slate-500 hover:text-slate-700"}`}
                        >
                            Execution Logs
                        </button>
                    </div>
                </motion.div>

                <div className="relative w-full overflow-x-auto pb-6 -mx-6 px-6 sm:mx-0 sm:px-0">
                    <div className="min-w-[900px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={view}
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <BrowserFrame url={view === "canvas" ? "app.simplifai.ai/flow/editor" : "app.simplifai.ai/flow/logs"}>
                                    {view === "canvas" ? <FlowBuilder /> : <LogsView />}
                                </BrowserFrame>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
