"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import ModuleCard from "./module-card";
import { generateLearningPath } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { mainModules } from "@/app/data";

type RecommendedModule = {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  reason: string;
};

export default function LearningPath() {
  const [skillLevel, setSkillLevel] = useState("");
  const [recommendations, setRecommendations] = useState<RecommendedModule[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSkillChange = async (newSkillLevel: string) => {
    setSkillLevel(newSkillLevel);
    if (!newSkillLevel) {
      setRecommendations([]);
      return;
    }
    
    setIsLoading(true);
    setRecommendations([]);

    const result = await generateLearningPath(newSkillLevel);
    
    setIsLoading(false);
    
    if (result.success && result.data) {
      setRecommendations(result.data.recommendedModules);
    } else {
      toast({
        variant: "destructive",
        title: "Erro",
        description: result.error || "Não foi possível gerar as recomendações.",
      });
    }
  };

  const mapRecommendationToModule = (rec: RecommendedModule) => {
    const originalModule = mainModules.find(m => m.title === rec.title);
    return {
        ...rec,
        imageId: originalModule?.imageId,
        buttonText: "Acessar Aulas",
        buttonLink: "#",
        meta: [
            { icon: 'BookOpen', text: `${rec.lessons} aulas` },
            { icon: 'Clock', text: rec.duration },
        ]
    }
  }

  return (
    <section>
      <Card className="bg-card shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-center text-primary">
            🧭 Descubra seu Caminho de Aprendizado
          </CardTitle>
          <p className="text-center text-muted-foreground pt-2">
            Não sabe por onde começar? Selecione seu nível e nossa IA montará um plano de estudos para você.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="w-full max-w-xs">
            <Select onValueChange={handleSkillChange} value={skillLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione seu nível de habilidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Iniciante</SelectItem>
                <SelectItem value="intermediate">Intermediário</SelectItem>
                <SelectItem value="advanced">Avançado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading && (
            <div className="flex items-center gap-2 text-primary p-8">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Analisando o melhor caminho para você...</span>
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="w-full mt-8">
              <h3 className="font-headline text-xl font-bold text-center text-primary mb-6">
                Módulos Recomendados Para Você
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recommendations.map((rec) => (
                  <ModuleCard key={rec.title} module={mapRecommendationToModule(rec)} reason={rec.reason} />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
