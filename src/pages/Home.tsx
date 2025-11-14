import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FallingCoffeeBeans from "@/components/FallingCoffeeBeans";
import heroImage from "@/assets/hero-coffee-beans.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
        <img 
          src={heroImage} 
          alt="Premium Coffee Beans"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-espresso/60 z-10" />
        <FallingCoffeeBeans />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="font-cinzel font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-gradient-gold animate-fade-in">
            Alfa Asia Global
          </h1>
          <p className="font-cinzel text-lg sm:text-xl md:text-2xl lg:text-3xl text-gold mb-3 md:mb-4 animate-fade-in">
            Grade 1 Semi Washed Flavored Coffee Beans
          </p>
          <p className="font-lora text-base sm:text-lg md:text-xl text-cream/90 mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in px-4">
            Eksklusif untuk Mitra Bisnis Terpilih • Pekanbaru, Indonesia
          </p>
          
          <Button 
            asChild
            className="bg-gold text-espresso font-cinzel font-bold text-sm sm:text-base md:text-lg px-6 py-5 md:px-8 md:py-6 hover:bg-gold-accent transition-all duration-300 hover:scale-105 shadow-elegant animate-fade-in h-auto"
          >
            <a 
              href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20dengan%20katalog%20Alfa%20Asia%20Global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3"
            >
              <span className="hidden sm:inline">Dapatkan Katalog Eksklusif via WhatsApp</span>
              <span className="sm:hidden">Katalog Eksklusif</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-espresso">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel font-bold text-2xl sm:text-3xl md:text-4xl text-gold mb-4 md:mb-6">
            Siap Tingkatkan Menu Kopi Anda?
          </h2>
          <p className="font-lora text-base md:text-lg text-cream/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Dapatkan akses eksklusif ke katalog lengkap dan penawaran khusus untuk mitra bisnis.
          </p>
          <Button 
            asChild
            className="bg-gold text-espresso font-cinzel font-bold text-sm sm:text-base md:text-lg px-6 py-5 md:px-8 md:py-6 hover:bg-gold-accent transition-all duration-300 hover:scale-105 shadow-elegant h-auto"
          >
            <a 
              href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20dengan%20katalog%20Alfa%20Asia%20Global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel font-bold text-2xl sm:text-3xl md:text-4xl text-center text-gold mb-8 md:mb-12">
            Lokasi Kami
          </h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-gold/20 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6616837644844!2d101.42644931475382!3d0.5070652997254885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a8e4b7f5c7db%3A0x3c4b7c0c8b5c7db!2sJl.%20Kembang%20Harapan%2C%20Cinta%20Raja%2C%20Kec.%20Sail%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
              width="100%"
              height="300"
              className="md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alfa Asia Global Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
