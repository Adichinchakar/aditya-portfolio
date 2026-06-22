import React from "react";
import { motion } from "@/lib/motion";
import { AlertTriangle, AlertCircle, EyeOff } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 px-6 bg-white relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    {/* Chapter label */}
                    <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
                        01 — Problem
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        The Accessibility Crisis
                    </h2>
                    {/* Stat callout */}
                    <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-100 border border-zinc-200 mb-6">
                        <span className="text-2xl font-black text-zinc-900">96.3%</span>
                        <span className="text-sm text-zinc-600 font-medium leading-snug max-w-xs">
                            of the top 1 million websites fail basic WCAG compliance — <span className="font-bold">WebAIM 2024</span>
                        </span>
                    </div>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl mb-6">
                        Designers want to build inclusively. But for teams working fast in Figma, WCAG compliance sits at the end of the pipeline — expensive, error-prone, and always late.
                    </p>
                    {/* Business stakes */}
                    <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200">
                            <span className="text-lg font-black text-rose-700">$250K+</span>
                            <span className="text-xs text-rose-700 font-semibold leading-snug">avg. ADA lawsuit settlement<br />per incident</span>
                        </div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200">
                            <span className="text-lg font-black text-amber-700">6×</span>
                            <span className="text-xs text-amber-700 font-semibold leading-snug">costlier to fix post-launch<br />vs. at design stage</span>
                        </div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200">
                            <span className="text-lg font-black text-blue-700">4,600+</span>
                            <span className="text-xs text-blue-600 font-semibold leading-snug">ADA digital accessibility<br />lawsuits filed in 2023</span>
                        </div>
                    </div>
                    <p className="text-base text-zinc-600 leading-relaxed mt-6 max-w-2xl">
                        In the UAE, Cabinet Decision No. 11/2023 mandates digital accessibility compliance for government and enterprise platforms — making Aulys directly relevant to teams operating in or entering the UAE market.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: AlertTriangle,
                            title: "Human Error at Scale",
                            desc: "Checking contrast ratios, touch targets, and focus indicators manually across hundreds of screens leads to inevitable, costly oversights.",
                            color: "text-amber-500",
                            bg: "bg-amber-500/10"
                        },
                        {
                            icon: AlertCircle,
                            title: "No Real-Time Feedback",
                            desc: "Designers have zero visibility into compliance issues while designing. Non-compliant handoffs reach engineering teams with no warning.",
                            color: "text-rose-400",
                            bg: "bg-rose-500/8"
                        },
                        {
                            icon: EyeOff,
                            title: "Reactive, Not Preventive",
                            desc: "Accessibility is tested post-deployment. Finding issues after launch is 6× more expensive than catching them at the design stage.",
                            color: "text-purple-500",
                            bg: "bg-purple-500/10"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors"
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.bg}`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
