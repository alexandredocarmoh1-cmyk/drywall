'use client';

import { useParams } from 'next/navigation';
import { allModules, pdfResources } from '@/app/data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModulePage() {
  const params = useParams();
  const { slug } = params;

  const module = allModules.find((m) => m.id === slug);

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
        <h1 className="text-2xl font-bold mb-4">Módulo não encontrado</h1>
        <Button asChild>
          <Link href="/">Voltar para a Área de Membros</Link>
        </Button>
      </div>
    );
  }

  const isPdfModule = module.id === 'walls';

  return (
    <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Link href="/" passHref>
        <Button variant="ghost" className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Área de Membros
        </Button>
      </Link>

      {isPdfModule ? (
        <div className="space-y-4">
          {pdfResources.map((pdf) => (
            <div key={pdf.id} className="bg-card p-6 rounded-lg shadow-md flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{pdf.title}</h3>
                <p className="text-sm text-muted-foreground">{pdf.description}</p>
              </div>
              <Button asChild>
                <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                  Baixar PDF
                </a>
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {module.lessons && module.lessons.length > 0 ? (
            module.lessons.map((lesson) => (
              <div key={lesson.id} className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${lesson.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-headline text-primary">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">📹 Duração: {lesson.duration}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">Nenhuma aula disponível neste módulo ainda.</p>
          )}
        </div>
      )}
    </main>
  );
}
