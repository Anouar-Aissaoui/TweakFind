import { MetadataRoute } from 'next';
import { apps } from '@/lib/apps';

export default function sitemap(): MetadataRoute.Sitemap {
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


  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...categoryUrls,
    ...appUrls,
  ];
}
