
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, type AppCategory } from "@/lib/apps";
import { HomePageClient } from "@/components/home-page-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { slugify } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";

export const revalidate = 3600; // ISR: Revalidate once every hour

const validCategories = [...new Set(apps.map(app => slugify(app.category)))];

export async function generateStaticParams() {
    return validCategories.map(category => ({
        category: category,
    }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
    const categorySlug = params.category;
    const appCategory = apps.find(app => slugify(app.category) === categorySlug)?.category;

    if (!appCategory) {
        return {};
    }

    const title = `${appCategory} Apps - TweakFind`;
    const description = `Browse and download the latest tweaked ${appCategory} apps. Safe, updated, and no jailbreak required.`;
    const url = `https://tweak.appsg.site/${categorySlug}/apps`;
    const ogImage = "https://i.imgur.com/rq3p0eE.png";

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { 
            title, 
            description, 
            url, 
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        }
    };
}


export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categorySlug = params.category;
    const appCategory = apps.find(app => slugify(app.category) === categorySlug)?.category as AppCategory;
    
    if (!appCategory) {
        return notFound();
    }
    
    const appsForCategory = apps.filter(app => slugify(app.category) === categorySlug);
    
    const breadcrumbs = [
        { name: "Home", item: "/" },
        { name: appCategory, item: `/${categorySlug}/apps` }
    ];

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                <main>
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
                      showSearch={true}
                      displayMode="grid"
                      pageTitle={`${appCategory} Apps`}
                    />
                </main>
                <aside className="hidden lg:block">
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
