
// src/app/api/genkit/[slug]/route.ts
import { createGenkitNextAPIHandler } from '@genkit-ai/next';
import '@/ai/flows/generate-app-description';
import '@/ai/flows/recommend-tweaked-apps';

export const { POST } = createGenkitNextAPIHandler();
