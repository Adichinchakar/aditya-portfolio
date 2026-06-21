'use client';

import React from 'react';
import { m } from 'framer-motion';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { AnalysisResult } from '@/backend/agents/analyzer';

interface ResultsProps {
  result: AnalysisResult;
}

export function Results({ result }: ResultsProps) {
  const isHighMatch = result.match_score >= 75;
  const isMediumMatch = result.match_score >= 50 && result.match_score < 75;

  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.match_score / 100) * circumference;

  return (
    <m.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      {/* Top Row: Score & Justification */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Circular Score Widget */}
        <div className="p-6 bg-white/80 rounded-3xl border border-white/60 shadow-[0_8px_30px_-12px_rgb(0,0,0,0.06)] backdrop-blur-xl flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-bold text-zinc-800 mb-4">Match Score</h3>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-zinc-100"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="64"
                cy="64"
              />
              <m.circle
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className={isHighMatch ? 'text-emerald-500' : isMediumMatch ? 'text-amber-500' : 'text-rose-500'}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="64"
                cy="64"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-4xl font-black tracking-tighter ${isHighMatch ? 'text-emerald-600' : isMediumMatch ? 'text-amber-600' : 'text-rose-600'}`}>
                {result.match_score}%
              </span>
            </div>
          </div>
        </div>

        {/* AI Justification */}
        <div className="md:col-span-2 p-6 sm:p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100 shadow-[0_8px_30px_-12px_rgb(0,0,0,0.04)] backdrop-blur-xl">
          <div className="flex items-center space-x-2 mb-4 text-indigo-600">
            <Sparkles size={20} className="fill-indigo-100" />
            <h4 className="font-bold text-lg">AI Analysis</h4>
          </div>
          <p className="text-sm sm:text-base text-indigo-900/80 leading-relaxed whitespace-pre-wrap font-medium">
            {result.justification}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="p-6 sm:p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 shadow-[0_8px_30px_-12px_rgb(0,0,0,0.04)]">
          <div className="flex items-center space-x-2 mb-6 text-emerald-600">
            <CheckCircle2 size={22} className="fill-emerald-100" />
            <h4 className="font-bold text-lg">Key Strengths</h4>
          </div>
          <ul className="space-y-4">
            {result.strengths.map((strength, i) => (
              <li key={i} className="text-sm sm:text-base text-emerald-900/80 leading-relaxed flex items-start font-medium">
                <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* Gaps */}
        <div className="p-6 sm:p-8 bg-rose-50/50 rounded-3xl border border-rose-100 shadow-[0_8px_30px_-12px_rgb(0,0,0,0.04)]">
          <div className="flex items-center space-x-2 mb-6 text-rose-600">
            <XCircle size={22} className="fill-rose-100" />
            <h4 className="font-bold text-lg">Identified Gaps</h4>
          </div>
          <ul className="space-y-4">
            {result.gaps.map((gap, i) => (
              <li key={i} className="text-sm sm:text-base text-rose-900/80 leading-relaxed flex items-start font-medium">
                <span className="mr-3 mt-2 block w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                {gap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </m.div>
  );
}
