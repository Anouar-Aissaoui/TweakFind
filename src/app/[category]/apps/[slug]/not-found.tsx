
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';
import { apps } from '@/lib/apps';
import { AppCard } from '@/components/app-card';

export default function NotFound() {
  // Get a few random apps to suggest
  const suggestedApps = apps.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-12">
      <FileQuestion className="w-24 h-24 text-primary mb-4" />
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">App Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-lg">
        Sorry, we couldn't find the app you're looking for. It might have been moved, deleted, or you may have a typo in the URL.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return to Homepage</Link>
      </Button>

      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight mb-4">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
