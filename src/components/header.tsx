import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="container mx-auto px-4 pt-6">
      <h1 className="text-4xl font-bold tracking-tight text-center font-headline">
        TweakFind
      </h1>
      <p className="text-center text-muted-foreground mt-2">
        The ultimate tool for tweaked Apps for Android and iOS devices.
      </p>
      <div className="relative mt-6 max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for apps..."
          className="w-full rounded-full pl-10 py-2 shadow-sm focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
}
