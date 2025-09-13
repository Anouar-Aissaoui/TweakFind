
import type { Metadata, TemplateString } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


type AppMetadata = Omit<Metadata, 'title'> & {
  title: string | TemplateString;
};

export async function generateMetadata({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }): Promise<AppMetadata> {
  
  const siteUrl = "https://tweak.appsg.site";
  const ogImage = "https://i.imgur.com/rq3p0eE.png";
  const title = "TweakFind: #1 Tweaked App Store for iOS & Android";
  const description = "Download tweaked apps, game mods, and emulators. Safe, updated, and no jailbreak required. Your trusted source for TweakFind.";


  const baseMetadata: AppMetadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s | TweakFind',
    },
    description: description,
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
  };
  
  searchParams = searchParams || {};
  const hasSearchParams = Object.keys(searchParams).length > 0;

  if (hasSearchParams) {
    baseMetadata.robots = {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: false,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    };
  }

  return baseMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
