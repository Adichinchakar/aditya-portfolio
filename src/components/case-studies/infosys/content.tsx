"use client";

import React from "react";
import { Hero } from "@/components/case-studies/infosys/hero";
import { CaseStudyTldr } from "@/components/case-studies/case-study-tldr";
import { motion } from "@/lib/motion";
import { Linkedin, Mail } from "lucide-react";
import { InfosysUI } from "@/components/case-studies/infosys/infosys-ui";

const outcomes = [
    {
        value: "~70%",
        label: "Faster assessment workflows",
        desc: "AI rubric engine vs. a manual baseline, measured in a pre/post time-on-task study with participating teachers.",
    },
    {
        value: "Acceptance roughly doubled",
        label: "Teacher trust in AI output",
        desc: "Reframing the confidence signal from raw percentages to a 3-tier signal (Verified / Suggested / Uncertain) sharply lifted acceptance in usability testing.",
    },
    {
        value: "No spinner",
        label: "Eliminated AI-generation drop-off",
        desc: "Progressive reveal — skeleton rubric appears instantly, cells populate sequentially — replaced the spinner that caused users to abandon during the 3–8s generation. Removed the dead-wait rather than measuring it.",
    },
    {
        value: "3",
        label: "AI tools shipped to production",
        desc: "Including GenAI rubric generators, adaptive recommendation engine UX, and feedback tools.",
    },
    {
        value: "0",
        label: "Design system forks across 5 teams",
        desc: "Token layer with 4 semantic contexts (learner, educator, admin, assessment) — one system, zero hard forks.",
    },
];

const contributions = [
    "Reframed the AI confidence signal from raw percentages to a 3-tier Verified / Suggested / Uncertain system — after testing showed percentages drove over-trust and dismissal in equal measure",
    "Designed a progressive-reveal pattern (skeleton → sequential cell population) to kill drop-off during the 3–8s rubric generation",
    "Built a token layer with 4 semantic contexts (learner, educator, admin, assessment) so 5 product teams shared one system with zero hard forks",
    "Ran 3 rounds of teacher usability testing on the confidence signal — each round invalidated a prior assumption before it shipped",
    "Resolved four conflicting persona mental models (employee, manager, HR, admin) into one IA on the talent-platform engagement",
    "Set WCAG 2.2 AA as the baseline for every AI-facing surface, including the generation and confidence states",
];

