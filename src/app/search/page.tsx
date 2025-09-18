
import { apps } from '@/lib/apps';
import { SearchClient } from './search-client';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type SearchPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams?.q as string || '';
  const title = query ? `Search results for "${query}"` : 'Search';
  const description = `Find the best tweaked apps and mods by searching for "${query}" on TweakFind.`;

  return {
    title: title,
    description: description,
    robots: {
        index: false, // No-index search results pages
        follow: true,
    }
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q as string || '';

  const filteredApps = query 
    ? apps.filter(app => 
        app.name.toLowerCase().includes(query.toLowerCase()) ||
        app.description.toLowerCase().includes(query.toLowerCase()) ||
        app.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Suspense>
      <SearchClient filteredApps={filteredApps} query={query} />
    </Suspense>
  );
}
