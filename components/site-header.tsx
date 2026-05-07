"use client"

import { useState, useEffect } from "react"
import { AnnouncementBanner } from "./announcement-banner"
import { Navigation } from "./navigation"

export function SiteHeader() {
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--nav-top",
      bannerVisible ? "44px" : "0px"
    )
  }, [bannerVisible])

  return (
    <>
      <AnnouncementBanner onDismiss={() => setBannerVisible(false)} />
      <Navigation />
    </>
  )
}
