# Site-wide Accessibility Audit — axe-core (WCAG 2.0/2.1/2.2 A+AA)

Generated from `axe-scan.mjs` (`@axe-core/playwright`, reduced-motion + settle wait to avoid framer false positives). Re-run any page: start dev server, then `node axe-scan.mjs`.

`/work/aulys` = **0 violations** (remediated in PR #18 — use as the reference for fixes).

## Per-page violations (rule [impact] — node count)

| Page | Critical | Serious (contrast) |
|---|---|---|
| `/` (home) | — | color-contrast (23) |
| `/about` | — | color-contrast (11) |
| `/now` | — | color-contrast (3) |
| `/resume` | — | color-contrast (16) |
| `/work` | — | color-contrast (23) |
| `/writing` | — | color-contrast (23) |
| `/work/aulys` | — | **0 ✓** |
| `/work/aulys-code` | — | color-contrast (1) |
| `/work/simplifai` | button-name (6), label (6), select-name (2), scrollable-region-focusable (2) | color-contrast (16) |
| `/work/simplifai-design-system` | — | color-contrast (**93**) |
| `/work/medsecure` | aria-required-children (1), button-name (8) | color-contrast (29) |
| `/work/nexus-banking` | — | color-contrast (18) |
| `/work/infosys` | button-name (10), label (9) | color-contrast (10) |
| `/work/orbit` | — | color-contrast (30) |

## Root-cause patterns (same as Aulys fixes)

1. **Faint labels.** `text-blue-500` (3.76:1) and `text-zinc-500/400` mono uppercase labels fail AA on light bg. Fix: light bg → `text-blue-600`+ / `zinc-600`+; colored stat text → `-700` shade; dark bg → `zinc-400`+ / `blue-50`. Never blind replace_all — `text-zinc-400` PASSES on dark bg, fails on light; check each context.
2. **Icon-only buttons / selects.** `button-name`, `select-name`, `label` = interactive mockups with no accessible name. Fix: add `aria-label` to icon buttons, `aria-hidden` to their icons; associate `<label>`/`aria-label` with inputs/selects. (Same class as the carousel fix in `next-case-study-hero.tsx`.)
3. **`scrollable-region-focusable`.** A scroll container needs `tabIndex={0}` + an accessible name, or non-scrolling layout.
4. **`aria-required-children`.** A `role="list"`/tablist etc. missing its required child roles — fix the role nesting.

## Ownership / sequencing

- **Case-study pages** (`/work/*`): fix inside each study's own premortem session — bodies are clean, no working-tree conflict. The premortem prompt already says "drive contrast to 0."
- **Home / `/work` / `/about` / `/resume` / `/now` / `/writing`**: BLOCKED — `project-card.tsx`, `selected-work.tsx`, `component-lab.tsx`, `home/about.tsx`, `layout/header.tsx` had uncommitted pre-existing changes at audit time. Commit/stash that WIP first, then a focused a11y pass (shared offender = `project-card.tsx`, clears home + `/work` card labels at once).
- **Biggest single job:** `simplifai-design-system` (93 nodes) — likely one repeated faint-token in a mapped list; fix the token once.
