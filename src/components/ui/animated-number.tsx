"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
    value: number;
    duration?: number;
    format?: (val: number) => string;
    className?: string;
}

export function AnimatedNumber({
    value,
    duration = 2000,
    format = (val) => val.toLocaleString(),
    className = "",
}: AnimatedNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(format(0));
    
    // Spring for smooth animation
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration,
        bounce: 0,
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, motionValue, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(format(Math.floor(latest)));
        });
    }, [springValue, format]);

    return (
        <span ref={ref} className={className}>
            {displayValue}
        </span>
    );
}
