"use client"

const countries = [
  { code: "kr", label: "KR" },
  { code: "us", label: "US" },
  { code: "ca", label: "CA" },
  { code: "gb", label: "GB" },
  { code: "de", label: "DE" },
  { code: "au", label: "AU" },
  { code: "cn", label: "CN" },
  { code: "jp", label: "JP" },
  { code: "th", label: "TH" },
  { code: "vn", label: "VN" },
  { code: "ph", label: "PH" },
]

export function WhatIsNoljak() {
  return (
    <section
      id="what-is-noljak"
      className="bg-white py-[120px] px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Row 1 — Headline */}
        <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] text-center leading-tight max-w-4xl">
          Creative education for young children, starting with thinking observation — from Korea, it&apos;s Noljak!
        </h2>

        {/* Row 2 — 3 Illustration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1: From Korea */}
          <div className="bg-[#F5F0E0] rounded-2xl py-[60px] px-8 flex flex-col items-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                {/* Globe */}
                <circle cx="40" cy="40" r="28" stroke="#0F1B3D" strokeWidth="2" fill="none" />
                <ellipse cx="40" cy="40" rx="12" ry="28" stroke="#0F1B3D" strokeWidth="2" fill="none" />
                <line x1="12" y1="40" x2="68" y2="40" stroke="#0F1B3D" strokeWidth="2" />
                <line x1="40" y1="12" x2="40" y2="68" stroke="#0F1B3D" strokeWidth="2" />
                {/* Korean flag accent - red and blue */}
                <circle cx="58" cy="22" r="8" fill="#CD2E3A" />
                <path d="M54 22 Q58 18 62 22 Q58 26 54 22" fill="#0047A0" />
              </svg>
            </div>
            <h3 className="font-heading font-semibold text-[#0F1B3D] text-xl text-center">
              From Korea
            </h3>
            <p className="font-sans text-[#5F6B7A] text-[15px] text-center leading-relaxed">
              A creative education brand born in Korea, now growing globally.
            </p>
          </div>

          {/* Card 2: For Ages 3–7 */}
          <div className="bg-[#F5F0E0] rounded-2xl py-[60px] px-8 flex flex-col items-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                {/* Hands */}
                <path d="M25 50 C20 45 18 35 25 28 C30 23 38 25 40 30" stroke="#0F1B3D" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M55 50 C60 45 62 35 55 28 C50 23 42 25 40 30" stroke="#0F1B3D" strokeWidth="2" fill="none" strokeLinecap="round" />
                {/* Art materials - crayon */}
                <rect x="30" y="40" width="6" height="20" rx="1" fill="#F6C400" stroke="#0F1B3D" strokeWidth="1.5" />
                <polygon points="33,60 30,68 36,68" fill="#F6C400" stroke="#0F1B3D" strokeWidth="1.5" />
                {/* Brush */}
                <rect x="44" y="38" width="5" height="18" rx="1" fill="#E8DCC4" stroke="#0F1B3D" strokeWidth="1.5" />
                <path d="M44 56 L46.5 66 L49 56" fill="#CD2E3A" stroke="#0F1B3D" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className="font-heading font-semibold text-[#0F1B3D] text-xl text-center">
              For Ages 3–7
            </h3>
            <p className="font-sans text-[#5F6B7A] text-[15px] text-center leading-relaxed">
              Designed for young children from age 3 through early elementary.
            </p>
          </div>

          {/* Card 3: Art & Creativity */}
          <div className="bg-[#F5F0E0] rounded-2xl py-[60px] px-8 flex flex-col items-center gap-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20">
                {/* Brush */}
                <rect x="35" y="30" width="10" height="28" rx="2" fill="#E8DCC4" stroke="#0F1B3D" strokeWidth="2" />
                <path d="M35 58 Q40 72 45 58" fill="#F6C400" stroke="#0F1B3D" strokeWidth="2" />
                <rect x="36" y="26" width="8" height="6" rx="1" fill="#0F1B3D" />
                {/* Stars */}
                <polygon points="22,25 24,30 29,30 25,34 27,39 22,36 17,39 19,34 15,30 20,30" fill="#F6C400" stroke="#0F1B3D" strokeWidth="1" />
                <polygon points="58,20 59.5,24 64,24 60.5,27 62,31 58,28.5 54,31 55.5,27 52,24 56.5,24" fill="#F6C400" stroke="#0F1B3D" strokeWidth="1" />
                <polygon points="62,42 63,45 66,45 63.5,47 64.5,50 62,48 59.5,50 60.5,47 58,45 61,45" fill="#F6C400" stroke="#0F1B3D" strokeWidth="0.8" />
              </svg>
            </div>
            <h3 className="font-heading font-semibold text-[#0F1B3D] text-xl text-center">
              Art & Creativity
            </h3>
            <p className="font-sans text-[#5F6B7A] text-[15px] text-center leading-relaxed">
              Art is the medium. Thinking and creating is the goal.
            </p>
          </div>
        </div>

        {/* Row 3 — Country Flags + Supporting Message (reduced gap between them) */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
            {countries.map((country) => (
              <div key={country.code} className="flex flex-col items-center gap-2">
                <img
                  src={`https://flagcdn.com/32x24/${country.code}.png`}
                  width={32}
                  height={24}
                  alt={`${country.label} flag`}
                  className="rounded-sm"
                />
                <span className="font-sans text-[#5F6B7A] text-[12px] text-center">
                  {country.label}
                </span>
              </div>
            ))}
          </div>

          {/* Supporting Message */}
          <p className="font-sans text-[#5F6B7A] text-base md:text-lg text-center max-w-[680px] leading-relaxed">
            Noljak nurtures the creativity of children in 11 countries worldwide through a systematic curriculum grounded in a clear educational philosophy.
          </p>
        </div>
      </div>
    </section>
  )
}
