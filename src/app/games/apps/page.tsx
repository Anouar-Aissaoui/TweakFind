
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { HomePageClient } from "@/components/home-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
    const title = "iOS Game Mods & Tweaked Apps (No Jailbreak) - TweakFind";
    const description = "Download the best tweaked games and game mods for iOS & Android. Get unlimited coins, aimbots, and unlocked features with no jailbreak required. Safe and free.";
    const url = `https://tweak.appsg.site/games/apps`;
    const ogImage = "https://i.imgur.com/rq3p0eE.png";

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { 
            title: "TweakFind: #1 for Tweaked iOS & Android Games",
            description: "Browse our library of free game mods. Unlock unlimited resources, aimbots, and premium features without jailbreak.",
            url, 
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: "TweakFind: #1 for Tweaked iOS & Android Games",
            description: "Browse our library of free game mods. Unlock unlimited resources, aimbots, and premium features without jailbreak.",
            images: [ogImage],
        }
    };
}


export default async function GamesCategoryPage() {
    const appsForCategory = apps.filter(app => app.category.toLowerCase() === 'games');
    
    const breadcrumbs = [
        { name: "Home", item: "/" },
        { name: "Games", item: `/games/apps` }
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
                    
                     <HomePageClient
                      apps={appsForCategory}
                      showFeatured={false}
                      initialCategory={"Games"}
                      pageTitle="Game Mods & Tweaked Apps"
                      displayMode="grid"
                    />
                </div>
            </main>
        </div>
    );
}
