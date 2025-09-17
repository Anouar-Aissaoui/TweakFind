
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
import { slugify } from '@/lib/utils';

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
                 <Link href={`/${slugify(app.category)}/apps/${app.id}`} className="block h-full">
                    <div className="flex flex-col items-center justify-between p-4 bg-card rounded-lg border border-border/50 aspect-square h-full">
                    <div className="relative w-16 h-16 mb-3">
                      <Image
                          src={app.media.icon}
                          alt={`${app.name} featured icon`}
                          fill
                          sizes="(max-width: 768px) 25vw, 10vw"
                          className="rounded-lg object-contain"
                          data-ai-hint={app.media.iconHint}
                          placeholder="blur"
                          blurDataURL={app.media.blurDataURL}
                          unoptimized={app.media.unoptimized}
                      />
                    </div>
                    <div className="flex flex-col items-center flex-1 justify-center text-center">
                        <p className="text-sm font-semibold text-foreground truncate w-full">{app.name}</p>
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
