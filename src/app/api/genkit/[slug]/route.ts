// src/app/api/genkit/[slug]/route.ts
import { genkitAPIHandler } from '@genkit-ai/next';
import '@/ai/flows/generate-app-description';
import '@/ai/flows/recommend-tweaked-apps';

export const POST = genkitAPIHandler();
