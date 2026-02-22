"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, FileText, AlertCircle, Users } from "lucide-react";

export function UserPersonaIA() {
    return (
        <section className="py-20 px-6 bg-zinc-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* User Persona Column */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4">The User</h2>
                            <p className="text-zinc-600">
                                Before writing code, we needed to understand who we were building for.
                            </p>
                        </div>

                        {/* Glassmorphism Persona Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-black/5 backdrop-blur-xl p-8"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                            {/* Placeholder for Sarah's image, using icon for now */}
                                            <User className="w-8 h-8 text-zinc-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-900">Sarah, Operations Lead</h3>
                                        <p className="text-purple-300 text-sm">Non-Technical Stakeholder</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-zinc-500 uppercase tracking-wider font-semibold">
                                            <AlertCircle className="w-4 h-4 text-red-400" />
                                            Pain Points
                                        </div>
                                        <ul className="space-y-2 pl-6 list-disc text-zinc-700">
                                            <li>Manual data entry errors causing <span className="text-red-300">20% rework</span>.</li>
                                            <li>Fragmented workflows across 5+ different tools.</li>
                                            <li>"I feel dependent on engineering for every small change."</li>
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-zinc-200 mt-6">
                                        <div className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                                            <Users className="w-5 h-5 text-purple-400 shrink-0" />
                                            <p className="text-sm text-purple-200">
                                                <span className="font-bold text-zinc-900">Validation:</span> Conducted user research with 100+ participants to validate these flows.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* IA Tree Column */}
                    <div className="relative">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Information Architecture</h2>
                            <p className="text-zinc-600">
                                Mapping the complexity of automation into a simplified mental model.
                            </p>
                        </div>

                        {/* Interactive IA Tree Visualization */}
                        <div className="relative p-8 rounded-3xl border border-zinc-200 bg-white/50">
                            {/* Tree Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                                <path d="M 50% 80 L 50% 120" stroke="white" strokeWidth="2" fill="none" />
                                {/* Branches */}
                                <path d="M 50% 120 L 20% 200" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M 50% 120 L 50% 200" stroke="white" strokeWidth="1" fill="none" />
                                <path d="M 50% 120 L 80% 200" stroke="white" strokeWidth="1" fill="none" />
                            </svg>

                            <div className="relative z-10 flex flex-col items-center gap-12">
                                {/* Root Node */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="px-6 py-3 rounded-full bg-purple-600 text-zinc-900 font-medium shadow-lg shadow-purple-900/20 border border-purple-400/30"
                                >
                                    Simplifai Dashboard
                                </motion.div>

                                {/* Level 2 Nodes */}
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    {/* Workflows */}
                                    <div className="flex flex-col items-center gap-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            className="px-4 py-2 rounded-lg bg-zinc-100 border border-zinc-700 text-zinc-800 text-sm font-medium w-full text-center"
                                        >
                                            Workflows
                                        </motion.div>
                                        {/* Children Level */}
                                        <div className="flex flex-col gap-3 w-full items-center">
                                            <div className="w-[1px] h-4 bg-zinc-700"></div>
                                            <div className="px-3 py-1.5 rounded bg-white/80 border border-zinc-200 text-xs text-zinc-600 w-full text-center">Triggers</div>
                                            <div className="px-3 py-1.5 rounded bg-white/80 border border-zinc-200 text-xs text-zinc-600 w-full text-center">Actions</div>
                                        </div>
                                    </div>

                                    {/* Analytics */}
                                    <div className="flex flex-col items-center gap-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="px-4 py-2 rounded-lg bg-zinc-100 border border-zinc-700 text-zinc-800 text-sm font-medium w-full text-center"
                                        >
                                            Analytics
                                        </motion.div>
                                        <div className="flex flex-col gap-3 w-full items-center">
                                            <div className="w-[1px] h-4 bg-zinc-700"></div>
                                            <div className="px-3 py-1.5 rounded bg-white/80 border border-zinc-200 text-xs text-zinc-600 w-full text-center">Performance</div>
                                            <div className="px-3 py-1.5 rounded bg-white/80 border border-zinc-200 text-xs text-zinc-600 w-full text-center">Usage</div>
                                        </div>
                                    </div>

                                    {/* Settings */}
                                    <div className="flex flex-col items-center gap-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="px-4 py-2 rounded-lg bg-zinc-100 border border-zinc-700 text-zinc-800 text-sm font-medium w-full text-center"
                                        >
                                            Settings
                                        </motion.div>
                                        <div className="flex flex-col gap-3 w-full items-center">
                                            <div className="w-[1px] h-4 bg-zinc-700"></div>
                                            <div className="px-3 py-1.5 rounded bg-white/80 border border-zinc-200 text-xs text-zinc-600 w-full text-center">API Keys</div>
                                            <div className="px-3 py-1.5 rounded bg-white/80 border border-zinc-200 text-xs text-zinc-600 w-full text-center">Members</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
