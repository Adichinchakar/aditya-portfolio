"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactSheetProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactSheet({ isOpen, onClose }: ContactSheetProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-zinc-900/20 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Sliding Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-white shadow-2xl border-l border-zinc-200 overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zinc-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                            <h2 className="text-xl font-bold tracking-tight text-zinc-900">Let's Talk</h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-8">
                            <div className="space-y-2">
                                <p className="text-zinc-500 font-medium">
                                    How would you like to connect? I'm currently open for new opportunities in Product Design and Frontend Engineering.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Option 1: Calendar */}
                                <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 hover:border-blue-500/30 hover:bg-blue-50/50 transition-all cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                            <Calendar className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                                                Book a Meeting
                                                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </h3>
                                            <p className="text-sm text-zinc-500 font-medium mb-4">
                                                Grab 30 minutes on my calendar to discuss a role, project, or just jam on design systems.
                                            </p>
                                            <a
                                                href="https://cal.com/" // Placeholder for actual cal link
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                                            >
                                                View Availability <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Option 2: Email */}
                                <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 hover:border-purple-500/30 hover:bg-purple-50/50 transition-all cursor-pointer">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                            <Mail className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-zinc-900 mb-1 flex items-center gap-2">
                                                Send an Email
                                                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </h3>
                                            <p className="text-sm text-zinc-500 font-medium mb-4">
                                                Prefer async? Drop me a line directly. I usually respond within 24 hours.
                                            </p>
                                            <a
                                                href="mailto:adichinchakar@gmail.com"
                                                className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 hover:text-purple-700"
                                            >
                                                adityachinchakar@gmail.com <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-zinc-100">
                                <p className="text-xs font-semibold text-zinc-400 text-center uppercase tracking-widest">
                                    Targeting roles in AI & Fintech
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
