
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { jsonLdScriptProps } from "react-schemaorg";
import { SoftwareApplication, WebPage, BreadcrumbList } from "schema-dts";
import { AppPageClient } from "@/components/app-page-client";


export const revalidate = 86400; // ISR: 24h

export async function generateStaticParams() {
  return apps.map(app => ({
    category: app.category.toLowerCase(),
    slug: app.id,
  }));
}

export async function generateMetadata({ params }: { params: { category: string, slug: string } }): Promise<Metadata> {
  const app = apps.find(a => a.id === params.slug);
  if (!app) {
    return {};
  }

  const siteUrl = "https://tweak.appsg.site";
  const url = `${siteUrl}/${params.category}/apps/${app.id}`;
  const ogImage = `https://i.imgur.com/rq3p0eE.png`;

  const meta_title = `${app.name} — Free iOS IPA Installer for iPhone/iPad (No Jailbreak)`;
  const meta_description = `Sideload any IPA to iPhone or iPad with ${app.name} — 100% free, no jailbreak, no Apple ID required. 500k+ trusted installs. Auto-refresh. Open source.`;
  const og_title = `${app.name}: Sideload Any App to iOS — No Jailbreak`;
  const og_description = `The free, open-source iOS app installer trusted by 500k+ users. Works on iPhone & iPad. No computer needed after setup.`;


  return {
    title: meta_title,
    description: meta_description,
    alternates: { canonical: url },
    openGraph: {
      title: og_title,
      description: og_description,
      url,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${app.name} hero image`,
        },
      ],
    },
    robots: "index,follow",
  };
}

export default async function Page({ params }: { params: { category: string, slug:string } }) {
  const app = apps.find(e => e.id === params.slug && e.category.toLowerCase() === params.category);

  if (!app) {
    return notFound();
  }
  
  const relatedApps = apps
    .filter(a => a.category === app.category && a.id !== app.id)
    .slice(0, 4);

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: app.category, item: `/${app.category.toLowerCase()}/apps`},
    { name: app.name, item: `/${app.category.toLowerCase()}/apps/${app.id}` }
  ];

  const siteUrl = "https://tweak.appsg.site";
  const categories = [...new Set(apps.map(app => app.category.toLowerCase()))];
  if(app.category === "Developer Tools" && !categories.includes("developer tools")) {
    categories.push("developer tools");
  }


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
        <script {...jsonLdScriptProps<SoftwareApplication>({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": app.name,
            "operatingSystem": "iOS",
            "applicationCategory": "UtilityApplication",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1247"
            }
        })} />
        <AppPageClient app={app} relatedApps={relatedApps} breadcrumbs={breadcrumbs} categories={categories} />
    </>
  );
}
