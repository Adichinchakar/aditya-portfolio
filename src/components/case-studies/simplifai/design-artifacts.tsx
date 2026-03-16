import React from "react";
import { motion } from "framer-motion";
import { MockupFrame } from "@/components/ui/mockup-frame";

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
                        03.5 — Design Artifacts
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        From Research to High-Fidelity
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        Progression from early-stage wireframes through IA mapping to the final hi-fi automation builder.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <MockupFrame
                        title="Wireframes — Early Structure"
                        description="Low-fidelity layout exploration for the automation canvas and operator panels"
                        aspectRatio="desktop"
                        tag="Figma Export"
                    />
                    <MockupFrame
                        title="IA Canvas — Information Architecture"
                        description="Full sitemap and navigation hierarchy across all 5 product modules"
                        aspectRatio="wide"
                        tag="Figma Export"
                    />
                    <MockupFrame
                        title="Hi-Fi — Flow Builder UI"
                        description="Final high-fidelity automation builder with drag-and-drop operator cards"
                        aspectRatio="desktop"
                        tag="Figma Export"
                    />
                </div>
            </div>
        </section>
    );
}
