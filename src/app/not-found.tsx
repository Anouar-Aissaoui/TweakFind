
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: '404: Page Not Found | TweakFind',
    description: "The page you're looking for could not be found. Return to the TweakFind homepage to browse our apps.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <FileQuestion className="w-24 h-24 text-primary mb-4" />
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
