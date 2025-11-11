import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-glow rounded-full flex items-center justify-center">
              <span className="text-espresso font-cinzel font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="font-cinzel font-bold text-gold text-xl">Alfa Asia Global</h1>
              <p className="text-cream/70 text-xs">Premium Coffee Supplier</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-lora transition-colors ${isActive('/') ? 'text-gold' : 'text-cream hover:text-gold'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-lora transition-colors ${isActive('/products') ? 'text-gold' : 'text-cream hover:text-gold'}`}
            >
              Products
            </Link>
            <Link 
              to="/business" 
              className={`font-lora transition-colors ${isActive('/business') ? 'text-gold' : 'text-cream hover:text-gold'}`}
            >
              For Business
            </Link>
            <Link 
              to="/process" 
              className={`font-lora transition-colors ${isActive('/process') ? 'text-gold' : 'text-cream hover:text-gold'}`}
            >
              Our Process
            </Link>
            <Link 
              to="/about" 
              className={`font-lora transition-colors ${isActive('/about') ? 'text-gold' : 'text-cream hover:text-gold'}`}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:082364471520" className="hidden lg:flex items-center gap-2 text-cream hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-lora">082364471520</span>
            </a>
            <Button 
              asChild
              className="bg-gradient-to-r from-gold to-gold-glow text-espresso font-cinzel font-semibold hover:shadow-lg hover:shadow-gold/50 transition-all"
            >
              <a 
                href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20dengan%20katalog%20Alfa%20Asia%20Global" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Katalog
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
