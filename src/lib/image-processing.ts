
'use server';

import { getPlaiceholder } from 'plaiceholder';
import type { AppDto } from './data';

// A default placeholder image to use when an app's image fails to fetch
const FALLBACK_IMAGE = 'https://picsum.photos/seed/fallback/128/128';
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
                console.warn(`Failed to fetch image for ${app.name} (url: ${app.img}). Using fallback.`);
                try {
                    const fallbackResponse = await fetch(FALLBACK_IMAGE);
                    const fallbackArrayBuffer = await fallbackResponse.arrayBuffer();
                    buffer = Buffer.from(fallbackArrayBuffer);
                    processedImg = FALLBACK_IMAGE; // Use the fallback image URL
                } catch (fallbackError) {
                    console.error('FATAL: Could not fetch even the fallback image.', fallbackError);
                    // If even the fallback fails, use a hardcoded minimal buffer and URL
                    buffer = Buffer.from([72, 69, 76, 76, 79]); // Dummy buffer
                    processedImg = FALLBACK_IMAGE;
                    return { ...app, blurDataURL: FALLBACK_BLUR_DATA_URL, processedImg: processedImg };
                }
            }

            try {
                const { base64 } = await getPlaiceholder(buffer);
                return { ...app, blurDataURL: base64, processedImg: processedImg };
            } catch (error) {
                console.warn(`Failed to generate plaiceholder for ${app.name}. Using fallback blurDataURL.`);
                return { ...app, blurDataURL: FALLBACK_BLUR_DATA_URL, processedImg: processedImg };
            }
        })
    );
    return appsWithPlaceholders;
}
