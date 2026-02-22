import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-zinc-100 relative bg-zinc-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted-foreground text-center md:text-left flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center text-[10px] font-bold text-zinc-900">N</span>
                    © 2026 Aditya Chinchakar. Built with Next.js, Tailwind, and Agentic AI.
                </p>

                <nav className="flex gap-6 items-center">
                    <Link
                        href="https://github.com/Adichinchakar"
                        target="_blank"
                        aria-label="GitHub Profile"
                        className="text-muted-foreground hover:text-zinc-900 transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/adityachinchakar"
                        target="_blank"
                        aria-label="LinkedIn Profile"
                        className="text-muted-foreground hover:text-zinc-900 transition-colors"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="mailto:adichinchakar@gmail.com"
                        aria-label="Email Me"
                        className="text-muted-foreground hover:text-zinc-900 transition-colors text-sm font-medium"
                    >
                        adichinchakar@gmail.com
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
