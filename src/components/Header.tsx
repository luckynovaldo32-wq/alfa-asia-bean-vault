import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gold to-gold-accent rounded-full flex items-center justify-center">
              <span className="text-espresso font-cinzel font-bold text-lg md:text-xl">A</span>
            </div>
            <div>
              <h1 className="font-cinzel font-bold text-gold text-base md:text-xl">Alfa Asia Global</h1>
              <p className="text-cream/70 text-[10px] md:text-xs">Premium Coffee Supplier</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-2 md:gap-4">
            <a href="tel:082364471520" className="hidden lg:flex items-center gap-2 text-cream hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-lora">082364471520</span>
            </a>
            <Button 
              asChild
              className="bg-gold text-espresso font-cinzel font-semibold hover:bg-gold-accent transition-all shadow-elegant text-xs md:text-sm px-3 md:px-4 h-9 md:h-10"
            >
              <a 
                href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20dengan%20katalog%20Alfa%20Asia%20Global" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Katalog
              </a>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gold p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gold/20">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-lora transition-colors py-2 ${isActive('/') ? 'text-gold' : 'text-cream hover:text-gold'}`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-lora transition-colors py-2 ${isActive('/products') ? 'text-gold' : 'text-cream hover:text-gold'}`}
              >
                Products
              </Link>
              <Link 
                to="/business" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-lora transition-colors py-2 ${isActive('/business') ? 'text-gold' : 'text-cream hover:text-gold'}`}
              >
                For Business
              </Link>
              <Link 
                to="/process" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-lora transition-colors py-2 ${isActive('/process') ? 'text-gold' : 'text-cream hover:text-gold'}`}
              >
                Our Process
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`font-lora transition-colors py-2 ${isActive('/about') ? 'text-gold' : 'text-cream hover:text-gold'}`}
              >
                About
              </Link>
              <a 
                href="tel:082364471520"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-lora">082364471520</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
