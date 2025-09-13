
'use client';

import type { Entity } from '@/lib/apps';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

type FeaturedAppsProps = {
  apps: Entity[];
  onInstallClick: (app: Entity) => void;
};

export function FeaturedApps({ apps, onInstallClick }: FeaturedAppsProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground mb-4">
        Featured Apps
      </h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {apps.map((app) => (
            <CarouselItem key={app.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                 <Link href={`/${app.category.toLowerCase()}/apps/${app.id}`} className="block h-full">
                    <div className="flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border/50 aspect-square h-full">
                    <Image
                        src={app.media.icon}
                        alt={`${app.name} icon`}
                        width={64}
                        height={64}
                        className="rounded-lg object-contain mb-3"
                        data-ai-hint={app.media.iconHint}
                        sizes="(max-width: 768px) 25vw, 10vw"
                    />
                    <div className="flex flex-col items-center flex-1 justify-center">
                        <p className="text-sm font-semibold text-center text-foreground truncate w-full">{app.name}</p>
                        <p className="text-xs text-muted-foreground mb-3">v{app.facts.version}</p>
                    </div>
                    <Button size="sm" className="w-full mt-auto" onClick={(e) => { e.preventDefault(); onInstallClick(app); }}>
                        <Download className="mr-2 h-4 w-4" />
                        Install
                    </Button>
                    </div>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
