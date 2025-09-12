'use client'


import { useState, useEffect } from 'react'
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
  const [randomizedProducts, setRandomizedProducts] = useState<Product[]>(products)

  useEffect(() => {
    setRandomizedProducts(
      products.map(product => {
        if ((product as any).randomVariants?.length) {
          const variants = (product as any).randomVariants;
          const chosen = variants[Math.floor(Math.random() * variants.length)];
          return { ...product, ...chosen };
        }
        return product;
      })
    )
  }, [products])

  let filteredProducts = randomizedProducts;
  if (selectedType !== 'All' && ['blade', 'bit', 'x-over'].includes(slug)) {
    if (slug === 'blade' && ['BX', 'UX', 'CX'].includes(selectedType)) {
      filteredProducts = randomizedProducts.filter(product => product.specs && product.specs['Product Line'] === selectedType);
    } else {
      filteredProducts = randomizedProducts.filter((product) =>
        Array.isArray(product.type)
          ? product.type.includes(selectedType)
          : product.type === selectedType
      );
    }
  }

  return (
    <>
      {['blade', 'bit', 'x-over'].includes(slug) && (
        <div className="mb-8">
          <Filter onChange={setSelectedType} slug={slug} />
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            price={product.price}
            type={Array.isArray(product.type) ? product.type : [product.type]}
          />
        ))}
      </div>
    </>
  )
}
