import type { App } from '@/lib/apps';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

type AppListProps = {
  apps: App[];
  onInstallClick: (app: App) => void;
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
        <div key={app.id} className="flex items-center bg-card p-3 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors">
          <Image
            src={app.icon}
            alt={`${app.name} icon`}
            width={48}
            height={48}
            className="rounded-lg object-contain border-2 border-border/30"
            data-ai-hint={app.iconHint}
          />
          <div className="flex-1 ml-4">
            <p className="text-base font-semibold text-foreground">{app.name}</p>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
                <p className="line-clamp-1">v{app.version}</p>
                <span className='text-xs'>&middot;</span>
                <p>{formatDistanceToNow(new Date(app.lastModified), { addSuffix: true })}</p>
            </div>
          </div>
          <Button className="shrink-0" onClick={() => onInstallClick(app)}>
            <Download className="mr-2 h-4 w-4" />
            Install
          </Button>
        </div>
      ))}
    </div>
  );
}
