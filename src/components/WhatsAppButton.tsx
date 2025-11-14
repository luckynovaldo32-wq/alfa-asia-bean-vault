import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6282364471520"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-gold text-espresso p-3 md:p-4 rounded-full shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
      <span className="absolute -top-12 right-0 bg-espresso text-gold px-3 py-1 rounded-lg text-xs md:text-sm font-lora whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Chat Sekarang
      </span>
    </a>
  );
};

export default WhatsAppButton;
