import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase-server'

export async function POST(request: Request) {
  try {
    console.log('[upload-image] Request received')
    
    const formData = await request.formData().catch((err) => {
      console.error('[upload-image] FormData parse error:', err)
      return null
    })

    if (!formData) {
      console.error('[upload-image] No formData')
      return NextResponse.json({ success: false, message: 'Invalid form data' }, { status: 400 })
    }

    const files = formData.getAll('files') as File[]
    const category = (formData.get('category') as string) || 'blade'
    console.log('[upload-image] Files count:', files.length, 'Category:', category)

    if (!files || files.length === 0) {
      console.error('[upload-image] No files found')
      return NextResponse.json({ success: false, message: 'No files provided' }, { status: 400 })
    }

    // Check environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    console.log('[upload-image] Supabase URL exists:', !!supabaseUrl)
    console.log('[upload-image] Service role key exists:', !!serviceRoleKey)

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('[upload-image] Missing environment variables')
      return NextResponse.json({ success: false, message: 'Server configuration error' }, { status: 500 })
    }

    let supabase
    try {
      supabase = createServerSupabaseClient()
      console.log('[upload-image] Supabase client created')
    } catch (clientErr) {
      console.error('[upload-image] Supabase client error:', clientErr)
      return NextResponse.json({ success: false, message: 'Supabase client error' }, { status: 500 })
    }

    const bucketName = 'beyblade-images'

    // Skip bucket check and creation for now - assume it exists
    console.log('[upload-image] Skipping bucket check, assuming bucket exists')

    const uploaded: Array<{ path: string; publicUrl: string }> = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      console.log(`[upload-image] Processing file ${i + 1}:`, file.name, file.size, file.type)

      const fileNameSafe = `${category}-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
      const path = `${category}/${fileNameSafe}`

      console.log(`[upload-image] Uploading to path:`, path)

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(path, file as File, { cacheControl: '3600', upsert: false })

      if (uploadError) {
        console.error(`[upload-image] Upload error for file ${i}:`, uploadError)
        console.error(`[upload-image] Upload error details:`, JSON.stringify(uploadError, null, 2))
        return NextResponse.json({ success: false, message: `Upload error: ${uploadError.message}` }, { status: 500 })
      }

      if (!uploadData) {
        console.error('[upload-image] No upload data returned')
        return NextResponse.json({ success: false, message: 'No upload data returned' }, { status: 500 })
      }

      console.log(`[upload-image] File uploaded:`, uploadData.path)

      const { data: publicUrlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(path)

      if (!publicUrlData?.publicUrl) {
        console.warn('[upload-image] Public URL creation failed, using fallback')
        const fallbackUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, '')}/storage/v1/object/public/${bucketName}/${path}`
        console.log('[upload-image] Fallback URL:', fallbackUrl)
        uploaded.push({ path: uploadData.path, publicUrl: fallbackUrl })
        continue
      }

      console.log('[upload-image] Public URL:', publicUrlData.publicUrl)
      uploaded.push({ path: uploadData.path, publicUrl: publicUrlData.publicUrl })
    }

    console.log('[upload-image] All files uploaded:', uploaded.length)
    return NextResponse.json({ success: true, uploaded })
  } catch (error) {
    console.error('[upload-image] Unknown error:', error)
    return NextResponse.json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}

