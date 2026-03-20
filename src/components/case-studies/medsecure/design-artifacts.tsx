import React from "react";
import { motion } from "framer-motion";
import { MedSecureUI } from "./medsecure-ui";

export function DesignArtifacts() {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#005EB8]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">
                        04.5 — Mobile UI
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Designing for Bharat
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Three screens from the patient app — built for low-literacy, multilingual, and inclusive-first use across rural and urban India. Icon-first navigation, large touch targets, ABHA ID integration.
                    </p>
                </motion.div>

                <MedSecureUI />
            </div>
        </section>
    );
}
