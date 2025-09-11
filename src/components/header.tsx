import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="container mx-auto px-4 pt-6 pb-4 bg-background">
      <div className='text-center mb-4'>
        <h1 className="text-3xl font-bold tracking-tighter text-primary">
          TweakFind
        </h1>
        <p className="text-muted-foreground text-sm">Your #1 source for tweaked apps & mods.</p>
      </div>
       <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for apps..."
          className="w-full bg-card border-border/50 pl-9 rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
}
