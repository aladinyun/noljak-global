import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import bcrypt from 'bcryptjs'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('admin_users')
      .select('id, email, name, role, is_active, created_at')
      .order('created_at', { ascending: true })

    if (error) throw error

    return NextResponse.json({ users: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, role } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: '이메일, 비밀번호, 이름을 입력해주세요.' }, { status: 400 })
    }

    const password_hash = await bcrypt.hash(password, 10)
    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from('admin_users')
      .insert({ email, password_hash, name, role: role || 'staff' })
      .select('id, email, name, role, is_active, created_at')
      .single()

    if (error) throw error

    return NextResponse.json({ user: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}