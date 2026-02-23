"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Zap, BrainCircuit, GitBranch, Send, Mail, Database,
    MessageSquare, Users, FileText, BarChart2, ArrowRight, Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type NodeType = "trigger" | "ai" | "condition" | "action";

interface FlowNode {
    id: string;
    type: NodeType;
    label: string;
    icon: React.ElementType;
    description: string;
    col: number; // layout column (0-indexed)
    row: number; // layout row within column (0-indexed)
}

type UseCase = "lead" | "invoice" | "support";

const useCases: Record<UseCase, { label: string; story: string; metric: string; metricLabel: string; nodes: FlowNode[]; connections: [string, string][] }> = {
    lead: {
        label: "Lead Qualification",
        story: "When a new lead enters the CRM, Simplifai instantly classifies intent, routes high-value prospects to sales, and drops others into a nurture sequence — all in under 2 seconds.",
        metric: "4.5 hrs/week",
        metricLabel: "saved per ops manager",
        nodes: [
            { id: "t1", type: "trigger", label: "New Lead", icon: Zap, description: "Trigger: New lead enters CRM system", col: 0, row: 0 },
            { id: "a1", type: "ai", label: "AI: Classify Intent", icon: BrainCircuit, description: "AI Analysis: Score lead intent & estimated contract value", col: 1, row: 0 },
            { id: "c1", type: "condition", label: "High-Value?", icon: GitBranch, description: "Condition: Score ≥ 80 routes to enterprise track", col: 2, row: 0 },
            { id: "x1", type: "action", label: "Notify Sales", icon: Send, description: "YES → Instant Slack alert + CRM task created", col: 3, row: 0 },
            { id: "a2", type: "ai", label: "AI: Nurture Score", icon: BrainCircuit, description: "NO → AI calculates best nurture cadence", col: 3, row: 1 },
            { id: "x2", type: "action", label: "Add to Drip", icon: Mail, description: "Action: Enroll in email drip campaign", col: 4, row: 1 },
            { id: "x3", type: "action", label: "Log to CRM", icon: Database, description: "Action: Full event log saved to CRM record", col: 4, row: 0 },
        ],
        connections: [["t1", "a1"], ["a1", "c1"], ["c1", "x1"], ["x1", "x3"], ["c1", "a2"], ["a2", "x2"]],
    },
    invoice: {
        label: "Invoice Processing",
        story: "When an invoice arrives, AI extracts key fields, validates against PO data, and routes for approval — eliminating manual data entry entirely.",
        metric: "80%",
        metricLabel: "reduction in processing time",
        nodes: [
            { id: "t1", type: "trigger", label: "Invoice Received", icon: FileText, description: "Trigger: Email attachment detected as invoice", col: 0, row: 0 },
            { id: "a1", type: "ai", label: "AI: Extract Fields", icon: BrainCircuit, description: "AI extracts: vendor, amount, due date, PO number", col: 1, row: 0 },
            { id: "c1", type: "condition", label: "Matches PO?", icon: GitBranch, description: "Condition: Invoice amount matches approved PO", col: 2, row: 0 },
            { id: "x1", type: "action", label: "Auto-Approve", icon: Send, description: "YES → Auto-approve & schedule payment", col: 3, row: 0 },
            { id: "x2", type: "action", label: "Flag for Review", icon: MessageSquare, description: "NO → Notify finance team for manual review", col: 3, row: 1 },
            { id: "x3", type: "action", label: "Update ERP", icon: Database, description: "Action: Sync status back to ERP system", col: 4, row: 0 },
            { id: "x4", type: "action", label: "Notify AP Team", icon: Users, description: "Action: Alert accounts payable with context", col: 4, row: 1 },
        ],
        connections: [["t1", "a1"], ["a1", "c1"], ["c1", "x1"], ["x1", "x3"], ["c1", "x2"], ["x2", "x4"]],
    },
    support: {
        label: "Support Routing",
        story: "When a support ticket is created, AI classifies urgency and product area, and routes to the right team automatically — cutting first-response time by 60%.",
        metric: "60%",
        metricLabel: "faster first-response time",
        nodes: [
            { id: "t1", type: "trigger", label: "Ticket Created", icon: MessageSquare, description: "Trigger: New support ticket submitted", col: 0, row: 0 },
            { id: "a1", type: "ai", label: "AI: Classify Ticket", icon: BrainCircuit, description: "AI scores: urgency, product area, sentiment", col: 1, row: 0 },
            { id: "c1", type: "condition", label: "P0 / Critical?", icon: GitBranch, description: "Condition: Urgency score ≥ 90 = critical", col: 2, row: 0 },
            { id: "x1", type: "action", label: "Page On-Call", icon: Zap, description: "YES → PagerDuty alert + Slack war room created", col: 3, row: 0 },
            { id: "x2", type: "action", label: "Route to Team", icon: Users, description: "NO → Assign to right product squad", col: 3, row: 1 },
            { id: "x3", type: "action", label: "Update Customer", icon: Send, description: "Action: Auto-reply with SLA commitment", col: 4, row: 0 },
            { id: "x4", type: "action", label: "Track in Dash", icon: BarChart2, description: "Action: Log routing metrics for reporting", col: 4, row: 1 },
        ],
        connections: [["t1", "a1"], ["a1", "c1"], ["c1", "x1"], ["x1", "x3"], ["c1", "x2"], ["x2", "x4"]],
    },
};

