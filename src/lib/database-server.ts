import { createServerSupabaseClient } from './supabase-server'
import type { Product } from './types'
import { sortXOverProducts } from './utils'

export async function getProductsServer(category?: string): Promise<Product[]> {
  const supabase = createServerSupabaseClient()

  let query = supabase
    .from('products')
    .select(`
      *,
      product_variants (*)
    `)
    .order('display_order', { ascending: true, nullsFirst: false })
    .order('created_at', { ascending: true })

  if (category) {
    query = query.eq('category', category)
  }

  let { data, error } = await query

  if (error) {
    const fallbackQuery = supabase
      .from('products')
      .select(`
        *,
        product_variants (*)
      `)
      .order('created_at', { ascending: true })

    if (category) {
      fallbackQuery.eq('category', category)
    }

    const fallback = await fallbackQuery
    data = fallback.data
    error = fallback.error
  }

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  const products = (data || []).map((product: any) => ({
    ...product,
    bey: product.product_variants || [],
    randomVariants: product.random_variants || product.specs?.__randomVariants || []
  }))

  if (category === 'x-over') {
    return sortXOverProducts(products)
  }

  // Sort: non-rare first, then rare (both by created_at ascending)
  return products.sort((a, b) => {
    if (a.display_order != null || b.display_order != null) {
      return (a.display_order ?? Number.MAX_SAFE_INTEGER) - (b.display_order ?? Number.MAX_SAFE_INTEGER)
    }

    const aIsRare = Array.isArray(a.type) && a.type.includes('rare')
    const bIsRare = Array.isArray(b.type) && b.type.includes('rare')
    
    // If different rarity, non-rare comes first
    if (aIsRare !== bIsRare) {
      return aIsRare ? 1 : -1
    }
    
    // Same rarity, sort by created_at ascending
    return new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime()
  })
}

export async function getProductByIdServer(id: string): Promise<Product | null> {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_variants (*)
    `)
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return null
  }

  return {
    ...data,
    bey: data.product_variants || [],
    randomVariants: data.random_variants || data.specs?.__randomVariants || []
  }
}

export async function getAllProductIds(): Promise<string[]> {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from('products')
    .select('id')

  if (error) {
    console.error('Error fetching product IDs:', error)
    return []
  }

  return (data || []).map((item: any) => item.id)
}

export async function getAdminUser(): Promise<{id:string; password:string} | null> {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from('admin_users')
    .select('id,password')
    .eq('id', 'admin')
    .single()

  if (error) {
    console.error('Error fetching admin user:', error)
    return null
  }

  return data as {id:string; password:string}
}