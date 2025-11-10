'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type PdfModalProps = {
  title: string;
  url: string;
  embedUrl: string;
  onClose: () => void;
};

export default function PdfModal({ title, url, embedUrl, onClose }: PdfModalProps) {
  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="text-primary">{title}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>
        </DialogHeader>
        <div className="flex-grow p-4">
          <iframe
            src={embedUrl}
            className="w-full h-full border-none"
            title={title}
          ></iframe>
        </div>
        <DialogFooter className="p-4 border-t justify-end space-x-2">
          <Button variant="outline" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Abrir em nova aba
            </a>
          </Button>
          <Button asChild>
            <a href={url} download>
              Baixar PDF
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
