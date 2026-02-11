"use client";

import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
            <div className="container mx-auto">
                <div className="max-w-4xl space-y-8">
                    <TextReveal tag="h1" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-foreground">
                        Founding-Caliber Design Engineer.
                    </TextReveal>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
                    >
                        I bridge the gap between high-fidelity UI and production-ready code. <br className="hidden md:block" />
                        7+ years shipping <span className="text-accent">AI-native interfaces</span> and <span className="text-accent">accessible design systems</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.8 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <Button size="lg" variant="primary">
                            View Work
                        </Button>
                        <Button size="lg" variant="outline">
                            Download Resume
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
}
