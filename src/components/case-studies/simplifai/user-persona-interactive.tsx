"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { AlertCircle, Keyboard, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";

type PainPoint = {
    id: string;
    icon: React.ElementType;
    label: string;
    description: string;
    solution: string;
    impact: string;
};

const painPoints: PainPoint[] = [
    {
        id: "manual",
        icon: Keyboard,
        label: "Manual Entry",
        description: "Data entry errors causing significant rework.",
        solution: "Automated Data Capture",
        impact: "Zero manual entry errors"
    },
    {
        id: "broken",
        icon: AlertCircle,
        label: "Broken Flows",
        description: "Fragmented workflows across 5+ different tools.",
        solution: "Unified Workflow Engine",
        impact: "Single pane of glass"
    },
    {
        id: "visibility",
        icon: EyeOff,
        label: "No Visibility",
        description: "Dependent on engineering for every small change.",
        solution: "No-Code Builder",
        impact: "Empowered Ops team"
    }
];

export function UserPersonaInteractive() {
    const [activePoint, setActivePoint] = useState<string>("manual");

    const activeData = painPoints.find(p => p.id === activePoint);

    return (
        <section className="py-20 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Narrative Column */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4">The User</h2>
                            <p className="text-zinc-600 text-lg">
                                Sarah, an Operations Lead, was drowning in manual tasks. We mapped her frustrations to specific product capabilities.
                            </p>
                        </div>

                        {/* Interactive Pain Points */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">
                                Select a Pain Point
                            </h3>
                            <div className="flex flex-col gap-3">
                                {painPoints.map((point) => (
                                    <button
                                        key={point.id}
                                        onClick={() => setActivePoint(point.id)}
                                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left ${activePoint === point.id
                                            ? "bg-purple-50 border-purple-300 shadow-sm"
                                            : "bg-white/50 border-zinc-200 hover:border-zinc-300 hover:bg-white"
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${activePoint === point.id ? "bg-purple-500 text-white" : "bg-zinc-100 text-zinc-600"
                                            }`}>
                                            <point.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className={`font-semibold ${activePoint === point.id ? "text-zinc-900" : "text-zinc-700"
                                                }`}>
                                                {point.label}
                                            </h4>
                                        </div>
                                        {activePoint === point.id && (
                                            <motion.div layoutId="arrow" className="ml-auto">
                                                <ArrowRight className="w-5 h-5 text-purple-500" />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Solution Reveal Column */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {activeData && (
                                <motion.div
                                    key={activeData.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_4px_24px_rgb(0,0,0,0.06)] p-8"
                                >
                                    {/* Pain Context */}
                                    <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200">
                                        <div className="flex items-center gap-2 mb-2 text-red-700 text-sm font-semibold uppercase tracking-wider">
                                            <AlertCircle className="w-4 h-4" />
                                            The Problem
                                        </div>
                                        <p className="text-red-700 text-lg italic font-medium">
                                            "{activeData.description}"
                                        </p>
                                    </div>

                                    {/* Connector */}
                                    <div className="flex justify-center mb-8">
                                        <div className="w-[1px] h-12 bg-gradient-to-b from-red-400/50 to-purple-400/50" />
                                    </div>

                                    {/* Solution */}
                                    <div className="text-center">
                                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-purple-50 border border-purple-200 mb-4">
                                            <activeData.icon className="w-8 h-8 text-purple-500" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-zinc-900 mb-3">
                                            {activeData.solution}
                                        </h4>
                                        <div className="flex items-center justify-center gap-2 text-emerald-700">
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span className="font-semibold">{activeData.impact}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
