import React from "react";
import { motion } from "framer-motion";
import { MockupFrame } from "@/components/ui/mockup-frame";

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
                        04.5 — Design Artifacts
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Interface Design
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Designing for Bharat — low-literacy, multilingual, and inclusive-first interfaces for patients and providers.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <MockupFrame
                        title="Patient App — Home Screen"
                        description="Health record dashboard accessible via ABHA ID, with 8-language support"
                        aspectRatio="mobile"
                        tag="Figma Export"
                    />
                    <MockupFrame
                        title="Doctor Access Request Flow"
                        description="Consent-based record sharing — patient approves or denies in real-time"
                        aspectRatio="mobile"
                        tag="Figma Export"
                    />
                    <MockupFrame
                        title="Care Circle — Consent UI"
                        description="Family guardian management: add, modify, and revoke access permissions"
                        aspectRatio="mobile"
                        tag="Figma Export"
                    />
                </div>
            </div>
        </section>
    );
}
