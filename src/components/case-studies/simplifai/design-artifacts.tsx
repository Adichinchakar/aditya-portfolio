import React from "react";
import { motion } from "framer-motion";
import { SimplifaiUI } from "./simplifai-ui";

export function DesignArtifacts() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-purple-500 uppercase tracking-[0.2em] mb-4">
                        03.5 — Product UI
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        From Research to High-Fidelity
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Three screens that tell the full story — the dashboard that replaced an infinite canvas, the node builder that made AI automation intuitive, and the monitor that gave enterprise teams operational confidence.
                    </p>
                </motion.div>

                <SimplifaiUI />
            </div>
        </section>
    );
}
