"use client"

import { useState, useEffect } from 'react'
import type { Product } from '@/lib/types'

type RatchetVariant = {
  id: string
  name: string
  image: string
}

type RatchetSpecs = {
  Type?: string
  'Contact Point'?: string
  'High'?: string
  'Weight'?: string
  'Gimmick'?: string
}

type RatchetProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

export default function RatchetProductForm({ existing, onClose, onSaved }: RatchetProductFormProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    ratchetType: 'Normal',
    isRare: false,
  })

  const [images, setImages] = useState<File[]>([])
  const [existingImageUrl, setExistingImageUrl] = useState('')
  const [specs, setSpecs] = useState<RatchetSpecs>({})
  const [variants, setVariants] = useState<RatchetVariant[]>([])
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadingVariantIndex, setUploadingVariantIndex] = useState<number | null>(null)
  const [mode, setMode] = useState<'create' | 'edit'>('create')

  useEffect(() => {
    if (existing) {
      setMode('edit')
      const existingType = Array.isArray(existing.type)
        ? existing.type.find((t) => ['normal','simple','hybrid'].includes(t.toLowerCase()))
        : (typeof existing.type === 'string' ? existing.type : '')
      setFormData({
        id: existing.id,
        name: existing.name || '',
        price: existing.price || '',
        ratchetType: (existing.specs?.Type as string) || existingType || 'Normal',
        isRare: Array.isArray(existing.type)
          ? existing.type.includes('rare')
          : existing.type === 'rare',
      })
      setExistingImageUrl(existing.image || '')
      setSpecs(existing.specs as RatchetSpecs || {})
      setVariants(
        existing.bey?.map(v => ({
          id: v.id,
          name: v.name,
          image: v.image || '',
        })) || []
      )
    }
  }, [existing])

  const handleImageUpload = async (files: File[], category: string = 'ratchet'): Promise<string[]> => {
    if (!files || files.length === 0) return []

    const formData = new FormData()
    files.forEach((file) => formData.append('files', file))
    formData.append('category', category)

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
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

    console.log('File upload URLs:', urls)
    return urls
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('กำลังบันทึก...')

    try {
      // Validate variants: if name is provided, image must be provided too
      const invalidVariants = variants.filter(v => v.name.trim() && !v.image.trim())
      if (invalidVariants.length > 0) {
        setStatus(`Variant ต้องมีรูปภาพ (${invalidVariants.length} รายการ)`)
        setLoading(false)
        return
      }

      // Upload main images (only if new images selected)
      let mainImageUrl = mode === 'edit' ? existingImageUrl : ''
      if (images.length > 0) {
        console.log('Uploading images:', images.length)
        const uploadedUrls = await handleImageUpload(images)
        mainImageUrl = uploadedUrls[0] || mainImageUrl
        console.log('Main image URL:', mainImageUrl)
      }

      // Prepare type array
      const typeArray = ['ratchet']
      if (formData.ratchetType && formData.ratchetType.toLowerCase() !== 'normal') {
        typeArray.push(formData.ratchetType.toLowerCase())
      }
      if (formData.isRare) typeArray.push('rare')

      // Prepare specs
      const finalSpecs: RatchetSpecs = {
        ...specs,
        Type: formData.ratchetType,
      }

      if (mode === 'edit' && existing) {
        // Update existing product via API
        console.log('Updating product:', formData.id)
        const updateRes = await fetch('/api/admin/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'ratchet',
            type: typeArray,
            price: formData.price,
            specs: finalSpecs,
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

        console.log('Product updated:', updateData.product?.id)

        // Replace variants via API
        const variantsToCreate = variants
          .filter(v => v.name.trim() || v.image.trim())
          .map((v) => ({
            id: v.id,
            name: v.name,
            image: v.image || null,
          }))

        console.log('Variants to create:', variantsToCreate)

        // Delete old variants first
        const deleteRes = await fetch('/api/admin/variants', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: formData.id }),
        })

        if (!deleteRes.ok) {
          console.warn('Delete old variants warning:', deleteRes.status)
        }

        // Create new variants
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
          } else {
            const variantData = await variantRes.json()
            console.log('Variants updated:', variantData.variants?.length || 0)
          }
        }

        setStatus('แก้ไขสำเร็จ!')
      } else {
        // Create new product via API
        console.log('Creating product with:', {
          id: formData.id,
          name: formData.name,
          image: mainImageUrl,
          category: 'ratchet',
        })

        const createRes = await fetch('/api/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'ratchet',
            type: typeArray,
            price: formData.price,
            specs: finalSpecs,
          }),
        })

        if (!createRes.ok) {
          const errorData = await createRes.json().catch(() => null)
          console.error('Create product failed:', createRes.status, errorData)
          setStatus(errorData?.message || 'ข้อผิดพลาดในการสร้างสินค้า')
          setLoading(false)
          return
        }

        const createData = await createRes.json()
        if (!createData.success) {
          setStatus('ข้อผิดพลาดในการสร้างสินค้า: ' + createData.message)
          setLoading(false)
          return
        }

        console.log('Product created:', createData.product?.id)

        // Create variants if any
        if (variants.length > 0) {
          const variantsToCreate = variants
            .filter(v => v.name.trim() || v.image.trim())
            .map((v) => ({
              id: v.id,
              name: v.name,
              image: v.image || null,
            }))

          console.log('Creating variants:', variantsToCreate)

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
          } else {
            const variantData = await variantRes.json()
            console.log('Variants created:', variantData.variants?.length || 0)
          }
        }

        setStatus('สร้างสำเร็จ!')
      }

      setTimeout(() => {
        onSaved()
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

  const addVariant = () => {
    setVariants([...variants, { id: crypto.randomUUID(), name: '', image: '' }])
  }

  const updateVariant = (index: number, field: keyof RatchetVariant, value: string) => {
    const updatedVariants = [...variants]
    updatedVariants[index] = { ...updatedVariants[index], [field]: value }
    setVariants(updatedVariants)
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">
            {mode === 'edit' ? 'แก้ไข Ratchet' : 'เพิ่ม Ratchet ใหม่'}
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
            <label className="block text-sm font-medium text-white mb-1">
              ID
            </label>
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
            <label className="block text-sm font-medium text-white mb-1">
              ชื่อ Ratchet
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              ราคา
            </label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Type
            </label>
            <select
              value={formData.ratchetType}
              onChange={(e) => setFormData({ ...formData, ratchetType: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            >
              <option value="Normal">Normal</option>
              <option value="Simple">Simple </option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              รูปภาพหลัก
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImages(Array.from(e.target.files || []))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
            {existingImageUrl && (
              <div className="mt-2">
                <img src={existingImageUrl} alt="Current" className="w-20 h-20 object-cover rounded" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Contact Point
              </label>
              <input
                type="text"
                value={specs['Contact Point'] || ''}
                onChange={(e) => setSpecs({ ...specs, 'Contact Point': e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="เช่น Flat, Wide, Hybrid Part"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                High
              </label>
              <input
                type="text"
                value={specs['High'] || ''}
                onChange={(e) => setSpecs({ ...specs, 'High': e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="เช่น 50, 90"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Weight
              </label>
              <input
                type="text"
                value={specs['Weight'] || ''}
                onChange={(e) => setSpecs({ ...specs, 'Weight': e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="เช่น 4.2g"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Gimmick
              </label>
              <input
                type="text"
                value={specs['Gimmick'] || ''}
                onChange={(e) => setSpecs({ ...specs, 'Gimmick': e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                placeholder="เช่น Bearing"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isRare"
              checked={formData.isRare}
              onChange={(e) => setFormData({ ...formData, isRare: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="isRare" className="text-sm text-white">
              Rare Item
            </label>
          </div>

          {/* Variants Section - Always show like Over Blade */}
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
                <div key={index} className="bg-gray-800 p-4 rounded space-y-3">
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
                    <label className="block text-xs text-gray-300 mb-1">ชื่อ</label>
                    <input
                      type="text"
                      value={variant.name}
                      onChange={(e) => updateVariant(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded"
                      placeholder="เช่น Ratchet A, Ratchet B"
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
                      className="w-full px-2 py-1 text-xs bg-gray-700 text-white rounded disabled:bg-gray-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {status && (
            <div className={`p-3 rounded ${status.includes('ผิดพลาด') ? 'bg-red-600' : 'bg-green-600'} text-white`}>
              {status}
            </div>
          )}

          <div className="flex justify-end space-x-2">
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