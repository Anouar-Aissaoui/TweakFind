'use server';

/**
 * @fileOverview An AI agent that generates SEO-optimized descriptions for tweaked apps.
 *
 * - generateAppDescription - A function that generates a description for a tweaked app.
 * - GenerateAppDescriptionInput - The input type for the generateAppDescription function.
 * - GenerateAppDescriptionOutput - The return type for the generateAppDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAppDescriptionInputSchema = z.object({
  appName: z.string().describe('The name of the app to generate a description for.'),
  appCategory: z.string().describe('The category of the app.'),
  appFeatures: z.string().describe('A summary of the key features of the app.'),
  longTailKeyword: z.string().describe('A specific long-tail keyword phrase to include in the description.'),
});
export type GenerateAppDescriptionInput = z.infer<typeof GenerateAppDescriptionInputSchema>;

const GenerateAppDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated SEO description, under 160 characters.'),
});
export type GenerateAppDescriptionOutput = z.infer<typeof GenerateAppDescriptionOutputSchema>;

export async function generateAppDescription(input: GenerateAppDescriptionInput): Promise<GenerateAppDescriptionOutput> {
  return generateAppDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAppDescriptionPrompt',
  input: {schema: GenerateAppDescriptionInputSchema},
  output: {schema: GenerateAppDescriptionOutputSchema},
  prompt: `You are an SEO expert specializing in meta descriptions for app stores. Your task is to write a compelling description under 160 characters.

It must include:
1. The app name: {{{appName}}}
2. The exact long-tail keyword: "{{{longTailKeyword}}}"
3. A strong call-to-action like "Download free" or "Get the unlocked version".
4. The brand name "TweakFind".

App Details:
- Category: {{{appCategory}}}
- Features: {{{appFeatures}}}

Generate the description.`,
});

const generateAppDescriptionFlow = ai.defineFlow(
  {
    name: 'generateAppDescriptionFlow',
    inputSchema: GenerateAppDescriptionInputSchema,
    outputSchema: GenerateAppDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
