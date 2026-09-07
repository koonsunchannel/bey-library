"use client"

import { useState, useEffect } from 'react'
import type { Product } from '@/lib/types'

type OverBladeVariant = {
  id: string
  name: string
  image: string
}

type OverBladeSpecs = {
  Type?: string
  Spin?: string
  Weight?: string
}

type OverBladeProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

export default function OverBladeProductForm({ existing, onClose, onSaved }: OverBladeProductFormProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    type: '',
    isRare: false,
  })

  const [images, setImages] = useState<File[]>([])
  const [existingImageUrl, setExistingImageUrl] = useState('')
  const [specs, setSpecs] = useState<OverBladeSpecs>({})
  const [variants, setVariants] = useState<OverBladeVariant[]>([])
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
        type: (existing.type?.[0] || '').toLowerCase(),
        isRare: existing.type?.includes('rare') ? true : false,
      })
      setExistingImageUrl(existing.image || '')
      setSpecs(existing.specs as OverBladeSpecs || {})
      setVariants(
        existing.bey?.map(v => ({
          id: v.id,
          name: v.name,
          image: v.image || '',
        })) || []
      )
    }
  }, [existing])

  const handleImageUpload = async (files: File[], category: string = 'over-blade'): Promise<string[]> => {
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

  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) {
      setImages(Array.from(files).slice(0, 5))
    }
  }

  const addVariant = () => {
    const id = `variant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    setVariants([...variants, { id, name: '', image: '' }])
  }

  const updateVariant = (index: number, field: string, value: string) => {
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
      const typeArray = [formData.type]
      if (formData.isRare) typeArray.push('rare')

      // Prepare specs
      const finalSpecs: OverBladeSpecs = {
        ...specs,
        Type: formData.type,
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
            category: 'over-blade',
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
          category: 'over-blade',
        })

        const createRes = await fetch('/api/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'over-blade',
            type: typeArray,
            price: formData.price,
            specs: finalSpecs,
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

        console.log('Product created:', createData.product?.id)

        // Create variants
        if (variants.length > 0) {
          const variantsToCreate = variants
            .filter(v => v.name.trim() || v.image.trim())
            .map((v) => ({
              id: v.id,
              name: v.name,
              image: v.image || null,
            }))

          console.log('Variants to create:', variantsToCreate)

          if (variantsToCreate.length > 0) {
            const variantRes = await fetch('/api/admin/variants', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ productId: formData.id, variants: variantsToCreate }),
            })

            if (!variantRes.ok) {
              const variantErr = await variantRes.text()
              console.error('Variant creation error:', variantRes.status, variantErr)
              setStatus('ข้อผิดพลาดในการบันทึก Variants')
              setLoading(false)
              return
            } else {
              const variantData = await variantRes.json()
              console.log('Variants created:', variantData.variants?.length || 0)
            }
          }
        }

        setStatus('บันทึกสำเร็จ!')
      }

      setTimeout(() => {
        onSaved()
        onClose()
      }, 1000)
    } catch (error) {
      console.error('Error:', error)
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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center overflow-auto">
      <div className="bg-slate-900 rounded-lg p-6 max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {mode === 'edit' ? 'แก้ไข Over Blade' : 'เพิ่ม Over Blade ใหม่'}
          </h2>
          {mode === 'edit' && (
            <button
              onClick={handleDelete}
              disabled={loading}
              className="px-3 py-2 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:bg-red-400"
            >
              ลบสินค้า
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Details */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-4">รายละเอียดหลัก</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">ID</label>
                <input
                  type="text"
                  value={formData.id}
                  onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  disabled={mode === 'edit'}
                  className="w-full px-3 py-2 bg-slate-800 text-white rounded disabled:bg-slate-700"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">ชื่อ</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 text-white rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">รูปภาพ (สูงสุด 5 รูป)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  className="w-full px-3 py-2 bg-slate-800 text-white rounded"
                />
                <p className="text-xs text-gray-400 mt-1">
                  {images.length > 1 ? '✓ จะถูกตั้งเป็น RandomVariant' : ''}
                </p>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">ประเภท</label>
                <div className="flex gap-4 items-center">
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="flex-1 px-3 py-2 bg-slate-800 text-white rounded"
                    required
                  >
                    <option value="">เลือกประเภท</option>
                    <option value="attack">Attack</option>
                    <option value="balance">Balance</option>
                    <option value="stamina">Stamina</option>
                    <option value="defense">Defense</option>
                  </select>

                  <label className="flex items-center gap-2 text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isRare}
                      onChange={(e) => setFormData({ ...formData, isRare: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">Rare</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">รหัสสินค้า</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 text-white rounded"
                />
              </div>
            </div>
          </section>

          {/* Specs Section */}
          <section>
            <h3 className="text-lg font-semibold text-white mb-4">ข้อมูล Specs</h3>

            <div className="grid grid-cols-2 gap-4">
              {/* Type */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Type</label>
                <select
                  value={specs.Type || ''}
                  onChange={(e) => setSpecs({ ...specs, Type: e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                >
                  <option value="">เลือก</option>
                  <option value="attack">attack</option>
                  <option value="balance">balance</option>
                  <option value="stamina">stamina</option>
                  <option value="defense">defense</option>
                </select>
              </div>

              {/* Spin */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Spin</label>
                <select
                  value={specs.Spin || ''}
                  onChange={(e) => setSpecs({ ...specs, Spin: e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                >
                  <option value="">เลือก</option>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                  <option value="Dual">Dual</option>
                </select>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Weight</label>
                <input
                  type="text"
                  value={specs.Weight || ''}
                  onChange={(e) => setSpecs({ ...specs, Weight: e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>
            </div>
          </section>

          {/* Variants Section */}
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
                <div key={index} className="bg-slate-800 p-4 rounded space-y-3">
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
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
                      className="w-full px-2 py-1 text-xs bg-slate-700 text-white rounded"
                      placeholder="เช่น Over Blade A, Over Blade B"
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
                      className="w-full px-2 py-1 text-xs bg-slate-700 text-white rounded disabled:bg-slate-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Status & Actions */}
          <div className="space-y-3">
            {status && (
              <div className={`px-4 py-2 rounded text-sm ${status.includes('ข้อผิดพลาด') || status.includes('ลบ') ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'}`}>
                {status}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-400"
              >
                {loading ? 'กำลังบันทึก...' : mode === 'edit' ? 'แก้ไข' : 'สร้าง'}
              </button>
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
