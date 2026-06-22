'use client';

import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, Mail, FileText, ArrowUpRight, TrendingUp, AlertTriangle, CheckCircle2, Info, ChevronDown } from 'lucide-react';
import { AnalysisResult } from '@/backend/agents/analyzer';
import Link from 'next/link';

interface ResultsProps {
  result: AnalysisResult;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 22 } }
};

function getVerdict(score: number): {
  label: string;
  action: string;
  ringColor: string;
  badgeBg: string;
  badgeText: string;
  dotColor: string;
  Icon: React.ElementType;
} {
  if (score >= 85) return { label: 'Exceptional Fit', action: 'Recommend for interview', ringColor: '#10b981', badgeBg: 'bg-emerald-100 border-emerald-200', badgeText: 'text-emerald-800', dotColor: 'bg-emerald-500', Icon: CheckCircle2 };
  if (score >= 70) return { label: 'Strong Fit', action: 'Recommend for interview', ringColor: '#10b981', badgeBg: 'bg-emerald-100 border-emerald-200', badgeText: 'text-emerald-800', dotColor: 'bg-emerald-500', Icon: TrendingUp };
  if (score >= 55) return { label: 'Solid Prospect', action: 'Consider for screening call', ringColor: '#f59e0b', badgeBg: 'bg-amber-100 border-amber-200', badgeText: 'text-amber-800', dotColor: 'bg-amber-500', Icon: TrendingUp };
  if (score >= 40) return { label: 'Partial Fit', action: 'Review gaps before proceeding', ringColor: '#f97316', badgeBg: 'bg-orange-100 border-orange-200', badgeText: 'text-orange-800', dotColor: 'bg-orange-500', Icon: AlertTriangle };
  return { label: 'Weak Alignment', action: 'Significant gaps present', ringColor: '#f43f5e', badgeBg: 'bg-rose-100 border-rose-200', badgeText: 'text-rose-800', dotColor: 'bg-rose-500', Icon: X };
}

