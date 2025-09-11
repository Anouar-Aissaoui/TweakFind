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
        <div key={app.id} className="flex items-center bg-secondary p-4 rounded-lg border">
          <Image
            src={app.icon}
            alt={`${app.name} icon`}
            width={48}
            height={48}
            className="rounded-lg object-contain"
            data-ai-hint={app.iconHint}
          />
          <div className="flex-1 ml-4">
            <p className="text-base font-semibold text-primary">{app.name}</p>
            <p className="text-sm text-muted-foreground">
              Latest: <b className="font-semibold text-foreground">{app.version}</b>
            </p>
          </div>
          <Button size="sm" onClick={() => onInstallClick(app)}>
            <Download className="mr-2 h-4 w-4" />
            Install
          </Button>
        </div>
      ))}
    </div>
  );
}
