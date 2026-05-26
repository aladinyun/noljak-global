'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import Link from 'next/link'

function CallbackHandler({ prefix }: { prefix: string }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    const savedState = sessionStorage.getItem('oauth_state')

    if (!code) {
      setErrorMsg('Authorization code not found.')
      setStatus('error')
      return
    }

    if (!state || state !== savedState) {
      setErrorMsg('Invalid state parameter. Please try again.')
      setStatus('error')
      return
    }

    sessionStorage.removeItem('oauth_state')

    fetch('/api/auth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Token exchange failed')
        return res.json()
      })
      .then(data => {
        localStorage.setItem('noljak_partner_token', data.access_token)
        setStatus('success')
        router.push(`${prefix}/partner-dashboard`)
      })
      .catch(err => {
        setErrorMsg(err.message || 'Login failed. Please try again.')
        setStatus('error')
      })
  }, [])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center">
        <p className="text-[#0F1B3D] text-lg font-sans">Logging in…</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-[#FFFDF5] flex flex-col items-center justify-center gap-4">
        <p className="text-red-600 font-sans font-medium">{errorMsg}</p>
        <Link
          href={`${prefix}/`}
          className="font-sans text-sm text-[#0F1B3D] underline hover:text-[#F6C400] transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center">
      <p className="text-[#0F1B3D] text-lg font-sans">Login successful. Redirecting…</p>
    </div>
  )
}

export default function AuthCallbackPage() {
  const locale = useLocale()
  const prefix = locale === 'en' ? '' : `/${locale}`

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFFDF5] flex items-center justify-center">
          <p className="text-[#0F1B3D] text-lg font-sans">Loading…</p>
        </div>
      }
    >
      <CallbackHandler prefix={prefix} />
    </Suspense>
  )
}
