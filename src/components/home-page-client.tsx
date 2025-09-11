
'use client';

import { useState, useMemo } from 'react';
import type { App, AppCategory } from '@/lib/apps';
import { Header } from './header';
import { AppList } from './app-list';
import { BottomNav } from './bottom-nav';
import { InstallationModal } from './installation-modal';
import { FeaturedApps } from './featured-apps';

type HomePageClientProps = {
  featuredApps: App[];
  regularApps: App[];
};

export function HomePageClient({ featuredApps, regularApps }: HomePageClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<AppCategory>('Apps');
  const [modalApp, setModalApp] = useState<App | null>(null);

  const allApps = useMemo(() => [...featuredApps, ...regularApps], [featuredApps, regularApps]);

  const filteredApps = useMemo(() => {
    return allApps
      .filter((app) => app.category === activeCategory)
      .filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [allApps, activeCategory, searchTerm]);

  const appsForList = useMemo(() => {
    if (searchTerm === '' && activeCategory === 'Apps') {
        return allApps.filter((app) =>
            app.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return filteredApps;
  }, [allApps, filteredApps, activeCategory, searchTerm]);
  
  const handleInstallClick = (app: App) => {
    setModalApp(app);
  };


  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto px-4 py-2">
         {searchTerm === '' && activeCategory === 'Apps' && (
          <section>
            <FeaturedApps apps={featuredApps} onInstallClick={handleInstallClick} />
            <h2 className="text-xl font-bold tracking-tight text-foreground mt-6 mb-4">
              All Apps
            </h2>
          </section>
        )}
        <AppList apps={appsForList} onInstallClick={handleInstallClick} />
      </div>
      <BottomNav
        activeCategory={activeCategory}
        setCategory={setActiveCategory}
      />
      <InstallationModal app={modalApp} onClose={() => setModalApp(null)} />
    </>
  );
}
