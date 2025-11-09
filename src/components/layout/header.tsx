import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Header() {
  const logo = PlaceHolderImages.find((img) => img.id === "drywall-logo");

  return (
    <header className="py-2 text-center">
      <div className="inline-block">
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
    </header>
  );
}
