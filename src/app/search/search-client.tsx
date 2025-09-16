
'use client';

import { useSearchParams } from 'next/navigation';
import type { Entity } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';
import { useEffect, useMemo } from 'react';

type SearchClientProps = {
  apps: Entity[];
};

export function SearchClient({ apps }: SearchClientProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      document.title = `Search results for "${query}" | TweakFind`;
    } else {
      document.title = 'Search | TweakFind';
    }
  }, [query]);

  const filteredApps = useMemo(() => {
    if (!query) return [];
    return apps.filter(app => 
      app.name.toLowerCase().includes(query.toLowerCase()) ||
      app.description.toLowerCase().includes(query.toLowerCase()) ||
      app.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [apps, query]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <HomePageClient
        apps={filteredApps}
        displayMode="grid"
        pageTitle={query ? `Search results for "${query}"` : 'Enter a search term'}
        showSearch={false}
      />
    </div>
  );
}
