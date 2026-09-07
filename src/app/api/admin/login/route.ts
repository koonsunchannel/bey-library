import { NextResponse } from 'next/server'
import { getAdminUser } from '@/lib/database-server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body.password !== 'string') {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }

  const admin = await getAdminUser()
  if (!admin) {
    return NextResponse.json({ success: false, message: 'Admin not found' }, { status: 401 })
  }

  if (body.password === admin.password) {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 })
}
