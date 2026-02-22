"use client";

import { motion } from "framer-motion";
import { Users, Clock, Zap, GitMerge, ArrowRight, LayoutGrid, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SystemGovernance() {
    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="max-w-3xl space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
                        System Governance & Impact
                    </h2>
                    <p className="text-lg text-zinc-600">
                        A design system is only as good as its adoption. I led the governance strategy that transformed our sporadic UI efforts into a unified, high-velocity product engine.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

                    {/* Card 1: Leadership (Large) */}
                    <BentoCard
                        className="lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/20"
                        title="Design Leadership"
                        icon={<Users className="w-6 h-6 text-purple-400" />}
                        value="Team of 5"
                        label="Designers Led & Mentored"
                    >
                        <div className="mt-4 text-zinc-600 leading-relaxed">
                            Orchestrated a unified system strategy across the organization, directly resulting in a <span className="text-purple-300 font-semibold">20% increase in client satisfaction</span> scores by visual consistency alone.
                        </div>
                    </BentoCard>

                    {/* Card 2: Velocity */}
                    <BentoCard
                        className="bg-white/30"
                        title="Velocity"
                        icon={<Clock className="w-6 h-6 text-blue-400" />}
                        value="5 Days"
                        label="Avg. Review Cycle"
                    >
                        <div className="mt-4 text-zinc-500 text-sm">
                            Down from <span className="text-zinc-700 line-through decoration-red-500/50">3 Weeks</span>. Standardized tokens eliminated redundant debates.
                        </div>
                        <div className="mt-6 h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "100%" }}
                                whileInView={{ width: "20%" }}
                                transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                                className="h-full bg-blue-500"
                            />
                        </div>
                    </BentoCard>

                    {/* Card 3: Scalability */}
                    <BentoCard
                        className="bg-white/30"
                        title="Scalability"
                        icon={<LayoutGrid className="w-6 h-6 text-emerald-400" />}
                        value="0 → 1"
                        label="System Architecture"
                    >
                        <div className="mt-4 text-zinc-600 text-sm">
                            Built the in-house system from scratch, now serving as the backbone for <span className="text-emerald-300">all AI/ML interfaces</span>.
                        </div>
                    </BentoCard>

                    {/* Card 4: Automated Handoff Narrative (Large) */}
                    <div className="lg:col-span-2 bg-white/50 border border-zinc-200 rounded-3xl p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-3 text-zinc-900 font-semibold text-lg">
                                <span className="p-2 bg-orange-500/10 rounded-lg text-orange-400 border border-orange-500/20">
                                    <GitMerge className="w-5 h-5" />
                                </span>
                                The "Sync" Workflow
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <p className="text-zinc-600 leading-relaxed">
                                        I established an automated bidirectional sync between Figma and our React repo. Token updates in design pushed PRs to code; component prop changes in code flagged specific Figma variants for update.
                                    </p>
                                    <ul className="space-y-2 text-sm text-zinc-500">
                                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-orange-400" /> Style Dictionary Integration</li>
                                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-orange-400" /> Automated Changelogs</li>
                                    </ul>
                                </div>

                                {/* Visual Diagram Mock */}
                                <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 flex items-center justify-between relative">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-[#F24E1E]/20 rounded-xl flex items-center justify-center border border-[#F24E1E]/30">
                                            <svg className="w-6 h-6 text-[#F24E1E]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 7.5L3.75 3.75L7.5 0L11.25 3.75L7.5 7.5ZM7.5 7.5L3.75 11.25L0 7.5L3.75 3.75L7.5 7.5ZM7.5 7.5L11.25 11.25L15 7.5L11.25 3.75L7.5 7.5ZM7.5 7.5L11.25 11.25L7.5 15L3.75 11.25L7.5 7.5Z" fill="currentColor" /></svg>
                                        </div>
                                        <span className="text-xs text-zinc-500 font-mono">Figma</span>
                                    </div>

                                    {/* Animated Connection */}
                                    <div className="flex-1 h-[1px] bg-zinc-100 mx-4 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: [-20, 100] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-0 bottom-0 w-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-12 h-12 bg-[#61DAFB]/20 rounded-xl flex items-center justify-center border border-[#61DAFB]/30">
                                            <svg className="w-6 h-6 text-[#61DAFB]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 8C14 10.2091 12.2091 12 10 12C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8Z" fill="currentColor" /><path d="M10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16Z" fill="currentColor" fillOpacity="0.2" /></svg>
                                        </div>
                                        <span className="text-xs text-zinc-500 font-mono">React</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BentoCard({ children, title, icon, value, label, className }: any) {
    return (
        <Card className={cn(
            "p-8 flex flex-col justify-between border-zinc-200 transition-all duration-500 hover:border-zinc-700 hover:bg-white/50 group",
            className
        )}>
            <div className="space-y-6">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3 text-zinc-800 font-medium">
                        <span className="p-2 bg-zinc-50 rounded-lg border border-zinc-200 group-hover:border-zinc-200 transition-colors">
                            {icon}
                        </span>
                        {title}
                    </div>
                </div>

                <div>
                    <div className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                        {value}
                    </div>
                    <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider mt-2">
                        {label}
                    </div>
                </div>
            </div>

            <div className="mt-6 border-t border-zinc-200/50 pt-6">
                {children}
            </div>
        </Card>
    );
}

function Check({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
