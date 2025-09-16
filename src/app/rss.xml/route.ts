
import { apps } from '@/lib/apps';
import { slugify } from '@/lib/utils';

const SITE_URL = 'https://tweak.appsg.site';

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const sortedApps = [...apps].sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TweakFind - Latest App Updates</title>
    <link>${SITE_URL}</link>
    <description>The latest tweaked apps, game mods, and emulators from TweakFind. Safe, updated, and no jailbreak required.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${sortedApps.map(app => `
      <item>
        <title>${escapeXml(`Download ${app.name} v${app.facts.version} (MOD)`)}</title>
        <link>${SITE_URL}/${slugify(app.category)}/apps/${app.id}</link>
        <guid isPermaLink="true">${SITE_URL}/${slugify(app.category)}/apps/${app.id}</guid>
        <pubDate>${new Date(app.lastModified).toUTCString()}</pubDate>
        <description>${escapeXml(app.subhead)}</description>
        <media:content xmlns:media="http://search.yahoo.com/mrss/" url="${app.media.icon}" medium="image" />
      </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
