"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnnouncementBanner } from "./announcement-banner"
import { Navigation } from "./navigation"

export function SiteHeader() {
  const [bannerVisible, setBannerVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--nav-top",
      bannerVisible ? "44px" : "0px"
    )
  }, [bannerVisible])

  if (pathname?.startsWith('/admin')) return null

  return (
    <>
      <AnnouncementBanner onDismiss={() => setBannerVisible(false)} />
      <Navigation />
    </>
  )
}