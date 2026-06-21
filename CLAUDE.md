# CLAUDE.md — Aulys Portfolio Website

## 1. Project Description

**Portfolio Website** — Personal/product portfolio for Aulys and Aditya Chinchakar.
Showcases work, case studies, and accessibility expertise.

**Stack:**
- Next.js (App Router) + TypeScript
- `@studio-freight/react-lenis` — smooth scroll
- `@vercel/analytics` + `@vercel/speed-insights` — analytics
- Deployed: Vercel

**Working dir:** `C:\Users\Admin\Desktop\Portfolio Website`

---

## 2. Critical Rules (Never Violate)

- Design: follow `D:\Second Brain - Obsidian\Aulys Ecosystem\010_GLOBAL_DESIGN_SYSTEM.md`
- The portfolio itself must be WCAG 2.2 AA compliant — this is a credibility signal
- No external font loading that causes CLS (use `next/font` only)
- No client-side data fetching for static content — use static generation

---

## 3. Coding Principles

### Reason Before Code
Before writing any code:
1. State your interpretation of the task explicitly
2. Identify ambiguities — ask rather than assume
3. Surface tradeoffs — never pick silently

### Simplicity First
- Static where possible — no dynamic routes unless content genuinely varies
- No abstractions for single-use components
- No heavy client-side JS for content that can be server-rendered

### Surgical Changes
- Change ONLY what the task requires
- Do not touch unrelated layout, animation, or content

### Goal-Driven Execution
- Define what "done" looks like before starting
- Verify in browser — not just build pass — before reporting complete

---

## 4. Tool Rules

- Prefer `Read`, `Edit`, `Grep`, `Glob` over Bash equivalents
- No file deletion without explicit user approval
- Never push to Vercel directly — git push triggers CI deploy

---

## 5. Git Rules

- **Never auto-commit** — only commit when explicitly instructed
- **Atomic commits** — one logical change per commit
- **Conventional commits:** `type(scope): description`
  - Example: `feat(case-study): add Aulys Figma Plugin case study page`
- **Never force-push** unless explicitly told to

---

## 6. Verification Gates

Before reporting any task complete:

```bash
npm run build   # Must succeed — zero errors, no broken links
```

Then open in browser and verify: layout, animations, mobile responsiveness,
keyboard navigation. Never say "done" without visual check.

---

## 7. Project Conventions

### Routing
- App Router (`app/`) — no Pages Router
- Static generation preferred (`generateStaticParams` for dynamic routes)
- Images: `next/image` only — never raw `<img>`

### Accessibility (Non-Negotiable)
- All images: descriptive `alt` text
- All interactive elements: keyboard focusable + visible focus ring
- Color contrast: WCAG AA minimum on all text
- Run axe-core or Lighthouse against each new page before shipping

### Performance
- Lenis smooth scroll: initialize in a Client Component, not globally
- Keep JS bundle lean — no heavy libraries for effects achievable in CSS

---

## 8. CLAUDE.md Self-Update

When a new convention or constraint is established during a session, propose an update to
this file. Keep under 300 lines.

## 9. Job Search System

**Status:** Active notice period (May–Aug 2026). Landing a role is mission-critical.

**System files:**
- `job-search/JOB_SEARCH_SYSTEM.md` — sprint plan, tools reference, agent behaviour rules
- `job-search/interview-prep/question-bank.md` — 20 behavioural Qs, Aulys/TalentBridge/Simplifai defence, critique framework, whiteboard framework
- `job-search/interview-prep/salary-negotiation.md` — benchmarks, anchoring scripts, equity checklist
- `job-search/company-research/` — pre-interview briefs (create per company)
- `job-search/outreach/` — outreach drafts (create per campaign)

**When user invokes any job search context:**
1. Read `job-search/JOB_SEARCH_SYSTEM.md` first
2. Follow the agent behaviour rules in that file exactly
3. Never give generic career advice — everything must be tailored to Aditya's case studies and target profile

---

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or `graphify explain "<concept>"` over grep — these traverse the graph's EXTRACTED + INFERRED edges instead of scanning files
- After modifying code files in this session, run `graphify update .` to keep the graph current (AST-only, no API cost)
