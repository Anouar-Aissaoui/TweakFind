'use server';

/**
 * @fileOverview An AI agent that generates descriptions for tweaked apps.
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
  appFeatures: z.string().describe('The features of the app.'),
});
export type GenerateAppDescriptionInput = z.infer<typeof GenerateAppDescriptionInputSchema>;

const GenerateAppDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated description of the app.'),
});
export type GenerateAppDescriptionOutput = z.infer<typeof GenerateAppDescriptionOutputSchema>;

export async function generateAppDescription(input: GenerateAppDescriptionInput): Promise<GenerateAppDescriptionOutput> {
  return generateAppDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAppDescriptionPrompt',
  input: {schema: GenerateAppDescriptionInputSchema},
  output: {schema: GenerateAppDescriptionOutputSchema},
  prompt: `You are an expert app description writer. You will generate a description for a tweaked app based on the app name, category, and features.

App Name: {{{appName}}}
App Category: {{{appCategory}}}
App Features: {{{appFeatures}}}

Description:`,
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
