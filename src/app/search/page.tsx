
'use client'

import { useSearchParams } from 'next/navigation';
import { apps } from '@/lib/apps';
import { HomePageClient } from '@/components/home-page-client';
import { useMemo } from 'react';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredApps = useMemo(() => {
    if (!query) return [];
    return apps.filter(app => 
      app.name.toLowerCase().includes(query.toLowerCase()) ||
      app.description.toLowerCase().includes(query.toLowerCase()) ||
      app.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <HomePageClient
        apps={filteredApps}
        displayMode="grid"
        pageTitle={`Search results for "${query}"`}
        showSearch={false}
      />
    </div>
  );
}
