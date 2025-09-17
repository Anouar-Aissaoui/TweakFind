
import { apps } from '@/lib/apps';
import { SearchClient } from './search-client';
import { Suspense } from 'react';
import type { Metadata } from 'next';

type SearchPageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const query = searchParams.q || '';
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

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient apps={apps} />
    </Suspense>
  );
}
