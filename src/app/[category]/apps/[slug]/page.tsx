
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { SoftwareApplication, WebPage, BreadcrumbList, ImageObject, FAQPage } from "schema-dts";
import { AppPageClient } from "@/components/app-page-client";
import { slugify } from "@/lib/utils";

export const revalidate = 86400; // ISR: Revalidate once every 24 hours

const siteUrl = "https://tweak.appsg.site";

export async function generateStaticParams() {
  return apps.map(app => ({
    category: slugify(app.category),
    slug: app.id,
  }));
}

export async function generateMetadata({ params }: { params: { category: string, slug: string } }): Promise<Metadata> {
  const app = apps.find(a => a.id === params.slug && slugify(a.category) === params.category);
  if (!app) {
    return {
      title: "App Not Found",
      description: "The app you are looking for does not exist."
    };
  }

  const url = `${siteUrl}/${slugify(app.category)}/apps/${app.id}`;
  const ogImage = app.media.icon;

  const meta_title = `Download ${app.name} v${app.facts.version} (MOD) for iOS & Android`;
  const meta_description = `Get the latest ${app.name} tweak for free. Unlock premium features on your iOS or Android device—safe, updated, and no jailbreak required.`;

  const appImages: ImageObject[] = [
    { "@type": "ImageObject", "url": app.media.icon, "width": "128", "height": "128" },
    { "@type": "ImageObject", "url": `https://i.imgur.com/ItBBn9z.png`, "width": "1200", "height": "800" },
    { "@type": "ImageObject", "url": `https://i.imgur.com/R9jMHHH.png`, "width": "1200", "height": "800" },
    { "@type": "ImageObject", "url": `https://i.imgur.com/8CbjRgL.png`, "width": "1200", "height": "800" }
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: app.category, item: `/${slugify(app.category)}/apps`},
    { name: app.name, item: `/${slugify(app.category)}/apps/${app.id}` }
  ];

  const faqSchema: FAQPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": app.faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const jsonLd: (WebPage | BreadcrumbList | SoftwareApplication | FAQPage)[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": url,
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
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${siteUrl}${crumb.item === "/" ? "" : crumb.item}`
        }))
    },
    {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": app.name,
        "operatingSystem": "iOS, Android",
        "applicationCategory": `${app.category.replace(' ', '')}Application`,
        "softwareVersion": app.facts.version,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "image": appImages,
        "url": url,
        "description": meta_description,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2481"
        }
    },
    faqSchema
  ];

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
          alt: `${app.name} icon`,
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
    other: {
      "article:published_time": "2024-01-01T00:00:00+00:00",
      "article:modified_time": app.lastModified,
      "article:author": "TweakFind",
      "article:section": app.category,
      "article:tag": app.perfectFor.tags
    },
    'script': {
      'application/ld+json': JSON.stringify(jsonLd)
    },
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

  const categories = [...new Set(apps.map(app => app.category))];
  if(app.category === "Developer Tools" && !categories.includes("Developer Tools")) {
    categories.push("Developer Tools");
  }

  return (
    <>
      <AppPageClient app={app} relatedApps={relatedApps} breadcrumbs={breadcrumbs} categories={categories} />
    </>
  );
}
