"use client";

import React, { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "@/lib/motion";
import { BookOpen } from "lucide-react";
import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

export interface SummaryItem {
    id: string;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    spotlight: string;
    hoverBorder: string;
    label: string;
    content: ReactNode;
}

export interface ExecutiveSummaryProps {
    items: SummaryItem[];
}

function GlanceCard({ card }: { card: SummaryItem }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-200/80 p-8 flex flex-col gap-6 shadow-[0_4px_24px_rgb(0,0,0,0.07)] hover:shadow-[0_8px_32px_rgb(0,0,0,0.12)] transition-all duration-500",
                card.hoverBorder
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${card.spotlight}, transparent 80%)`,
                }}
            />
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center ring-1 ring-white/50 shadow-sm backdrop-blur-sm group-hover:scale-110 transition-transform duration-300", card.iconBg)}>
                <card.icon className={cn("w-6 h-6", card.iconColor)} />
            </div>
            <div className="relative z-10">
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">{card.label}</h4>
                {card.content}
            </div>
        </motion.div>
    );
}

export function ExecutiveSummary({ items }: ExecutiveSummaryProps) {
    return (
        <section className="pt-16 pb-24 px-6 bg-white border-b border-zinc-100">
            <div className="container mx-auto max-w-6xl">
                <div className="flex items-center gap-3 mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-zinc-200 text-sm font-semibold text-zinc-600 backdrop-blur-md shadow-sm"
                    >
                        <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                        Executive Summary
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((card) => (
                        <GlanceCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
