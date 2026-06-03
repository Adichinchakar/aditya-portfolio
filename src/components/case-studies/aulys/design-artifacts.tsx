import React from "react";
import { motion } from "@/lib/motion";
import { AulysUI } from "./aulys-ui";

export function DesignArtifacts() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">
                        03.5 — Plugin Interface
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Production UI
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Three panels from the live Aulys plugin — the WCAG audit checklist, the color blindness simulator, and the scan history that tracks compliance over time.
                    </p>
                </motion.div>

                <AulysUI />
            </div>
        </section>
    );
}
