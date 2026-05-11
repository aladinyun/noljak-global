'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

interface Notice {
  id: string
  title: string
  body: string
  cta_link: string | null
  image_url: string | null
  created_at: string
}

export default function NoticeDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [notice, setNotice] = useState<Notice | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => {
        const found = data.notices?.find((n: Notice) => n.id === id)
        setNotice(found || null)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className='min-h-screen bg-white'>
        <Navigation />
        <main className='max-w-3xl mx-auto px-6 py-20'>
          <p className='text-[#5F6B7A]'>불러오는 중...</p>
        </main>
      </div>
    )
  }

  if (!notice) {
    return (
      <div className='min-h-screen bg-white'>
        <Navigation />
        <main className='max-w-3xl mx-auto px-6 py-20'>
          <p className='text-[#5F6B7A]'>공지를 찾을 수 없습니다.</p>
          <button onClick={() => router.push('/notice')} className='mt-4 text-[#F6C400] hover:underline text-sm'>
            ← 목록으로
          </button>
        </main>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-white'>
      <Navigation />
      <main className='max-w-3xl mx-auto px-6 py-20'>
        <button
          onClick={() => router.push('/notice')}
          className='text-[#5F6B7A] hover:text-[#0F1B3D] text-sm mb-8 inline-block transition'
        >
          ← 목록으로
        </button>

        <p className='text-[#5F6B7A] text-sm mb-3'>
          {new Date(notice.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <h1 className='text-[#0F1B3D] text-3xl font-bold mb-8'>{notice.title}</h1>

        {notice.image_url && (
          <div className='w-full aspect-video mb-8 rounded-2xl overflow-hidden'>
            <img
              src={notice.image_url}
              alt={notice.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}

        <p className='text-[#5F6B7A] leading-relaxed whitespace-pre-line text-lg'>
          {notice.body}
        </p>

        {notice.cta_link && (
          <a
            href={notice.cta_link}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-8 bg-[#F6C400] text-[#0F1B3D] font-bold px-6 py-3 rounded-xl hover:bg-[#e5b500] transition'
          >
            자세히 보기 →
          </a>
        )}
      </main>
      <Footer />
    </div>
  )
}