type ActiveNode = string | null;

const nodeStyles: Record<NodeType, { card: string; icon: string; badge: string }> = {
    trigger: { card: "bg-white border-2 border-purple-400 shadow-[0_0_16px_rgba(168,85,247,0.18)]", icon: "bg-purple-50 text-purple-600", badge: "bg-purple-100 text-purple-700" },
    ai: { card: "bg-white border-2 border-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.18)]", icon: "bg-indigo-50 text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
    condition: { card: "bg-white border-2 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]", icon: "bg-amber-50 text-amber-600", badge: "bg-amber-100 text-amber-700" },
    action: { card: "bg-white border-2 border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]", icon: "bg-emerald-50 text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
};

function FlowCanvas({ useCase, activeNode, setActiveNode }: { useCase: UseCase; activeNode: ActiveNode; setActiveNode: (id: ActiveNode) => void }) {
    const data = useCases[useCase];
    // Compute layout: 5 columns × 2 rows, cells are 150px wide, 100px tall
    const COL_W = 185;
    const ROW_H = 120;
    const PAD_X = 20;
    const PAD_Y = 30;
    const CANVAS_W = PAD_X * 2 + COL_W * 5;
    const CANVAS_H = PAD_Y * 2 + ROW_H * 2;

    const nodePos = (node: FlowNode) => ({
        x: PAD_X + node.col * COL_W,
        y: PAD_Y + node.row * ROW_H,
    });

    const centerOf = (node: FlowNode) => {
        const { x, y } = nodePos(node);
        return { cx: x + 80, cy: y + 36 };
    };

    const getNode = (id: string) => data.nodes.find(n => n.id === id)!;

    return (
        <div className="relative w-full overflow-x-auto" tabIndex={0} role="region" aria-label="Interactive flow canvas">
            <div style={{ width: CANVAS_W, height: CANVAS_H }} className="relative mx-auto">
                {/* Dot grid */}
                <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                        backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                        opacity: 0.45,
                    }}
                />

                {/* SVG connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ width: CANVAS_W, height: CANVAS_H }}>
                    <defs>
                        <marker id="arrow-flow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa" />
                        </marker>
                        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7c3aed" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                    </defs>
                    {data.connections.map(([fromId, toId], i) => {
                        const from = getNode(fromId);
                        const to = getNode(toId);
                        const f = centerOf(from);
                        const t = centerOf(to);
                        const mx = (f.cx + t.cx) / 2;
                        return (
                            <motion.path
                                key={`${fromId}-${toId}-${useCase}`}
                                d={`M ${f.cx + 82} ${f.cy} C ${mx} ${f.cy}, ${mx} ${t.cy}, ${t.cx - 82} ${t.cy}`}
                                fill="none"
                                stroke="url(#line-grad)"
                                strokeWidth="2"
                                markerEnd="url(#arrow-flow)"
                                style={{ willChange: "stroke-dashoffset, opacity" }}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut", delay: i * 0.12 }}
                            />
                        );
                    })}
                </svg>

                {/* Nodes */}
                {data.nodes.map((node, i) => {
                    const { x, y } = nodePos(node);
                    const s = nodeStyles[node.type];
                    const isActive = activeNode === node.id;
                    return (
                        <motion.div
                            key={`${node.id}-${useCase}`}
                            className={cn(
                                "absolute flex items-center gap-2.5 p-2.5 pr-4 rounded-xl cursor-pointer transition-all duration-200 z-10 w-[164px] will-change-transform",
                                s.card,
                                isActive && "scale-105 ring-2 ring-purple-300/60"
                            )}
                            style={{ left: x, top: y }}
                            onMouseEnter={() => setActiveNode(node.id)}
                            onMouseLeave={() => setActiveNode(null)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.07 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className={cn("p-2 rounded-lg shrink-0", s.icon)}>
                                <node.icon className="w-4 h-4" />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className={cn("text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded w-fit mb-0.5", s.badge)}>{node.type}</span>
                                <span className="font-bold text-xs text-zinc-900 leading-tight">{node.label}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export function FlowPreview() {
    const [activeCase, setActiveCase] = useState<UseCase>("lead");
    const [activeNode, setActiveNode] = useState<ActiveNode>(null);

    const data = useCases[activeCase];
    const activeNodeData = data.nodes.find(n => n.id === activeNode);

    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-100">
            <div className="container mx-auto max-w-6xl">

                {/* Chapter label */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-sm font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        Chapter 3 — The Solution
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-3">
                        The Flow Builder
                    </h2>
                    <p className="text-lg text-zinc-500 font-medium max-w-2xl">
                        A node-based canvas that democratizes complex automation. Built with a custom React engine — no engineering required.
                    </p>
                </div>

                {/* Story strip */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-zinc-900 p-5 mb-8 flex flex-col md:flex-row md:items-center gap-4 relative overflow-hidden"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-l from-indigo-600/20 to-transparent pointer-events-none" />
                    <div className="flex-1 relative z-10">
                        <p className="text-white font-medium text-sm leading-relaxed">
                            <span className="text-indigo-400 font-bold">Scenario: </span>
                            {data.story}
                        </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 relative z-10 bg-white/10 rounded-xl px-5 py-3 border border-white/10">
                        <div>
                            <div className="text-white font-black text-2xl">{data.metric}</div>
                            <div className="text-zinc-400 text-xs font-medium">{data.metricLabel}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Use case tabs */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200 mb-4 w-fit flex-wrap">
                    {(Object.entries(useCases) as [UseCase, typeof useCases[UseCase]][]).map(([key, uc]) => (
                        <button
                            key={key}
                            onClick={() => { setActiveCase(key); setActiveNode(null); }}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeCase === key
                                ? "bg-white text-zinc-900 shadow-sm border border-zinc-200"
                                : "text-zinc-600 hover:text-zinc-800"
                                }`}
                        >
                            {uc.label}
                        </button>
                    ))}
                </div>

                {/* Canvas */}
                <div className="relative w-full rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-[0_4px_24px_rgb(0,0,0,0.06)]">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100 bg-zinc-50">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-mono text-zinc-600">Simplifai Flow Engine v2.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-zinc-500 font-medium">{data.nodes.length} nodes</span>
                            <span className="text-zinc-200">•</span>
                            <span className="text-xs text-zinc-500 font-medium">{data.connections.length} connections</span>
                        </div>
                    </div>

                    <div className="p-4 md:p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCase}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FlowCanvas useCase={activeCase} activeNode={activeNode} setActiveNode={setActiveNode} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Description tooltip bar */}
                    <div className="h-11 border-t border-zinc-100 px-5 flex items-center">
                        <AnimatePresence mode="wait">
                            {activeNodeData ? (
                                <motion.div
                                    key={activeNodeData.id}
                                    initial={{ opacity: 0, x: -6 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2.5"
                                >
                                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shrink-0" />
                                    <span className="text-sm text-zinc-600 font-medium">{activeNodeData.description}</span>
                                </motion.div>
                            ) : (
                                <motion.p
                                    key="hint"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-xs text-zinc-500 font-medium"
                                >
                                    Hover over any node to see details
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Impact strip */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                    <p className="text-sm text-zinc-600 font-medium max-w-xl">
                        <span className="font-bold text-zinc-900">Design impact:</span> This single canvas replaced the need for 3 manual approval processes. The visual programming model tested at a <span className="font-bold text-purple-700">92% task-completion rate</span> vs 41% for the previous text-config interface.
                    </p>
                    <div className="flex items-center gap-2 shrink-0">
                        <span className="text-2xl font-black text-zinc-900">92%</span>
                        <span className="text-xs text-zinc-500 font-medium leading-tight">task completion<br />rate (usability test)</span>
                        <ArrowRight className="w-4 h-4 text-zinc-300" />
                        <span className="text-2xl font-black text-zinc-900">41%</span>
                        <span className="text-xs text-zinc-500 font-medium leading-tight">before<br />redesign</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
