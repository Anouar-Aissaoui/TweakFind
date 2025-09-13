
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { HomePageClient } from "@/components/home-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Best Tweaked Social Apps | TweakFind";
    const description = "Download free Social mods like Instagram++ and Discord Nitro. Get the best tweaked apps on TweakFind.";
    const url = `https://tweak.appsg.site/social/apps`;
    const ogImage = "https://i.imgur.com/rq3p0eE.png";

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { 
            title: "TweakFind: Top Tweaked Social Media Apps",
            description: "Browse our collection of tweaked social apps to unlock premium features and enhance your experience. Free and no jailbreak needed.",
            url, 
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: "TweakFind: Top Tweaked Social Media Apps",
            description: "Browse our collection of tweaked social apps to unlock premium features and enhance your experience. Free and no jailbreak needed.",
            images: [ogImage],
        },
    };
}


export default async function SocialCategoryPage() {
    const appsForCategory = apps.filter(app => app.category.toLowerCase() === 'social');
    
    const breadcrumbs = [
        { name: "Home", item: "/" },
        { name: "Social", item: `/social/apps` }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background dark">
            <main className="flex-1 pb-28">
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

                    <h1 className="text-3xl font-bold tracking-tighter text-primary mb-4">Download Tweaked Social Apps on TweakFind</h1>
                    
                     <HomePageClient
                      apps={appsForCategory}
                      showFeatured={false}
                      initialCategory={"Social"}
                      pageTitle="Tweaked Social Media Apps"
                      displayMode="grid"
                    />
                </div>
            </main>
        </div>
    );
}
