"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { Product } from '@/lib/types'
import { SimilarProducts } from '@/components/similar-products'

type Props = {
  product: Product
  categoryProducts: Product[]
}

export function ProductDetailClient({ product, categoryProducts }: Props) {
  const [displayProduct, setDisplayProduct] = useState<Product>(product)

  useEffect(() => {
    if (product && (product as any).randomVariants && (product as any).randomVariants.length > 0) {
      const variants = (product as any).randomVariants
      const idx = Math.floor(Math.random() * variants.length)
      const selected = variants[idx]
      setDisplayProduct({ ...product, ...selected })
    } else {
      setDisplayProduct(product)
    }
  }, [product])

  const glowColor =
    displayProduct.category === 'blade' ? 'cyber-glow-red' :
    displayProduct.category === 'assist-blade' ? 'cyber-glow-red' :
    displayProduct.category === 'ratchet' ? 'cyber-glow-green' :
    displayProduct.category === 'bit' ? 'cyber-glow-blue' :
    displayProduct.category === 'other' ? 'cyber-glow-yellow' :
    displayProduct.category === 'x-over' ? 'cyber-glow-purple' :
    'cyber-glow-red'

  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg cyber-border bg-black">
          <Image
            src={displayProduct.image}
            alt={displayProduct.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className={`text-3xl font-bold cyber-heading ${glowColor} md:text-4xl`}>
              {displayProduct.name}
            </h1>
            <p className="text-2xl font-bold">{displayProduct.price}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-lg">{displayProduct.fullDescription}</p>

            {displayProduct.specs && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  SPECIFICATIONS
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {Object.entries(displayProduct.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {displayProduct.combo && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  RECOMMEND PARTS
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {Object.entries(displayProduct.combo).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {displayProduct.features && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  FEATURES
                </h3>
                <ul className="space-y-2">
                  {displayProduct.features.map((feature) => (
                    <li key={`feature-${feature.substring(0, 20)}`} className="flex items-start">
                      <div className={`mr-2 text-lg ${glowColor}`}>•</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {displayProduct.bey && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  VARIANTS
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {displayProduct.bey.map((bey) => (
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

            {displayProduct.pro && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  PRODUCT
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {displayProduct.pro.map((pro) => (
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

          </div>
        </div>
      </div>

      <SimilarProducts
        products={categoryProducts}
        category={displayProduct.category === 'assist-blade' ? 'blade' : displayProduct.category}
        currentProductId={displayProduct.id}
      />
    </div>
  )
}
