import { analyzeJobDescription, AnalysisResult } from './analyzer';
import { validateAnalysis } from './critic';
import { supabase } from '../config/supabase';

const MAX_RETRIES = 2;

export async function runCompatibilityEngine(
  jdText: string, 
  portfolioContext: string, 
  ipAddress?: string,
  onProgress?: (message: string) => void
): Promise<AnalysisResult> {
  let draft: AnalysisResult | null = null;
  let feedbackContext = portfolioContext;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    console.log(`[Workflow] Attempt ${attempt} of ${MAX_RETRIES}`);
    onProgress?.(attempt > 1 ? `[Agent A] Refining analysis based on feedback (Attempt ${attempt})...` : `[Agent A] Extracting core competencies from Job Description...`);
    
    // Step 1: Agent A analyzes the JD
    draft = await analyzeJobDescription(jdText, feedbackContext);

    onProgress?.(`[Agent B] Validating draft alignment and evidence...`);
    // Step 2: Agent B validates the output
    const validation = await validateAnalysis(jdText, portfolioContext, draft);

    if (validation.isValid) {
      console.log(`[Workflow] Agent B approved on attempt ${attempt}.`);
      onProgress?.(`[System] Alignment verified. Finalizing results...`);
      break;
    } else {
      console.log(`[Workflow] Agent B rejected on attempt ${attempt}. Feedback: ${validation.feedback}`);
      onProgress?.(`[Agent B] Critique triggered: Needs better evidence backing. Regenerating...`);
      if (attempt === MAX_RETRIES) {
        console.warn(`[Workflow] Max retries reached. Proceeding with last draft.`);
        onProgress?.(`[System] Max refinement reached. Finalizing results...`);
        break;
      }
      // Append the feedback to the context for the next iteration to force better results
      feedbackContext = portfolioContext + `\n\n### CRITIC FEEDBACK FROM PREVIOUS DRAFT:\nAgent A, your previous draft was rejected. You MUST address this: ${validation.feedback}`;
    }
  }

  if (!draft) {
    throw new Error("Workflow failed to produce a valid analysis.");
  }

  onProgress?.(`[System] Saving analysis to database...`);
  // Step 3: Save results to Supabase asynchronously (don't block the response)
  supabase.from('job_analyses').insert({
    raw_jd_text: jdText,
    match_score: draft.match_score,
    strengths: draft.strengths,
    gaps: draft.gaps,
    justification: draft.justification,
    ip_address: ipAddress || null
  }).then(({ error }) => {
    if (error) console.error("Error saving to Supabase:", error);
  });

  return draft;
}
