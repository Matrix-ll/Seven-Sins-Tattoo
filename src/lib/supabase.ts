import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string
const supabaseAccessToken = import.meta.env.VITE_SUPABASE_ACCESS_TOKEN as string
export const supabaseSchema = import.meta.env.VITE_SCHEMA_NAME as string

if (!supabaseUrl || !supabaseAnonKey || !supabaseAccessToken || !supabaseSchema) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: { schema: supabaseSchema },
  global: {
    headers: {
      Authorization: `Bearer ${supabaseAccessToken}`,
    },
  },
})
