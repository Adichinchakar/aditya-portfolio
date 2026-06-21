'use client';

import React, { useEffect, useState, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, CheckCircle2 } from 'lucide-react';

interface AgentConsoleProps {
  logs: string[];
}

export function AgentConsole({ logs }: AgentConsoleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new logs arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  // Derive active icon based on the latest log message
  const getIconForLog = (log: string) => {
    if (log.includes('Agent A')) return <Terminal className="w-4 h-4 text-indigo-400" />;
    if (log.includes('Agent B')) return <Cpu className="w-4 h-4 text-violet-400" />;
    if (log.includes('System') || log.includes('Database')) return <Database className="w-4 h-4 text-emerald-400" />;
    return <Terminal className="w-4 h-4 text-zinc-400" />;
  };

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-[2rem] bg-zinc-950 border border-zinc-800 shadow-2xl relative">
      {/* Sleek Mac-like top bar */}
      <div className="flex items-center px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs font-medium text-zinc-500 tracking-wider flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          NVIDIA NIM ORCHESTRATOR
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-64 sm:h-80 overflow-y-auto p-6 font-mono text-sm scroll-smooth custom-scrollbar"
      >
        <AnimatePresence initial={false}>
          {logs.map((log, index) => {
            const isLatest = index === logs.length - 1;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`flex items-start gap-3 mb-3 ${isLatest ? 'text-zinc-100' : 'text-zinc-500'}`}
              >
                <div className="mt-0.5 shrink-0">
                  {getIconForLog(log)}
                </div>
                <div className="flex-1 leading-relaxed">
                  <span className="mr-2 opacity-50 select-none">
                    {new Date().toISOString().substring(11, 19)}
                  </span>
                  {log}
                  {isLatest && (
                    <m.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="inline-block w-2 h-4 bg-indigo-400 ml-1 translate-y-1"
                    />
                  )}
                </div>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Overlay gradient for fade effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </div>
  );
}
