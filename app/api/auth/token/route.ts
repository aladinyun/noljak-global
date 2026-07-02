import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 })
    }

    const res = await fetch(`${process.env.ACADEMY_API_URL ?? 'https://api.noljak.global'}/api/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.ACADEMY_CLIENT_ID ?? 'noljak_global_client',
        client_secret: process.env.ACADEMY_CLIENT_SECRET ?? 'global_secret_change_in_production',
        redirect_uri: process.env.ACADEMY_REDIRECT_URI ?? 'https://www.noljak.global/auth/callback',
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Token exchange failed:', err)
      return NextResponse.json({ error: 'Token exchange failed' }, { status: 400 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('Token route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
