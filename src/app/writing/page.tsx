import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Writing — Product Design Insights | Aditya Chinchakar",
    description: "Essays on AI UX, design systems, accessibility, and building 0→1 products. Practical thinking from 6+ years of shipping product design at Infosys, Simplifai, and as founder of Aulys.",
    alternates: { canonical: "https://adityachinchakar.com/writing" },
    openGraph: {
        title: "Writing | Aditya Chinchakar — Product Design Insights",
        description: "Essays on AI UX, design systems, accessibility, and 0→1 product design.",
        url: "https://adityachinchakar.com/writing",
        type: "website",
    },
};

type Platform = "medium" | "linkedin" | "portfolio";
type Status = "published" | "coming-soon";

interface Post {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    platform: Platform;
    status: Status;
    href?: string;
}

const posts: Post[] = [
    {
        title: "The Super-App Paradox: Why Feature Bloat Is Killing Neobanks",
        excerpt: "An unsolicited UX audit of India's Tier-1 neobanks reveals a consistent pattern: the more features they add, the less users trust them. Here's the cognitive architecture fix — and why intent-led design is the only way out.",
        date: "Mar 2025",
        readTime: "8 min",
        tags: ["FinTech", "UX Strategy", "Product Architecture"],
        platform: "medium",
        status: "published",
        href: "/writing/super-app-paradox-neobanks",
    },
    {
        title: "How I Built a Production Figma Plugin Solo: Every Technical Decision",
        excerpt: "Building Aulys meant making hard tradeoffs between Figma's plugin API constraints, a 60fps performance budget, and WCAG accuracy. Here's every decision I made — and the ones I got wrong the first time.",
        date: "Feb 2025",
        readTime: "10 min",
        tags: ["Figma API", "Accessibility", "0→1 Build", "Engineering"],
        platform: "medium",
        status: "published",
        href: "/writing/figma-plugin-solo-build",
    },
    {
        title: "Designing for Bharat: What Rural UX Research Taught Me About Assumptions",
        excerpt: "Six field sessions in rural Pune designing MedSecure shattered every assumption I had about mobile-first design. Literacy, connectivity, family decision-making, and trust all mean something different when you leave Bangalore.",
        date: "Jan 2025",
        readTime: "7 min",
        tags: ["UX Research", "India", "Inclusion", "Mobile Design"],
        platform: "linkedin",
        status: "published",
        href: "/writing/designing-for-bharat",
    },
    {
        title: "Design Systems Are Products: How We Cut Dev Cycles by 42%",
        excerpt: "Most design systems fail because they're treated as deliverables, not products with users, roadmaps, and adoption metrics. Here's the systems-thinking approach I used at Simplifai — semantic tokens, API contracts, and a two-pizza team rule.",
        date: "Dec 2024",
        readTime: "9 min",
        tags: ["Design Systems", "Engineering", "Process", "Design Ops"],
        platform: "medium",
        status: "published",
        href: "/writing/design-systems-are-products",
    },
    {
        title: "The AI UX Problem Nobody Talks About: Trust Over Intelligence",
        excerpt: "GPT-4 is smarter than any human, but users still don't trust it for high-stakes decisions. Designing AI interfaces that earn trust requires a fundamentally different mental model — and it starts with calibrated uncertainty.",
        date: "Nov 2024",
        readTime: "6 min",
        tags: ["AI Design", "Trust", "Mental Models", "Enterprise UX"],
        platform: "linkedin",
        status: "coming-soon",
    },
    {
        title: "From Senior Designer to Founder: What Building 0→1 Actually Looks Like",
        excerpt: "Everyone puts '0→1' in job descriptions. Almost nobody has done it. Here's what it actually means — the loneliness of no design system, the bad calls you make without a PM, and the one thing nobody tells you about building solo.",
        date: "Oct 2024",
        readTime: "5 min",
        tags: ["Founder", "Career", "Leadership", "0→1"],
        platform: "linkedin",
        status: "coming-soon",
    },
];

