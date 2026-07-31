import { useState, useCallback } from 'react'
import { supabase, supabaseSchema } from '@/lib/supabase'

const db = supabase.schema(supabaseSchema)

export function useTable<TInsert = Record<string, unknown>>(tableName: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const insert = useCallback(async (row: TInsert): Promise<TInsert | null> => {
    setLoading(true)
    setError(null)
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error: err } = await db
        .from(tableName)
        .insert(row as any)

      if (err) throw err
      return row
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'An error occurred'
      setError(msg)
      return null
    } finally {
      setLoading(false)
    }
  }, [tableName])

  return { insert, loading, error }
}
