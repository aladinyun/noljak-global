'use client'

import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-[#0F1B3D] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#F6C400] rounded-lg flex items-center justify-center">
            <span className="text-[#0F1B3D] font-bold text-sm">N</span>
          </div>
          <span className="text-white font-bold text-lg">NOLJAK Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-[#5F6B7A] hover:text-white text-sm transition"
        >
          로그아웃
        </button>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-8 py-12">
        <h1 className="text-[#0F1B3D] text-3xl font-bold mb-2">대시보드</h1>
        <p className="text-[#5F6B7A] mb-10">NOLJAK 글로벌 홈페이지 관리 패널</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Notice 게시판', desc: '공지사항 및 배너 관리', icon: '📢', disabled: false },
            { title: 'Find Center', desc: '교육원 정보 관리', icon: '📍', disabled: true },
            { title: 'Now Noljak', desc: 'SNS 카드 관리', icon: '📸', disabled: true },
            { title: 'Global Business', desc: '문의 수신 관리', icon: '✉️', disabled: true },
            { title: '계정 관리', desc: '관리자 계정 추가/삭제', icon: '👤', disabled: true },
          ].map((item) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-6 border border-[#E8ECF1] ${item.disabled ? 'opacity-50' : 'hover:shadow-md cursor-pointer transition'}`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h2 className="text-[#0F1B3D] font-bold text-lg mb-1">{item.title}</h2>
              <p className="text-[#5F6B7A] text-sm">{item.desc}</p>
              {item.disabled && (
                <span className="inline-block mt-3 text-xs bg-[#F8F9FA] text-[#5F6B7A] px-2 py-1 rounded-full">
                  준비 중
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}