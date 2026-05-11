"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

export function AnnouncementBanner() {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [banner, setBanner] = useState<{ id: string; banner_text: string } | null>(null)

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => {
        const found = data.notices?.find((n: any) => n.is_banner && n.banner_text)
        if (found) setBanner({ id: found.id, banner_text: found.banner_text })
      })
  }, [])

  if (!isVisible || !banner) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-[#F6C400] py-3 px-4">
      <div className="w-full flex items-center justify-center relative">
        <button
          onClick={() => router.push(`/notice/${banner.id}`)}
          className="text-[#0F1B3D] text-sm font-medium text-center hover:underline transition-all"
        >
          {banner.banner_text}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsVisible(false)
          }}
          className="absolute right-4 text-[#0F1B3D]/70 hover:text-[#0F1B3D] transition-colors p-1"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}