import { ProductCard } from "@/components/product-card"
import { Separator } from "@/components/ui/separator"
import type { Product } from "@/lib/types"

type SimilarProductsProps = {
  products: Product[]
  category: 'blade' | 'ratchet' | 'bit' | 'other' | 'x-over'
  currentProductId: string
}

export function SimilarProducts({ products, category, currentProductId }: SimilarProductsProps) {
  // Shuffle utility
  function shuffle<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  // Filter out the current product and shuffle, then limit to max 4 similar products
  const filteredProducts = shuffle(
    products.filter(product => product.id !== currentProductId)
  ).slice(0, 4);

  if (filteredProducts.length === 0) {
    return null
  }

  // Determine the highlight color based on category
  const titleColor =
    category === 'blade' ? 'cyber-glow-red' :
    category === 'ratchet' ? 'cyber-glow-green' :
    category === 'bit' ? 'cyber-glow-blue' :
    category === 'other' ? 'cyber-glow-yellow' :
    category === 'x-over' ? 'cyber-glow-purple' :
    'cyber-glow-red'

  return (
    <div className="space-y-6 py-8">
      <div>
        <h2 className={`text-2xl font-bold cyber-heading ${titleColor}`}>
          {category === 'blade' ? 'More Blades' :
           category === 'ratchet' ? 'More Ratchets' :
           category === 'bit' ? 'More Bit' :
           category === 'other' ? 'More Other' :
           category === 'x-over' ? 'More X-Over' :
           'More Assist Blade'}
        </h2>
        <Separator className="my-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            // description={product.description}
            image={product.image}
            category={category}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}
