import React from "react";
import { motion } from "@/lib/motion";
import { Lightbulb, MessageSquareQuote, ArrowRight, ExternalLink } from "lucide-react";

const JOURNEY = [
    { step: "Spot a contrast issue", tool: "Figma", switchPoint: false },
    { step: "Open browser DevTools", tool: "Browser", switchPoint: true },
    { step: "Copy hex values out", tool: "Browser", switchPoint: false },
    { step: "Paste into a contrast checker", tool: "External tool", switchPoint: true },
    { step: "Cross-check the WCAG spec", tool: "Docs", switchPoint: true },
    { step: "Return to Figma", tool: "Figma", switchPoint: false },
    { step: "Apply the fix by hand", tool: "Figma", switchPoint: false },
];

export function TheInsight() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
                        02 — The Insight
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Every Fix Meant Leaving Figma{" "}
                        <span className="text-zinc-600">Seven Times.</span>
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl mb-4">
                        The designers I spoke to already <em>knew</em> WCAG mattered. What they didn&apos;t have was a tool that caught problems <strong className="text-zinc-700">inside the file they were already working in</strong>.
                    </p>
                    <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
                        So I mapped what it actually took to fix one contrast issue, start to finish. Seven steps. Three of them meant leaving Figma — DevTools, a separate contrast checker, then the WCAG spec to be sure. Every switch was a place to give up, and people did.
                    </p>
                </motion.div>

                {/* Quote block */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-4 border-blue-500 mb-16"
                >
                    <MessageSquareQuote className="w-6 h-6 text-blue-400 mb-3" />
                    <blockquote className="text-2xl font-bold text-zinc-800 leading-snug max-w-2xl mb-3">
                        &ldquo;I check contrast in a separate tool, copy values back to Figma, and still miss things — it breaks my flow completely.&rdquo;
                    </blockquote>
                    <p className="text-sm text-zinc-600 font-semibold">— Recurring sentiment from early user conversations</p>
                </motion.div>

                {/* Friction map — visualizes the 7-step / 3-switch journey */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                        <h3 className="text-lg font-bold text-zinc-900">The friction map I drew from those conversations</h3>
                        <p className="text-sm font-semibold text-rose-700">7 steps · 3 tool-switches · every switch a dropout point</p>
                    </div>

                    <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6" aria-label="Old accessibility-fix workflow, seven steps">
                        {JOURNEY.map((item, i) => (
                            <li
                                key={i}
                                className={`relative p-4 rounded-2xl border ${item.switchPoint ? "bg-rose-50 border-rose-200" : "bg-white border-zinc-200"}`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[10px] font-mono font-bold ${item.switchPoint ? "text-rose-700" : "text-zinc-500"}`}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item.switchPoint && (
                                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 uppercase tracking-wider">
                                            <ExternalLink className="w-3 h-3" aria-hidden="true" /> switch
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm font-semibold text-zinc-800 leading-snug">{item.step}</p>
                                <p className="text-xs text-zinc-600 mt-1">{item.tool}</p>
                            </li>
                        ))}
                    </ol>

                    <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-600 text-white">
                        <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                        <p className="text-sm font-semibold leading-snug">
                            With Aulys: <strong>1 step, 0 switches.</strong> Spot, fix, and verify — without leaving the Figma canvas. The fix wasn&apos;t better tooling. It was <em>fewer tools</em>.
                        </p>
                    </div>
                </motion.div>

                {/* Three insight pills */}
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        {
                            label: "Key Decision",
                            title: "Plugin-first, not a standalone app",
                            desc: "Embedding the scanner in Figma eliminated context switching — the #1 reason designers ignore accessibility tools."
                        },
                        {
                            label: "Key Decision",
                            title: "Fix suggestions, not just reports",
                            desc: "Surfacing a problem without a fix creates frustration. Aulys provides AI-powered one-click remediation — but every suggestion is validated against the Polychrom contrast math before it surfaces, so the fix is provably WCAG-compliant, not an LLM guess."
                        },
                        {
                            label: "Key Trade-off",
                            title: "Figma only, not multi-tool",
                            desc: "I deliberately scoped to Figma for v1 to achieve depth over breadth — full WCAG 2.2 coverage for one platform beats shallow coverage across many."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-[1.5rem] bg-white border border-zinc-200 hover:border-blue-200 hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Lightbulb className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{item.label}</span>
                            </div>
                            <h3 className="text-base font-bold text-zinc-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
