'use client'
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import type { AppCategory } from '@/lib/apps';
import { search } from '@/app/actions';

const mainCategories: AppCategory[] = ['Games', 'Entertainment', 'Social', 'Utilities'];

export function Header() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    // Sync search term from URL query param
    setSearchTerm(searchParams.get('q') || '');
  }, [searchParams]);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block text-lg">TweakFind</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {mainCategories.map(category => (
                <Link 
                    key={category} 
                    href={`/${slugify(category)}/apps`}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                    {category}
                </Link>
            ))}
             <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
             <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
           <div className="w-full flex-1 md:w-auto md:flex-none">
             <form action={search}>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        name="q"
                        placeholder="Search for apps..."
                        className="w-full bg-secondary border-border pl-9 md:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
              </form>
           </div>
        </div>
      </div>
    </header>
  );
}
