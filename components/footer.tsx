"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { startPartnerLogin } from "@/lib/oauth-state"

const programs = [
  { name: "CreKiC", href: "/programs/crekic" },
  { name: "Basic", href: "/programs/basic" },
  { name: "Creator", href: "/programs/creator" },
  { name: "Others", href: "/programs/others" },
]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/noljakmyart_official/" },
  { name: "Facebook", href: "https://www.facebook.com/share/1CmPXvvFHE/" },
  { name: "YouTube", href: "https://youtube.com/@noljak-my-art-official" },
  { name: "Medium", href: "https://medium.com/@noljak" },
]

export function Footer() {
  const t = useTranslations("footer")
  const locale = useLocale()
  const prefix = locale === "en" ? "" : `/${locale}`

  return (
    <footer className="bg-[#0F1B3D] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 text-center md:text-left">
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-heading font-bold text-white text-2xl">noljak</span>
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
              <p>{t("rights")}</p>
              <p className="mt-1">
                <Link href="/privacy-policy" className="hover:text-[#F6C400] transition-colors">{t("privacy")}</Link>
                {" | "}
                <Link href="/terms-of-use" className="hover:text-[#F6C400] transition-colors">{t("terms")}</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-white text-base">{t("programs")}</h3>
            <ul className="flex flex-col gap-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link href={program.href} className="font-sans text-white text-sm hover:text-[#F6C400] transition-colors">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-white text-base">{t("followUs")}</h3>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer" className="font-sans text-white text-sm hover:text-[#F6C400] transition-colors">
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-white text-base">More</h3>
            <Link href={`${prefix}/notice`} className="font-sans text-white text-sm hover:text-[#F6C400] transition-colors">
              Notice
            </Link>
            {/*
              원장 SSO 로그인. 예전에는 state 를 "noljak_sso" 로 고정한 정적 링크였다.
              고정값은 CSRF 방어가 되지 않을 뿐 아니라, 로그인 시작 시점에 브라우저에
              아무것도 저장하지 않아 콜백에서 대조할 값 자체가 없었다
              (그래서 콜백의 state 검증이 "데모용"으로 꺼져 있었다).
              이제 클릭할 때 무작위 state 를 만들어 저장한 뒤 이동한다.
            */}
            <button
              type="button"
              onClick={() => startPartnerLogin(true)}
              className="font-sans text-white text-sm hover:text-[#F6C400] transition-colors text-center md:text-left"
            >
              {t("partnerPortal")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
