import createMiddleware from 'next-intl/middleware'
import { routing } from './routing'

export default createMiddleware(routing)

export const config = {
  // Run i18n routing on app pages only. Explicitly skip API/admin routes, Next.js
  // internals, and metadata/static files so `/robots.txt` and `/sitemap.xml` are served
  // by their route handlers instead of being rewritten to the localized homepage.
  // The `.*\\..*` clause already excludes any path containing a dot (favicon.ico, images,
  // robots.txt, sitemap.xml); robots/sitemap are also named for clarity.
  matcher: ['/((?!api|admin|_next|_vercel|robots\\.txt|sitemap\\.xml|.*\\..*).*)']
}
