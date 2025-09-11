import { PlaceHolderImages } from './placeholder-images';

export type AppCategory = 'Apps' | 'Games' | 'Emulators' | 'Tweaks' | 'Utilities';

export type App = {
  id: string;
  name: string;
  icon: string;
  iconHint: string;
  version: string;
  description: string;
  category: AppCategory;
};

const getImage = (id: string) => {
    const image = PlaceHolderImages.find(img => img.id === id);
    return {
        url: image?.imageUrl ?? `https://picsum.photos/seed/${id}/128/128`,
        hint: image?.imageHint ?? 'logo abstract'
    }
}

export const apps: App[] = [
  {
    id: 'onlyfans-plus-plus',
    name: 'Onlyfans++',
    icon: getImage('onlyfans-plus-plus').url,
    iconHint: getImage('onlyfans-plus-plus').hint,
    version: '1.4.1',
    description: 'Unlock premium features and content on Onlyfans with this tweaked version.',
    category: 'Apps',
  },
  {
    id: 'apple-music-plus-plus',
    name: 'Apple Music++',
    icon: getImage('apple-music-plus-plus').url,
    iconHint: getImage('apple-music-plus-plus').hint,
    version: '2.01.31',
    description: 'Enjoy Apple Music with enhanced features, including offline downloads and no ads.',
    category: 'Utilities',
  },
  {
    id: 'cash-app-plus-plus',
    name: 'Cash App++',
    icon: getImage('cash-app-plus-plus').url,
    iconHint: getImage('cash-app-plus-plus').hint,
    version: '2.01.31',
    description: 'A modified version of Cash App with additional tools and features.',
    category: 'Apps',
  },
  {
    id: 'spotify-plus-plus',
    name: 'Spotify++',
    icon: getImage('spotify-plus-plus').url,
    iconHint: getImage('spotify-plus-plus').hint,
    version: '8.6.42',
    description: 'Listen to Spotify without ads, with unlimited skips, and high-quality audio.',
    category: 'Utilities',
  },
  {
    id: 'netflix-plus-plus',
    name: 'Netflix++',
    icon: getImage('netflix-plus-plus').url,
    iconHint: getImage('netflix-plus-plus').hint,
    version: '2.01.31',
    description: 'Watch Netflix content with premium features unlocked for free.',
    category: 'Utilities',
  },
  {
    id: 'watched-plus-plus',
    name: 'Watched++',
    icon: getImage('watched-plus-plus').url,
    iconHint: getImage('watched-plus-plus').hint,
    version: '2.01.31',
    description: 'An enhanced version of the Watched app for a better viewing experience.',
    category: 'Utilities',
  },
  {
    id: 'snapchat-plus-plus',
    name: 'Snapchat++',
    icon: getImage('snapchat-plus-plus').url,
    iconHint: getImage('snapchat-plus-plus').hint,
    version: '3.01.31',
    description: 'Get advanced features on Snapchat, like saving snaps and viewing stories anonymously.',
    category: 'Apps',
  },
  {
    id: 'roblox-plus-plus',
    name: 'Roblox++',
    icon: getImage('roblox-plus-plus').url,
    iconHint: getImage('roblox-plus-plus').hint,
    version: '4.01.31',
    description: 'A tweaked version of Roblox that gives you access to special in-game advantages.',
    category: 'Games',
  },
  {
    id: 'tiktok-plus-plus',
    name: 'TikTok++',
    icon: getImage('tiktok-plus-plus').url,
    iconHint: getImage('tiktok-plus-plus').hint,
    version: '6.01.31',
    description: 'Download TikTok videos without watermarks and enjoy other exclusive features.',
    category: 'Apps',
  },
  {
    id: 'instagram-plus-plus',
    name: 'Instagram++',
    icon: getImage('instagram-plus-plus').url,
    iconHint: getImage('instagram-plus-plus').hint,
    version: '7.01.31',
    description: 'Enhance your Instagram experience with features like downloading posts and stories.',
    category: 'Apps',
  },
  {
    id: 'disney-plus-plus',
    name: 'Disney++',
    icon: getImage('disney-plus-plus').url,
    iconHint: getImage('disney-plus-plus').hint,
    version: '7.01.31',
    description: 'Stream from Disney+ with premium features and an ad-free experience.',
    category: 'Utilities',
  },
  {
    id: 'tinder-gold',
    name: 'Tinder Gold',
    icon: getImage('tinder-gold').url,
    iconHint: getImage('tinder-gold').hint,
    version: '12.15.0',
    description: 'Get all the benefits of Tinder Gold for free, including unlimited likes and rewinds.',
    category: 'Apps',
  },
  {
    id: 'gba4ios',
    name: 'GBA4iOS',
    icon: getImage('gba4ios').url,
    iconHint: getImage('gba4ios').hint,
    version: '2.1',
    description: 'A popular Game Boy Advance emulator for iOS devices to play classic games.',
    category: 'Emulators',
  },
  {
    id: 'delta-emulator',
    name: 'Delta',
    icon: getImage('delta-emulator').url,
    iconHint: getImage('delta-emulator').hint,
    version: '1.3.1',
    description: 'An all-in-one emulator for iOS, supporting NES, SNES, N64, GBA, and more.',
    category: 'Emulators',
  },
  {
    id: 'youtube-cercube',
    name: 'Cercube for YouTube',
    icon: getImage('youtube-cercube').url,
    iconHint: getImage('youtube-cercube').hint,
    version: '5.2.11',
    description: 'The ultimate tweak for YouTube: background playback, ad-blocking, and video downloads.',
    category: 'Tweaks',
  },
  {
    id: 'whatsapp-watusi',
    name: 'Watusi for WhatsApp',
    icon: getImage('whatsapp-watusi').url,
    iconHint: getImage('whatsapp-watusi').hint,
    version: '2.1.25',
    description: 'The most popular tweak for WhatsApp, adding tons of new features and customizations.',
    category: 'Tweaks',
  },
];
