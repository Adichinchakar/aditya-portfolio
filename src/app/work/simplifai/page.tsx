"use client";

import React from "react";
import { Clock, Layout, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { FlowPreview } from "@/components/case-studies/simplifai/flow-preview";
import { BentoImpact } from "@/components/case-studies/simplifai/bento-impact";
import { TechnicalEvolution } from "@/components/case-studies/simplifai/technical-evolution";
import { UserPersonaInteractive } from "@/components/case-studies/simplifai/user-persona-interactive";
import { IATree } from "@/components/case-studies/simplifai/ia-tree";
import { SystemSpecs } from "@/components/case-studies/simplifai/system-specs";
import { Hero } from "@/components/case-studies/simplifai/hero";

export default function SimplifaiPage() {
    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-800 selection:bg-purple-500/30">
            {/* Hero Section */}
            <Hero />

            {/* Context Section (Bento Grid) */}
            <section className="px-6 pb-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-zinc-900 flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-zinc-700 block"></span>
                            At a Glance
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Role Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-3xl bg-white/50 border border-zinc-200/50 hover:bg-white transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Layout className="w-6 h-6 text-purple-400" />
                            </div>
                            <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">My Role</h4>
                            <p className="text-xl font-medium text-zinc-900">
                                Leading design from research to design system documentation.
                            </p>
                        </motion.div>

                        {/* Timeline Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-white/50 border border-zinc-200/50 hover:bg-white transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Clock className="w-6 h-6 text-blue-400" />
                            </div>
                            <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">Timeline</h4>
                            <p className="text-xl font-medium text-zinc-900">
                                2 Years
                            </p>
                            <p className="text-zinc-500 mt-1">2023 - Present</p>
                        </motion.div>

                        {/* Tools Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-3xl bg-white/50 border border-zinc-200/50 hover:bg-white transition-colors group"
                        >
                            <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Wrench className="w-6 h-6 text-green-400" />
                            </div>
                            <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wide mb-2">Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Figma", "React", "Tailwind CSS", "Motion"].map((tool) => (
                                    <span key={tool} className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-sm">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* User Persona & IA Section */}
            <UserPersonaInteractive />
            <IATree />

            {/* Existing Sections */}
            <FlowPreview />
            <SystemSpecs />
            <TechnicalEvolution />
            <BentoImpact />
        </div>
    );
}
