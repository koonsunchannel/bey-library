'use client'

import { useState, useEffect } from 'react'
import Filter from '@/components/Filter'
import { ProductCard } from '@/components/product-card'
import ProductEditor from '@/components/admin/ProductEditor'
import BladeProductForm from '@/components/admin/BladeProductForm'
import OverBladeProductForm from '@/components/admin/OverBladeProductForm'
import AssistBladeProductForm from '@/components/admin/AssistBladeProductForm'
import RatchetProductForm from '@/components/admin/RatchetProductForm'
import BitProductForm from '@/components/admin/BitProductForm'
import XOverProductForm from '@/components/admin/XOverProductForm'
import OtherProductForm from '@/components/admin/OtherProductForm'
import CreditsProductForm from '@/components/admin/CreditsProductForm'
import SponsorProductForm from '@/components/admin/SponsorProductForm'
import { isAdmin as adminFlag, clearAdmin } from '@/lib/admin'
import { sortXOverProducts } from '@/lib/utils'
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
  const [isAdmin, setIsAdmin] = useState(false)
  const [showBladeForm, setShowBladeForm] = useState(false)
  const [showOverBladeForm, setShowOverBladeForm] = useState(false)
  const [showAssistBladeForm, setShowAssistBladeForm] = useState(false)
  const [showRatchetForm, setShowRatchetForm] = useState(false)
  const [showBitForm, setShowBitForm] = useState(false)
  const [showXOverForm, setShowXOverForm] = useState(false)
  const [showOtherForm, setShowOtherForm] = useState(false)
  const [showCreditsForm, setShowCreditsForm] = useState(false)
  const [showSponsorForm, setShowSponsorForm] = useState(false)
  const [showEditor, setShowEditor] = useState(false)
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [draggedProductId, setDraggedProductId] = useState<string | null>(null)
  const [isSavingOrder, setIsSavingOrder] = useState(false)
  const [orderStatus, setOrderStatus] = useState('')

  useEffect(() => {
    setIsAdmin(adminFlag())
  }, [])

  useEffect(() => {
    let sortedProducts = [...products]

    if (slug === 'x-over') {
      sortXOverProducts(sortedProducts)
    } else if (slug === 'ratchet') {
      const isHybridRatchet = (product: Product) => {
        const productTypes = Array.isArray(product.type) ? product.type : [product.type]
        if (productTypes.some(type => typeof type === 'string' && type.toLowerCase().includes('hybrid'))) {
          return true
        }
        const specsType = product.specs?.['Type']
        if (typeof specsType === 'string' && specsType.toLowerCase().includes('hybrid')) {
          return true
        }
        const imgPath = product.image || ''
        return typeof imgPath === 'string' && imgPath.includes('/Hybird Part/')
      }

      // Custom sorting for Ratchet:
      // - Non-hybrid ratchets first
      // - Hybrid items last, sorted by created_at ascending
      // - Among non-hybrid ratchets, sort by number, then High, then created_at
      sortedProducts.sort((a, b) => {
        if (a.display_order != null || b.display_order != null) {
          return (a.display_order ?? Number.MAX_SAFE_INTEGER) - (b.display_order ?? Number.MAX_SAFE_INTEGER)
        }

        const aIsHybrid = isHybridRatchet(a)
        const bIsHybrid = isHybridRatchet(b)

        if (aIsHybrid !== bIsHybrid) {
          return aIsHybrid ? 1 : -1
        }

        if (aIsHybrid && bIsHybrid) {
          return new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime()
        }

        const aName = a.name || ''
        const bName = b.name || ''
        const aMatch = aName.match(/^(\d+)/)
        const bMatch = bName.match(/^(\d+)/)
        const aNum = aMatch ? parseInt(aMatch[1]) : null
        const bNum = bMatch ? parseInt(bMatch[1]) : null

        if (aNum !== null && bNum !== null) {
          if (aNum !== bNum) return aNum - bNum
        } else if (aNum !== null) {
          return -1
        } else if (bNum !== null) {
          return 1
        }

        const aHigh = parseInt(a.specs?.['High'] as string) || 0
        const bHigh = parseInt(b.specs?.['High'] as string) || 0
        if (aHigh !== bHigh) {
          return aHigh - bHigh
        }

        return new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime()
      })
    }

    setRandomizedProducts(
      sortedProducts.map(product => {
        if ((product as any).randomVariants?.length) {
          const variants = (product as any).randomVariants;
          const chosen = variants[Math.floor(Math.random() * variants.length)];
          return { ...product, ...chosen };
        }
        return product;
      })
    )
  }, [products, slug])

  let filteredProducts = randomizedProducts;
  
  // ถ้ามีการเลือก ให้กรองข้อมูล
  if (selectedTypes.length > 0 && ['blade', 'over-blade', 'assist-blade', 'ratchet', 'bit', 'x-over', 'other'].includes(slug)) {
    // แยกการเลือกตามหมวดหมู่
    const selectedProductLines = selectedTypes.filter(t => ['BX', 'UX', 'CX'].includes(t));
    const selectedSpins = selectedTypes.filter(t => ['Right', 'Left'].includes(t));
    const selectedTypeCategories = selectedTypes.filter(t => ['attack', 'balance', 'stamina', 'defense', 'rare'].includes(t));
    const selectedHybrid = selectedTypes.includes('hybrid');
    const selectedXpanded = selectedTypes.includes('xpanded');
    const selectedXoverCategories = selectedTypes.filter(t => ['bakuten', 'metalfight', 'burst', 'collab'].includes(t));

    filteredProducts = randomizedProducts.filter((product) => {
      // ตรวจสอบ Product Line (ถ้ามีการเลือก)
      const productLineSpec = (product.specs?.['Product Line'] || '').toString();
      if (selectedProductLines.length > 0) {
        const matchesProductLine = selectedProductLines.some(pl => productLineSpec.toLowerCase().includes(pl.toLowerCase()));
        if (!matchesProductLine) return false;
      }
      
      // ตรวจสอบ X-Over Category (Bakuten / Metal Fight / Burst / Collab)
      if (selectedXoverCategories.length > 0) {
        const originalGeneration = (product.specs?.['Original Generation'] || '').toString().toLowerCase();
        const collabValue = (product.specs?.['Collab'] || '').toString().toLowerCase();
        const matchesXoverCategory = selectedXoverCategories.some((category) => {
          if (category === 'bakuten') return originalGeneration.includes('bakuten');
          if (category === 'metalfight') return originalGeneration.includes('metal fight');
          if (category === 'burst') return originalGeneration.includes('beyblade burst');
          if (category === 'collab') return collabValue.length > 0;
          return false;
        });
        if (!matchesXoverCategory) return false;
      }

      // ถ้าเลือก Xpanded ให้กรองเฉพาะที่มีคำว่า "Xpanded" ใน Product Line
      if (selectedXpanded) {
        if (!productLineSpec.toLowerCase().includes('xpanded')) return false;
      }

      // ตรวจสอบ Type (ถ้ามีการเลือก)
      if (selectedTypeCategories.length > 0) {
        // สำหรับ assist-blade และ over-blade ให้ดูจาก specs.Type แทน
        if (slug === 'assist-blade' || slug === 'over-blade') {
          const specsType = product.specs?.['Type'];
          const matchesType = specsType && selectedTypeCategories.some(t => specsType.toLowerCase().includes(t));
          if (!matchesType) return false;
        } else {
          const productTypes = Array.isArray(product.type) ? product.type : [product.type];
          const matchesType = selectedTypeCategories.some(t => productTypes.includes(t));
          if (!matchesType) return false;
        }
      }

      // ตรวจสอบ Spin (ถ้ามีการเลือก) - สำหรับ blade, assist-blade และ over-blade
      if ((slug === 'blade' || slug === 'assist-blade' || slug === 'over-blade') && selectedSpins.length > 0) {
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

  const openAddBladeForm = () => {
    setEditProduct(null)
    setShowBladeForm(true)
  }

  const openAddOverBladeForm = () => {
    setEditProduct(null)
    setShowOverBladeForm(true)
  }

  const openAddAssistBladeForm = () => {
    setEditProduct(null)
    setShowAssistBladeForm(true)
  }

  const openAddRatchetForm = () => {
    setEditProduct(null)
    setShowRatchetForm(true)
  }

  const openAddBitForm = () => {
    setEditProduct(null)
    setShowBitForm(true)
  }

  const openAddXOverForm = () => {
    setEditProduct(null)
    setShowXOverForm(true)
  }

  const openAddOtherForm = () => {
    setEditProduct(null)
    setShowOtherForm(true)
  }

  const openAddCreditsForm = () => {
    setEditProduct(null)
    setShowCreditsForm(true)
  }

  const openAddSponsorForm = () => {
    setEditProduct(null)
    setShowSponsorForm(true)
  }

  const openEditEditor = (product: Product) => {
    if (slug === 'blade') {
      setEditProduct(product)
      setShowBladeForm(true)
    } else if (slug === 'over-blade') {
      setEditProduct(product)
      setShowOverBladeForm(true)
    } else if (slug === 'assist-blade') {
      setEditProduct(product)
      setShowAssistBladeForm(true)
    } else if (slug === 'ratchet') {
      setEditProduct(product)
      setShowRatchetForm(true)
    } else if (slug === 'bit') {
      setEditProduct(product)
      setShowBitForm(true)
    } else if (slug === 'x-over') {
      setEditProduct(product)
      setShowXOverForm(true)
    } else if (slug === 'other') {
      setEditProduct(product)
      setShowOtherForm(true)
    } else if (slug === 'credits') {
      setEditProduct(product)
      if (Array.isArray(product.type) && product.type.includes('sponsor')) setShowSponsorForm(true)
      else setShowCreditsForm(true)
    } else {
      setEditProduct(product)
      setShowEditor(true)
    }
  }

  const handleEditorClose = () => {
    setShowEditor(false)
    setEditProduct(null)
  }

  const handleBladeFormClose = () => {
    setShowBladeForm(false)
  }

  const handleOverBladeFormClose = () => {
    setShowOverBladeForm(false)
  }

  const handleAssistBladeFormClose = () => {
    setShowAssistBladeForm(false)
  }

  const handleRatchetFormClose = () => {
    setShowRatchetForm(false)
  }

  const handleBitFormClose = () => {
    setShowBitForm(false)
  }

  const handleXOverFormClose = () => {
    setShowXOverForm(false)
  }

  const handleOtherFormClose = () => {
    setShowOtherForm(false)
  }

  const handleCreditsFormClose = () => {
    setShowCreditsForm(false)
  }

  const handleSponsorFormClose = () => {
    setShowSponsorForm(false)
  }

  const handleDeleteCard = async (product: Product) => {
    if (!isAdmin || !confirm(`ยืนยันการลบ ${product.name}?`)) return
    const response = await fetch('/api/admin/products', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: product.id }),
    })
    const data = await response.json()
    if (!response.ok || !data.success) {
      setOrderStatus(data.message || 'ลบข้อมูลไม่สำเร็จ')
      return
    }
    setRandomizedProducts(currentProducts => currentProducts.filter(item => item.id !== product.id))
    setOrderStatus('ลบข้อมูลแล้ว')
  }

  const handleSaved = () => {
    window.location.reload()
  }

  const handleDrop = (targetId: string) => {
    if (!draggedProductId || draggedProductId === targetId || selectedTypes.length > 0) return

    const nextProducts = [...randomizedProducts]
    const draggedIndex = nextProducts.findIndex(product => product.id === draggedProductId)
    const targetIndex = nextProducts.findIndex(product => product.id === targetId)
    if (draggedIndex < 0 || targetIndex < 0) return

    const [draggedProduct] = nextProducts.splice(draggedIndex, 1)
    nextProducts.splice(targetIndex, 0, draggedProduct)
    setRandomizedProducts(nextProducts)
    setDraggedProductId(null)
    setOrderStatus('ยังไม่ได้บันทึกลำดับ')
  }

  const saveOrder = async () => {
    if (!isAdmin || selectedTypes.length > 0 || randomizedProducts.length === 0) return

    setIsSavingOrder(true)
    setOrderStatus('กำลังบันทึกลำดับ...')
    try {
      const response = await fetch('/api/admin/products/reorder', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: randomizedProducts.map((product, index) => ({
            id: product.id,
            display_order: index,
          })),
        }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'บันทึกลำดับไม่สำเร็จ')
      setOrderStatus('บันทึกลำดับแล้ว')
    } catch (error) {
      setOrderStatus(error instanceof Error ? error.message : 'บันทึกลำดับไม่สำเร็จ')
    } finally {
      setIsSavingOrder(false)
      setDraggedProductId(null)
    }
  }

  return (
    <>
      {['blade', 'over-blade', 'assist-blade', 'ratchet', 'bit', 'x-over', 'other', 'credits'].includes(slug) && (
        <div className="mb-8 flex items-center justify-between">
          {slug !== 'credits' && <Filter onChange={setSelectedTypes} slug={slug} />}
          {isAdmin && selectedTypes.length === 0 && (
            <div className="ml-auto flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">ลากการ์ดเพื่อเรียงลำดับ</span>
              <button
                onClick={saveOrder}
                disabled={isSavingOrder || !orderStatus.includes('ยังไม่ได้')}
                className="rounded bg-cyan-500 px-3 py-2 font-semibold text-white shadow hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSavingOrder ? 'กำลังบันทึก...' : 'บันทึกลำดับ'}
              </button>
            </div>
          )}
          {isAdmin && slug === 'blade' && (
            <button
              onClick={openAddBladeForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม Blade ใหม่
            </button>
          )}
          {isAdmin && slug === 'over-blade' && (
            <button
              onClick={openAddOverBladeForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม Over Blade ใหม่
            </button>
          )}
          {isAdmin && slug === 'assist-blade' && (
            <button
              onClick={openAddAssistBladeForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม Assist Blade ใหม่
            </button>
          )}
          {isAdmin && slug === 'ratchet' && (
            <button
              onClick={openAddRatchetForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม Ratchet ใหม่
            </button>
          )}
          {isAdmin && slug === 'bit' && (
            <button
              onClick={openAddBitForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม Bit ใหม่
            </button>
          )}
          {isAdmin && slug === 'x-over' && (
            <button
              onClick={openAddXOverForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม X-Over ใหม่
            </button>
          )}
          {isAdmin && slug === 'other' && (
            <button
              onClick={openAddOtherForm}
              className="ml-4 px-3 py-2 bg-emerald-500 text-white rounded shadow"
            >
              + เพิ่ม Other ใหม่
            </button>
          )}
          {isAdmin && slug === 'credits' && (
            <button
              onClick={openAddCreditsForm}
              className="ml-auto px-3 py-2 rounded bg-cyan-500 text-white shadow hover:bg-cyan-400"
            >
              + เพิ่มเครดิตบุคคล
            </button>
          )}
          {isAdmin && slug === 'credits' && (
            <button onClick={openAddSponsorForm} className="ml-3 rounded bg-cyan-700 px-3 py-2 text-white shadow hover:bg-cyan-600">
              + เพิ่ม Sponsor / ร้านค้า
            </button>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isAdmin && slug === 'blade' && (
          <div className="rounded-lg border border-dashed border-green-400 p-4 flex items-center justify-center cursor-pointer hover:bg-green-600/10" onClick={openAddBladeForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">+</div>
              <div className="text-sm text-white">เพิ่ม Blade ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'over-blade' && (
          <div className="rounded-lg border border-dashed border-green-400 p-4 flex items-center justify-center cursor-pointer hover:bg-green-600/10" onClick={openAddOverBladeForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">+</div>
              <div className="text-sm text-white">เพิ่ม Over Blade ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'assist-blade' && (
          <div className="rounded-lg border border-dashed border-green-400 p-4 flex items-center justify-center cursor-pointer hover:bg-green-600/10" onClick={openAddAssistBladeForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">+</div>
              <div className="text-sm text-white">เพิ่ม Assist Blade ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'ratchet' && (
          <div className="rounded-lg border border-dashed border-green-400 p-4 flex items-center justify-center cursor-pointer hover:bg-green-600/10" onClick={openAddRatchetForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">+</div>
              <div className="text-sm text-white">เพิ่ม Ratchet ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'bit' && (
          <div className="rounded-lg border border-dashed border-blue-400 p-4 flex items-center justify-center cursor-pointer hover:bg-blue-600/10" onClick={openAddBitForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">+</div>
              <div className="text-sm text-white">เพิ่ม Bit ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'x-over' && (
          <div className="rounded-lg border border-dashed border-cyan-400 p-4 flex items-center justify-center cursor-pointer hover:bg-cyan-600/10" onClick={openAddXOverForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">+</div>
              <div className="text-sm text-white">เพิ่ม X-Over ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'other' && (
          <div className="rounded-lg border border-dashed border-yellow-400 p-4 flex items-center justify-center cursor-pointer hover:bg-yellow-600/10" onClick={openAddOtherForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">+</div>
              <div className="text-sm text-white">เพิ่ม Other ใหม่</div>
            </div>
          </div>
        )}
        {isAdmin && slug === 'credits' && (
          <div className="rounded-lg border border-dashed border-cyan-400 p-4 flex items-center justify-center cursor-pointer hover:bg-cyan-600/10" onClick={openAddCreditsForm}>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400">+</div>
              <div className="text-sm text-white">เพิ่ม Credits / Sponsor</div>
            </div>
          </div>
        )}
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`relative ${isAdmin && selectedTypes.length === 0 ? 'cursor-grab active:cursor-grabbing' : ''}`}
            draggable={isAdmin && selectedTypes.length === 0}
            onDragStart={() => setDraggedProductId(product.id)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(product.id)}
          >
            {isAdmin && (
              <div className="absolute right-2 top-2 z-10 flex gap-1">
                <button onClick={() => openEditEditor(product)} className="rounded-full bg-yellow-400 p-1 text-black shadow hover:bg-yellow-300" title="แก้ไข">✎</button>
                <button
                  onClick={(event) => {
                    event.stopPropagation()
                    handleDeleteCard(product)
                  }}
                  onMouseDown={(event) => event.stopPropagation()}
                  draggable={false}
                  className="rounded-full bg-red-500 p-1 text-white shadow hover:bg-red-400"
                  title="ลบ"
                >×</button>
              </div>
            )}
            <ProductCard
              id={product.id}
              name={product.name}
              image={product.image}
              category={product.category}
              price={product.price}
              type={Array.isArray(product.type) ? product.type : [product.type]}
              isV2={slug === 'blade' && String(product.specs?.V2).toLowerCase() === 'true'}
            />
          </div>
        ))}
      </div>
      {showBladeForm && (
        <BladeProductForm
          existing={editProduct}
          onClose={handleBladeFormClose}
          onSaved={handleSaved}
        />
      )}
      {showOverBladeForm && (
        <OverBladeProductForm
          existing={editProduct}
          onClose={handleOverBladeFormClose}
          onSaved={handleSaved}
        />
      )}
      {showAssistBladeForm && (
        <AssistBladeProductForm
          existing={editProduct}
          onClose={handleAssistBladeFormClose}
          onSaved={handleSaved}
        />
      )}
      {showRatchetForm && (
        <RatchetProductForm
          existing={editProduct}
          onClose={handleRatchetFormClose}
          onSaved={handleSaved}
        />
      )}
      {showBitForm && (
        <BitProductForm
          existing={editProduct}
          onClose={handleBitFormClose}
          onSaved={handleSaved}
        />
      )}
      {showXOverForm && (
        <XOverProductForm
          existing={editProduct}
          onClose={handleXOverFormClose}
          onSaved={handleSaved}
        />
      )}
      {showOtherForm && (
        <OtherProductForm
          existing={editProduct}
          onClose={handleOtherFormClose}
          onSaved={handleSaved}
        />
      )}
      {showCreditsForm && (
        <CreditsProductForm
          existing={editProduct}
          onClose={handleCreditsFormClose}
          onSaved={handleSaved}
        />
      )}
      {showSponsorForm && (
        <SponsorProductForm
          existing={editProduct}
          onClose={handleSponsorFormClose}
          onSaved={handleSaved}
        />
      )}
      {showEditor && (
        <ProductEditor
          category={slug}
          existing={editProduct}
          onClose={handleEditorClose}
          onSaved={handleSaved}
        />
      )}
      {isAdmin && slug === 'blade' && (
        <button
          onClick={openAddBladeForm}
          className="fixed bottom-4 right-4 z-50 bg-emerald-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-emerald-600"
          title="เพิ่ม Blade ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'over-blade' && (
        <button
          onClick={openAddOverBladeForm}
          className="fixed bottom-4 right-4 z-50 bg-emerald-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-emerald-600"
          title="เพิ่ม Over Blade ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'assist-blade' && (
        <button
          onClick={openAddAssistBladeForm}
          className="fixed bottom-4 right-4 z-50 bg-emerald-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-emerald-600"
          title="เพิ่ม Assist Blade ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'ratchet' && (
        <button
          onClick={openAddRatchetForm}
          className="fixed bottom-4 right-4 z-50 bg-emerald-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-emerald-600"
          title="เพิ่ม Ratchet ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'bit' && (
        <button
          onClick={openAddBitForm}
          className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-600"
          title="เพิ่ม Bit ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'x-over' && (
        <button
          onClick={openAddXOverForm}
          className="fixed bottom-4 right-4 z-50 bg-cyan-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-cyan-600"
          title="เพิ่ม X-Over ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'other' && (
        <button
          onClick={openAddOtherForm}
          className="fixed bottom-4 right-4 z-50 bg-yellow-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-yellow-600"
          title="เพิ่ม Other ใหม่"
        >
          +
        </button>
      )}
      {isAdmin && slug === 'credits' && (
        <button
          onClick={openAddCreditsForm}
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-2xl text-white shadow-lg hover:bg-cyan-400"
          title="เพิ่ม Credits / Sponsor"
        >
          +
        </button>
      )}
    </>
  )
}
