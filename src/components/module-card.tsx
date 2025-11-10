import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

type Module = {
  id?: string;
  title: string;
  description: string;
  imageId?: string;
  lessons?: any[]; // Allow any for lessons
  duration?: string;
  buttonText?: string;
  buttonLink?: string;
  meta: { icon: string; text: string }[];
};

type ModuleCardProps = {
  module: Module;
  reason?: string;
};

const Icon = ({ name, className }: { name: string; className: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

export default function ModuleCard({ module, reason }: ModuleCardProps) {
  const image = module.imageId
    ? PlaceHolderImages.find((img) => img.id === module.imageId)
    : PlaceHolderImages[1];

  return (
    <Card className="flex flex-col bg-card overflow-hidden shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 h-full">
      {image && (
        <div className="relative">
          <Image
            src={image.imageUrl}
            alt={module.title}
            width={400}
            height={250}
            className="w-full h-40 object-cover border-b-2 border-primary"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-lg text-primary">
          {module.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">
          {module.description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {module.meta.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              <Icon name={item.icon} className="h-4 w-4 text-primary/80" />
              {item.text}
            </span>
          ))}
        </div>
        {reason && (
          <div className="mt-4 p-3 bg-background/50 rounded-md border border-dashed border-primary/50">
            <p className="text-sm italic text-foreground/80">
              <span className="font-bold text-primary">Motivo:</span> {reason}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full font-bold">{module.buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
