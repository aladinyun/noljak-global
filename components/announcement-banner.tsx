"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative z-[60] w-full bg-[#0F1B3D] py-3 px-4">
      <div className="w-full flex items-center justify-center relative">
        <p className="text-white text-sm font-medium text-center">
          Now open in Hanoi, Vietnam — Vinhomes Gardenia
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white/70 hover:text-white transition-colors p-1"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
