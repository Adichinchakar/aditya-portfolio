"use client";

import dynamic from "next/dynamic";
import React from "react";
import { MotionConfig } from "framer-motion";

// Lazy-loaded — keeps Lenis out of the critical JS path
const ReactLenis = dynamic(
    () => import("@studio-freight/react-lenis").then((m) => ({ default: m.ReactLenis })),
    { ssr: false }
);

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
