import { NextResponse, type NextRequest } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import type { Product } from '@/lib/types'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body) {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()
  const productId = typeof body.id === 'string' ? body.id.trim() : ''
  if (!productId) {
    return NextResponse.json({ success: false, message: 'กรุณากรอก ID หลักของสินค้า' }, { status: 400 })
  }

  const { data: existingProduct, error: lookupError } = await supabase
    .from('products')
    .select('id')
    .eq('id', productId)
    .maybeSingle()

  if (lookupError) {
    console.error('Product ID lookup error:', lookupError)
    return NextResponse.json({ success: false, message: 'ตรวจสอบ ID สินค้าไม่สำเร็จ' }, { status: 500 })
  }

  if (existingProduct) {
    return NextResponse.json({
      success: false,
      message: `ID "${productId}" มีอยู่แล้ว กรุณาเปลี่ยนเป็น ID ใหม่`,
    }, { status: 409 })
  }

  const fallbackSpecs = {
    ...(body.specs || {}),
    __randomVariants: body.randomVariants || [],
  }

  try {
    const productPayload = {
      id: productId,
      name: body.name,
      image: body.image || null,
      category: body.category,
      type: body.type || [],
      price: body.price || null,
      specs: body.specs || {},
      random_variants: body.randomVariants || [],
    }
    let { data, error } = await supabase
      .from('products')
      .insert(productPayload)
      .select('*')
      .single()

    if (error?.message.includes("random_variants") && error.message.includes('schema cache')) {
      const { random_variants: _randomVariants, ...fallbackPayload } = productPayload
      const fallbackResult = await supabase
        .from('products')
        .insert({ ...fallbackPayload, specs: fallbackSpecs })
        .select('*')
        .single()
      data = fallbackResult.data
      error = fallbackResult.error
    }

    if (error) {
      console.error('Create product error:', error)
      if (error.code === '23505') {
        return NextResponse.json({
          success: false,
          message: `ID "${productId}" มีอยู่แล้ว กรุณาเปลี่ยนเป็น ID ใหม่`,
        }, { status: 409 })
      }
      return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, product: data })
  } catch (err) {
    console.error('Create product exception:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || !body.id) {
    return NextResponse.json({ success: false, message: 'Missing id' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()
  const fallbackSpecs = {
    ...(body.specs || {}),
    __randomVariants: body.randomVariants || [],
  }

  try {
    const productPayload = {
      name: body.name,
      image: body.image || null,
      category: body.category,
      type: body.type || [],
      price: body.price || null,
      specs: body.specs || {},
      random_variants: body.randomVariants || [],
    }
    let { data, error } = await supabase
      .from('products')
      .update(productPayload)
      .eq('id', body.id)
      .select('*')
      .single()

    if (error?.message.includes("random_variants") && error.message.includes('schema cache')) {
      const { random_variants: _randomVariants, ...fallbackPayload } = productPayload
      const fallbackResult = await supabase
        .from('products')
        .update({ ...fallbackPayload, specs: fallbackSpecs })
        .eq('id', body.id)
        .select('*')
        .single()
      data = fallbackResult.data
      error = fallbackResult.error
    }

    if (error) {
      console.error('Update product error:', error)
      return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, product: data })
  } catch (err) {
    console.error('Update product exception:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || !body.id) {
    return NextResponse.json({ success: false, message: 'Missing id' }, { status: 400 })
  }

  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', body.id)

    if (error) {
      console.error('Delete product error:', error)
      return NextResponse.json({ success: false, message: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Delete product exception:', err)
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}
