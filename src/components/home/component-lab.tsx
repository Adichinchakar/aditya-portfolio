"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "@/lib/motion";
import { SmartButton } from "@/components/home/smart-button";
import { DynamicIsland } from "@/components/home/dynamic-island";
import { PaymentCard } from "@/components/home/payment-card";
import { Layers, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPONENTS = [
  {
    id: "smart-button",
    label: "Smart Button",
    component: <SmartButton />,
    filename: "SmartButton.tsx",
    code: `function SmartButton() {
  const [status, setStatus] = useState("idle");

  const handleClick = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {status === "idle" && (
        <motion.button 
          layoutId="button"
          onClick={handleClick}
        >
          Deploy Project
        </motion.button>
      )}
      {/* Loading & Success States... */}
    </AnimatePresence>
  );
}`
  },
  {
    id: "dynamic-island",
    label: "Dynamic Island",
    component: <DynamicIsland />,
    filename: "DynamicIsland.tsx",
    code: `function DynamicIsland() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      animate={{
        width: expanded ? 320 : 160,
        height: expanded ? 160 : 48,
        borderRadius: expanded ? 32 : 24,
      }}
      className="bg-black text-white"
    >
      <AnimatePresence mode="wait">
        {!expanded ? <CollapsedState /> : <ExpandedState />}
      </AnimatePresence>
    </motion.div>
  );
}`
  },
  {
    id: "payment-card",
    label: "Payment Card",
    component: <PaymentCard />,
    filename: "PaymentCard.tsx",
    code: `function PaymentCard() {
  const [state, setState] = useState("idle");

  const handlePay = () => {
    setState("processing");
    setTimeout(() => setState("success"), 2500);
  };

  return (
    <motion.div layout className="bg-white rounded-3xl">
      <AnimatePresence mode="wait">
        {state === "idle" && <CheckoutForm onPay={handlePay} />}
        {state === "processing" && <ProcessingSpinner />}
        {state === "success" && <SuccessMessage />}
      </AnimatePresence>
    </motion.div>
  );
}`
  }
];

export function ComponentLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(COMPONENTS[0].id);
  const activeComponent = COMPONENTS.find(c => c.id === activeTab) || COMPONENTS[0];

  // Syntax highlighting logic (simplified for demo purposes)
  const highlightCode = (code: string) => {
    const keywords = ['function', 'const', 'let', 'return', 'import', 'export'];
    const hooks = ['useState', 'useEffect', 'useRef'];
    const components = ['motion', 'AnimatePresence'];

    let highlighted = code
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), '<span class="text-purple-400">$1</span>')
      .replace(new RegExp(`\\b(${hooks.join('|')})\\b`, 'g'), '<span class="text-yellow-300">$1</span>')
      .replace(new RegExp(`\\b(${components.join('|')})(\\.|\\b)`, 'g'), '<span class="text-green-400">$1</span>$2')
      .replace(/("[^"]*")/g, '<span class="text-orange-300">$1</span>');

    return highlighted.split('\n');
  };

  // Initialize with escaped HTML so server and client initial render match
  const escapeLine = (line: string) => line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const [highlightedLines, setHighlightedLines] = useState<string[]>(() =>
    activeComponent.code.split('\n').map(escapeLine)
  );
  useEffect(() => {
    setHighlightedLines(highlightCode(activeComponent.code));
  }, [activeComponent.code]);


  return (
    <section className="py-14 px-6 relative overflow-hidden bg-zinc-50/50" ref={ref}>
      {/* Premium background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-white/80 text-sm font-semibold text-zinc-600 mb-4 backdrop-blur-md shadow-sm"
          >
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            Interactive Demo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900"
          >
            Engineered Micro-interactions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="text-zinc-500 mt-3 text-base max-w-xl mx-auto"
          >
            Great design is not just how it looks, but how it feels.
          </motion.p>
        </div>

        {/* Component Tabs Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: "spring" as const, stiffness: 260, damping: 24, delay: 0.1 }}
          className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-3 lg:p-4 shadow-[0_8px_40px_rgb(0,0,0,0.04)]"
        >
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 p-1.5 bg-white/50 rounded-2xl mx-auto w-fit border border-zinc-100">
            {COMPONENTS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors outline-none",
                  activeTab === tab.id ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/50"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
            {/* Live Playground */}
            <div className="min-h-[300px] relative rounded-2xl bg-zinc-50/50 border border-zinc-200/60 overflow-hidden flex flex-col items-center justify-center p-6 pattern-dots pattern-zinc-200 pattern-bg-transparent pattern-size-4 pattern-opacity-100">
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-zinc-200 text-xs font-medium text-zinc-400 shadow-sm backdrop-blur-md">
                <MousePointer2 className="w-3 h-3" />
                Click to interact
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full flex items-center justify-center"
                >
                  {activeComponent.component}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Syntax-highlighted code block */}
            <div className="min-h-[300px] rounded-2xl bg-[#0d1117] border border-zinc-800/80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.25)] flex flex-col pt-1">
              {/* Fake titlebar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#0d1117] border-b border-zinc-800/80 shrink-0">
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />

                <div className="ml-4 flex items-center gap-2">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeComponent.filename}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-xs text-zinc-400 font-mono tracking-wide px-3 py-1 bg-zinc-800/50 rounded-md border border-zinc-700/50"
                    >
                      {activeComponent.filename}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Code */}
              <div className="p-4 overflow-auto flex-1 relative bg-gradient-to-br from-[#0d1117] to-[#161b22]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="text-[13px] font-mono leading-loose"
                  >
                    {highlightedLines.map((line, li) => (
                      <div key={li} className="flex hover:bg-white/[0.02] px-2 rounded -mx-2 transition-colors">
                        <span className="select-none text-zinc-700 w-8 shrink-0 text-right pr-5 border-r border-zinc-800/50 mr-4 tabular-nums">{li + 1}</span>
                        <span dangerouslySetInnerHTML={{ __html: line || ' ' }} className="text-zinc-300" />
                      </div>
                    ))}
                  </motion.pre>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
