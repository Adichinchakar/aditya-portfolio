'use client';

import React, { useState } from 'react';
import { UploadCloud, FileText } from 'lucide-react';
import { m } from 'framer-motion';

interface DropzoneProps {
  onSubmit: (jdText: string) => void;
  isLoading: boolean;
}

export function Dropzone({ onSubmit, isLoading }: DropzoneProps) {
  const [text, setText] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Note: True PDF extraction requires a library like pdf.js or sending the file to the backend.
  // For this demo, we simulate text extraction or accept raw pasted text.
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      // Simulate reading a text file (PDF parsing omitted for brevity)
      if (file.type === 'text/plain') {
        const fileText = await file.text();
        setText(fileText);
      } else {
        alert("For this demo, please drop a .txt file or paste the JD text directly.");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-white/70 rounded-[2rem] border border-white/60 shadow-[0_8px_40px_-12px_rgb(0,0,0,0.08)] backdrop-blur-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight flex items-center justify-center gap-2">
          Candidate-Job Compatibility Engine
        </h2>
        <p className="text-zinc-500 mt-2 text-sm sm:text-base font-medium">Paste a Job Description to analyze alignment with my 9-year Product Design portfolio.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div 
          className={`relative border-2 border-dashed rounded-2xl transition-all duration-300 ${
            isDragging ? 'border-indigo-400 bg-indigo-50/50' : 'border-zinc-200 bg-zinc-50/50 hover:border-zinc-300 hover:bg-zinc-100/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <textarea
            className="w-full h-48 sm:h-56 p-6 bg-transparent text-zinc-800 placeholder:text-zinc-400 resize-none outline-none focus:ring-0 font-medium"
            placeholder="Paste Job Description here... or Drag & Drop a .txt file"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isLoading}
          />
          
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-zinc-400 pointer-events-none">
            <UploadCloud size={18} />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">Drag & Drop Supported</span>
          </div>
        </div>

        <div className="flex justify-end">
          <m.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading || !text.trim()}
            className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-all hover:shadow-[0_8px_20px_-8px_rgba(99,102,241,0.5)] shadow-sm"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                 <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </span>
            ) : (
              <>
                <FileText size={18} />
                <span>Analyze Compatibility</span>
              </>
            )}
          </m.button>
        </div>
      </form>
    </div>
  );
}
