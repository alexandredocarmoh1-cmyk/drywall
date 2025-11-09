// Implemented personalized learning path flow using Genkit and Google Gemini to tailor module recommendations based on skill level.

'use server';

/**
 * @fileOverview A personalized learning path AI agent that recommends modules based on user skill level.
 *
 * - getPersonalizedLearningPath - A function that returns module recommendations.
 * - PersonalizedLearningPathInput - The input type for the getPersonalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the getPersonalizedLearningPath function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  skillLevel: z
    .enum(['beginner', 'intermediate', 'advanced'])
    .describe('The current skill level of the user in drywall installation.'),
  modules: z.array(
    z.object({
      title: z.string().describe('The title of the module.'),
      description: z.string().describe('A brief description of the module.'),
      lessons: z.number().describe('The number of lessons in the module.'),
      duration: z.string().describe('The estimated duration of the module (e.g., \'32 min\').'),
    })
  ).describe('A list of available modules in the Drywall course.'),
});
export type PersonalizedLearningPathInput = z.infer<typeof PersonalizedLearningPathInputSchema>;

const PersonalizedLearningPathOutputSchema = z.object({
  recommendedModules: z.array(
    z.object({
      title: z.string().describe('The title of the recommended module.'),
      description: z.string().describe('A brief description of the recommended module.'),
      lessons: z.number().describe('The number of lessons in the recommended module.'),
      duration: z.string().describe('The estimated duration of the recommended module (e.g., \'32 min\').'),
      reason: z.string().describe('The reason why this module is recommended for the user.'),
    })
  ).describe('A list of modules recommended for the user based on their skill level.'),
});
export type PersonalizedLearningPathOutput = z.infer<typeof PersonalizedLearningPathOutputSchema>;

export async function getPersonalizedLearningPath(input: PersonalizedLearningPathInput): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: {schema: PersonalizedLearningPathInputSchema},
  output: {schema: PersonalizedLearningPathOutputSchema},
  prompt: `You are an expert in recommending personalized learning paths for drywall installation courses.

  Given the user's current skill level and a list of available modules, recommend the most relevant modules to help them advance their skills.
  Explain the reason for recommending each module.

  User Skill Level: {{{skillLevel}}}
  Available Modules: {{#each modules}}{{{this.title}}} - {{{this.description}}} ({{{this.lessons}}} lessons, {{{this.duration}}}){{/each}}

  {{#if (eq skillLevel "beginner")}}
  Focus on recommending modules that cover the fundamentals of drywall installation.
  {{/if}}
  {{#if (eq skillLevel "intermediate")}}
  Focus on recommending modules that build upon the fundamentals and introduce more advanced techniques.
  {{/if}}
  {{#if (eq skillLevel "advanced")}}
  Focus on recommending modules that cover specialized topics and advanced problem-solving.
  {{/if}}`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
