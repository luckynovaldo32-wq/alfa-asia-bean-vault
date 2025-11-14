import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, description, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <h3 className="font-cinzel font-bold text-xl md:text-2xl text-gold group-hover:text-gradient-gold transition-all">
          {title}
        </h3>
        <p className="font-lora text-sm md:text-base text-foreground/80 leading-relaxed">
          {description}
        </p>
        <Button 
          asChild
          className="w-full bg-gold/20 border border-gold/40 text-gold hover:bg-gold hover:text-espresso font-cinzel font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 text-xs md:text-sm h-9 md:h-10"
        >
          <a 
            href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20dengan%20sample%20dan%20penawaran" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="hidden sm:inline">Minta Sample & Penawaran</span>
            <span className="sm:hidden">Minta Sample</span>
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
