"use client"

import { useEffect, useState } from 'react'
import type { Product } from '@/lib/types'

type CreditsProductFormProps = {
  existing?: Product | null
  onClose: () => void
  onSaved: () => void
}

type CreditsFields = {
  creatorName: string
  donation: string
  ownership: string
  objective: string
  specialThanks: string
}

const emptyFields: CreditsFields = {
  creatorName: '',
  donation: '',
  ownership: '',
  objective: '',
  specialThanks: '',
}

export default function CreditsProductForm({ existing, onClose, onSaved }: CreditsProductFormProps) {
  const [formData, setFormData] = useState({ id: '', name: '', image: '', price: '' })
  const [fields, setFields] = useState<CreditsFields>(emptyFields)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    if (!existing) return
    const specs = existing.specs || {}
    setFormData({
      id: existing.id,
      name: existing.name || '',
      image: existing.image || '',
      price: existing.price || '',
    })
    setFields({
      creatorName: specs['Creator Name'] || '',
      donation: specs.Donation || '',
      ownership: specs.Ownership || '',
      objective: specs.Objective || '',
      specialThanks: specs['Special Thanks'] || '',
    })
  }, [existing])

  const updateField = (key: keyof CreditsFields, value: string) => {
    setFields(current => ({ ...current, [key]: value }))
  }

  const handleImageUpload = async (file: File) => {
    setUploadingImage(true)
    setStatus('กำลังอัปโหลดรูป...')
    try {
      const payload = new FormData()
      payload.append('files', file)
      payload.append('category', 'credits')
      const response = await fetch('/api/upload-image', { method: 'POST', body: payload })
      const data = await response.json().catch(() => ({ message: `Upload failed (${response.status})` }))
      const imageUrl = data.uploaded?.[0]?.publicUrl
      if (!response.ok || !data.success || typeof imageUrl !== 'string') {
        throw new Error(data.message || 'อัปโหลดรูปไม่สำเร็จ')
      }
      setFormData(current => ({ ...current, image: imageUrl }))
      setStatus('อัปโหลดรูปสำเร็จ')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'อัปโหลดรูปไม่สำเร็จ')
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setStatus('กำลังบันทึก...')

    if (!formData.image) {
      setStatus('กรุณาอัปโหลดรูปเครดิตบุคคลอย่างน้อย 1 รูป')
      setLoading(false)
      return
    }

    const specs = Object.fromEntries(
      Object.entries({
        'Creator Name': fields.creatorName,
        Donation: fields.donation,
        Ownership: fields.ownership,
        Objective: fields.objective,
        'Special Thanks': fields.specialThanks,
      }).filter(([, value]) => value.trim())
    )

    try {
      const response = await fetch('/api/admin/products', {
        method: existing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: formData.id,
          name: formData.name,
          image: formData.image || null,
          category: 'credits',
          type: ['credits'],
          price: formData.price,
          specs,
        }),
      })
      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'บันทึกไม่สำเร็จ')
      setStatus(existing ? 'แก้ไขสำเร็จ' : 'สร้างสำเร็จ')
      setTimeout(() => {
        onSaved()
        onClose()
      }, 500)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'เกิดข้อผิดพลาด')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!existing || !confirm('ยืนยันการลบรายการนี้?')) return
    setLoading(true)
    try {
      const response = await fetch('/api/admin/products', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: existing.id }),
      })
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

  const textInput = (label: string, value: string, onChange: (value: string) => void, placeholder = '') => (
    <label className="block text-sm text-gray-300">
      {label}
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white"
      />
    </label>
  )

  const textArea = (label: string, value: string, onChange: (value: string) => void, placeholder = '') => (
    <label className="block text-sm text-gray-300">
      {label}
      <textarea
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        rows={3}
        className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white"
      />
    </label>
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4">
      <div className="my-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-gray-800 p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">{existing ? 'แก้ไข Credits / Sponsor' : 'เพิ่ม Credits / Sponsor'}</h2>
          <div className="flex items-center gap-3">
            {existing && <button type="button" onClick={handleDelete} disabled={loading} className="rounded bg-red-500 px-3 py-2 text-sm text-white">ลบ</button>}
            <button type="button" onClick={onClose} className="text-xl text-gray-300">✕</button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-white">ข้อมูลหลัก</h3>
            <p className="text-xs text-gray-400">ฟอร์มนี้สำหรับเครดิตบุคคลโดยเฉพาะ</p>
            {textInput('ID', formData.id, value => setFormData(current => ({ ...current, id: value })), 'เช่น CD001')}
            {textInput('หัวข้อ', formData.name, value => setFormData(current => ({ ...current, name: value })), 'ชื่อรายการที่จะแสดง')}
            <label className="block text-sm text-gray-300">
              รูปภาพหลัก
              <input
                type="file"
                accept="image/*"
                onChange={event => event.currentTarget.files?.[0] && handleImageUpload(event.currentTarget.files[0])}
                className="mt-1 w-full rounded bg-gray-700 px-3 py-2 text-white"
              />
              {formData.image && <img src={formData.image} alt="รูปภาพหลัก" className="mt-2 h-20 w-20 rounded object-cover" />}
            </label>
            {textInput('ข้อความราคา / ลิงก์', formData.price, value => setFormData(current => ({ ...current, price: value })), 'เช่น This website is free')}
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-white">ข้อมูล Credits</h3>
            {textInput('Creator Name', fields.creatorName, value => updateField('creatorName', value))}
            {textArea('Donation', fields.donation, value => updateField('donation', value))}
            {textArea('Ownership', fields.ownership, value => updateField('ownership', value))}
            {textArea('Objective', fields.objective, value => updateField('objective', value))}
            {textArea('Special Thanks', fields.specialThanks, value => updateField('specialThanks', value))}
          </section>

          {status && <p className="text-sm text-cyan-300">{status}</p>}
          <button type="submit" disabled={loading || uploadingImage} className="w-full rounded bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-400 disabled:opacity-50">
            {loading ? 'กำลังบันทึก...' : uploadingImage ? 'กำลังอัปโหลดรูป...' : 'บันทึกเครดิตบุคคล'}
          </button>
        </form>
      </div>
    </div>
  )
}