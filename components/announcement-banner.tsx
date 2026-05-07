"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-[#0F1B3D] py-3 px-4">
      <div className="w-full flex items-center justify-center relative">
        <Link 
          href="/notice" 
          className="text-white text-sm font-medium text-center hover:underline transition-all"
        >
          Now open in Hanoi, Vietnam — Vinhomes Gardenia
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsVisible(false)
          }}
          className="absolute right-4 text-white/70 hover:text-white transition-colors p-1"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
