'use client';

import React, { useState, useRef } from 'react';
import { Dropzone } from './Dropzone';
import { Results } from './Results';
import { AgentConsole } from './AgentConsole';
import { AnalysisResult } from '@/backend/agents/analyzer';
import { AnimatePresence, m } from 'framer-motion';

export type LogEntry = { message: string; ts: string };

const CLIENT_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

export default function EngineUI() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const addLog = (message: string) =>
    setLogs(prev => [...prev, { message, ts: new Date().toISOString().substring(11, 19) }]);

  const clearClientTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleAbort = () => {
    clearClientTimeout();
    abortControllerRef.current?.abort();
    setIsLoading(false);
    setLogs(prev => [...prev, {
      message: '[System] Analysis stopped by user.',
      ts: new Date().toISOString().substring(11, 19)
    }]);
  };

  const handleAnalyze = async (jdText: string) => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    setResult(null);
    setLogs([{ message: '[System] Connection established. Booting Compatibility Engine...', ts: new Date().toISOString().substring(11, 19) }]);

    // Client-side timeout — kills the stream if server hangs
    timeoutRef.current = setTimeout(() => {
      controller.abort();
      setIsLoading(false);
      setError('Analysis timed out after 5 minutes. Please try again.');
    }, CLIENT_TIMEOUT_MS);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jdText }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Request failed (${res.status})`);
      }

      if (!res.body) throw new Error('ReadableStream not supported by browser.');

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;
      let buffer = '';
      let receivedResult = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          // Accumulate chunks — SSE lines can span multiple read() calls
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? ''; // keep partial last line for next chunk

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const dataStr = line.slice(6).trim();
            if (!dataStr) continue;

            let parsed: any;
            try {
              parsed = JSON.parse(dataStr);
            } catch (_) {
              console.error('Failed to parse SSE line:', line);
              continue;
            }

            if (parsed.type === 'status') {
              addLog(parsed.message);
            } else if (parsed.type === 'result') {
              receivedResult = true;
              setResult(parsed.data);
            } else if (parsed.type === 'error') {
              throw new Error(parsed.message);
            }
          }
        }
      }

      // Process any remaining buffered line
      if (buffer.startsWith('data: ')) {
        try {
          const parsed = JSON.parse(buffer.slice(6).trim());
          if (parsed.type === 'result') { receivedResult = true; setResult(parsed.data); }
        } catch (_) {}
      }

      // Stream closed but no result event — network drop or server error
      if (!receivedResult && !controller.signal.aborted) {
        throw new Error('Analysis completed without a result. Please try again.');
      }

    } catch (err: any) {
      if (err.name === 'AbortError') return; // user cancelled or timeout already handled
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      clearClientTimeout();
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
      <Dropzone onSubmit={handleAnalyze} isLoading={isLoading} />

      {error && (
        <div className="w-full p-4 bg-rose-50/80 border border-rose-200 rounded-xl text-rose-700 text-sm text-center shadow-sm backdrop-blur-sm">
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
            <AgentConsole logs={logs} onAbort={handleAbort} />
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
