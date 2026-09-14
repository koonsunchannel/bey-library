"use client"

import { useState, useEffect } from 'react'
import type { Product } from '@/lib/types'

type BladeVariant = {
  id: string
  name: string
  image: string
}

type BladeSpecs = {
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
  'Lock Chip Type'?: string
  'Lock Chip Weight'?: string
  'Over Blade'?: string
  'Assist Blade'?: string
  'Product Line'?: string
  V2?: boolean
  'V2 Weight'?: string
  Gimmick?: string
  'Gimmick Type'?: string
  'Product Xpanded'?: string
}

type BladeProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

export default function BladeProductForm({ existing, onClose, onSaved }: BladeProductFormProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    type: '',
    isRare: false,
    isV2: false,
  })

  const [images, setImages] = useState<File[]>([])
  const [existingImageUrl, setExistingImageUrl] = useState('')
  const [specs, setSpecs] = useState<BladeSpecs>({})
  const [variants, setVariants] = useState<BladeVariant[]>([])
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
        isV2: String(existing.specs?.V2).toLowerCase() === 'true',
      })
      setExistingImageUrl(existing.image || '')
      setSpecs(existing.specs as BladeSpecs || {})
      setVariants(
        existing.bey?.map(v => ({
          id: v.id,
          name: v.name,
          image: v.image || '',
        })) || []
      )
    }
  }, [existing])

  const handleImageUpload = async (files: File[], category: string = 'blade'): Promise<string[]> => {
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

  const handleSpecImageUpload = async (key: string, file: File) => {
    const urls = await handleImageUpload([file])
    if (urls.length > 0) {
      setSpecs({ ...specs, [key]: urls[0] })
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
      const finalSpecs: BladeSpecs = {
        ...specs,
        Type: formData.type,
        V2: formData.isV2,
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
            category: 'blade',
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
          .filter(v => v.name.trim() || v.image.trim()) // Only save non-empty variants
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
          category: 'blade',
        })

        const createRes = await fetch('/api/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'blade',
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

        // Create variants
        if (variants.length > 0) {
          const variantsToCreate = variants
            .filter(v => v.name.trim() || v.image.trim()) // Only save non-empty variants
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
            {mode === 'edit' ? 'แก้ไข Blade' : 'เพิ่ม Blade ใหม่'}
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
                  <label className="flex items-center gap-2 text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isV2}
                      onChange={(e) => setFormData({ ...formData, isV2: e.target.checked })}
                      className="rounded"
                    />
                    <span className="text-sm">V2</span>
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
              {/* Lock Chip */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Lock Chip Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.currentTarget.files?.[0] &&
                    handleSpecImageUpload('Lock Chip Image', e.currentTarget.files[0])
                  }
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Lock Chip Label</label>
                <input
                  type="text"
                  value={specs['Lock Chip Label'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Lock Chip Label': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              {/* Main Blade */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Main Blade Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.currentTarget.files?.[0] &&
                    handleSpecImageUpload('Main Blade Image', e.currentTarget.files[0])
                  }
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Main Blade Label</label>
                <input
                  type="text"
                  value={specs['Main Blade Label'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Main Blade Label': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Main Blade Image 2</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.currentTarget.files?.[0] &&
                    handleSpecImageUpload('Main Blade Image2', e.currentTarget.files[0])
                  }
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Main Blade Label 2</label>
                <input
                  type="text"
                  value={specs['Main Blade Label2'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Main Blade Label2': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Main Blade Image 3</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.currentTarget.files?.[0] &&
                    handleSpecImageUpload('Main Blade Image3', e.currentTarget.files[0])
                  }
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Main Blade Label 3</label>
                <input
                  type="text"
                  value={specs['Main Blade Label3'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Main Blade Label3': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

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

              <div>
                <label className="block text-xs text-gray-300 mb-1">V2 Weight</label>
                <input
                  type="text"
                  value={specs['V2 Weight'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'V2 Weight': e.target.value })}
                  placeholder="เช่น 38.5 g"
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              {/* Stock Combo */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Stock Combo</label>
                <input
                  type="text"
                  value={specs['Stock Combo'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Stock Combo': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              {/* Lock Chip Type */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Lock Chip Type</label>
                <select
                  value={specs['Lock Chip Type'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Lock Chip Type': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                >
                  <option value="">เลือก</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Light Metal">Light Metal</option>
                  <option value="Heavy Metal">Heavy Metal</option>
                </select>
              </div>

              {/* Lock Chip Weight */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Lock Chip Weight</label>
                <input
                  type="text"
                  value={specs['Lock Chip Weight'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Lock Chip Weight': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              {/* Over Blade */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Over Blade</label>
                <input
                  type="text"
                  value={specs['Over Blade'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Over Blade': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              {/* Assist Blade */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Assist Blade</label>
                <input
                  type="text"
                  value={specs['Assist Blade'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Assist Blade': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                />
              </div>

              {/* Product Line */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Product Line</label>
                <select
                  value={specs['Product Line'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Product Line': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                >
                  <option value="">เลือก</option>
                  <option value="BX">BX</option>
                  <option value="UX">UX</option>
                  <option value="CX">CX</option>
                  <option value="BX Xpanded">BX Xpanded</option>
                  <option value="UX Xpanded">UX Xpanded</option>
                  <option value="CX Xpanded">CX Xpanded</option>
                </select>
              </div>

              {/* Gimmick (Combobox - Select + Custom Text) */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Gimmick</label>
                <div className="flex gap-1">
                  <select
                    value={specs.Gimmick || ''}
                    onChange={(e) => setSpecs({ ...specs, Gimmick: e.target.value })}
                    className="flex-1 px-2 py-1 text-xs bg-slate-800 text-white rounded"
                  >
                    <option value="">เลือกหรือพิมพ์เอง</option>
                    <option value="Only use simple lock ratchet">Only use simple lock ratchet</option>
                    <option value="Split Blade">Split Blade</option>
                    <option value="Mode Change">Mode Change</option>
                  </select>
                  <input
                    type="text"
                    placeholder="หรือพิมพ์เอง"
                    value={specs.Gimmick || ''}
                    onChange={(e) => setSpecs({ ...specs, Gimmick: e.target.value })}
                    className="flex-1 px-2 py-1 text-xs bg-slate-800 text-white rounded"
                  />
                </div>
              </div>

              {/* Gimmick Type */}
              <div>
                <label className="block text-xs text-gray-300 mb-1">Gimmick Type</label>
                <select
                  value={specs['Gimmick Type'] || ''}
                  onChange={(e) => setSpecs({ ...specs, 'Gimmick Type': e.target.value })}
                  className="w-full px-2 py-1 text-xs bg-slate-800 text-white rounded"
                >
                  <option value="">เลือก</option>
                  <option value="Only use simple lock ratchet">Only use simple lock ratchet</option>
                  <option value="Split Blade">Split Blade</option>
                  <option value="Mode Change">Mode Change</option>
                </select>
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
                    <label className="block text-xs text-gray-300 mb-1">ID</label>
                    <input
                      type="text"
                      value={variant.id}
                      onChange={(e) => updateVariant(index, 'id', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-slate-700 text-white rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">ชื่อ</label>
                    <input
                      type="text"
                      value={variant.name}
                      onChange={(e) => updateVariant(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-slate-700 text-white rounded"
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
                      className="w-full px-2 py-1 text-xs bg-slate-700 text-white rounded disabled:opacity-50"
                    />
                    {uploadingVariantIndex === index && (
                      <p className="text-xs text-yellow-400 mt-1">กำลังอัปโหลด...</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Status */}
          {status && (
            <div className="text-center text-sm text-yellow-300">
              {status}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'กำลังบันทึก...' : 'บันทึก'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
