name: accessibility-first
description: Ensures all generated code is WCAG 2.2 compliant.
instruction: |
  As the portfolio of an Accessibility Expert (Aulys founder), all code must demonstrate best practices:
  1. **Semantic HTML:** Use `<main>`, `<section>`, `<article>`, `<nav>` correctly. Never use `<div>` for buttons.
  2. **Focus States:** AUTOMATICALLY add `focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none` to all interactive elements.
  3. **Images:** All `<img>` tags must have a meaningful `alt` prop.
  4. **Motion:** Respect `prefers-reduced-motion`. Wrap Framer Motion animations in a media query check if possible, or keep them subtle.
  5. **Contrast:** Ensure text contrast ratio is always > 4.5:1 (Zinc-400 on Zinc-950 passes).
