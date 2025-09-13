
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { HomePageClient } from "@/components/home-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Top iOS Utility App Tweaks (No Jailbreak) - TweakFind";
    const description = "Download powerful utility app tweaks for iOS & Android. Includes file managers, recovery tools, and system tweaks. Safe, free, and no jailbreak required.";
    const url = `https://tweak.appsg.site/utilities/apps`;
    const ogImage = "https://i.imgur.com/rq3p0eE.png";

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { 
            title: "TweakFind: Best Utility App Tweaks for iOS",
            description: "Enhance your device with our library of free utility app tweaks. Find everything from recovery tools to advanced file managers.",
            url, 
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: "TweakFind: Best Utility App Tweaks for iOS",
            description: "Enhance your device with our library of free utility app tweaks. Find everything from recovery tools to advanced file managers.",
            images: [ogImage],
        },
    };
}


export default async function UtilitiesCategoryPage() {
    const appsForCategory = apps.filter(app => app.category.toLowerCase() === 'utilities');
    
    const breadcrumbs = [
        { name: "Home", item: "/" },
        { name: "Utilities", item: `/utilities/apps` }
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
                      initialCategory={"Utilities"}
                      pageTitle="Essential Utility App Tweaks"
                      displayMode="grid"
                    />
                </div>
            </main>
        </div>
    );
}
