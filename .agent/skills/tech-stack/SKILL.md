name: tech-stack
description: Enforces modern React 19, Next.js 14, and Framer Motion patterns.
instruction: |
  When writing code, adhere to these technical standards:
  1. **React:** Use Server Components by default. Use 'use client' only for interactive leaves.
  2. **Framer Motion:** Use `framer-motion` for all animations. Prefer `AnimatePresence` for exit animations.
  3. **Lucide Icons:** Always import icons from `lucide-react`.
  4. **Tailwind:** Use `clsx` and `tailwind-merge` (via a `cn()` utility) for dynamic classes.
  5. **Clean Code:** No inline styles. No `console.log`. Export strictly typed interfaces.
