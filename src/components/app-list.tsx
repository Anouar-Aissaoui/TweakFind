import type { App } from '@/lib/apps';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

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
            <p className="text-sm text-muted-foreground line-clamp-1">
              {app.description}
            </p>
          </div>
          <Button size="icon" variant="ghost" className="bg-primary/10 text-primary hover:bg-primary/20 shrink-0" onClick={() => onInstallClick(app)}>
            <Download className="h-4 w-4" />
            <span className="sr-only">Install</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
