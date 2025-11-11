import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6282364471520"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-gold to-gold-glow text-espresso p-4 rounded-full shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-110 animate-pulse-gold group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      <span className="absolute -top-12 right-0 bg-espresso text-gold px-3 py-1 rounded-lg text-sm font-lora whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat Sekarang
      </span>
    </a>
  );
};

export default WhatsAppButton;
