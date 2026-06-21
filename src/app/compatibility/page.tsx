import EngineUI from '@/components/CompatibilityEngine/EngineUI';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Compatibility | Aditya Chinchakar',
  description: 'Evaluate your Job Description against my 9-year Product Design portfolio using an AI multi-agent workflow.',
};

export default function CompatibilityPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background flex flex-col items-center selection:bg-emerald-100">
      <div className="max-w-4xl w-full flex flex-col gap-16">
        
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Live AI Experiment
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            Evaluate My Profile
          </h1>
          
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            I built this multi-agent AI system to demonstrate my ability to design and engineer AI products. Paste your Job Description below, and watch the agents brutally evaluate my fit for your role in real-time.
          </p>
        </header>

        {/* Engine UI Mount */}
        <section className="w-full">
          <EngineUI />
        </section>

      </div>
    </main>
  );
}
