
'use client';

import type { Entity } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';

type SearchClientProps = {
  filteredApps: Entity[];
  query: string;
};

export function SearchClient({ filteredApps, query }: SearchClientProps) {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <HomePageClient
        initialApps={filteredApps}
        displayMode="grid"
        pageTitle={query ? `Search results for "${query}"` : 'Enter a search term'}
        showSearch={false}
      />
    </div>
  );
}
