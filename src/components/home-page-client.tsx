
'use client';

import { useState, useMemo } from 'react';
import type { App, AppCategory } from '@/lib/apps';
import { Header } from './header';
import { AppList } from './app-list';
import { BottomNav } from './bottom-nav';
import { InstallationModal } from './installation-modal';
import { FeaturedApps } from './featured-apps';

type HomePageClientProps = {
  apps: App[];
};

export function HomePageClient({ apps }: HomePageClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<AppCategory>('Apps');
  const [modalApp, setModalApp] = useState<App | null>(null);

  const featuredApps = useMemo(() => apps.slice(0, 5), [apps]);

  const filteredApps = useMemo(() => {
    let appsToFilter = apps;
    
    appsToFilter = apps.filter((app) => app.category === activeCategory);

    if (searchTerm) {
      return appsToFilter.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return appsToFilter;
  }, [apps, activeCategory, searchTerm]);
  
  const allApps = useMemo(() => {
    if(searchTerm) {
      return apps.filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    return apps;
  }, [apps, searchTerm]);


  const handleInstallClick = (app: App) => {
    setModalApp(app);
  };

  const showFeatured = searchTerm === '' && activeCategory === 'Apps';

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto px-4 py-2">
         {showFeatured && (
          <section>
            <FeaturedApps apps={featuredApps} onInstallClick={handleInstallClick} />
            <h2 className="text-xl font-bold tracking-tight text-foreground mt-6 mb-4">
              All Apps
            </h2>
          </section>
        )}
        <AppList apps={showFeatured ? allApps : filteredApps} onInstallClick={handleInstallClick} />
      </div>
      <BottomNav
        activeCategory={activeCategory}
        setCategory={setActiveCategory}
      />
      <InstallationModal app={modalApp} onClose={() => setModalApp(null)} />
    </>
  );
}
