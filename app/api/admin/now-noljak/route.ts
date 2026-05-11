import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('now_noljak')
      .select('*')
      .order('sort_order', { ascending: true })

    if (error) throw error

    return NextResponse.json({ cards: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, url, thumbnail_url, platform, is_published, sort_order } = body

    if (!title || !description || !url) {
      return NextResponse.json({ error: '제목, 설명, URL을 입력해주세요.' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('now_noljak')
      .insert({
        title,
        description,
        url,
        thumbnail_url: thumbnail_url || null,
        platform: platform || 'Instagram',
        is_published: is_published || false,
        sort_order: sort_order || 0,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ card: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}