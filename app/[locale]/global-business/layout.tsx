import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata('global-business', locale)
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
