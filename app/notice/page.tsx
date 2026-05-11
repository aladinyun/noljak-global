'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

interface Notice {
  id: string
  title: string
  body: string
  image_url: string | null
  created_at: string
}

export default function NoticePage() {
  const router = useRouter()
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => {
        setNotices(data.notices || [])
        setLoading(false)
      })
  }, [])

  return (
    <div className='min-h-screen bg-white'>
      <Navigation />
      <main className='max-w-3xl mx-auto px-6 pt-40 py-20'>
        <h1 className='text-4xl font-bold text-[#0F1B3D] mb-2'>Notice</h1>
        <p className='text-[#5F6B7A] text-lg mb-12'>NOLJAK Announcements</p>

        {loading && <p className='text-[#5F6B7A]'>불러오는 중...</p>}
        {!loading && notices.length === 0 && (
          <p className='text-[#5F6B7A]'>등록된 공지가 없습니다.</p>
        )}

        <div className='flex flex-col divide-y divide-[#E8ECF1]'>
          {notices.map(notice => (
            <div
              key={notice.id}
              onClick={() => router.push(`/notice/${notice.id}`)}
              className='py-8 cursor-pointer hover:opacity-70 transition flex gap-6 items-start'
            >
              {notice.image_url && (
                <div className='w-32 h-20 rounded-xl overflow-hidden shrink-0'>
                  <img
                    src={notice.image_url}
                    alt={notice.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              )}
              <div className='flex-1'>
                <p className='text-[#5F6B7A] text-sm mb-2'>
                  {new Date(notice.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h2 className='text-[#0F1B3D] text-xl font-bold mb-2'>{notice.title}</h2>
                <p className='text-[#5F6B7A] text-sm line-clamp-2'>{notice.body}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}