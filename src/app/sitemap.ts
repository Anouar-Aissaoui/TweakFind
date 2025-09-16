
import { apps } from '@/lib/apps';
import { slugify } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://tweak.appsg.site';

  // App Pages: Priority 0.8
  const appUrls: MetadataRoute.Sitemap = apps.map((app) => ({
    url: `${siteUrl}/${slugify(app.category)}/apps/${app.id}`,
    lastModified: app.lastModified ? new Date(app.lastModified) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Category Pages: Priority 0.9
  const categoryUrls: MetadataRoute.Sitemap = [...new Set(apps.map((app) => app.category))].map((category) => ({
    url: `${siteUrl}/${slugify(category)}/apps`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // Static & Legal Pages: Priority 1.0, 0.7, 0.5
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    }
  ];

  return [...staticUrls, ...categoryUrls, ...appUrls];
}
