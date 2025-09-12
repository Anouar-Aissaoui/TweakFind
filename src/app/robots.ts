import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*?q=*'],
    },
sitemap: 'https://tweak.appsg.site/sitemap.xml',
  }
}
