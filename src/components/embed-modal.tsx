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

export type EmbedModalProps = {
  title: string;
  url: string;
  embedUrl: string;
  onClose: () => void;
  contentType: 'pdf' | 'sheet';
};

export default function EmbedModal({ title, url, embedUrl, onClose, contentType }: EmbedModalProps) {
  // For Google Sheets, the download link needs to be transformed.
  // This replaces the viewing part of the URL with an export command.
  const downloadUrl = contentType === 'sheet' 
    ? url.split('/edit')[0] + '/export?format=xlsx'
    : url;

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
        <div className="flex-grow p-4 bg-black/50">
          <iframe
            src={embedUrl}
            className="w-full h-full border-none bg-white"
            title={title}
            // sandbox attribute to increase security, but might break some sheet features
            // sandbox="allow-scripts allow-same-origin allow-forms"
          ></iframe>
        </div>
        <DialogFooter className="p-4 border-t justify-end space-x-2">
          <Button variant="outline" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Abrir em nova aba
            </a>
          </Button>
          <Button asChild>
            <a href={downloadUrl} download>
              Baixar {contentType === 'pdf' ? 'PDF' : 'Planilha'}
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
