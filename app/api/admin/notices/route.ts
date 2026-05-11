import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ notices: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, body: noticeBody, cta_link, category, is_published, is_banner, banner_text } = body

    if (!title || !noticeBody) {
      return NextResponse.json({ error: '제목과 내용을 입력해주세요.' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('notices')
      .insert({
        title,
        body: noticeBody,
        cta_link: cta_link || null,
        category: category || 'general',
        is_published: is_published || false,
        is_banner: is_banner || false,
        banner_text: banner_text || null,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ notice: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}