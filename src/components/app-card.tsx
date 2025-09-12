
import type { Entity } from '@/lib/apps';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

type AppCardProps = {
  app: Entity;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/apps/${app.id}`} className="block h-full">
      <div className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border/50 aspect-square h-full hover:bg-secondary/50 transition-colors">
        <Image
          src={app.media.icon}
          alt={`${app.name} icon`}
          width={64}
          height={64}
          className="rounded-lg object-contain mb-3"
          data-ai-hint={app.media.iconHint}
        />
        <div className="flex flex-col items-center flex-1 justify-center">
          <p className="text-sm font-semibold text-center text-foreground truncate w-full">{app.name}</p>
          <p className="text-xs text-muted-foreground mb-3">v{app.facts.version}</p>
        </div>
        <Button size="sm" className="w-full mt-auto">
          <Download className="mr-2 h-4 w-4" />
          Install
        </Button>
      </div>
    </Link>
  );
}
