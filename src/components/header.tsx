import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="container mx-auto px-4 pt-4 pb-4 bg-background">
       <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for apps..."
          className="w-full bg-input pl-9"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <h1 className="text-2xl font-bold tracking-tight text-center mt-4">
        OGzilla.org
      </h1>
    </header>
  );
}
