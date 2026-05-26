import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: NextRequest) {
  try {
    const locale = request.nextUrl.searchParams.get('locale') ?? 'all'

    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .eq('is_published', true)
      .or(`target_locale.eq.all,target_locale.eq.${locale}`)
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ notices: data })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ notices: [] })
  }
}