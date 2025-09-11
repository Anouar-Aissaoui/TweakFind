import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';
import type { App } from '@/lib/apps';

type AppCardProps = {
  app: App;
  onInstallClick: (app: App) => void;
};

export function AppCard({ app, onInstallClick }: AppCardProps) {
  return (
    <Card className="flex flex-col transition-all hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={app.icon}
          alt={`${app.name} icon`}
          width={64}
          height={64}
          className="rounded-lg object-contain"
          data-ai-hint={app.iconHint}
        />
        <div className="flex-1">
          <CardTitle className="text-xl font-bold text-chart-1 font-headline">
            {app.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Latest: <b className="font-semibold text-foreground">{app.version}</b>
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{app.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onInstallClick(app)}>
          <DownloadCloud className="mr-2 h-4 w-4" />
          Install
        </Button>
      </CardFooter>
    </Card>
  );
}
