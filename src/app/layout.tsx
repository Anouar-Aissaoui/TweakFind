import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'TweakFind - Your Source for Tweaked Apps & Mods',
  description: 'Discover and install the best tweaked apps, mods, and emulators for iOS and Android. Safe, updated, and no jailbreak required. Your #1 source for TweakFind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
