
import type { Entity } from '@/lib/apps';
import Image from 'next/image';
import { Gift, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { cn, slugify } from '@/lib/utils';

type AppGridProps = {
  apps: Entity[];
};

function getPaymentStatus(app: Entity): { text: string; icon: React.ReactNode; className: string } {
    const description = app.description.toLowerCase();
    const name = app.name.toLowerCase();

    if (description.includes('paid') || name.includes('paid')) {
        return { text: 'Paid', icon: <DollarSign className="w-3 h-3" />, className: 'text-amber-500' };
    }
    if (description.includes('unlocked') || name.includes('unlocked') || description.includes('mod')) {
        return { text: 'Unlocked', icon: <Gift className="w-3 h-3" />, className: 'text-green-500' };
    }
     if (description.includes('free') || name.includes('free')) {
        return { text: 'Free', icon: <Gift className="w-3 h-3" />, className: 'text-green-500' };
    }

    // Default case
    const isPaid = (parseInt(app.facts.version, 10) % 2 === 0);
    if(isPaid) {
        return { text: 'Paid', icon: <DollarSign className="w-3 h-3" />, className: 'text-amber-500' };
    }
    
    return { text: 'Unlocked', icon: <Gift className="w-3 h-3" />, className: 'text-green-500' };
}

export function AppGrid({ apps }: AppGridProps) {
  if (apps.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-16">
        <p>No apps found.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {apps.map((app) => {
        const status = getPaymentStatus(app);
        const fileSize = ((app.id.length * 5) + (app.name.length * 3)) % 350 + 50;
        return (
            <Link href={`/${slugify(app.category)}/apps/${app.id}`} key={app.id} className="block group">
                <div className="flex items-center gap-4 p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary/80 hover:bg-accent transition-colors">
                    <Image
                    src={app.media.icon}
                    alt={`${app.name} grid icon`}
                    width={56}
                    height={56}
                    className="rounded-xl object-cover border border-border"
                    data-ai-hint={app.media.iconHint}
                    sizes="(max-width: 768px) 15vw, 5vw"
                    placeholder="blur"
                    blurDataURL={app.media.blurDataURL}
                    unoptimized={app.media.unoptimized}
                    />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-foreground truncate group-hover:text-primary">{app.name}</p>
                        <p className="text-xs text-muted-foreground">v{app.facts.version} • {fileSize} MB</p>
                        <div className={cn("flex items-center gap-1.5 text-xs font-medium mt-1", status.className)}>
                            {status.icon}
                            <span>{status.text}</span>
                        </div>
                    </div>
                </div>
            </Link>
        )
      })}
    </div>
  );
}
