/**
 * Framer Motion re-export shim.
 * Exports `m` as `motion` so all components continue using `motion.*` syntax
 * while LazyMotion (in smooth-scroll.tsx) loads only the domAnimation feature
 * set (~18 KB) instead of the full bundle (~50 KB).
 *
 * IMPORTANT: Keep `LazyMotion features={domAnimation}` in smooth-scroll.tsx —
 * without it this shim provides no bundle savings.
 */
export {
    m as motion,
    AnimatePresence,
    useMotionValue,
    useMotionTemplate,
    useSpring,
    useTransform,
    useInView,
    useScroll,
    MotionConfig,
    animate,
} from "framer-motion";

export type { HTMLMotionProps } from "framer-motion";
