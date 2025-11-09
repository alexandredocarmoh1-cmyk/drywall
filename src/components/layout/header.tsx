import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Header() {
  const logo = PlaceHolderImages.find((img) => img.id === "drywall-logo");

  return (
    <header className="py-6 text-center">
      <div className="inline-block mb-4">
        {logo && (
          <Image
            src={logo.imageUrl}
            alt="Logo Especialista em Drywall"
            width={140}
            height={140}
            className="rounded-full"
            data-ai-hint={logo.imageHint}
            priority
          />
        )}
      </div>
      <h1 className="font-headline text-4xl font-bold text-primary mb-2">
        Área de Membros 👷‍♂️
      </h1>
      <p className="text-muted-foreground">
        Curso Profissionalizante — Especialista em Drywall
      </p>
    </header>
  );
}
