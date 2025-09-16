
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
  const url = `${siteUrl}/${slugify(app.category)}/apps/${app.id}`;
  const ogImage = app.media.icon;

  const meta_title = `Download ${app.name} v${app.facts.version} (MOD) for iOS & Android`;
  const meta_description = `Get the latest ${app.name} tweak for free on TweakFind. Unlock premium features on your iOS or Android device—safe, updated, and no jailbreak required.`;

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
  const canonicalUrl = `${siteUrl}/${slugify(app.category)}/apps/${app.id}`;
  const categories = [...new Set(apps.map(app => app.category))];
  if(app.category === "Developer Tools" && !categories.includes("Developer Tools")) {
    categories.push("Developer Tools");
  }

  const fileSize = ((app.id.length * 5) + (app.name.length * 3)) % 350 + 50;

  const appImages: ImageObject[] = [
    {
        "@type": "ImageObject",
        "url": app.media.icon,
        "width": "128",
        "height": "128"
    },
    {
        "@type": "ImageObject",
        "url": `https://tweak.appsg.site/_next/image?url=https%3A%2F%2Fi.imgur.com%2FItBBn9z.png&w=1080&q=75`,
        "width": "1200",
        "height": "800"
    },
    {
        "@type": "ImageObject",
        "url": `https://tweak.appsg.site/_next/image?url=https%3A%2F%2Fi.imgur.com%2FR9jMHHH.png&w=1080&q=75`,
        "width": "1200",
        "height": "800"
    },
     {
        "@type": "ImageObject",
        "url": `https://tweak.appsg.site/_next/image?url=https%3A%2F%2Fi.imgur.com%2F8CbjRgL.png&w=1080&q=75`,
        "width": "1200",
        "height": "800"
    }
  ];

  return (
    <>
        <script {...jsonLdScriptProps<WebPage>({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": canonicalUrl,
            "name": app.name,
            "description": app.description,
            "datePublished": "2024-01-01T00:00:00+00:00",
            "dateModified": app.lastModified,
            "image": {
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
            "applicationCategory": `${app.category.replace(' ', '')}Application`,
            "description": app.subhead,
            "featureList": app.features.items,
            "softwareVersion": app.facts.version,
            "fileSize": `${fileSize}MB`,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "2481"
            },
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            },
            "image": appImages,
            "review": {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "TweakFind User"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": `The tweaked version of ${app.name} from TweakFind is amazing! All the premium features are unlocked for free.`
              }
        })} />
        <AppPageClient app={app} relatedApps={relatedApps} breadcrumbs={breadcrumbs} categories={categories} />
    </>
  );
}
