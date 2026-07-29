import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ko', 'vi'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false
})

// Legal pages whose body copy exists only in English — the ko/vi URLs served
// byte-identical English content, which Search Console correctly read as duplicates.
// Their prefixed URLs redirect to the unprefixed canonical, so they are also excluded
// from hreflang alternates and listed once in the sitemap.
export const ENGLISH_ONLY_PATHS = ['/privacy-policy', '/terms-of-use']
