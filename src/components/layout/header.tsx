"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ContactSheet } from "@/components/ui/contact-sheet";

const navLinks = [
    { href: "https://aulys-app.vercel.app/", label: "Aulys", isExternal: true },
    { href: "/#work", label: "Case Studies" },
    { href: "/#about", label: "About" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactSheetOpen, setIsContactSheetOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-zinc-100" : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-zinc-900 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-2 py-1 -ml-2">
                        <span className="font-black tracking-tight text-zinc-900">Aditya</span><span className="font-light tracking-tight text-zinc-400">Chinchakar</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.isExternal ? "_blank" : undefined}
                                rel={link.isExternal ? "noopener noreferrer" : undefined}
                                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-3 py-1.5"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsContactSheetOpen(true)}
                            className="px-5 py-2 rounded-full bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            Let's Talk
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-background border-b border-zinc-200 p-6 md:hidden flex flex-col gap-4"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target={link.isExternal ? "_blank" : undefined}
                                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                                    className="text-lg font-medium hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-3 py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsContactSheetOpen(true);
                                }}
                                className="w-full text-left text-lg font-medium text-accent hover:opacity-80 transition-opacity mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md px-3 py-2"
                            >
                                Let's Talk
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <ContactSheet
                isOpen={isContactSheetOpen}
                onClose={() => setIsContactSheetOpen(false)}
            />
        </>
    );
}
