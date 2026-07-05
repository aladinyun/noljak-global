import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Non-public surfaces: admin console, API routes, and the SSO/auth callback.
      disallow: ['/admin', '/api', '/auth'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
