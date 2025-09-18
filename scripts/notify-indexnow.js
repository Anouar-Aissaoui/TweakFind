
/**
 * @fileoverview Script to notify IndexNow compliant search engines about updated URLs.
 * This script reads URLs from the generated sitemap and submits them.
 *
 * Usage:
 * 1. Ensure you have your IndexNow API key file in the /public directory.
 * 2. Set the required environment variables in a .env.local file.
 *    - INDEXNOW_API_KEY
 *    - SITE_URL
 * 3. Run `npm run notify:indexnow`
 */

require('dotenv').config({ path: '.env.local' });

// Manually build the sitemap URLs (re-using logic from Google notifier)
async function getSitemapUrls() {
  const SITE_URL = process.env.SITE_URL;
  if (!SITE_URL) {
    console.error('Error: SITE_URL is not defined in your .env.local file.');
    process.exit(1);
  }

  // Need to dynamically import these since they are ES modules
  const { apps } = await import('../src/lib/apps.js');
  const { slugify } = await import('../src/lib/utils.js');
  
  const appUrls = apps.map((app) => ({
    url: `${SITE_URL}/${slugify(app.category)}/apps/${app.id}`,
    lastModified: app.lastModified ? new Date(app.lastModified) : new Date(),
  }));

  const categoryUrls = [...new Set(apps.map((app) => app.category))].map((category) => ({
    url: `${SITE_URL}/${slugify(category)}/apps`,
    lastModified: new Date(),
  }));

  const staticUrls = [
      { url: SITE_URL, lastModified: new Date() },
      { url: `${SITE_URL}/about`, lastModified: new Date() },
      { url: `${SITE_URL}/contact`, lastModified: new Date() },
      { url: `${SITE_URL}/privacy-policy`, lastModified: new Date() },
      { url: `${SITE_URL}/disclaimer`, lastModified: new Date() },
  ];

  const allUrls = [...staticUrls, ...categoryUrls, ...appUrls].map(u => u.url);
  return allUrls;
}

async function main() {
  console.log('Starting IndexNow notification script...');

  const apiKey = process.env.INDEXNOW_API_KEY;
  const siteUrl = process.env.SITE_URL;

  if (!apiKey || !siteUrl) {
    console.error('Error: Missing INDEXNOW_API_KEY or SITE_URL in .env.local file.');
    return;
  }

  const urls = await getSitemapUrls();
  console.log(`Found ${urls.length} URLs to submit.`);

  if (urls.length === 0) {
    console.log('No URLs to process. Exiting.');
    return;
  }

  const host = new URL(siteUrl).hostname;
  const keyLocation = `${siteUrl}/${apiKey}.txt`;

  const payload = {
    host: host,
    key: apiKey,
    keyLocation: keyLocation,
    urlList: urls,
  };
  
  // IndexNow endpoints
  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/IndexNow',
    'https://search.yandex.com/IndexNow'
  ];

  console.log('Submitting URLs to IndexNow endpoints...');

  const promises = endpoints.map(async (endpoint) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log(`[SUCCESS] Submitted to: ${endpoint} (Status: ${response.status})`);
      } else {
        const errorBody = await response.text();
        console.error(`[FAILED]  Endpoint: ${endpoint} (Status: ${response.status}) - ${errorBody}`);
      }
    } catch (err) {
      console.error(`[ERROR]   Could not submit to ${endpoint}: ${err.message}`);
    }
  });

  await Promise.all(promises);
  console.log('\nFinished submitting all URLs to IndexNow.');
}

main();
