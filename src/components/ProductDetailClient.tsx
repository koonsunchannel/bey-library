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
      setDisplayProduct({
        ...product,
        ...selected,
        name: selected.name?.trim() || product.name,
        image: selected.image || product.image,
        type: selected.type || product.type,
      })
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
  const mainBladeImage3 = (displayProduct.specs?.['Main Blade Image3'] || '') as string
  const lockChipLabel = (displayProduct.specs?.['Lock Chip Label'] || 'Lock Chip') as string
  const bladeDetailLabel1 = (isXpansion
    ? (displayProduct.specs?.['Metal Blade Label'] || displayProduct.specs?.['Main Blade Label'] || 'Metal Blade')
    : (displayProduct.specs?.['Main Blade Label'] || 'Main Blade')) as string
  const bladeDetailLabel2 = (isXpansion
    ? (displayProduct.specs?.['Metal Blade Label2'] || displayProduct.specs?.['Main Blade Label2'] || '')
    : (displayProduct.specs?.['Main Blade Label2'] || '')) as string
  const bladeDetailLabel3 = (displayProduct.specs?.['Main Blade Label3'] || '') as string
  const hasXOverBladeDetails = displayProduct.category === 'x-over' && (
    hasImage(lockChipImage) || hasImage(mainBladeImage1) || hasImage(mainBladeImage2) || hasImage(mainBladeImage3) ||
    Boolean(
      displayProduct.specs?.['Lock Chip Type'] ||
      displayProduct.specs?.['Lock Chip Label'] ||
      displayProduct.specs?.['Main Blade Label'] ||
      displayProduct.specs?.['Main Blade Label2'] ||
      displayProduct.specs?.['Main Blade Label3']
    )
  )
  const hasLockChipDetails = hasImage(lockChipImage) || Boolean(displayProduct.specs?.['Lock Chip Type'] || displayProduct.specs?.['Lock Chip Label'])
  const mainBladeDetails = [
    { image: mainBladeImage1, label: bladeDetailLabel1 },
    { image: mainBladeImage2, label: bladeDetailLabel2 },
    { image: mainBladeImage3, label: bladeDetailLabel3 },
  ].filter(detail => hasImage(detail.image) || Boolean(detail.label))

  // Split Blade helpers
  const splitBladeUpperImage = (displayProduct.specs?.['Lock Chip Image'] || '') as string
  const splitBladeLowerImage = (displayProduct.specs?.['Main Blade Image'] || '') as string
  const splitBladeUpperLabel = (displayProduct.specs?.['Lock Chip Label'] || 'Upper') as string
  const splitBladeLowerLabel = (displayProduct.specs?.['Main Blade Label'] || 'Lower') as string

  // Filter out image & label keys from displayed specs so URLs / image keys don't show
  // Also hide Product Xpand because it is shown under Product Line in this UI
  const _specs = displayProduct.specs || {}
  const imageKeys = ['Lock Chip Image', 'Main Blade Image', 'Metal Blade Image', 'Main Blade Image2', 'Metal Blade Image2', 'Sponsor Image']
  const labelKeys = ['Lock Chip Label', 'Main Blade Label', 'Metal Blade Label', 'Main Blade Label2', 'Metal Blade Label2']
  const hiddenKeys = ['Product Xpanded', '__randomVariants']
  const filteredSpecsEntries = Object.entries(_specs).filter(([key, value]) => {
    if (imageKeys.includes(key) || labelKeys.includes(key) || hiddenKeys.includes(key)) return false
    if (String(value).trim().toLowerCase() === 'none') return false
    if (key === 'Weight' && String(value).trim() === '') return false
    return true
  })

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
                        {key === 'Sponsor URL' ? (
                          <a href={value} target="_blank" rel="noreferrer" className="text-cyan-300 underline hover:text-cyan-200">
                            {value}
                          </a>
                        ) : value}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-y-2">
                    {filteredSpecsEntries.map(([key, value]) => (
                      <div key={key} className="flex flex-col">
                        <span className="text-sm text-muted-foreground">{key}</span>
                        <span className="font-medium whitespace-pre-wrap">
                          {key === 'Sponsor URL' ? (
                            <a href={value} target="_blank" rel="noreferrer" className="text-cyan-300 underline hover:text-cyan-200">
                              {value}
                            </a>
                          ) : value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {displayProduct.category === 'credits' && displayProduct.specs?.['Sponsor Image'] && (
              <div className="mt-6">
                <h3 className={`mb-4 text-xl font-bold cyber-heading ${glowColor}`}>SPONSOR</h3>
                <img
                  src={displayProduct.specs['Sponsor Image']}
                  alt={displayProduct.specs['Sponsor Shop'] || 'Sponsor'}
                  className="max-h-48 max-w-full rounded-lg object-contain"
                />
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
            {((displayProduct.category === 'blade' && isCX) || hasXOverBladeDetails) && (
              <div className="mt-6">
                <h3 className={`text-xl font-bold cyber-heading ${glowColor} mb-4`}>
                  BLADE DETAILS
                </h3>
                <div className="mb-6 flex flex-wrap items-start justify-center gap-4">
                  {hasLockChipDetails && (
                    <div className="flex flex-col items-center">
                      {hasImage(lockChipImage) ? (
                      <div className="relative w-40 h-40 rounded-lg overflow-hidden border bg-black">
                        <Image src={lockChipImage} alt="Lock Chip" fill className="object-contain" />
                      </div>
                    ) : (
                      <div className="flex min-h-40 min-w-40 items-center justify-center rounded-lg border bg-gray-900 px-3 text-center">
                        <span className="text-sm font-medium">{displayProduct.specs?.['Lock Chip Type']}</span>
                      </div>
                    )}
                      {displayProduct.specs?.['Lock Chip Label'] && <div className="mt-2 text-center text-sm">{displayProduct.specs['Lock Chip Label']}</div>}
                    </div>
                  )}

                  {mainBladeDetails.map((detail, index) => (
                    <div key={`blade-detail-${index}`} className="flex flex-col items-center">
                      {hasImage(detail.image) && (
                        <div className="relative h-40 w-40 overflow-hidden rounded-lg border bg-black">
                          <Image src={detail.image} alt={detail.label || `Main Blade ${index + 1}`} fill className="object-contain" />
                        </div>
                      )}
                      {detail.label && <div className="mt-2 text-center text-sm">{detail.label}</div>}
                    </div>
                  ))}
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
