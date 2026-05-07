import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-svh min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-child-observing.jpg"
          alt="A young child wearing a yellow Noljak apron, curiously observing a real squid with both hands in a warm classroom setting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight tracking-tight font-[var(--font-heading)] animate-fade-in-up text-balance">
            Learning begins with real experience.
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg md:text-xl text-white/90 italic max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:100ms]">
            {`"Children observe real objects, build their own ideas, and express them through drawing and making."`}
          </p>

          {/* Attribution */}
          <p className="mt-4 text-sm text-white/80 animate-fade-in-up [animation-delay:200ms]">
            — SunKyung Jang, Founder
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:300ms]">
            <Button
              asChild
              size="lg"
              className="bg-[#F6C400] hover:bg-[#0F1B3D] text-[#0F1B3D] hover:text-[#F6C400] font-bold px-8 py-6 text-base rounded-lg transition-all duration-300"
            >
              <Link href="#programs">Explore Programs</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-text-navy font-semibold px-8 py-6 text-base rounded-lg transition-all duration-300 bg-transparent"
            >
              <Link href="#what-is-noljak">Discover Philosophy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
