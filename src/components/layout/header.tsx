import Image from "next/image";
import { HardHat } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Header() {
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");

  return (
    <header className="py-12 text-center">
      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 border-2 border-primary/20">
        {logoImage ? (
          <Image
            src={logoImage.imageUrl}
            alt={logoImage.description}
            width={100}
            height={100}
            className="rounded-full"
            data-ai-hint={logoImage.imageHint}
          />
        ) : (
          <HardHat className="h-24 w-24 text-primary" />
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
