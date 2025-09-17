
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
      <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 rounded-lg border border-border aspect-square h-full group-hover:border-primary/80 group-hover:bg-secondary transition-colors">
        <Image
          src={app.media.icon}
          alt={`${app.name} icon`}
          width={64}
          height={64}
          className="rounded-lg object-contain mb-3"
          data-ai-hint={app.media.iconHint}
          sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
          placeholder="blur"
          blurDataURL={app.media.blurDataURL}
          unoptimized={app.media.unoptimized}
        />
        <div className="flex flex-col items-center flex-1 justify-center">
          <p className="text-sm font-semibold text-center text-foreground truncate w-full">{app.name}</p>
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
