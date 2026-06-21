# Interview Guide — Aditya Chinchakar
*Founding Designer / Lead Designer / Staff Designer — AI-first startups, Series A–C*
*Last updated: May 2026*

---

## How to Use This Guide

Read sections 2 and 3 before every interview. Run section 5 out loud at least 3x/week. For portfolio rounds, run your 8-min walkthrough against a timer the day before.

---

## Table of Contents

1. [Design Fundamentals](#1-design-fundamentals)
2. [My Story](#2-my-story)
3. [Case Study Deep Dives](#3-case-study-deep-dives)
4. [AI Product Development & Aulys](#4-ai-product-development--aulys)
5. [Behavioural Questions (STAR)](#5-behavioural-questions-star)
6. [Design Critique](#6-design-critique)
7. [Whiteboard / Take-Home](#7-whiteboard--take-home)
8. [Questions to Ask Them](#8-questions-to-ask-them)
9. [Day-Before Checklist](#9-day-before-checklist)

---

## 1. Design Fundamentals

15 core concepts, plain English, with notes on when interviewers surface them.

---

**1. Design Thinking (Double Diamond)**
A two-phase process: first you diverge to understand the problem (Discover → Define), then diverge again to explore solutions (Develop → Deliver). The critical thing most designers miss is that the first diamond — getting the problem right — is where the real leverage is. Getting the wrong problem perfectly solved is still a failure.
*When interviewers test this:* "Walk me through your process" or "How do you approach a problem from scratch."

---

**2. WCAG 2.2 AA**
WCAG (Web Content Accessibility Guidelines) is a set of technical criteria for making digital products usable by people with disabilities. Level AA is the legal standard in most markets. It covers four principles: Perceivable (text alternatives, contrast), Operable (keyboard access, no seizure triggers), Understandable (clear language, predictable navigation), Robust (works with assistive tech). The 2.2 update added focus appearance requirements and removed some mobile-specific success criteria.
*When interviewers test this:* Any mention of accessibility, inclusive design, or a question about legal compliance risk.

---

**3. Design Systems & Token Architecture**
A design system is the shared language between design and engineering — components, patterns, and principles that teams use to build consistently. Token architecture is the layer underneath: semantic variables (like `color.action.primary`) mapped to raw values, so you can change a colour once and it propagates everywhere. The real value isn't the component library — it's the shared vocabulary that cuts down the "is this the right shade of blue?" conversation forever.
*When interviewers test this:* "Tell me about building a design system from scratch" or "How do you scale design across multiple teams."

---

**4. Information Architecture**
IA is the structural design of how information is organised and labeled so people can find what they need. The three core decisions: what objects exist (content inventory), how they're grouped (taxonomy), and how people navigate between them (wayfinding). Bad IA makes features invisible. Good IA makes complex systems feel obvious.
*When interviewers test this:* "Walk me through a complex navigation problem" or "How did you structure the IA for [product]."

---

**5. Nielsen's 10 Usability Heuristics**
A framework for evaluating interfaces without user testing. The 10 principles: visibility of system status, match with real world, user control, consistency, error prevention, recognition over recall, flexibility for experts, aesthetic minimalism, help users recover from errors, help and documentation. In practice, I use these as a mental checklist during critique — not a rigid audit tool.
*When interviewers test this:* Design critique rounds, "What makes a bad UI bad?" questions.

---

**6. Design Tokens vs. Components**
Tokens are the raw design decisions: colours, spacing, typography, border-radius. Components are the UI building blocks that consume those tokens. The distinction matters because tokens give you a single source of truth that both Figma and code can reference — when a component uses `spacing.md` instead of a hardcoded `8px`, a future rebrand becomes a one-file change instead of a codebase-wide hunt.
*When interviewers test this:* "How do you maintain design-code consistency?" or any system design question.

---

**7. Handoff & Design-Dev Collaboration**
Good handoff isn't about exporting assets — it's about eliminating ambiguity before a single line of code is written. That means: annotating edge cases (empty states, error states, overflow), documenting interaction behaviour that isn't visible in static screens, and being available during build rather than throwing specs over the wall. The best engineers I've worked with say "I could build this without asking a single question" as the bar for a good handoff.
*When interviewers test this:* "How do you work with engineers?" or any question about cross-functional process.

---

**8. Success Metrics for UX**
UX success lives at three levels: behaviour (are people actually using it?), satisfaction (do they feel good about it?), and business outcome (did it move the number that matters?). Behaviour metrics: task completion rate, time-on-task, error rate, drop-off. Satisfaction: NPS, CSAT, exit surveys. Business: conversion, retention, support ticket volume. The trap is measuring what's easy to measure — page views don't tell you if the design worked.
*When interviewers test this:* "How do you measure the impact of design?" or "How do you know if your design was successful?"

---

**9. Jobs To Be Done (JTBD)**
A framework for understanding user motivation at the goal level, not the feature level. The canonical form: "When [situation], I want to [motivation], so I can [outcome]." It forces you away from "users want a search bar" toward "users want to find their next project fast when they're under a staffing deadline." JTBD is most useful in early discovery when you need to cut through feature requests to find actual needs.
*When interviewers test this:* "How do you identify what to design?" or questions about research methodology.

---

**10. Accessibility Beyond WCAG (Inclusive Design)**
WCAG compliance is the floor, not the ceiling. Inclusive design means considering the full spectrum of human variation — permanent, temporary, and situational disabilities. Someone with a broken wrist has the same need as someone with a permanent motor impairment: they can't use a mouse right now. Designing for the edge cases almost always improves the experience for everyone. My rule: if a screen reader can navigate it fluently, the information hierarchy is probably correct.
*When interviewers test this:* Any deep accessibility question, "How do you design for diverse users," or critique rounds.

---

**11. AI UX Patterns**
Three problems come up in every AI product: latency (AI takes time, users don't wait), uncertainty (AI is probabilistic, users expect determinism), and error recovery (AI gets it wrong in unexpected ways). Solutions I've used: progressive reveal for latency (show structure immediately, populate cells sequentially); confidence signals anchored in action rather than probability (Verified / Suggested / Uncertain rather than 74%); undo + explanation for errors ("The AI suggested X because Y — change it?"). The designer's job in an AI product is to manage the trust relationship.
*When interviewers test this:* Any AI product question, "How should AI change UX?" or questions about your Infosys or Aulys work.

---

**12. Progressive Disclosure**
Show only what users need for the current task, reveal complexity on demand. Three layers: primary actions always visible; secondary actions one click away; advanced options in settings or power-user paths. The anti-pattern is showing everything at once "because someone might need it" — that's designing for the developer's mental model, not the user's task.
*When interviewers test this:* "How do you simplify a complex interface?" or critique rounds on feature-heavy products.

---

**13. Mental Models & Conceptual Models**
A mental model is what the user believes the system does. A conceptual model is what the designer intends. The gap between them is where confusing UI lives. My job is to design a conceptual model that matches users' mental models — not explain my conceptual model until they update theirs. When Simplifai users said "where do I even start?" about the canvas-based flow builder, they were telling me my conceptual model was wrong, not that they needed better documentation.
*When interviewers test this:* "Why did you change [design decision]?" or usability testing debrief questions.

---

**14. Design Critique Frameworks**
A structured critique separates the work from the person and grounds feedback in user goals rather than personal taste. My framework: start with the user goal and primary job-to-be-done, evaluate flow efficiency against that goal, assess visual hierarchy and cognitive load, check accessibility, identify worst-case states (empty, error, overloaded), then prioritise what to fix first and why. "I don't like this" is not feedback. "This pattern adds an extra step between the user's goal and the outcome" is.
*When interviewers test this:* Any critique exercise, "How do you give design feedback?" questions.

---

**15. Prototyping Fidelity Decisions**
High-fidelity prototypes are expensive and wrong — until you've validated the right questions with low-fidelity first. Rule: fidelity should match the question you're trying to answer. Testing navigation flow? Paper is fine. Testing whether copy lands emotionally? You need realistic content. Validating a microinteraction? You need code or Principle. The most common mistake: building high-fi too early, then anchoring on the visual rather than the behaviour.
*When interviewers test this:* "What's your prototyping process?" or any question about validation methodology.

---

## 2. My Story

---

### "Tell me about yourself" — 90-second version

"I'm a product designer with nine years of experience — I started in motion design, moved into UX, and eventually into AI product work where I also build what I design. The throughline is complex systems and real human limits: a 240,000-person talent marketplace at Infosys, an AI document platform for enterprise ops teams, and Aulys — an accessibility tool I designed and built solo.

Aulys is probably the clearest signal of where I'm headed. It's an AI-powered WCAG 2.2 checker for Figma — I directed AI for code execution while owning all the product decisions myself. TypeScript, Next.js, Vercel, deployed. 30 beta users, 500+ frames scanned, 4.8/5 satisfaction. Building it taught me that the founding designer skillset in 2025 isn't just craft — it's knowing how to direct AI to build what you can't build yourself yet.

I'm looking for a founding or lead designer role at an AI-first startup where I can own the design function, work close to product, and build something that matters."

---

### "Tell me about yourself" — 3-minute version

"I'm a product designer with nine years of experience. I started in motion design — two years doing animation and brand storytelling, which gave me a strong visual and narrative foundation. That foundation mattered more than I expected when I transitioned into UX.

From motion design I moved into UX at Keywordio, doing growth-focused design for SaaS — CRM dashboards, conversion flows, analytics products. I led a team of 5 designers and overhauled 12 dashboards. That's where I learned to connect design decisions directly to business metrics.

Then Simplifai — an AI document processing platform for enterprise. I was the senior designer owning the full product surface — no design system existed when I joined, support tickets were at 5+ per week from onboarding confusion. Over two years I rebuilt the onboarding, established the 50-component library, and ran 100+ user studies. Dev cycles got 42% faster after the design system shipped.

Then Infosys — enterprise AI tooling for the education sector. The scale changed: my work shipped to 10,000+ teachers and 50,000+ students. The hardest design problem was AI confidence — teachers were either over-trusting the outputs or dismissing them. Three rounds of testing, three different signal models, before we landed on Verified / Suggested / Uncertain, which got teacher acceptance from 41% to 74%. I also led TalentBridge — an internal talent marketplace for Infosys's 500,000-person organisation, solving the visibility problem where managers were hiring externally for skills that already existed internally.

Running alongside all of that: Aulys, an AI accessibility checker for Figma I designed and built solo. I directed AI to write the TypeScript while owning every product decision. 30 beta testers, 500+ frames scanned, 4.8/5 satisfaction. Full file audit in under 10 seconds.

I'm leaving Infosys because I want to own the design function completely — not one workstream within a large programme. I want to be upstream of product decisions, not downstream of them. AI-first startup, Series A to C, where design shapes the product."

---

### "Why are you leaving Infosys?"

"I had good work there — the Infosys AI tooling engagement was genuinely interesting, and TalentBridge is the kind of systems problem I find hard to walk away from. But I've been doing work that lives inside a larger programme. Design decisions get made upstream, I execute downstream. That's a fine arrangement for some people. For me, it means I'm not using 60% of what I'm capable of.

What I built on the side — Aulys — taught me what it feels like to own something completely. Problem identification, research, every product decision, directing the build, shipping it. I want that experience at full time. I'm not leaving for a pay increase or a title. I'm leaving because I want to work in an environment where design shapes product, not decorates it."

---

### "Why founding/lead designer roles?"

"Because the most interesting design work happens before the brief exists. In a founding or lead designer role I'm defining the design language, setting accessibility standards, hiring the first team, and sitting in rooms where product strategy gets decided. That's the work I'm drawn to.

I've done versions of it at every job — at Simplifai I was effectively the design lead even without the title. Built the system from scratch, ran crits, mentored a junior, presented to the CTO. At Infosys I was the go-to for AI interaction patterns across teams. With Aulys I was everything. The founding designer role just makes that scope formal.

The other thing: at a startup there's a real feedback loop between design decisions and business outcomes. If the onboarding I designed doesn't work, the company feels it immediately. That pressure keeps work honest."

---

### "Walk me through your career arc"

"I started in motion design — two years at Windows Film Production doing animation and branded campaigns, then a short stint at Green Earth Translogistics doing motion work for Shell Petroleum campaigns. That period built my visual foundation — frame-by-frame animation teaches you something about pacing and attention that static design doesn't.

The pivot to UX came at Keywordio. My motion background helped me see interaction design as animation with purpose — state transitions, feedback loops, microinteractions. At Keywordio I moved into full UX ownership: overhauled 12 CRM dashboards, restructured IA to cut data access time 29%, led a team of 5 designers. That's where I learned to connect design decisions to business metrics directly.

Simplifai was where I went deep on product design. B2B SaaS, enterprise clients, AI document processing. Two years, owned the full design function, built the design system from scratch. That's also where I made my biggest structural mistake — designed the IA for conditional branching logic without engineering input, required a significant backend refactor. Learned to run technical feasibility sessions before finalising IA on logic-heavy features.

Infosys was a shift to scale — designing AI tooling for education, and eventually TalentBridge. The rubric engine work is probably the most technically complex UX problem I've tackled. Work shipped to 10,000+ teachers and 50,000+ students. TalentBridge was the most politically complex — four divergent personas, a 500K-person org, outcomes that were hard to measure because internal mobility data was siloed.

Running alongside all of that: Aulys. Designing and building a product completely, solo. That's the most direct expression of where I want to go."

---

### "What makes you different from other senior designers?"

"Three things I don't see often combined.

First: I can build. Not at a senior engineer level, but enough. TypeScript, Next.js, Vercel deploys. I can read a diff, fix a bug, and direct AI to write code I can verify. That changes the handoff conversation entirely — I've lived in the gap between design and engineering from both sides.

Second: WCAG is not a checklist for me. I designed Aulys to solve the accessibility audit problem for designers. I've built the tooling. I understand the edge cases — RTL typography, CJK character spacing, SMS delivery failure rates in rural India. Most designers treat accessibility as a last-pass QA step. I treat it as an upstream design constraint.

Third: I have a track record on AI product problems specifically — not just AI-assisted design, but designing the UX of AI outputs. The confidence signal problem, the latency problem, the trust calibration problem. My Infosys work shipped to 50,000+ students and 10,000+ teachers. There aren't that many designers with AI work at that scale yet, and fewer still who built the tooling on the side."

---

## 3. Case Study Deep Dives

---

### Aulys

**60-second pitch**

"Aulys is an AI-powered WCAG 2.2 accessibility checker for Figma. I designed and built it solo — I directed AI to write the TypeScript while owning all product decisions. Before I built it, I ran 8 user interviews with designers at Infosys and freelancers. 7 out of 8 did zero accessibility checks before handoff — not because they didn't care, but because manual WCAG auditing takes 2 hours per file. Aulys does it in under 10 seconds and surfaces one-click AI fixes. 30 beta testers, 500+ frames scanned, 4.8/5 satisfaction."

---

**8-minute walkthrough structure**

*[0:00–1:00] Context & problem*
"WCAG 2.2 compliance isn't optional for enterprise companies — $250K is the average ADA lawsuit settlement, and 4,600 digital accessibility lawsuits were filed in 2023 in the US alone. But Figma has no native accessibility checker. I ran 8 user interviews and built a 7-step friction map of how designers currently audit accessibility. The biggest drop-off: step 3, manually checking colour contrast across 40+ frames. That step alone kills any chance of making auditing a routine habit."

*[1:00–2:30] Research insight & product hypothesis*
"7 out of 8 designers did zero WCAG checks before handoff. Not laziness — the process was genuinely prohibitive. The insight: if auditing takes 2 hours, it will never happen before handoff. If it takes 10 seconds, it might become a save-file habit. The hypothesis: drop the friction low enough and the behaviour changes."

*[2:30–4:30] Design decisions*
"Three key decisions. One: audit the whole file, not just selected frames — the 'audit one component' model requires designers to know what they're checking, which assumes WCAG literacy they don't have. Two: surface issues with one-click fix suggestions — testers cited this as the feature that made them act on violations rather than log and ignore them. Three: frame violations in plain language, not WCAG criteria codes — '2.4.3 Focus Order' means nothing to a product designer; 'This button can't be reached with a keyboard' does."

*[4:30–6:00] Build process*
"I directed AI to write the Figma Plugin API integration — TypeScript. I reviewed every diff, caught integration errors, wrote the specification for how violations should be structured in the UI. I deployed the backend on Vercel. I didn't write every line — but I made every product decision and verified every output. That distinction matters."

*[6:00–7:00] Results*
"30 beta testers active. 500+ frames scanned. 4.8/5 satisfaction. One tester quote that mattered: 'It caught 14 issues in my file I didn't know existed.' RTL and CJK multilingual support validated — Arabic, Hebrew, Japanese, Chinese. An edge case most accessibility tools skip entirely."

*[7:00–8:00] What I'd do differently + what's next*
"Onboarding. V1 assumed WCAG literacy that beta testers didn't have. I'd add a guided first audit with annotated results before letting users explore freely. Phase 2 is a CI/CD SaaS platform — baking accessibility into deployment pipelines, not just the design stage. About 50% built."

---

**5 hardest attack questions**

**Q: How do you know it actually helps designers?**
"30 beta users, 4.8/5 satisfaction in the exit survey. The most actionable signal came from the feature ranking — testers consistently ranked the one-click fix suggestions as the feature that changed their behaviour. Before Aulys, they'd note violations and forget them. The fix suggestion gave them an action to take immediately. That's a behaviour change, not just a satisfaction score."

**Q: What's the business case? WCAG feels niche.**
"It's not niche to a legal team. $250K is the average ADA lawsuit settlement in the US. 4,600 digital accessibility lawsuits were filed in 2023. Enterprise Figma customers — design teams at banks, healthcare companies, government contractors — have real legal exposure. Aulys sells into that fear and turns compliance into a workflow habit. The target buyer isn't a designer. It's a VP of Engineering who got a legal notice."

**Q: You 'directed AI for development' — can you actually code?**
"I write TypeScript. I read diffs and catch errors. I fixed bugs in the plugin's frame traversal logic when the AI's implementation missed nested component instances. I deployed to Vercel. I'm not pretending to be a senior engineer — my edge is knowing exactly what to ask AI to build, how to verify the output, and where to apply design constraints the AI can't infer on its own. That combination — product thinking plus build capability plus quality verification — is the founding designer skillset for 2025 and beyond."

**Q: What would you do differently?**
"Onboarding. The first-run experience assumed users knew what WCAG violations looked like. Several beta testers opened the plugin, saw 'Colour Contrast (AA)' flagged in red, and didn't know if that was catastrophic or minor. V2 needs a guided first audit — here's what we found, here's what it means, here's how serious each one is — before letting users explore freely. I should have caught that in user testing before launch."

**Q: How did you validate the problem before building anything?**
"8 user interviews with designers — Infosys colleagues and freelancers. My screening question was: 'How do you check accessibility before handoff?' 7 out of 8 said they didn't — and when I pushed on why, none of them said they didn't care. They all said the manual process was too slow for their sprint cycle. That gap — caring about it but not doing it because the friction was too high — was the exact space Aulys needed to fill."

---

**NDA handling**
No NDA applies to Aulys — I built it.

---

### TalentBridge (Infosys)

**60-second pitch**

"TalentBridge is an internal talent marketplace I designed at Infosys. The problem: a project manager in Bangalore needs someone with React and financial domain experience available in 3 weeks. That person exists in Mumbai. There's no system that surfaces them. The PM posts externally instead. This happens thousands of times a year — not from lack of talent, but from a design problem. The internal HR system was built for record-keeping, not for managers who think in terms of skills, availability, and project fit. I designed TalentBridge to fix that for a 500,000-person organisation."

---

**8-minute walkthrough structure**

*[0:00–1:30] Problem framing*
"When I started, internal mobility at Infosys was low. Not because people didn't want to move — but because there was no discoverability. Employees were tagged by role title in the HR system, not by actual capabilities. A project manager couldn't search for 'React developer with fintech domain experience available Q3' — that query had no interface.

The business cost: external hires for roles that could have been filled internally, lower retention among high performers who couldn't find interesting projects, and HR overhead managing what should have been self-service."

*[1:30–3:00] User research & 4 personas*
"The first thing I did was define the user population. This wasn't a single-persona product — it was four completely divergent mental models in one system.

Employee: wants career visibility. Their primary need is 'I want the right project to find me' — not active search, passive discoverability.
Manager: wants to staff a project in 72 hours. Their primary need is skill search with availability filters.
HR/Admin: wants bench visibility and compliance. They're not matching people — they're managing unallocated headcount and ensuring data accuracy.
Admin: data integrity. They need to audit skill tags and flag stale information.

Designing divergent flows for each persona, then finding the convergence points in shared infrastructure — that was the core IA challenge."

*[3:00–5:00] Design decisions*
"Three decisions that defined the architecture. One: separate search from profile — the skill search for managers needed to be a dedicated surface, not a modified HR record view. The mental model difference is massive: HR thinks in records, managers think in queries.

Two: employee-controlled skill visibility — employees had to opt in to being discoverable. Without that, the system was a surveillance tool, not a career tool. Getting that consent model right was critical for adoption.

Three: skill tagging at the competency level, not the role level — instead of 'Senior Developer', tags like 'React / 3 years / Fintech domain / Available Q3'. The HR system used role taxonomy; TalentBridge needed a skills taxonomy. Building that translation layer was a significant data design problem."

*[5:00–6:30] Process highlights*
"I ran design sprints with cross-functional teams — HR operations, product managers, and actual users from three Infosys delivery units. The most useful session was watching a project manager try to use the existing HR portal to find a person. They gave up after 4 minutes. That session video became the problem statement for every stakeholder review."

*[6:30–7:30] Outcome*
"Internal mobility increased post-pilot. I can't share exact numbers — NDA. The proxy metric I can share: HR leadership approved phase 2 budget after the pilot concluded. Separately, on the Imagine Learning side: my AI tooling work reached 10,000+ teachers and 50,000+ students — that's the scale at which these design decisions compounded. When leadership approves the next phase and the product reaches 50K users, the pilot worked."

*[7:30–8:00] What I'd do differently*
"The skill taxonomy. We built it top-down — a committee defined the competency list. Post-pilot, employees were tagging themselves with skills that weren't in the taxonomy, which created a long-tail tagging problem. I'd have done bottom-up taxonomy mining from existing CVs and project proposals first, then validated the taxonomy with a sample of users before locking it."

---

**5 hardest attack questions**

**Q: How do you design for 500,000 users?**
"You don't design for 500,000 — you design for 4 personas. I mapped each persona's primary job-to-be-done and designed divergent flows before finding convergence in the shared backend. The 500,000 number matters for scale decisions — performance, language support, edge case volume — but the UX decisions were made against 4 archetypes, not a statistical average."

**Q: What was the measurable outcome?**
"Internal mobility increased after the pilot. The number I can point to publicly: HR leadership approved phase 2 budget. That's a meaningful signal — enterprise HR teams don't fund phase 2 on a product that didn't move their core metric. The specific mobility numbers are under NDA. If you want the full detail, I'm happy to walk through the methodology in a confidential context."

**Q: Enterprise design looks boring. How do you keep it from being lifeless?**
"Enterprise design isn't boring — it's constrained. And constraints are interesting if you're solving for the right thing. Within Infosys's design system I had clear degrees of freedom: empty states, the first-run experience, micro-interactions on search results, onboarding copy. The best enterprise work isn't flashy — it reduces cognitive load until people stop noticing the UI. A manager finding a qualified person in 3 minutes instead of 20 is a better outcome than a beautiful dashboard they have to learn for a week."

**Q: How did you handle conflicting needs across the 4 personas?**
"By separating the surfaces. The employee view and the manager view don't need to be the same screen. They share backend data but have completely different interaction paradigms. The critical convergence point was the profile — one object that means different things to different actors. The employee sees it as 'my career card.' The manager sees it as 'a candidate profile.' HR sees it as 'a bench record.' Designing one object that serves three mental models without confusing any of them was the hardest single design problem on the project."

**Q: What if someone doesn't want to be found?**
"Opt-in discoverability was a core design decision from week one. Employees controlled which skills were visible and which projects they were open to. The consent model wasn't a legal checkbox — it was a product lever for adoption. If employees felt the system was watching them, they'd poison the data by under-tagging their skills. Making discoverability opt-in gave them agency and gave us accurate data."

---

**NDA handling**
"Full process documentation — personas, wireframes, IA maps, component decisions, and post-launch analytics — available in a confidential walkthrough. I'm not hiding the work; I'm respecting a legal agreement. If you're serious about the role, I'm happy to schedule that separately."

---

### Simplifai

**60-second pitch**

"Simplifai is an AI document processing platform for enterprise. When I joined, the product was generating 5+ support tickets per week from onboarding confusion, and average time-to-first-value was 3 days. I joined as the senior designer owning the full product surface — no design system, one junior, 5+ enterprise clients. Over two years I rebuilt the onboarding, established the component library, and got dev cycles 42% faster. CSAT improved 20%. The before: enterprise ops managers raised tickets for routine workflow changes. The after: they configured, monitored, and debugged automations without touching engineering."

---

**8-minute walkthrough structure**

*[0:00–1:30] The before state*
"When I joined, Simplifai had a real product-market fit signal — enterprise clients were using it — but the experience was rough. Onboarding took 3 days average before a client could run their first document flow. 5+ support tickets per week for things that should have been self-service. And the UI was built component-by-component by engineers without a design system, which meant inconsistent patterns everywhere.

My mandate: fix the onboarding, reduce support burden, and establish design consistency."

*[1:30–3:30] Research & insight*
"I ran 6 user interviews with enterprise ops managers — the primary persona. The insight that changed my approach: these users were not technical. They thought in business process terms, not software terms. When I showed them the existing UI — a blank canvas with nodes and connectors — they said 'Where do I even start?' That wasn't a learning problem. That was a conceptual model problem. The canvas assumed users thought about automation as a graph. They thought about it as a checklist.

I scrapped the canvas in sprint 4 and replaced it with a linear step-builder with smart defaults. Adoption in that cohort jumped 28% within 3 weeks of the switch."

*[3:30–5:30] Design decisions*
"The big three. One: step-builder instead of canvas. Progressive disclosure — start with the most common flow structure, unlock advanced branching later. Two: redesigned onboarding as a guided configuration — instead of starting with a blank slate, users were walked through their first automation with annotated steps and pre-filled examples. Three: design system. I built the component library from scratch — semantic token architecture, contribution guidelines, 2-day workshop with the engineering team to drive adoption. That's where the 42% dev cycle improvement came from — engineers stopped making component decisions from scratch on every feature."

*[5:30–7:00] Design leadership*
"As the only senior designer, I owned more than the pixels. I ran weekly design crits with 3 product designers and 2 frontend engineers — introduced a feedback rubric covering usability, visual hierarchy, accessibility, and business alignment. Revision cycles dropped from 3+ rounds to an average of 1.4. I also mentored a junior designer who joined in Q2 2022 — structured 60-day onboarding, shipped their first solo feature within 10 weeks."

*[7:00–8:00] Results & reflection*
"42% faster dev cycles. 20% CSAT improvement. 100+ user studies conducted over the engagement. The biggest mistake: I designed the IA for conditional branching logic entirely in isolation — no engineering input. When we handed it off, the nested-condition model required a significant backend refactor. Cost us 2 weeks. I'd now run a technical feasibility session with the eng lead before finalising IA on any logic-heavy feature."

---

**5 hardest attack questions**

**Q: What was the actual before state?**
"5+ support tickets per week for routine workflow configuration changes. 3-day average time-to-first-value — meaning enterprise clients waited 3 days before they could run their first document flow. That's not just a UX problem; that's a churn risk. Enterprise clients paying for software that takes 3 days to set up are very close to churning in the first 90 days."

**Q: How did you measure success?**
"Two primary metrics. Support ticket volume — trackable via the support system, directly attributable to UX changes. Time-to-first-value — tracked from account creation to first completed automation run via Mixpanel. Secondary: CSAT scores from post-session surveys, and the qualitative signal from enterprise client success calls where the CS team would flag whether clients needed hand-holding or were self-sufficient."

**Q: What did you cut from scope?**
"Advanced settings and power-user configuration paths. There was pressure to build everything at once — clients were requesting features on top of features. I pushed to define the primary job-to-be-done for the core persona and ruthlessly defer anything that served less than 20% of sessions. Advanced settings got moved to a power-user path accessible through a gear icon — present for people who need it, invisible for people who don't. That decision alone reduced the cognitive load of the first-use experience significantly."

**Q: Why did you scrap the canvas?**
"Usability testing. Not theory. I watched 4 non-technical users open the canvas and immediately ask 'where do I start?' None of them attempted to place a node in the first 5 minutes — they were all reading the screen trying to understand the mental model. The canvas is the right paradigm for technical users who think in graphs. Enterprise ops managers think in sequences: step 1, step 2, step 3. The linear step-builder matched their existing mental model. Adoption jumped 28% in 3 weeks post-switch."

**Q: You built the design system — why didn't engineering resist?**
"Two things. I ran a 2-day design system workshop with the engineering team before we formally launched the library — not to present it to them, but to build it with them. Their contributions shaped the component API decisions. By the time we launched, engineers felt ownership of the system, not compliance with it. The second thing: I framed it in engineering terms. Not 'here's how the UI looks' but 'here's how you'll stop making spacing decisions from scratch on every feature.' The 42% cycle time improvement was their metric, not mine."

---

**NDA handling**
No NDA on Simplifai — it's publicly documented. Full case study at adityachinchakar.com.

---

### MedSecure

> **Framing note:** MedSecure is a speculative design project — a concept I designed targeting India's ABHA digital health ecosystem. The pilot data reflects a research-backed simulation, not a live deployment I personally ran. In interviews: be clear about this upfront, then talk about the design decisions. Interviewers respect honest framing far more than they respect inflated claims.

**How to introduce it:**
"MedSecure is a speculative product I designed — a concept for a blockchain-secured digital health record system for India's ABHA ecosystem. I used a research-backed pilot model to validate the design decisions. The numbers come from that model. I'll be clear when I'm citing simulated data versus live user feedback."

---

**60-second pitch**

"India has a fragmented healthcare record problem — a farmer in rural UP and a professional in Mumbai both carry paper records between hospitals, resulting in duplicate diagnostics, medication errors from missing allergy history, and a system that costs patients money they can't afford. I designed MedSecure as a concept for a unified, patient-controlled health record using India's ABHA ID infrastructure. The design was validated against a pilot model across 3 hospitals and 2 PHCs. The headline result: 34% reduction in medical errors when complete medication history is available at point-of-care."

---

**8-minute walkthrough structure**

*[0:00–1:30] Problem framing*
"55 million Indians are pushed below the poverty line annually by preventable healthcare costs — primarily from duplicate diagnostics and emergency readmissions that could have been avoided with a complete medical history. The same ₹800 blood test gets run 4 times at 4 different hospitals because there's no shared record. I started from there."

*[1:30–3:00] Research & personas*
"Two primary personas with very different constraints. Divya, 65, a farmer in rural Maharashtra — feature phone, low SMS reliability on BSNL, primary language Marathi. Arjun, 28, a software engineer in Delhi — smartphone, comfortable with apps, used to digital authentication. The design challenge: one system that works for both without asking either to compromise.

Key research finding: in rural areas, OTP-based authentication was the failure point. BSNL SMS delivery averaged 4–8 minutes. By the time the code arrived, users had abandoned the flow. That informed the V2 fallback."

*[3:00–5:00] Design decisions*
"Three decisions that mattered. One: patient-controlled consent with CareCircle — family members could be granted view access for elderly or rural patients who needed a proxy guardian. The consent model took 3 rounds to get right: who can grant access, who can revoke it, and what happens when a patient is unconscious.

Two: ABHA ID as the primary authentication layer — no new login, no new password. Patients already had ABHA IDs from the government scheme. Meeting users where they were.

Three: 8 Indian languages supported — Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, English. Healthcare is not a context where 'just use English' is acceptable."

*[5:00–6:30] The V1 failure*
"V1 enrollment assumed reliable OTP delivery. In the pilot model, 30% of rural users on BSNL networks failed first-attempt enrollment because of SMS delays. We had over-indexed on the technical architecture and under-indexed on last-mile connectivity. V2 added a QR-scan enrollment path at PHC kiosks — no SMS dependency. Enrollment failure dropped from 30% to under 4%. The fix came from watching one rural patient try to enroll 4 times in a session and give up. That observation mattered more than any metric."

*[6:30–7:30] Results*
"Against the pilot model: 34% reduction in medical errors — attributed to complete medication history at point-of-care. ₹6,200 average patient savings per year from eliminated duplicate diagnostics. Zero data breaches in the permissioned Hyperledger architecture. 1,200 simulated patient onboardings."

*[7:30–8:00] What I'd do differently*
"The consent model. CareCircle was designed in week 3 and tested only in week 10. By then, the architecture was committed. In user testing we found that a 65-year-old farmer in Pune had completely different expectations about family access than a 28-year-old in Delhi. The 'proxy guardian' edge case — a patient who wants a family member to have emergency access but not routine access — was a late discovery. I'd run consent-model interviews in the first research sprint, not the last."

---

**5 hardest attack questions**

**Q: This is a speculative project, not a live product. What does it prove?**
"It proves I can design through ambiguity, identify real systemic constraints — BSNL SMS failure rates, ABHA ID infrastructure, 8-language support requirements — and make decisions that would hold up in a real build. The design decisions I made for MedSecure are the same decisions a founding designer at a healthtech startup would need to make. The speculative framing is honest. The design thinking is real."

**Q: What do the 34% medical error reduction numbers actually mean?**
"They're derived from a research-backed pilot model, not a live production deployment. The baseline comes from published Indian hospital error rate data. The reduction assumption is benchmarked against comparable digital health record implementations in Brazil and Kenya that had peer-reviewed outcomes. I'll never claim I personally reduced medical errors for 1,200 patients — but the causal logic of the design is grounded."

**Q: How did you design for users with very low digital literacy?**
"By watching. User research with rural personas revealed that text-heavy onboarding failed immediately. I moved to icon-first navigation, voice prompts in regional languages for critical actions, and a QR-scan enrollment fallback that completely removes the SMS dependency. The constraint of designing for a 65-year-old farmer on a feature phone made the product better for the 28-year-old in Delhi too — that's the inclusive design principle in practice."

**Q: What's the hardest design problem you faced on MedSecure?**
"The CareCircle consent model. Health record access is not a simple permission toggle. You have patients who want a family member to see records in an emergency but not routinely. Patients who want their doctor to add records but not view historical ones. Patients with no family and no guardian. I designed a 3-tier consent system — emergency access, routine view access, and record-write access — that could be controlled independently per person. Getting the mental model for that across in a mobile UI without legal language was the hardest information design problem on the project."

**Q: Why blockchain? Isn't that overkill?**
"The choice was permissioned Hyperledger, not public blockchain. The reason: India's healthcare system involves multiple institutional actors — hospitals, PHCs, pharmacies, insurance companies — who don't trust each other's record systems but need to read from a shared ledger. A centralised database means someone owns it and everyone else has to trust them. A permissioned ledger gives institutional actors read access without any single party controlling the master record. That's a trust architecture decision, not a technology trend decision."

---

**NDA handling**
No NDA — this is a speculative portfolio project. Be clear it's speculative if asked.

---

## 4. AI Product Development & Aulys

---

**Q: What does AI-directed development mean, practically?**

"It means I'm the product brain, the AI is the execution engine, and I'm the quality filter between them. In practice on Aulys: I wrote detailed specifications for how the Figma Plugin API should traverse nested component instances and report violations. The AI wrote the TypeScript. I read the diffs, caught a logic error in how the plugin was handling autolayout frames, described the fix, and the AI revised it. I ran the plugin against my own Figma files to catch edge cases — RTL text direction, CJK character spacing, missing aria labels on icon-only buttons.

The skill isn't prompting. The skill is knowing when the output is wrong, describing why it's wrong precisely, and directing the correction. That's a product design skill applied to code output."

---

**Q: How should AI change the way we think about UX?**

"AI changes three things. First, latency is now a first-class UX constraint, not a loading spinner problem. Users don't wait 8 seconds for a spinner. They need progressive disclosure — show structure immediately, populate content as it arrives. The rubric engine at Infosys: show the skeleton table immediately, fill cells sequentially. Drop-off during generation went down 55%.

Second, confidence communication is a new design problem. AI outputs are probabilistic. Users expect determinism. You can't show raw percentages — teachers either rubber-stamp an 80% confidence score or dismiss a 60% one. We tried three different signal models before landing on Verified / Suggested / Uncertain. Teacher acceptance went from 41% to 74%. The language anchored the signal in pedagogical action, not probability.

Third, error recovery has to be designed explicitly. When AI gets something wrong — and it will — the user needs to understand why, be able to correct it, and trust the system enough to use it again. 'The AI suggested this because X — here's how to change it' is a fundamentally different experience from a silent wrong answer."

---

**Q: Where does AI fail in design workflows?**

"Three specific failure modes I've seen.

One: AI generates plausible-looking designs that break the system. A generated component might look correct in isolation but violate the token architecture, use a non-existent spacing value, or ignore a constraint that exists because of an engineering limitation. AI doesn't know your system. You have to verify against it.

Two: AI hallucinates constraints. When I asked AI to implement WCAG 2.2 contrast checking, the first implementation was using the wrong contrast ratio formula for small text vs. large text. It was confident, it looked right, and it was wrong. Knowing enough to verify the output requires domain expertise the AI doesn't have.

Three: AI can't infer the 'why.' It can generate a component that satisfies a spec but doesn't know that this pattern exists because of a specific accessibility constraint, or that this flow was simplified because user testing revealed that non-technical users couldn't navigate the alternative. The context that makes a design decision correct is in my head, not in the spec."

---

**Q: How deep is your WCAG expertise — can you audit a design?**

"Yes. I'll give you a concrete answer. WCAG 2.2 AA requires:
- Colour contrast: 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt bold), 3:1 for non-text UI elements
- Focus indicators: must have 3:1 contrast ratio against adjacent colours, minimum 2px perimeter outline — new in 2.2
- Keyboard operability: every interactive element must be reachable and operable via keyboard alone
- Touch targets: minimum 24×24px with adequate spacing — new in 2.2
- No keyboard traps: once you tab into a component, you must be able to tab out

I built Aulys to automate the most time-consuming parts — colour contrast checks across all text instances in a file. The parts that still require human judgment: aria label quality ('button' vs. 'Submit payment'), logical focus order in complex layouts, and whether motion can be disabled for users with vestibular disorders."

---

**Q: What's the Aulys validation story — how rigorous was it?**

"8 user interviews before I wrote a single screen. I mapped a 7-step friction map of the current WCAG auditing process — from opening a file to submitting a dev handoff note about violations. The critical finding: designers were dropping out at step 3 (manual contrast checking) because it required inspecting each text layer individually in Figma. That was the step I automated first.

Beta testing: 30 designers, 500+ frames scanned, 4.8/5 satisfaction. I tracked feature usage via plugin analytics — the one-click fix suggestion had 3× higher interaction rate than any other feature. That's the signal that the behaviour change was happening: people weren't just logging violations, they were fixing them in the same session."

---

## 5. Behavioural Questions (STAR)

*Rule: never say "we" without immediately following it with what specifically I did.*

---

### Q1. Tell me about a time you owned a product from 0 to launch with no design team.

**Situation:** I wanted to build an accessibility tool for Figma designers. The problem was clear from my research — 7 out of 8 designers did zero WCAG checks before handoff because the manual process took 2+ hours. I had no team, no PM, no engineering support. Just a design background, a growing ability to direct AI for code, and six months of evenings.

**Task:** My responsibility was everything — research, product strategy, UX, UI, directing the TypeScript build, testing, deployment. No one to delegate to or escalate to.

**Action:** I started with 8 user interviews to validate the problem, not assume it. Built a 7-step friction map of the current auditing process to find the highest-leverage automation point. Designed the plugin UI with three principles: audit the whole file, not just selected frames; surface plain-language fixes, not WCAG criteria codes; make fixing a one-click action. Directed AI to write the Figma Plugin API integration, reviewed every diff, caught integration errors, deployed on Vercel.

**Result:** 30 beta testers active. 500+ frames scanned. 4.8/5 satisfaction. The one-click fix suggestion had 3× higher interaction rate than any other feature — the design change I was most uncertain about became the feature that changed user behaviour.

*What makes this land: it's concrete about what "owning it" actually means — specific research steps, specific build decisions, specific results.*

---

### Q2. Describe a time you had to make a major design decision with very little data.

**Situation:** When I was redesigning Simplifai's flow builder, I had usability testing data showing that the canvas model was failing — users couldn't orient themselves. I had 4 user sessions. That's not a large sample.

**Task:** I had to decide whether to scrap the canvas entirely and rebuild with a linear step-builder, or iterate on the canvas with better onboarding. Scrapping meant a 4-week sprint. Iterating meant 1 week. The engineering team was asking for a decision.

**Action:** I looked at what the data actually showed — not just the "where do I start?" confusion, but the task completion rate. Zero out of 4 users completed a flow in the canvas model. That's a qualitative signal, not a statistically significant sample, but a 0% task completion rate is hard to argue with. I made the call to rebuild as a linear step-builder, documented the decision log (problem, options, decision, success metric), and presented it to the VP of Product with the data I had and the explicit caveat that I was making a directional call, not a certainty.

**Result:** 28% adoption increase in the cohort 3 weeks after the step-builder shipped. The decision was right.

*What makes this land: honest about the data limitation, but shows decision-making logic rather than waiting for certainty that never comes.*

---

### Q3. Tell me about a time you pushed back on a founder or PM — and were right.

**Situation:** At Simplifai, the PM wanted to add an advanced conditional branching feature to the Flow Builder before we'd fixed the first-use experience. The reasoning: three enterprise clients had requested it, and it was in the roadmap. My position: we had a 3-day time-to-first-value problem. Building power features on top of a broken onboarding was going to accelerate churn, not prevent it.

**Task:** I had to make the case to the PM and VP of Product to defer the feature and prioritise onboarding.

**Action:** I prepared a decision memo — one page, covering: the current state (5+ tickets/week, 3-day time-to-value), what the enterprise client requests were actually asking for (more control, not specifically conditional branching), and the risk of building advanced features before the foundation was solid. I also did a quick retention analysis with the CS team — the clients requesting branching were all in months 3–6 of their contract. The churn risk was concentrated in months 0–2. That reframed the priority.

**Result:** PM agreed to defer conditional branching one sprint. We shipped the onboarding redesign first. Time-to-first-value dropped. Support ticket volume dropped. When we shipped conditional branching a sprint later, the clients who'd requested it were in a much better position to use it because the foundation was solid.

*What makes this land: the pushback is backed by data, not preference. And the outcome validates it without being smug about it.*

---

### Q4. Tell me about a time you pushed back and were wrong. What did you change?

**Situation:** Early in the TalentBridge project I pushed back on the idea of building a separate admin dashboard for HR. My argument was that HR's needs could be met through filtered views of the main search interface — a dedicated admin surface felt like scope creep.

**Task:** Defend my position or change it.

**Action:** I ran a 2-hour session with 3 HR operations managers and watched them try to use the filtered search interface to do their jobs. They needed to see allocation status across entire delivery units — 50+ people at once, with compliance flags. The search paradigm was completely wrong for that use case. They weren't searching for individuals; they were managing populations. My filtered-view approach would have forced them to run 50 separate queries.

**Result:** I reversed my recommendation. We built the admin dashboard. It shipped to positive reception from HR. What changed in my process: I now always do a job-to-be-done session with every persona before making IA decisions that affect them, even if I think I understand their needs. I didn't know enough about HR's actual workflow. I thought I did.

*What makes this land: shows genuine intellectual humility without being performatively self-flagellating.*

---

### Q5. Describe a time you had to ship something imperfect. How did you handle the tradeoff?

**Situation:** At the end of a sprint at Simplifai, we had a deadline to demo the new onboarding flow to two enterprise prospects. The flow worked for the primary path — document upload, classification, first automation. But the error states were unfinished. If a document failed to classify, the UI showed a generic error with no guidance.

**Task:** Decide whether to ship with incomplete error states or push the demo.

**Action:** I did a quick risk assessment: how likely was a classification failure in a live demo? I checked with the engineering team — classification accuracy on standard business documents was 94%. The demo files were standard. Risk was low. I shipped the primary path, added a note in the demo script to avoid uploading non-standard file types, and scheduled the error state work for the following sprint as a tracked item.

**Result:** Demo went well. No classification failures. Error states shipped in the next sprint. The decision was correct — shipping an imperfect product that serves 94% of cases was better than delaying a demo for a 6% edge case scenario that wasn't going to appear.

*What makes this land: shows calculated risk assessment, not panic or perfectionism.*

---

### Q6. Walk me through how you approach building a design system from scratch.

**Situation:** When I joined Simplifai, there was no design system. Components were being built per-feature by engineers. Visual inconsistency was everywhere — three different button styles, four spacing values that were close to each other but not the same.

**Task:** My job was to establish a design system that both the design team and engineering team would actually use.

**Action:** I started with a component inventory — a full audit of what existed in production code. Not in Figma, in code. That surfaced the actual inconsistencies rather than the theoretical ones. Then I defined the token architecture: semantic tokens (color.action.primary, spacing.md) mapped to raw values, so changing a brand colour was a one-file operation. I built the component library in Figma with documented states and specs. Then — this was the part most designers skip — I ran a 2-day workshop with the engineering team. Not to present the system to them. To build it with them. Their feedback shaped the component API decisions. By launch, engineers felt ownership.

**Result:** 42% faster dev cycles post-adoption. Revision cycles dropped from 3+ rounds to 1.4 average because engineers and designers were now making decisions against the same reference.

*What makes this land: the process is concrete and includes the engineering adoption step, which most designers omit.*

---

### Q7. Tell me about the most complex component you've ever designed. Why was it hard?

**Situation:** The CareCircle consent component in MedSecure — a permission management interface for patient health record access. It had to handle three distinct permission types (emergency access, routine view access, record-write access) independently per person, work for users with very low digital literacy in rural India, and be operable in 8 Indian languages.

**Task:** Make a triple-permission object comprehensible to a 65-year-old farmer and a 28-year-old in Delhi without producing two different UIs.

**Action:** Three rounds of design. V1 used toggles per permission type — three switches per person. User testing: rural participants couldn't distinguish between the three toggle types. V2 used a scenario-based model — "Should [name] be able to see your records in an emergency?" Binary yes/no per scenario. Much clearer, but lost granularity for users who wanted partial access. V3: a tiered access card — one card per person, three tiers clearly labelled with icons + plain-language descriptions, with a simple slider between None / Emergency-only / Full access. That version tested correctly with both personas.

**Result:** Consent model shipped in V2. The component handled the proxy guardian edge case without requiring users to understand what 'proxy guardian' means.

*What makes this land: shows iteration, shows testing, shows a real constraint (low digital literacy + 8 languages) that made it genuinely hard.*

---

### Q8. Describe a time you improved accessibility in a product not designed for it.

**Situation:** At Infosys, the AI rubric engine had been built for several sprints before I joined. It had zero accessibility considerations — no keyboard navigation, colour contrast failures on the confidence signal badges, and the AI output table had no semantic structure for screen readers.

**Task:** Retrofit WCAG 2.2 AA compliance into a partially-built product without breaking the existing architecture.

**Action:** I ran an axe-core audit first to get a baseline — 47 violations across the main screens. Prioritised by severity and frequency: colour contrast failures on the most-used surface first, then keyboard traps in the rubric table, then screen reader structure. For colour contrast: worked with the engineering team to migrate the confidence signal badges from hardcoded hex values to semantic tokens that I'd already defined to meet AA. For the rubric table: proposed a semantic table restructure with proper header scope attributes — the engineering team needed a half-day to implement, not a sprint. I scheduled a follow-up audit at the end of the sprint. Violations dropped from 47 to 6, and the 6 remaining were all low-severity.

**Result:** The product went from no WCAG consideration to near-AA compliance in one sprint. The critical lesson: if you define a semantic token architecture early and enforce colour use through tokens, a11y remediation doesn't require rework — it requires one token value change.

*What makes this land: specific violation count, specific methods (axe-core audit), specific outcomes.*

---

### Q9. How have you used AI tools to accelerate design work? Give a concrete example.

**Situation:** Building Aulys alone meant I had to cover design and build. I had design expertise. I had limited but growing engineering capability. AI was the multiplier.

**Task:** Ship a working Figma plugin as a solo designer-builder.

**Action:** I used AI at three points. One: TypeScript generation. I wrote detailed specs for the plugin's frame traversal logic and the violation data structure. The AI wrote the implementation. I reviewed diffs, caught a logic error in how it was handling autolayout nesting, described the fix precisely, and the AI revised it. Two: edge case identification. I used AI to brainstorm WCAG edge cases I might have missed — that's where the RTL text direction and CJK character spacing requirements surfaced. Three: copy generation for violation descriptions. I gave the AI WCAG criteria code and asked for plain-language descriptions at a 6th-grade reading level. Took 20 minutes instead of 2 days.

**Result:** Shipped a working plugin in a fraction of the time it would have taken writing all the TypeScript myself. The constraint wasn't AI capability — it was my ability to verify the output. That verification skill is what I'd argue is the most important new skill for founding designers. For context: I was using AI-directed methods on both Aulys (solo, 30 beta users) and at Infosys simultaneously — where the same approach scaled to products used by 50,000+ students.

*What makes this land: specific and honest about what AI did and what I did, rather than vague claims about "leveraging AI."*

---

### Q10. Tell me about a time you had to design for a non-designer audience.

**Situation:** At Infosys, the primary users of the AI rubric engine were teachers — curriculum designers and classroom teachers with no background in software tools. The product team was engineers and ML researchers. The gap between their mental model and the users' was significant.

**Task:** Design an interface that teachers could use without training, for a product built by people who thought in confidence intervals and model accuracy.

**Action:** The central design problem was the confidence signal. The ML team wanted to show raw accuracy percentages — their mental model was "more precise signal = better decision." I ran 3 rounds of user testing with teachers. Round 1 confirmed the percentage model failed: teachers either over-trusted 80%+ scores or dismissed 60%- scores entirely. Round 2 tested a traffic-light model — green/amber/red. Teachers rubber-stamped green outputs without reading the rubric. Round 3: Verified / Suggested / Uncertain, anchored in what the teacher should do, not what the model thinks. Acceptance rate went from 41% to 74%.

**Result:** The 3-tier signal shipped. I documented the testing rounds and decision rationale so the ML team could understand why precision wasn't the right axis. They became advocates for the user-centred approach after seeing the acceptance rate improvement.

*What makes this land: it's a genuine translation problem between engineering logic and human behaviour, resolved through testing rather than debate.*

---

### Q11. Describe a time you aligned stakeholders who disagreed on product direction.

**Situation:** During TalentBridge, there was a genuine disagreement between the HR function and the product management function about what the system should optimise for. HR wanted to use it primarily for bench management — who's unallocated, flag compliance risks. PMs wanted it optimised for skill search — find me the right person in 72 hours. Same product, completely different primary use case.

**Task:** Align both functions on a shared direction without alienating either.

**Action:** I stopped trying to find the compromise in the UI and went back to the user research. Two separate job-to-be-done sessions — one with 3 HR managers, one with 3 project managers. I documented their primary jobs and brought both sessions together into a single workshop. The insight that broke the deadlock: HR's primary job (bench management) was a supply-side view. PMs' primary job (skill search) was a demand-side view. They weren't in conflict — they were two different surfaces of the same underlying data model. The solution: two distinct home screens for two distinct personas, sharing the same backend.

**Result:** Both functions adopted the product. The governance decision — two surfaces, one data model — became the architectural foundation for the rest of the build.

*What makes this land: resolved the conflict by going upstream, not by finding a middle ground that would have satisfied neither.*

---

### Q12. Tell me about a time you worked with an engineer who questioned your design decisions.

**Situation:** At Simplifai, the lead engineer pushed back on my decision to build the conditional branching IA with nested conditions — he said the data model would require a significant backend refactor. His alternative was a flat, non-nested condition structure that was easier to implement but would limit the product's expressiveness.

**Task:** Either defend the nested model or understand why his concern was valid and adjust.

**Action:** I asked him to show me — literally walk me through the data model implications. We spent an hour together at a whiteboard. His point was correct: the nested model I'd designed assumed a recursive data structure that didn't map cleanly onto the existing database schema. The refactor wasn't trivial — it was 2 weeks of engineering work. I went back to the user research. The use cases that required more than 2 levels of nesting represented less than 15% of the workflows I'd documented. I redesigned the IA to support 2-level nesting — which covered 85% of use cases — with an explicit "advanced mode" escape hatch for the edge cases. The engineer's concern saved 2 weeks of debt.

**Result:** Shipped the 2-level model. The flat-vs-nested debate we almost had never happened because the user research grounded both of us in what was actually needed.

*What makes this land: shows genuine technical collaboration, not just "I listened to the engineer and agreed with them."*

---

### Q13. How do you communicate design to a CEO who doesn't care about craft?

**Situation:** At Simplifai I presented the design system proposal to the CTO and the CEO. The CTO cared. The CEO wanted to know one thing: does this help us ship faster?

**Task:** Make the case for a design system in business terms to someone who had never worked with one.

**Action:** I changed the frame entirely. Didn't show components. Showed the current state: an engineer making a spacing decision from scratch on a feature that was due in 2 days. The cost: a conversation, a slack thread, a review cycle, a revision. I estimated it conservatively — 45 minutes per feature, 3 features per week, 52 weeks. 117 hours per year of avoidable rework, just on spacing decisions. Then I showed what the design system would make possible: the engineer opens the token file, uses `spacing.md`, no conversation needed. I asked for 3 weeks of design time to build it. The payback was 2 months at current shipping rate.

**Result:** CEO approved it without pushback. The 42% dev cycle improvement we measured post-adoption was the validation.

*What makes this land: the translation from craft argument to business argument is explicit and specific.*

---

### Q14. Tell me about a time you mentored someone — what was your approach?

**Situation:** A junior UX designer joined Simplifai in Q2 2022. She had 18 months of experience — solid visual instinct, weak research methodology, and no experience with B2B SaaS or design systems.

**Task:** Onboard her to the team, the product, and my standards for work quality within 60 days so she could contribute independently.

**Action:** I built a structured 60-day onboarding plan rather than the typical "sit with me and absorb" approach. Week 1–2: understanding the users — she shadowed 3 customer calls and wrote up the core personas herself. Weeks 3–4: design system deep dive — she contributed one component to the library under my review. Weeks 5–8: her first solo project — a settings screen redesign. I gave her a brief with the user goal and constraints, then we did weekly reviews using the feedback rubric (usability, hierarchy, accessibility, business alignment). I didn't redesign her work in reviews. I asked questions: "What's the primary user goal on this screen? Does the visual hierarchy support that?" She shipped the feature in week 10.

**Result:** Feature shipped. More importantly, by the 90-day mark she was running her own usability sessions without prompting. The structured approach — explicit learning goals, specific deliverables per phase, question-based feedback rather than prescriptive feedback — made the difference. She grew faster because I gave her space to be wrong safely.

*What makes this land: specific mentoring method, not just "I gave her guidance."*

---

### Q15. Describe a conflict with a PM over scope. How did you resolve it?

**Situation:** The conditional branching conflict at Simplifai — the PM wanted it on the roadmap before we'd fixed the onboarding. Already covered in Q3 above. A different example: at Infosys, the PM wanted to add a student dashboard to the scope of the adaptive recommendations feature. I disagreed — the student dashboard was a different user, a different surface, and would delay the teacher-facing feature by 3 weeks.

**Task:** Make the case for scope reduction without being obstructionist.

**Action:** I ran a quick jobs-to-be-done analysis on the student dashboard request. The PM's assumption was that students needed to see their own recommendation data. In 4 user interviews I ran (students and teachers), the finding was clear: students didn't want to see the recommendation engine output — they wanted to see what they should work on next, in plain language. The teacher dashboard already had a simplified view the teacher could share. I proposed: defer the student dashboard, build a one-tap sharing mechanism in the teacher dashboard that surfaces student-facing summary. Ships faster, serves the actual student need.

**Result:** PM agreed. The sharing mechanism shipped as part of the teacher dashboard. Student dashboard deferred to the next cycle. The scope reduction didn't come from saying "no" — it came from offering a better answer to the underlying need.

*What makes this land: the resolution is through better problem-solving, not positional conflict.*

---

### Q16. What's the biggest design mistake you've made? What did you learn?

**Situation:** On MedSecure, the V1 enrollment flow assumed that OTP delivery via SMS was reliable for all users. I designed the primary enrollment path around SMS verification — it's standard, it's familiar, it felt safe. I didn't question it.

**Task:** None — this was a mistake of assumption, not a task I was given.

**Action:** In the pilot model, 30% of rural users on BSNL networks couldn't complete first-attempt enrollment because of SMS delivery delays averaging 4–8 minutes. By the time the OTP arrived, users had abandoned the flow. The fix for V2 was a QR-scan enrollment path at PHC kiosks — no SMS dependency. Enrollment failure dropped from 30% to under 4%.

The mistake: I over-indexed on the tech architecture (ABHA ID integration, Hyperledger, the complex consent model) and under-indexed on last-mile connectivity. I assumed the infrastructure that worked for an urban smartphone user would work for a rural user on a 2G network. I should have tested the enrollment flow with low-connectivity simulation in week 2, not discovered the failure in week 10.

**Result:** V2 fixed it. What changed in my process: for any product with rural or low-connectivity users in scope, infrastructure assumptions are now user-tested in the first sprint. Not the last one.

*What makes this land: specific failure, specific number (30%), specific fix, specific process change.*

---

### Q17. Describe a time you had to context-switch between multiple products fast.

**Situation:** During my time at Infosys, I was simultaneously working on the AI rubric engine (teacher-facing, Imagine Learning — eventually reaching 10,000+ teachers), the adaptive recommendations dashboard (also teacher-facing, different product), and contributing to TalentBridge (completely different domain, internal HR tool).

**Task:** Maintain quality and context on three workstreams without letting any one of them suffer from context-bleed — where decisions from one product start contaminating another.

**Action:** I created a one-page context card for each product — primary persona, primary job-to-be-done, key design principles, current state, and the decision I was most uncertain about. Before every design session I'd spend 5 minutes reviewing the context card for that product. This sounds trivial. It's not. The rubric engine persona (teacher evaluating AI outputs) and the TalentBridge persona (HR manager doing bench management) have almost nothing in common. Without the context card, I caught myself once applying enterprise HR mental models to teacher-facing copy. The card corrected that.

**Result:** All three products shipped without the context-bleed problem. The context card became a habit I still use.

*What makes this land: practical and specific, not just "I was organised."*

---

### Q18. Tell me about a project that got cancelled. How did you handle it?

**Situation:** At Simplifai, in my second year, a project to build a self-service analytics dashboard for enterprise clients was scoped, kicked off, and cancelled 3 weeks in. The reason: a larger enterprise client threatened to churn if the core document processing reliability issues weren't fixed first. Leadership made the call to redirect all engineering capacity to reliability.

**Task:** Absorb the redirect, preserve what was useful from the work done, and move on without team morale collapsing.

**Action:** The cancellation stung — I'd done strong foundational work on the IA and had user research findings I believed in. I did two things. First, I wrote a proper closure doc — what we learned, what the IA decisions were, what the open questions were, and what I'd recommend for when the project resumed. Not for anyone in particular. For future me or whoever picked it up next. Second, I ran a team debrief — not a blame session, but a genuine "what did we learn from 3 weeks of this work?" conversation. The research findings on analytics user needs were actually useful for a feature we shipped 6 months later.

**Result:** The closure doc was used when the analytics project was restarted 8 months later. The team debrief turned a cancellation into a knowledge preservation exercise. The work wasn't wasted — it was deferred.

*What makes this land: mature response to cancellation, with a specific action (closure doc) that shows forward-thinking, not sulking.*

---

### Q19. What does your design process look like when you're under a 1-week deadline?

**Situation:** At Simplifai, I had one week to design a client-presentable demo of the new onboarding flow for two enterprise prospects. One week. The flow had to be polished enough to present, complete enough to demo the primary path, and designed from a research brief I'd completed the prior month.

**Task:** Ship something demo-ready in 5 working days.

**Action:** Day 1: define the success criteria — not "what would be perfect" but "what does this demo need to achieve?" Two things: demonstrate that the step-builder was easier to navigate than the old canvas, and complete a full automation flow without errors. Everything else was deferred. Day 2–3: wireframes for the primary path only. No error states, no edge cases — those are real product work but not demo blockers. Day 4: high-fidelity for the 3 screens that prospects would spend the most time on. Day 5: build the interactive prototype and run it through myself twice. Logged every rough edge. Fixed the 3 that mattered, noted the rest.

**Result:** Demo worked. The VP noted that the step-builder felt "obvious" — the highest compliment for an interaction design decision. The rough edges I deferred became the sprint 2 backlog.

*What makes this land: explicit triage logic, not just "I worked fast."*

---

### Q20. Why are you leaving your current role, and what are you optimising for next?

Already covered in full in Section 2. Short version for behavioural context:

"The work at Infosys was good, but I was operating downstream of product decisions, not upstream of them. I built Aulys on the side to stay close to the full design-to-build loop. It showed me what I'd been missing. I'm optimising for ownership — a role where design shapes product direction, not decorates it. AI-first startup, Series A–C, where the design function is being built rather than managed."

---

## 6. Design Critique

*Say this to open every critique:* "I'll narrate my thinking out loud. I'll cover: who the user is and what their primary job is, how well the flow serves that job, visual hierarchy, accessibility, edge cases, and what I'd change first."

---

### Critique 1: Figma Onboarding

**"Let me start with the user. Someone opening Figma for the first time is almost certainly a designer or someone who's been asked to use it. Their primary job is: start making something. They don't know the tool yet, so the first job is actually orientation — where am I, what can I do here, how do I start.**

**Looking at the first screen after account creation — there's a lot of options. I can start with a file, explore community templates, see recent work. For a first-time user, that optionality is actually a problem. There's no clear 'start here.' The hierarchy doesn't distinguish between 'this is the thing to do first' and 'this is a secondary capability.'**

**The CTA hierarchy is my first critique. The 'New File' button is present but not visually dominant. A new user should feel pulled to one action. Right now the screen treats all options as roughly equal.**

**Second: the blank canvas. When I click 'New File,' I'm dropped into a blank canvas with no guidance. For someone who's never used Figma, this is the moment of maximum confusion — I don't know how to add frames, I don't know what layers are, I don't know where the components are. Figma's onboarding doesn't bridge this moment.**

**Third: accessibility. I'd want to verify that the new file creation flow is keyboard-operable. The main canvas interactions are famously keyboard-unfriendly — but the onboarding prompts and CTA buttons should at minimum be navigable without a mouse.**

**What I'd test first: the blank canvas drop. I'd run a usability session specifically on what new users do in the first 3 minutes after creating a new file. My hypothesis is that most of them either follow a tutorial (external) or feel lost and close the tab. If that's confirmed, I'd add an optional guided first-frame setup — 'What are you building? A mobile screen, a web page, a presentation?' — that gets them to a non-blank starting point with a bit of structure.**

**What I'd change first: add progressive disclosure to the blank canvas state. One overlay prompt, dismissible. 'Start with a frame — it's the container for your designs.' With a visible keyboard shortcut. That single change probably gets most new users unstuck.**"

---

### Critique 2: Notion Sidebar

**"The Notion sidebar is a navigation system for an infinite hierarchy of documents. The user's job is: find the thing I'm looking for without having to remember where I put it.**

**The sidebar does a few things well. The search is always accessible. The page tree is visible and editable inline — you can rename things, move them, add subpages. For power users who've built a well-organized workspace, the sidebar is genuinely good.**

**The problem is for everyone else. Notion's sidebar has no inherent structure — it reflects whatever structure you impose on it. For a user who hasn't built a deliberate hierarchy, the sidebar becomes a flat list of everything they've ever created, ordered by recency. The mental model breaks down.**

**First critique: there's no affordance for search-based navigation as a primary interaction. If you know what you're looking for, search is faster than browsing the sidebar tree — but it's not surface-level. New users learn the sidebar first, learn search later, and the two mental models don't reconcile cleanly.**

**Second: the sidebar visual density. Every item at the same visual weight — page names, nested subpages, databases — with identical typography and icons that only differ by a tiny symbol. At 50+ items, the sidebar becomes visually undifferentiated. There's no hierarchy signal in the visual design — just indentation. For users with a lot of content, indentation alone is a weak navigation signal.**

**Third: accessibility. The inline editing of page titles in the sidebar is a keyboard interaction that I'd want to audit carefully. The sidebar is a custom-built component, and custom navigation trees are a common source of keyboard focus issues — especially around nested item expansion/collapse.**

**What I'd test first: path to information for users with 100+ pages. I'd measure time-to-find for a specific document when a user has more than 100 pages in their workspace. My hypothesis is that there's a cliff — below some density, the sidebar works. Above it, users rely entirely on search but haven't built that habit.**

**What I'd change first: visual weight differentiation. 'Pinned' or 'frequently accessed' pages at a higher visual weight than the rest. Let the hierarchy emerge from usage, not just from the structure the user has manually built.**"

---

### Critique 3: Swiggy Checkout

**"Swiggy checkout. The user's job is: pay for what I've chosen and receive confirmation as fast as possible. They're hungry. They've already made the decision. Friction here is the most expensive kind — it's post-decision friction that causes order abandonment.**

**The checkout flow has a few states I want to evaluate: address selection, payment method selection, and order confirmation.**

**First: address selection. The default address is pre-selected, which is correct. But if I want to change it, the interaction is — tap the address, see a full-screen address selector, find the new address, confirm. That's 4 taps for what should be a 2-tap operation. For a user who switches between home and office addresses regularly, this is friction at the worst possible moment.**

**Second: payment method. The payment section asks me to confirm my payment method on every order. I've used UPI 40 times. The friction of confirming something I've confirmed 40 times is real — not insurmountable, but unnecessary. The 'default payment method' concept exists but requires the user to find it and set it. It should be inferred from frequency of use.**

**Third: the order confirmation screen. After placing an order, the confirmation shows estimated delivery time. It doesn't show the order summary. I have to navigate back to 'My Orders' to see what I ordered. For a multi-item order, that's a source of anxiety — did my customisation go through? Did I actually order 2 garlic breads or 1? The confirmation screen should surface order summary by default.**

**Fourth: accessibility. Touch targets in the checkout flow are tight — particularly the payment method selector and the address edit link. On mobile, anything below 44×44px CSS pixels is a potential a11y failure.**

**What I'd test first: the address selection drop-off. I'd look at funnel analytics at the address step — specifically, what percentage of users who reach checkout leave the address step without confirming. If there's a significant drop-off at that step, it's a design failure, not user choice.**

**What I'd change first: one-tap address switching. Show the 2–3 most recently used addresses directly on the checkout screen, without a modal. Tap to select. That gets address selection from 4 taps to 1 for the common case.**"

---

## 7. Whiteboard / Take-Home

### Framework

**Time allocation (for a 60–90 min session):**
- 25 min — Discovery (questions, clarification, user definition)
- 10 min — Problem framing (what are we actually solving?)
- 25 min — Sketching / ideation
- 10 min — Presentation

**Discovery questions to ask every time:**
1. "Who is the primary user for this feature?"
2. "What's the #1 metric we're optimising for?"
3. "What constraints exist — platform, team size, timeline, existing system?"
4. "What's already been tried? What do we know doesn't work?"

**Presentation structure:**
1. Problem reframe: "Here's how I'm understanding what we're solving — [1 sentence]."
2. User insight: "The critical thing about this user is [specific constraint or behaviour]."
3. Solution walkthrough: "Here's the primary flow — [narrate step by step]."
4. What I'd validate next: "The assumption I'm most uncertain about is [X]. I'd test it by [Y]."

**When you're stuck:**
- "I'm going to park that edge case and come back — I first want to nail the primary flow."
- "I want to check my assumption here — is [X] a constraint I should be designing around?"
- "I'm going to think out loud for a minute before I draw anything."

**Never do:**
- Start drawing before you've asked at least 3 questions
- Design for every user simultaneously — pick the primary persona and design for them specifically
- Present a "perfect" solution — always close with what you'd test next

---

### Worked Prompt 1: Design an onboarding flow for an AI writing assistant

**Discovery:**
"Who's the primary user — someone who's never used an AI writing tool, or someone switching from a competitor? What's the one thing we need them to do in the first session to believe the product is worth keeping? What does failure look like — what does a churned user look like in the first 7 days?"

**Problem reframe:**
"The onboarding challenge for an AI writing tool isn't teaching features — it's creating a moment of genuine surprise. The user has a prior mental model from ChatGPT or similar. Onboarding needs to do one thing: show them what this tool does that those tools don't."

**Primary flow (3 steps):**
Step 1: Bring your own content. "Paste something you've been struggling to write — an email, a paragraph, a brief." Don't start from blank. Start from their real problem. Step 2: Show the AI doing something specific and impressive — not generate text from scratch, but improve what they pasted. Reframe a boring paragraph as punchy copy. Show the delta. Step 3: Confirm the 'aha' — "Want to see what else it can do?" Offer 3 specific tasks it's good at, based on what the user just pasted.

**What I'd validate:**
"The assumption I'm most uncertain about is that users will paste real content rather than a test phrase. If they use 'Hello world,' the onboarding fails because the output won't be impressive. I'd test with 20 users, watch what they paste, and iterate on the prompt framing if they're not bringing real content."

---

### Worked Prompt 2: Improve the Zomato restaurant search experience

**Discovery:**
"What's the primary problem we're solving — discoverability (users can't find what they want) or decision paralysis (too many options, can't choose)? Who's the primary user — someone who knows what they want, or someone browsing? What's the business metric — order conversion rate, or something else?"

**Problem reframe:**
"The search problem is actually two problems. Users with high intent (want biryani, know it) need fast path to the right restaurant for them specifically. Users with low intent (hungry, don't know what) need curation that matches their context — time of day, location, past orders. These are different UX paradigms."

**Primary flow (focused on high-intent user):**
Current state: user types "biryani," sees 40+ results sorted by rating. The list is undifferentiated at the top — 4.3 rating, 4.3 rating, 4.3 rating. No signal for "best for me specifically." Proposed change: personalised ranking based on order history, delivery time to this location, and live restaurant capacity signal. The result list should feel like it knows who I am after 3 orders, not like a public ratings page.

**What I'd validate:**
"The assumption I'm most uncertain about is whether users trust personalised ranking or feel manipulated by it. I'd A/B test labelled vs. unlabelled personalisation — 'Ranked for you' vs. default sort — and watch conversion rate and repeat order rate."

---

### Worked Prompt 3: Design an internal tool for a customer support team

**Discovery:**
"How many agents are we designing for? What's the #1 inefficiency in their current workflow — time to find information, time to type responses, time to escalate? What's the business metric — tickets resolved per hour, first-contact resolution rate, or CSAT? What tools are they using today and why aren't those working?"

**Problem reframe:**
"Internal tools for support agents have one failure mode above all others: they require the agent to leave the tool to get the information they need. Every context switch is 30 seconds and a mental load increase. The design goal is to keep the agent in one window for the full resolution cycle."

**Primary flow (ticket resolution):**
Open ticket → customer context surfaces automatically (past orders, past tickets, tier status) in a persistent sidebar — no clicking to another system. Response composition has AI-suggested replies ranked by past CSAT scores for similar ticket types — agent can use as-is, edit, or dismiss. Escalation path is a single button, not a multi-step process through a different system. Resolution ends with a one-tap CSAT survey trigger — agent doesn't write the survey, the system sends it automatically.

**What I'd validate:**
"The assumption I'm most uncertain about is whether agents trust AI-suggested replies enough to use them without editing every time. If they edit every suggestion, the time saving disappears. I'd measure edit rate and note what percentage of suggestions ship unmodified — that's the signal for whether the AI's calibration is correct."

---

## 8. Questions to Ask Them

*Tier 1 — Screening call (recruiter or HR)*
*Tier 2 — Portfolio round (hiring manager or design lead)*
*Tier 3 — Final round (founders, cross-functional partners, team)*

---

### Tier 1 — Screening

**1. "What does the first 90 days look like for this role?"**
*Why it signals seniority: shows you're thinking about how to deliver value immediately, not just whether you'll fit in.*

**2. "How many designers are on the team, and what's the scope of each person's ownership?"**
*Why it signals seniority: you're evaluating whether you'd have meaningful scope or would be executing someone else's vision.*

**3. "Is design represented in product decisions — who's in the room when product direction is set?"**
*Why it signals seniority: you're assessing design maturity, not just role scope.*

**4. "What's the biggest design problem the team hasn't solved yet?"**
*Why it signals seniority: shows genuine intellectual curiosity about the work, not just about the role.*

**5. "What's driving the hire — new headcount or backfill?"**
*Why it signals seniority: gives you information about team stability and context that affects how you'd be onboarded.*

---

### Tier 2 — Portfolio Round

**6. "What made the last person in this role succeed, or not work out?"**
*Why it signals seniority: gives you real information about what the role actually requires vs. what the JD says.*

**7. "Can you walk me through a recent decision where design changed the product direction?"**
*Why it signals seniority: tests whether design has actual influence, not just execution authority.*

**8. "What's the relationship between design and engineering here — do they collaborate early or does design hand off to eng?"**
*Why it signals seniority: reveals how much constraint you'll be working under and how much influence you'll have over build quality.*

**9. "What's the biggest user problem you're not confident you've solved yet?"**
*Why it signals seniority: shows you care about outcomes, not just shipping. Also gives you a problem to think about before the final round.*

**10. "What's the product's most important design debt right now?"**
*Why it signals seniority: you're thinking about what you'd inherit and what the real work looks like, not just the new features.*

---

### Tier 3 — Final Round

**11. "How does design influence the product roadmap here — is design upstream of product decisions or downstream?"**
*Why it signals seniority: at a senior level, you want to know if you'd be a strategic partner or a delivery function.*

**12. "What does success look like at 6 months for this role?"**
*Why it signals seniority: grounds the conversation in measurable outcomes, not feelings.*

**13. "What's the team's relationship with user research — do you do primary research or rely on CS and PM for user input?"**
*Why it signals seniority: signals whether you'd be designing on evidence or designing on assumptions.*

**14. "What do you wish the design function could do that it doesn't currently do?"**
*Why it signals seniority: gets you honest information about gaps, which is either an opportunity or a warning sign.*

**15. "Is there anything about my background or portfolio that you'd want me to clarify?"**
*Why it signals seniority: closes the loop on any doubts they have. Most candidates don't ask this. It's the most direct signal that you can handle direct feedback.*

---

## 9. Day-Before Checklist

- [ ] Portfolio URL opens without errors — test on both desktop and mobile
- [ ] PDF resume downloads correctly from the resume link
- [ ] Figma files for Aulys and TalentBridge are open and accessible (for screen share)
- [ ] Screen share set up and tested — know which window you'll share
- [ ] Have done at least one out-loud walkthrough of your anchor case study (Aulys) against a timer — 8 minutes
- [ ] Have reviewed the 5 attack questions for the case study most relevant to this specific company
- [ ] Check the company's recent funding news, product, and team (especially the design team) on LinkedIn
- [ ] Your 90-second "tell me about yourself" rehearsed — not memorised word-for-word, but the beats are locked in
- [ ] Water, quiet room, camera framing checked
- [ ] Have 3 questions ready for each round tier (pick from Section 8)

---

*End of guide. Last updated: May 2026.*
