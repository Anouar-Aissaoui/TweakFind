
'use client';

import { useMemo, useState } from 'react';
import type { Entity, AppCategory } from '@/lib/apps';
import { AppGrid } from './app-grid';
import { Button } from './ui/button';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

type HomePageClientProps = {
  apps: Entity[];
  displayMode?: 'sections' | 'grid';
  pageTitle?: string;
  showSearch?: boolean;
};

const CATEGORIES_TO_DISPLAY: AppCategory[] = [
  'Games',
  'Entertainment',
  'Social',
  'Utilities',
  'Emulators',
  'Developer Tools',
];

export function HomePageClient({ 
  apps, 
  displayMode = 'sections', 
  pageTitle,
  showSearch = false,
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

  const searchBar = (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search in this category..."
        className="w-full bg-secondary border-border pl-9 rounded-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );

  const renderGrid = () => (
    <div className="space-y-8">
      {pageTitle && (
          <div className='text-center mb-6 pt-6'>
            <h1 className="text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
              {pageTitle}
            </h1>
          </div>
      )}
      {showSearch && searchBar}
      <AppGrid apps={filteredApps} />
    </div>
  );

  const renderSections = () => (
    <div className="space-y-8">
       <div className='text-center mb-6 pt-6'>
        <h1 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
          TweakFind
        </h1>
        <p className="text-muted-foreground text-base mt-2">Your #1 source for tweaked apps, mods, and emulators.</p>
      </div>

      {searchTerm ? (
        <section className="p-4 bg-secondary/50 rounded-lg border border-border">
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
            <section key={category} className="p-4 bg-secondary/50 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{category}</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/${slugify(category)}/apps`}>View More</Link>
                </Button>
              </div>
              <AppGrid apps={categoryApps.slice(0, 4)} />
            </section>
          );
        })
      )}
    </div>
  );
  
  return displayMode === 'grid' ? renderGrid() : renderSections();
}
