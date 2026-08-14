'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import { consumeStoredState } from '@/lib/oauth-state'

function CallbackHandler({ prefix }: { prefix: string }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state')
    // 저장된 state 는 읽는 즉시 삭제된다(1회용). code 검사보다 먼저 호출해
    // 어떤 경로로 중단되더라도 재사용되지 않게 한다.
    const savedState = consumeStoredState()

    if (!code) {
      setErrorMsg('Authorization code not found.')
      setStatus('error')
      return
    }

    // CSRF 방어: 로그인을 시작한 브라우저가 저장해 둔 state 와 돌아온 state 가
    // 정확히 일치해야만 진행한다. 값이 없거나 다르면 우리가 시작한 로그인이 아니므로
    // 여기서 확실히 거부한다 (공격자가 심어 둔 authorization code 일 수 있음).
    if (!state || !savedState || state !== savedState) {
      setErrorMsg('Invalid state parameter. Please try again.')
      setStatus('error')
      return
    }

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
        // 토큰은 academy.noljak.global 로 넘기기만 하고 이 오리진에는 남기지 않는다.
        // (예전에는 localStorage 에 'noljak_partner_token' 으로 저장했지만 읽는 곳이 없어,
        //  마케팅 사이트 오리진에 액세스 토큰 노출면만 넓히는 코드였다.)
        setStatus('success')
        router.push(`https://academy.noljak.global/sso-callback?token=${encodeURIComponent(data.access_token)}`)
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
