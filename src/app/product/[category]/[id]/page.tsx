import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getProductById, getProducts, products } from '@/lib/data'
import { SimilarProducts } from '@/components/similar-products'

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
  const isValidCategory = ['blade', 'ratchet', 'bit', 'other', 'x-over'].includes(category)

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
    product.category === 'ratchet' ? 'cyber-glow-green' :
    product.category === 'bit' ? 'cyber-glow-blue' :
    product.category === 'other' ? 'cyber-glow-yellow' :
    'cyber-glow-purple'

  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg cyber-border bg-black">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>


        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className={`text-3xl font-bold cyber-heading ${glowColor} md:text-4xl`}>
              {product.name}
            </h1>
            <p className="text-2xl font-bold">{product.price}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-lg">{product.fullDescription}</p>

            {product.specs && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  SPECIFICATIONS
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.combo && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  RECOMMEND COMBO
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {Object.entries(product.combo).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.features && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  FEATURES
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={`feature-${feature.substring(0, 20)}`} className="flex items-start">
                      <div className={`mr-2 text-lg ${glowColor}`}>•</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.bey && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  VARIANTS
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {product.bey.map((bey) => (
                    <div key={bey.id} className="flex flex-col items-center space-y-2">
                      <div className="relative w-50 h-50">
                        <Image
                          src={bey.image}
                          alt={bey.name}
                          width={200}
                          height={200}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-sm font-medium text-center">{bey.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.pro && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  PRODUCT
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {product.pro.map((pro) => (
                    <div key={pro.id} className="flex flex-col items-center space-y-2">
                      <div className="relative w-32 h-32">
                        <Image
                          src={pro.image}
                          alt={pro.name}
                          width={200}
                          height={200}
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-sm font-medium text-center">{pro.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* <div className="mt-8 flex space-x-4">
              <Button
                className="w-full bg-white text-black hover:bg-gray-200"
                disabled={!product.stock || product.stock <= 0}
              >
                {product.stock && product.stock > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
              </Button>
            </div>

            {product.stock && (
              <p className="text-sm text-muted-foreground">
                {product.stock > 10
                  ? 'In Stock'
                  : product.stock > 0
                  ? `Only ${product.stock} left in stock`
                  : 'Out of Stock'}
              </p>
            )} */}
          </div>
        </div>
      </div>

      {/* Similar Products Section - This is the sub-area that displays other product options */}
      <SimilarProducts
        products={categoryProducts}
        category={product.category}
        currentProductId={product.id}
      />
    </div>
  )
}
