
import type { Metadata, TemplateString } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});


type AppMetadata = Omit<Metadata, 'title'> & {
  title: string | TemplateString;
};

export async function generateMetadata({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }): Promise<AppMetadata> {
  
  const baseMetadata: AppMetadata = {
    title: {
      default: 'TweakFind: #1 Tweaked App Store for iOS & Android',
      template: '%s | TweakFind',
    },
    description: 'Download tweaked apps, game mods, and emulators. Safe, updated, and no jailbreak required. Your trusted source for TweakFind.',
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
    <html lang="en" className="light">
      <body className={`${ptSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
