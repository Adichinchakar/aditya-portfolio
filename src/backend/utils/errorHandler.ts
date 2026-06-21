// Configuration for the AI Providers
export const aiConfig = {
  primary: {
    provider: 'gemini',
    model: 'gemini-2.5-pro',
  },
  secondary: {
    provider: 'nim', // NVIDIA NIM or other fallback
    model: 'meta/llama3-70b-instruct',
  }
};

/**
 * Executes a function with a fallback to a secondary provider if the primary fails.
 * @param primaryFn The primary AI function to execute
 * @param secondaryFn The fallback AI function to execute
 */
export async function withFallback<T>(
  primaryFn: () => Promise<T>,
  secondaryFn: () => Promise<T>,
  context: string = 'AI Execution'
): Promise<T> {
  try {
    console.log(`[${context}] Attempting primary provider...`);
    return await primaryFn();
  } catch (error) {
    console.warn(`[${context}] Primary provider failed:`, error);
    console.log(`[${context}] Switching to secondary provider (fallback)...`);
    
    try {
      return await secondaryFn();
    } catch (fallbackError) {
      console.error(`[${context}] Secondary provider also failed:`, fallbackError);
      throw new Error(`Both primary and secondary AI providers failed for ${context}.`);
    }
  }
}
