import Link from "next/link"

const programs = [
  { name: "CreKiC", href: "#programs" },
  { name: "Basic", href: "#programs" },
  { name: "Creator", href: "#programs" },
  { name: "Others", href: "#programs" },
]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/noljakmyart_official/" },
  { name: "Facebook", href: "https://www.facebook.com/share/1CmPXvvFHE/" },
  { name: "YouTube", href: "https://youtube.com/@noljak-my-art-official" },
  { name: "Medium", href: "https://medium.com/@noljak" },
]

export function Footer() {
  return (
    <footer className="bg-[#0F1B3D] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 text-center md:text-left">
          {/* Column 1 — Company Info */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-heading font-bold text-white text-2xl">
                noljak
              </span>
            </div>
            <div className="font-sans text-white text-sm leading-relaxed">
              <p>NOLJAKEDU CO., LTD</p>
              <p>CEO: YUN JUNG WHAN</p>
              <p>214-88-80178</p>
              <p>ZIP CODE 06640</p>
              <p>2F, 40 Saimdang-ro 8-gil, Seocho-gu, Seoul, Republic of Korea</p>
              <p>contact@noljakedu.com</p>
              <p>+82-2-1661-7968</p>
            </div>
            <div className="font-sans text-[#5F6B7A] text-[13px] mt-auto">
              <p>© 2026 NOLJAKEDU CO., LTD. All Rights Reserved.</p>
              <p className="mt-1">
                <Link href="/privacy" className="hover:text-[#F6C400] transition-colors">
                  Privacy Policy
                </Link>
                {" | "}
                <Link href="/terms" className="hover:text-[#F6C400] transition-colors">
                  Terms of Use
                </Link>
              </p>
            </div>
          </div>

          {/* Column 2 — Programs */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-white text-base">
              Programs
            </h3>
            <ul className="flex flex-col gap-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="font-sans text-white text-sm hover:text-[#F6C400] transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-white text-base">
              Follow Us
            </h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-white text-sm hover:text-[#F6C400] transition-colors"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Partner */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-white text-base">
              Partner
            </h3>
            <Link
              href="https://academy.noljak.global"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white text-sm hover:text-[#F6C400] hover:underline transition-colors cursor-pointer"
            >
              Noljak Partner Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
