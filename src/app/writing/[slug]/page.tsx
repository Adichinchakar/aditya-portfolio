import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

interface Section {
    type: "h2" | "h3" | "p" | "ul" | "blockquote" | "callout";
    content?: string;
    items?: string[];
    label?: string;
}

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    mediumUrl?: string;
    linkedinUrl?: string;
    content: Section[];
}

const posts: Post[] = [
    {
        slug: "figma-plugin-solo-build",
        title: "How I Built a Production Figma Plugin Solo: Every Technical Decision",
        excerpt: "Building Aulys meant making hard tradeoffs between Figma's plugin API constraints, a 60fps performance budget, and WCAG accuracy. Here's every decision I made — and the ones I got wrong the first time.",
        date: "Feb 2025",
        readTime: "10 min",
        tags: ["Figma API", "Accessibility", "0→1 Build", "Engineering"],
        content: [
            {
                type: "p",
                content: "In early 2022, I was doing accessibility audits the same way every designer does: manually. Tab through the page. Check color contrast in Stark. Export a list of violations. Hand it to the developer. Repeat the whole cycle two sprints later when half the fixes introduced new issues.",
            },
            {
                type: "p",
                content: "I kept thinking: this is automatable. Not the judgment calls — those still need a human. But the scanning, the annotation, the fix suggestions? That's pattern recognition. That's exactly what a plugin should do. So I built Aulys.",
            },
            {
                type: "h2",
                content: "The Constraint That Shaped Everything: No Background Threads",
            },
            {
                type: "p",
                content: "Figma's plugin API runs your code in a sandboxed JavaScript environment on the main thread. There's no Web Worker access from the plugin sandbox. No background processing. Your plugin shares the same call stack as Figma's rendering engine.",
            },
            {
                type: "p",
                content: "This means if your plugin does heavy computation — say, traversing a deep component tree and running WCAG contrast calculations across every text node — you will block Figma's UI thread. The canvas freezes. Users notice. They close your plugin.",
            },
            {
                type: "p",
                content: "My first version of Aulys tried to scan the entire page in one pass. On a frame with 200+ nodes, it would lock Figma for 3–4 seconds. Unacceptable. The fix was chunked traversal: process nodes in batches of 50, yield control between batches using async/await and microtask scheduling. Scan time went from 3s blocking to 3s non-blocking — same duration, but Figma stayed responsive throughout.",
            },
            {
                type: "h2",
                content: "The WCAG Accuracy Problem",
            },
            {
                type: "p",
                content: "WCAG 2.2 contrast calculation sounds simple: compute relative luminance of foreground and background, divide, check against the threshold (4.5:1 for normal text, 3:1 for large). The math is four lines of code. The hard part is everything around the math.",
            },
            {
                type: "ul",
                items: [
                    "Figma layers composite differently than browsers. A text node sitting over a semi-transparent fill over a gradient over a background image requires you to flatten those layers to get the real perceived contrast — Figma's API doesn't do this for you.",
                    "Components and instances can override fills at multiple levels. A text node inside a nested instance inherits fills through up to 6 layers of composition. I had to walk the full parent chain to resolve the effective background color.",
                    "Auto layout and constraints affect which fill is actually 'behind' a given text node. A text sitting in a card with padding is not visually on the frame background — it's on the card fill.",
                    "Gradients don't have a single contrast value. WCAG says to use the worst-case point of contrast across the gradient for the specific text position. I sample 5 points across the gradient at the text's bounding box location.",
                ],
            },
            {
                type: "p",
                content: "Getting this right took three months of iteration. My V1 had a false positive rate of about 18% — it would flag text as failing that was actually passing, because it was calculating contrast against the wrong background layer. By V2, after the layer-flattening logic, that dropped to under 3%.",
            },
            {
                type: "h2",
                content: "The Decision I Got Wrong First: Drag-to-Reorder Violations",
            },
            {
                type: "p",
                content: "My first version of the violations panel let you drag-to-reorder issues. I thought designers would want to prioritize — 'let me fix the critical ones first, move the warnings to the bottom.' It seemed like good UX.",
            },
            {
                type: "p",
                content: "In beta testing, nobody used it. Worse, three users specifically asked me to remove it because it made the list feel less authoritative — 'if I can rearrange them, does the order actually mean something? Is severity a real ranking or just my preference?'",
            },
            {
                type: "blockquote",
                content: "The drag handle introduced ambiguity where there should have been clarity. WCAG violations have objective severity — Critical (fails SC), Warning (borderline), Info (best practice). Letting users reorder implied the order was subjective.",
            },
            {
                type: "p",
                content: "I removed drag-to-reorder in V2. The list is now sorted by severity, then by node tree order. Non-negotiable. Users can filter by severity level, but they can't reorder the ranking. Beta testers rated the violations list 23% more trustworthy after this change (measured via a 5-point Likert scale in exit surveys).",
            },
            {
                type: "h2",
                content: "Plugin Panel UX: The 60fps Budget",
            },
            {
                type: "p",
                content: "Figma renders the plugin panel as an iframe. The panel itself is standard web tech — React, CSS, the whole stack. But users expect Figma-native feel: snappy, precise, no janky transitions.",
            },
            {
                type: "p",
                content: "I kept a strict 60fps budget for all interactions. Everything interactive is GPU-composited (transform and opacity only, no layout-triggering properties in animations). The scan progress bar uses a CSS animation rather than JavaScript-driven updates. Tab switching uses CSS class toggling with a 150ms transition — fast enough to feel instant, slow enough to not feel abrupt.",
            },
            {
                type: "h2",
                content: "What I Would Do Differently",
            },
            {
                type: "ul",
                items: [
                    "Start with WCAG 2.1 AA only. I tried to support 2.2 AAA from day one, which tripled the rule surface area and slowed shipping by 6 weeks. AA coverage alone covers 97% of what teams actually need.",
                    "Build the settings panel earlier. I added font-size threshold customization in V3 — it was a top-5 user request from month one. I delayed it because I thought 'designers should just follow the spec.' They can't always; type sizes are often a brand constraint.",
                    "Charge from beta. Giving it away for free in beta trained users to expect it free. Transitioning to paid was harder than it needed to be and required re-explaining value to people who had stopped noticing it.",
                ],
            },
            {
                type: "h2",
                content: "What It Taught Me About Product Design",
            },
            {
                type: "p",
                content: "Building Aulys solo — concept, design, engineering, go-to-market — compressed years of PM/engineering collaboration into a single experience. I now understand, viscerally, why engineers push back on certain design requests. Not because they're lazy, but because the implementation cost is real and sometimes the design assumption is wrong.",
            },
            {
                type: "p",
                content: "The best thing a product designer can do is understand constraints from the inside. You don't have to write production code. But you should understand threading models, API limitations, rendering performance, and state management well enough to ask the right questions. That understanding is the difference between a designer who hands off specs and a designer who ships products.",
            },
            {
                type: "callout",
                label: "Aulys is in active beta",
                content: "30+ designers are currently testing it. If you work on a product team and accessibility is part of your workflow, I'd love your feedback. The plugin is available at aulys-app.vercel.app.",
            },
        ],
    },
    {
        slug: "design-systems-are-products",
        title: "Design Systems Are Products: How We Cut Dev Cycles by 42%",
        excerpt: "Most design systems fail because they're treated as deliverables, not products with users, roadmaps, and adoption metrics. Here's the systems-thinking approach I used at Simplifai — semantic tokens, API contracts, and a two-pizza team rule.",
        date: "Dec 2024",
        readTime: "9 min",
        tags: ["Design Systems", "Engineering", "Process", "Design Ops"],
        content: [
            {
                type: "p",
                content: "Most design systems fail quietly. They launch with a Figma announcement, a Confluence page, and a Slack channel. A few teams adopt them. Then the system doesn't keep up with the product, the tokens diverge from what's in the codebase, and designers quietly stop using the shared library and start building screens from scratch again.",
            },
            {
                type: "p",
                content: "I've seen this pattern twice. The third time I built a design system — at Simplifai — I decided to treat it as a product, not a deliverable. That meant users, roadmaps, adoption metrics, release cycles, and a support process. It worked. We cut dev cycles by 42% over the following two quarters.",
            },
            {
                type: "h2",
                content: "The Problem With Treating a Design System as a Deliverable",
            },
            {
                type: "p",
                content: "A deliverable has a finish line. A design system doesn't. Products have users with evolving needs. Products have bugs. Products need versioning and backwards compatibility. Products need someone to own them on an ongoing basis.",
            },
            {
                type: "p",
                content: "When you treat a design system as a deliverable, you build it once, ship it, and move on. The team who built it gets assigned to other work. No one owns the roadmap. Engineers start building components that aren't in the system because the system doesn't cover their use case. Designers fork library files because the shared components don't match the new brand direction. Six months later, you have three design systems and no one knows which one is authoritative.",
            },
            {
                type: "h2",
                content: "Semantic Tokens: The Decision That Changed Everything",
            },
            {
                type: "p",
                content: "Simplifai had a color system when I joined. It was descriptive: `blue-500`, `gray-200`, `red-400`. These are fine for a CSS utility library. They're catastrophic for a design system.",
            },
            {
                type: "p",
                content: "Descriptive tokens describe what a color is. Semantic tokens describe what a color does. The difference matters enormously when you need to update your brand, support dark mode, or ensure that a 'danger' state is consistently communicated across every surface in your product.",
            },
            {
                type: "ul",
                items: [
                    "`color.interactive.primary` — the fill for primary buttons, primary links, focus rings",
                    "`color.feedback.danger.foreground` — text and icon color in error states",
                    "`color.surface.overlay` — background for modal overlays, dropdown menus",
                    "`color.border.default` — the standard border color for inputs, cards, dividers",
                ],
            },
            {
                type: "p",
                content: "When we needed to adjust the primary brand color from Simplifai's original blue to a more distinctive purple, the change was one token update. One. Every button, link, focus ring, and selected state updated automatically. With a descriptive token system, that same change would have required hunting through 30+ component files.",
            },
            {
                type: "h2",
                content: "The API Contract Model",
            },
            {
                type: "p",
                content: "I borrowed a mental model from backend engineering: every component in the system is a public API. It has a contract — defined props, defined states, defined behaviors. Changes to that contract must be versioned. Breaking changes require a major version bump and a migration guide.",
            },
            {
                type: "p",
                content: "This sounds bureaucratic for a design system. It isn't. It's what allows engineers to confidently upgrade to a new version without fearing that their existing implementations will break. It's what allows designers to know that if they use the `Button` component, it will behave identically across every surface where it appears.",
            },
            {
                type: "blockquote",
                content: "The design system isn't a set of pretty components. It's a shared language with a grammar. When you change the grammar, everyone who speaks the language needs to know.",
            },
            {
                type: "h2",
                content: "The Two-Pizza Team Rule",
            },
            {
                type: "p",
                content: "I capped the core design system team at 2 designers and 1 frontend engineer. This is the maximum before the system starts optimizing for internal team consensus rather than user needs.",
            },
            {
                type: "p",
                content: "The consumer teams — the product teams building on top of the system — were our users. We ran monthly office hours where any product designer or engineer could bring their component needs. We tracked adoption metrics (what percentage of UI elements in production came from the system versus one-offs). We had a public roadmap in Notion so teams could see what was coming and when.",
            },
            {
                type: "h2",
                content: "Where the 42% Came From",
            },
            {
                type: "p",
                content: "Before the system, our Figma-to-code handoff took an average of 11 working days for a medium-complexity feature (3–5 screens, 10–20 components). After 6 months with the new system, that dropped to 6.4 days. We measured this by tracking Jira ticket cycle times for UI implementation tasks across 8 feature releases, before and after system adoption.",
            },
            {
                type: "ul",
                items: [
                    "Engineers stopped rebuilding components they'd already built. The system gave them a single source of truth.",
                    "Designers stopped speccing component behavior in handoff notes. The system documentation covered it.",
                    "QA found fewer UI inconsistencies in review. When everything comes from the same component library, visual bugs compound less.",
                    "Onboarding new engineers went faster. The system was their first point of reference — they didn't have to reverse-engineer patterns from existing code.",
                ],
            },
            {
                type: "h2",
                content: "What Doesn't Scale",
            },
            {
                type: "p",
                content: "Design systems optimized for consistency can slow down experimentation. If every new pattern needs to go through a 'should this be in the system?' conversation, you add latency to early-stage product work where speed matters more than consistency.",
            },
            {
                type: "p",
                content: "The fix is a clear tiering model: Tier 1 (in the system, stable, versioned), Tier 2 (in a sandbox, under evaluation, may graduate to Tier 1), Tier 3 (experimental, local to one team, explicitly not shared). This gives teams an escape valve for fast experimentation without polluting the authoritative system with unstable components.",
            },
            {
                type: "callout",
                label: "The full case study",
                content: "A detailed breakdown of the Simplifai design system — including the token architecture, component governance model, and adoption metrics — is available in my portfolio at adityachinchakar.com/work/simplifai-design-system.",
            },
        ],
    },
    {
        slug: "super-app-paradox-neobanks",
        title: "The Super-App Paradox: Why Feature Bloat Is Killing Neobanks",
        excerpt: "An unsolicited UX audit of India's Tier-1 neobanks reveals a consistent pattern: the more features they add, the less users trust them. Here's the cognitive architecture fix — and why intent-led design is the only way out.",
        date: "Mar 2025",
        readTime: "8 min",
        tags: ["FinTech", "UX Strategy", "Product Architecture"],
        content: [
            {
                type: "p",
                content: "India's leading neobanks — Fi, Jupiter, and Niyo — have a shared problem that their growth metrics are hiding. They've been competing on feature count, and it's costing them retention.",
            },
            {
                type: "p",
                content: "I spent three weeks auditing their UX: running through primary financial flows as a user, mapping their information architecture, counting navigation items, and running contrast and accessibility checks. The pattern that emerged was consistent enough to call a structural problem, not an execution problem.",
            },
            {
                type: "h2",
                content: "The Super-App Trap",
            },
            {
                type: "p",
                content: "The super-app playbook — offer every financial service in one place, increase daily active usage, capture more of the user's financial life — sounds compelling in a board presentation. In practice, it creates an interaction design nightmare.",
            },
            {
                type: "p",
                content: "When I opened each of the three apps I audited, I counted the number of distinct actions visible above the fold on the home screen without scrolling. Fi: 14. Jupiter: 11. Niyo: 9. For comparison, Revolut (considered a well-designed neobank internationally) shows 4.",
            },
            {
                type: "p",
                content: "Each additional visible action on a screen increases the cognitive load required to find the one action the user actually came to perform. This is not a new finding — Hick's Law and Miller's Law have been in every UX textbook for 30 years. But neobanks are learning it the hard way.",
            },
            {
                type: "h2",
                content: "What Cognitive Load Does to Trust",
            },
            {
                type: "p",
                content: "Money is a high-stakes domain. When a user feels uncertain or overwhelmed in a banking app, they don't just experience frustration — they experience anxiety. Anxiety in a financial context maps directly to trust erosion.",
            },
            {
                type: "blockquote",
                content: "The more features a neobank adds, the more it signals 'we are a technology company trying to be your bank' instead of 'we are your bank, powered by technology.' Trust requires the latter.",
            },
            {
                type: "p",
                content: "This is the paradox: neobanks add features to increase engagement, but each feature adds cognitive load, and accumulated cognitive load erodes the sense of safety and clarity that banking requires. Users who feel overwhelmed don't explore — they revert to their primary bank for anything that actually matters.",
            },
            {
                type: "h2",
                content: "The Intent-Led Architecture Fix",
            },
            {
                type: "p",
                content: "The structural solution is to design around user intent rather than feature inventory. Instead of a home screen that asks 'what feature do you want?', you design a home screen that asks 'what are you trying to accomplish?'",
            },
            {
                type: "p",
                content: "Primary intents in personal banking are predictably narrow:",
            },
            {
                type: "ul",
                items: [
                    "Check my balance / recent transactions (passive, high frequency)",
                    "Send money to someone (active, high confidence required)",
                    "Pay a bill (active, recurring, low friction required)",
                    "Understand my spending (reflective, low urgency)",
                    "Do something new (rare, exploratory — this is where feature discovery belongs)",
                ],
            },
            {
                type: "p",
                content: "An intent-led home screen surfaces the first three prominently and collapses everything else behind a 'More' or 'Explore' affordance. This isn't hiding features — it's respecting the user's attention and reserving it for their actual task.",
            },
            {
                type: "h2",
                content: "Progressive Disclosure, Not Progressive Loading",
            },
            {
                type: "p",
                content: "Every neobank I audited uses progressive loading well — skeleton screens, smooth state transitions, fast API responses. None of them uses progressive disclosure well.",
            },
            {
                type: "p",
                content: "Progressive disclosure means showing only the information needed for the current step in a task, and revealing more as the user advances. In a send-money flow, the home screen shows 'Send.' Tapping shows recent contacts and a search input. Selecting a contact shows amount entry. Confirming shows the review screen. At no point does the user see options irrelevant to the current step.",
            },
            {
                type: "p",
                content: "Fi's send-money flow shows investment nudges during the confirmation step. Jupiter shows a cashback offer after amount entry. These interruptions are individually minor, and collectively they teach users that the app's goals and the user's goals are not aligned.",
            },
            {
                type: "h2",
                content: "Why Trust Design Is the Actual Product",
            },
            {
                type: "p",
                content: "The neobanks winning long-term retention aren't winning on feature count. They're winning on trust. Trust in a financial product is a function of three things: it does what I expect it to do, it doesn't surprise me with things I didn't ask for, and it makes me feel in control.",
            },
            {
                type: "p",
                content: "Every design decision — how many items are on the home screen, whether you interrupt a transaction flow with a cross-sell, how you surface an error message — is a trust decision. Neobanks that internalize this will compound trust over time. Those that don't will keep seeing high acquisition and low long-term retention.",
            },
            {
                type: "callout",
                label: "Methodology note",
                content: "This audit covers publicly available UX of Fi, Jupiter, and Niyo as of Q1 2025. App versions: Fi 4.2, Jupiter 3.8, Niyo 5.1. Cognitive load observations are based on Nielsen Norman Group heuristic evaluation methodology and Miller's Law applied to visible navigation elements. This is unsolicited analysis — I am not affiliated with any of these companies.",
            },
        ],
    },
    {
        slug: "designing-for-bharat",
        title: "Designing for Bharat: What Rural UX Research Taught Me About Assumptions",
        excerpt: "Six field sessions in rural Pune designing MedSecure shattered every assumption I had about mobile-first design. Literacy, connectivity, family decision-making, and trust all mean something different when you leave Bangalore.",
        date: "Jan 2025",
        readTime: "7 min",
        tags: ["UX Research", "India", "Inclusion", "Mobile Design"],
        content: [
            {
                type: "p",
                content: "I grew up in India. I've been designing for Indian users for six years. I had an opinion about what 'mobile-first' means for the Indian market. Then I spent three weeks conducting UX research in rural Pune for the MedSecure healthcare project, and I had to rebuild most of those opinions from scratch.",
            },
            {
                type: "p",
                content: "What follows are the specific findings that changed how I think about inclusive design — not the feel-good summary version, but the specific moments where my assumptions were wrong.",
            },
            {
                type: "h2",
                content: "Assumption 1: Literacy Is Binary",
            },
            {
                type: "p",
                content: "I designed MedSecure's initial navigation with labeled icons — an icon plus a text label underneath. Standard mobile UX practice. WCAG recommends it. NNGroup recommends it. It's correct.",
            },
            {
                type: "p",
                content: "In our Pune pilot sessions, three of our eight participants had functional literacy levels that made short English labels readable but slow. 'Records' required a beat of processing. 'Consent' required explanation from the health worker facilitating the session.",
            },
            {
                type: "p",
                content: "More surprising: two participants with low English literacy navigated confidently using icon-only once they had learned the icons in the first session. They had developed a spatial memory of the app — 'the shield is where I control who sees my information' — that was faster and more reliable than reading the label each time.",
            },
            {
                type: "blockquote",
                content: "Literacy isn't binary. It's a spectrum, and different users on that spectrum develop different compensating strategies. Good inclusive design doesn't force everyone onto the literacy-dependent path.",
            },
            {
                type: "p",
                content: "The fix was a progressive disclosure of labels: icon-only in the bottom nav by default, with the label revealed on first use and on long press. Users who need the label get it. Users who prefer icon-only aren't slowed down by text they don't need.",
            },
            {
                type: "h2",
                content: "Assumption 2: The Primary User Is an Individual",
            },
            {
                type: "p",
                content: "Almost every UX framework I was trained in assumes a single user interacting with an interface for their own purposes. Health apps in particular tend to assume individual agency: 'the patient controls their own health data.'",
            },
            {
                type: "p",
                content: "In the families I spoke with in rural Pune, health decisions — and the records associated with those decisions — were family decisions. A 45-year-old man with diabetes showed me his phone during the research session. His wife had set up the app for him. His son managed the consent requests on his behalf. He knew roughly what the app did but wasn't the primary operator.",
            },
            {
                type: "p",
                content: "This pattern appeared in 5 of 8 sessions. MedSecure's 'Care Circle' feature — which allows trusted family members to have view or approval access to a patient's records — was not originally in scope. I added it after the first week of field research. It became the most used feature in the pilot.",
            },
            {
                type: "h2",
                content: "Assumption 3: Connectivity Is the Main Technical Barrier",
            },
            {
                type: "p",
                content: "I went into the research thinking connectivity would be the dominant technical constraint. Rural India has real connectivity gaps, and I had designed an offline-first data sync model for MedSecure specifically to address this.",
            },
            {
                type: "p",
                content: "Connectivity was a factor. It wasn't the primary one. Storage was.",
            },
            {
                type: "p",
                content: "Six of the eight participants in our pilot were using budget Android devices with 16–32GB total storage, of which 8–14GB was available. Several had already uninstalled apps to free space. One participant showed me a notification that he had to delete photos to proceed with an app update.",
            },
            {
                type: "ul",
                items: [
                    "MedSecure's APK needed to stay under 8MB installed. We achieved 6.4MB by deferring all non-critical assets.",
                    "Medical records (PDFs, images) had to offer a 'save to cloud only' option — many users explicitly did not want records taking phone storage.",
                    "Onboarding had to load instantly with no dependency on a large asset download. We stripped all illustration assets from the initial onboarding flow.",
                ],
            },
            {
                type: "h2",
                content: "Assumption 4: Trust Is About Security",
            },
            {
                type: "p",
                content: "I came in thinking the main trust barrier for a medical records app would be security — users worried about their data being stolen or misused. I planned a prominent 'your data is encrypted' explainer in onboarding.",
            },
            {
                type: "p",
                content: "The actual trust barrier was institutional, not technical. Several participants asked versions of the same question: 'If I link my ABHA card to this, will the government know? Will the insurance company know? Will my employer know?'",
            },
            {
                type: "p",
                content: "They weren't worried about hackers. They were worried about a system they had learned to distrust through experience — employers who raised insurance premiums after accessing health records, clinics that shared records without consent for billing purposes, bureaucratic processes that moved health information without patients understanding where it went.",
            },
            {
                type: "p",
                content: "The design response to this is different from a security-focused response. It's not 'your data is encrypted.' It's 'you control exactly who sees what, and you can revoke access at any time.' The UI needs to make that control visible, auditable, and reversible — not just promised in a privacy policy.",
            },
            {
                type: "h2",
                content: "What Changed in My Practice",
            },
            {
                type: "p",
                content: "I now build a 'context assumptions' document at the start of every project: what device, connectivity, literacy level, and social context am I assuming my primary user has? When I'm wrong — and field research usually shows me I'm wrong about at least one — I have a clear record of what changed and why.",
            },
            {
                type: "p",
                content: "If you design digital products for Indian users and have never done research outside of Tier-1 cities, you are designing for an abstraction. The abstraction is useful. It is not the same as the user.",
            },
            {
                type: "callout",
                label: "On MedSecure",
                content: "MedSecure is a 0→1 design concept built around India's ABDM (Ayushman Bharat Digital Mission) framework. The research described here was conducted as part of an internal proof-of-concept pilot. Full case study: adityachinchakar.com/work/medsecure.",
            },
        ],
    },
];

