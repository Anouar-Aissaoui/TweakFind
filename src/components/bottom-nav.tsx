
'use client';

import { AppWindow, Gamepad2, SquareTerminal, Wrench, Blocks, Tv, MessageSquare } from 'lucide-react';
import type { AppCategory } from '@/lib/apps';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const categories: { name: AppCategory; icon: React.ElementType }[] = [
  { name: 'Apps', icon: AppWindow },
  { name: 'Games', icon: Gamepad2 },
  { name: 'Emulators', icon: SquareTerminal },
  { name: 'Tweaks', icon: Wrench },
  { name: 'Utilities', icon: Blocks },
  { name: 'Entertainment', icon: Tv },
  { name: 'Social', icon: MessageSquare },
];

type BottomNavProps = {
  activeCategory: AppCategory;
  setCategory: (category: AppCategory) => void;
};

export function BottomNav({ activeCategory, setCategory }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full bg-card/90 backdrop-blur-sm border-t border-border/50 z-50">
      <div className="max-w-screen-lg mx-auto grid grid-cols-7">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            onClick={() => setCategory(category.name)}
            className={cn(
              'flex flex-col items-center h-16 justify-center p-1 text-xs rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors duration-200',
              activeCategory === category.name
                ? 'text-primary bg-primary/10'
                : 'text-muted-foreground hover:bg-accent/50'
            )}
            aria-pressed={activeCategory === category.name}
          >
            <category.icon
              className={cn(
                'w-5 h-5 mb-1'
              )}
            />
            <span className='truncate'>{category.name}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
}

    
    