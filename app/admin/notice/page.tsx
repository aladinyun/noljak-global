'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Notice {
  id: string
  title: string
  body: string
  cta_link: string | null
  category: string
  is_published: boolean
  is_banner: boolean
  banner_text: string | null
  image_url: string | null
  created_at: string
}

const emptyForm = {
  title: '',
  body: '',
  cta_link: '',
  category: 'general',
  is_published: false,
  is_banner: false,
  banner_text: '',
  image_url: '',
}

export default function AdminNoticePage() {
  const router = useRouter()
  const [notices, setNotices] = useState<Notice[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [preview, setPreview] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetchNotices() }, [])

  async function fetchNotices() {
    const res = await fetch('/api/admin/notices')
    const data = await res.json()
    setNotices(data.notices || [])
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/admin/notices/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setForm(f => ({ ...f, image_url: data.url }))
      setPreview(data.url)
    } catch (err: any) {
      setMessage(err.message || '업로드 실패')
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const url = editingId ? `/api/admin/notices/${editingId}` : '/api/admin/notices'
      const method = editingId ? 'PATCH' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error()

      setMessage(editingId ? '수정 완료' : '등록 완료')
      setForm(emptyForm)
      setEditingId(null)
      setPreview(null)
      if (fileRef.current) fileRef.current.value = ''
      fetchNotices()
    } catch {
      setMessage('오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  function handleEdit(notice: Notice) {
    setEditingId(notice.id)
    setForm({
      title: notice.title,
      body: notice.body,
      cta_link: notice.cta_link || '',
      category: notice.category,
      is_published: notice.is_published,
      is_banner: notice.is_banner,
      banner_text: notice.banner_text || '',
      image_url: notice.image_url || '',
    })
    setPreview(notice.image_url || null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleDelete(id: string) {
    if (!confirm('삭제하시겠습니까?')) return
    await fetch(`/api/admin/notices/${id}`, { method: 'DELETE' })
    fetchNotices()
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <header className="bg-[#0F1B3D] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/admin')} className="text-[#F6C400] hover:text-white transition text-sm">
            ← 대시보드
          </button>
          <span className="text-white font-bold text-lg ml-2">Notice 관리</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-10">
        <div className="bg-white rounded-2xl p-8 border border-[#E8ECF1] mb-10">
          <h2 className="text-[#0F1B3D] font-bold text-xl mb-6">
            {editingId ? '공지 수정' : '새 공지 등록'}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#0F1B3D]">제목 *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                required
                className="px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#0F1B3D]">내용 *</label>
              <textarea
                value={form.body}
                onChange={e => setForm({ ...form, body: e.target.value })}
                required
                rows={5}
                className="px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400] resize-none"
              />
            </div>

            {/* 이미지 업로드 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#0F1B3D]">이미지 (선택, 최대 5MB)</label>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                className="text-sm text-[#5F6B7A] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#F6C400] file:text-[#0F1B3D] file:font-medium hover:file:bg-[#e5b500] cursor-pointer"
              />
              {uploading && <p className="text-sm text-[#5F6B7A]">업로드 중...</p>}
              {preview && (
                <div className="relative mt-2">
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full aspect-video object-cover rounded-xl border border-[#E8ECF1]"
                  />
                  <button
                    type="button"
                    onClick={() => { setPreview(null); setForm(f => ({ ...f, image_url: '' })); if (fileRef.current) fileRef.current.value = '' }}
                    className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[#0F1B3D]">링크 (선택)</label>
              <input
                type="text"
                value={form.cta_link}
                onChange={e => setForm({ ...form, cta_link: e.target.value })}
                placeholder="https://..."
                className="px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]"
              />
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={e => setForm({ ...form, is_published: e.target.checked })}
                  className="w-4 h-4 accent-[#F6C400]"
                />
                <span className="text-sm text-[#0F1B3D]">공개</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_banner}
                  onChange={e => setForm({ ...form, is_banner: e.target.checked })}
                  className="w-4 h-4 accent-[#F6C400]"
                />
                <span className="text-sm text-[#0F1B3D]">배너 표시</span>
              </label>
            </div>

            {form.is_banner && (
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#0F1B3D]">배너 텍스트</label>
                <input
                  type="text"
                  value={form.banner_text}
                  onChange={e => setForm({ ...form, banner_text: e.target.value })}
                  placeholder="홈페이지 상단에 표시될 짧은 문구"
                  className="px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]"
                />
              </div>
            )}

            {message && (
              <p className="text-sm text-green-600 font-medium">{message}</p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading || uploading}
                className="bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-3 rounded-xl hover:bg-[#e5b500] transition disabled:opacity-50"
              >
                {loading ? '처리 중...' : editingId ? '수정' : '등록'}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={() => { setEditingId(null); setForm(emptyForm); setPreview(null) }}
                  className="px-8 py-3 rounded-xl border border-[#E8ECF1] text-[#5F6B7A] hover:bg-[#F8F9FA] transition"
                >
                  취소
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#0F1B3D] font-bold text-xl">공지 목록 ({notices.length})</h2>
          {notices.length === 0 && (
            <p className="text-[#5F6B7A] text-sm">등록된 공지가 없습니다.</p>
          )}
          {notices.map(notice => (
            <div key={notice.id} className="bg-white rounded-2xl p-6 border border-[#E8ECF1]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#0F1B3D]">{notice.title}</h3>
                    {notice.is_published && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">공개</span>
                    )}
                    {notice.is_banner && (
                      <span className="text-xs bg-[#FFF8E1] text-[#F6C400] px-2 py-0.5 rounded-full">배너</span>
                    )}
                    {notice.image_url && (
                      <span className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">이미지</span>
                    )}
                  </div>
                  <p className="text-[#5F6B7A] text-sm line-clamp-2">{notice.body}</p>
                  {notice.banner_text && (
                    <p className="text-xs text-[#F6C400] mt-1">배너: {notice.banner_text}</p>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(notice)}
                    className="text-sm px-4 py-2 border border-[#E8ECF1] rounded-lg hover:bg-[#F8F9FA] transition"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(notice.id)}
                    className="text-sm px-4 py-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}