"use client"

import { useEffect, useState } from "react"
import { getProducts, createProduct, createProductVariants, deleteProduct } from "@/lib/database-client"
import type { Product } from "@/lib/types"

type FormState = {
  id: string
  name: string
  image: string
  category: string
  type: string
  price: string
  specs: string
  variants: string
}

export default function ProductAdminForm() {
  const [form, setForm] = useState<FormState>({
    id: "",
    name: "",
    image: "",
    category: "blade",
    type: "attack",
    price: "",
    specs: "",
    variants: ""
  })
  const [products, setProducts] = useState<Product[]>([])
  const [status, setStatus] = useState<string>("")

  const refreshProducts = async () => {
    const all = await getProducts()
    setProducts(all)
  }

  useEffect(() => {
    refreshProducts()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Saving...")

    if (!form.id || !form.name || !form.category) {
      setStatus("กรุณากรอก id, name, category ก่อน")
      return
    }

    let specsData = {}
    try {
      specsData = form.specs ? JSON.parse(form.specs) : {}
    } catch (error) {
      setStatus("รูปแบบ JSON ของ specs ไม่ถูกต้อง")
      return
    }

    const product = await createProduct({
      id: form.id,
      name: form.name,
      image: form.image || "",
      category: form.category as Product["category"],
      type: form.type.includes(",") ? form.type.split(',').map(s => s.trim()) : form.type,
      price: form.price || "",
      specs: specsData as any
    })

    if (!product) {
      setStatus("สร้างสินค้าไม่สำเร็จ")
      return
    }

    let variants = [] as Array<{id:string; name:string; image?:string}>
    try {
      variants = form.variants ? JSON.parse(form.variants) : []
      if (!Array.isArray(variants)) throw new Error('invalid')
    } catch {
      setStatus("รูปแบบ JSON ของ variants ต้องเป็นอาเรย์")
      return
    }

    if (variants.length > 0) {
      const ok = await createProductVariants(product.id, variants)
      if (!ok) {
        setStatus("สร้าง variant ไม่สำเร็จ")
        return
      }
    }

    setStatus("สร้างสินค้าใหม่สำเร็จ")
    setForm({ id: "", name: "", image: "", category: "blade", type: "attack", price: "", specs: "", variants: "" })
    refreshProducts()
  }

  const handleDelete = async (id: string) => {
    if (!confirm(`ลบสินค้า ${id}?`)) return
    const ok = await deleteProduct(id)
    setStatus(ok ? "ลบสำเร็จ" : "ลบไม่สำเร็จ")
    refreshProducts()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Admin Product CRUD</h1>
      <p className="mb-4 text-sm text-gray-600">กรอกตามโครงสร้างใน data.ts (id, name, category, type, specs JSON, variants JSON)</p>

      <form onSubmit={handleSubmit} className="space-y-3 p-4 rounded-lg border bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={form.id} onChange={e => setForm(prev => ({...prev,id:e.target.value}))} placeholder="id" className="border px-3 py-2 rounded" required />
          <input value={form.name} onChange={e => setForm(prev => ({...prev,name:e.target.value}))} placeholder="name" className="border px-3 py-2 rounded" required />
          <input value={form.image} onChange={e => setForm(prev => ({...prev,image:e.target.value}))} placeholder="image" className="border px-3 py-2 rounded" />
          <input value={form.category} onChange={e => setForm(prev => ({...prev,category:e.target.value}))} placeholder="category" className="border px-3 py-2 rounded" />
          <input value={form.type} onChange={e => setForm(prev => ({...prev,type:e.target.value}))} placeholder="type (attack,balance,...)" className="border px-3 py-2 rounded" />
          <input value={form.price} onChange={e => setForm(prev => ({...prev,price:e.target.value}))} placeholder="price" className="border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">specs (JSON)</label>
          <textarea value={form.specs} onChange={e => setForm(prev => ({...prev,specs:e.target.value}))} rows={4} className="w-full border px-3 py-2 rounded" placeholder='{"Type":"Attack","Spin":"Right"}' />
        </div>

        <div>
          <label className="block text-sm font-medium">variants (JSON array)</label>
          <textarea value={form.variants} onChange={e => setForm(prev => ({...prev,variants:e.target.value}))} rows={4} className="w-full border px-3 py-2 rounded" placeholder='[{"id":"X","name":"BX-00","image":"/path.webp"}]' />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save Product</button>
      </form>

      <p className="mt-2 text-sm text-green-600">{status}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Product list ({products.length})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.map(product => (
            <div key={product.id} className="border p-3 rounded">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold">{product.id}</p>
                  <p>{product.name}</p>
                  <p className="text-xs text-gray-500">{product.category} | {Array.isArray(product.type) ? product.type.join(', ') : product.type}</p>
                </div>
                <button onClick={() => handleDelete(product.id)} className="text-red-600 text-xs">Delete</button>
              </div>
              <p className="text-xs">price: {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}