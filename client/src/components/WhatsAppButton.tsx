import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({ 
  message, 
  variant = "default", 
  size = "default",
  className = "",
  children 
}: WhatsAppButtonProps) {
  const phoneNumber = "5521996921402";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    // Rastreamento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17715024874/IhtoCK2c178bEOqnl_9B',
        'event_category': 'WhatsApp',
        'event_label': message.substring(0, 50)
      });
    }

    // Rastreamento do Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        'event_category': 'engagement',
        'event_label': message.substring(0, 50)
      });
    }

    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children || "Falar no WhatsApp"}
    </Button>
  );
}
