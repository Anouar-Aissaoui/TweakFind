
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
import { ClientTime } from "@/components/client-time";
import { AppCard } from "@/components/app-card";


export const revalidate = 86400; // ISR: 24h

export async function generateStaticParams() {
  return apps.map(app => ({
    category: app.category.toLowerCase(),
    slug: app.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string, category: string } }): Promise<Metadata> {
  const app = apps.find(a => a.id === params.slug);
  if (!app || app.category.toLowerCase() !== params.category) {
    return {};
  }

  const title = `${app.name} - TweakFind`;
  const description = app.description.slice(0, 155);
  const url = `https://tweak.appsg.site/${app.category.toLowerCase()}/${app.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
    robots: "index,follow",
  };
}

export default async function Page({ params }: { params: { slug: string, category: string } }) {
  const app = apps.find(e => e.id === params.slug);

  if (!app || app.category.toLowerCase() !== params.category) {
    return notFound();
  }
  
  const relatedApps = apps
    .filter(a => a.category === app.category && a.id !== app.id)
    .slice(0, 4);

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: app.category, item: `/${app.category.toLowerCase()}` },
    { name: app.name, item: `/${app.category.toLowerCase()}/${app.id}` }
  ];

  const siteUrl = "https://tweak.appsg.site";

  return (
    <div className="bg-background text-foreground min-h-screen dark">
        <script {...jsonLdScriptProps<WebPage>({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: app.name,
            description: app.description,
            dateModified: app.lastModified
        })} />
        <script {...jsonLdScriptProps<BreadcrumbList>({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: `${siteUrl}${crumb.item === "/" ? "" : crumb.item}`
            }))
        })} />
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
                <header className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                    <Image
                        src={app.media.icon}
                        alt={`${app.name} icon`}
                        width={128}
                        height={128}
                        className="rounded-2xl object-contain border-4 border-border/30 shrink-0"
                        data-ai-hint={app.media.iconHint}
                    />
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold tracking-tighter mb-2 text-primary">{app.name}</h1>
                        <p className="text-lg text-muted-foreground mb-4">{app.description}</p>
                         <Button size="lg">
                            <Download className="mr-2 h-5 w-5" />
                            Install Now
                        </Button>
                    </div>
                </header>

                <section aria-labelledby="key-facts" className="mb-8 p-6 bg-card rounded-lg border border-border/50">
                    <h2 id="key-facts" className="text-2xl font-bold tracking-tight mb-4">Key facts</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <li className="p-4 bg-secondary rounded-lg">
                            <strong className="block text-sm text-muted-foreground">Version</strong>
                            <span className="text-xl font-semibold">{app.facts.version}</span>
                        </li>
                        <li className="p-4 bg-secondary rounded-lg">
                            <strong className="block text-sm text-muted-foreground">Category</strong>
                            <span className="text-xl font-semibold">{app.category}</span>
                        </li>
                         <li className="p-4 bg-secondary rounded-lg">
                            <strong className="block text-sm text-muted-foreground">Last Updated</strong>
                            <ClientTime date={app.lastModified} className="text-xl font-semibold" />
                        </li>
                         <li className="p-4 bg-secondary rounded-lg">
                            <strong className="block text-sm text-muted-foreground">Downloads</strong>
                            <span className="text-xl font-semibold">500k+</span>
                        </li>
                    </ul>
                </section>
                
                <section aria-labelledby="app-description" className="prose prose-invert max-w-none text-foreground">
                    <h2 id="app-description" className="text-2xl font-bold tracking-tight mb-4">About {app.name}</h2>
                    <p>
                        {app.description}
                    </p>
                    <p>
                        With a user-friendly interface and regular updates, {app.name} ensures a smooth and reliable experience. It's designed for easy installation without the need for complex procedures like jailbreaking, making it accessible to a wide audience. Explore the enhanced capabilities and enjoy a premium experience for free.
                    </p>
                </section>
                
                {relatedApps.length > 0 && (
                    <section aria-labelledby="related-apps" className="mt-12">
                        <h2 id="related-apps" className="text-2xl font-bold tracking-tight mb-4">You Might Also Like</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {relatedApps.map((relatedApp) => (
                                <AppCard key={relatedApp.id} app={relatedApp} />
                            ))}
                        </div>
                    </section>
                )}


                <footer className="mt-12 text-center text-muted-foreground text-sm">
                   <p>Last updated <ClientTime date={app.lastModified} /></p>
                </footer>
            </article>
        </div>
    </div>
  );
}
