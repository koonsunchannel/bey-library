"use client"

import { useState, useEffect } from 'react'
import type { Product } from '@/lib/types'

type XOverVariant = {
  id: string
  name: string
  image: string
}

type XOverSpecs = {
  'Lock Chip Image'?: string
  'Lock Chip Label'?: string
  'Main Blade Image'?: string
  'Main Blade Label'?: string
  'Main Blade Image2'?: string
  'Main Blade Label2'?: string
  'Main Blade Image3'?: string
  'Main Blade Label3'?: string
  Type?: string
  Spin?: string
  Weight?: string
  'Stock Combo'?: string
  'Product Line'?: string
  'Original Generation'?: string
  Collab?: string
  Gimmick?: string
  'Lock Chip Type'?: string
  'Lock Chip Weight'?: string
  'Over Blade'?: string
  'Assist Blade'?: string
}

type XOverProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

export default function XOverProductForm({ existing, onClose, onSaved }: XOverProductFormProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    type: 'attack',
    isRare: false,
    specType: 'Attack',
    originalGeneration: 'Bakuten Shoot Beyblade',
  })

  const [images, setImages] = useState<File[]>([])
  const [existingImageUrl, setExistingImageUrl] = useState('')
  const [existingRandomImageUrls, setExistingRandomImageUrls] = useState<string[]>([])
  const [specs, setSpecs] = useState<XOverSpecs>({})
  const [variants, setVariants] = useState<XOverVariant[]>([])
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadingVariantIndex, setUploadingVariantIndex] = useState<number | null>(null)
  const [mode, setMode] = useState<'create' | 'edit'>('create')

  useEffect(() => {
    if (existing) {
      setMode('edit')
      setFormData({
        id: existing.id,
        name: existing.name || '',
        price: existing.price || '',
        type: (Array.isArray(existing.type) 
          ? existing.type.find(t => ['attack', 'balance', 'stamina', 'defense'].includes(t)) 
          : typeof existing.type === 'string' ? existing.type : 'attack') || 'attack',
        isRare: Array.isArray(existing.type) ? existing.type.includes('rare') : existing.type === 'rare',
        specType: (existing.specs?.Type as string) || 'Attack',
        originalGeneration: (existing.specs?.['Original Generation'] as string) || 'Bakuten Shoot Beyblade',
      })
      setExistingImageUrl(existing.image || '')
      setExistingRandomImageUrls(existing.randomVariants?.map(variant => variant.image).filter(Boolean) || [])
      setSpecs(existing.specs as XOverSpecs || {})
      setVariants(
        existing.bey?.map(v => ({
          id: v.id,
          name: v.name,
          image: v.image || '',
        })) || []
      )
    }
  }, [existing])

  const handleImageUpload = async (files: File[], category: string = 'x-over'): Promise<string[]> => {
    if (!files || files.length === 0) return []

    const formDataPayload = new FormData()
    files.forEach((file) => formDataPayload.append('files', file))
    formDataPayload.append('category', category)

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formDataPayload,
    })

    if (!response.ok) {
      const text = await response.text()
      console.error('Upload endpoint error:', response.status, text)
      throw new Error(`Upload failed: ${response.status}`)
    }

    const result = await response.json().catch((err) => {
      console.error('Invalid upload JSON response', err)
      throw new Error('Invalid upload response')
    })

    if (!result.success || !Array.isArray(result.uploaded)) {
      console.error('Upload failed:', result)
      const message = result?.message || 'Upload service error'
      throw new Error(message)
    }

    const urls = result.uploaded.map((item: any) => item.publicUrl).filter((url: any) => typeof url === 'string' && url.length > 0)

    if (urls.length === 0) {
      throw new Error('No public URLs returned from upload')
    }

    return urls
  }

  const addVariant = () => {
    const id = `variant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    setVariants([...variants, { id, name: '', image: '' }])
  }

  const updateVariant = (index: number, field: keyof XOverVariant, value: string) => {
    const updated = [...variants]
    updated[index] = { ...updated[index], [field]: value }
    setVariants(updated)
  }

  const removeVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index))
  }

  const handleVariantImageUpload = async (index: number, file: File) => {
    setUploadingVariantIndex(index)
    try {
      const urls = await handleImageUpload([file])
      if (urls.length > 0) {
        updateVariant(index, 'image', urls[0])
        setStatus(`รูป Variant ${index + 1} อัปโหลดสำเร็จ`)
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus(`ไม่สามารถอัปโหลดรูป Variant ${index + 1}`)
      }
    } catch (error) {
      console.error('Variant image upload error:', error)
      setStatus(`ข้อผิดพลาดในการอัปโหลดรูป Variant ${index + 1}`)
    } finally {
      setUploadingVariantIndex(null)
    }
  }

  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImages(Array.from(e.currentTarget.files || []).slice(0, 5))
  }

  const handleSpecImageUpload = async (key: string, file: File) => {
    try {
      const urls = await handleImageUpload([file])
      if (urls.length > 0) {
        setSpecs(currentSpecs => ({ ...currentSpecs, [key]: urls[0] }))
      }
    } catch (error) {
      console.error('Spec image upload error:', error)
      setStatus('เกิดข้อผิดพลาดในการอัปโหลดรูป Specs')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('กำลังบันทึก...')

    try {
      const invalidVariants = variants.filter(v => v.name.trim() && !v.image.trim())
      if (invalidVariants.length > 0) {
        setStatus(`Variant ต้องมีรูปภาพ (${invalidVariants.length} รายการ)`)
        setLoading(false)
        return
      }

      let mainImageUrl = mode === 'edit' ? existingImageUrl : ''
      let imageUrls = mode === 'edit' ? existingRandomImageUrls : []
      if (images.length > 0) {
        const uploadedUrls = await handleImageUpload(images)
        imageUrls = uploadedUrls.slice(0, 5)
        mainImageUrl = imageUrls[0] || mainImageUrl
      }

      const typeArray = [formData.type]
      if (formData.isRare) typeArray.push('rare')

      const finalSpecs: XOverSpecs = {
        ...specs,
        Type: formData.specType,
        'Original Generation': formData.originalGeneration,
      }
      const randomVariants = imageUrls.length > 1
        ? imageUrls.map(image => ({ name: formData.name, image, type: typeArray }))
        : []

      if (mode === 'edit' && existing) {
        const updateRes = await fetch('/api/admin/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'x-over',
            type: typeArray,
            price: formData.price,
            specs: finalSpecs,
            randomVariants,
          }),
        })

        if (!updateRes.ok) {
          const errText = await updateRes.text()
          console.error('Update product failed:', updateRes.status, errText)
          setStatus('ข้อผิดพลาดในการแก้ไขสินค้า')
          setLoading(false)
          return
        }

        const updateData = await updateRes.json()
        if (!updateData.success) {
          setStatus('ข้อผิดพลาดในการแก้ไขสินค้า: ' + updateData.message)
          setLoading(false)
          return
        }

        const variantsToCreate = variants
          .filter(v => v.name.trim() || v.image.trim())
          .map((v) => ({
            id: v.id,
            name: v.name,
            image: v.image || null,
          }))

        await fetch('/api/admin/variants', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: formData.id }),
        })

        if (variantsToCreate.length > 0) {
          const variantRes = await fetch('/api/admin/variants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: formData.id, variants: variantsToCreate }),
          })

          if (!variantRes.ok) {
            const variantErr = await variantRes.text()
            console.error('Variant update error:', variantRes.status, variantErr)
            setStatus('ข้อผิดพลาดในการบันทึก Variants')
            setLoading(false)
            return
          }
        }

        setStatus('แก้ไขสำเร็จ!')
      } else {
        const createRes = await fetch('/api/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'x-over',
            type: typeArray,
            price: formData.price,
            specs: finalSpecs,
            randomVariants,
          }),
        })

        if (!createRes.ok) {
          const errText = await createRes.text()
          console.error('Create product failed:', createRes.status, errText)
          setStatus('ข้อผิดพลาดในการสร้างสินค้า')
          setLoading(false)
          return
        }

        const createData = await createRes.json()
        if (!createData.success) {
          setStatus('ข้อผิดพลาดในการสร้างสินค้า: ' + createData.message)
          setLoading(false)
          return
        }

        const variantsToCreate = variants
          .filter(v => v.name.trim() || v.image.trim())
          .map((v) => ({
            id: v.id,
            name: v.name,
            image: v.image || null,
          }))

        if (variantsToCreate.length > 0) {
          const variantRes = await fetch('/api/admin/variants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: createData.product.id, variants: variantsToCreate }),
          })

          if (!variantRes.ok) {
            const variantErr = await variantRes.text()
            console.error('Variant creation error:', variantRes.status, variantErr)
            setStatus('สินค้าสร้างสำเร็จ แต่เกิดข้อผิดพลาดในการบันทึก Variants')
            setLoading(false)
            return
          }
        }

        setStatus('สร้างสำเร็จ!')
      }

      setTimeout(() => {
        onSaved()
        onClose()
      }, 1000)
    } catch (error) {
      console.error('Submit error:', error)
      setStatus('เกิดข้อผิดพลาด: ' + (error instanceof Error ? error.message : 'Unknown'))
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!existing) return
    if (!confirm('ยืนยันการลบสินค้านี้?')) return

    setLoading(true)
    setStatus('กำลังลบ...')

    try {
      const deleteRes = await fetch('/api/admin/products', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: existing.id }),
      })

      if (!deleteRes.ok) {
        const errText = await deleteRes.text()
        console.error('Delete product failed:', deleteRes.status, errText)
        setStatus('ข้อผิดพลาดในการลบ')
        setLoading(false)
        return
      }

      const deleteData = await deleteRes.json()
      if (!deleteData.success) {
        setStatus('ข้อผิดพลาดในการลบ: ' + deleteData.message)
        setLoading(false)
        return
      }

      setStatus('ลบสำเร็จ!')
      setTimeout(() => {
        onSaved()
        onClose()
      }, 1000)
    } catch (error) {
      console.error('Delete error:', error)
      setStatus('เกิดข้อผิดพลาดในการลบ')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto my-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">
            {mode === 'edit' ? 'แก้ไข X-Over' : 'เพิ่ม X-Over ใหม่'}
          </h2>
          <div className="flex items-center gap-2">
            {mode === 'edit' && (
              <button
                onClick={handleDelete}
                disabled={loading}
                className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:bg-red-400"
              >
                ลบสินค้า
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">ID</label>
            <input
              type="text"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              disabled={mode === 'edit'}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white disabled:bg-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">ชื่อ X-Over</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">ราคา</label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            >
              <option value="attack">attack</option>
              <option value="balance">balance</option>
              <option value="stamina">stamina</option>
              <option value="defense">defense</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">รูปภาพหน้าปก (สูงสุด 5 รูป)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleMainImageUpload}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
            <p className="mt-1 text-xs text-gray-400">
              {images.length > 1 ? 'รูปที่เลือกจะถูกสุ่มใช้แสดงผลในหน้าเว็บและหน้า Random' : 'เลือกได้สูงสุด 5 รูป รูปแรกจะเป็นหน้าปก'}
            </p>
            {existingRandomImageUrls.length > 0 && images.length === 0 && (
              <div className="mt-2 grid grid-cols-5 gap-2">
                {existingRandomImageUrls.map((image, index) => (
                  <img key={`${image}-${index}`} src={image} alt={`Current ${index + 1}`} className="h-16 w-16 rounded object-cover" />
                ))}
              </div>
            )}
            {existingImageUrl && (
              <div className="mt-2">
                <img src={existingImageUrl} alt="Current" className="w-20 h-20 object-cover rounded" />
              </div>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isRare"
              checked={formData.isRare}
              onChange={(e) => setFormData({ ...formData, isRare: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="isRare" className="text-sm text-white">Rare Item</label>
          </div>

          <hr className="border-gray-600" />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Specs</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Lock Chip Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.currentTarget.files?.[0] && handleSpecImageUpload('Lock Chip Image', e.currentTarget.files[0])}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Lock Chip Label</label>
                <input
                  type="text"
                  value={specs['Lock Chip Label'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Lock Chip Label': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Main Blade Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.currentTarget.files?.[0] && handleSpecImageUpload('Main Blade Image', e.currentTarget.files[0])}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Main Blade Label</label>
                <input
                  type="text"
                  value={specs['Main Blade Label'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Main Blade Label': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Main Blade Image 2</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.currentTarget.files?.[0] && handleSpecImageUpload('Main Blade Image2', e.currentTarget.files[0])}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Main Blade Label 2</label>
                <input
                  type="text"
                  value={specs['Main Blade Label2'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Main Blade Label2': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Main Blade Image 3</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.currentTarget.files?.[0] && handleSpecImageUpload('Main Blade Image3', e.currentTarget.files[0])}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Main Blade Label 3</label>
                <input
                  type="text"
                  value={specs['Main Blade Label3'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Main Blade Label3': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Type</label>
                <select
                  value={formData.specType}
                  onChange={(e) => setFormData({ ...formData, specType: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="Attack">Attack</option>
                  <option value="Balance">Balance</option>
                  <option value="Stamina">Stamina</option>
                  <option value="Defense">Defense</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Spin</label>
                <select
                  value={specs.Spin || ''}
                  onChange={(e) => setSpecs({ ...specs, Spin: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="">เลือก Spin</option>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                  <option value="Dual">Dual</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Weight</label>
                <input
                  type="text"
                  value={specs.Weight || ''}
                  onChange={(e) => setSpecs({ ...specs, Weight: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Stock Combo</label>
                <input
                  type="text"
                  value={specs['Stock Combo'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Stock Combo': e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Product Line</label>
                <select
                  value={specs['Product Line'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Product Line': e.target.value })}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="">เลือก Product Line</option>
                  <option value="BX">BX</option>
                  <option value="UX">UX</option>
                  <option value="CX">CX</option>
                  <option value="BX Xpanded">BX Xpanded</option>
                  <option value="UX Xpanded">UX Xpanded</option>
                  <option value="CX Xpanded">CX Xpanded</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1">Original Generation</label>
                <select
                  value={formData.originalGeneration}
                  onChange={(e) => {
                    setFormData({ ...formData, originalGeneration: e.target.value })
                    setSpecs({ ...specs, 'Original Generation': e.target.value })
                  }}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="Bakuten Shoot Beyblade">Bakuten Shoot Beyblade</option>
                  <option value="Metal Fight Beyblade">Metal Fight Beyblade</option>
                  <option value="Beyblade Burst">Beyblade Burst</option>
                  <option value="Collab">Collab</option>
                </select>
              </div>
            </div>

            {formData.originalGeneration === 'Collab' && (
              <div>
                <label className="block text-sm font-medium text-white mb-1">ชื่อ Collab</label>
                <input
                  type="text"
                  value={specs.Collab || ''}
                  onChange={(e) => setSpecs({ ...specs, Collab: e.target.value })}
                  placeholder="เช่น Star War, Marvel, etc."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-white mb-1">Gimmick</label>
              <input
                type="text"
                value={specs.Gimmick || ''}
                onChange={(e) => setSpecs({ ...specs, Gimmick: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              />
            </div>
          </div>

          <hr className="border-gray-600" />

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Variants</h3>
              <button
                type="button"
                onClick={addVariant}
                className="px-3 py-1 bg-emerald-500 text-white text-sm rounded"
              >
                + เพิ่ม
              </button>
            </div>

            <div className="space-y-4">
              {variants.map((variant, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-300 text-sm">Variant {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="text-red-400 text-sm hover:text-red-300"
                    >
                      ลบ
                    </button>
                  </div>

                  {variant.image && (
                    <div className="flex justify-center">
                      <div className="relative w-20 h-20 rounded border border-gray-600 flex-shrink-0 bg-black flex items-center justify-center">
                        <img
                          src={variant.image}
                          alt="variant"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">ID</label>
                    <input
                      type="text"
                      value={variant.id}
                      onChange={(e) => updateVariant(index, 'id', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-gray-600 text-white rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">ชื่อ</label>
                    <input
                      type="text"
                      value={variant.name}
                      onChange={(e) => updateVariant(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-gray-600 text-white rounded"
                      placeholder="เช่น X-Over A, X-Over B"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">รูปภาพ</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        e.currentTarget.files?.[0] &&
                        handleVariantImageUpload(index, e.currentTarget.files[0])
                      }
                      disabled={uploadingVariantIndex === index}
                      className="w-full px-2 py-1 text-xs bg-gray-600 text-white rounded disabled:bg-gray-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {status && (
            <div className={`p-3 rounded text-sm ${status.includes('ข้อผิดพลาด') ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}>
              {status}
            </div>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? 'กำลังบันทึก...' : (mode === 'edit' ? 'อัปเดต' : 'เพิ่ม')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
