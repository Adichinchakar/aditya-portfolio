"use client";

import React from "react";
import { motion } from "framer-motion";

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-lg bg-white w-full">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="ml-2 flex-1 bg-white/80 rounded text-[9px] text-zinc-400 px-2 py-0.5 truncate">{url}</div>
            </div>
            {children}
        </div>
    );
}

function FlowDashboard() {
    const flows = [
        { name: "Lead Qualification", trigger: "Webhook", status: "Active", ago: "24m ago" },
        { name: "Invoice Processing", trigger: "Email", status: "Active", ago: "1h ago" },
        { name: "Support Routing", trigger: "Webhook", status: "Draft", ago: "2d ago" },
    ];

    return (
        <BrowserFrame url="app.simplifai.ai/flows">
            <div className="bg-white" style={{ minHeight: 170 }}>
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 bg-violet-700">
                    <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 bg-white/30 rounded-sm" />
                        <span className="text-[10px] font-bold text-white tracking-wide">simplifai</span>
                    </div>
                    <div className="text-[9px] bg-white text-violet-700 rounded px-2 py-0.5 font-bold">+ New Flow</div>
                </div>
                <div className="flex">
                    <div className="w-[44px] border-r border-zinc-100 py-2 flex flex-col items-center gap-2 bg-zinc-50">
                        <div className="w-5 h-5 bg-violet-100 rounded flex items-center justify-center">
                            <div className="w-2.5 h-0.5 bg-violet-600 rounded" />
                        </div>
                        <div className="w-5 h-5 bg-zinc-100 rounded" />
                        <div className="w-5 h-5 bg-zinc-100 rounded" />
                    </div>
                    <div className="flex-1 p-2">
                        <div className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">My Flows · 3</div>
                        <div className="space-y-1">
                            {flows.map((f) => (
                                <div key={f.name} className="flex items-center justify-between px-2 py-1.5 rounded-md border border-zinc-100 hover:bg-violet-50/50">
                                    <div>
                                        <div className="text-[9px] font-semibold text-zinc-800">{f.name}</div>
                                        <div className="text-[8px] text-zinc-400">{f.trigger} · {f.ago}</div>
                                    </div>
                                    <span className={`text-[7px] px-1.5 py-0.5 rounded-full font-bold ${f.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-zinc-100 text-zinc-400"}`}>{f.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </BrowserFrame>
    );
}

function FlowBuilder() {
    return (
        <BrowserFrame url="app.simplifai.ai/flows/lead-qual/edit">
            <div className="bg-white flex" style={{ height: 170 }}>
                <div
                    className="flex-1 relative overflow-hidden bg-zinc-50"
                    style={{ backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)", backgroundSize: "10px 10px" }}
                >
                    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                        {/* Edges */}
                        <line x1="66" y1="70" x2="90" y2="70" stroke="#c4b5fd" strokeWidth="1.5" />
                        <line x1="138" y1="70" x2="162" y2="70" stroke="#c4b5fd" strokeWidth="1.5" />
                        <line x1="210" y1="64" x2="226" y2="52" stroke="#c4b5fd" strokeWidth="1.5" />
                        <line x1="210" y1="74" x2="226" y2="88" stroke="#c4b5fd" strokeWidth="1.5" />

                        {/* Trigger node */}
                        <rect x="18" y="56" width="48" height="26" rx="5" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                        <text x="42" y="66" textAnchor="middle" fill="#7c3aed" fontSize="6" fontWeight="700">TRIGGER</text>
                        <text x="42" y="76" textAnchor="middle" fill="#7c3aed" fontSize="7">Webhook</text>

                        {/* AI node */}
                        <rect x="90" y="56" width="48" height="26" rx="5" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" />
                        <text x="114" y="66" textAnchor="middle" fill="#4338ca" fontSize="6" fontWeight="700">AI STEP</text>
                        <text x="114" y="76" textAnchor="middle" fill="#4338ca" fontSize="7">Classify</text>

                        {/* Condition node */}
                        <polygon points="186,56 210,70 186,84 162,70" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                        <text x="186" y="73" textAnchor="middle" fill="#d97706" fontSize="6.5" fontWeight="700">IF</text>

                        {/* Action nodes */}
                        <rect x="226" y="38" width="48" height="22" rx="5" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                        <text x="250" y="52" textAnchor="middle" fill="#059669" fontSize="7">Notify CRM</text>

                        <rect x="226" y="76" width="48" height="22" rx="5" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5" />
                        <text x="250" y="90" textAnchor="middle" fill="#6b7280" fontSize="7">Archive</text>
                    </svg>
                </div>

                {/* Config sidebar */}
                <div className="w-[76px] border-l border-zinc-200 p-2 bg-white flex flex-col gap-1.5">
                    <div className="text-[8px] font-bold text-zinc-400 uppercase tracking-wider">Config</div>
                    <div className="text-[8px] text-zinc-500 font-medium">Method</div>
                    <div className="bg-violet-50 border border-violet-200 rounded px-1.5 py-0.5 text-[8px] text-violet-700 font-mono">POST</div>
                    <div className="text-[8px] text-zinc-500 font-medium">Endpoint</div>
                    <div className="bg-zinc-50 border border-zinc-200 rounded px-1.5 py-0.5 text-[7px] text-zinc-500 font-mono truncate">/webhook</div>
                    <div className="text-[8px] text-zinc-500 font-medium">Auth</div>
                    <div className="bg-zinc-50 border border-zinc-200 rounded px-1.5 py-0.5 text-[8px] text-zinc-500">Bearer</div>
                    <div className="mt-auto bg-violet-600 rounded text-[8px] text-white text-center py-1 font-bold">Deploy</div>
                </div>
            </div>
        </BrowserFrame>
    );
}

function ExecutionMonitor() {
    const runs = [
        { name: "Lead Qualification", status: "Completed", dur: "1.2s", time: "2m ago" },
        { name: "Invoice Processing", status: "Running", dur: "—", time: "now" },
        { name: "Lead Qualification", status: "Failed", dur: "0.4s", time: "14m ago" },
        { name: "Support Routing", status: "Completed", dur: "0.9s", time: "1h ago" },
    ];

    const badge: Record<string, string> = {
        Completed: "bg-emerald-50 text-emerald-600",
        Running: "bg-blue-50 text-blue-600",
        Failed: "bg-red-50 text-red-500",
    };

    return (
        <BrowserFrame url="app.simplifai.ai/executions">
            <div className="bg-white p-2.5" style={{ minHeight: 170 }}>
                <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] font-bold text-zinc-800">Execution History</div>
                    <div className="text-[9px] text-zinc-400">47 runs · 24h</div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-[7.5px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-100 pb-1">
                    <div>Flow</div>
                    <div>Status</div>
                    <div>Dur.</div>
                    <div>Time</div>
                </div>
                {runs.map((r, i) => (
                    <div key={i} className="grid grid-cols-4 gap-1 py-1.5 border-b border-zinc-50 items-center">
                        <div className="text-[8px] font-medium text-zinc-700 truncate">{r.name}</div>
                        <div>
                            <span className={`text-[7px] px-1 py-0.5 rounded-full font-bold ${badge[r.status]}`}>{r.status}</span>
                        </div>
                        <div className="text-[8px] text-zinc-400 font-mono">{r.dur}</div>
                        <div className="text-[8px] text-zinc-400">{r.time}</div>
                    </div>
                ))}
                <div className="mt-2 px-2 py-1.5 bg-zinc-50 border border-zinc-100 rounded-md">
                    <div className="text-[8px] font-mono text-zinc-400">▶ Lead Qualification · run_8f2a</div>
                    <div className="text-[7px] font-mono text-emerald-600 mt-0.5">✓ Webhook received · AI classified: high-value · CRM notified</div>
                </div>
            </div>
        </BrowserFrame>
    );
}

const screens = [
    {
        Component: FlowDashboard,
        label: "Flow Dashboard — V2",
        desc: "Linear step-builder replaced the infinite canvas. Reduced onboarding drop-off by 40% in 3 weeks.",
    },
    {
        Component: FlowBuilder,
        label: "Flow Builder Canvas",
        desc: "4-node operator model: Trigger → AI → Condition → Action. Config sidebar keeps context in-panel.",
    },
    {
        Component: ExecutionMonitor,
        label: "Execution Monitor",
        desc: "Real-time run log with status, duration, and expandable trace — critical for enterprise debugging.",
    },
];

export function SimplifaiUI() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {screens.map(({ Component, label, desc }, i) => (
                <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-3"
                >
                    <Component />
                    <div>
                        <div className="text-sm font-semibold text-zinc-800">{label}</div>
                        <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
