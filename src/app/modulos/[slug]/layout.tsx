import Image from "next/image";
import Link from 'next/link';

export default function ModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-10 text-center">
        <Link href="/">
          <Image
            src="https://drive.google.com/uc?export=view&id=1JFtRMJQZMwcI48n8LQ8VD2b63jEVyxRD"
            alt="Logo Especialista em Drywall"
            width={110}
            height={110}
            className="mx-auto mb-4 rounded-full"
          />
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
