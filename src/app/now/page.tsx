import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase, Rocket, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Now — Aditya Chinchakar",
    description: "What I'm focused on right now. Currently in Pune, India. Building Aulys and looking for the next big adventure.",
    alternates: { canonical: "https://adityachinchakar.com/now" },
    openGraph: {
        title: "What I'm doing now | Aditya Chinchakar",
        description: "What I'm focused on right now. Currently in Pune, India. Building Aulys and looking for the next big adventure.",
        url: "https://adityachinchakar.com/now",
    },
};

export default function NowPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            <section className="container mx-auto max-w-3xl px-6 pt-20 pb-24">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-4">
                        What I&apos;m doing <span className="text-zinc-400">now.</span>
                    </h1>
                    <p className="text-base text-zinc-500 leading-relaxed">
                        This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:underline font-medium">now page</a>. 
                        It outlines what my current focuses are at this moment in my life.
                        <br />
                        <span className="text-xs font-mono text-zinc-400 mt-2 block">Last updated: June 2026</span>
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Location */}
                    <div className="relative pl-8 md:pl-0">
                        <div className="md:hidden absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300" />
                        <div className="flex items-start gap-4">
                            <div className="hidden md:flex mt-1 p-2 bg-white rounded-lg border border-zinc-200 shadow-sm">
                                <MapPin className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-zinc-900 mb-2">Location</h2>
                                <p className="text-zinc-600 leading-relaxed">
                                    I am currently based in <strong className="text-zinc-900 font-semibold">Pune, India</strong>. 
                                    I am fully open to remote, hybrid, or onsite roles across the globe and am ready to relocate for the right opportunity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Career */}
                    <div className="relative pl-8 md:pl-0">
                        <div className="md:hidden absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300" />
                        <div className="flex items-start gap-4">
                            <div className="hidden md:flex mt-1 p-2 bg-white rounded-lg border border-zinc-200 shadow-sm">
                                <Briefcase className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-zinc-900 mb-2">Career Focus</h2>
                                <p className="text-zinc-600 leading-relaxed mb-4">
                                                                    I am actively interviewing for my next big role. I can start immediately after August 2026 — conversations should start now.
                                                                </p>
                                <ul className="list-disc list-inside text-zinc-600 space-y-1.5 marker:text-zinc-400">
                                    <li>Targeting <strong className="text-zinc-900">Founding Designer</strong>, <strong className="text-zinc-900">Staff Product Designer</strong>, <strong className="text-zinc-900">Lead Product Designer</strong>, or <strong className="text-zinc-900">Senior Product Designer</strong> positions.</li>
                                    <li>Particularly interested in AI-native products, Developer Tools, or highly technical B2B SaaS.</li>
                                    <li>Taking on select freelance contracts in the meantime.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Building */}
                    <div className="relative pl-8 md:pl-0">
                        <div className="md:hidden absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-300" />
                        <div className="flex items-start gap-4">
                            <div className="hidden md:flex mt-1 p-2 bg-emerald-50 rounded-lg border border-emerald-100 shadow-sm">
                                <Rocket className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-zinc-900 mb-2">What I&apos;m Building</h2>
                                <p className="text-zinc-600 leading-relaxed">
                                    Outside of job hunting, I am building the <strong className="text-zinc-900">Aulys Accessibility Ecosystem</strong> — an end-to-end accessibility operating system for product teams. 
                                    I've already shipped the core suite, which includes the <Link href="https://aulys-app.vercel.app" target="_blank" className="font-semibold text-emerald-600 hover:underline">WCAG 2.2 Figma Plugin</Link>, 
                                    a Web Scanner SaaS, a 27-page Team Dashboard, and a REST API powered by Llama 3.1. Right now, I'm scaling these active products while mapping out the upcoming Developer CLI and Browser Extension.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reading / Exploring */}
                    <div className="relative pl-8 md:pl-0">
                        <div className="md:hidden absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-300" />
                        <div className="flex items-start gap-4">
                            <div className="hidden md:flex mt-1 p-2 bg-white rounded-lg border border-zinc-200 shadow-sm">
                                <BookOpen className="w-5 h-5 text-zinc-600" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-zinc-900 mb-2">Exploring & Learning</h2>
                                <p className="text-zinc-600 leading-relaxed mb-4">
                                    When I&apos;m not pushing pixels or writing code, I am diving deep into the intersection of AI and accessibility. 
                                    I am currently exploring new Generative UI patterns and figuring out how interfaces can dynamically adapt to a user's specific motor or visual needs in real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-20 pt-10 border-t border-zinc-200">
                    <div className="bg-white rounded-2xl border border-zinc-200 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                        <div>
                            <h3 className="text-zinc-900 font-bold mb-1">Looking for a designer?</h3>
                            <p className="text-sm text-zinc-500">I have immediate availability for contracts.</p>
                        </div>
                        <a 
                            href="mailto:adichinchakar@gmail.com" 
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors w-full sm:w-auto justify-center"
                        >
                            Get in touch <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
