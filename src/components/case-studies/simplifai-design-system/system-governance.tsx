"use client";

import { motion } from "framer-motion";
import { Users, Clock, LayoutGrid, GitMerge, Check, Zap, Award, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
    {
        icon: TrendingUp,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        value: "+20%",
        label: "Client satisfaction",
        sub: "Through visual consistency alone across 50+ product screens.",
    },
    {
        icon: Clock,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200",
        value: "3wks → 5d",
        label: "Review cycle time",
        sub: "Standardized tokens eliminated redundant design debates.",
    },
    {
        icon: LayoutGrid,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        value: "0 → 120+",
        label: "Reusable components",
        sub: "Built from scratch to cover every AI-native surface.",
    },
    {
        icon: Users,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200",
        value: "5 designers",
        label: "Team led & mentored",
        sub: "Cross-functional alignment from product to engineering.",
    },
];

const workflowSteps = [
    { label: "Figma token update", detail: "Designer edits --color.brand" },
    { label: "Style Dictionary", detail: "Transforms to CSS, JS, iOS, Android" },
    { label: "Auto-generated PR", detail: "Pushed to github.com/simplifai/ui" },
    { label: "CI Review", detail: "Automated visual regression tests pass" },
    { label: "Production merge", detail: "All 120+ components updated instantly" },
];

function MetricCard({ icon: Icon, color, bg, border, value, label, sub, delay }: typeof metrics[0] & { delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={cn("relative p-6 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow group", border)}
        >
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4 border", bg, border)}>
                <Icon className={cn("w-5 h-5", color)} />
            </div>
            <div className={cn("text-3xl font-black tracking-tighter mb-1", color)}>{value}</div>
            <div className="text-sm font-bold text-zinc-800 mb-2">{label}</div>
            <p className="text-xs text-zinc-500 leading-relaxed">{sub}</p>
            {/* Hover accent bar */}
            <div className={cn("absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl group-hover:opacity-100 opacity-0 transition-opacity", bg.replace("bg-", "bg-").replace("50", "400"))} />
        </motion.div>
    );
}

