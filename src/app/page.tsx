import { apps, type App } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';
import { Header } from '@/components/header';

export default function Home() {
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
