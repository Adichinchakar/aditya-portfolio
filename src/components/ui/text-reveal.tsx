"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    delay?: number;
}

export function TextReveal({ children, className, tag = "p", delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const Tag = motion[tag]; // Motion component for the tag

    const words = children.split(" ");

    return (
        <Tag
            ref={ref}
            className={cn("inline-block", className)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.05, delayChildren: delay }}
        >
            <span className="sr-only">{children}</span>
            <span aria-hidden="true">
                {words.map((word, i) => (
                    <span key={i} className="inline-block whitespace-nowrap mr-[0.2em] overflow-hidden">
                        <motion.span
                            className="inline-block"
                            variants={{
                                hidden: { y: "100%" },
                                visible: { y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                ))}
            </span>
        </Tag>
    );
}
