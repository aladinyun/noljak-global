import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ notices: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ notices: [] })
  }
}