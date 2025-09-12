
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, type AppCategory } from "@/lib/apps";
import { HomePageClient } from "@/components/home-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";


const validCategories = [...new Set(apps.map(app => app.category.toLowerCase()))];

export async function generateStaticParams() {
    return validCategories.map(category => ({
        category: category,
    }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
    const categoryParam = params.category.toLowerCase();
    const categoryName = validCategories.find(c => c === categoryParam);

    if (!categoryName) {
        return {};
    }

    const title = `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Apps - TweakFind`;
    const description = `Browse and download the latest tweaked ${categoryName} apps. Safe, updated, and no jailbreak required.`;
    const url = `https://tweak.appsg.site/${categoryParam}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "website" },
    };
}


export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categoryParam = params.category.toLowerCase();
    const categoryName = validCategories.find(c => c === categoryParam) as AppCategory;

    if (!categoryName) {
        return notFound();
    }
    
    const appsForCategory = apps.filter(app => app.category.toLowerCase() === categoryParam);
    const capitalizedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    const breadcrumbs = [
        { name: "Home", item: "/" },
        { name: capitalizedCategory, item: `/${categoryParam}` }
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
                      initialCategory={categoryName}
                      pageTitle={`${capitalizedCategory} Apps`}
                      displayMode="grid"
                    />
                </div>
            </main>
        </div>
    );
}
