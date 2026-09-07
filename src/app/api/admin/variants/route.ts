import { NextResponse, type NextRequest } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || !body.productId || !Array.isArray(body.variants)) {
    return NextResponse.json(
      { success: false, message: 'Missing productId or variants' },
      { status: 400 }
    )
  }

  const supabase = createServerSupabaseClient()

  try {
    const payload = body.variants.map((v: any) => ({
      id: v.id,
      product_id: body.productId,
      name: v.name,
      image: v.image || null,
    }))

    const { data, error } = await supabase
      .from('product_variants')
      .insert(payload)
      .select('*')

    if (error) {
      console.error('Create variants error:', error)
      return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, variants: data })
  } catch (err) {
    console.error('Create variants exception:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || !body.productId) {
    return NextResponse.json({ success: false, message: 'Missing productId' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from('product_variants')
      .delete()
      .eq('product_id', body.productId)

    if (error) {
      console.error('Delete variants error:', error)
      return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Delete variants exception:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
