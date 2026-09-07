import { createClient } from '@supabase/supabase-js'
import { products } from './src/lib/data.js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function migrateData() {
  console.log('Starting data migration...')

  try {
    // Clear existing data
    console.log('Clearing existing data...')
    await supabase.from('product_variants').delete().neq('id', '')
    await supabase.from('products').delete().neq('id', '')

    // Insert products
    console.log(`Inserting ${products.length} products...`)
    for (const product of products) {
      const { bey, ...productData } = product

      // Insert main product
      const { error: productError } = await supabase
        .from('products')
        .insert({
          id: productData.id,
          name: productData.name,
          image: productData.image,
          category: productData.category,
          type: Array.isArray(productData.type) ? productData.type : [productData.type],
          price: productData.price,
          specs: productData.specs || {}
        })

      if (productError) {
        console.error(`Error inserting product ${productData.id}:`, productError)
        continue
      }

      // Insert variants if they exist
      if (bey && bey.length > 0) {
        const variants = bey.map(variant => ({
          id: variant.id,
          product_id: productData.id,
          name: variant.name,
          image: variant.image
        }))

        const { error: variantError } = await supabase
          .from('product_variants')
          .insert(variants)

        if (variantError) {
          console.error(`Error inserting variants for ${productData.id}:`, variantError)
        }
      }
    }

    console.log('Migration completed successfully!')

    // Verify counts
    const { count: productCount } = await supabase
      .from('products')
      .select('*', { count: 'exact', head: true })

    const { count: variantCount } = await supabase
      .from('product_variants')
      .select('*', { count: 'exact', head: true })

    console.log(`Migrated ${productCount} products and ${variantCount} variants`)

  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

migrateData()