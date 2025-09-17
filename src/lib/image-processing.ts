
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
            let buffer: Buffer;
            let processedImg = app.img;
            try {
                // Ensure img is a valid URL
                if (!app.img || typeof app.img !== 'string' || !app.img.startsWith('http')) {
                    throw new Error('Invalid image URL');
                }
                const response = await fetch(app.img);
                if (!response.ok) {
                    throw new Error(`Failed to fetch image: ${response.statusText}`);
                }
                const arrayBuffer = await response.arrayBuffer();
                buffer = Buffer.from(arrayBuffer);
            } catch (error) {
                console.error(`Failed to fetch image for ${app.name} (url: ${app.img}). Using fallback.`, error);
                // In case of any error, fetch the fallback image
                const fallbackResponse = await fetch(FALLBACK_IMAGE);
                const fallbackArrayBuffer = await fallbackResponse.arrayBuffer();
                buffer = Buffer.from(fallbackArrayBuffer);
                processedImg = FALLBACK_IMAGE; // Use the fallback image URL
            }

            try {
                const { base64 } = await getPlaiceholder(buffer);
                return { ...app, blurDataURL: base64, processedImg: processedImg };
            } catch (error) {
                console.error(`Failed to generate plaiceholder for ${app.name}. Using fallback blurDataURL.`, error);
                return { ...app, blurDataURL: FALLBACK_BLUR_DATA_URL, processedImg: processedImg };
            }
        })
    );
    return appsWithPlaceholders;
}
