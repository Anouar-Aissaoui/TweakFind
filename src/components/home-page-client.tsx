
'use client';

import { useMemo, useState } from 'react';
import type { Entity, AppCategory } from '@/lib/apps';
import { AppGrid } from './app-grid';
import { Button } from './ui/button';
import Link from 'next/link';
import { Header } from './header';

type HomePageClientProps = {
  apps: Entity[];
  displayMode?: 'sections' | 'grid';
  pageTitle?: string;
  showFeatured?: boolean;
  initialCategory?: AppCategory | 'All';
};

const CATEGORIES_TO_DISPLAY: AppCategory[] = [
  'Games',
  'Apps',
  'Entertainment',
  'Utilities',
  'Social',
  'Emulators',
];

export function HomePageClient({ 
  apps, 
  displayMode = 'sections', 
  pageTitle,
  showFeatured = true, 
  initialCategory = 'All' 
}: HomePageClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = useMemo(() => {
    if (!searchTerm) return apps;
    return apps.filter(app => 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [apps, searchTerm]);

  const appsByCategory = useMemo(() => {
    const grouped: Partial<Record<AppCategory, Entity[]>> = {};
    for (const app of filteredApps) {
      if (!grouped[app.category]) {
        grouped[app.category] = [];
      }
      grouped[app.category]!.push(app);
    }
    return grouped;
  }, [filteredApps]);

  const renderGrid = () => (
    <div className="space-y-8">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {pageTitle && <h1 className="text-3xl font-bold tracking-tighter text-primary mb-4">{pageTitle}</h1>}
      <AppGrid apps={filteredApps} />
    </div>
  );

  const renderSections = () => (
    <div className="space-y-8">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {searchTerm ? (
        <section className="p-4 bg-card rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <AppGrid apps={filteredApps} />
        </section>
      ) : (
        CATEGORIES_TO_DISPLAY.map((category) => {
          const categoryApps = appsByCategory[category];
          if (!categoryApps || categoryApps.length === 0) {
            return null;
          }
          return (
            <section key={category} className="p-4 bg-card rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{category}</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>View More</Link>
                </Button>
              </div>
              <AppGrid apps={categoryApps.slice(0, 9)} />
            </section>
          );
        })
      )}
    </div>
  );
  
  return displayMode === 'grid' ? renderGrid() : renderSections();
}
