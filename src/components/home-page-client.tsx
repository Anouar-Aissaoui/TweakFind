
'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Entity, AppCategory } from '@/lib/apps';
import { Header } from './header';
import { AppList } from './app-list';
import { BottomNav } from './bottom-nav';
import { InstallationModal } from './installation-modal';
import { FeaturedApps } from './featured-apps';
import { useRouter } from 'next/navigation';


type HomePageClientProps = {
  apps: Entity[];
  showFeatured?: boolean;
  initialCategory?: AppCategory;
};

export function HomePageClient({ apps, showFeatured = true, initialCategory = 'Apps' }: HomePageClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<AppCategory>(initialCategory);
  const [modalApp, setModalApp] = useState<Entity | null>(null);

  useEffect(() => {
    if (initialCategory !== activeCategory) {
      router.push(`/${activeCategory.toLowerCase()}`);
    }
  }, [activeCategory, initialCategory, router]);

  const featuredApps = useMemo(() => apps.filter(a => a.category === 'Apps').slice(0, 5), [apps]);

  const filteredApps = useMemo(() => {
    let appsToFilter = apps;
    
    // In a category page context, `apps` are already filtered.
    // In homepage context, we filter by activeCategory.
    if (showFeatured) {
        appsToFilter = apps.filter((app) => app.category === activeCategory);
    }
    
    if (searchTerm) {
      return appsToFilter.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return appsToFilter;
  }, [apps, activeCategory, searchTerm, showFeatured]);
  
  const allApps = useMemo(() => {
    if(searchTerm) {
      return apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    // on the main page, `apps` is all apps. We want to show everything under the "All Apps" header
    return apps;
  }, [apps, searchTerm]);


  const handleInstallClick = (app: Entity) => {
    setModalApp(app);
  };
  
  const displayApps = showFeatured ? (activeCategory === 'Apps' ? allApps : filteredApps) : filteredApps;

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto px-4 py-2">
         {showFeatured && activeCategory === 'Apps' && (
          <section>
            <FeaturedApps apps={featuredApps} onInstallClick={handleInstallClick} />
            <h2 className="text-xl font-bold tracking-tight text-foreground mt-6 mb-4">
              All Apps
            </h2>
          </section>
        )}
        <AppList apps={displayApps} onInstallClick={handleInstallClick} />
      </div>
      <BottomNav
        activeCategory={activeCategory}
        setCategory={setActiveCategory}
      />
      <InstallationModal app={modalApp} onClose={() => setModalApp(null)} />
    </>
  );
}
