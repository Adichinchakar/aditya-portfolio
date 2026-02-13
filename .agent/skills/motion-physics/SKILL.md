name: motion-physics
description: Enforces premium "Apple-style" animation physics using Framer Motion.
instruction: |
  Standard linear animations feel cheap. You must use "Spring Physics" for all interactions.
  1. **Global Config:** When using `<motion.div>`, use this transition config by default:
     `transition={{ type: "spring", stiffness: 260, damping: 20 }}`
  2. **Hover States:**
     - Scale up slightly: `whileHover={{ scale: 1.02 }}`
     - Active press: `whileTap={{ scale: 0.98 }}`
  3. **Stagger Children:** When rendering lists (like the Bento Grid), always use `variants` to stagger the entrance of children by `0.1s`.
  4. **Smooth Scroll:** Ensure all anchor links scroll smoothly.
