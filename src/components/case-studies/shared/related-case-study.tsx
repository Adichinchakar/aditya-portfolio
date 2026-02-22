"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Layers, GitBranch, Palette } from "lucide-react";

type Target = "flow-builder" | "design-system" | "aulys";

const DATA: Record<Target, {
    href: string;
    accentFrom: string;
    accentTo: string;
    accentText: string;
    accentBadgeBg: string;
    accentBadgeBorder: string;
    tag: string;
    title: string;
    description: string;
    highlights: { icon: React.ElementType; label: string }[];
}> = {
    "design-system": {
        href: "/work/simplifai-design-system",
        accentFrom: "from-blue-500",
        accentTo: "to-indigo-600",
        accentText: "text-blue-600",
        accentBadgeBg: "bg-blue-50",
        accentBadgeBorder: "border-blue-200",
        tag: "Continue the story →",
        title: "Simplifai Design System",
        description:
            "The Flow Builder needed a shared language across design and code. See how we built a token-driven, component library that made the product scalable and consistent.",
        highlights: [
            { icon: Layers, label: "120+ components built" },
            { icon: Palette, label: "8 semantic token categories" },
            { icon: GitBranch, label: "Figma → React token sync" },
        ],
    },
    "flow-builder": {
        href: "/work/simplifai",
        accentFrom: "from-purple-500",
        accentTo: "to-violet-600",
        accentText: "text-purple-600",
        accentBadgeBg: "bg-purple-50",
        accentBadgeBorder: "border-purple-200",
        tag: "See the product →",
        title: "Simplifai Flow Builder",
        description:
            "The Design System powered this visual automation canvas — see the UX research, IA redesign, and node-based flow builder we designed for non-technical teams.",
        highlights: [
            { icon: Zap, label: "92% task completion rate" },
            { icon: GitBranch, label: "7-node branching flows" },
            { icon: Layers, label: "68% fewer navigation steps" },
        ],
    },
    "aulys": {
        href: "/work/aulys",
        accentFrom: "from-blue-500",
        accentTo: "to-indigo-600",
        accentText: "text-blue-600",
        accentBadgeBg: "bg-blue-50",
        accentBadgeBorder: "border-blue-200",
        tag: "Explore engineering →",
        title: "Aulys Accessibility",
        description:
            "Making WCAG 2.2 compliance achievable for every organization through an automated Figma plugin and a continuous integration SaaS platform.",
        highlights: [
            { icon: Zap, label: "<10s scans" },
            { icon: Layers, label: "500+ layers" },
            { icon: GitBranch, label: "CI/CD integration" },
        ],
    },
};

export function RelatedCaseStudy({ target }: { target: Target }) {
    const d = DATA[target];

    return (
        <section className="px-6 py-24 bg-white border-t border-zinc-100">
            <div className="container mx-auto max-w-6xl">

                {/* Label */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8"
                >
                    Related Case Study
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="group relative rounded-3xl border border-zinc-200 bg-zinc-50 overflow-hidden hover:border-zinc-300 transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.07)]"
                >
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.accentFrom} ${d.accentTo}`} />

                    {/* Ambient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${d.accentFrom}/5 ${d.accentTo}/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div className="relative z-10 p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">

                        {/* Left: content */}
                        <div>
                            {/* Tag */}
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${d.accentBadgeBg} ${d.accentBadgeBorder} ${d.accentText} mb-5`}>
                                {d.tag}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-4 leading-tight">
                                {d.title}
                            </h3>

                            <p className="text-zinc-500 text-base font-medium max-w-xl leading-relaxed mb-8">
                                {d.description}
                            </p>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-3">
                                {d.highlights.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-semibold text-zinc-700 shadow-sm"
                                    >
                                        <Icon className={`w-3.5 h-3.5 ${d.accentText}`} />
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: CTA button */}
                        <div className="flex md:flex-col items-center justify-start md:justify-center">
                            <Link
                                href={d.href}
                                className={`inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-br ${d.accentFrom} ${d.accentTo} text-white font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                            >
                                View Case Study
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Bottom Contact CTA */}
            <div className="container mx-auto max-w-4xl mt-32 text-center pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 mb-6">
                        Ready to talk?
                    </h2>
                    <p className="text-zinc-500 font-medium mb-8 max-w-xl">
                        I'm currently open to new opportunities. Let's build something amazing together.
                    </p>
                    <Link
                        href="mailto:adichinchakar@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
