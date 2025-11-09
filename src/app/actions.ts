"use server";

import { z } from "zod";
import { getPersonalizedLearningPath } from "@/ai/flows/personalized-learning-path";
import { mainModules } from "@/app/data";

const skillLevelSchema = z.enum(["beginner", "intermediate", "advanced"]);

export async function generateLearningPath(skillLevel: string) {
  const validation = skillLevelSchema.safeParse(skillLevel);
  if (!validation.success) {
    return { success: false, error: "Nível de habilidade inválido." };
  }

  const modulesForAI = mainModules.map(({ title, description, lessons, duration }) => ({
    title,
    description,
    lessons,
    duration,
  }));

  try {
    const result = await getPersonalizedLearningPath({
      skillLevel: validation.data,
      modules: modulesForAI,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating learning path:", error);
    return { success: false, error: "Falha ao gerar o caminho de aprendizado. Tente novamente." };
  }
}
