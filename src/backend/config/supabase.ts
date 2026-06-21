import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Prefer service role key (server-only, not exposed to client) for backend inserts.
// Add SUPABASE_SERVICE_ROLE_KEY to Vercel env vars (uncheck "expose to browser").
// Falls back to anon key if service role key is not configured.
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';

export const supabase = createClient(supabaseUrl, supabaseKey);
