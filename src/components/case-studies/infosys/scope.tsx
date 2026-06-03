"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { Lock } from "lucide-react";

export function Scope() {
    return (
        <section className="py-24 px-6 bg-zinc-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06),transparent_60%)]" aria-hidden="true" />
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6 p-8 rounded-[2rem] bg-amber-500/10 border border-amber-500/20"
                >
                    <Lock className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                    <div>
                        <h2 className="text-xl font-bold text-amber-300 mb-3">Scope & NDA</h2>
                        <p className="text-zinc-300 leading-relaxed">
                            This work is covered under a Non-Disclosure Agreement with Infosys and Imagine Learning.
                            Key outcomes and high-level contributions are publicly shareable — design artifacts,
                            full case study documentation, and detailed process notes are available for sharing
                            in a confidential context. Contact me directly to schedule a walkthrough.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
