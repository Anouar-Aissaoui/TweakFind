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

export const metadata: AppMetadata = {
  title: {
    default: 'TweakFind: #1 Tweaked App Store for iOS & Android',
    template: '%s | TweakFind',
  },
  description: 'Download tweaked apps, game mods, and emulators. Safe, updated, and no jailbreak required. Your trusted source for TweakFind.',
};

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
