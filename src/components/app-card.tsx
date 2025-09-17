
import type { Entity } from '@/lib/apps';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

type AppCardProps = {
  app: Entity;
};

export function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/${slugify(app.category)}/apps/${app.id}`} className="block h-full group transition-transform duration-200 ease-in-out hover:-translate-y-1 active:scale-95">
      <div className="flex flex-col items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border aspect-square h-full group-hover:border-primary/80 group-hover:bg-secondary transition-colors">
        <div className="relative w-16 h-16 aspect-square">
          <Image
            src={app.media.icon}
            alt={`${app.name} icon`}
            fill
            sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
            className="rounded-lg object-contain"
            data-ai-hint={app.media.iconHint}
            unoptimized={app.media.unoptimized}
            blurDataURL={app.media.blurDataURL}
            placeholder="blur"
          />
        </div>
        <div className="flex flex-col items-center flex-1 justify-center text-center">
          <p className="text-sm font-semibold text-foreground truncate w-full">{app.name}</p>
          <p className="text-xs text-muted-foreground mb-3">v{app.facts.version}</p>
        </div>
        <Button size="sm" className="w-full mt-auto" tabIndex={-1}>
          <Download className="mr-2 h-4 w-4" />
          Install
        </Button>
      </div>
    </Link>
  );
}
