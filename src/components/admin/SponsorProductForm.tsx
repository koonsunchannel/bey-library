"use client"

import { useEffect, useState } from 'react'
import type { Product } from '@/lib/types'

type SponsorProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

type SponsorFields = {
  name: string
  shop: string
  image: string
  url: string
  contact: string
  promotion: string
  message: string
}

const emptyFields: SponsorFields = {
  name: '',
  shop: '',
  image: '',
  url: '',
  contact: '',
  promotion: '',
  message: '',
}

export default function SponsorProductForm({ existing, onClose, onSaved }: SponsorProductFormProps) {
  const [formData, setFormData] = useState({ id: '', title: '', image: '', price: '' })
  const [fields, setFields] = useState<SponsorFields>(emptyFields)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (!existing) return
    const specs = existing.specs || {}
    setFormData({ id: existing.id, title: existing.name || '', image: existing.image || '', price: existing.price || '' })
    setFields({
      name: specs['Sponsor Name'] || '',
      shop: specs['Sponsor Shop'] || '',
      image: specs['Sponsor Image'] || '',
      url: specs['Sponsor URL'] || '',
      contact: specs['Sponsor Contact'] || '',
      promotion: specs['Sponsor Promotion'] || '',
      message: specs['Sponsor Message'] || '',
    })
  }, [existing])

  const updateField = (key: keyof SponsorFields, value: string) => setFields(current => ({ ...current, [key]: value }))

  const uploadImage = async (file: File, target: 'card' | 'sponsor') => {
    setUploading(true)
    setStatus('กำลังอัปโหลดรูป...')
    try {
      const payload = new FormData()
      payload.append('files', file)
      payload.append('category', 'credits')
      const response = await fetch('/api/upload-image', { method: 'POST', body: payload })
      const data = await response.json().catch(() => ({ message: `Upload failed (${response.status})` }))
      const imageUrl = data.uploaded?.[0]?.publicUrl
      if (!response.ok || !data.success || typeof imageUrl !== 'string') throw new Error(data.message || 'อัปโหลดรูปไม่สำเร็จ')
      if (target === 'card') setFormData(current => ({ ...current, image: imageUrl }))
      else updateField('image', imageUrl)
      setStatus('อัปโหลดรูปสำเร็จ')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'อัปโหลดรูปไม่สำเร็จ')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!formData.image && !fields.image) {
      setStatus('กรุณาอัปโหลดรูปการ์ดหรือรูป Sponsor อย่างน้อย 1 รูป')
      return
    }
    setLoading(true)
    setStatus('กำลังบันทึก...')
    const specs = Object.fromEntries(Object.entries({
      'Sponsor Name': fields.name,
      'Sponsor Shop': fields.shop,
      'Sponsor Image': fields.image,
      'Sponsor URL': fields.url,
      'Sponsor Contact': fields.contact,
      'Sponsor Promotion': fields.promotion,
      'Sponsor Message': fields.message,
    }).filter(([, value]) => value.trim()))
    try {
      const response = await fetch('/api/admin/products', {
        method: existing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: formData.id, name: formData.title, image: formData.image || null, category: 'credits', type: ['sponsor'], price: formData.price, specs }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'บันทึกไม่สำเร็จ')
      onSaved()
      onClose()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'เกิดข้อผิดพลาด')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!existing || !confirm('ยืนยันการลบ Sponsor นี้?')) return
    setLoading(true)
    try {
      const response = await fetch('/api/admin/products', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: existing.id }) })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'ลบไม่สำเร็จ')
      onSaved()
      onClose()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'เกิดข้อผิดพลาด')
    } finally {
      setLoading(false)
    }
  }

  const input = (label: string, value: string, onChange: (value: string) => void, placeholder = '') => (
    <label className="block text-sm text-gray-300">{label}<input value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder} className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white" /></label>
  )
  const area = (label: string, value: string, onChange: (value: string) => void) => (
    <label className="block text-sm text-gray-300">{label}<textarea value={value} onChange={event => onChange(event.target.value)} rows={3} className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white" /></label>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4">
      <div className="my-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-gray-800 p-6">
        <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold text-white">{existing ? 'แก้ไข Sponsor / ร้านค้า' : 'เพิ่ม Sponsor / ร้านค้า'}</h2><div className="flex gap-3">{existing && <button type="button" onClick={handleDelete} disabled={loading} className="rounded bg-red-500 px-3 py-2 text-sm text-white">ลบ</button>}<button type="button" onClick={onClose} className="text-xl text-gray-300">✕</button></div></div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <section className="space-y-3"><h3 className="text-lg font-semibold text-white">ข้อมูลรายการ</h3>{input('ID', formData.id, value => setFormData(current => ({ ...current, id: value })), 'เช่น SP001')}{input('หัวข้อการ์ด', formData.title, value => setFormData(current => ({ ...current, title: value })), 'ชื่อที่จะแสดงบนการ์ด')}{input('ข้อความราคา / ลิงก์', formData.price, value => setFormData(current => ({ ...current, price: value })))}</section>
          <section className="space-y-3"><h3 className="text-lg font-semibold text-cyan-300">รูปภาพ</h3><label className="block text-sm text-gray-300">รูปหน้าการ์ด<input type="file" accept="image/*" onChange={event => event.currentTarget.files?.[0] && uploadImage(event.currentTarget.files[0], 'card')} className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white" />{formData.image && <img src={formData.image} alt="Sponsor card" className="mt-2 h-24 w-24 rounded object-cover" />}</label><label className="block text-sm text-gray-300">รูป Sponsor / ร้านค้า<input type="file" accept="image/*" onChange={event => event.currentTarget.files?.[0] && uploadImage(event.currentTarget.files[0], 'sponsor')} className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white" />{fields.image && <img src={fields.image} alt="Sponsor" className="mt-2 h-24 w-24 rounded object-cover" />}</label></section>
          <section className="space-y-3"><h3 className="text-lg font-semibold text-cyan-300">รายละเอียด Sponsor</h3>{input('ชื่อผู้สนับสนุน', fields.name, value => updateField('name', value))}{input('ชื่อร้าน', fields.shop, value => updateField('shop', value))}{input('เว็บไซต์ / ลิงก์ร้าน', fields.url, value => updateField('url', value), 'https://...')}{input('ช่องทางติดต่อ', fields.contact, value => updateField('contact', value), 'Facebook / Line / Discord')}{area('ข้อความโปรโมต', fields.promotion, value => updateField('promotion', value))}{area('ข้อความจากสปอนเซอร์', fields.message, value => updateField('message', value))}</section>
          {status && <p className="text-sm text-cyan-300">{status}</p>}<button type="submit" disabled={loading || uploading} className="w-full rounded bg-cyan-500 px-4 py-2 font-semibold text-white disabled:opacity-50">{loading ? 'กำลังบันทึก...' : uploading ? 'กำลังอัปโหลด...' : 'บันทึก Sponsor'}</button>
        </form>
      </div>
    </div>
  )
}
