import React from "react";
import { motion } from "@/lib/motion";
import { Lightbulb, MessageSquareQuote } from "lucide-react";

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
                    <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">
                        02 — The Insight
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        The Real Blocker Wasn&apos;t Awareness.{" "}
                        <span className="text-zinc-600">It Was Friction.</span>
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl mb-4">
                        Designers I spoke to already <em>knew</em> WCAG mattered. What they lacked was a tool that surfaced problems <strong className="text-zinc-700">inside their existing workflow</strong> — not as an afterthought.
                    </p>
                    <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
                        I mapped the journey from "designer spots accessibility issue" to "issue gets fixed." There were <strong>7 steps and 3 tool-switches</strong> — browser DevTools, external contrast checker, WCAG documentation, back to Figma. Every switch was a dropout point. The fix wasn't better tooling. It was <em>fewer tools</em>.
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
                            desc: "Surfacing a problem without a fix creates frustration. Aulys provides AI-powered one-click remediation so designers can act immediately."
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
                                <Lightbulb className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{item.label}</span>
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
