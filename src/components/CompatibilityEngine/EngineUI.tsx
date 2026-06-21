'use client';

import React, { useState } from 'react';
import { Dropzone } from './Dropzone';
import { Results } from './Results';
import { AgentConsole } from './AgentConsole';
import { AnalysisResult } from '@/backend/agents/analyzer';
import { AnimatePresence, m } from 'framer-motion';

export default function EngineUI() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleAnalyze = async (jdText: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    setLogs(['[System] Connection established. Booting Compatibility Engine...']);

    // Pump engaging fake logs to keep the terminal active and visually stimulating
    const fakeMessages = [
      "[Database] Cross-referencing 2022-2024 design artifacts...",
      "[Agent A] Mapping Figma & Framer proficiency...",
      "[Database] Fetching previous enterprise dashboard metrics...",
      "[Agent B] Validating Agent A semantic analysis...",
      "[Agent A] Comparing UX strategy requirements...",
      "[System] Evaluating leadership and communication competencies...",
      "[Agent A] Extracting implicit requirements from JD text...",
      "[Agent B] Cross-checking evidence against 9-year portfolio history..."
    ];
    let msgIndex = 0;
    const fakeInterval = setInterval(() => {
      if (msgIndex < fakeMessages.length) {
        const msg = fakeMessages[msgIndex];
        setLogs(prev => [...prev, msg]);
        msgIndex++;
      }
    }, 1500);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jdText })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to analyze JD');
      }

      if (!res.body) throw new Error("ReadableStream not supported by browser.");

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const dataStr = line.replace('data: ', '').trim();
                if (!dataStr) continue;
                const parsed = JSON.parse(dataStr);
                
                if (parsed.type === 'status') {
                  setLogs((prev) => [...prev, parsed.message]);
                } else if (parsed.type === 'result') {
                  setResult(parsed.data);
                } else if (parsed.type === 'error') {
                  throw new Error(parsed.message);
                }
              } catch (e) {
                console.error("Failed to parse stream chunk:", line, e);
              }
            }
          }
        }
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      clearInterval(fakeInterval);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
      <Dropzone onSubmit={handleAnalyze} isLoading={isLoading} />
      
      {error && (
        <div className="w-full max-w-3xl mx-auto p-4 bg-rose-50/80 border border-rose-200 rounded-xl text-rose-600 text-sm text-center shadow-sm backdrop-blur-sm">
          {error}
        </div>
      )}

      <AnimatePresence mode="wait">
        {isLoading && (
          <m.div
            key="console"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <AgentConsole logs={logs} />
          </m.div>
        )}
        
        {!isLoading && result && (
          <m.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <Results result={result} />
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