function CollapsibleList({
  title,
  items,
  accentClass,
  iconClass,
  badgeClass,
  renderIcon,
}: {
  title: string;
  items: string[];
  accentClass: string;
  iconClass: string;
  badgeClass: string;
  renderIcon: () => React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 shadow-[0_4px_20px_-8px_rgb(0,0,0,0.06)] overflow-hidden">
      <button
        onClick={() => setIsOpen(v => !v)}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 px-7 py-5 hover:bg-zinc-50/60 transition-colors duration-200 text-left"
      >
        <div className={`w-1.5 h-5 rounded-full flex-shrink-0 ${accentClass}`} aria-hidden="true" />
        <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest flex-1">{title}</span>
        <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded-full border ${badgeClass}`}>
          {items.length}
        </span>
        {!isOpen && (
          <span className="hidden sm:block text-xs text-zinc-400 max-w-[260px] truncate font-normal italic">
            {items[0]}
          </span>
        )}
        <ChevronDown
          aria-hidden="true"
          className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-7 pb-6 border-t border-zinc-100">
              <ul className="space-y-4 pt-5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${iconClass}`}>
                      {renderIcon()}
                    </div>
                    <span className="text-sm text-zinc-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Results({ result }: ResultsProps) {
  const isHighMatch = result.match_score >= 70;
  const isMidMatch = result.match_score >= 45 && result.match_score < 70;
  const verdict = getVerdict(result.match_score);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (result.match_score / 100) * circumference;

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full mt-4 flex flex-col gap-4"
    >

      {/* ── Score + Verdict Hero ── */}
      <m.div variants={itemVariants} className="bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 shadow-[0_8px_40px_-12px_rgb(0,0,0,0.07)] overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch">

          {/* Score ring */}
          <div className="flex flex-col items-center justify-center px-10 py-8 border-b sm:border-b-0 sm:border-r border-zinc-100">
            <div className="relative w-32 h-32">
              <svg role="img" aria-label={`Match score: ${result.match_score}%`} className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r={radius} fill="none" strokeWidth="6" stroke="#e4e4e7" />
                <m.circle
                  cx="60" cy="60" r={radius} fill="none"
                  strokeWidth="8" strokeLinecap="round"
                  stroke={verdict.ringColor}
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
                  style={{ filter: `drop-shadow(0 0 5px ${verdict.ringColor}55)` }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
                <span className="text-4xl font-black tracking-tighter text-zinc-900 leading-none">{result.match_score}</span>
                <span className="text-xs font-bold text-zinc-400 mt-0.5">/ 100</span>
              </div>
            </div>
            <span className={`mt-3 text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${verdict.badgeBg} ${verdict.badgeText}`}>
              {verdict.label}
            </span>
          </div>

          {/* Verdict panel */}
          <div className="flex-1 flex flex-col justify-center gap-4 px-8 py-8">
            <div className="flex items-start gap-3">
              <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${verdict.dotColor}`} aria-hidden="true" />
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-1">Recruiter Action</div>
                <div className="text-xl font-black text-zinc-900 tracking-tight">{verdict.action}</div>
              </div>
            </div>

            <div className="h-px bg-zinc-100" />

            <div className="grid grid-cols-3 gap-3">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">Strengths</span>
                <span className="text-2xl font-black text-emerald-600">{result.strengths.length}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">Gaps</span>
                <span className="text-2xl font-black text-rose-500">{result.gaps.length}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-400 block mb-1">Confidence</span>
                <span className="text-2xl font-black text-zinc-700">
                  {result.match_score >= 70 ? 'High' : result.match_score >= 50 ? 'Med' : 'Low'}
                </span>
              </div>
            </div>

            {result.strengths[0] && (
              <div className="flex items-start gap-2.5 rounded-xl bg-zinc-50 border border-zinc-100 px-4 py-3">
                <Info aria-hidden="true" className="w-3.5 h-3.5 mt-0.5 text-zinc-400 flex-shrink-0" />
                <p className="text-xs text-zinc-600 leading-relaxed">
                  <span className="font-semibold text-zinc-700">Top signal: </span>{result.strengths[0]}
                </p>
              </div>
            )}
          </div>
        </div>
      </m.div>

      {/* ── AI Synthesis ── */}
      <m.div variants={itemVariants} className="bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 shadow-[0_4px_20px_-8px_rgb(0,0,0,0.06)] p-8">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
            <Sparkles aria-hidden="true" className="w-3.5 h-3.5 text-indigo-500" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 tracking-tight leading-none">AI Synthesis</h4>
            <p className="text-[10px] text-zinc-400 font-mono mt-0.5">Agent A + B consensus</p>
          </div>
        </div>
        <p className="text-sm text-zinc-600 leading-relaxed">{result.justification}</p>
      </m.div>

      {/* ── Collapsible Strengths ── */}
      <m.div variants={itemVariants}>
        <CollapsibleList
          title="Key Strengths"
          items={result.strengths}
          accentClass="bg-emerald-500"
          iconClass="bg-emerald-50 border border-emerald-100 group-hover:bg-emerald-100"
          badgeClass="text-emerald-700 bg-emerald-50 border-emerald-100"
          renderIcon={() => <Check aria-hidden="true" className="w-3 h-3 text-emerald-600 stroke-[2.5]" />}
        />
      </m.div>

      {/* ── Collapsible Gaps ── */}
      <m.div variants={itemVariants}>
        <CollapsibleList
          title="Identified Gaps"
          items={result.gaps}
          accentClass="bg-rose-500"
          iconClass="bg-rose-50 border border-rose-100 group-hover:bg-rose-100"
          badgeClass="text-rose-700 bg-rose-50 border-rose-100"
          renderIcon={() => <X aria-hidden="true" className="w-3 h-3 text-rose-600 stroke-[2.5]" />}
        />
      </m.div>

      {/* ── Strong match CTA ── */}
      {isHighMatch && (
        <m.div
          variants={itemVariants}
          className="relative overflow-hidden bg-zinc-950 rounded-[2rem] border border-zinc-800 p-8 sm:p-10"
        >
          <div aria-hidden="true" className="absolute top-0 right-1/4 w-72 h-40 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/4 w-48 h-32 bg-emerald-500/8 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="flex-1 max-w-xl">
              {/* Score + verdict chip */}
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
                  {result.match_score}% · {verdict.label}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                {result.match_score >= 85
                  ? "Exceptional alignment. Here's what you're actually getting."
                  : "Strong signal here — let me make the case directly."}
              </h3>

              {/* Pitch */}
              <p className="text-zinc-200 text-sm leading-relaxed mb-6">
                You're not just getting a designer with years on their CV. You're getting someone who shipped a real AI product from scratch,
                led enterprise design across 50+ engineers, and built the multi-agent system running this very evaluation —
                not as a side project, but as a demonstration of how I work.
              </p>

              {/* Proof points */}
              <ul className="space-y-2.5 mb-6">
                {[
                  'Shipped Aulys — AI accessibility product, 30 active beta users, solo-built',
                  'Led enterprise design at Infosys TalentBridge — 50+ engineers, measurable adoption gains',
                  '40% efficiency improvement on Simplifai AI workflows — before/after documented',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check aria-hidden="true" className="w-2.5 h-2.5 text-emerald-400 stroke-[3]" />
                    </div>
                    <span className="text-sm text-zinc-100">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-zinc-400">
                I reply within 24 hours. Pre-fill the email — just change the role name.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-row lg:flex-col gap-3 flex-shrink-0 w-full lg:w-auto">
              <a
                href={`mailto:adityaachinchakar@gmail.com?subject=Let's Talk — [Role Name] at [Company]&body=Hi Aditya,%0A%0AYour compatibility score came back at ${result.match_score}% for a role we have open.%0A%0AWe're hiring for [Role] at [Company]. I'd love to set up a conversation.%0A%0A[Your name]`}
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-zinc-900 font-bold rounded-xl hover:bg-zinc-100 transition-colors shadow-sm text-sm"
              >
                <Mail aria-hidden="true" className="w-4 h-4" />
                Email Aditya
              </a>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/8 text-white font-semibold rounded-xl hover:bg-white/15 transition-colors border border-white/10 text-sm"
              >
                <FileText aria-hidden="true" className="w-4 h-4" />
                View Resume
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>
        </m.div>
      )}

      {/* ── Mid-match CTA ── */}
      {isMidMatch && (
        <m.div
          variants={itemVariants}
          className="bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 shadow-[0_4px_20px_-8px_rgb(0,0,0,0.06)] p-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600">
                  {result.match_score}% · {verdict.label}
                </span>
              </div>
              <h3 className="text-xl font-black text-zinc-900 tracking-tight mb-2">
                Real gaps — and I can address each one directly.
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                The gaps flagged above are specific, not fundamental — and most can be answered with work already in my portfolio
                that the AI couldn't surface without context. A 20-minute call would cover all of them.
              </p>
              <ul className="space-y-2 mb-2">
                {[
                  '9 years of product design — AI, enterprise, and healthcare domains',
                  'Built and shipped real AI products — not just AI feature design',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check aria-hidden="true" className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0 stroke-[2.5]" />
                    <span className="text-sm text-zinc-600">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-row sm:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
              <a
                href={`mailto:adityaachinchakar@gmail.com?subject=Compatibility Check — [Role] at [Company]&body=Hi Aditya,%0A%0AI ran the compatibility check and got ${result.match_score}%. I'd like to discuss if there's a fit.%0A%0A[Your name + company]`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors text-sm"
              >
                <Mail aria-hidden="true" className="w-4 h-4" />
                Let's Talk Gaps
              </a>
              <Link
                href="/work"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-100 text-zinc-700 font-semibold rounded-xl hover:bg-zinc-200 transition-colors text-sm"
              >
                <FileText aria-hidden="true" className="w-4 h-4" />
                Full Portfolio
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5 opacity-50" />
              </Link>
            </div>
          </div>
        </m.div>
      )}

    </m.div>
  );
}
