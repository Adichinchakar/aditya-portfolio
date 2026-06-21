-- Create the job_analyses table
CREATE TABLE IF NOT EXISTS job_analyses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  company_name TEXT,
  job_title TEXT,
  raw_jd_text TEXT NOT NULL,
  match_score INTEGER NOT NULL,
  strengths JSONB NOT NULL DEFAULT '[]'::jsonb,
  gaps JSONB NOT NULL DEFAULT '[]'::jsonb,
  justification TEXT NOT NULL,
  ip_address TEXT
);

-- Enable Row Level Security
ALTER TABLE job_analyses ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (so the portfolio frontend can submit leads)
-- Restrict to insert only, no read/update/delete for anonymous users
CREATE POLICY "Allow anonymous inserts"
  ON job_analyses
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admins can read all analyses
CREATE POLICY "Allow authenticated read access"
  ON job_analyses
  FOR SELECT
  USING (auth.role() = 'authenticated');
