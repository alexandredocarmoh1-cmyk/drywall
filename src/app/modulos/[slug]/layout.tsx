import Image from "next/image";
import Link from 'next/link';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logo = PlaceHolderImages.find((img) => img.id === "drywall-logo");

  return (
    <div className="min-h-screen bg-background">
      <header className="py-10 text-center">
        <Link href="/">
          {logo && (
            <Image
              src={logo.imageUrl}
              alt="Logo Especialista em Drywall"
              width={110}
              height={110}
              className="mx-auto mb-4 rounded-full"
              data-ai-hint={logo.imageHint}
            />
          )}
        </Link>
      </header>

      {children}
      
      <footer className="mt-12 border-t-2 border-primary bg-background/50">
        <div className="container mx-auto py-6 text-center text-muted-foreground text-sm">
          <p>© 2025 Curso Especialista em Drywall — Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
