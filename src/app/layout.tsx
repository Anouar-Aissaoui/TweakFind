
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
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
