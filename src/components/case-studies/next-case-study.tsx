import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CASE_STUDIES = [
    {
        slug: "simplifai-design-system",
        title: "Simplifai Design System",
        description: "Built for consistency and speed scaling across enterprise products.",
    },
    {
        slug: "aulys",
        title: "Aulys Accessibility",
        description: "Intelligent layout and design compliance automation tool for Figma.",
    },
    {
        slug: "simplifai",
        title: "Simplifai Workflow Engine",
        description: "Node-based visual builder for complex enterprise AI automations.",
    },
];

export function NextCaseStudy({ currentSlug }: { currentSlug: string }) {
    const currentIndex = CASE_STUDIES.findIndex(c => c.slug === currentSlug);
    if (currentIndex === -1) return null;

    const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
    const nextStudy = CASE_STUDIES[nextIndex];

    return (
        <section className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))] mix-blend-plus-lighter pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center flex flex-col items-center">
                <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-6 block">Next Case Study</span>
                <Link href={`/work/${nextStudy.slug}`} className="group inline-block">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 transition-colors group-hover:text-zinc-300">
                        {nextStudy.title}
                    </h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-colors group-hover:text-zinc-500">
                        {nextStudy.description}
                    </p>
                    <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 cursor-pointer">
                        View Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
