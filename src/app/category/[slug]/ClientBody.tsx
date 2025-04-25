'use client'

import { useState } from 'react'
import Filter from '@/components/Filter'
import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/types'

export default function ClientBody({
  products,
  slug,
}: {
  products: Product[]
  slug: string
}) {
  const [selectedType, setSelectedType] = useState<string>('All')

  const filteredProducts =
    selectedType === 'All' || !['blade', 'bit', 'x-over'].includes(slug)
    ? products
    : products.filter((product) =>
        Array.isArray(product.type)
            ? product.type.includes(selectedType)
            : product.type === selectedType
        )


  return (
    <>
      {['blade', 'bit', 'x-over'].includes(slug) && (
        <div className="mb-8">
          <Filter onChange={setSelectedType} />
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    </>
  )
}
