import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/metadata"
import { Plus_Jakarta_Sans, Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { AnnouncementBanner } from "@/components/announcement-banner"
import "../globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// Base metadata for the locale segment. This resolves the homepage (`/`) and acts as the
// per-locale default; nested route layouts override title/description/alternates per page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata('home', locale)
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AnnouncementBanner />
          <Navigation />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
