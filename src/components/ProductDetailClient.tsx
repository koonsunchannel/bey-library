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

  const hasImage = (src?: string | null): src is string => {
    return Boolean(src && typeof src === 'string' && src.trim().length > 0)
  }

  // Blade Details helpers
  const productLine = (displayProduct.specs?.['Product Line'] || '').toString()
  const isCX = (displayProduct.category === 'blade' || displayProduct.category === 'x-over') && productLine.toLowerCase().includes('cx')
  const isXpansion = isCX && productLine.toLowerCase().includes('xpansion')
  const isSplitBlade = displayProduct.specs?.['Gimmick']?.toString().toLowerCase().includes('split blade')
  const lockChipImage = (displayProduct.specs?.['Lock Chip Image'] || '') as string
  const mainBladeImage1 = (isXpansion
    ? (displayProduct.specs?.['Metal Blade Image'] || displayProduct.specs?.['Main Blade Image'] || '')
    : (displayProduct.specs?.['Main Blade Image'] || displayProduct.specs?.['Metal Blade Image'] || '')) as string
  const mainBladeImage2 = (isXpansion
    ? (displayProduct.specs?.['Metal Blade Image2'] || displayProduct.specs?.['Main Blade Image2'] || '')
    : (displayProduct.specs?.['Main Blade Image2'] || displayProduct.specs?.['Metal Blade Image2'] || '')) as string
  const lockChipLabel = (displayProduct.specs?.['Lock Chip Label'] || 'Lock Chip') as string
  const bladeDetailLabel1 = (isXpansion
    ? (displayProduct.specs?.['Metal Blade Label'] || displayProduct.specs?.['Main Blade Label'] || 'Metal Blade')
    : (displayProduct.specs?.['Main Blade Label'] || 'Main Blade')) as string
  const bladeDetailLabel2 = (isXpansion
    ? (displayProduct.specs?.['Metal Blade Label2'] || displayProduct.specs?.['Main Blade Label2'] || '')
    : (displayProduct.specs?.['Main Blade Label2'] || '')) as string

  // Split Blade helpers
  const splitBladeUpperImage = (displayProduct.specs?.['Lock Chip Image'] || '') as string
  const splitBladeLowerImage = (displayProduct.specs?.['Main Blade Image'] || '') as string
  const splitBladeUpperLabel = (displayProduct.specs?.['Lock Chip Label'] || 'Upper') as string
  const splitBladeLowerLabel = (displayProduct.specs?.['Main Blade Label'] || 'Lower') as string

  // Filter out image & label keys from displayed specs so URLs / image keys don't show
  // Also hide Product Xpand because it is shown under Product Line in this UI
  const _specs = displayProduct.specs || {}
  const imageKeys = ['Lock Chip Image', 'Main Blade Image', 'Metal Blade Image', 'Main Blade Image2', 'Metal Blade Image2']
  const labelKeys = ['Lock Chip Label', 'Main Blade Label', 'Metal Blade Label', 'Main Blade Label2', 'Metal Blade Label2']
  const hiddenKeys = ['Product Xpanded']
  const filteredSpecsEntries = Object.entries(_specs).filter(([k]) => !imageKeys.includes(k) && !labelKeys.includes(k) && !hiddenKeys.includes(k))

  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg cyber-border bg-black">
          {hasImage(displayProduct.image) ? (
            <Image
              src={displayProduct.image}
              alt={displayProduct.name}
              fill
              className="object-contain"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No Image</div>
          )}
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
                  {displayProduct.category === 'other' ? 'PRODUCT LISTS' : 'SPECIFICATIONS'}
                </h3>
                {displayProduct.category === 'other' ? (
                  <div className="space-y-2">
                    {filteredSpecsEntries.map(([key, value]) => (
                      <div key={key} className="whitespace-pre-wrap font-medium">
                        {value}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-y-2">
                    {filteredSpecsEntries.map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-muted-foreground">{key}</span>
                        <span className="font-medium whitespace-pre-wrap">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
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
                  {displayProduct.features.map((feature, idx) => (
                    <li key={`feature-${idx}`} className="flex items-start">
                      <div className={`mr-2 text-lg ${glowColor}`}>•</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Blade Details (for CX/x-over blades) - placed above Variants */}
            {((displayProduct.category === 'blade' || displayProduct.category === 'x-over') && (displayProduct.specs?.['Product Line'] || '').toString().toLowerCase().includes('cx')) && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  BLADE DETAILS
                </h3>
                <div className="mb-6 grid grid-cols-2 gap-4 items-center">
                  <div className="flex flex-col items-center">
                    {hasImage(lockChipImage) ? (
                      <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                        <Image src={lockChipImage} alt="Lock Chip" fill className="object-contain" />
                      </div>
                    ) : (
                      <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border">
                        <div className="text-center px-2">
                          <div className="text-sm text-muted-foreground">Lock Chip</div>
                          <div className="text-sm font-medium mt-2">{displayProduct.specs?.['Lock Chip Type'] || '—'}</div>
                        </div>
                      </div>
                    )}
                    <div className="mt-2 text-sm text-center">{lockChipLabel}</div>
                  </div>

                  <div className="flex flex-col items-center">
                    {/* If product has randomVariants or a second main image, show images side-by-side */}
                    {((displayProduct as any).randomVariants?.length || mainBladeImage2) ? (
                      <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                            {hasImage(mainBladeImage1) ? (
                              <Image src={mainBladeImage1} alt={bladeDetailLabel1} fill className="object-contain" />
                            ) : hasImage(displayProduct.image) ? (
                              <Image src={displayProduct.image} alt={displayProduct.name} fill className="object-contain" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No Image</div>
                            )}
                          </div>
                          <div className="mt-2 text-sm text-center">{bladeDetailLabel1}</div>
                        </div>

                        {hasImage(mainBladeImage2) && (
                          <div className="flex flex-col items-center">
                            <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                              <Image src={mainBladeImage2} alt={bladeDetailLabel2 || `${bladeDetailLabel1} 2`} fill className="object-contain" />
                            </div>
                            <div className="mt-2 text-sm text-center">{bladeDetailLabel2 || `${bladeDetailLabel1} 2`}</div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-2">
                        <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                          {mainBladeImage1 ? (
                            <Image src={mainBladeImage1} alt={bladeDetailLabel1} fill className="object-contain" />
                          ) : (
                            <Image src={displayProduct.image} alt={displayProduct.name} fill className="object-contain" />
                          )}
                        </div>
                        <div className="mt-2 text-sm text-center">{bladeDetailLabel1}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Split Blade Details Section */}
            {isSplitBlade && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  BLADE DETAILS
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {hasImage(splitBladeUpperImage) && (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                        <Image
                          src={splitBladeUpperImage}
                          alt={splitBladeUpperLabel}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-center">{splitBladeUpperLabel}</p>
                    </div>
                  )}
                  {hasImage(splitBladeLowerImage) && (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                        <Image
                          src={splitBladeLowerImage}
                          alt={splitBladeLowerLabel}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-center">{splitBladeLowerLabel}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {displayProduct.bey && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  {displayProduct.category === 'other' ? 'PRODUCT DETAILS' : 'VARIANTS'}
                </h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {displayProduct.bey.map((bey) => (
                    <div key={bey.id} className="flex flex-col items-center space-y-2">
                      <div className="relative w-50 h-50">
                        {hasImage(bey.image) ? (
                          <Image
                            src={bey.image}
                            alt={bey.name}
                            width={200}
                            height={200}
                            className="object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                        )}
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
                        {hasImage(pro.image) ? (
                          <Image
                            src={pro.image}
                            alt={pro.name}
                            width={200}
                            height={200}
                            className="object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                        )}
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
