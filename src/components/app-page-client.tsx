
'use client';

import { useState } from 'react';
import type { Entity } from '@/lib/apps';
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Download, CheckCircle, ShieldCheck, FileCode, Star, FolderTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppCard } from "@/components/app-card";
import { InstallationModal } from './installation-modal';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { FaqSection } from './faq-section';
import { OptimizedImageBlock } from './optimized-image-block';
import { slugify } from '@/lib/utils';

type Breadcrumb = {
  name: string;
  item: string;
};

type AppPageClientProps = {
  app: Entity;
  relatedApps: Entity[];
  breadcrumbs: Breadcrumb[];
  categories: string[];
};

export function AppPageClient({ app, relatedApps, breadcrumbs, categories }: AppPageClientProps) {
  const [modalApp, setModalApp] = useState<Entity | null>(null);
  const isMobile = useIsMobile();
  const siteUrl = "https://tweak.appsg.site";
  const canonicalUrl = `${siteUrl}/${slugify(app.category)}/apps/${app.id}`;


  const keyFacts = [
    { label: "Version", value: app.facts.version, icon: <Star className="w-4 h-4 mr-2" /> },
    { label: "Category", value: app.category, icon: <FolderTree className="w-4 h-4 mr-2" />, isLink: true, href: `/${slugify(app.category)}/apps` },
    { label: "Compatibility", value: app.facts.compatibility, icon: <CheckCircle className="w-4 h-4 mr-2" /> },
    { label: "Downloads", value: app.facts.downloads, icon: <Download className="w-4 h-4 mr-2" /> },
  ];

  const lastUpdatedDate = new Date(app.lastModified).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <div className="bg-background text-foreground min-h-screen dark">
        <div className="container mx-auto px-4 py-8">
            <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.name} className="flex items-center">
                    {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                    {index === breadcrumbs.length - 1 ? (
                        <span className="font-semibold text-foreground">{crumb.name}</span>
                    ) : (
                        <Link href={crumb.item} className="hover:text-primary transition-colors">{crumb.name}</Link>
                    )}
                    </li>
                ))}
                </ol>
            </nav>

            <article>
                <header className="text-center py-8 md:py-12 px-6 bg-card rounded-lg border border-border/50 mb-8">
                    <div className="flex justify-center mb-4">
                        <OptimizedImageBlock
                            imageSrc={app.media.icon}
                            altDesc={`${app.name} icon`}
                            width={96}
                            height={96}
                            priority={true}
                            contentUrl={canonicalUrl}
                        />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary mb-2">{app.name} (Tweaked)</h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">{app.subhead}</p>
                    <Button size="lg" onClick={() => setModalApp(app)} className="text-lg px-8 py-6">
                        <Download className="mr-2 h-5 w-5" />
                        {isMobile ? 'Install Now (Free)' : `Install ${app.name} Now (Free)`}
                    </Button>
                </header>

                <section aria-labelledby="key-facts" className="mb-12">
                    <h2 id="key-facts" className="text-2xl font-bold tracking-tight mb-4 text-center sr-only">Key facts</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                        {keyFacts.map(fact => (
                            <div key={fact.label} className="p-4 bg-card rounded-lg border border-border/50">
                                <strong className="flex items-center text-sm text-muted-foreground mb-1">
                                    {fact.icon} {fact.label}
                                </strong>
                                {fact.isLink && fact.href ? (
                                    <Link href={fact.href} className="text-lg font-semibold block truncate hover:text-primary transition-colors">
                                        {fact.value}
                                    </Link>
                                ) : (
                                    <span className="text-lg font-semibold block truncate">{fact.value}</span>
                                )}
                            </div>
                        ))}
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-4">
                         <div className="p-4 bg-card rounded-lg border border-border/50">
                            <strong className="flex items-center text-sm text-muted-foreground mb-1">
                                <ShieldCheck className="w-4 h-4 mr-2" /> Safety
                            </strong>
                             <div className="flex flex-wrap gap-1 mt-2">
                                {app.facts.safety.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border/50">
                            <strong className="flex items-center text-sm text-muted-foreground mb-1">
                                <FileCode className="w-4 h-4 mr-2" /> License
                            </strong>
                             <div className="flex flex-wrap gap-1 mt-2">
                                {app.facts.license.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </div>
                    </div>
                </section>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <section aria-labelledby="app-description" className="prose prose-invert max-w-none text-foreground mb-8">
                            <h2 id="app-description" className="text-2xl font-bold tracking-tight mb-2">{app.about.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: app.about.content }} />
                        </section>

                         <section aria-labelledby="app-features" className="mb-8">
                            <h3 id="app-features" className="text-xl font-bold tracking-tight mb-3">{app.features.title}</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                {app.features.items.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <FaqSection title={app.faq.title} items={app.faq.items} />

                    </div>

                     <div>
                        <section aria-labelledby="perfect-for" className="bg-card p-6 rounded-lg border border-border/50 sticky top-8">
                            <h3 id="perfect-for" className="text-lg font-bold tracking-tight mb-3">{app.perfectFor.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {app.perfectFor.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                            </div>
                        </section>
                    </div>
                </div>

                <div className="my-12 text-center">
                    <Button size="lg" onClick={() => setModalApp(app)} className="text-lg px-10 py-6 w-full max-w-md mx-auto">
                        <Download className="mr-2 h-5 w-5" />
                        Install {app.name} Now
                    </Button>
                </div>
                
                {relatedApps.length > 0 && (
                    <section aria-labelledby="related-apps" className="mt-12 border-t border-border/50 pt-8">
                        <h2 id="related-apps" className="text-2xl font-bold tracking-tight mb-4">You Might Also Like</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedApps.map((relatedApp) => (
                                <AppCard key={relatedApp.id} app={relatedApp} />
                            ))}
                        </div>
                    </section>
                )}


                <footer className="mt-12 text-center text-muted-foreground text-sm border-t border-border pt-8">
                   <p>Last updated on {lastUpdatedDate}</p>
                </footer>
            </article>
        </div>
      </div>
      <InstallationModal app={modalApp} onClose={() => setModalApp(null)} />
    </>
  );
}
