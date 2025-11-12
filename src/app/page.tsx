'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mainModules, bonusModules, pdfResourceGroups } from '@/app/data';
import ModuleCard from '@/components/module-card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { MessageSquareText } from 'lucide-react';
import PdfModal from '@/components/pdf-modal';

export default function Home() {
  const [selectedPdf, setSelectedPdf] = useState<(typeof pdfResourceGroups)[string][0] | null>(null);

  const handlePdfModuleClick = (moduleId: string) => {
    // This logic is no longer needed as all bonus PDF modules now navigate to their own page
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Separator className="mb-4" />

        <h2 className="font-headline text-2xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">
          📘 Módulos Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mainModules.map((module) => (
             <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        <h2 className="font-headline text-2xl font-bold text-primary mt-16 mb-8 border-l-4 border-primary pl-4">
          🎁 Bônus Especiais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonusModules.map((module) => (
             <ModuleCard key={module.id} module={module} onButtonClick={() => handlePdfModuleClick(module.id)} />
          ))}
        </div>

        <section className="mt-20">
          <Card className="bg-card shadow-2xl">
            <CardContent className="p-10 text-center">
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                Precisa de Ajuda?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Se tiver qualquer dúvida sobre o curso, fale com nosso suporte exclusivo no WhatsApp.
              </p>
              <Button asChild size="lg" className="bg-[#25d366] text-white hover:bg-[#25d366]/90 font-bold text-base transition-transform hover:scale-105">
                <a href="https://wa.me/5599999999999" target="_blank">
                  <MessageSquareText className="mr-2 h-5 w-5" />
                  Falar com Suporte
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />

      {selectedPdf && (
        <PdfModal
          title={selectedPdf.title}
          url={selectedPdf.url}
          embedUrl={selectedPdf.embedUrl}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </div>
  );
}
