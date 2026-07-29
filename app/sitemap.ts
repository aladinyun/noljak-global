import type { MetadataRoute } from 'next'
import { PUBLIC_PATHS, languageAlternates, urlFor } from '@/lib/metadata'
import { ENGLISH_ONLY_PATHS, routing } from '@/routing'

// One <url> entry per (route × locale). Per Google's sitemap localization spec, every
// localized URL must be its own <url> entry carrying the full, self-referencing set of
// hreflang alternates (itself + the other locales + x-default) — a one-way annotation is
// invalid. So each route emits `locales.length` entries that share the same alternate set
// but differ in <loc>. Dynamic routes (individual notices) are intentionally excluded.
export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_PATHS.flatMap((path): MetadataRoute.Sitemap => {
    // English-only pages get a single entry with no alternates: their ko/vi URLs redirect
    // here, and hreflang pointing at a redirect is invalid.
    if (ENGLISH_ONLY_PATHS.includes(path)) {
      return [{ url: urlFor(routing.defaultLocale, path), changeFrequency: 'monthly', priority: 0.7 }]
    }

    const languages = languageAlternates(path)
    return routing.locales.map((locale) => ({
      url: urlFor(locale, path),
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : 0.7,
      alternates: { languages },
    }))
  })
}
