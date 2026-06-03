import React from "react";
import { motion } from "@/lib/motion";

export function Setup() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-12 border-l-2 border-blue-500 pl-6 space-y-4">
                        <div className="flex gap-4 mb-4">
                            <span className="text-sm font-bold text-zinc-900 tracking-widest uppercase">Role</span>
                            <span className="text-sm text-zinc-500">Principal Product Designer</span>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <span className="text-sm font-bold text-zinc-900 tracking-widest uppercase">Focus</span>
                            <span className="text-sm text-zinc-500">UX Strategy, Systems Architecture, Consumer Trust</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-sm font-bold text-zinc-900 tracking-widest uppercase">Target</span>
                            <span className="text-sm text-zinc-500">Tier-1 Neobanks (e.g., Revolut, Robinhood)</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-8">
                        The "Super-App" Paradox
                    </h2>

                    <div className="prose prose-lg text-zinc-600">
                        <p className="lead text-xl text-zinc-800 font-medium mb-6">
                            In the race to become the ultimate financial "Super-App," Tier-1 Neobanks have aggressively layered crypto, commodities, lifestyle subscriptions, and travel features onto checking account foundations — without restructuring the underlying information architecture to carry that weight.
                        </p>
                        <p className="mb-6">
                            This audit started from a specific hypothesis: <strong className="text-zinc-800">horizontal feature expansion increases cognitive load on primary financial flows</strong>, measurable through task abandonment rate and time-on-task for core actions (balance check, P2P transfer, account freeze resolution). To pressure-test this, I conducted a structured heuristic evaluation of Revolut, Jupiter, and Fi Money against Nielsen's 10 usability principles, supplemented by sentiment analysis across App Store and Trustpilot reviews — categorized by flow type and failure mode.
                        </p>
                        <p className="mb-4">
                            The pattern was consistent: support ticket spikes correlate with feature launches, not outages. Users aren't failing because the product is broken — they're failing because the navigation model no longer matches their intent.
                        </p>
                        <p className="text-sm text-zinc-400 font-mono border-l-2 border-zinc-200 pl-4">
                            Methodology note: This is an unsolicited competitive audit. Validation would require instrumented A/B testing in production — estimated feasibility: 8-week sprint with analytics infrastructure in place.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
