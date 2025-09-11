'use client';

import { useState, useMemo } from 'react';
import type { App, AppCategory } from '@/lib/apps';
import { Header } from './header';
import { AppList } from './app-list';
import { BottomNav } from './bottom-nav';
import { InstallationModal } from './installation-modal';

type HomePageClientProps = {
  apps: App[];
};

export function HomePageClient({ apps }: HomePageClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<AppCategory>('Apps');
  const [modalApp, setModalApp] = useState<App | null>(null);

  const filteredApps = useMemo(() => {
    return apps
      .filter((app) => app.category === activeCategory)
      .filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [apps, activeCategory, searchTerm]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto px-4 py-2">
        <AppList apps={filteredApps} onInstallClick={setModalApp} />
      </div>
      <BottomNav
        activeCategory={activeCategory}
        setCategory={setActiveCategory}
      />
      <InstallationModal app={modalApp} onClose={() => setModalApp(null)} />
    </>
  );
}
