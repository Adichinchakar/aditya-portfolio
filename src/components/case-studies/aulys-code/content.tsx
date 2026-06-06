"use client";

import React from "react";
import Link from "next/link";
import { motion } from "@/lib/motion";
import {
    ArrowLeft,
    Code2,
    MessageSquare,
    Wand2,
    Terminal,
    Gauge,
    PanelsTopLeft,
    ServerCog,
    ShieldCheck,
    Github,
} from "lucide-react";
import { HookModel } from "@/components/case-studies/hook-model";

const GITHUB_URL = "https://github.com/Adichinchakar/aulys-code-extension-showcase";

/* ── Hero ─────────────────────────────────────────────────────────── */

function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/6 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 mb-12 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md px-2 py-1 -ml-2"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    <span className="text-sm font-semibold tracking-wide">Back to Case Studies</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-md"
                            aria-label="Case study type: VS Code extension, real product, in beta"
                        >
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            VS Code Extension · Solo Built · Live in Beta
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.05]">
                            Aulys Code:<br />
                            <span className="text-zinc-600 font-bold">
                                Accessibility, As You Type.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-lg mb-3 leading-relaxed font-medium">
                            The Figma plugin catches issues in design. Aulys Code catches them in the editor — a VS Code extension that surfaces WCAG violations inline while you write JSX and HTML, explains each in plain English, and remediates with one click.
                        </p>
                        <p className="text-sm text-zinc-600 max-w-lg mb-6 leading-relaxed">
                            Product strategy, architecture, and engineering are mine. I directed AI tools for execution across a three-workspace monorepo — extension host, React webview, and a serverless AI backend.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-bold tracking-wide">
                                Design Engineer · Founder · Solo Builder
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-semibold">
                                Aulys Accessibility Ecosystem
                            </span>
                        </div>

                        <Link
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            aria-label="View Aulys Code on GitHub (opens in new tab)"
                        >
                            <Github className="w-4 h-4" aria-hidden="true" />
                            View on GitHub
                        </Link>
                    </motion.div>

                    {/* Right side: faux editor with an inline diagnostic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                        aria-label="Editor preview showing an inline accessibility diagnostic"
                    >
                        <div className="relative rounded-[1.5rem] border border-white/50 bg-zinc-900 overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.18)]">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-zinc-900/80">
                                <div className="flex gap-2" aria-hidden="true">
                                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                </div>
                                <span className="ml-2 text-xs font-mono text-zinc-400">Dashboard.tsx</span>
                            </div>

                            <div className="p-5 font-mono text-[13px] leading-relaxed">
                                <div className="text-zinc-500">return (</div>
                                <div className="pl-4">
                                    <span className="text-rose-300/90 underline decoration-wavy decoration-rose-400/70 underline-offset-4">
                                        &lt;img src=&quot;/logo.png&quot; /&gt;
                                    </span>
                                </div>
                                <div className="text-zinc-500">)</div>

                                <div className="mt-4 rounded-lg border border-rose-500/30 bg-rose-500/10 p-3">
                                    <div className="text-[11px] font-bold uppercase tracking-widest text-rose-300 mb-1">
                                        WCAG 1.1.1 · Missing alt text
                                    </div>
                                    <div className="text-xs text-zinc-300 leading-relaxed">
                                        Images need an <span className="text-blue-300">alt</span> attribute so screen readers can describe them.
                                    </div>
                                    <div className="mt-2 flex gap-2">
                                        <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/20 border border-blue-400/30 px-2 py-1 text-[11px] font-semibold text-blue-200">
                                            <Wand2 className="w-3 h-3" aria-hidden="true" /> Quick Fix
                                        </span>
                                        <span className="inline-flex items-center gap-1 rounded-md bg-white/5 border border-white/10 px-2 py-1 text-[11px] font-semibold text-zinc-300">
                                            <MessageSquare className="w-3 h-3" aria-hidden="true" /> Ask Aulys AI
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ── Section shell ────────────────────────────────────────────────── */

function Section({
    index,
    label,
    title,
    children,
}: {
    index: string;
    label: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="px-6 py-20 bg-zinc-50">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">{index}</span>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">{label}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-8 max-w-3xl">
                        {title}
                    </h2>
                    {children}
                </motion.div>
            </div>
        </section>
    );
}

/* ── Problem ──────────────────────────────────────────────────────── */

function Problem() {
    return (
        <Section index="01" label="The Problem" title="Accessibility audits happen too late to matter.">
            <div className="grid md:grid-cols-2 gap-6 text-zinc-600 leading-relaxed font-medium">
                <p>
                    The standard accessibility loop is broken by timing. A developer ships a feature, an
                    automated checker or a manual audit runs days later, a ticket comes back, and the fix
                    is now a context-switch away from the code that caused it. The feedback arrives after
                    the decision is already cold.
                </p>
                <p>
                    Designers got real-time feedback the moment Aulys landed in Figma. Developers were
                    still flying blind in the one place the markup actually gets written. The gap wasn&apos;t
                    knowledge — it was the absence of a signal at the exact moment a violation is introduced.
                </p>
            </div>
        </Section>
    );
}

/* ── Feature grid ─────────────────────────────────────────────────── */

const FEATURES = [
    {
        icon: Code2,
        title: "Inline diagnostics",
        body: "WCAG violations are underlined directly in the editor via VS Code's diagnostic API — missing alt text, low contrast, empty links, unlabeled inputs, keyboard traps. The squiggle appears as you type.",
    },
    {
        icon: MessageSquare,
        title: "Plain-English AI chat",
        body: "A React webview sidebar backed by Gemini explains any violation in context. Quick-action chips fire the most common questions — fix alt text, contrast, ARIA labels, keyboard nav — in one tap.",
    },
    {
        icon: Wand2,
        title: "One-click remediation",
        body: "Every diagnostic carries a Quick Fix code action. Rules that can be resolved deterministically are autofixed in place; ambiguous ones hand off to the AI assistant with the offending snippet pre-loaded.",
    },
    {
        icon: Terminal,
        title: "CLI for CI",
        body: "A companion CLI scans a project headlessly and reports violations by rule and file, so the same engine that lints in the editor can gate a pull request in continuous integration.",
    },
];

function Features() {
    return (
        <Section index="02" label="What It Does" title="The signal, where the code is written.">
            <div className="grid sm:grid-cols-2 gap-5">
                {FEATURES.map((f) => (
                    <div
                        key={f.title}
                        className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-blue-500/30 transition-all"
                    >
                        <div className="inline-flex p-2.5 rounded-xl bg-blue-500/10 mb-4">
                            <f.icon className="w-5 h-5 text-blue-600" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-tight">{f.title}</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed">{f.body}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Architecture ─────────────────────────────────────────────────── */

const LAYERS = [
    {
        icon: PanelsTopLeft,
        title: "Extension host",
        stack: "TypeScript · no DOM",
        body: "Activation, the diagnostic engine, hover providers, and code actions. Talks to the webview only through a typed postMessage protocol — never directly.",
    },
    {
        icon: Code2,
        title: "Webview UI",
        stack: "React · Vite",
        body: "The AI chat panel. Sandboxed with a strict CSP nonce and no Node access; it posts messages up to the host, which owns every VS Code API call.",
    },
    {
        icon: ServerCog,
        title: "Serverless backend",
        stack: "Express · Gemini · Vercel",
        body: "A thin proxy that holds the model key and rate-limits requests, deployed as a Vercel function. The host calls it over Node https so requests resolve reliably in the extension runtime.",
    },
];

function Architecture() {
    return (
        <Section index="03" label="Architecture" title="Three workspaces, one hard boundary.">
            <p className="text-zinc-600 leading-relaxed font-medium mb-8 max-w-3xl">
                The extension host has no DOM and the webview has no Node — that constraint is the spine of
                the design. Keeping VS Code API calls on one side and React on the other, bridged by a single
                message protocol, is what makes the whole thing testable and safe.
            </p>
            <div className="grid md:grid-cols-3 gap-5">
                {LAYERS.map((l) => (
                    <div key={l.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                        <div className="inline-flex p-2.5 rounded-xl bg-zinc-100 mb-4">
                            <l.icon className="w-5 h-5 text-zinc-700" aria-hidden="true" />
                        </div>
                        <h3 className="text-base font-bold text-zinc-900 tracking-tight">{l.title}</h3>
                        <div className="font-mono text-[11px] text-blue-600 mb-3">{l.stack}</div>
                        <p className="text-sm text-zinc-600 leading-relaxed">{l.body}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Engineering quality ──────────────────────────────────────────── */

const QUALITY = [
    { icon: ShieldCheck, value: "Golden + unit", label: "Rule fixtures and autofix tests pin behavior" },
    { icon: Gauge, value: "Mutation", label: "Mutation testing on the engine, coverage-gated in CI" },
    { icon: PanelsTopLeft, value: "RTL + supertest", label: "Webview and backend covered end to end" },
];

function Quality() {
    return (
        <Section index="04" label="Engineering" title="A linter you trust has to be tested like one.">
            <div className="grid sm:grid-cols-3 gap-5">
                {QUALITY.map((q) => (
                    <div key={q.value} className="rounded-2xl border border-zinc-200 bg-white p-6">
                        <q.icon className="w-5 h-5 text-blue-600 mb-3" aria-hidden="true" />
                        <div className="text-xl font-black text-zinc-900 tracking-tight mb-1">{q.value}</div>
                        <p className="text-sm text-zinc-600 leading-relaxed">{q.label}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

/* ── Reflection ───────────────────────────────────────────────────── */

function Reflection() {
    return (
        <Section index="05" label="Reflection" title="The boundary was the product decision.">
            <div className="space-y-4 text-zinc-600 leading-relaxed font-medium max-w-3xl">
                <p>
                    The temptation in an extension is to let the webview reach for convenience and blur the
                    host boundary. Holding that line — host owns the editor, webview owns the chat, one
                    message protocol between them — is what let me move fast without the architecture rotting.
                </p>
                <p>
                    The sharpest lesson was unglamorous: the extension host doesn&apos;t behave like a browser.
                    The chat silently failed on the global <span className="font-mono text-sm text-zinc-800">fetch</span> until
                    I moved it to Node&apos;s <span className="font-mono text-sm text-zinc-800">https</span>. Shipping into a real
                    runtime, not an assumed one, is the difference between a demo and a tool people keep open.
                </p>
            </div>

            <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 px-6 py-3 rounded-full bg-zinc-900 text-white font-semibold shadow-lg hover:bg-zinc-800 hover:-translate-y-0.5 transition-all w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="Read the source on GitHub (opens in new tab)"
            >
                <Github className="w-4 h-4" aria-hidden="true" />
                Read the source
            </Link>
        </Section>
    );
}

/* ── Page ─────────────────────────────────────────────────────────── */

export default function AulysCodePage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-blue-500/30">
            <Hero />
            <Problem />
            <HookModel
                accentColor="text-blue-400"
                external="A merged pull request fails an accessibility check in CI — the violation is already on the main branch."
                internal="Developer friction: 'I don't want to learn a 90-page spec just to add an image. I want to know the moment I get it wrong.'"
                action="The squiggle appears under the markup as it's typed — no separate tool, no audit to schedule."
                reward="Hover for a plain-English reason; some fixes apply in one click, others open the AI with the snippet ready — instant resolution, not a backlog ticket."
                investment="Each inline fix teaches the rule. Over time the violations stop being written at all — the linter trains the developer out of needing it."
            />
            <Features />
            <Architecture />
            <Quality />
            <Reflection />
        </div>
    );
}
