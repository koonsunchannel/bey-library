import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getProductById, getProducts, products } from '@/lib/data'
import { ProductDetailClient } from '@/components/ProductDetailClient'

// Generate static params for all product pages
export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category,
    id: product.id,
  }))
}

export default function ProductPage({
  params
}: {
  params: { category: string; id: string }
}) {
  const { category, id } = params
  const isValidCategory = ['blade', 'assist-blade', 'ratchet', 'bit', 'other', 'x-over', 'credits'].includes(category)

  // Get the product data
  const product = getProductById(id)

  // Get other products from the same category for the similar products section
  const categoryProducts = product ? getProducts(product.category) : []

  if (!product || !isValidCategory) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl font-bold cyber-heading">Product Not Found</h1>
        <p className="mt-4">The product you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    )
  }

  // Determine the glow color based on category
  const glowColor =
    product.category === 'blade' ? 'cyber-glow-red' :
    product.category === 'assist-blade' ? 'cyber-glow-red' :
    product.category === 'ratchet' ? 'cyber-glow-green' :
    product.category === 'bit' ? 'cyber-glow-blue' :
    product.category === 'other' ? 'cyber-glow-yellow' :
    product.category === 'x-over' ? 'cyber-glow-purple' :
    'cyber-glow-red'

  return (
    <ProductDetailClient product={product} categoryProducts={categoryProducts} />
  )
}
