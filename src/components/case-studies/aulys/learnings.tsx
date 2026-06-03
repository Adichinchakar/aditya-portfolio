import React from "react";
import { motion } from "@/lib/motion";
import { BookOpen, Wrench, Compass } from "lucide-react";

export function Learnings() {
    return (
        <section className="py-24 px-6 bg-white relative">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">
                        06 — Reflection
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        What I&apos;d Do Differently
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Building a 0→1 product solo — design, engineering, and product — taught me things no spec document ever could.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: BookOpen,
                            color: "text-blue-500",
                            bg: "bg-blue-500/10",
                            label: "Design Constraint",
                            heading: "Figma plugin API shapes every interaction decision",
                            body: "The plugin runtime has no background threads — every scan must complete synchronously within a 60fps canvas budget. This ruled out streaming results, forced a batch-scan model, and made the progressive reveal of violations (grouped, not streamed) a technical necessity, not just a UX preference."
                        },
                        {
                            icon: Wrench,
                            color: "text-amber-500",
                            bg: "bg-amber-500/10",
                            label: "What didn't work",
                            heading: "V1 had drag-to-reorder violations — too complex",
                            body: "The first violations list let users drag-and-drop to reprioritize issues. In beta testing with junior designers (primary target users), this interaction pattern caused confusion — they expected the list to be sorted by severity, not be a task manager. Removed it in v2 and defaulted to severity-ordered, read-only grouping. Fix rate improved."
                        },
                        {
                            icon: Compass,
                            color: "text-purple-500",
                            bg: "bg-purple-500/10",
                            label: "Next time",
                            heading: "Design decisions need to be documented as they happen",
                            body: "When context-switching between design and engineering, I lost the rationale for several key UX decisions. I now maintain a lightweight decision log alongside the codebase."
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
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${item.bg}`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-widest ${item.color} mb-2 block`}>{item.label}</span>
                            <h3 className="text-base font-bold text-zinc-900 mb-3 leading-snug">{item.heading}</h3>
                            <p className="text-zinc-700 text-sm leading-relaxed">{item.body}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[2rem] bg-zinc-900 text-white"
                >
                    <p className="text-xl font-bold max-w-2xl leading-relaxed mb-4">
                        Aulys is still evolving. The CI/CD platform is in active development — and with 30 beta designers giving live feedback, it&apos;s going in the right direction.
                    </p>
                    <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                        What Aulys proved: a solo designer-founder, using AI tools for execution, can ship a real accessibility product with real users — in less time than most teams take to write a PRD. The constraint wasn&apos;t capability. It was knowing exactly what problem to solve and refusing to scope-creep past it.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
