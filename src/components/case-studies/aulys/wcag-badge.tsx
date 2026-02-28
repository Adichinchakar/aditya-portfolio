"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";

const WCAG_CRITERIA = [
    { id: "1.4.3", label: "Contrast (Minimum)", level: "AA", status: "pass" },
    { id: "1.4.4", label: "Resize Text", level: "AA", status: "pass" },
    { id: "2.1.1", label: "Keyboard Accessible", level: "A", status: "pass" },
    { id: "2.4.1", label: "Bypass Blocks (skip link)", level: "A", status: "pass" },
    { id: "2.4.3", label: "Focus Order", level: "A", status: "pass" },
    { id: "2.4.7", label: "Focus Visible", level: "AA", status: "pass" },
    { id: "2.5.3", label: "Label in Name", level: "A", status: "pass" },
    { id: "3.1.1", label: "Language of Page", level: "A", status: "pass" },
    { id: "4.1.2", label: "Name, Role, Value", level: "A", status: "pass" },
];

export function WcagBadge() {
    return (
        <section className="py-16 px-6 bg-zinc-900 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left: Badge + Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 mb-6">
                            <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                            <div>
                                <p className="text-emerald-200 font-black text-sm tracking-wide uppercase">WCAG 2.1 AA Compliant</p>
                                <p className="text-emerald-300 text-xs font-medium">Verified via axe-core automated testing</p>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                            We build accessible tools.{" "}
                            <span className="text-emerald-400">This portfolio proves it.</span>
                        </h2>

                        <p className="text-zinc-300 leading-relaxed mb-6">
                            Aulys is an accessibility tool — so this case study page itself meets WCAG 2.1 AA. Every heading, contrast ratio, focus indicator, and landmark on this page has been audited with axe-core and manually verified.
                        </p>

                        <a
                            href="https://www.w3.org/WAI/WCAG21/quickref/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-emerald-400 font-semibold hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-md"
                            aria-label="WCAG 2.1 Guidelines reference (opens in new tab)"
                        >
                            WCAG 2.1 Guidelines
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                    </motion.div>

                    {/* Right: Criteria checklist */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-800 rounded-[1.5rem] border border-zinc-700 p-6"
                        role="list"
                        aria-label="WCAG 2.1 AA criteria verified on this page"
                    >
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-[0.15em] mb-4">Verified Criteria</p>
                        <div className="space-y-2">
                            {WCAG_CRITERIA.map((criterion, i) => (
                                <motion.div
                                    key={criterion.id}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center justify-between py-2 border-b border-zinc-700 last:border-0"
                                    role="listitem"
                                >
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                                        <div>
                                            <span className="text-sm text-white font-medium">{criterion.label}</span>
                                            <span className="text-zinc-400 text-xs ml-1.5">{criterion.id}</span>
                                        </div>
                                    </div>
                                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${criterion.level === "AA"
                                            ? "bg-blue-500/20 text-blue-200 border border-blue-500/30"
                                            : "bg-zinc-700 text-zinc-300"
                                        }`}>
                                        {criterion.level}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-zinc-700 flex items-center justify-between">
                            <span className="text-xs text-zinc-400 font-medium">
                                Tested with axe-core + Playwright
                            </span>
                            <span className="text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">
                                ✓ 0 violations
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
