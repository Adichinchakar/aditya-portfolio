# Interview Prep — Aditya Chinchakar

## Context
Senior Product Designer / Founding Designer candidate.
Targeting: Founding Designer, Lead Designer, Staff Designer, Head of Design at AI-first startups (Series A–C).
Notice period ends: ~3 months from May 2026.
Anchor case study: Aulys (AI accessibility Figma plugin, solo-built, 30 beta users).

---

## STAR Framework (use for all behavioural rounds)

**S** — Situation: set the stage, constraints, team size, timeline  
**T** — Task: what YOU were responsible for (not the team)  
**A** — Action: specific steps, decisions, tradeoffs YOU made  
**R** — Result: metrics, business impact, what shipped or changed  

Rule: Never say "we" without following it with what specifically YOU did.

---

## Behavioural Questions (20 core)

### Ownership & Founding Designer signal
1. Tell me about a time you owned a product from 0 to launch with no design team.
2. Describe a time you had to make a major design decision with very little data.
3. Tell me about a time you pushed back on a founder or PM — and were right.
4. Tell me about a time you pushed back and were wrong. What did you change?
5. Describe a time you had to ship something imperfect. How did you handle the tradeoff?

### Craft & Systems
6. Walk me through how you approach building a design system from scratch.
7. Tell me about the most complex component you've ever designed. Why was it hard?
8. Describe a time you improved accessibility in a product not designed for it.
9. How have you used AI tools to accelerate design work? Give a concrete example.
10. Tell me about a time you had to design for a non-designer audience (devs, ops, etc.).

### Influence & Collaboration
11. Describe a time you aligned stakeholders who disagreed on product direction.
12. Tell me about a time you worked with an engineer who questioned your design decisions.
13. How do you communicate design to a CEO who doesn't care about craft?
14. Tell me about a time you mentored someone — what was your approach?
15. Describe a conflict with a PM over scope. How did you resolve it?

### Growth & Resilience
16. What's the biggest design mistake you've made? What did you learn?
17. Describe a time you had to context-switch between multiple products fast.
18. Tell me about a project that got cancelled. How did you handle it?
19. What does your design process look like when you're under a 1-week deadline?
20. Why are you leaving your current role, and what are you optimising for next?

---

## Portfolio Defence — Aulys

### Setup (say this at the start of every Aulys walkthrough)
"Aulys is an AI-powered WCAG 2.2 accessibility checker for Figma. I designed and built it solo — I directed AI for code execution while owning all product decisions. It audits an entire Figma file in under 10 seconds and surfaces one-click AI fixes."

### Attack questions + your answers

**Q: How do you know it actually helps designers?**  
A: 30 beta users, 4.8/5 satisfaction in exit survey. Key quote: "It caught 14 issues in my file I didn't know existed." Friction map (7 steps) drove the UX — I mapped every failure point in manual WCAG auditing before writing a single screen.

**Q: What's the business case? Isn't WCAG a niche concern?**  
A: $250K average ADA lawsuit settlement. 4,600 digital accessibility lawsuits filed in 2023. Enterprise Figma customers have legal obligations. Aulys sells into that fear and turns compliance into workflow.

**Q: You "directed AI for development" — can you actually code?**  
A: I write TypeScript, read diffs, fix bugs, deploy to Vercel. I don't pretend to be a senior engineer. My edge is knowing exactly what to ask AI to build, how to verify output, and where to apply design constraints the AI can't infer. That's the founding designer skillset for 2025+.

**Q: What would you do differently?**  
A: Onboarding. First-run experience assumed too much WCAG literacy. I'd add a guided first audit with annotated results before letting users explore freely.

**Q: How did you validate the problem before building?**  
A: Ran 8 user interviews with designers at Infosys and freelancers. 7/8 did zero accessibility checks before handoff — not because they didn't care, but because manual WCAG auditing is a 2-hour process. That gap was the product.

---

## Portfolio Defence — TalentBridge (Infosys)

### Setup
"TalentBridge is an internal talent marketplace I designed at Infosys. The problem: 240,000-person company with no visibility into internal skills. People were being hired externally for roles that existed internally — a retention and cost problem."

### Attack questions + your answers

**Q: How do you design for 240K users?**  
A: You don't design for 240K — you design for 4 personas. Talent seeker (project manager), Talent provider (team lead), Talent (employee), HR/Admin. I mapped each persona's primary job-to-be-done and designed divergent flows before finding convergence points.

**Q: What was the measurable outcome?**  
A: Internal mobility increased. I can't share exact numbers (NDA), but the directional signal was clear: HR leadership approved phase 2 budget post-pilot. That's the proxy metric for "it worked."

**Q: Enterprise design looks boring. How do you make it not suck?**  
A: Enterprise design isn't boring — it's constrained. Within Infosys's design system I found degrees of freedom: empty states, micro-interactions, onboarding copy. The best enterprise work isn't visible; it reduces cognitive load until people stop noticing the UI.

---

## Portfolio Defence — Simplifai

### Setup
"Simplifai is an AI document processing platform for enterprise. I joined as a senior designer owning the full product surface — 5+ tickets/week coming from onboarding confusion, 3-day average time-to-first-value. I redesigned the onboarding and processing flows."

### Attack questions
- What was the before state? (answer: 5+ support tickets/week, 3-day onboarding)
- How did you measure success? (answer: support ticket volume, time-to-first-value)
- What did you cut from scope? (answer: advanced settings — moved to power-user path)

---

## Design Critique Practice

### How to run a critique (say this to interviewers)
"I'll narrate my thinking aloud. I'll cover: user goal → flow efficiency → hierarchy → accessibility → edge cases → what I'd test first."

### Common critique targets
- Onboarding flows (Notion, Linear, Figma)
- Mobile checkout (Swiggy, Amazon)
- Dashboard complexity (Salesforce, Jira)

### Critique framework
1. Who is the user? What's the primary job-to-be-done?
2. Does the first screen orient them to the task?
3. Where does the flow break or require cognitive effort?
4. What's the worst-case state (empty, error, overloaded)?
5. What would I change first and why?

---

## Whiteboard / Take-Home Challenge Framework

**Time box:** 25 min discovery → 10 min framing → 25 min sketching → 10 min presentation

**Discovery questions to always ask:**
- Who is the primary user?
- What's the #1 metric we're optimising for?
- What constraints exist (platform, team size, timeline)?
- What's already been tried?

**Presentation structure:**
1. Problem reframe (1 min)
2. User insight (1 min)
3. Solution walkthrough (3 min)
4. What I'd validate next (1 min)

---

## Role-Specific Questions

### Founding Designer roles
- How do you decide what NOT to design?
- What's the first thing you do when you join a company with no design system?
- How do you hire your first designer when you're a team of one?

### Staff/Principal Designer roles
- How do you raise the design quality bar across teams?
- Describe a time you created a design pattern that others adopted.
- How do you balance craft vs. velocity at scale?

### AI-first startups
- How should AI change the way we think about UX?
- Where does AI-generated UI fail? What's the designer's job there?
- What's a product you've seen use AI well in the interface layer?

---

## Closing Questions to Ask (always ask 2–3)

1. "What does the first 90 days look like for this role?"
2. "What's the biggest design problem you haven't solved yet?"
3. "How does design influence product decisions here — who's in the room?"
4. "What does success look like at 6 months?"
5. "What made the last person in this role succeed/not work out?"
