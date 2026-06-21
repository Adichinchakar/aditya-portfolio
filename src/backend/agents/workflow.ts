import { analyzeJobDescription, AnalysisResult } from './analyzer';
import { validateAnalysis } from './critic';
import { supabase } from '../config/supabase';

const MAX_RETRIES = 2;

export async function runCompatibilityEngine(
  jdText: string, 
  portfolioContext: string, 
  ipAddress?: string
): Promise<AnalysisResult> {
  let draft: AnalysisResult | null = null;
  let feedbackContext = portfolioContext; // We will append critic feedback to the context if it fails

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    console.log(`[Workflow] Attempt ${attempt} of ${MAX_RETRIES}`);
    
    // Step 1: Agent A analyzes the JD
    draft = await analyzeJobDescription(jdText, feedbackContext);

    // Step 2: Agent B validates the output
    const validation = await validateAnalysis(jdText, portfolioContext, draft);

    if (validation.isValid) {
      console.log(`[Workflow] Agent B approved on attempt ${attempt}.`);
      break;
    } else {
      console.log(`[Workflow] Agent B rejected on attempt ${attempt}. Feedback: ${validation.feedback}`);
      if (attempt === MAX_RETRIES) {
        console.warn(`[Workflow] Max retries reached. Proceeding with last draft.`);
        break;
      }
      // Append the feedback to the context for the next iteration to force better results
      feedbackContext = portfolioContext + `\n\n### CRITIC FEEDBACK FROM PREVIOUS DRAFT:\nAgent A, your previous draft was rejected. You MUST address this: ${validation.feedback}`;
    }
  }

  if (!draft) {
    throw new Error("Workflow failed to produce a valid analysis.");
  }

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
