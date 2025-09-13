// src/app/api/genkit/[slug]/route.ts
import { genkitNextApiHandler } from '@genkit-ai/next';
import '@/ai/flows/generate-app-description';
import '@/ai/flows/recommend-tweaked-apps';

export const POST = genkitNextApiHandler();
