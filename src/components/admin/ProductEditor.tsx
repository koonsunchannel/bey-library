"use client"

import { useState, useEffect } from 'react'
import type { Product } from '@/lib/types'
import { createProduct, createProductVariants, deleteProduct, updateProduct, replaceProductVariants } from '@/lib/database-client'

type ProductEditorProps = {
  category: string
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

export default function ProductEditor({ category, existing, onClose, onSaved }: ProductEditorProps) {
  const [id, setId] = useState(existing?.id || '')
  const [name, setName] = useState(existing?.name || '')
  const [image, setImage] = useState(existing?.image || '')
  const [price, setPrice] = useState(existing?.price || '')
  const [type, setType] = useState(Array.isArray(existing?.type) ? existing?.type.join(',') : existing?.type || '')
  const [specs, setSpecs] = useState<string>(existing ? JSON.stringify(existing.specs || {}, null, 2) : '{}')
  const [variants, setVariants] = useState<{id:string;name:string;image:string}[]>(existing?.bey?.map(v => ({ id:v.id, name:v.name, image:v.image })) || [])
  const [status, setStatus] = useState('')
  const [mode, setMode] = useState(existing ? 'edit' : 'create')

  useEffect(() => {
    if (existing) setMode('edit')
  }, [existing])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Saving...')

    try {
      const specsJson = specs ? JSON.parse(specs) : {}
      const productData: Partial<Product> = {
        name,
        image,
        category: category as Product['category'],
        type: type.split(',').map((v) => v.trim()).filter(Boolean),
        price,
        specs: specsJson,
      }

      let savedProduct: Product | null = null

      if (mode === 'edit' && existing) {
        savedProduct = await updateProduct(existing.id, productData)
      } else {
        savedProduct = await createProduct({ ...productData, id })
      }

      if (!savedProduct) {
        setStatus('Failed to save product')
        return
      }

      if (variants.length > 0) {
        await replaceProductVariants(savedProduct.id, variants.map((v) => ({ id: v.id, name: v.name, image: v.image })))
      }

      setStatus('Saved successfully')
      onSaved()
      onClose()
    } catch (err) {
      setStatus('Error: invalid JSON. ') 
      console.error(err)
    }
  }

  const addVariant = () => setVariants(prev => [...prev, { id: '', name: '', image: '' }])
  const removeVariant = (index:number) => setVariants(prev => prev.filter((_,i)=>i!==index))
  const updateVariant = (index:number, field:string, value:string) => setVariants(prev => prev.map((v,i)=> i===index ? {...v,[field]:value} : v))

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg p-5 space-y-4 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{mode === 'edit' ? 'Edit Product' : 'Add Product'} ({category})</h2>
          <button className="text-sm text-red-500" onClick={onClose}>Close</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <input required value={id} onChange={(e)=>setId(e.target.value)} placeholder="ID" className="border p-2 rounded" />
            <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="border p-2 rounded" />
            <input value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Image URL" className="border p-2 rounded" />
            <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" className="border p-2 rounded" />
            <input value={type} onChange={(e)=>setType(e.target.value)} placeholder="Type (attack,balance...)" className="border p-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Specs (JSON)</label>
            <textarea value={specs} onChange={(e)=>setSpecs(e.target.value)} rows={4} className="w-full border p-2 rounded" />
          </div>

          <div>
            <h3 className="font-semibold">Variants</h3>
            <button type="button" className="mb-2 px-3 py-1 bg-green-500 text-white rounded" onClick={addVariant}>Add Variant</button>
            <div className="space-y-2">
              {variants.map((variant, index) => (
                <div key={`${variant.id}-${index}`} className="border p-2 rounded">
                  <div className="flex items-center justify-between gap-2">
                    <strong>Variant {index + 1}</strong>
                    <button type="button" className="text-red-500" onClick={() => removeVariant(index)}>Remove</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                    <input value={variant.id} onChange={(e)=>updateVariant(index,'id',e.target.value)} placeholder="Variant ID" className="border p-2 rounded" />
                    <input value={variant.name} onChange={(e)=>updateVariant(index,'name',e.target.value)} placeholder="Variant Name" className="border p-2 rounded" />
                    <input value={variant.image} onChange={(e)=>updateVariant(index,'image',e.target.value)} placeholder="Variant Image" className="border p-2 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          <p className="text-sm text-gray-600">{status}</p>
        </form>
      </div>
    </div>
  )
}
