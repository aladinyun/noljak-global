import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { template: `%s | ${SITE_NAME}`, default: SITE_NAME },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
