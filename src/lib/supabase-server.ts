import { createClient, type SupabaseClient } from '@supabase/supabase-js'

function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not set in environment variables`)
  }
  return value
}

export function createServerSupabaseClient(): SupabaseClient {
  const url = requireEnv('NEXT_PUBLIC_SUPABASE_URL', process.env.NEXT_PUBLIC_SUPABASE_URL)
  const key = requireEnv('SUPABASE_SERVICE_ROLE_KEY', process.env.SUPABASE_SERVICE_ROLE_KEY)

  return createClient(url, key)
}