# Job Search System — Aditya Chinchakar

## Situation
Resigned from Infosys. 3-month notice period starts May 2026.
Must land role before or shortly after notice ends (~August 2026).
Time is critical — treat every week as a sprint.

## Target Role Profile
- **Titles:** Founding Designer, Lead Designer, Staff Designer, Head of Design
- **Company type:** AI-first startups, Series A–C preferred
- **Location:** India remote or global remote
- **Non-starters:** Pure enterprise / no product influence / no AI component

## Assets
- Portfolio: adityachinchakar.com
- Anchor case study: Aulys (solo-built AI product, 30 beta users, WCAG 2.2)
- Full-stack direction: design + AI-directed development (TypeScript, Next.js, Vercel)
- 3 resume variants: Electric Blue (AI startups), Royal Blue (Staff roles), Indigo (Enterprise)
- Job Acquisition Agent: n8n + Apify + Claude API + Airtable + Hunter.io + Skyvern + Gmail
- Obsidian prep vault: `D:\Second Brain - Obsidian\Toptal preparation\`

## 3-Month Sprint Plan

### Month 1 (May 2026) — Build pipeline
- [ ] LinkedIn profile overhaul (headline, about, featured section, banner)
- [ ] Portfolio SEO audit + conversion pass (CTA above fold, case study headers)
- [ ] Target 50 companies — research + tier into A/B/C lists in Airtable
- [ ] Activate warm network: 10 DMs/week to ex-colleagues, founders, recruiters
- [ ] 3 cold outreach emails/week to founders at target companies
- [ ] Start content cadence: 2 LinkedIn posts/week (Aulys build-in-public, accessibility takes)

### Month 2 (June 2026) — Activate interviews
- [ ] 20+ applications sent (warm referrals > cold apply)
- [ ] 10+ recruiter/founder screens completed
- [ ] 5+ portfolio presentations done
- [ ] Run STAR practice 3x/week using question-bank.md
- [ ] Company research brief for every company before screen
- [ ] Track all in Airtable: company, stage, contact, status, next action

### Month 3 (July 2026) — Close offers
- [ ] 3+ final round interviews in progress
- [ ] Salary negotiation scripts ready (salary-negotiation.md)
- [ ] Equity evaluation checklist applied to every offer
- [ ] Notice period end: have signed offer or strong offer in hand

---

## Tools Available to This Agent

### `/interview-prep [topic]`
Run an interview practice session.  
Topics: `behavioural`, `portfolio-aulys`, `portfolio-talentbridge`, `portfolio-simplifai`, `critique`, `whiteboard`, `salary-negotiation`, `role-questions`  
Files: `job-search/interview-prep/question-bank.md`, `job-search/interview-prep/salary-negotiation.md`

Usage examples:
- "Run me through 5 behavioural questions" → pick 5 from bank, ask one at a time, give STAR feedback
- "Grill me on Aulys" → use portfolio defence section, challenge weak answers
- "Salary negotiation roleplay — they offered ₹28L" → use salary-negotiation.md scripts

### `/company-research [company name]`
Build a pre-interview brief.  
Template: `job-search/company-research/brief-template.md`  
Output: funding stage, product, team size, recent hires, design maturity signal, questions to ask

### `/outreach [type] [company/person]`
Draft cold outreach.  
Types: `founder-email`, `recruiter-dm`, `warm-referral`, `follow-up`  
Pulls from portfolio context + case studies for personalisation

### `/linkedin-post [topic]`
Draft a thought leadership post.  
Formats: build-in-public, accessibility take, AI-native design POV, career reflection  
Voice: direct, specific, non-humble-brag, always ends with a question or insight

### `/job-tracker`
Review pipeline status — prompt user to update Airtable with stage changes

### `/mock-interview [role type]`
Full 45-min mock interview simulation.  
Role types: `founding-designer`, `lead-designer`, `staff-designer`  
Covers: intro → portfolio walkthrough → behavioural → design challenge → questions for them → debrief

---

## Agent Behaviour Rules for Job Search Sessions

1. **When user says "practice" or "grill me"** — go question by question, wait for answer, give specific STAR feedback before moving on. Never dump all questions at once.

2. **When giving feedback on an answer** — identify: what landed, what was vague, what metric/detail was missing. Then suggest exactly one thing to add.

3. **When doing salary roleplay** — stay in character as recruiter/hiring manager until user breaks frame. Don't break to explain strategy mid-roleplay.

4. **When drafting outreach** — pull actual case study details from portfolio codebase. Never generic. Always reference something specific about the target company.

5. **When asked "am I ready?"** — be honest. Check against: STAR answers sharpened, Aulys defence tight, salary floor set, at least 10 companies researched, LinkedIn updated. Give a readiness score 1–10.
