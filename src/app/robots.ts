import type { MetadataRoute } from 'next'
 
export function GET() {
  const robots: MetadataRoute.Robots = {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*?q=*'],
    },
    sitemap: 'https://tweak.appsg.site/sitemap.xml',
  };

  const robotsTxt = `User-agent: ${robots.rules.userAgent}
Allow: ${robots.rules.allow}
Disallow: ${Array.isArray(robots.rules.disallow) ? robots.rules.disallow.join('\nDisallow: ') : robots.rules.disallow}

Sitemap: ${robots.sitemap}`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
