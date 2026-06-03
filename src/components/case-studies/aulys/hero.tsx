import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "@/lib/motion";
import { Zap, ShieldCheck, Users, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";
import { ArrowLeft } from "lucide-react";

function MetricCard({
    icon: Icon,
    label,
    value,
    sub,
    spotlight,
    hoverBorder,
}: {
    icon: React.ElementType;
    label: string;
    value: string;
    sub: string;
    spotlight: string;
    hoverBorder: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-[1.25rem] bg-white/40 backdrop-blur-xl border border-white/40 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] ${hoverBorder}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[1.25rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${spotlight}, transparent 80%)`,
                }}
                aria-hidden="true"
            />
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                    <div className="p-2 rounded-lg bg-zinc-100/60 group-hover:bg-white/80 transition-colors">
                        <Icon className="w-4 h-4 text-zinc-600" aria-hidden="true" />
                    </div>
                    {/* aria-hidden on decorative label — the value itself conveys meaning */}
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest" aria-hidden="true">{label}</span>
                </div>
                <div className="text-3xl font-black text-zinc-900 mb-0.5 tracking-tighter">{value}</div>
                <div className="text-xs text-zinc-600 font-medium">{sub}</div>
            </div>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-zinc-50">
            {/* Ambient Background — decorative, hidden from AT */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none -z-10" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true" />

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Back link with explicit focus ring */}
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
                        {/* Pill badge — ping dot is purely decorative */}
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-md"
                            aria-label="Case study type: Figma Plugin, real product, in beta"
                        >
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 motion-reduce:animate-none" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            Figma Plugin · Solo Built · Live in Beta
                        </div>

                        {/* H1 — singular on this page */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.05]">
                            Aulys:<br />
                            <span className="text-zinc-600 font-bold">
                                AI Accessibility, Inside Figma.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-lg mb-3 leading-relaxed font-medium">
                            96.3% of the web fails basic accessibility. I built Aulys to fix that at the source — a real-time WCAG 2.2 scanner embedded directly in Figma, with AI-powered one-click remediation.
                        </p>
                        <p className="text-sm text-zinc-600 max-w-lg mb-6 leading-relaxed">
                            Product strategy, UX, and all decisions are mine. I directed AI tools for execution — compressing a 6-month MVP to 10 weeks without sacrificing depth.
                        </p>

                        {/* Role + timeline strip */}
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-bold tracking-wide">
                                Product Designer · Founder · Solo Builder
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-semibold">
                                Oct 2024 – Present
                            </span>
                        </div>

                        {/* CTA with explicit focus ring */}
                        <Link
                            href="https://aulys-app.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            aria-label="View Aulys Live Plugin (opens in new tab)"
                        >
                            View Live Plugin
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Right Side: Metrics Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 240, damping: 22, delay: 0.15 }}
                        className="relative"
                        aria-label="Plugin beta performance metrics"
                    >
                        <div className="relative rounded-[2rem] border border-white/50 bg-white/30 backdrop-blur-xl overflow-hidden p-2 shadow-[0_20px_60px_rgb(0,0,0,0.1)]">
                            <div className="bg-zinc-50/60 rounded-[1.5rem] p-6 border border-white/60 backdrop-blur-sm">
                                {/* H2 within this section — maintains hierarchy H1 → H2 */}
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-zinc-900 font-bold tracking-tight text-sm">Beta Performance</h2>
                                    <div className="flex gap-2" aria-hidden="true">
                                        <div className="w-2 h-2 rounded-full bg-red-400/40" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <MetricCard
                                        icon={Users}
                                        label="Beta"
                                        value="30"
                                        sub="Active testers in beta"
                                        spotlight="rgba(59, 130, 246, 0.12)"
                                        hoverBorder="group-hover:border-blue-500/30"
                                    />
                                    <MetricCard
                                        icon={LayoutGrid}
                                        label="Scale"
                                        value="500+"
                                        sub="Frames already scanned"
                                        spotlight="rgba(139, 92, 246, 0.12)"
                                        hoverBorder="group-hover:border-purple-500/30"
                                    />
                                    <MetricCard
                                        icon={Zap}
                                        label="Speed"
                                        value="<10s"
                                        sub="Per 500-layer document"
                                        spotlight="rgba(245, 158, 11, 0.12)"
                                        hoverBorder="group-hover:border-amber-500/30"
                                    />
                                    <MetricCard
                                        icon={ShieldCheck}
                                        label="Coverage"
                                        value="WCAG"
                                        sub="2.2 AA full · AAA selective"
                                        spotlight="rgba(16, 185, 129, 0.12)"
                                        hoverBorder="group-hover:border-emerald-500/30"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative glow */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none -z-10" aria-hidden="true" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
