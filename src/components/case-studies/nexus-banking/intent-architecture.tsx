import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Fingerprint } from "lucide-react";

export function IntentArchitecture() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                        Strategic Pivot
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">
                        "Intent-Led" Architecture
                    </h2>
                    <p className="text-xl text-zinc-600 max-w-3xl">
                        To resolve these systemic issues, we must reject the "kitchen sink" dashboard. The UX strategy pivots to an architecture that respects the user's cognitive load and prioritizes absolute transparency through three core pillars:
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {/* Pillar 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                            <div className="w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center mb-6">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">1. Dynamic Routing</h3>
                        </div>
                        <div className="md:w-2/3 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                            <p className="text-zinc-600 mb-6">
                                Instead of a static modular grid, the home screen must adapt to the user's primary "velocity". We bifurcate the IA into two distinct ecosystem layers:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-zinc-200">
                                    <h4 className="font-bold text-zinc-900 mb-2">Daily Velocity</h4>
                                    <p className="text-sm text-zinc-500">Checking, cards, P2P transfers. Minimalist, high contrast, zero promotional banners.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-zinc-200">
                                    <h4 className="font-bold text-zinc-900 mb-2">Wealth Generation</h4>
                                    <p className="text-sm text-zinc-500">Crypto, vaults, equities. Denser layouts for charts and richer data visualization.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                            <div className="w-12 h-12 bg-red-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/20">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">2. High-Fidelity Crisis UX</h3>
                        </div>
                        <div className="md:w-2/3 bg-red-50/50 p-8 rounded-3xl border border-red-100">
                            <p className="text-zinc-600 mb-6">
                                Redesigning the support flow specifically for anxiety reduction and complete transparency. A user with frozen funds should never see an ad for airport lounge access.
                            </p>
                            <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-3 text-red-600 font-bold">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>The "Crisis Node"</span>
                                </div>
                                <p className="text-sm text-zinc-600 italic">
                                    "Your account is locked for a security review. A specialized agent [Avatar] will review this. Current queue time: ~14 minutes. Your physical card auto-declines are active for safety."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                            <div className="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                <Fingerprint className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 mb-4">3. Progressive Disclosure</h3>
                        </div>
                        <div className="md:w-2/3 bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
                            <p className="text-zinc-600 mb-4">
                                Stop throwing features at the user; let them pull what they need. Empower users to curate their own financial dashboard.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex flex-shrink-0 items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                    </div>
                                    <span className="text-zinc-700 font-medium">Allow users to "pin" their top 3–4 core modules to the primary view.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex flex-shrink-0 items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                    </div>
                                    <span className="text-zinc-700 font-medium">Hide the rest in a deep, categorized architecture.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex flex-shrink-0 items-center justify-center">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    </div>
                                    <span className="text-emerald-700 font-bold">Result: 60% reduction in cognitive bloat while empowering ownership.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AlertCircle(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    )
}
