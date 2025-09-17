
import { getAppsWithPlaceholders } from './image-processing';
import { appData } from './data';


export type AppCategory =
  | 'Apps'
  | 'Games'
  | 'Emulators'
  | 'Tweaks'
  | 'Utilities'
  | 'Entertainment'
  | 'Social'
  | 'Developer Tools';

export type Entity = {
  id: string; // slug
  name: string; // title
  subhead: string;
  description: string; // summary
  category: AppCategory;
  lastModified: string; // updated_at
  media: {
    icon: string;
    iconHint: string;
    blurDataURL: string;
    unoptimized: boolean;
  };
  facts: {
    version: string;
    downloads: string;
    compatibility: string;
    safety: string[];
    license: string[];
  };
  about: {
    title: string;
    content: string;
  },
  features: {
    title: string;
    items: string[];
  },
  perfectFor: {
    title: string;
    tags: string[];
  },
  faq: {
    title: string;
    items: { question: string; answer: string; }[];
  }
};


const appsWithPlaceholders = await getAppsWithPlaceholders(appData);

function generateDownloads(slug: string): string {
    const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const num = (hash % 900) + 100; // 100-999
    return `${num}k`;
}

function generateSafetyFeatures(description: string): string[] {
    const safetyFeatures = ['Scanned', 'Verified'];
    if (description.toLowerCase().includes('no jailbreak')) {
        safetyFeatures.push('No Jailbreak');
    }
    if (description.toLowerCase().includes('no root')) {
        safetyFeatures.push('No Root');
    }
    return safetyFeatures;
}

const unoptimizedDomains = ['i.imgur.com', 'cdn3.iconfinder.com'];

export const apps: Entity[] = appsWithPlaceholders.map(app => {
    const isUnoptimized = unoptimizedDomains.some(domain => app.processedImg.includes(domain));
    
    return {
      id: app.slug,
      name: app.name,
      subhead: app.description,
      description: `${app.description} Get the tweaked version of ${app.name} to unlock advanced features.`,
      category: app.category,
      lastModified: app.lastModified,
      media: {
        icon: app.processedImg,
        iconHint: app['data-ai-hint'],
        blurDataURL: app.blurDataURL,
        unoptimized: isUnoptimized,
      },
      facts: {
        version: app.version,
        downloads: generateDownloads(app.slug),
        compatibility: 'iOS & Android',
        safety: generateSafetyFeatures(app.description),
        license: ['Free', 'MOD'],
      },
      about: {
        title: `About ${app.name}`,
        content: `<p>This is the tweaked version of <strong>${app.name}</strong>, offering enhanced features and functionalities not available in the standard version. Enjoy an improved experience with our modifications. It is designed to be safe and easy to use on both iOS and Android devices.</p>`,
      },
      features: {
        title: 'Key Features',
        items: [
          'Premium Features Unlocked',
          'Ad-Free Experience',
          'Enhanced Performance',
          'No Jailbreak/Root Required',
          'Regular Updates',
          'Cross-Platform Compatibility'
        ],
      },
      perfectFor: {
        title: 'Perfect For',
        tags: ['Power Users', 'Feature Enthusiasts', 'Mobile Gamers', 'Testers'],
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: `Is ${app.name} safe to install?`,
            answer: `Yes, all apps on TweakFind, including this version of ${app.name}, are scanned for malware and are safe to install. We prioritize user security.`,
          },
          {
            question: 'Do I need to jailbreak my iPhone?',
            answer: 'No, our apps are designed to work without requiring a jailbreak or root access on your device.',
          },
        ],
      },
    }
});