const platformConfig: Record<Platform, { label: string; color: string; bg: string; border: string }> = {
    medium: {
        label: "Medium",
        color: "text-zinc-700",
        bg: "bg-zinc-50",
        border: "border-zinc-200",
    },
    linkedin: {
        label: "LinkedIn",
        color: "text-blue-700",
        bg: "bg-blue-50",
        border: "border-blue-200",
    },
    portfolio: {
        label: "Portfolio",
        color: "text-violet-700",
        bg: "bg-violet-50",
        border: "border-violet-200",
    },
};

const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

export default function WritingPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            {/* Hero */}
            <section className="container mx-auto max-w-4xl px-6 pt-20 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    Writing
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-6 leading-[1.08]">
                    Thinking out loud<br />
                    <span className="text-zinc-400 font-bold">on design, AI & craft.</span>
                </h1>
                <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed mb-8">
                    Practical essays on AI UX, design systems, accessibility, and what building 0→1 products actually looks like.
                    Published on <strong className="text-zinc-700">Medium</strong> and <strong className="text-zinc-700">LinkedIn</strong>.
                </p>

                {/* Social follow CTAs */}
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="https://medium.com/@adichinchakar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors"
                    >
                        Follow on Medium <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/adityachinchakar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 hover:border-zinc-400 transition-colors"
                    >
                        Follow on LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </section>

            {/* Topic tags */}
            <section className="container mx-auto max-w-4xl px-6 pb-8">
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-semibold cursor-pointer">
                        All topics
                    </span>
                    {allTags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 cursor-pointer hover:border-zinc-400 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* Posts */}
            <section className="container mx-auto max-w-4xl px-6 pb-24" aria-label="Writing posts">
                <div className="flex flex-col gap-4">
                    {posts.map((post, i) => {
                        const platform = platformConfig[post.platform];
                        const isComingSoon = post.status === "coming-soon";

                        const isInternal = !isComingSoon && post.href?.startsWith("/");
                        const cardClass = "group bg-white rounded-2xl border border-zinc-100 p-6 md:p-8 hover:border-zinc-300 hover:shadow-sm transition-all duration-200";
                        const cardInner = (
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                <div className="flex-1 min-w-0">
                                    {/* Meta row */}
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${platform.bg} ${platform.color} ${platform.border}`}>
                                            {platform.label}
                                        </span>
                                        {isComingSoon && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-amber-50 text-amber-700 border-amber-200">
                                                Coming soon
                                            </span>
                                        )}
                                        <span className="text-xs text-zinc-400">{post.date}</span>
                                        <span className="text-zinc-300 text-xs">·</span>
                                        <span className="text-xs text-zinc-400">{post.readTime} read</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-lg font-bold text-zinc-900 mb-2 leading-snug group-hover:text-zinc-700 transition-colors">
                                        {post.title}
                                        {!isComingSoon && !isInternal && <ArrowUpRight className="inline w-4 h-4 mb-0.5 ml-1" />}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Number */}
                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex-shrink-0 text-lg font-black text-zinc-200">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                            </div>
                        );

                        return isInternal ? (
                            <Link key={i} href={post.href as string} className={`${cardClass} block`}>
                                {cardInner}
                            </Link>
                        ) : (
                            <article key={i} className={cardClass}>
                                {cardInner}
                            </article>
                        );
                    })}
                </div>

                {/* Newsletter / notify section */}
                <div className="mt-12 bg-zinc-900 rounded-3xl p-8 md:p-10 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">Get notified</p>
                    <h2 className="text-2xl font-black text-white mb-3 tracking-tight">New posts drop on Medium & LinkedIn.</h2>
                    <p className="text-zinc-400 text-sm mb-6 max-w-sm mx-auto">
                        Follow on either platform to get notified when new essays publish — no spam, just signal.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="https://medium.com/@adichinchakar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-900 text-sm font-bold hover:bg-zinc-100 transition-colors"
                        >
                            Follow on Medium <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/adityachinchakar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-800 text-white text-sm font-bold hover:bg-zinc-700 transition-colors border border-zinc-700"
                        >
                            Follow on LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
