"use client";

import React from "react";
import { motion } from "@/lib/motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function ConceptValidation() {
    return (
        <section className="py-24 px-6 bg-zinc-50 relative overflow-hidden border-y border-zinc-200">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs font-mono font-bold text-[#005EB8] uppercase tracking-[0.2em] mb-4">Methodology</p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-4">
                        Concept Validation & Testing
                    </h2>
                    <p className="text-zinc-600 leading-relaxed max-w-2xl text-lg">
                        We tested our core hypotheses in a 2-week field study in Delhi NCR before writing any production code.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-6 h-6 text-red-500" />
                            <h3 className="text-xl font-bold text-zinc-900">What Failed</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-700 leading-relaxed">
                                    <strong className="text-zinc-900">Complex terminology:</strong> "ABHA ID" confused rural patients. We renamed it simply to "Health Card" in the UI.
                                </p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-700 leading-relaxed">
                                    <strong className="text-zinc-900">Cloud-first sync:</strong> Required a stable 4G connection. Doctors got frustrated with loaders. We shifted to an Offline-first architecture.
                                </p>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                            <h3 className="text-xl font-bold text-zinc-900">What Survived</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-700 leading-relaxed">
                                    <strong className="text-zinc-900">QR-code onboarding:</strong> Patients immediately grasped scanning a code to get their medical history, analogous to UPI payments.
                                </p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                                <p className="text-sm text-zinc-700 leading-relaxed">
                                    <strong className="text-zinc-900">Family consent delegation:</strong> Elderly patients loved that their children could manage their health records remotely via proxy consent.
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
