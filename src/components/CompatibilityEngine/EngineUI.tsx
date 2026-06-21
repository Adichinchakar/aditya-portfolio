'use client';

import React, { useState } from 'react';
import { Dropzone } from './Dropzone';
import { Results } from './Results';
import { AnalysisResult } from '@/backend/agents/analyzer';

export default function EngineUI() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (jdText: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

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

      const data: AnalysisResult = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
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

      {result && <Results result={result} />}
    </div>
  );
}
