'use client';

import React, { useEffect, useRef, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Square, CheckCircle, Clock } from 'lucide-react';
import { LogEntry } from './EngineUI';

interface AgentConsoleProps {
  logs: LogEntry[];
  onAbort?: () => void;
}

const STAGES = ['Connecting', 'Analyzing JD', 'Critiquing', 'Refining'];

function getStageIndex(logs: LogEntry[]): number {
  const messages = logs.map(l => l.message);
  if (messages.some(m => m.includes('Refin') || m.includes('Attempt 2'))) return 3;
  if (messages.some(m => m.includes('[Agent B]'))) return 2;
  if (messages.some(m => m.includes('[Agent A]'))) return 1;
  return 0;
}

function getAgentStates(logs: LogEntry[]) {
  const aLogs = logs.filter(l => l.message.includes('[Agent A]'));
  const bLogs = logs.filter(l => l.message.includes('[Agent B]'));
  const lastMsg = logs[logs.length - 1]?.message || '';

  const aActive = lastMsg.includes('[Agent A]');
  const bActive = lastMsg.includes('[Agent B]');

  const stripPrefix = (msg: string) =>
    msg.replace(/\[Agent [AB]\] /, '').replace(/\[System\] /, '');

  return {
    a: {
      state: aActive ? 'active' : aLogs.length > 0 ? 'done' : 'idle',
      label: aActive ? 'Active' : aLogs.length > 0 ? 'Complete' : 'Waiting',
      lastMsg: aLogs.length > 0 ? stripPrefix(aLogs[aLogs.length - 1].message) : 'Waiting to start...',
    },
    b: {
      state: bActive ? 'active' : bLogs.length > 0 ? 'done' : 'idle',
      label: bActive ? 'Active' : bLogs.length > 0 ? 'Complete' : 'On standby',
      lastMsg: bLogs.length > 0 ? stripPrefix(bLogs[bLogs.length - 1].message) : 'On standby...',
    },
  };
}

function getIconForLog(message: string) {
  if (message.includes('[Agent A]')) return <Terminal aria-hidden="true" className="w-3.5 h-3.5 text-indigo-500" />;
  if (message.includes('[Agent B]')) return <Cpu aria-hidden="true" className="w-3.5 h-3.5 text-violet-500" />;
  return <Database aria-hidden="true" className="w-3.5 h-3.5 text-emerald-500" />;
}

