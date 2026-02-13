"use client";

import { SmartButton } from "@/components/home/smart-button";
import { Card } from "@/components/ui/card";

const CODE_SNIPPET = `function SmartButton() {
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
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Deploy Project
        </motion.button>
      )}

      {status === "loading" && (
        <motion.div
          layoutId="button"
          className="bg-zinc-700 w-12 h-12 rounded-full flex items-center justify-center"
        >
          <Loader2 className="animate-spin" />
        </motion.div>
      )}

      {status === "success" && (
        <motion.div
          layoutId="button"
          className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <Check /> Deployed!
        </motion.div>
      )}
    </AnimatePresence>
  );
}`;

export function ComponentLab() {
    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-heading mb-4">Engineered Micro-interactions</h2>
                    <p className="text-zinc-400">I build components that feel alive. Try it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Playground */}
                    <Card className="min-h-[400px] flex items-center justify-center bg-zinc-900/30 border-zinc-800/50">
                        <SmartButton />
                    </Card>

                    {/* Code Block */}
                    <Card className="min-h-[400px] bg-[#0d1117] border-zinc-800 p-0 overflow-hidden relative group">
                        <div className="absolute top-0 left-0 right-0 h-10 bg-[#161b22] border-b border-zinc-800 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            <span className="ml-2 text-xs text-zinc-500 font-mono">SmartButton.tsx</span>
                        </div>
                        <div className="p-6 pt-14 overflow-x-auto h-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-800">
                            <pre className="text-sm font-mono leading-relaxed text-zinc-300">
                                <code>{CODE_SNIPPET}</code>
                            </pre>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
