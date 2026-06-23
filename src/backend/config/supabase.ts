import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321';
// Prefer service role key (server-only, not exposed to client) for backend inserts.
// Add SUPABASE_SERVICE_ROLE_KEY to Vercel env vars (uncheck "expose to browser").
// Falls back to anon key if service role key is not configured.
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'dummy_key_to_prevent_build_crash';

export const supabase = createClient(supabaseUrl, supabaseKey);
