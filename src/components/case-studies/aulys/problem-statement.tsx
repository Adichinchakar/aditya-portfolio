import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, PaintBucket, EyeOff } from "lucide-react";

export function ProblemStatement() {
    return (
        <section className="py-24 px-6 bg-white relative">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                        The Accessibility Crisis
                    </h2>
                    <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl">
                        Designing for everyone is a noble goal, but the reality is harsh: manual WCAG compliance checks are tedious, error-prone, and slow. Accessibility was consistently treated as an afterthought rather than a foundation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: AlertTriangle,
                            title: "Human Error",
                            desc: "Checking contrast ratios and touch targets manually across hundreds of screens leads to inevitable oversights.",
                            color: "text-amber-500",
                            bg: "bg-amber-500/10"
                        },
                        {
                            icon: PaintBucket,
                            title: "Friction in Design",
                            desc: "Designers lack real-time feedback, often shipping non-compliant handoffs to engineering teams.",
                            color: "text-red-500",
                            bg: "bg-red-500/10"
                        },
                        {
                            icon: EyeOff,
                            title: "Reactive Fixing",
                            desc: "Accessibility is usually tested post-deployment. Finding issues late in the cycle exponentially increases fixing costs.",
                            color: "text-purple-500",
                            bg: "bg-purple-500/10"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors"
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.bg}`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
