"use client"

import { useState, useEffect } from 'react'
import type { Product } from '@/lib/types'

type OtherProduct = {
  id: string
  name: string
  image: string
}

type OtherProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

export default function OtherProductForm({ existing, onClose, onSaved }: OtherProductFormProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
  })

  const [images, setImages] = useState<File[]>([])
  const [existingImageUrl, setExistingImageUrl] = useState('')
  const [features, setFeatures] = useState('')
  const [products, setProducts] = useState<OtherProduct[]>([])
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadingProductIndex, setUploadingProductIndex] = useState<number | null>(null)
  const [mode, setMode] = useState<'create' | 'edit'>('create')

  useEffect(() => {
    if (existing) {
      setMode('edit')
      setFormData({
        id: existing.id,
        name: existing.name || '',
        price: existing.price || '',
      })
      setExistingImageUrl(existing.image || '')
      setFeatures((existing.specs?.['Product Lists'] as string) || '')
      setProducts(
        existing.bey?.map(p => ({
          id: p.id,
          name: p.name,
          image: p.image || '',
        })) || []
      )
    }
  }, [existing])

  const handleImageUpload = async (files: File[], category: string = 'other'): Promise<string[]> => {
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

  const addProduct = () => {
    const id = `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    setProducts([...products, { id, name: '', image: '' }])
  }

  const updateProduct = (index: number, field: keyof OtherProduct, value: string) => {
    const updated = [...products]
    updated[index] = { ...updated[index], [field]: value }
    setProducts(updated)
  }

  const removeProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index))
  }

  const handleProductImageUpload = async (index: number, file: File) => {
    setUploadingProductIndex(index)
    try {
      const urls = await handleImageUpload([file])
      if (urls.length > 0) {
        updateProduct(index, 'image', urls[0])
        setStatus(`รูป Product ${index + 1} อัปโหลดสำเร็จ`)
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus(`ไม่สามารถอัปโหลดรูป Product ${index + 1}`)
      }
    } catch (error) {
      console.error('Product image upload error:', error)
      setStatus(`ข้อผิดพลาดในการอัปโหลดรูป Product ${index + 1}`)
    } finally {
      setUploadingProductIndex(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('กำลังบันทึก...')

    try {
      const invalidProducts = products.filter(p => p.name.trim() && !p.image.trim())
      if (invalidProducts.length > 0) {
        setStatus(`Product ต้องมีรูปภาพ (${invalidProducts.length} รายการ)`)
        setLoading(false)
        return
      }

      let mainImageUrl = mode === 'edit' ? existingImageUrl : ''
      if (images.length > 0) {
        const uploadedUrls = await handleImageUpload(images)
        mainImageUrl = uploadedUrls[0] || mainImageUrl
      }

      const finalSpecs = features.trim() ? { 'Product Lists': features } : {}

      if (mode === 'edit' && existing) {
        const updateRes = await fetch('/api/admin/products', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            image: mainImageUrl || null,
            category: 'other',
            type: ['other'],
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

        const productsToCreate = products
          .filter(p => p.name.trim() || p.image.trim())
          .map((p) => ({
            id: p.id,
            name: p.name,
            image: p.image || null,
          }))

        await fetch('/api/admin/variants', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: formData.id }),
        })

        if (productsToCreate.length > 0) {
          const productRes = await fetch('/api/admin/variants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: formData.id, variants: productsToCreate }),
          })

          if (!productRes.ok) {
            const productErr = await productRes.text()
            console.error('Product update error:', productRes.status, productErr)
            setStatus('ข้อผิดพลาดในการบันทึก Products')
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
            category: 'other',
            type: ['other'],
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

        const productsToCreate = products
          .filter(p => p.name.trim() || p.image.trim())
          .map((p) => ({
            id: p.id,
            name: p.name,
            image: p.image || null,
          }))

        if (productsToCreate.length > 0) {
          const productRes = await fetch('/api/admin/variants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: createData.product.id, variants: productsToCreate }),
          })

          if (!productRes.ok) {
            const productErr = await productRes.text()
            console.error('Product creation error:', productRes.status, productErr)
            setStatus('สินค้าสร้างสำเร็จ แต่เกิดข้อผิดพลาดในการบันทึก Products')
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
            {mode === 'edit' ? 'แก้ไข Other' : 'เพิ่ม Other ใหม่'}
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
            <label className="block text-sm font-medium text-white mb-1">ชื่อ Other</label>
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
            <label className="block text-sm font-medium text-white mb-1">รูปภาพหลัก</label>
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

          <hr className="border-gray-600" />

          <div>
            <label className="block text-sm font-medium text-white mb-1">Product Lists</label>
            <textarea
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder="ระบุรายชื่อและคุณสมบัติของสินค้า สามารถเว้นบรรทัดใหม่เพื่อแยกรายการ"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white h-32 resize-vertical whitespace-pre-wrap break-words"
            />
          </div>

          <hr className="border-gray-600" />

          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Product Details</h3>
              <button
                type="button"
                onClick={addProduct}
                className="px-3 py-1 bg-emerald-500 text-white text-sm rounded"
              >
                + เพิ่ม
              </button>
            </div>

            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-300 text-sm">Product {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeProduct(index)}
                      className="text-red-400 text-sm hover:text-red-300"
                    >
                      ลบ
                    </button>
                  </div>

                  {product.image && (
                    <div className="flex justify-center">
                      <div className="relative w-20 h-20 rounded border border-gray-600 flex-shrink-0 bg-black flex items-center justify-center">
                        <img
                          src={product.image}
                          alt="product"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">ID</label>
                    <input
                      type="text"
                      value={product.id}
                      onChange={(e) => updateProduct(index, 'id', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-gray-600 text-white rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">ชื่อ</label>
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) => updateProduct(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 text-xs bg-gray-600 text-white rounded"
                      placeholder="เช่น Launcher Blue, Stadium Set"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">รูปภาพ</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        e.currentTarget.files?.[0] &&
                        handleProductImageUpload(index, e.currentTarget.files[0])
                      }
                      disabled={uploadingProductIndex === index}
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