"use client";

import { useState } from "react";
import { motion } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Copy, Check, Github, Linkedin } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";

const EMAIL = "adichinchakar@gmail.com";

export function Contact() {
    const [copied, setCopied] = useState(false);
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

    function handleCopy() {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Ambient glow orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Glassmorphic CTA card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring" as const, stiffness: 240, damping: 22 }}
                    viewport={{ once: true }}
                    className="rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_20px_60px_rgb(0,0,0,0.08)] p-10 md:p-14 flex flex-col items-center text-center gap-7"
                >
                    {/* Heading */}
                    <TextReveal tag="h2" className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
                        Let's build something great.
                    </TextReveal>

                    {/* Sub text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-base md:text-lg text-zinc-500 max-w-xl font-medium leading-relaxed"
                    >
                        Available August 2026 · Open to remote Lead, Staff Designer, Head of Design, and Founding Designer roles worldwide. If you're building something ambitious and care about craft, I'd love to talk.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            size="lg"
                            className="rounded-full text-xl px-10 py-6 h-auto shadow-lg"
                            onClick={() => setIsContactSheetOpen(true)}
                        >
                            Get in Touch
                        </Button>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full max-w-md border-t border-white/60" />

                    {/* Email chip + socials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Copy email chip */}
                        <button
                            onClick={handleCopy}
                            aria-label={copied ? "Email address copied" : "Copy email address to clipboard"}
                            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-700 backdrop-blur-md shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            <span>{EMAIL}</span>
                            <span className="w-5 h-5 flex items-center justify-center text-zinc-500 group-hover:text-zinc-800 transition-colors" aria-hidden="true">
                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </span>
                        </button>

                        {/* Social links */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/Adichinchakar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-white/90 transition-all duration-300 shadow-sm backdrop-blur-md"
                                aria-label="GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com/in/adityachinchakar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/60 border border-white/80 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-white/90 transition-all duration-300 shadow-sm backdrop-blur-md"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <ContactSheet
                isOpen={isContactSheetOpen}
                onClose={() => setIsContactSheetOpen(false)}
            />
        </section>
    );
}
