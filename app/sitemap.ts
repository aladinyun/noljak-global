import type { MetadataRoute } from 'next'
import { PUBLIC_PATHS, languageAlternates, urlFor } from '@/lib/metadata'
import { routing } from '@/routing'

// One <url> entry per (route × locale). Per Google's sitemap localization spec, every
// localized URL must be its own <url> entry carrying the full, self-referencing set of
// hreflang alternates (itself + the other locales + x-default) — a one-way annotation is
// invalid. So each route emits `locales.length` entries that share the same alternate set
// but differ in <loc>. Dynamic routes (individual notices) are intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_PATHS.flatMap((path) => {
    const languages = languageAlternates(path)
    return routing.locales.map((locale) => ({
      url: urlFor(locale, path),
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.7,
      alternates: { languages },
    }))
  })
}
