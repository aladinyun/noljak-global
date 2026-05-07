"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

interface AnnouncementBannerProps {
  onDismiss?: () => void
}

export function AnnouncementBanner({ onDismiss }: AnnouncementBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-[#F6C400] py-3 px-4">
      <div className="w-full flex items-center justify-center relative">
        <Link
          href="/notice"
          className="text-[#0F1B3D] text-sm font-medium text-center hover:underline transition-all"
        >
          Now open in Hanoi, Vietnam — Vinhomes Gardenia
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsVisible(false)
            onDismiss?.()
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
