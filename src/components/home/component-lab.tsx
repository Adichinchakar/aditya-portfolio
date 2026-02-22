"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SmartButton } from "@/components/home/smart-button";
import { Layers } from "lucide-react";

const CODE_LINES = [
  { tokens: [{ text: "function ", color: "text-purple-400" }, { text: "SmartButton", color: "text-yellow-300" }, { text: "() {", color: "text-zinc-300" }] },
  { tokens: [{ text: "  const ", color: "text-purple-400" }, { text: "[status, setStatus]", color: "text-blue-300" }, { text: " = ", color: "text-zinc-300" }, { text: "useState", color: "text-yellow-300" }, { text: '("idle");', color: "text-zinc-300" }] },
  { tokens: [] },
  { tokens: [{ text: "  const ", color: "text-purple-400" }, { text: "handleClick", color: "text-blue-300" }, { text: " = () => {", color: "text-zinc-300" }] },
  { tokens: [{ text: "    setStatus", color: "text-blue-300" }, { text: '("loading");', color: "text-zinc-300" }] },
  { tokens: [{ text: "    setTimeout", color: "text-yellow-300" }, { text: "(() => ", color: "text-zinc-300" }, { text: "setStatus", color: "text-blue-300" }, { text: '("success"), ', color: "text-zinc-300" }, { text: "2000", color: "text-orange-400" }, { text: ");", color: "text-zinc-300" }] },
  { tokens: [{ text: "  };", color: "text-zinc-300" }] },
  { tokens: [] },
  { tokens: [{ text: "  return (", color: "text-zinc-300" }] },
  { tokens: [{ text: "    <", color: "text-zinc-500" }, { text: "AnimatePresence", color: "text-green-400" }, { text: ' mode="wait">', color: "text-zinc-500" }] },
  { tokens: [{ text: "      {status === ", color: "text-zinc-300" }, { text: '"idle"', color: "text-orange-300" }, { text: " && (", color: "text-zinc-300" }] },
  { tokens: [{ text: "        <", color: "text-zinc-500" }, { text: "motion.button", color: "text-green-400" }, { text: " layoutId=", color: "text-zinc-400" }, { text: '"button"', color: "text-orange-300" }, { text: ">", color: "text-zinc-500" }] },
  { tokens: [{ text: "          Deploy Project", color: "text-zinc-300" }] },
  { tokens: [{ text: "        </", color: "text-zinc-500" }, { text: "motion.button", color: "text-green-400" }, { text: ">", color: "text-zinc-500" }] },
  { tokens: [{ text: "      )}", color: "text-zinc-300" }] },
  { tokens: [{ text: "    </", color: "text-zinc-500" }, { text: "AnimatePresence", color: "text-green-400" }, { text: ">", color: "text-zinc-500" }] },
  { tokens: [{ text: "  );", color: "text-zinc-300" }] },
  { tokens: [{ text: "}", color: "text-zinc-300" }] },
];

export function ComponentLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 mb-8 backdrop-blur-md shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            Interactive Demo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-zinc-900"
          >
            Engineered Micro-interactions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="text-zinc-500 mt-5 text-lg font-medium"
          >
            I build components that feel alive. Try it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Live Playground */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ type: "spring" as const, stiffness: 260, damping: 24, delay: 0.1 }}
            className="min-h-[420px] flex flex-col items-center justify-center rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10"
          >
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-10">Click to interact</p>
            <SmartButton />
          </motion.div>

          {/* Syntax-highlighted code block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ type: "spring" as const, stiffness: 260, damping: 24, delay: 0.2 }}
            className="min-h-[420px] rounded-[2rem] bg-[#0d1117] border border-zinc-800/80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex flex-col"
          >
            {/* Fake titlebar */}
            <div className="flex items-center gap-2 px-5 py-3.5 bg-[#161b22] border-b border-zinc-800/80 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-500/60 border border-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/60 border border-green-500/40" />
              <span className="ml-3 text-xs text-zinc-500 font-mono">SmartButton.tsx</span>
            </div>
            {/* Code */}
            <div className="p-6 overflow-auto flex-1">
              <pre className="text-sm font-mono leading-7">
                {CODE_LINES.map((line, li) => (
                  <div key={li} className="flex">
                    <span className="select-none text-zinc-700 w-8 shrink-0 text-right pr-4">{li + 1}</span>
                    <span>
                      {line.tokens.length === 0
                        ? "\u00A0"
                        : line.tokens.map((tok, ti) => (
                          <span key={ti} className={tok.color}>{tok.text}</span>
                        ))}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
