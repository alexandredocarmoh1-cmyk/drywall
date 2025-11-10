'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertTriangle,
  Copy,
  Sparkles,
  Check,
  Send,
  Info,
  ArrowLeft,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const PixInfoRow = ({
  label,
  value,
  isCopyable,
}: {
  label: string;
  value: string;
  isCopyable?: boolean;
}) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast({
      description: `${label} copiado para a área de transferência!`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-start text-sm">
        <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
        <div>
          <p className="text-muted-foreground">{label}</p>
          <p className="font-semibold text-foreground text-base break-words">
            {value}
          </p>
        </div>
      </div>
      {isCopyable && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      )}
    </div>
  );
};

export default function GrupoVipPage() {
  const pixKey = '(22) 99957-6954';
  const whatsappNumber = '5522999576954';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá, fiz o pagamento de R$10,00 para entrar no grupo VIP. Segue meu comprovante.'
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-lg space-y-6">
        <Link href="/" passHref>
            <Button variant="ghost" className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Área de Membros
            </Button>
        </Link>
          <Card className="bg-card shadow-lg border-primary/20">
            <CardContent className="p-6 space-y-6">
              <Alert className="bg-yellow-500/10 border-yellow-500/30 text-yellow-200">
                <AlertTriangle className="h-4 w-4 !text-yellow-400" />
                <AlertTitle className="text-primary text-lg font-bold">
                  Acesso Bloqueado!
                </AlertTitle>
                <AlertDescription className="text-base text-primary/90">
                  Esse bônus será liberado após o PIX de R$10.
                </AlertDescription>
              </Alert>

              <div>
                <h2 className="flex items-center text-lg font-semibold text-primary mb-4">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Faça o Pix agora:
                </h2>
                <div className="space-y-4 rounded-lg border bg-card p-4">
                  <PixInfoRow
                    label="Chave Pix (CELULAR):"
                    value={pixKey}
                    isCopyable
                  />
                  <PixInfoRow
                    label="Nome:"
                    value="PATRICK MOURA DE JESUS (Meu Sócio)"
                  />
                  <PixInfoRow label="Banco:" value="Inter S.A" />
                  <PixInfoRow label="Valor:" value="R$ 10,00" />
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-4">
                <h3 className="flex items-center text-sm font-semibold text-green-300">
                  <Send className="h-4 w-4 mr-2" />
                  Envie o comprovante no WhatsApp do suporte:
                </h3>
                <Button asChild size="lg" className="w-full bg-verde-cta text-white hover:bg-verde-cta/90 font-bold !p-3 !h-auto">
                  <a href={whatsappLink} target="_blank">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-2 text-center text-xs sm:text-sm justify-center">
                      <div className="md:hidden">CLIQUE AQUI PARA</div>
                      <div className="flex items-center justify-center gap-2">
                          <span className="md:hidden">ENVIAR O</span>
                           <span className="hidden md:inline">CLIQUE AQUI PARA ENVIAR O COMPROVANTE</span>
                      </div>
                      <div className="md:hidden">COMPROVANTE</div>
                    </div>
                  </a>
                </Button>
              </div>

              <Alert className="bg-azul-info border-azul-info-foreground/30 text-azul-info-foreground">
                <Info className="h-4 w-4 !text-azul-info-foreground" />
                <AlertTitle className="font-bold">
                  Já pagou e ainda tá bloqueado?
                </AlertTitle>
                <AlertDescription className="flex items-center">
                  Sem problema! É só mandar o comprovante no número do suporte
                  que a gente te coloca no grupo VIP de alunas.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
