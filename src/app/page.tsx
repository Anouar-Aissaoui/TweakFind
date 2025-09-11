import { apps, type App } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';

export default function Home() {
  const allApps = apps as App[];

  return (
    <div className="flex flex-col min-h-screen bg-background dark">
      <main className="flex-1 pb-28">
        <HomePageClient
          apps={allApps}
        />
      </main>
    </div>
  );
}
