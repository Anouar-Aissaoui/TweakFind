import { apps, type App } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';
import { RecommendedApps } from '@/components/recommended-apps';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pb-28">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-8">
              <Skeleton className="h-8 w-48 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            </div>
          }
        >
          <RecommendedApps />
        </Suspense>
        <HomePageClient apps={apps as App[]} />
      </main>
    </div>
  );
}
