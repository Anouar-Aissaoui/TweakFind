
import { apps } from '@/lib/apps';
import { SearchClient } from './search-client';
import { Suspense } from 'react';

export default function SearchPage() {
  return (
    <Suspense>
      <SearchClient apps={apps} />
    </Suspense>
  );
}
