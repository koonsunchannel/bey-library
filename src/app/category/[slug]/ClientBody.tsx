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
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
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
  
  // ถ้ามีการเลือก ให้กรองข้อมูล
  if (selectedTypes.length > 0 && ['blade', 'assist-blade', 'bit', 'x-over'].includes(slug)) {
    // แยกการเลือกตามหมวดหมู่
    const selectedProductLines = selectedTypes.filter(t => ['BX', 'UX', 'CX'].includes(t));
    const selectedSpins = selectedTypes.filter(t => ['Right', 'Left'].includes(t));
    const selectedTypeCategories = selectedTypes.filter(t => ['attack', 'balance', 'stamina', 'defense', 'rare'].includes(t));
    const selectedHybrid = selectedTypes.includes('hybrid');

    filteredProducts = randomizedProducts.filter((product) => {
      // ตรวจสอบ Product Line (ถ้ามีการเลือก)
      if (selectedProductLines.length > 0) {
        const matchesProductLine = selectedProductLines.includes(product.specs?.['Product Line'] as string);
        if (!matchesProductLine) return false;
      }

      // ตรวจสอบ Type (ถ้ามีการเลือก)
      if (selectedTypeCategories.length > 0) {
        // สำหรับ assist-blade ให้ดูจาก specs.Type แทน
        if (slug === 'assist-blade') {
          const specsType = product.specs?.['Type'];
          const matchesType = specsType && selectedTypeCategories.some(t => specsType.toLowerCase().includes(t));
          if (!matchesType) return false;
        } else {
          const productTypes = Array.isArray(product.type) ? product.type : [product.type];
          const matchesType = selectedTypeCategories.some(t => productTypes.includes(t));
          if (!matchesType) return false;
        }
      }

      // ตรวจสอบ Spin (ถ้ามีการเลือก) - สำหรับ blade และ assist-blade
      if ((slug === 'blade' || slug === 'assist-blade') && selectedSpins.length > 0) {
        const matchesSpin = selectedSpins.includes(product.specs?.['Spin'] as string);
        if (!matchesSpin) return false;
      }

      // ตรวจสอบ Hybrid (ถ้ามีการเลือก) - ตรวจสอบจาก image path หรือ specs.Type
      if (selectedHybrid) {
        const imgPath = product.image || '';
        const specsType = product.specs?.['Type'] || '';
        const isHybrid = (typeof imgPath === 'string' && imgPath.includes('/Hybird Part/')) ||
                         (typeof specsType === 'string' && specsType.includes('Hybrid Part'));
        if (!isHybrid) return false;
      }

      return true;
    });
  }

  return (
    <>
      {['blade', 'assist-blade', 'bit', 'x-over'].includes(slug) && (
        <div className="mb-8">
          <Filter onChange={setSelectedTypes} slug={slug} />
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
