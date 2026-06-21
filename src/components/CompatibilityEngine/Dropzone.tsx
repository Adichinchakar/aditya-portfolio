'use client';

import React, { useState } from 'react';
import { UploadCloud, Sparkles, FileText, CornerDownRight } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DropzoneProps {
  onSubmit: (jdText: string) => void;
  isLoading: boolean;
}

export function Dropzone({ onSubmit, isLoading }: DropzoneProps) {
  const [text, setText] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'text/plain') {
        setText(await file.text());
      } else {
        alert('For this demo, please drop a .txt file or paste the JD text directly.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
  };

  return (
    <div className="w-full bg-white/70 backdrop-blur-xl rounded-[2rem] border border-zinc-200/60 shadow-[0_8px_40px_-12px_rgb(0,0,0,0.07)] overflow-hidden">
      <div className="w-full p-8 sm:p-10 relative">

        <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-100/40 blur-[60px] pointer-events-none" />

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
              <CornerDownRight aria-hidden="true" className="w-5 h-5 text-indigo-500" />
              Input Job Description
            </h3>
            <span className="text-xs font-mono font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full uppercase tracking-wider">
              TXT / Paste Supported
            </span>
          </div>

          <div
            className={cn(
              'relative group rounded-2xl transition-all duration-400 ease-out overflow-hidden border',
              isDragging
                ? 'border-indigo-400 bg-indigo-50/60 scale-[1.01]'
                : 'border-zinc-200 bg-zinc-50/50 hover:bg-white focus-within:border-indigo-400 focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(99,102,241,0.08)]'
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <textarea
              className="w-full h-52 p-6 bg-transparent text-zinc-800 placeholder:text-zinc-400 resize-none outline-none focus:ring-0 font-mono text-sm leading-relaxed"
              placeholder="Paste the full job description here...&#10;&#10;e.g. 'We are looking for a Senior Product Designer to lead our enterprise SaaS platform...'"
              value={text}
              onChange={(e) => setText(e.target.value)}
              disabled={isLoading}
            />

            <AnimatePresence>
              {isDragging && (
                <m.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  className="absolute inset-0 backdrop-blur-sm bg-white/90 flex flex-col items-center justify-center text-indigo-600 border-2 border-dashed border-indigo-300 rounded-2xl"
                >
                  <UploadCloud aria-hidden="true" className="w-10 h-10 mb-3 animate-bounce" />
                  <p className="font-bold text-base">Drop JD file here</p>
                  <p className="text-sm text-indigo-400 mt-1">Plain text files only</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 text-zinc-400 text-sm">
              <FileText aria-hidden="true" className="w-4 h-4 flex-shrink-0" />
              <span>Processed securely via edge functions</span>
              {text.length > 0 && (
                <span className="text-xs font-mono text-zinc-300 border border-zinc-200 bg-zinc-50 px-2 py-0.5 rounded-md">
                  {text.length.toLocaleString()} chars
                </span>
              )}
            </div>

            <m.button
              whileHover={!isLoading && text.trim() ? { scale: 1.02 } : {}}
              whileTap={!isLoading && text.trim() ? { scale: 0.98 } : {}}
              type="submit"
              disabled={isLoading || !text.trim()}
              aria-busy={isLoading}
              className="px-7 py-3.5 bg-indigo-600 text-white font-bold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-all hover:bg-indigo-700 hover:shadow-[0_8px_20px_-4px_rgba(99,102,241,0.4)] shadow-sm text-sm"
            >
              {isLoading ? (
                <>
                  <svg aria-hidden="true" className="animate-spin h-4 w-4 text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Initializing Agents...
                </>
              ) : (
                <>
                  <Sparkles aria-hidden="true" className="w-4 h-4" />
                  Run Compatibility Check
                </>
              )}
            </m.button>
          </div>
        </form>
      </div>
    </div>
  );
}
