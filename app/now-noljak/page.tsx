'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'

type Platform = 'All' | 'Instagram' | 'YouTube' | 'Facebook' | 'Medium' | 'Blog'

interface Card {
  id: string
  title: string
  description: string
  url: string
  thumbnail_url: string | null
  platform: string
}

export default function NowNoljakPage() {
  const [cards, setCards] = useState<Card[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<Platform>('All')

  useEffect(() => {
    fetch('/api/now-noljak')
      .then(res => res.json())
      .then(data => {
        setCards(data.cards || [])
        setLoading(false)
      })
  }, [])

  const filtered = filter === 'All' ? cards : cards.filter(c => c.platform === filter)
  const platforms: Platform[] = ['All', 'Instagram', 'YouTube', 'Facebook', 'Medium', 'Blog']

  return (
    <div className='min-h-screen bg-white'>
      <Navigation />
      <section className='bg-white flex items-center justify-center py-20 pt-[160px]'>
        <div className='max-w-[1200px] mx-auto px-4 md:px-8 text-center'>
          <h1 className='font-heading font-bold text-[#0F1B3D] text-[36px] md:text-[64px] leading-tight mb-6'>
            See Noljak happening around the world.
          </h1>
          <p className='font-sans text-[#5F6B7A] text-lg md:text-xl max-w-[680px] mx-auto'>
            From Korea to Global — real classroom moments of observation, thinking, and creative expression.
          </p>
        </div>
      </section>

      <section className='bg-white py-12 md:py-20'>
        <div className='max-w-[1200px] mx-auto px-4 md:px-8'>
          <div className='flex flex-wrap gap-3 mb-10'>
            {platforms.map(p => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${filter === p ? 'bg-[#F6C400] text-[#0F1B3D]' : 'bg-[#F8F9FA] text-[#5F6B7A] hover:bg-[#F6C400]/20'}`}
              >
                {p}
              </button>
            ))}
          </div>

          {loading && <p className='text-[#5F6B7A]'>불러오는 중...</p>}
          {!loading && filtered.length === 0 && <p className='text-[#5F6B7A]'>등록된 카드가 없습니다.</p>}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filtered.map(card => (
              <Link
                key={card.id}
                href={card.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group bg-white border border-[#E8ECF1] rounded-2xl overflow-hidden hover:shadow-lg transition'
              >
                <div className='aspect-video bg-[#F8F9FA] overflow-hidden'>
                  {card.thumbnail_url ? (
                    <img src={card.thumbnail_url} alt={card.title} className='w-full h-full object-cover group-hover:scale-105 transition duration-300' />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-[#5F6B7A] text-sm'>{card.platform}</div>
                  )}
                </div>
                <div className='p-5'>
                  <span className='text-xs font-medium text-[#F6C400] uppercase tracking-wide'>{card.platform}</span>
                  <h3 className='font-bold text-[#0F1B3D] mt-1 mb-2 line-clamp-2'>{card.title}</h3>
                  <p className='text-[#5F6B7A] text-sm line-clamp-2'>{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}