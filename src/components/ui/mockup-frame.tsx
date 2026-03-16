"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Monitor, Smartphone, Figma } from "lucide-react";

interface MockupFrameProps {
    title: string;
    description?: string;
    aspectRatio?: "mobile" | "desktop" | "wide";
    tag?: string;
    className?: string;
}

export function MockupFrame({
    title,
    description,
    aspectRatio = "desktop",
    tag = "Figma Export",
    className,
}: MockupFrameProps) {
    const isPhone = aspectRatio === "mobile";
    const isWide = aspectRatio === "wide";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "rounded-[2rem] border-2 border-dashed border-zinc-200 bg-zinc-50/60 backdrop-blur-sm overflow-hidden",
                isPhone ? "max-w-[280px] mx-auto" : "w-full",
                className
            )}
        >
            {/* Device chrome */}
            {!isWide && (
                <div className={cn(
                    "flex items-center px-4 py-3 border-b border-zinc-200/60 bg-white/60",
                    isPhone ? "justify-center" : "justify-start gap-1.5"
                )}>
                    {isPhone ? (
                        <div className="w-16 h-1.5 rounded-full bg-zinc-300" />
                    ) : (
                        <>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                            <div className="flex-1 mx-4 h-5 rounded-md bg-zinc-100 border border-zinc-200 flex items-center px-2">
                                <span className="text-[10px] text-zinc-400 font-mono truncate">figma.com/file</span>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Content area */}
            <div className={cn(
                "relative flex flex-col items-center justify-center bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:20px_20px]",
                isPhone ? "aspect-[9/16] min-h-[320px]" : isWide ? "aspect-[21/9] min-h-[200px]" : "aspect-[16/9] min-h-[200px]"
            )}>
                <div className="flex flex-col items-center gap-4 text-center px-6">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center">
                        {isPhone ? (
                            <Smartphone className="w-5 h-5 text-zinc-400" />
                        ) : (
                            <Monitor className="w-5 h-5 text-zinc-400" />
                        )}
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-600 mb-1">{title}</p>
                        {description && (
                            <p className="text-xs text-zinc-400 leading-relaxed max-w-[200px]">{description}</p>
                        )}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 shadow-sm">
                        <Figma className="w-3 h-3 text-zinc-400" />
                        <span className="text-[10px] font-semibold text-zinc-400 tracking-wide">{tag}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