export function SystemGovernance() {
    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-100">
            <div className="container mx-auto max-w-6xl space-y-20">

                {/* Header */}
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Award className="w-3.5 h-3.5" />
                        Governance & Impact
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-5"
                    >
                        A system is only as good<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                            as its adoption.
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-xl font-medium"
                    >
                        I led both the design and the cultural change — introducing governance processes that turned sporadic UI effort into a disciplined, high-velocity product engine.
                    </motion.p>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {metrics.map((m, i) => (
                        <MetricCard key={m.label} {...m} delay={i * 0.07} />
                    ))}
                </div>

                {/* Figma → React sync workflow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-zinc-200 rounded-3xl p-10"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-2.5 bg-orange-50 rounded-xl border border-orange-200">
                            <GitMerge className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-zinc-900">The "Sync" Workflow</h3>
                            <p className="text-sm text-zinc-400 mt-0.5">Bidirectional Figma ↔ React handoff, automated end-to-end</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
                        {/* Steps */}
                        <div className="space-y-3">
                            {workflowSteps.map((step, i) => (
                                <motion.div
                                    key={step.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-zinc-800">{step.label}</div>
                                        <div className="text-xs text-zinc-400 mt-0.5">{step.detail}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="hidden md:flex flex-col items-center gap-1 self-stretch justify-center">
                            <div className="w-px flex-1 bg-zinc-100" />
                            <Zap className="w-4 h-4 text-orange-400 my-2" />
                            <div className="w-px flex-1 bg-zinc-100" />
                        </div>

                        {/* Logos + animation */}
                        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 flex items-center justify-between gap-4">
                            {/* Figma */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 bg-[#1E1E1E] rounded-2xl flex items-center justify-center shadow-md">
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 24C10.21 24 12 22.21 12 20V16H8C5.79 16 4 17.79 4 20C4 22.21 5.79 24 8 24Z" fill="#0ACF83" />
                                        <path d="M4 12C4 9.79 5.79 8 8 8H12V16H8C5.79 16 4 14.21 4 12Z" fill="#A259FF" />
                                        <path d="M4 4C4 1.79 5.79 0 8 0H12V8H8C5.79 8 4 6.21 4 4Z" fill="#F24E1E" />
                                        <path d="M12 0H16C18.21 0 20 1.79 20 4C20 6.21 18.21 8 16 8H12V0Z" fill="#FF7262" />
                                        <path d="M20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8C18.21 8 20 9.79 20 12Z" fill="#1ABCFE" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-zinc-500">Figma</span>
                            </div>

                            {/* Animated wire */}
                            <div className="flex-1 relative h-1 bg-zinc-100 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"
                                />
                            </div>

                            {/* React */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 bg-[#1E2A3A] rounded-2xl flex items-center justify-center shadow-md">
                                    <svg className="w-7 h-7 text-[#61DAFB]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C10.5 2 9.2 3.2 8.5 5.1c-.8-.2-1.5-.3-2.3-.3C4.2 4.8 2 6.2 2 9c0 1.9 1.1 3.5 2.8 4.5C4 14.7 3.8 16 3.8 17.2 3.8 20 5.6 22 8.2 22c1.2 0 2.4-.5 3.4-1.4.9.3 1.8.4 2.6.4 2.3 0 4.8-1.2 4.8-4.5 0-1.2-.3-2.3-.7-3.3C19.8 12 21 10.5 21 9c0-2.8-2.2-4.2-4.2-4.2-.5 0-1 .1-1.5.2C14.6 3.2 13.4 2 12 2Zm0 2c.8 0 1.5.8 2 2.2C13.4 6 12.7 6 12 6c-.8 0-1.5 0-2.1.1.5-1.4 1.3-2.1 2.1-2.1ZM7.4 7.8C7.9 7.7 8.5 7.7 9 7.6c.6 0 1.3-.1 2-.1.6 0 1.3 0 1.9.1.6 0 1.2.1 1.7.2.4.1.7.2 1 .3 1.1.4 1.7 1 1.7 2 0 1-.6 1.7-1.7 2.1-.3.1-.6.2-1 .3-.5.1-1.1.1-1.7.2H12c-.6 0-1.2 0-1.9-.1-.6 0-1.2-.1-1.7-.2-.4-.1-.7-.2-1-.3C6.3 11.7 5.8 11 5.8 10s.5-1.7 1.6-2.2ZM5.8 15c0-.8.1-1.6.3-2.4.5.1 1 .2 1.5.3.6.1 1.2.2 1.9.3.7 0 1.3.1 2 .1h1.1c.6 0 1.1 0 1.7-.1.5 0 1-.1 1.5-.3.4-.1.7-.2 1.1-.3.2.7.3 1.4.3 2.1 0 2-.9 2.5-2.2 2.5-.6 0-1.3-.2-1.8-.4.1-.3.2-.6.2-.9 0-1.4-1.1-2.5-2.5-2.5S9.8 15.1 9.8 16.5c0 .3.1.6.2.9-.5.2-1 .4-1.6.4-1.7 0-2.6-.7-2.6-2.8Z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-zinc-500">React</span>
                            </div>
                        </div>
                    </div>

                    {/* Adoption stats */}
                    <div className="mt-8 pt-8 border-t border-zinc-100 grid grid-cols-3 gap-6">
                        {[
                            { label: "Time to adopt", value: "< 1 sprint", desc: "For new devs to be productive" },
                            { label: "Visual regression", value: "0 regressions", desc: "Across 6 months post-launch" },
                            { label: "Dev velocity", value: "+42%", desc: "Faster UI build time — measured vs. pre-system sprint velocity (avg over 4 sprints)" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            >
                                <div className="text-xl font-black text-zinc-900">{stat.value}</div>
                                <div className="text-xs font-bold text-zinc-500 mt-1">{stat.label}</div>
                                <div className="text-xs text-zinc-400 mt-0.5">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
