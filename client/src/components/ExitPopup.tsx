import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, X } from "lucide-react";
import { toast } from "sonner";

export default function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detecta quando o mouse sai pela parte superior da página
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);

        // Rastreamento do Google Analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exit_popup_shown', {
            'event_category': 'engagement'
          });
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();

    if (!whatsapp || whatsapp.length < 10) {
      toast.error("Por favor, insira um número de WhatsApp válido");
      return;
    }

    // Rastreamento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17715024874/IhtoCK2c178bEOqnl_9B',
        'event_category': 'Lead',
        'event_label': 'PDF Download'
      });
    }

    // Rastreamento do Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pdf_download', {
        'event_category': 'conversion',
        'event_label': 'Exit Popup'
      });
    }

    // Download do PDF
    const link = document.createElement('a');
    link.href = '/guia-divorcio-rapido.pdf';
    link.download = 'guia-divorcio-rapido.pdf';
    link.click();

    toast.success("PDF baixado com sucesso! Verifique seus downloads.");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <FileText className="w-12 h-12 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Espere! Baixe Nosso Guia Gratuito
          </DialogTitle>
          <DialogDescription className="text-center">
            <strong className="text-foreground">Guia Completo: Divórcio Rápido - Cartório vs. Judicial</strong>
            <br />
            Descubra como seu divórcio pode ser finalizado em até 1 dia, sem burocracia.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleDownload} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp *</Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(21) 99999-9999"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
            <p className="text-xs text-muted-foreground">
              Enviaremos o PDF direto no seu WhatsApp também
            </p>
          </div>

          <Button type="submit" className="w-full" size="lg">
            <FileText className="w-5 h-5 mr-2" />
            Baixar Guia Gratuito
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
