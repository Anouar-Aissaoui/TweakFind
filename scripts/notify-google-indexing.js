
/**
 * @fileoverview Script to notify Google's Indexing API about updated URLs.
 * This script reads URLs from the generated sitemap and submits them to Google
 * to request faster indexing.
 *
 * Usage:
 * 1. Ensure you have a service account with "Owner" access in Google Search Console.
 * 2. Set the required environment variables in a .env.local file.
 *    - GOOGLE_CLIENT_EMAIL
 *    - GOOGLE_PRIVATE_KEY
 *    - SITE_URL
 * 3. Run `npm run notify:google`
 */

const { google } = require('googleapis');
require('dotenv').config({ path: '.env.local' });

const SCOPES = ['https://www.googleapis.com/auth/indexing'];

// Manually build the sitemap URLs
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

  const staticUrls = [{
    url: SITE_URL,
    lastModified: new Date(),
  }];

  const allUrls = [...staticUrls, ...categoryUrls, ...appUrls].map(u => u.url);
  return allUrls;
}

async function main() {
  console.log('Starting Google Indexing notification script...');

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const siteUrl = process.env.SITE_URL;

  if (!clientEmail || !privateKey || !siteUrl) {
    console.error('Error: Missing Google service account credentials or SITE_URL in .env.local file.');
    console.error('Please set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, and SITE_URL.');
    return;
  }

  const urls = await getSitemapUrls();
  console.log(`Found ${urls.length} URLs to notify Google about.`);

  if (urls.length === 0) {
    console.log('No URLs to process. Exiting.');
    return;
  }

  try {
    const jwtClient = new google.auth.JWT(
      clientEmail,
      null,
      privateKey,
      SCOPES
    );

    await jwtClient.authorize();
    const indexing = google.indexing({ version: 'v3', auth: jwtClient });

    console.log('Submitting URLs to Google Indexing API...');
    const promises = urls.map(async (url) => {
      try {
        const res = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });
        console.log(`[SUCCESS] Submitted: ${url} (Status: ${res.status})`);
      } catch (err) {
        console.error(`[FAILED]  URL: ${url} - ${err.message}`);
      }
    });

    await Promise.all(promises);

    console.log('\nFinished submitting all URLs.');

  } catch (error) {
    console.error('An unexpected error occurred:');
    console.error(error.message);
  }
}

main();
