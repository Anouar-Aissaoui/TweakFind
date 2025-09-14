import { apps } from '@/lib/apps';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://tweak.appsg.site';

  const appUrls: MetadataRoute.Sitemap = apps.map((app) => ({
    url: `${siteUrl}/${app.category.toLowerCase()}/apps/${app.id}`,
    lastModified: app.lastModified ? new Date(app.lastModified) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const categoryUrls: MetadataRoute.Sitemap = [...new Set(apps.map((app) => app.category))].map((category) => ({
    url: `${siteUrl}/${category.toLowerCase()}/apps`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
  ];

  return [...staticUrls, ...categoryUrls, ...appUrls];
}
