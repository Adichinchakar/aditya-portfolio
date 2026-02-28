import React from "react";
import { motion } from "framer-motion";

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
                            In the aggressive race to become the ultimate financial "Super-App," modern FinTech platforms have heavily prioritized horizontal feature expansion—crypto, commodities trading, lifestyle subscriptions, and travel—over vertical, core-banking stability.
                        </p>
                        <p className="mb-6">
                            As a UX leader observing this landscape, my hypothesis was that this aggressive expansion was creating a fundamental degradation in consumer trust. To validate this, I led an extensive qualitative data synthesis, analyzing thousands of App Store, Trustpilot, and Reddit reviews of top-tier Neobanks.
                        </p>
                        <p>
                            The data revealed a stark contrast between corporate KPIs ("increased feature adoption") and user reality ("I don't know where my money is"). Users are experiencing severe cognitive overload, a fragmented Information Architecture (IA), and panic during system failures. This strategic deep-dive deconstructs these friction points and proposes a systemic realignment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
