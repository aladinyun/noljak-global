import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { ENGLISH_ONLY_PATHS, routing } from './routing'

const intlMiddleware = createMiddleware(routing)

// Prefixed URL -> unprefixed canonical, for pages that only exist in English.
const ENGLISH_ONLY_REDIRECTS = new Map(
  routing.locales
    .filter((locale) => locale !== routing.defaultLocale)
    .flatMap((locale) => ENGLISH_ONLY_PATHS.map((path) => [`/${locale}${path}`, path]))
)

// Stale external links point at /about, a route this app never had. Redirect to its
// closest semantic match, keeping the locale prefix so ko/vi visitors land on a
// translation rather than English.
const ABOUT_REDIRECTS = new Map(
  routing.locales.map((locale) => {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
    return [`${prefix}/about`, `${prefix}/what-is-noljak`]
  })
)

// First-time visitors get routed to their country's language automatically.
// Skipped once a locale is explicitly saved (NEXT_LOCALE cookie) or the URL
// already carries a locale prefix — the user's own choice always wins.
const GEO_LOCALE_MAP: Record<string, string> = {
  KR: 'ko',
  VN: 'vi',
}

// Vercel's default project domain serves the same content as the canonical host, which
// Search Console reports as duplicate pages. Kept as a literal rather than importing
// SITE_URL from `lib/metadata` so middleware doesn't pull `next-intl/server` into the
// edge bundle — the two must stay in sync.
const VERCEL_DEFAULT_HOST = 'noljak-global.vercel.app'
const CANONICAL_ORIGIN = 'https://www.noljak.global'

export default function middleware(request: NextRequest) {
  // Runs before locale routing so the redirect target is the untouched request path.
  if (request.headers.get('host') === VERCEL_DEFAULT_HOST) {
    const { pathname, search } = request.nextUrl
    return NextResponse.redirect(new URL(`${pathname}${search}`, CANONICAL_ORIGIN), 308)
  }

  // Also before locale routing: next-intl would happily serve /ko/privacy-policy, so the
  // prefixed URL has to be intercepted here rather than resolved as a localized route.
  const canonicalPath = ENGLISH_ONLY_REDIRECTS.get(request.nextUrl.pathname)
  if (canonicalPath) {
    const url = request.nextUrl.clone()
    url.pathname = canonicalPath
    return NextResponse.redirect(url, 308)
  }

  // Trailing slash stripped here because inbound stale links use both /about and /about/.
  const aboutTarget = ABOUT_REDIRECTS.get(request.nextUrl.pathname.replace(/\/+$/, ''))
  if (aboutTarget) {
    const url = request.nextUrl.clone()
    url.pathname = aboutTarget
    return NextResponse.redirect(url, 308)
  }
// Geo-based default locale (first visit only; see GEO_LOCALE_MAP above).
  const pathname = request.nextUrl.pathname
  const hasLocalePrefix = routing.locales
    .filter((l) => l !== routing.defaultLocale)
    .some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  const hasSavedLocale = request.cookies.has('NEXT_LOCALE')
  const isEnglishOnly = ENGLISH_ONLY_PATHS.includes(pathname)

  if (!hasLocalePrefix && !hasSavedLocale && !isEnglishOnly) {
    const country = request.headers.get('x-vercel-ip-country')
    const geoLocale = country ? GEO_LOCALE_MAP[country] : undefined
    if (geoLocale) {
      const url = request.nextUrl.clone()
      url.pathname = `/${geoLocale}${pathname}`
      return NextResponse.redirect(url, 307)
    }
  }
  return intlMiddleware(request)
}

export const config = {
  // Run i18n routing on app pages only. Explicitly skip API/admin routes, Next.js
  // internals, and metadata/static files so `/robots.txt` and `/sitemap.xml` are served
  // by their route handlers instead of being rewritten to the localized homepage.
  // The `.*\\..*` clause already excludes any path containing a dot (favicon.ico, images,
  // robots.txt, sitemap.xml); robots/sitemap are also named for clarity.
  matcher: ['/((?!api|admin|_next|_vercel|robots\\.txt|sitemap\\.xml|.*\\..*).*)']
}
