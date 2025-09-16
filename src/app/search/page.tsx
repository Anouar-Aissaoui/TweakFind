
import { apps } from '@/lib/apps';
import { SearchClient } from './search-client';

export default function SearchPage() {
  return <SearchClient apps={apps} />;
}
