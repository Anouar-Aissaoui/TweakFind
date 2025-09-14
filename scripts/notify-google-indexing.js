/**
 * @fileoverview Script to notify Google's Indexing API about updated URLs.
 * This script reads URLs from the generated sitemap and submits them to Google
 * to request faster indexing.
 *
 * Usage:
 * 1. Ensure you have a service account with "Owner" access in Google Search Console.
 * 2. Set the required environment variables in a .env.local file.
 *    - GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL
 *    - GOOGLE_INDEXING_PRIVATE_KEY
 * 3. Run `npm run notify:google`
 */

const { google } = require('googleapis');
const { apps } = require('../dist/lib/apps.js');
const { slugify } = require('../dist/lib/utils.js');
require('dotenv').config({ path: '.env.local' });

const SCOPES = ['https://www.googleapis.com/auth/indexing'];
const SITE_URL = 'https://tweak.appsg.site';

// Manually build the sitemap URLs
function getSitemapUrls() {
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

  const serviceAccountEmail = process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_INDEXING_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!serviceAccountEmail || !privateKey) {
    console.error('Error: Missing Google service account credentials in .env.local file.');
    console.error('Please set GOOGLE_INDEXING_SERVICE_ACCOUNT_EMAIL and GOOGLE_INDEXING_PRIVATE_KEY.');
    return;
  }
  
  // First, we need to build the project to get the JS files for apps and utils
  try {
    console.log('Building project to generate necessary files...');
    const { execSync } = require('child_process');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Failed to build the project. Please fix build errors before running this script.', error);
    process.exit(1);
  }

  const urls = getSitemapUrls();
  console.log(`Found ${urls.length} URLs to notify Google about.`);

  if (urls.length === 0) {
    console.log('No URLs to process. Exiting.');
    return;
  }

  try {
    const jwtClient = new google.auth.JWT(
      serviceAccountEmail,
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
