"use client";

import React from "react";
import { motion } from "@/lib/motion";

/* ───────────────────────────────────────────────────────────
   Illustrative reconstruction of the shipped AI confidence
   signal (Round 3 in the iteration section). Deliberately NOT a
   red/amber/green traffic light — Round 2 testing showed "green"
   triggered rubber-stamping, so the final signal reads as
   guidance, not verdict: Verified leans on the system accent,
   Suggested is neutral, Uncertain carries a restrained caution.
   No client content — every cell here is invented for the demo.
   ─────────────────────────────────────────────────────────── */

type Tier = "verified" | "suggested" | "uncertain";

const CheckIcon = (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const DotIcon = (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
    </svg>
);

const AlertIcon = (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

const tierStyle: Record<Tier, { label: string; chip: string; icon: React.ReactNode }> = {
    verified: { label: "Verified", chip: "bg-indigo-50 text-indigo-700 border-indigo-200", icon: CheckIcon },
    suggested: { label: "Suggested", chip: "bg-slate-100 text-slate-700 border-slate-300", icon: DotIcon },
    uncertain: { label: "Uncertain", chip: "bg-amber-50 text-amber-800 border-amber-300", icon: AlertIcon },
};

function TierChip({ tier }: { tier: Tier }) {
    const s = tierStyle[tier];
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${s.chip}`}>
            {s.icon}
            {s.label}
        </span>
    );
}

/* Invented rubric content — illustrative only. */
const objective = "Students analyse how an author's word choice shapes tone in a persuasive text.";

const criteria: { name: string; cells: { tier: Tier; text: string }[] }[] = [
    {
        name: "Word-choice analysis",
        cells: [
            { tier: "verified", text: "Identifies connotative words and explains their effect on tone with text support." },
            { tier: "suggested", text: "Notes word choices but explains the effect on tone only partially." },
            { tier: "uncertain", text: "Lists words without connecting them to tone." },
        ],
    },
    {
        name: "Use of evidence",
        cells: [
            { tier: "verified", text: "Cites specific passages and ties each to the claim about tone." },
            { tier: "verified", text: "Cites passages; most directly support the claim." },
            { tier: "suggested", text: "Cites text, but the link to the claim is loose." },
        ],
    },
];

/* ─── App shell — neutral product chrome, no client domain ─── */
function RubricStudio() {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-300 shadow-2xl bg-white flex flex-col font-sans text-sm w-full">
            {/* Title bar */}
            <div className="h-11 bg-[#f1f5f9] border-b border-slate-300 flex items-center px-4 gap-3 shrink-0">
                <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                    <span className="w-5 h-5 rounded bg-indigo-600 text-white text-[10px] font-black flex items-center justify-center">AI</span>
                    <span className="text-[13px] font-bold tracking-tight">Rubric Generator</span>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-semibold text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                    Generated in 4.2s
                </span>
            </div>

            {/* Objective input (filled, schematic) */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200 bg-slate-50/60">
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-widest mb-2">Learning objective</label>
                <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-[13px] text-slate-800 leading-snug">
                        {objective}
                    </div>
                    <span className="px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-[13px] font-bold shadow-sm whitespace-nowrap">Generate</span>
                </div>
            </div>

            {/* Rubric grid */}
            <div className="p-4 sm:p-6 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                    <thead>
                        <tr className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                            <th className="px-3 py-3 w-40">Criterion</th>
                            <th className="px-3 py-3">Emerging</th>
                            <th className="px-3 py-3">Proficient</th>
                            <th className="px-3 py-3">Advanced</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 align-top">
                        {criteria.map((row) => (
                            <tr key={row.name}>
                                <td className="px-3 py-4">
                                    <span className="text-[13px] font-bold text-slate-900">{row.name}</span>
                                </td>
                                {row.cells.map((cell, i) => (
                                    <td key={i} className="px-3 py-4">
                                        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                                            <div className="mb-2"><TierChip tier={cell.tier} /></div>
                                            <p className="text-[12px] text-slate-700 leading-relaxed">{cell.text}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* Progressive-reveal row — skeleton still populating (latency UX) */}
                        <tr>
                            <td className="px-3 py-4">
                                <span className="text-[13px] font-bold text-slate-900">Counter-argument</span>
                                <span className="block mt-1 text-[10px] font-semibold text-indigo-600 uppercase tracking-wide">Generating…</span>
                            </td>
                            {[0, 1, 2].map((i) => (
                                <td key={i} className="px-3 py-4">
                                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                        <div className="h-3 w-16 rounded bg-slate-200 mb-2 motion-safe:animate-pulse" aria-hidden="true" />
                                        <div className="h-2 w-full rounded bg-slate-200 mb-1.5 motion-safe:animate-pulse" aria-hidden="true" />
                                        <div className="h-2 w-3/4 rounded bg-slate-200 motion-safe:animate-pulse" aria-hidden="true" />
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Legend */}
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Confidence signal</span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-slate-700">
                    <span className="inline-flex items-center gap-2"><TierChip tier="verified" /> high-evidence match — approve fast</span>
                    <span className="inline-flex items-center gap-2"><TierChip tier="suggested" /> usable draft — read before accepting</span>
                    <span className="inline-flex items-center gap-2"><TierChip tier="uncertain" /> review the wording</span>
                </div>
            </div>
        </div>
    );
}

/* ─── Section ───────────────────────────────────────────────── */
export function InfosysUI() {
    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }} aria-hidden="true" />

            <div className="container mx-auto max-w-[1100px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                        04f — The Designed Artifact
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
                        The confidence signal, in context
                    </h2>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        The shipped 3-tier signal (Round 3) on a generated rubric. Note what it is <em>not</em>: a red/amber/green
                        traffic light. Testing showed &ldquo;green&rdquo; made teachers rubber-stamp, so the final signal anchors on what to
                        <em> do</em> — approve, read, or review — rather than a percentage or a verdict colour.
                    </p>
                </motion.div>

                {/* Honesty label */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 inline-flex items-start gap-2 rounded-lg bg-white border border-slate-300 px-3.5 py-2 text-[12px] text-slate-700 leading-relaxed shadow-sm"
                >
                    <span className="font-bold text-slate-900">Illustrative reconstruction</span>
                    <span className="text-slate-600">— not a client screen. Rebuilt to show the interaction pattern; all rubric content is invented for this demo.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <RubricStudio />
                </motion.div>
            </div>
        </section>
    );
}
