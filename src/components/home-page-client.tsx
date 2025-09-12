
'use client';

import { useMemo } from 'react';
import type { Entity, AppCategory } from '@/lib/apps';
import { AppGrid } from './app-grid';
import { Button } from './ui/button';
import Link from 'next/link';

type HomePageClientProps = {
  apps: Entity[];
};

const CATEGORIES_TO_DISPLAY: AppCategory[] = [
  'Games',
  'Apps',
  'Racing Games',
  'Video Players & Editors',
];

export function HomePageClient({ apps }: HomePageClientProps) {
  const appsByCategory = useMemo(() => {
    const grouped: Partial<Record<AppCategory, Entity[]>> = {};
    for (const app of apps) {
      if (!grouped[app.category]) {
        grouped[app.category] = [];
      }
      grouped[app.category]!.push(app);
    }
    // Manually create "Racing Games" category
    const racingGames = apps.filter(app => app.name.toLowerCase().includes('race') || app.name.toLowerCase().includes('racing') || app.name.toLowerCase().includes('drive'));
    grouped['Racing Games'] = racingGames;

    // Manually create "Video Players & Editors" category
    const videoApps = apps.filter(app => app.category === 'Entertainment' || app.name.toLowerCase().includes('video') || app.name.toLowerCase().includes('player'));
    grouped['Video Players & Editors'] = videoApps;
    
    return grouped;
  }, [apps]);

  return (
    <div className="space-y-8">
      {CATEGORIES_TO_DISPLAY.map((category) => {
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
      })}
    </div>
  );
}
