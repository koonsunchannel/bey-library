import { createClient } from './supabase-client'
import type { Product } from './types'

export async function getProducts(category?: string): Promise<Product[]> {
  const supabase = createClient()

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

  // Sort: non-rare first, then rare (both by created_at ascending)
  return products.sort((a: Product, b: Product) => {
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

export async function getProductById(id: string): Promise<Product | null> {
  const supabase = createClient()

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
  const supabase = createClient()

  const { data, error } = await supabase
    .from('products')
    .select('id')

  if (error) {
    console.error('Error fetching product IDs:', error)
    return []
  }

  return (data || []).map((item: any) => item.id)
}

export async function createProduct(product: Partial<Product>): Promise<Product | null> {
  const supabase = createClient()

  const payload = {
    id: product.id,
    name: product.name,
    image: product.image || null,
    category: product.category,
    type: Array.isArray(product.type) ? product.type : [product.type].filter(Boolean),
    price: product.price || null,
    specs: product.specs || {},
  }

  const { data, error } = await supabase
    .from('products')
    .insert(payload)
    .select(`*, product_variants (*)`)
    .single()

  if (error) {
    console.error('Error creating product:', error)
    return null
  }

  return {
    ...data,
    bey: data.product_variants || []
  }
}

export async function createProductVariants(productId: string, variants: Array<{id: string; name: string; image?: string}>): Promise<boolean> {
  if (!variants || variants.length === 0) return true

  const supabase = createClient()

  const payload = variants.map(variant => ({
    id: variant.id,
    product_id: productId,
    name: variant.name,
    image: variant.image || null
  }))

  const { error } = await supabase
    .from('product_variants')
    .insert(payload)

  if (error) {
    console.error('Error creating product variants:', error)
    return false
  }

  return true
}

export async function replaceProductVariants(productId: string, variants: Array<{id: string; name: string; image?: string}>): Promise<boolean> {
  const supabase = createClient()

  const { error: deleteError } = await supabase
    .from('product_variants')
    .delete()
    .eq('product_id', productId)

  if (deleteError) {
    console.error('Error deleting old variants:', deleteError)
    return false
  }

  if (!variants || variants.length === 0) return true

  return createProductVariants(productId, variants)
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product | null> {
  const supabase = createClient()

  const payload = {
    name: product.name,
    image: product.image || null,
    category: product.category,
    type: Array.isArray(product.type) ? product.type : [product.type].filter(Boolean),
    price: product.price || null,
    specs: product.specs || {},
  }

  const { data, error } = await supabase
    .from('products')
    .update(payload)
    .eq('id', id)
    .select(`*, product_variants (*)`)
    .single()

  if (error) {
    console.error('Error updating product:', error)
    return null
  }

  return {
    ...data,
    bey: data.product_variants || []
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  const supabase = createClient()

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting product:', error)
    return false
  }

  return true
}