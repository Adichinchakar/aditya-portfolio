name: linear-design
description: Enforces the "Linear" design aesthetic (Premium Dark Mode) for all UI generation.
instruction: |
  When generating UI components or layouts, YOU MUST STRICTLY FOLLOW these rules:
  1. **Color Palette:** - NEVER use pure black (`#000000`). Use `bg-zinc-950` for backgrounds.
     - NEVER use pure white text. Use `text-zinc-100` for headings and `text-zinc-400` for body.
     - Borders must be subtle: `border-zinc-800`.
  2. **Glassmorphism:**
     - All cards/panels must use: `bg-zinc-900/50 backdrop-blur-md border border-zinc-800`.
  3. **Typography:**
     - Use `font-sans` (Inter). 
     - Headings must use `tracking-tight`.
  4. **Micro-interactions:**
     - Every interactive element (button, card) must have a hover state: `hover:border-zinc-700` or `hover:bg-zinc-800`.
  5. **Forbidden:**
     - Do not use generic Tailwind colors like `bg-blue-500` unless explicitly asked for an accent.
     - Do not use drop-shadows; use inner glows or subtle borders instead.
