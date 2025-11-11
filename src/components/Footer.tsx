import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-cinzel font-bold text-gold text-xl mb-4">Alfa Asia Global</h3>
            <p className="font-lora text-cream/80 text-sm leading-relaxed">
              Pemasok eksklusif biji kopi flavored Grade 1 Semi Washed untuk bisnis premium di Indonesia & ekspor.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-gold mb-4">Kontak</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/6282364471520" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-cream/80 hover:text-gold transition-colors font-lora text-sm"
              >
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>WhatsApp: 082364471520</span>
              </a>
              <a 
                href="tel:082364471520"
                className="flex items-start gap-2 text-cream/80 hover:text-gold transition-colors font-lora text-sm"
              >
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Telepon: 082364471520</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel font-semibold text-gold mb-4">Alamat</h4>
            <div className="flex items-start gap-2 text-cream/80 font-lora text-sm">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                Jl Kembang Harapan No 11, RT 03 RW 05<br />
                Cinta Raja, Sail<br />
                Kota Pekanbaru, Riau<br />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-lora text-cream/60 text-sm text-center md:text-left">
              © 2024 Alfa Asia Global. All rights reserved.
            </p>
            <p className="font-lora text-cream/60 text-sm">
              Exclusively for business partners
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