export async function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://adityachinchakar.com/writing/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://adityachinchakar.com/writing/${post.slug}`,
            type: "article",
        },
    };
}

function renderSection(section: Section, idx: number) {
    switch (section.type) {
        case "h2":
            return (
                <h2 key={idx} className="text-xl font-bold text-zinc-900 mt-10 mb-4 leading-snug">
                    {section.content}
                </h2>
            );
        case "h3":
            return (
                <h3 key={idx} className="text-lg font-bold text-zinc-800 mt-8 mb-3">
                    {section.content}
                </h3>
            );
        case "p":
            return (
                <p key={idx} className="text-base text-zinc-600 leading-relaxed mb-4">
                    {section.content}
                </p>
            );
        case "ul":
            return (
                <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
                    {section.items?.map((item, i) => (
                        <li key={i} className="text-base text-zinc-600 leading-relaxed">
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case "blockquote":
            return (
                <blockquote key={idx} className="border-l-4 border-zinc-900 pl-6 py-1 my-8">
                    <p className="text-lg font-medium text-zinc-800 leading-relaxed italic">
                        {section.content}
                    </p>
                </blockquote>
            );
        case "callout":
            return (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 my-8">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                        {section.label}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{section.content}</p>
                </div>
            );
        default:
            return null;
    }
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) notFound();

    return (
        <div className="bg-white min-h-screen">
            <article className="container mx-auto max-w-2xl px-6 pt-16 pb-24">
                {/* Back */}
                <Link
                    href="/writing"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                    All writing
                </Link>

                {/* Header */}
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                        <span className="text-xs text-zinc-400">{post.date}</span>
                        <span className="text-zinc-300 text-xs">·</span>
                        <span className="text-xs text-zinc-400">{post.readTime} read</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight leading-[1.1] mb-5">
                        {post.title}
                    </h1>
                    <p className="text-lg text-zinc-500 leading-relaxed mb-6">
                        {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <hr className="border-zinc-100 mb-10" />

                {/* Content */}
                <div className="prose-zinc">
                    {post.content.map((section, idx) => renderSection(section, idx))}
                </div>

                <hr className="border-zinc-100 mt-12 mb-10" />

                {/* Footer */}
                <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="text-sm font-semibold text-zinc-900 mb-1">Aditya Chinchakar</p>
                        <p className="text-xs text-zinc-500">Senior Product Designer · Founder of Aulys · Based in India</p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="https://linkedin.com/in/adityachinchakar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
                        >
                            LinkedIn <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        <Link
                            href="https://medium.com/@adichinchakar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
                        >
                            Medium <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                </footer>

                {/* More writing CTA */}
                <div className="mt-12 bg-zinc-900 rounded-2xl p-8 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">More writing</p>
                    <h2 className="text-xl font-black text-white mb-4 tracking-tight">Read more essays</h2>
                    <Link
                        href="/writing"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-colors"
                    >
                        Back to Writing
                    </Link>
                </div>
            </article>
        </div>
    );
}
