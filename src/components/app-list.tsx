import type { App } from '@/lib/apps';
import { AppCard } from './app-card';

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} onInstallClick={onInstallClick} />
      ))}
    </div>
  );
}
