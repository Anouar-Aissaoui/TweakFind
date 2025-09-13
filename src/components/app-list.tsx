
import type { Entity } from '@/lib/apps';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

type AppListProps = {
  apps: Entity[];
  onInstallClick: (app: Entity) => void;
};

export function AppList({ apps, onInstallClick }: AppListProps) {
  if (apps.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-16">
        <p>No apps found.</p>
        <p className="text-sm">Try a different search or category.</p>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {apps.map((app) => (
        <Link href={`/${app.category.toLowerCase()}/apps/${app.id}`} key={app.id} className="block">
          <div className="flex items-center bg-card p-3 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors">
            <Image
              src={app.media.icon}
              alt={`${app.name} icon`}
              width={48}
              height={48}
              className="rounded-lg object-contain border-2 border-border/30"
              data-ai-hint={app.media.iconHint}
              sizes="(max-width: 768px) 15vw, 5vw"
            />
            <div className="flex-1 ml-4">
              <p className="text-base font-semibold text-foreground">{app.name}</p>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <p className="line-clamp-1">v{app.facts.version}</p>
                  <span className='text-xs'>&middot;</span>
                  <p>{new Date(app.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            <Button className="shrink-0" onClick={(e) => { e.preventDefault(); onInstallClick(app); }}>
              <Download className="mr-2 h-4 w-4" />
              Install
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
}
