
import type { Metadata, TemplateString } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { jsonLdScriptProps } from 'react-schemaorg';
import { Organization } from 'schema-dts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


type AppMetadata = Omit<Metadata, 'title'> & {
  title: string | TemplateString;
};

export async function generateMetadata(): Promise<AppMetadata> {
  
  const siteUrl = "https://tweak.appsg.site";
  const ogImage = "https://i.imgur.com/rq3p0eE.png";
  const title = "TweakFind: #1 Tweaked App Store for iOS & Android";
  const description = "Your #1 trusted source for tweaked apps, game mods, and emulators. Get free & unlocked downloads—safe, updated, and no jailbreak required.";


  const baseMetadata: AppMetadata = {
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
    }
  };
  
  return baseMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = "https://tweak.appsg.site";
  const ogImage = "https://i.imgur.com/rq3p0eE.png";

  return (
    <html lang="en" className="dark">
      <head>
        <script
          {...jsonLdScriptProps<Organization>({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'TweakFind',
            url: siteUrl,
            logo: ogImage,
            sameAs: [
              'https://twitter.com/TweakFind',
              'https://www.facebook.com/TweakFind',
            ],
          })}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-secondary/50 border-t border-border mt-12 py-8">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <div className="flex justify-center gap-4 mb-4">
                <Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
                <Link href="/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/disclaimer" className="text-sm hover:text-primary transition-colors">Disclaimer</Link>
              </div>
              <p className="text-xs">&copy; {new Date().getFullYear()} TweakFind. All rights reserved.</p>
              <p className="text-xs mt-2">TweakFind is an independent third-party platform and is not affiliated with, endorsed by, or sponsored by Apple Inc., Google LLC, or any of the app developers featured on this site.</p>
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
