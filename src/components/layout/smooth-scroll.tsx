"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";
import { MotionConfig } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <MotionConfig reducedMotion="user">
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {children as any}
            </ReactLenis>
        </MotionConfig>
    );
}
