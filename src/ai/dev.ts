import { config } from 'dotenv';
config();

// This import is not needed for the dev server and can cause build issues.
// import '/src/app/api/genkit/[slug]/route';

import '@/ai/flows/generate-app-description.ts';
import '@/ai/flows/recommend-tweaked-apps.ts';
