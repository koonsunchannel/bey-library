"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { setAdmin } from '@/lib/admin'

export default function AdminPage() {
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pass })
      })

      const data = await res.json()

      if (data.success) {
        setAdmin(true)
        router.push('/')
      } else {
        setError(data.message || 'Authentication failed')
      }
    } catch (err) {
      setError('Server error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="p-8 bg-slate-800 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <p className="text-sm text-slate-300 mb-4">กรุณากรอกรหัสสำหรับผู้ดูแล</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 rounded bg-slate-700 border border-slate-600"
            required
          />
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}
