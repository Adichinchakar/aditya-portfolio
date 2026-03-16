import React from "react";
import { motion } from "framer-motion";
import { MockupFrame } from "@/components/ui/mockup-frame";

export function DesignArtifacts() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">
                        03.5 — Design
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        Plugin Interface
                    </h2>
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-2xl">
                        The Aulys panel UI — from initial scan trigger to results view and one-click fix.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <MockupFrame
                        title="Plugin Panel — Scan Trigger View"
                        description="Entry point: single-click accessibility scan within the Figma plugin panel"
                        aspectRatio="desktop"
                        tag="Figma Export"
                    />
                    <MockupFrame
                        title="Results View — Issues Surfaced"
                        description="Violations grouped by WCAG criterion with severity indicators"
                        aspectRatio="desktop"
                        tag="Figma Export"
                    />
                    <MockupFrame
                        title="One-Click Fix — AI Remediation"
                        description="AI-powered suggestion with direct apply action — no context switching required"
                        aspectRatio="desktop"
                        tag="Figma Export"
                    />
                </div>
            </div>
        </section>
    );
}
