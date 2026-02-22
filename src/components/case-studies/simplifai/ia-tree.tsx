"use client";

import { motion } from "framer-motion";
import { GitBranch, Mail, MessageSquare, Database, Zap } from "lucide-react";

export function IATree() {
    return (
        <section className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">Information Architecture</h2>
                    <p className="text-zinc-600">
                        Translating complex logic into a linear, understandable flow.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-800 via-purple-500/50 to-zinc-800 -translate-x-1/2" />

                    <div className="space-y-16 relative z-10">
                        {/* Root Node */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center"
                        >
                            <div className="bg-white border border-zinc-700 rounded-xl p-4 flex items-center gap-3 shadow-xl shadow-purple-900/10">
                                <div className="p-2 bg-purple-500/20 rounded-lg">
                                    <Zap className="w-5 h-5 text-purple-400" />
                                </div>
                                <div className="text-left">
                                    <div className="text-xs text-purple-400 font-mono uppercase tracking-wider">Trigger</div>
                                    <div className="text-zinc-900 font-semibold">New Lead Detected</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Branching Point */}
                        <div className="flex justify-center">
                            <div className="bg-zinc-50 border border-zinc-200 rounded-full p-2">
                                <GitBranch className="w-5 h-5 text-zinc-600" />
                            </div>
                        </div>

                        {/* Action Nodes */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: Mail, label: "Send Welcome Email", color: "blue" },
                                { icon: Database, label: "Update CRM Record", color: "green" },
                                { icon: MessageSquare, label: "Slack Notification", color: "orange" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-px h-8 bg-zinc-100 mb-4" /> {/* Connector to branch */}
                                    <div className="w-full bg-white/50 border border-zinc-200 rounded-xl p-4 flex flex-col items-center gap-3 text-center hover:border-zinc-700 transition-colors">
                                        <div className={`p-2 bg-${item.color}-500/10 rounded-lg`}>
                                            <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-1">Action</div>
                                            <div className="text-zinc-800 font-medium text-sm">{item.label}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
