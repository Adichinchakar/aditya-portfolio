'use client';

import React from 'react';
import { m } from 'framer-motion';
import { Check, X, Sparkles, Target } from 'lucide-react';
import { AnalysisResult } from '@/backend/agents/analyzer';

interface ResultsProps {
  result: AnalysisResult;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export function Results({ result }: ResultsProps) {
  const isHighMatch = result.match_score >= 75;
  const isMediumMatch = result.match_score >= 50 && result.match_score < 75;

  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.match_score / 100) * circumference;

  return (
    <m.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full max-w-5xl mx-auto mt-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Match Score (Dark Glass Bento) */}
        <m.div variants={itemVariants} className="md:col-span-4 relative overflow-hidden bg-zinc-950 rounded-3xl border border-zinc-800 p-8 flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-indigo-500/20 rounded-full blur-[40px] pointer-events-none" />
          
          <div className="flex items-center gap-2 text-zinc-400 mb-6 font-medium text-sm tracking-wide uppercase">
            <Target className="w-4 h-4" />
            Alignment Score
          </div>
          
          <div className="relative w-40 h-40 flex items-center justify-center mb-2">
            <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]">
              <circle
                className="text-zinc-800"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
              />
              <m.circle
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                className={isHighMatch ? 'text-emerald-400' : isMediumMatch ? 'text-amber-400' : 'text-rose-400'}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-black tracking-tighter ${isHighMatch ? 'text-emerald-400' : isMediumMatch ? 'text-amber-400' : 'text-rose-400'}`}>
                {result.match_score}<span className="text-2xl opacity-50">%</span>
              </span>
            </div>
          </div>
        </m.div>

        {/* AI Justification (Light Glass Bento) */}
        <m.div variants={itemVariants} className="md:col-span-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-zinc-200/60 p-8 sm:p-10 shadow-[0_8px_40px_-12px_rgb(0,0,0,0.06)] flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="text-xl font-bold text-zinc-900 tracking-tight">AI Synthesis</h4>
          </div>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-medium">
            {result.justification}
          </p>
        </m.div>

        {/* Strengths */}
        <m.div variants={itemVariants} className="md:col-span-6 bg-gradient-to-b from-emerald-50/50 to-white/50 backdrop-blur-md rounded-3xl border border-emerald-100/50 p-8 shadow-sm">
          <h4 className="text-lg font-bold text-emerald-900 tracking-tight mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            Key Strengths
          </h4>
          <ul className="space-y-5">
            {result.strengths.map((strength, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
                  {strength}
                </span>
              </li>
            ))}
          </ul>
        </m.div>

        {/* Gaps */}
        <m.div variants={itemVariants} className="md:col-span-6 bg-gradient-to-b from-rose-50/50 to-white/50 backdrop-blur-md rounded-3xl border border-rose-100/50 p-8 shadow-sm">
          <h4 className="text-lg font-bold text-rose-900 tracking-tight mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
            Identified Gaps
          </h4>
          <ul className="space-y-5">
            {result.gaps.map((gap, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <X className="w-3.5 h-3.5 text-rose-600 stroke-[3]" />
                </div>
                <span className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
                  {gap}
                </span>
              </li>
            ))}
          </ul>
        </m.div>

      </div>
    </m.div>
  );
}
