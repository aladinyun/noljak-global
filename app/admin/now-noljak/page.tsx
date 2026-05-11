'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface Card {
  id: string
  title: string
  description: string
  url: string
  thumbnail_url: string | null
  platform: string
  is_published: boolean
  sort_order: number
}

const emptyForm = {
  title: '',
  description: '',
  url: '',
  thumbnail_url: '',
  platform: 'Instagram',
  is_published: false,
  sort_order: 0,
}

const platforms = ['Instagram', 'YouTube', 'Facebook', 'Medium', 'Blog']

export default function AdminNowNoljakPage() {
  const router = useRouter()
  const [cards, setCards] = useState<Card[]>([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [preview, setPreview] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => { fetchCards() }, [])

  async function fetchCards() {
    const res = await fetch('/api/admin/now-noljak')
    const data = await res.json()
    setCards(data.cards || [])
  }
  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await fetch('/api/admin/now-noljak/upload', { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setForm(f => ({ ...f, thumbnail_url: data.url }))
      setPreview(data.url)
    } catch {
      setMessage('업로드 실패')
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const url = editingId ? `/api/admin/now-noljak/${editingId}` : '/api/admin/now-noljak'
      const method = editingId ? 'PATCH' : 'POST'
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!res.ok) throw new Error()
      setMessage(editingId ? '수정 완료' : '등록 완료')
      setForm(emptyForm)
      setEditingId(null)
      setPreview(null)
      if (fileRef.current) fileRef.current.value = ''
      fetchCards()
    } catch {
      setMessage('오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  function handleEdit(card: Card) {
    setEditingId(card.id)
    setForm({ title: card.title, description: card.description, url: card.url, thumbnail_url: card.thumbnail_url || '', platform: card.platform, is_published: card.is_published, sort_order: card.sort_order })
    setPreview(card.thumbnail_url || null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleDelete(id: string) {
    if (!confirm('삭제하시겠습니까?')) return
    await fetch(`/api/admin/now-noljak/${id}`, { method: 'DELETE' })
    fetchCards()
  }
 return (
    <div className='min-h-screen bg-[#F8F9FA]'>
      <header className='bg-[#0F1B3D] px-8 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <button onClick={() => router.push('/admin')} className='text-[#F6C400] hover:text-white transition text-sm'>← 대시보드</button>
          <span className='text-white font-bold text-lg ml-2'>Now Noljak 관리</span>
        </div>
      </header>
      <main className='max-w-4xl mx-auto px-8 py-10'>
        <div className='bg-white rounded-2xl p-8 border border-[#E8ECF1] mb-10'>
          <h2 className='text-[#0F1B3D] font-bold text-xl mb-6'>{editingId ? '카드 수정' : '새 카드 등록'}</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-medium text-[#0F1B3D]'>플랫폼</label>
                <select value={form.platform} onChange={e => setForm({ ...form, platform: e.target.value })} className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400] bg-white'>
                  {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className='flex flex-col gap-1.5'>
                <label className='text-sm font-medium text-[#0F1B3D]'>노출 순서</label>
                <input type='number' value={form.sort_order} onChange={e => setForm({ ...form, sort_order: parseInt(e.target.value) })} className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]' />
              </div>
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-[#0F1B3D]'>제목 *</label>
              <input type='text' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-[#0F1B3D]'>설명 *</label>
              <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required rows={3} className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400] resize-none' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-[#0F1B3D]'>링크 URL *</label>
              <input type='url' value={form.url} onChange={e => setForm({ ...form, url: e.target.value })} required placeholder='https://...' className='px-4 py-3 border border-[#E8ECF1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F6C400]' />
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm font-medium text-[#0F1B3D]'>썸네일 이미지 (최대 5MB)</label>
              <input ref={fileRef} type='file' accept='image/jpeg,image/png,image/webp' onChange={handleImageUpload} className='text-sm text-[#5F6B7A] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#F6C400] file:text-[#0F1B3D] file:font-medium hover:file:bg-[#e5b500] cursor-pointer' />
              {uploading && <p className='text-sm text-[#5F6B7A]'>업로드 중...</p>}
              {preview && (
                <div className='relative mt-2'>
                  <img src={preview} alt='preview' className='w-full aspect-video object-cover rounded-xl border border-[#E8ECF1]' />
                  <button type='button' onClick={() => { setPreview(null); setForm(f => ({ ...f, thumbnail_url: '' })); if (fileRef.current) fileRef.current.value = '' }} className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg'>삭제</button>
                </div>
              )}
            </div>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='checkbox' checked={form.is_published} onChange={e => setForm({ ...form, is_published: e.target.checked })} className='w-4 h-4 accent-[#F6C400]' />
              <span className='text-sm text-[#0F1B3D]'>공개</span>
            </label>
            {message && <p className='text-sm text-green-600 font-medium'>{message}</p>}
            <div className='flex gap-3'>
              <button type='submit' disabled={loading || uploading} className='bg-[#F6C400] text-[#0F1B3D] font-bold px-8 py-3 rounded-xl hover:bg-[#e5b500] transition disabled:opacity-50'>{loading ? '처리 중...' : editingId ? '수정' : '등록'}</button>
              {editingId && <button type='button' onClick={() => { setEditingId(null); setForm(emptyForm); setPreview(null) }} className='px-8 py-3 rounded-xl border border-[#E8ECF1] text-[#5F6B7A] hover:bg-[#F8F9FA] transition'>취소</button>}
            </div>
          </form>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-[#0F1B3D] font-bold text-xl'>카드 목록 ({cards.length}/12)</h2>
          {cards.length === 0 && <p className='text-[#5F6B7A] text-sm'>등록된 카드가 없습니다.</p>}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {cards.map(card => (
              <div key={card.id} className='bg-white rounded-2xl p-5 border border-[#E8ECF1]'>
                <div className='flex gap-4'>
                  {card.thumbnail_url && <img src={card.thumbnail_url} alt={card.title} className='w-20 h-14 object-cover rounded-lg shrink-0' />}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center gap-2 mb-1'>
                      <span className='text-xs bg-[#F8F9FA] text-[#5F6B7A] px-2 py-0.5 rounded-full'>{card.platform}</span>
                      {card.is_published && <span className='text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full'>공개</span>}
                      <span className='text-xs text-[#5F6B7A]'>#{card.sort_order}</span>
                    </div>
                    <p className='font-bold text-[#0F1B3D] text-sm truncate'>{card.title}</p>
                    <p className='text-[#5F6B7A] text-xs line-clamp-1'>{card.description}</p>
                  </div>
                </div>
                <div className='flex gap-2 mt-3'>
                  <button onClick={() => handleEdit(card)} className='flex-1 text-sm py-1.5 border border-[#E8ECF1] rounded-lg hover:bg-[#F8F9FA] transition'>수정</button>
                  <button onClick={() => handleDelete(card.id)} className='flex-1 text-sm py-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition'>삭제</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 