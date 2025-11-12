import Image from "next/image";
import Link from 'next/link';
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

type Module = {
  id: string;
  title: string;
  description: string;
  imageId?: string;
  lessons?: any[];
  duration?: string;
  buttonText?: string;
  buttonLink?: string;
  meta: { icon: string; text: string }[];
};

type ModuleCardProps = {
  module: Module;
  reason?: string;
  onButtonClick?: () => void;
};

const Icon = ({ name, className }: { name: string; className: string }) => {
  const LucideIcon = (LucideIcons as any)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

export default function ModuleCard({ module, reason, onButtonClick }: ModuleCardProps) {
  const image = module.imageId
    ? PlaceHolderImages.find((img) => img.id === module.imageId)
    : PlaceHolderImages[1];
  
  const isExternalLink = module.buttonLink?.startsWith('http');
  const isPdfModal = module.buttonLink === '#';

  const cardContent = (
      <Card className="flex flex-col bg-card overflow-hidden shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 h-full cursor-pointer">
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
          <Button 
            asChild={!isPdfModal}
            onClick={isPdfModal ? onButtonClick : undefined}
            className="w-full font-bold"
          >
            {isPdfModal ? (
              <div>{module.buttonText}</div>
            ) : (
              <div >{module.buttonText}</div>
            )}
          </Button>
        </CardFooter>
      </Card>
  );

  if (isPdfModal || !module.buttonLink) {
    return cardContent;
  }
  
  if (isExternalLink) {
    return (
      <a href={module.buttonLink} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={module.buttonLink} passHref>
      {cardContent}
    </Link>
  );
}
