
import { apps, type Entity } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';
import { Sidebar } from '@/components/sidebar';

export default function Home() {
  const allApps = apps as Entity[];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <main>
          <HomePageClient
            apps={allApps}
          />
        </main>
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
