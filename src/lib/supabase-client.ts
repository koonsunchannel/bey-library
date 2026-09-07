import { createBrowserClient, type SupabaseClient } from '@supabase/ssr'

function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not set in environment variables`)
  }
  return value
}

export function createClient(): SupabaseClient {
  return createBrowserClient(
    requireEnv('NEXT_PUBLIC_SUPABASE_URL', process.env.NEXT_PUBLIC_SUPABASE_URL),
    requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  )
}