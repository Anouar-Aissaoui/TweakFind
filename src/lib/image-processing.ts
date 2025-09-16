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

export async function getAppsWithPlaceholders(appData: AppDto[]) {
    const appsWithPlaceholders = await Promise.all(
        appData.map(async (app) => {
            try {
                const response = await fetch(app.img);
                if (!response.ok) {
                    throw new Error(`Failed to fetch image: ${response.statusText}`);
                }
                const buffer = await response.arrayBuffer();
                const { base64 } = await getPlaiceholder(Buffer.from(buffer));
                return { ...app, blurDataURL: base64 };
            } catch (error) {
                console.error(`Failed to generate placeholder for ${app.name}:`, error);
                // Fallback to a default transparent placeholder
                return { ...app, blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' };
            }
        })
    );
    return appsWithPlaceholders;
}
