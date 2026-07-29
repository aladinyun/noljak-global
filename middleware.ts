import createMiddleware from 'next-intl/middleware'
import { NextResponse, type NextRequest } from 'next/server'
import { routing } from './routing'

const intlMiddleware = createMiddleware(routing)

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
