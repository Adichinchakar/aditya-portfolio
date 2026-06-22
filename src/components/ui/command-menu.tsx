"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { FileText, Home, FolderOpen, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => void) => {
        setOpen(false);
        command();
    }, []);

    // Close on Escape
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                e.preventDefault();
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open]);

    // Prevent body scroll when open
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm"
                    />
                    
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-xl bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden border border-white ring-1 ring-zinc-200/50"
                    >
                        <Command className="w-full flex flex-col bg-transparent">
                            <div className="flex items-center border-b border-zinc-200/50 px-3">
                                <Command.Input 
                                    placeholder="Type a command or search..." 
                                    className="w-full px-2 py-4 text-base outline-none placeholder:text-zinc-400 bg-transparent text-zinc-800"
                                    autoFocus
                                />
                                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-zinc-400 bg-zinc-100 rounded border border-zinc-200/60 font-sans pointer-events-none select-none h-6">
                                    ESC
                                </kbd>
                            </div>
                            
                            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-none cmdk-list">
                                <Command.Empty className="py-10 text-center text-sm text-zinc-500 font-medium">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Navigation" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400">
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <Home className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Home
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/work"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <FolderOpen className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Case Studies
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/resume"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <FileText className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Resume
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/writing"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <FileText className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Writing
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/now"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <FileText className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Now
                                    </Command.Item>
                                </Command.Group>

                                <Command.Separator className="h-px bg-zinc-100 my-1 mx-2" />

                                <Command.Group heading="Case Studies" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400">
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/work/simplifai"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Simplifai Workflow Engine
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/work/aulys"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Aulys Accessibility
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/work/simplifai-design-system"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Simplifai Design System
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/work/infosys"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Infosys × Imagine Learning
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => router.push("/work/nexus-banking"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Nexus FinTech UX Audit
                                    </Command.Item>
                                </Command.Group>

                                <Command.Separator className="h-px bg-zinc-100 my-1 mx-2" />

                                <Command.Group heading="Contact & Socials" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-zinc-400">
                                    <Command.Item 
                                        onSelect={() => runCommand(() => {
                                            navigator.clipboard.writeText("adichinchakar@gmail.com");
                                        })}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <Mail className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        Copy Email Address
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => window.open("https://linkedin.com/in/adityachinchakar", "_blank"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <Linkedin className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        LinkedIn
                                    </Command.Item>
                                    <Command.Item 
                                        onSelect={() => runCommand(() => window.open("https://github.com/Adichinchakar", "_blank"))}
                                        className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer data-[selected=true]:bg-zinc-100 data-[selected=true]:text-zinc-900 text-zinc-600 font-medium transition-colors"
                                    >
                                        <Github className="w-4 h-4 text-zinc-400 group-data-[selected=true]:text-zinc-600 transition-colors" />
                                        GitHub
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>
                            <div className="px-4 py-3 bg-zinc-50/50 border-t border-zinc-200/50 flex items-center justify-between">
                                <span className="text-[10px] font-medium text-zinc-400 flex items-center gap-1.5">
                                    <kbd className="px-1.5 py-0.5 rounded border border-zinc-200 bg-white font-sans shadow-sm">↑</kbd>
                                    <kbd className="px-1.5 py-0.5 rounded border border-zinc-200 bg-white font-sans shadow-sm">↓</kbd>
                                    to navigate
                                </span>
                                <span className="text-[10px] font-medium text-zinc-400 flex items-center gap-1.5">
                                    <kbd className="px-1.5 py-0.5 rounded border border-zinc-200 bg-white font-sans shadow-sm">↵</kbd>
                                    to select
                                </span>
                            </div>
                        </Command>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
