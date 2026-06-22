
import { runCompatibilityEngine } from './src/backend/agents/workflow';

const PORTFOLIO_CONTEXT = `
I am a Senior Product Designer with 9 years of experience.
I specialize in building complex, data-rich B2B SaaS platforms and AI-driven interfaces.
Core Competencies: UX Strategy, UI Design, Design Systems, User Research, Prototyping.
Tech Stack/Tools: Figma, Framer, React/Next.js (basic frontend), Python (basic AI integrations).
Key Achievements:
- Designed a multi-agent AI system interface that improved user efficiency by 40%.
- Led the redesign of a legacy enterprise dashboard, reducing cognitive load and increasing adoption by 25%.
- Built and maintained a comprehensive design system used by 50+ engineers.
`;

const TEST_CASES = [
  {
    id: 1,
    label: 'Senior Product Designer — AI SaaS',
    expectedBand: 'HIGH',
    expectedRange: [75, 100],
    jd: `We're looking for a Senior Product Designer to own end-to-end design for our AI-powered workflow automation platform. You'll shape the UX of complex multi-step agent interfaces and work directly with engineers and PMs to ship production-ready designs.

Requirements:
- 7+ years product design experience
- Strong portfolio showing B2B SaaS, data-heavy interfaces
- Expert in Figma, design systems
- Experience designing AI or ML-powered features (LLM interfaces, agent UX, trust & transparency patterns)
- Comfortable with ambiguity in 0-to-1 product work
- Cross-functional collaboration with engineering and product

Nice to have: basic frontend skills (React/TypeScript), familiarity with API-driven design`
  },
  {
    id: 2,
    label: 'Staff Designer — Enterprise B2B SaaS',
    expectedBand: 'HIGH',
    expectedRange: [70, 95],
    jd: `Seeking a Staff Designer to lead design for our enterprise HR analytics platform. You'll set the design bar across 4 product squads, build and maintain our design system, and mentor 3 mid-level designers.

Requirements:
- 8+ years experience, with 2+ years at Staff or Principal level
- Deep expertise in complex data dashboards, enterprise UX
- Led or co-led a design system used by 20+ engineers
- Strong visual design craft — typography, color, layout
- Experience running design critiques and setting design standards
- Figma expert

Bonus: experience with accessibility (WCAG), some familiarity with analytics or BI tools`
  },
  {
    id: 3,
    label: 'Founding Designer — Early-stage startup',
    expectedBand: 'HIGH',
    expectedRange: [75, 100],
    jd: `We're a seed-stage fintech startup (5-person team) looking for our first designer. You'll own all design from day one — brand, product, marketing — and work directly with our CEO and CTO.

Requirements:
- 5+ years product design experience
- Proven 0-to-1 builder — has shipped products from scratch
- Comfortable being the only designer, wearing multiple hats
- Strong product intuition, able to do lightweight user research
- Some frontend ability (can write basic React or work directly in code)
- Figma, prototyping, user testing

We value builders who ship over perfectionists who polish`
  },
  {
    id: 4,
    label: 'Design Lead — Healthcare SaaS',
    expectedBand: 'HIGH',
    expectedRange: [65, 85],
    jd: `Design Lead needed for our clinical workflow platform used by 400+ hospitals. You'll lead a team of 3 designers, own the design system, and partner with product to reduce clinician burnout through better UX.

Requirements:
- 6+ years design experience, 1+ years in a lead or senior role
- Experience designing complex enterprise workflows (multi-step, role-based)
- Strong accessibility knowledge (WCAG 2.1, ARIA)
- Design system ownership experience
- Healthcare domain knowledge is a plus but not required
- Research-driven: comfortable running usability tests and translating findings

You'll be designing for nurses, doctors, and administrators — empathy and clarity over aesthetics`
  },
  {
    id: 5,
    label: 'Head of Design — Series B Fintech',
    expectedBand: 'MID',
    expectedRange: [50, 75],
    jd: `We're hiring our first Head of Design to build and lead a design org from 0 to 10 people over 18 months. You'll report to the CPO, own design strategy, hiring, and culture.

Requirements:
- 10+ years design experience, 3+ years managing design teams (5+ people)
- Proven track record building design orgs and design culture
- Executive presence — comfortable presenting to board and C-suite
- Strong people management: hiring, performance reviews, career frameworks
- Has owned company-wide design systems and brand
- Fintech domain experience preferred`
  },
  {
    id: 6,
    label: 'UX Researcher — User Insights Platform',
    expectedBand: 'MID',
    expectedRange: [35, 60],
    jd: `We're looking for a UX Researcher to own our research practice. You'll plan and run studies, synthesize insights, and influence product roadmap.

Requirements:
- 4+ years dedicated UX research experience
- Expert in qualitative methods: interviews, usability testing, diary studies
- Proficient in quantitative methods: surveys, card sorting, tree testing
- Experience with Dovetail, Maze, UserZoom
- Ability to write clear research reports and present to stakeholders
- Background in cognitive psychology or HCI preferred

This is a research-only role — no design execution expected`
  },
  {
    id: 7,
    label: 'Junior UI Designer — Consumer App',
    expectedBand: 'LOW',
    expectedRange: [15, 40],
    jd: `We're looking for a Junior UI Designer (1–3 years experience) to help our design team ship beautiful consumer mobile screens.

Requirements:
- 1–3 years UI/visual design experience
- Strong visual skills: typography, color, iconography, illustration
- Figma intermediate level
- Consumer app portfolio (iOS/Android)
- Knowledge of motion design (Lottie, After Effects) is a big plus
- Fresh perspective, eager to learn

This is an individual contributor role with close mentorship from a senior designer`
  },
  {
    id: 8,
    label: 'Product Manager — B2B SaaS',
    expectedBand: 'MID',
    expectedRange: [30, 55],
    jd: `We're hiring a Senior Product Manager for our core platform team. You'll own the roadmap, write PRDs, and drive cross-functional execution with design, engineering, and data.

Requirements:
- 5+ years product management experience at a B2B SaaS company
- Strong written communication: PRDs, specs, strategy docs
- Data-driven: SQL basics, comfortable with product analytics (Mixpanel, Amplitude)
- Experience working closely with design and engineering teams
- Ability to prioritize and say no
- Background in enterprise software preferred

Design sensibility is a plus but design execution is not part of this role`
  },
  {
    id: 9,
    label: 'Frontend Engineer — React',
    expectedBand: 'LOW',
    expectedRange: [10, 30],
    jd: `We're hiring a Senior Frontend Engineer to build and maintain our React component library and core web app.

Requirements:
- 5+ years frontend development experience
- Expert in React, TypeScript, CSS-in-JS
- Experience building and maintaining component libraries (Storybook)
- Performance optimization: Core Web Vitals, bundle size, lazy loading
- Testing: Jest, React Testing Library, Cypress
- GraphQL, REST API integration
- Strong CS fundamentals

Design collaboration experience is a plus but this is a pure engineering role`
  },
  {
    id: 10,
    label: 'Creative Director — Brand Agency',
    expectedBand: 'LOW',
    expectedRange: [15, 40],
    jd: `Award-winning brand agency seeking a Creative Director to lead creative output across 15+ client accounts. You'll oversee brand identity, campaigns, and creative team of 8.

Requirements:
- 10+ years creative experience, 3+ years at CD level
- Portfolio of brand identity work: logos, visual systems, brand guidelines
- Print + digital: packaging, OOH, social, digital campaigns
- Agency experience required — client management, pitching, presenting creative
- Hands-on in Adobe Creative Suite (Illustrator, Photoshop, InDesign)
- Team leadership, creative direction, vendor management

Product/UX design experience is not relevant to this role`
  },
];

