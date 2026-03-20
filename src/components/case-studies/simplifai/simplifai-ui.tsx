"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BrowserFrame({ url, badge, children }: { url: string; badge?: string; children: React.ReactNode }) {
    return (
        <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl bg-white w-full">
            <div className="flex items-center gap-3 px-4 py-3 bg-zinc-100 border-b border-zinc-200">
                <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-1 text-xs text-zinc-400 text-center truncate">{url}</div>
                {badge && <span className="text-[10px] font-bold text-violet-600 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full flex-shrink-0">{badge}</span>}
            </div>
            {children}
        </div>
    );
}

// ── Screen 1: Flow Dashboard ────────────────────────────────────────────────
function FlowDashboard() {
    const flows = [
        { name: "Lead Qualification Engine", desc: "Enriches CRM contacts and scores by intent signal", trigger: "Webhook", status: "Active", runs: "2 min ago", color: "bg-violet-100 text-violet-700" },
        { name: "Invoice Processing Pipeline", desc: "Extracts line items, routes for approval, syncs to ERP", trigger: "Email", status: "Active", runs: "1 hr ago", color: "bg-blue-100 text-blue-700" },
        { name: "Customer Support Triage", desc: "Classifies tickets, assigns priority, notifies on-call", trigger: "Webhook", status: "Active", runs: "3 hrs ago", color: "bg-emerald-100 text-emerald-700" },
        { name: "Contract Renewal Alert", desc: "Monitors contract dates, triggers 30/14/7-day reminders", trigger: "Schedule", status: "Draft", runs: "Never", color: "bg-zinc-100 text-zinc-500" },
    ];

    return (
        <div className="flex bg-white" style={{ height: 400 }}>
            {/* Sidebar */}
            <div className="w-[200px] border-r border-zinc-100 bg-zinc-50 flex flex-col flex-shrink-0">
                {/* Brand */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-zinc-100">
                    <div className="w-6 h-6 bg-violet-600 rounded-md flex-shrink-0" />
                    <span className="text-sm font-bold text-zinc-800">simplifai</span>
                </div>
                {/* Nav */}
                <nav className="flex-1 p-2 space-y-0.5">
                    {[
                        { label: "My Flows", active: true, dot: "3 active" },
                        { label: "Executions", active: false, dot: "" },
                        { label: "Templates", active: false, dot: "" },
                        { label: "API Keys", active: false, dot: "" },
                        { label: "Team", active: false, dot: "" },
                        { label: "Settings", active: false, dot: "" },
                    ].map((item) => (
                        <div key={item.label} className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer ${item.active ? "bg-violet-600 text-white font-semibold" : "text-zinc-500 hover:bg-zinc-100"}`}>
                            <span>{item.label}</span>
                            {item.dot && <span className={`text-[10px] font-bold ${item.active ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-500"} px-1.5 py-0.5 rounded-full`}>{item.dot}</span>}
                        </div>
                    ))}
                </nav>
                {/* User */}
                <div className="flex items-center gap-2 px-4 py-3 border-t border-zinc-100">
                    <div className="w-6 h-6 rounded-full bg-violet-200 flex items-center justify-center text-[10px] font-bold text-violet-700">AC</div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold text-zinc-700 truncate">Aditya</div>
                        <div className="text-[9px] text-zinc-400">Pro Plan</div>
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="flex-1 overflow-hidden flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                    <div>
                        <h1 className="text-base font-bold text-zinc-900">My Flows</h1>
                        <p className="text-xs text-zinc-400 mt-0.5">4 flows · 3 active</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 border border-zinc-200 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="3.5" stroke="#9ca3af" strokeWidth="1.2"/><path d="M8 8l2 2" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round"/></svg>
                            Search flows...
                        </div>
                        <div className="bg-violet-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                            <span className="text-base leading-none">+</span> New Flow
                        </div>
                    </div>
                </div>

                {/* Flow list */}
                <div className="flex-1 overflow-auto p-4 space-y-2">
                    {flows.map((f) => (
                        <div key={f.name} className="flex items-center gap-4 px-4 py-3 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:shadow-sm transition-all cursor-pointer bg-white group">
                            <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${f.color}`}>
                                {f.name.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-sm font-semibold text-zinc-800">{f.name}</span>
                                </div>
                                <div className="text-xs text-zinc-400 truncate">{f.desc}</div>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <div className="text-[10px] font-medium text-zinc-400 border border-zinc-100 rounded px-1.5 py-0.5">{f.trigger}</div>
                                <div className="text-[10px] text-zinc-400">{f.runs}</div>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${f.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-zinc-100 text-zinc-400"}`}>{f.status}</span>
                                <div className="text-zinc-300 group-hover:text-zinc-500 text-lg leading-none">···</div>
                            </div>
                        </div>
                    ))}

                    {/* Templates row */}
                    <div className="mt-2 pt-4 border-t border-zinc-100">
                        <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Quick Start Templates</div>
                        <div className="flex gap-2">
                            {["Lead Scoring", "Invoice Automation", "Support Triage", "Data Enrichment"].map((t) => (
                                <div key={t} className="px-3 py-2 rounded-lg border border-dashed border-zinc-200 text-xs text-zinc-500 hover:border-violet-300 hover:text-violet-600 cursor-pointer transition-colors">{t}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Screen 2: Flow Builder ───────────────────────────────────────────────────
function FlowBuilder() {
    return (
        <div className="flex flex-col bg-white" style={{ height: 400 }}>
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 bg-white flex-shrink-0">
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
                    <span className="text-zinc-400">My Flows</span>
                    <span className="text-zinc-300">/</span>
                    <span>Lead Qualification Engine</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full ml-1">Saved</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xs text-zinc-400 border border-zinc-200 rounded px-2 py-1">100%</div>
                    <div className="flex items-center gap-1.5">
                        <div className="px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 cursor-pointer">Test Run</div>
                        <div className="px-3 py-1.5 rounded-lg bg-violet-600 text-white text-xs font-bold cursor-pointer">Deploy</div>
                    </div>
                </div>
            </div>

            {/* Canvas + sidebar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Canvas */}
                <div
                    className="flex-1 relative overflow-hidden"
                    style={{ background: "#fafafa", backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                >
                    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
                        {/* Connection lines */}
                        <path d="M 100 130 L 160 130" stroke="#c4b5fd" strokeWidth="2" fill="none" />
                        <path d="M 240 130 L 300 130" stroke="#c4b5fd" strokeWidth="2" fill="none" />
                        <path d="M 380 130 L 440 130" stroke="#c4b5fd" strokeWidth="2" fill="none" />
                        <path d="M 525 115 L 565 95" stroke="#c4b5fd" strokeWidth="2" fill="none" />
                        <path d="M 525 143 L 565 163" stroke="#c4b5fd" strokeWidth="2" fill="none" />

                        {/* Trigger node */}
                        <rect x="20" y="106" width="80" height="48" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" />
                        <text x="60" y="124" textAnchor="middle" fill="#6d28d9" fontSize="8" fontWeight="700" letterSpacing="1">TRIGGER</text>
                        <text x="60" y="138" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="600">Webhook</text>
                        <text x="60" y="150" textAnchor="middle" fill="#a78bfa" fontSize="8">POST /inbound</text>

                        {/* Enrich node */}
                        <rect x="160" y="106" width="80" height="48" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
                        <text x="200" y="124" textAnchor="middle" fill="#1d4ed8" fontSize="8" fontWeight="700" letterSpacing="1">ACTION</text>
                        <text x="200" y="138" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="600">Enrich Lead</text>
                        <text x="200" y="150" textAnchor="middle" fill="#93c5fd" fontSize="8">via Clearbit API</text>

                        {/* AI Classify node */}
                        <rect x="300" y="106" width="80" height="48" rx="8" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1.5" />
                        <text x="340" y="124" textAnchor="middle" fill="#3730a3" fontSize="8" fontWeight="700" letterSpacing="1">AI STEP</text>
                        <text x="340" y="138" textAnchor="middle" fill="#4338ca" fontSize="11" fontWeight="600">Classify</text>
                        <text x="340" y="150" textAnchor="middle" fill="#818cf8" fontSize="8">GPT-4 intent</text>

                        {/* Condition diamond */}
                        <polygon points="480,106 525,130 480,154 435,130" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                        <text x="480" y="134" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="700">High Value?</text>

                        {/* Notify CRM */}
                        <rect x="565" y="70" width="80" height="44" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
                        <text x="605" y="87" textAnchor="middle" fill="#065f46" fontSize="8" fontWeight="700" letterSpacing="1">ACTION</text>
                        <text x="605" y="101" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="600">Notify CRM</text>
                        <text x="605" y="113" textAnchor="middle" fill="#6ee7b7" fontSize="8">Salesforce</text>

                        {/* Archive */}
                        <rect x="565" y="140" width="80" height="44" rx="8" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1.5" />
                        <text x="605" y="157" textAnchor="middle" fill="#374151" fontSize="8" fontWeight="700" letterSpacing="1">ACTION</text>
                        <text x="605" y="171" textAnchor="middle" fill="#6b7280" fontSize="10" fontWeight="600">Archive</text>
                        <text x="605" y="183" textAnchor="middle" fill="#9ca3af" fontSize="8">Low priority</text>

                        {/* Arrow heads */}
                        <polygon points="158,127 152,130 158,133" fill="#c4b5fd" />
                        <polygon points="298,127 292,130 298,133" fill="#c4b5fd" />
                        <polygon points="438,127 432,130 438,133" fill="#c4b5fd" />
                        <polygon points="563,92 557,95 563,98" fill="#c4b5fd" />
                        <polygon points="563,160 557,163 563,166" fill="#c4b5fd" />

                        {/* Yes/No labels */}
                        <text x="548" y="103" fill="#059669" fontSize="8" fontWeight="700">Yes</text>
                        <text x="548" y="168" fill="#6b7280" fontSize="8" fontWeight="700">No</text>
                    </svg>

                    {/* Zoom controls */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1">
                        <div className="bg-white border border-zinc-200 rounded-lg p-1.5 shadow-sm text-xs text-zinc-600 flex gap-1">
                            <span className="cursor-pointer px-1">−</span>
                            <span className="text-zinc-300">|</span>
                            <span className="cursor-pointer px-1">+</span>
                        </div>
                        <div className="bg-white border border-zinc-200 rounded-lg px-2 py-1.5 shadow-sm text-[10px] text-zinc-500">Fit</div>
                    </div>

                    {/* Minimap */}
                    <div className="absolute bottom-3 right-[180px] w-[80px] h-[50px] bg-white border border-zinc-200 rounded shadow-sm opacity-60" />
                </div>

                {/* Config sidebar */}
                <div className="w-[160px] border-l border-zinc-200 bg-white flex flex-col flex-shrink-0">
                    <div className="px-3 py-2.5 border-b border-zinc-100">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Selected Node</div>
                        <div className="text-xs font-bold text-zinc-800">Webhook Trigger</div>
                    </div>
                    <div className="p-3 space-y-2.5 flex-1">
                        <div>
                            <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Method</label>
                            <div className="bg-violet-50 border border-violet-200 rounded-md px-2 py-1.5 text-xs font-bold text-violet-700">POST</div>
                        </div>
                        <div>
                            <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Endpoint</label>
                            <div className="bg-zinc-50 border border-zinc-200 rounded-md px-2 py-1.5 text-[10px] font-mono text-zinc-600">/webhook/lead</div>
                        </div>
                        <div>
                            <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Auth</label>
                            <div className="bg-zinc-50 border border-zinc-200 rounded-md px-2 py-1.5 text-xs text-zinc-500">Bearer Token</div>
                        </div>
                        <div>
                            <label className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">Payload Schema</label>
                            <div className="bg-[#1a1a2e] rounded-md p-2 text-[8px] font-mono text-emerald-400 leading-relaxed">
                                <div>{"{"}</div>
                                <div className="pl-2"><span className="text-blue-400">&quot;email&quot;</span>: str</div>
                                <div className="pl-2"><span className="text-blue-400">&quot;source&quot;</span>: str</div>
                                <div>{"}"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-t border-zinc-100">
                        <div className="w-full bg-zinc-100 text-zinc-600 text-[10px] font-bold text-center py-2 rounded-lg cursor-pointer hover:bg-zinc-200">Test Node</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Screen 3: Execution Monitor ─────────────────────────────────────────────
function ExecutionMonitor() {
    const runs = [
        { id: "run_9f2a", name: "Lead Qualification Engine", status: "Completed", steps: "5/5", dur: "1.24s", time: "2 min ago", expanded: true },
        { id: "run_8e1b", name: "Invoice Processing Pipeline", status: "Running", steps: "3/5", dur: "—", time: "just now", expanded: false },
        { id: "run_7d0c", name: "Lead Qualification Engine", status: "Failed", steps: "2/5", dur: "0.41s", time: "14 min ago", expanded: false },
        { id: "run_6c9d", name: "Support Triage", status: "Completed", steps: "4/4", dur: "0.87s", time: "1 hr ago", expanded: false },
        { id: "run_5b8e", name: "Invoice Processing Pipeline", status: "Completed", steps: "5/5", dur: "1.62s", time: "2 hrs ago", expanded: false },
    ];

    const statusStyles: Record<string, { pill: string; dot: string }> = {
        Completed: { pill: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
        Running: { pill: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-500 animate-pulse" },
        Failed: { pill: "bg-red-50 text-red-600 border-red-200", dot: "bg-red-500" },
    };

    return (
        <div className="flex flex-col bg-white" style={{ height: 400 }}>
            {/* Filter bar */}
            <div className="flex items-center gap-3 px-6 py-3 border-b border-zinc-100 bg-white flex-shrink-0">
                <div className="flex items-center gap-2 text-xs text-zinc-400 border border-zinc-200 rounded-lg px-3 py-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="3.5" stroke="#9ca3af" strokeWidth="1.2"/><path d="M8 8l2 2" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Search executions...
                </div>
                <div className="flex gap-1.5">
                    {["All", "Completed", "Running", "Failed"].map((f, i) => (
                        <span key={f} className={`text-xs font-semibold px-2.5 py-1 rounded-full border cursor-pointer ${i === 0 ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200 text-zinc-500 hover:border-zinc-300"}`}>{f}</span>
                    ))}
                </div>
                <div className="ml-auto text-xs text-zinc-400 flex items-center gap-1.5">
                    <span>Last 24h</span>
                    <span className="text-zinc-300">·</span>
                    <span className="font-semibold text-zinc-600">47 runs</span>
                </div>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-5 gap-2 px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-100 bg-zinc-50/50 flex-shrink-0">
                <div className="col-span-2">Flow</div>
                <div>Status</div>
                <div>Steps</div>
                <div>Duration</div>
            </div>

            {/* Rows */}
            <div className="flex-1 overflow-auto divide-y divide-zinc-50">
                {runs.map((r) => (
                    <div key={r.id}>
                        <div className="grid grid-cols-5 gap-2 px-6 py-3 items-center hover:bg-zinc-50/50 cursor-pointer">
                            <div className="col-span-2 flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusStyles[r.status].dot}`} />
                                <div>
                                    <div className="text-xs font-semibold text-zinc-800">{r.name}</div>
                                    <div className="text-[10px] text-zinc-400 font-mono">{r.id}</div>
                                </div>
                            </div>
                            <div>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusStyles[r.status].pill}`}>{r.status}</span>
                            </div>
                            <div className="text-xs text-zinc-500 font-mono">{r.steps}</div>
                            <div className="text-xs text-zinc-500 font-mono">{r.dur}</div>
                        </div>
                        {r.expanded && (
                            <div className="mx-6 mb-3 rounded-xl bg-[#0d1117] p-3 border border-zinc-800">
                                <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Execution Trace</div>
                                <div className="space-y-1 text-[10px] font-mono">
                                    <div className="text-blue-400">→ Webhook received: POST /webhook/lead {"{ email: \"j.smith@corp.com\" }"}</div>
                                    <div className="text-zinc-400">→ Clearbit enrich: matched ✓ · Company: Corp Inc · Size: 500-1000</div>
                                    <div className="text-purple-400">→ AI classify: intent=high-value · confidence=0.91 · model=gpt-4o</div>
                                    <div className="text-amber-400">→ Condition: High Value? → true → routing to CRM notify</div>
                                    <div className="text-emerald-400">✓ Salesforce lead created · deal_id=SF-9821 · owner=sales@corp.com</div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Exported component ───────────────────────────────────────────────────────
const tabs = [
    {
        label: "Flow Dashboard — V2",
        shortLabel: "Dashboard",
        url: "app.simplifai.ai/flows",
        badge: "V2 Design",
        Component: FlowDashboard,
        caption: "The linear step-builder that replaced an infinite canvas. V1's FigJam-style canvas paralyzed non-technical users — \"where do I even start?\". Switching to a structured list view with smart defaults drove a 40% reduction in onboarding drop-off in 3 weeks.",
    },
    {
        label: "Flow Builder Canvas",
        shortLabel: "Flow Builder",
        url: "app.simplifai.ai/flows/lead-qualification/edit",
        badge: "4-Node System",
        Component: FlowBuilder,
        caption: "4 operator types (Trigger → Action → AI Step → Condition) compose every possible workflow. The right-panel config keeps context in-view without leaving the canvas. Replaced conditional branching with an \"if-diamond\" node after 2 weeks of back-and-forth with engineering.",
    },
    {
        label: "Execution Monitor",
        shortLabel: "Run Monitor",
        url: "app.simplifai.ai/executions",
        badge: "Enterprise",
        Component: ExecutionMonitor,
        caption: "Full execution trace per run — enterprise clients need to audit what AI did and why. Each row expands to a step-by-step log with timing, payload, and output. This was the most-requested feature from the Q3 2022 client feedback sprint.",
    },
];

export function SimplifaiUI() {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/* Tab bar */}
            <div className="flex gap-1 mb-6 border-b border-zinc-200">
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`relative px-4 py-2.5 text-sm font-semibold transition-colors rounded-t-lg ${active === i ? "text-violet-700" : "text-zinc-400 hover:text-zinc-600"}`}
                    >
                        {tab.shortLabel}
                        {active === i && (
                            <motion.div layoutId="simplifai-tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 rounded-t" />
                        )}
                    </button>
                ))}
            </div>

            {/* Screen */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                >
                    {(() => { const Tab = tabs[active].Component; return <BrowserFrame url={tabs[active].url} badge={tabs[active].badge}><Tab /></BrowserFrame>; })()}
                    <p className="text-sm text-zinc-500 mt-4 leading-relaxed max-w-3xl">{tabs[active].caption}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