export default function InfosysPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-indigo-500/30">
            <Hero />

            {/* The short version — recruiter scan card */}
            <CaseStudyTldr
                variant="dark"
                hook="An AI grade a teacher doesn't trust is worse than no grade at all. Earning that trust — not building the model — was the real design problem."
                stats={[
                    { value: "~70%", label: "faster assessment workflows" },
                    { value: "2×", label: "teacher trust in AI output" },
                    { value: "0 forks", label: "one system across 5 teams" },
                ]}
                contribution="design lead for the assessment workbench — trust patterns, information architecture, and the shared component library across 5 product teams."
                role="Senior Product Designer"
                timeline="Infosys × Imagine Learning"
                readTime="10 min read"
                accentClass="text-indigo-400"
                spotlight="rgba(99, 102, 241, 0.14)"
            />

            {/* Key Outcomes */}
            <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            01 — Outcomes
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            What We Shipped
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                            In an early test, a teacher saw a rubric the model marked &ldquo;68% confident&rdquo; and approved it for her class untouched. She read the number as a promise. That one moment told us the work wasn&apos;t the AI — it was designing the signals around it so teachers knew when to lean in and when to push back.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {outcomes.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[2rem] bg-zinc-900 border border-white/10 hover:border-indigo-500/30 transition-colors"
                            >
                                <div className="text-4xl font-black text-indigo-400 mb-3 tracking-tighter">{item.value}</div>
                                <h3 className="text-base font-bold text-white mb-2">{item.label}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-xs text-zinc-400 mt-6">
                        * Figures are directional — drawn from in-engagement usability and time-on-task testing with participating teachers, not a published study. Rounds were small (single- to low-double-digit participants); I cite them to show direction, not statistical proof.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 rounded-2xl bg-indigo-500/8 border border-indigo-500/20"
                    >
                        <p className="text-sm text-indigo-300 leading-relaxed">
                            <span className="font-bold text-indigo-200">Certificate of Recognition</span> — from the client&rsquo;s executive sponsor, for AI tool delivery across the product suite.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What I Did */}
            <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            02 — Contributions
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            What I Did
                        </h2>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {contributions.map((item, i) => (
                            <li key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-950/50 border border-white/5">
                                <span className="text-indigo-400 font-bold text-sm shrink-0 mt-0.5">0{i + 1}</span>
                                <p className="text-zinc-300 text-sm leading-relaxed">{item}</p>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </section>

            {/* TalentBridge Section */}
            <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.08),transparent_60%)]" aria-hidden="true" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            02.5 — Second Engagement
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Enterprise Talent Platform: Making Skills Visible
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                            A large services organisation rarely has a talent shortage — it has a talent <em>visibility</em> problem. Project managers can&apos;t find people with the right skills because those people are invisible: siloed inside delivery units, tagged by role title, not actual capability.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[2rem] bg-zinc-950 border border-white/8"
                        >
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">The Problem</p>
                            <p className="text-base text-zinc-300 leading-relaxed mb-4">
                                A project manager in Bangalore needs someone with React + financial domain experience available in 3 weeks. That person exists in Mumbai. There is no system that surfaces them. The PM posts the role externally instead.
                            </p>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                This happens thousands of times a year — not from lack of talent, but from a design problem: the internal talent system was built for HR record-keeping, not for managers who think in terms of skills, availability, and project fit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-[2rem] bg-zinc-950 border border-white/8"
                        >
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">The Design Challenge</p>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-4">Four personas. One system. Completely different mental models:</p>
                            <div className="space-y-3">
                                {[
                                    { role: "Employee", need: "Career visibility — I want the right projects to find me" },
                                    { role: "Manager", need: "Skill search — I need to staff a project in 72 hours" },
                                    { role: "HR", need: "Compliance + bench visibility — who is unallocated right now?" },
                                    { role: "Admin", need: "Data integrity — are skill tags accurate and auditable?" },
                                ].map((p, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="text-xs font-bold text-indigo-400 shrink-0 pt-0.5 w-16">{p.role}</span>
                                        <p className="text-xs text-zinc-400 leading-relaxed">{p.need}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Hard Problems */}
            <section className="py-24 px-6 bg-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.06),transparent_60%)]" aria-hidden="true" />
                <div className="container mx-auto max-w-5xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            03 — Design Challenges
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            The Hard Problems
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                            Three design tensions from the GenAI EdTech engagement.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                challenge: "AI Confidence ≠ User Trust",
                                context: "The rubric engine outputs confidence scores, but showing raw percentages caused teachers to either over-trust (80% feels like a guarantee) or dismiss (60% feels unreliable). Designed a 3-tier signal system (Verified / Suggested / Uncertain) that anchored decisions in pedagogical context, not probability.",
                                outcome: "Teacher acceptance of AI output roughly doubled in usability testing.",
                                borderColor: "border-indigo-500/20",
                                accentColor: "text-indigo-400",
                            },
                            {
                                challenge: "GenAI Latency UX",
                                context: "Rubric generation takes 3-8 seconds — far longer than users expect from 'AI'. A generic spinner caused drop-off. Designed a progressive reveal: skeleton rubric structure appears immediately, then cells populate sequentially, creating a perception of real-time generation.",
                                outcome: "Drop-off during generation fell sharply.",
                                borderColor: "border-violet-500/20",
                                accentColor: "text-violet-400",
                            },
                            {
                                challenge: "One system, five teams",
                                context: "Five product teams had divergent component needs — elementary literacy, middle-school math, special ed, teacher dashboards, admin tools. Designed a token layer with 4 semantic contexts (learner, educator, admin, assessment) that let the same components adapt across surfaces.",
                                outcome: "Unified system with zero hard forks across 5 products.",
                                borderColor: "border-blue-500/20",
                                accentColor: "text-blue-400",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-[2rem] bg-zinc-900 border ${item.borderColor} flex flex-col gap-6`}
                            >
                                <h3 className={`text-base font-bold ${item.accentColor}`}>{item.challenge}</h3>
                                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{item.context}</p>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-xs text-zinc-400 font-semibold uppercase tracking-widest mb-1">Outcome</p>
                                    <p className="text-sm text-zinc-300 font-medium">{item.outcome}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Artifacts */}
            <InfosysUI />

            {/* Design Iterations */}
            <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <p className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                            04 — Design Iterations
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                            How the AI Confidence Signal Evolved
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                            3 rounds of internal testing with teachers before the confidence signal shipped. Each round invalidated a prior assumption.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                round: "Round 1",
                                label: "Raw percentage (68% confident)",
                                finding: "Teachers over-trusted 80%+ scores as guarantees; dismissed 60%- scores entirely. Binary thinking, not probabilistic.",
                                decision: "Drop percentages. Switch to qualitative signals.",
                                color: "border-red-500/20",
                                accent: "text-red-400",
                            },
                            {
                                round: "Round 2",
                                label: "Traffic-light system (Red / Amber / Green)",
                                finding: "Green triggered rubber-stamping — teachers stopped reading the rubric text. 'Green means approve' was too automatic.",
                                decision: "Remove green. Reframe as signal, not verdict.",
                                color: "border-amber-500/20",
                                accent: "text-amber-400",
                            },
                            {
                                round: "Round 3",
                                label: "3-tier signal (Verified / Suggested / Uncertain)",
                                finding: "Teachers engaged differently at each tier — Verified rubrics were approved far faster; Uncertain triggered review. Acceptance roughly doubled.",
                                decision: "Ship this version. Anchored in pedagogical action, not probability.",
                                color: "border-emerald-500/20",
                                accent: "text-emerald-400",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 rounded-2xl bg-zinc-950 border ${item.color} grid md:grid-cols-3 gap-4`}
                            >
                                <div>
                                    <div className={`text-xs font-bold uppercase tracking-widest ${item.accent} mb-1`}>{item.round}</div>
                                    <div className="text-sm font-semibold text-zinc-200">{item.label}</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Finding</div>
                                    <p className="text-sm text-zinc-400 leading-relaxed">{item.finding}</p>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">Decision</div>
                                    <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.decision}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-zinc-900">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                            Want to go deeper?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                            Happy to walk through the deeper artifacts — flows, wireframes, and the decisions behind them — live.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="mailto:adichinchakar@gmail.com"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors shadow-lg"
                            >
                                <Mail className="w-4 h-4" />
                                Contact for Full Walkthrough
                            </a>
                            <a
                                href="https://linkedin.com/in/adityachinchakar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10"
                            >
                                <Linkedin className="w-4 h-4" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
