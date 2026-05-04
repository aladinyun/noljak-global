import { HeroSection } from "@/components/hero-section"
import { WhatIsNoljak } from "@/components/what-is-noljak"
import { ProgramPreview } from "@/components/program-preview"
import { NowNoljak } from "@/components/now-noljak"
import { FindCenter } from "@/components/find-center"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Section 3: Now Noljak */}
      <NowNoljak />

      {/* Section 4: Find Center / Global Business */}
      <FindCenter />

      {/* Footer */}
      <Footer />
    </main>
  )
}
