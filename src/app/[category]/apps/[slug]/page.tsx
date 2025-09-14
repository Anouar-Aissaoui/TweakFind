
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { jsonLdScriptProps } from "react-schemaorg";
import { SoftwareApplication, WebPage, BreadcrumbList, ImageObject } from "schema-dts";
import { AppPageClient } from "@/components/app-page-client";
import { slugify } from "@/lib/utils";

export const revalidate = 86400; // ISR: Revalidate once every 24 hours

export async function generateStaticParams() {
  return apps.map(app => ({
    category: slugify(app.category),
    slug: app.id,
  }));
}

export async function generateMetadata({ params }: { params: { category: string, slug: string } }): Promise<Metadata> {
  const app = apps.find(a => a.id === params.slug);
  if (!app) {
    return {};
  }

  const siteUrl = "https://tweak.appsg.site";
  const url = `${siteUrl}/${slugify(params.category)}/apps/${app.id}`;
  const ogImage = app.media.icon;

  const meta_title = `${app.name}: ${app.subhead}`;

  const firstFeature = app.features.items[0]?.substring(app.features.items[0]?.indexOf(" ") + 1).split('—')[0].trim() ?? 'new features';
  const meta_description = `Free download of the tweaked ${app.name} v${app.facts.version}. Get the unlocked version with ${firstFeature} now on TweakFind!`;

  return {
    title: meta_title,
    description: meta_description,
    alternates: { canonical: url },
    openGraph: {
      title: meta_title,
      description: meta_description,
      url,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 128,
          height: 128,
          alt: `${app.name} hero image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta_title,
      description: meta_description,
      images: [ogImage],
    },
    robots: "index,follow",
  };
}

export default async function Page({ params }: { params: { category: string, slug:string } }) {
  const app = apps.find(e => e.id === params.slug && slugify(e.category) === params.category);

  if (!app) {
    return notFound();
  }
  
  const relatedApps = apps
    .filter(a => a.category === app.category && a.id !== app.id)
    .slice(0, 4);

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: app.category, item: `/${slugify(app.category)}/apps`},
    { name: app.name, item: `/${slugify(app.category)}/apps/${app.id}` }
  ];

  const siteUrl = "https://tweak.appsg.site";
  const categories = [...new Set(apps.map(app => app.category))];
  if(app.category === "Developer Tools" && !categories.includes("Developer Tools")) {
    categories.push("Developer Tools");
  }


  return (
    <>
        <script {...jsonLdScriptProps<WebPage>({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: app.name,
            description: app.description,
            dateModified: app.lastModified,
            image: {
                "@type": "ImageObject",
                "url": app.media.icon,
                "width": "128",
                "height": "128"
            }
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
            "operatingSystem": ["iOS", "Android"],
            "applicationCategory": "GameApplication",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "image": app.media.icon
        })} />
        <AppPageClient app={app} relatedApps={relatedApps} breadcrumbs={breadcrumbs} categories={categories} />
    </>
  );
}
