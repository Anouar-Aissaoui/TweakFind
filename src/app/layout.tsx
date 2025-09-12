
import type { Metadata, TemplateString } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


type AppMetadata = Omit<Metadata, 'title'> & {
  title: string | TemplateString;
};

export async function generateMetadata({ searchParams = {} }: { searchParams?: { [key: string]: string | string[] | undefined } }): Promise<AppMetadata> {
  
  const baseMetadata: AppMetadata = {
    title: {
      default: 'TweakFind: #1 Tweaked App Store for iOS & Android',
      template: '%s | TweakFind',
    },
    description: 'Download tweaked apps, game mods, and emulators. Safe, updated, and no jailbreak required. Your trusted source for TweakFind.',
  };

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
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