type Band = 'HIGH' | 'MID' | 'LOW';

function scoreToBand(score: number): Band {
  if (score >= 70) return 'HIGH';
  if (score >= 40) return 'MID';
  return 'LOW';
}

function verdict(actual: Band, expected: Band, score: number, range: [number, number]): string {
  const inRange = score >= range[0] && score <= range[1];
  if (actual === expected && inRange) return '✓ PASS';
  if (actual === expected) return '~ BAND OK';
  return '✗ FAIL';
}

async function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  console.log('\n════════════════════════════════════════════════════════════');
  console.log('  COMPATIBILITY ENGINE — ACCURACY TEST (10 JDs)');
  console.log('════════════════════════════════════════════════════════════\n');

  const results: Array<{
    id: number;
    label: string;
    score: number;
    band: Band;
    expectedBand: Band;
    range: [number, number];
    verdict: string;
    justification: string;
    durationMs: number;
  }> = [];

  for (const tc of TEST_CASES) {
    process.stdout.write(`[${tc.id}/10] ${tc.label} ... `);
    const t0 = Date.now();

    try {
      const result = await runCompatibilityEngine(tc.jd, PORTFOLIO_CONTEXT, 'test', () => {});
      const durationMs = Date.now() - t0;
      const band = scoreToBand(result.match_score);
      const v = verdict(band, tc.expectedBand as Band, result.match_score, tc.expectedRange as [number, number]);

      results.push({
        id: tc.id,
        label: tc.label,
        score: result.match_score,
        band,
        expectedBand: tc.expectedBand as Band,
        range: tc.expectedRange as [number, number],
        verdict: v,
        justification: result.justification.slice(0, 120) + '...',
        durationMs,
      });

      console.log(`${result.match_score}% (${(durationMs / 1000).toFixed(1)}s) → ${v}`);
    } catch (err: any) {
      console.log(`ERROR: ${err.message}`);
      results.push({
        id: tc.id, label: tc.label, score: -1, band: 'LOW', expectedBand: tc.expectedBand as Band,
        range: tc.expectedRange as [number, number], verdict: '✗ ERROR', justification: err.message, durationMs: Date.now() - t0,
      });
    }

    // Groq rate limit buffer between calls
    if (tc.id < TEST_CASES.length) await sleep(1500);
  }

  console.log('\n════════════════════════════════════════════════════════════');
  console.log('  RESULTS TABLE');
  console.log('════════════════════════════════════════════════════════════\n');
  console.log(`${'#'.padEnd(3)} ${'Label'.padEnd(40)} ${'Score'.padEnd(7)} ${'Expect'.padEnd(12)} ${'Time'.padEnd(7)} Verdict`);
  console.log('─'.repeat(90));

  for (const r of results) {
    const rangeStr = `${r.expectedBand} (${r.range[0]}–${r.range[1]})`;
    console.log(
      `${String(r.id).padEnd(3)} ${r.label.padEnd(40)} ${(r.score + '%').padEnd(7)} ${rangeStr.padEnd(18)} ${((r.durationMs / 1000).toFixed(1) + 's').padEnd(7)} ${r.verdict}`
    );
  }

  const passes = results.filter(r => r.verdict.startsWith('✓')).length;
  const bandOk = results.filter(r => r.verdict.startsWith('~')).length;
  const fails = results.filter(r => r.verdict.startsWith('✗')).length;

  console.log('\n────────────────────────────────────────────────────────────');
  console.log(`  PASS: ${passes}/10   BAND OK: ${bandOk}/10   FAIL: ${fails}/10`);
  console.log(`  Accuracy: ${Math.round(((passes + bandOk) / 10) * 100)}%`);
  console.log('════════════════════════════════════════════════════════════\n');

  if (fails > 0) {
    console.log('FAILURES:\n');
    for (const r of results.filter(r => r.verdict.startsWith('✗'))) {
      console.log(`  [${r.id}] ${r.label}`);
      console.log(`       Got ${r.score}% (${r.band}) — expected ${r.expectedBand} (${r.range[0]}–${r.range[1]}%)`);
      console.log(`       Justification: ${r.justification}\n`);
    }
  }
}

main().catch(console.error);
