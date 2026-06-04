import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-zinc-200 relative bg-zinc-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-zinc-500 text-center md:text-left flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">AC</span>
                    © {new Date().getFullYear()} Aditya Chinchakar. Built with Next.js, Tailwind, and Agentic AI.
                </p>

                <nav className="flex gap-6 items-center">
                    <Link
                        href="https://github.com/Adichinchakar"
                        target="_blank"
                        aria-label="GitHub Profile"
                        onClick={() => trackEvent("click_social", { platform: "github" })}
                        className="text-zinc-500 hover:text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/adityachinchakar"
                        target="_blank"
                        aria-label="LinkedIn Profile"
                        onClick={() => trackEvent("click_social", { platform: "linkedin" })}
                        className="text-zinc-500 hover:text-zinc-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <a
                        href="mailto:adichinchakar@gmail.com"
                        aria-label="Send email to adichinchakar@gmail.com"
                        onClick={() => trackEvent("click_email", { source: "footer" })}
                        className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm px-1 py-0.5"
                    >
                        adichinchakar@gmail.com
                    </a>
                </nav>
            </div>
        </footer>
    );
}
