import { config } from 'dotenv';
config();

// This import is required for the genkitNextApiHandler
import '/src/app/api/genkit/[slug]/route';

import '@/ai/flows/generate-app-description.ts';
import '@/ai/flows/recommend-tweaked-apps.ts';
