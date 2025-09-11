import { apps, type App } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';

export default function Home() {
  // Let's feature the first 5 apps for the hero section
  const featuredApps = apps.slice(0, 5) as App[];
  const regularApps = apps.slice(5) as App[];

  return (
    <div className="flex flex-col min-h-screen bg-background dark">
      <main className="flex-1 pb-28">
        <HomePageClient
          featuredApps={featuredApps}
          regularApps={regularApps}
        />
      </main>
    </div>
  );
}
