
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebPage, BreadcrumbList } from "schema-dts";
import { AppPageClient } from "@/components/app-page-client";


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
    <>
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
        <AppPageClient app={app} relatedApps={relatedApps} breadcrumbs={breadcrumbs} />
    </>
  );
}
