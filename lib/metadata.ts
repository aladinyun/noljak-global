import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/routing'

export const SITE_URL = 'https://www.noljak.global'
export const SITE_NAME = 'Noljak Global'

/**
 * Per-route metadata source. Title/description are pulled from the page's own
 * translated i18n copy (namespace + key) so every locale gets its own wording.
 * Utility pages without translated copy fall back to a literal string that matches
 * what the page actually renders.
 */
type RouteMeta = {
  path: string
  ns?: string
  titleKey?: string
  descKey?: string
  title?: string
  description?: string
}

export const ROUTES: Record<string, RouteMeta> = {
  home: { path: '/', ns: 'hero', titleKey: 'tagline', descKey: 'sub' },
  'what-is-noljak': { path: '/what-is-noljak', ns: 'whatIsNoljakPage', titleKey: 'headline', descKey: 'whyArtSub' },
  crekic: { path: '/programs/crekic', ns: 'crekicPage', titleKey: 'heroTitle', descKey: 'whatDesc' },
  basic: { path: '/programs/basic', ns: 'basicPage', titleKey: 'heroTitle', descKey: 'whatDesc' },
  creator: { path: '/programs/creator', ns: 'creatorPage', titleKey: 'heroTitle', descKey: 'whatDesc' },
  others: { path: '/programs/others', ns: 'othersPage', titleKey: 'heroTitle', descKey: 'heroDesc' },
  philosophy: { path: '/programs/philosophy', ns: 'philosophyPage', titleKey: 'thinkingObsTitle', descKey: 'goldenTimeDesc' },
  'now-noljak': { path: '/now-noljak', ns: 'nowNoljak', titleKey: 'subtitle', descKey: 'description' },
  'find-center': { path: '/find-center', ns: 'findCenterPage', titleKey: 'hero', descKey: 'heroSub' },
  'global-business': { path: '/global-business', ns: 'globalBusiness', titleKey: 'hero', descKey: 'heroSub' },
  notice: { path: '/notice', title: 'Notice', description: 'NOLJAK Announcements' },
  'privacy-policy': { path: '/privacy-policy', ns: 'footer', titleKey: 'privacy', descKey: 'privacy' },
  'terms-of-use': { path: '/terms-of-use', ns: 'footer', titleKey: 'terms', descKey: 'terms' },
}

/** All public paths, used by the sitemap. */
export const PUBLIC_PATHS = Object.values(ROUTES).map((r) => r.path)

/** Locale URL prefix under `localePrefix: 'as-needed'` (default locale has no prefix). */
function localePrefix(locale: string): string {
  return locale === routing.defaultLocale ? '' : `/${locale}`
}

/** Absolute URL for a given locale + path (no-trailing-slash except the root). */
export function urlFor(locale: string, path: string): string {
  const prefix = localePrefix(locale)
  if (path === '/') return prefix === '' ? `${SITE_URL}/` : `${SITE_URL}${prefix}`
  return `${SITE_URL}${prefix}${path}`
}

/** hreflang alternates map (one entry per locale plus x-default → default locale). */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) languages[l] = urlFor(l, path)
  languages['x-default'] = urlFor(routing.defaultLocale, path)
  return languages
}

/** Build per-page, per-locale metadata (title, description, canonical, hreflang, OG). */
export async function buildMetadata(routeKey: keyof typeof ROUTES, locale: string): Promise<Metadata> {
  const r = ROUTES[routeKey]
  let title = r.title
  let description = r.description

  if (r.ns) {
    const t = await getTranslations({ locale, namespace: r.ns })
    if (r.titleKey) title = t(r.titleKey)
    if (r.descKey) description = t(r.descKey)
  }

  const canonical = urlFor(locale, r.path)
  const languages = languageAlternates(r.path)

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title: title ?? SITE_NAME,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale,
      type: 'website',
    },
  }
}
