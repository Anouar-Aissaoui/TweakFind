
import type { Metadata, TemplateString } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import { HeaderWrapper } from '@/components/header-wrapper';
import { Organization, WebSite } from 'schema-dts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = "https://tweak.appsg.site";
const ogImage = "https://i.imgur.com/rq3p0eE.png";
const title = "TweakFind: Your Source for Tweaked Apps & Mods";
const description = "Your trusted source for tweaked apps, game mods, and emulators. Get free, safe, & unlocked downloads for iOS & Android—no jailbreak required.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | TweakFind',
  },
  description: description,
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: 'rss.xml', title: 'TweakFind RSS Feed' }],
    },
  },
  openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: 'TweakFind',
      images: [
          {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: 'TweakFind Hero Image'
          },
      ],
      locale: 'en_US',
      type: 'website',
  },
  twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'apple-touch-icon': ogImage,
  },
  manifest: '/site.webmanifest',
  applicationName: 'TweakFind',
  appleWebApp: {
    capable: true,
    title: 'TweakFind',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  archives: [`${siteUrl}/[category]/apps`],
  category: 'Tweaked Apps',
  classification: 'Mobile Applications',
  keywords: ['tweaked apps', 'ios mods', 'android mods', 'app installer', 'jailbreak free'],
  creator: 'TweakFind Team',
  publisher: 'TweakFind',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const mainCategories = ['Games', 'Entertainment', 'Social', 'Utilities'];
  const organizationSchema: Organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TweakFind',
      url: siteUrl,
      logo: ogImage,
      sameAs: [
        'https://twitter.com/TweakFind',
      ],
  };

  const websiteSchema: WebSite = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: siteUrl,
      name: 'TweakFind',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
  };

  return (
    <html lang="en" className="dark">
      <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <HeaderWrapper />
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-secondary/50 border-t border-border mt-12 py-8 text-muted-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Categories</h4>
                        <ul className="space-y-2">
                           {mainCategories.map(category => (
                             <li key={category}><Link href={`/${slugify(category)}/apps`} className="text-sm hover:text-primary transition-colors">{category}</Link></li>
                           ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground mb-2">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/disclaimer" className="text-sm hover:text-primary transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>
                 <div className="border-t border-border mt-8 pt-6 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} TweakFind. All rights reserved.</p>
                    <p className="mt-2">TweakFind is an independent third-party platform and is not affiliated with, endorsed by, or sponsored by Apple Inc., Google LLC, or any of the app developers featured on this site.</p>
                </div>
            </div>
          </footer>
        </div>
        <Toaster />
        {/* 100% privacy-first analytics */}
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
        <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" alt="" referrerPolicy="no-referrer-when-downgrade"/></noscript>
      </body>
    </html>
  );
}
