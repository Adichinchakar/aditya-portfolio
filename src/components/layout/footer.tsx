import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-surface py-20 px-6 border-t border-white/5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Let's build <br />
                        <span className="text-accent">something legendary.</span>
                    </h2>
                    <Link
                        href="mailto:contact@example.com"
                        className="text-xl text-muted-foreground hover:text-white transition-colors underline decoration-accent decoration-2 underline-offset-4"
                    >
                        contact@example.com
                    </Link>
                </div>

                <div className="flex flex-col gap-6 items-start md:items-end">
                    <nav className="flex gap-6">
                        <Link href="#" aria-label="GitHub Profile" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all">
                            <Github size={20} />
                        </Link>
                        <Link href="#" aria-label="LinkedIn Profile" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" aria-label="Twitter Profile" className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-black transition-all">
                            <Twitter size={20} />
                        </Link>
                    </nav>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Design-to-Code Portfolio.
                    </p>
                </div>
            </div>
        </footer>
    );
}
