'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || '로그인 실패')
        return
      }

      router.push('/admin')
    } catch {
      setError('서버 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F1B3D] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F6C400] rounded-2xl mb-4">
            <span className="text-[#0F1B3D] font-bold text-2xl">N</span>
          </div>
          <h1 className="text-white text-2xl font-bold">NOLJAK Admin</h1>
          <p className="text-[#5F6B7A] text-sm mt-1">본사 관리자 전용</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[#0F1B3D] text-sm font-medium">
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@noljakedu.com"
                required
                className="w-full px-4 py-3 border border-[#E8ECF1] rounded-xl text-[#0F1B3D] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 focus:ring-[#F6C400] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#0F1B3D] text-sm font-medium">
                비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 border border-[#E8ECF1] rounded-xl text-[#0F1B3D] placeholder-[#5F6B7A] focus:outline-none focus:ring-2 focus:ring-[#F6C400] focus:border-transparent transition"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F6C400] text-[#0F1B3D] font-bold py-3 rounded-xl hover:bg-[#e5b500] transition disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>

        <p className="text-center text-[#5F6B7A] text-xs mt-6">
          © 2025 NOLJAK EDU. All rights reserved.
        </p>
      </div>
    </div>
  )
}