"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Send, CheckCircle2, ArrowRight, BrainCircuit, MessageSquare, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Types for our Flow Nodes
type NodeType = "trigger" | "condition" | "action" | "ai";

interface FlowNode {
    id: string;
    type: NodeType;
    label: string;
    icon: React.ElementType;
    x: number;
    y: number;
    description: string;
}

const initialNodes: FlowNode[] = [
    {
        id: "trigger-1",
        type: "trigger",
        label: "New Lead",
        icon: Zap,
        x: 100,
        y: 150,
        description: "Trigger: New lead enters CRM system",
    },
    {
        id: "ai-1",
        type: "ai",
        label: "AI Classification",
        icon: BrainCircuit,
        x: 400,
        y: 150,
        description: "AI Analysis: Classify lead intent & potential value",
    }
];

export function FlowPreview() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <section className="py-24 px-6 bg-zinc-50">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-zinc-900 mb-2">The Flow Builder</h2>
                        <p className="text-zinc-600 max-w-xl">
                            A node-based interface that democratizes complex logic. Built with a custom React engine.
                        </p>
                    </div>
                </div>

                <div className="relative w-full h-[500px] bg-slate-50 dark:bg-white/50 rounded-2xl border border-slate-200 dark:border-zinc-200 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 pattern-grid opacity-5" />

                    {/* Technical Note Badge */}
                    <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-md border border-zinc-700/50 px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-mono text-zinc-700">Custom Design System v2.0</span>
                    </div>

                    {/* Data Point Overlay */}
                    <div className="absolute top-6 right-6 z-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-zinc-900 px-6 py-4 rounded-xl shadow-lg border border-purple-400/20 max-w-xs">
                        <div className="text-3xl font-bold mb-1">40%</div>
                        <div className="text-sm text-purple-100 font-medium leading-tight">
                            Reduction in customer onboarding time
                        </div>
                    </div>

                    {/* SVG Connections Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <defs>
                            <marker
                                id="arrowhead"
                                markerWidth="10"
                                markerHeight="7"
                                refX="9"
                                refY="3.5"
                                orient="auto"
                            >
                                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                            </marker>
                            {/* Animated Gradient Definition */}
                            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#9333ea" />
                                <stop offset="100%" stopColor="#6366f1" />
                            </linearGradient>
                        </defs>

                        {/* Connection: New Lead -> AI Classification */}
                        <motion.path
                            d="M 230 185 C 290 185, 310 185, 370 185"
                            fill="none"
                            stroke="url(#gradient-line)"
                            strokeWidth="3"
                            markerEnd="url(#arrowhead)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Interactive Nodes Layer */}
                    {initialNodes.map((node) => (
                        <NodeComponent
                            key={node.id}
                            node={node}
                            isActive={activeNode === node.id}
                            onHover={() => setActiveNode(node.id)}
                            onLeave={() => setActiveNode(null)}
                        />
                    ))}

                    {/* Description Overlay */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
                        {activeNode && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-purple-500/30 shadow-xl text-sm text-zinc-800 flex items-center gap-3"
                            >
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                {initialNodes.find(n => n.id === activeNode)?.description}
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function NodeComponent({
    node,
    isActive,
    onHover,
    onLeave,
}: {
    node: FlowNode;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    // Styles based on node type
    const styles = {
        trigger: "bg-white border-2 border-purple-500 text-zinc-900 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
        ai: "bg-white border-2 border-indigo-500 text-zinc-900 shadow-[0_0_20px_rgba(99,102,241,0.3)]",
        condition: "bg-white dark:bg-slate-800 border-2 border-purple-500 text-purple-700 dark:text-purple-400",
        action: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300",
    }

    return (
        <motion.div
            className={cn(
                "absolute flex items-center gap-4 p-4 pr-6 rounded-2xl cursor-pointer transition-all duration-300 z-10 w-fit whitespace-nowrap",
                styles[node.type as keyof typeof styles],
                isActive && "scale-105 shadow-2xl ring-2 ring-white/20"
            )}
            style={{ left: node.x, top: node.y }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className={cn(
                "p-3 rounded-xl",
                node.type === 'trigger' ? "bg-purple-500/20 text-purple-300" : "bg-indigo-500/20 text-indigo-300"
            )}>
                <node.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-70 font-semibold">{node.type}</span>
                <span className="font-bold text-lg">{node.label}</span>
            </div>

            {/* Connector Dots */}
            {node.type !== 'ai' && (
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-100 rounded-full border-2 border-purple-500" />
            )}
            {node.type !== 'trigger' && (
                <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-zinc-100 rounded-full border-2 border-indigo-500" />
            )}
        </motion.div>
    );
}

