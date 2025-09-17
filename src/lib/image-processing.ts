'use server';

import { getPlaiceholder } from 'plaiceholder';
import type { AppCategory } from './apps';

export type AppDto = {
  slug: string;
  img: string;
  name:string;
  "data-ai-hint": string;
  description: string;
  version: string;
  category: AppCategory;
  lastModified: string;
};

// A default placeholder image to use when an app's image fails to fetch
const FALLBACK_IMAGE = 'https://i.imgur.com/8CbjRgL.png';
const FALLBACK_BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAC1JREFUGFdj9Pa/p4ECAsb///9n+M/w/39s8B8ZGBgYpP5/YED/f4Y/gAAmAQH+yY18AAAAAElFTkSuQmCC';


export async function getAppsWithPlaceholders(appData: AppDto[]) {
    const appsWithPlaceholders = await Promise.all(
        appData.map(async (app) => {
            try {
                // Ensure img is a valid URL
                if (!app.img || typeof app.img !== 'string' || !app.img.startsWith('http')) {
                    throw new Error('Invalid image URL');
                }
                const response = await fetch(app.img);
                if (!response.ok) {
                    throw new Error(`Failed to fetch image: ${response.statusText}`);
                }
                const buffer = await response.arrayBuffer();
                const { base64 } = await getPlaiceholder(Buffer.from(buffer));
                return { ...app, blurDataURL: base64, processedImg: app.img };
            } catch (error) {
                console.error(`Failed to generate placeholder for ${app.name} (url: ${app.img}). Using fallback.`, error);
                // Fallback to a default placeholder
                return { ...app, processedImg: FALLBACK_IMAGE, blurDataURL: FALLBACK_BLUR_DATA_URL };
            }
        })
    );
    return appsWithPlaceholders;
}
