import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="container mx-auto px-4 pt-6 pb-4 bg-background">
      <div className='text-center mb-6'>
        <h1 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl">
          TweakFind
        </h1>
        <p className="text-muted-foreground text-base mt-2">Your #1 source for tweaked apps, mods, and emulators.</p>
      </div>
       <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for apps..."
          className="w-full bg-secondary border-border pl-9 rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
}
