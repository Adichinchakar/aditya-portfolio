"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <TextReveal tag="h2" className="text-4xl md:text-5xl font-bold tracking-tight">
                        Why I Code.
                    </TextReveal>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6"
                    >
                        <p>
                            Most designers hand off mockups and hope for the best.
                            <span className="text-foreground font-medium"> I hand off working prototypes because I build them.</span>
                        </p>
                        <p>
                            I operate at the intersection of <span className="text-accent">Design Thinking</span> and
                            <span className="text-accent"> Technical Execution</span>.
                            I don't just design interfaces; I build the systems that power them.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
