import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+1234567890?text=Hello! I would like to know more about Sagantan Digital Hub services.', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-custom-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
    </Button>
  );
};