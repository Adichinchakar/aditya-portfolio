"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

const experiences = [
    {
        period: "2024 - Present",
        role: "Founder & Lead Engineer",
        company: "Aulys Accessibility Suite",
        description: "Built a production-ready accessibility suite (React 19, TypeScript 5.9). Automated WCAG 2.2 AAA compliance for enterprise design systems."
    },
    {
        period: "2023 - 2024",
        role: "Senior Product Designer",
        company: "Confidential AI Startup",
        description: "Lead designer for an AI-native interface. Shipped 3 major product iterations and established the core design system."
    },
    {
        period: "2021 - 2023",
        role: "Design System Lead",
        company: "Infosys",
        description: "Architected a multi-brand design system used by 50+ internal apps. Reduced development cycles by 42% through token automation."
    }
];

export function About() {
    return (
        <section id="about" className="py-32 px-6 bg-surface/30">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <TextReveal tag="h2" className="text-4xl md:text-6xl font-bold tracking-tighter">
                            About Me
                        </TextReveal>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-lg text-muted-foreground space-y-6"
                        >
                            <p>
                                I am a <span className="text-foreground font-medium">Product Designer</span> who codes.
                                My core value proposition is simple: I bridge the gap between high-fidelity UI and production-ready code.
                            </p>
                            <p>
                                With over <span className="text-foreground font-medium">7 years of experience</span>, I specialize in building
                                <span className="text-accent"> AI-native interfaces</span> and robust design systems that scale.
                                I don't just hand off designs; I ship production-grade code that meets rigorous
                                <span className="text-foreground font-medium"> WCAG 2.2 AAA</span> standards.
                            </p>
                            <p>
                                Currently, I'm building <span className="text-accent">Aulys</span>, an advanced accessibility suite,
                                pushing the boundaries of what's possible with React 19 and modern web technologies.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-12">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold border-b border-white/10 pb-4"
                        >
                            Experience
                        </motion.h3>

                        <div className="space-y-8">
                            {experiences.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4"
                                >
                                    <span className="text-muted-foreground font-mono text-sm pt-1">{job.period}</span>
                                    <div>
                                        <h4 className="text-xl font-bold text-foreground">{job.role}</h4>
                                        <p className="text-accent text-sm mb-2">{job.company}</p>
                                        <p className="text-muted-foreground">{job.description}</p>
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
