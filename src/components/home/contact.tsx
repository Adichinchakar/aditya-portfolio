"use client";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="py-32 px-6 flex flex-col items-center justify-center text-center min-h-[60vh]">
            <div className="container mx-auto space-y-10 max-w-4xl">
                <TextReveal tag="h2" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                    Ready to ship faster?
                </TextReveal>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
                >
                    I'm looking for a Founding Design Engineer role where I can own the design system and ship production code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button size="lg" className="rounded-full text-xl px-10 py-6 h-auto">
                        Get in Touch
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    viewport={{ once: true }}
                    className="pt-10 flex flex-col items-center gap-2 text-muted-foreground"
                >
                    <p>Targeting remote roles in AI & Fintech.</p>
                    <a href="mailto:adityachinchakar@example.com" className="text-accent hover:underline">
                        adityachinchakar@example.com
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
