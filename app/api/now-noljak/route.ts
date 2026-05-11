import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('now_noljak')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .limit(12)

    if (error) throw error

    return NextResponse.json({ cards: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ cards: [] })
  }
}