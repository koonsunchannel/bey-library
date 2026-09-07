import { NextResponse, type NextRequest } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function PATCH(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || !Array.isArray(body.items) || body.items.some((item: any) => (
    typeof item?.id !== 'string' || !Number.isInteger(item.display_order) || item.display_order < 0
  ))) {
    return NextResponse.json({ success: false, message: 'Invalid order items' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()

  try {
    const results = await Promise.all(body.items.map((item: { id: string; display_order: number }) => (
      supabase
        .from('products')
        .update({ display_order: item.display_order })
        .eq('id', item.id)
    )))

    const failed = results.find(result => result.error)
    if (failed?.error) {
      console.error('Reorder products error:', failed.error)
      return NextResponse.json({ success: false, message: failed.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reorder products exception:', error)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}