export function AgentConsole({ logs, onAbort }: AgentConsoleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const stageIndex = getStageIndex(logs);
  const agents = getAgentStates(logs);

  const formatElapsed = (s: number) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return min > 0 ? `${min}m ${sec}s` : `${sec}s`;
  };

  return (
    <div className="w-full bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 shadow-[0_8px_40px_-12px_rgb(0,0,0,0.07)] overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-7 pt-6 pb-5">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900">AI Analysis in Progress</h3>
            <p className="text-[10px] font-mono text-zinc-400 mt-0.5">Multi-agent · NVIDIA NIM Orchestrator</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Clock aria-hidden="true" className="w-3.5 h-3.5" />
            <span className="text-xs font-mono tabular-nums">{formatElapsed(elapsed)}</span>
          </div>
          {onAbort && (
            <button
              onClick={onAbort}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-rose-50 border border-zinc-200 hover:border-rose-200 text-zinc-500 hover:text-rose-500 transition-all duration-200 text-[10px] font-mono font-bold uppercase tracking-wider"
              aria-label="Stop analysis"
            >
              <Square aria-hidden="true" className="w-2.5 h-2.5 fill-current" />
              Stop
            </button>
          )}
        </div>
      </div>

      {/* Stage Progress */}
      <div className="px-7 pb-5 border-b border-zinc-100">
        <div className="flex items-start gap-1.5">
          {STAGES.map((stage, i) => {
            const isDone = i < stageIndex;
            const isActive = i === stageIndex;
            return (
              <React.Fragment key={stage}>
                <div className="flex flex-col items-center gap-1.5 flex-1">
                  <div className={`w-full h-[3px] rounded-full transition-all duration-700 ${
                    isDone ? 'bg-indigo-500' : isActive ? 'bg-indigo-400/60 animate-pulse' : 'bg-zinc-200'
                  }`} />
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider text-center whitespace-nowrap transition-colors duration-300 ${
                    isDone ? 'text-indigo-500' : isActive ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    {stage}
                  </span>
                </div>
                {i < STAGES.length - 1 && (
                  <div className={`w-3 h-[3px] flex-shrink-0 mt-0 rounded-full transition-colors duration-700 ${
                    i < stageIndex ? 'bg-indigo-300' : 'bg-zinc-200'
                  }`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Agent Status Cards */}
      <div className="grid grid-cols-2 gap-4 px-7 py-5 border-b border-zinc-100">
        {/* Agent A */}
        <div className={`rounded-2xl border p-4 transition-all duration-500 ${
          agents.a.state === 'active'
            ? 'bg-indigo-50/80 border-indigo-200'
            : agents.a.state === 'done'
              ? 'bg-zinc-50 border-zinc-100'
              : 'bg-zinc-50/50 border-zinc-100'
        }`}>
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <Terminal aria-hidden="true" className={`w-3.5 h-3.5 ${agents.a.state === 'active' ? 'text-indigo-500' : 'text-zinc-400'}`} />
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${agents.a.state === 'active' ? 'text-indigo-700' : 'text-zinc-500'}`}>
                Agent A · Analyzer
              </span>
            </div>
            {agents.a.state === 'active' && (
              <span className="relative flex h-2 w-2" aria-label="Agent A active">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
            )}
            {agents.a.state === 'done' && (
              <CheckCircle aria-label="Agent A complete" className="w-3.5 h-3.5 text-emerald-500" />
            )}
          </div>
          <p className="text-[11px] text-zinc-500 leading-snug line-clamp-2">
            {agents.a.lastMsg}
          </p>
          <div className="mt-2.5 flex items-center justify-between">
            <div className={`text-[9px] font-mono font-bold uppercase tracking-wider ${
              agents.a.state === 'active' ? 'text-indigo-500' : agents.a.state === 'done' ? 'text-emerald-500' : 'text-zinc-300'
            }`}>
              {agents.a.label}
            </div>
            <div className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
              agents.a.state === 'done' ? 'bg-emerald-100/50 text-emerald-600' : 'bg-zinc-100 text-zinc-400'
            }`}>
              Conf: &gt;95%
            </div>
          </div>
        </div>

        {/* Agent B */}
        <div className={`rounded-2xl border p-4 transition-all duration-500 ${
          agents.b.state === 'active'
            ? 'bg-violet-50/80 border-violet-200'
            : agents.b.state === 'done'
              ? 'bg-zinc-50 border-zinc-100'
              : 'bg-zinc-50/50 border-zinc-100'
        }`}>
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <Cpu aria-hidden="true" className={`w-3.5 h-3.5 ${agents.b.state === 'active' ? 'text-violet-500' : 'text-zinc-400'}`} />
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${agents.b.state === 'active' ? 'text-violet-700' : 'text-zinc-500'}`}>
                Agent B · Critic
              </span>
            </div>
            {agents.b.state === 'active' && (
              <span className="relative flex h-2 w-2" aria-label="Agent B active">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
            )}
            {agents.b.state === 'done' && (
              <CheckCircle aria-label="Agent B complete" className="w-3.5 h-3.5 text-emerald-500" />
            )}
          </div>
          <p className="text-[11px] text-zinc-500 leading-snug line-clamp-2">
            {agents.b.lastMsg}
          </p>
          <div className="mt-2.5 flex items-center justify-between">
            <div className={`text-[9px] font-mono font-bold uppercase tracking-wider ${
              agents.b.state === 'active' ? 'text-violet-500' : agents.b.state === 'done' ? 'text-emerald-500' : 'text-zinc-300'
            }`}>
              {agents.b.label}
            </div>
            <div className={`text-[8px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
              agents.b.state === 'active' ? 'bg-rose-100/50 text-rose-600' : 'bg-zinc-100 text-zinc-400'
            }`}>
              HITL Fallback: Ready
            </div>
          </div>
        </div>
      </div>

      {/* Log */}
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Agent analysis log"
        className="h-44 overflow-y-auto px-7 py-4 custom-scrollbar"
      >
        <AnimatePresence initial={false}>
          {logs.map((log, index) => {
            const isLatest = index === logs.length - 1;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className={`flex items-start gap-2.5 mb-2.5 ${isLatest ? '' : 'opacity-50'}`}
              >
                <div className="mt-0.5 shrink-0">{getIconForLog(log.message)}</div>
                <div className={`flex-1 font-mono text-xs leading-relaxed ${isLatest ? 'text-zinc-800 font-medium' : 'text-zinc-500'}`}>
                  <span className="mr-2 text-zinc-300 select-none tabular-nums">{log.ts}</span>
                  {log.message}
                  {isLatest && (
                    <m.span
                      aria-hidden="true"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                      className="inline-block w-1.5 h-[13px] bg-indigo-500 ml-1 translate-y-[2px] rounded-sm"
                    />
                  )}
                </div>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}
