"use client"

const programs = [
  {
    name: "CreKiC Course",
    subtitle: "For Ages 3–5",
    accentColor: "#F6C400",
    steps: [
      { label: "Step 1", description: "Children explore the world through their five senses and expressive play." },
      { label: "Step 2", description: "Creative expression begins with observing real objects up close." },
    ],
  },
  {
    name: "Basic Course",
    subtitle: "For Ages 3 – Elementary",
    accentColor: "#5BB7E8",
    steps: [
      { label: "Step 3", description: "Children develop their own ideas through structured observation projects." },
      { label: "Step 4", description: "Thinking deepens as children connect observation to personal expression." },
    ],
  },
  {
    name: "Creator Course",
    subtitle: "For Ages 7+",
    accentColor: "#FF8A65",
    steps: [
      { label: "Step 5", description: "Multi-layered creative projects expand thinking and artistic expression." },
      { label: "Step 6", description: "Children design and present their own original creative works." },
    ],
  },
]

export function ProgramPreview() {
  return (
    <section id="programs" className="bg-[#FFFDF5] py-[120px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        {/* Row 1 — Headline */}
        <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] text-center leading-tight max-w-4xl text-balance">
          From age 3 to elementary — build creativity with 6 years of structured curriculum!
        </h2>

        {/* Row 2 — Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {programs.map((program) => (
            <div
              key={program.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* Top Accent Bar */}
              <div
                className="h-2 w-full"
                style={{ backgroundColor: program.accentColor }}
              />

              <div className="p-6">
                {/* Program Label */}
                <h3 className="font-heading font-bold text-[#0F1B3D] text-xl mb-1">
                  {program.name}
                </h3>
                <p className="font-sans text-[#5F6B7A] text-sm mb-6">
                  {program.subtitle}
                </p>

                {/* Step Cards — Horizontal Layout */}
                <div className="grid grid-cols-2 gap-4">
                  {program.steps.map((step) => (
                    <div
                      key={step.label}
                      className="rounded-xl overflow-hidden"
                    >
                      {/* Image Placeholder */}
                      <div className="bg-gray-200 h-24 w-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Image</span>
                      </div>
                      {/* Step Info */}
                      <div className="bg-gray-50 p-3">
                        <p className="font-heading font-semibold text-[#0F1B3D] text-sm mb-1">
                          {step.label}
                        </p>
                        <p className="font-sans text-[#5F6B7A] text-[13px] leading-snug">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 — Supporting Message */}
        <p className="font-sans text-[#5F6B7A] text-base md:text-lg text-center max-w-[680px] leading-relaxed">
          Experience Noljak&apos;s curriculum — beginning with all five senses, observing the world, and designing it through art.
        </p>
      </div>
    </section>
  )
}
