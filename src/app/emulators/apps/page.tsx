
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { HomePageClient } from "@/components/home-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Best Tweaked Emulators Apps | TweakFind";
    const description = "Download free Emulators mods like PPSSPP and Delta++. Get the best tweaked apps on TweakFind.";
    const url = `https://tweak.appsg.site/emulators/apps`;
    const ogImage = "https://i.imgur.com/rq3p0eE.png";

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { 
            title: "TweakFind: #1 for iOS & Android Emulators",
            description: "Play your favorite retro games on the go. Browse our library of free, no-jailbreak emulators for popular consoles.",
            url, 
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: "TweakFind: #1 for iOS & Android Emulators",
            description: "Play your favorite retro games on the go. Browse our library of free, no-jailbreak emulators for popular consoles.",
            images: [ogImage],
        }
    };
}


export default async function EmulatorsCategoryPage() {
    const appsForCategory = apps.filter(app => app.category.toLowerCase() === 'emulators');
    
    const breadcrumbs = [
        { name: "Home", item: "/" },
        { name: "Emulators", item: `/emulators/apps` }
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
                    
                    <h1 className="text-3xl font-bold tracking-tighter text-primary mb-4">Download Tweaked Emulators Apps on TweakFind</h1>

                     <HomePageClient
                      apps={appsForCategory}
                      showFeatured={false}
                      initialCategory={"Emulators"}
                      pageTitle="iOS & Android Emulators"
                      displayMode="grid"
                    />
                </div>
            </main>
        </div>
    );
}
