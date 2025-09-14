import { apps } from '@/lib/apps';

export async function GET() {
  const siteUrl = 'https://tweak.appsg.site';

  const appUrls = apps.map((app) => ({
    url: `${siteUrl}/${app.category.toLowerCase()}/apps/${app.id}`,
    lastModified: app.lastModified ? new Date(app.lastModified) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const categoryUrls = [...new Set(apps.map((app) => app.category))].map((category) => ({
    url: `${siteUrl}/${category.toLowerCase()}/apps`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
  ${categoryUrls
    .map(
      (cat) => `
  <url>
    <loc>${cat.url}</loc>
    <lastmod>${cat.lastModified.toISOString()}</lastmod>
    <changefreq>${cat.changeFrequency}</changefreq>
    <priority>${cat.priority}</priority>
  </url>
  `
    )
    .join('')}
  ${appUrls
    .map(
      (app) => `
  <url>
    <loc>${app.url}</loc>
    <lastmod>${app.lastModified.toISOString()}</lastmod>
    <changefreq>${app.changeFrequency}</changefreq>
    <priority>${app.priority}</priority>
  </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
