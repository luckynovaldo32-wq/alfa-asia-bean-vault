import ProductCard from "@/components/ProductCard";
import vanillaImage from "@/assets/vanilla-coffee.jpg";
import brownSugarImage from "@/assets/brown-sugar-coffee.jpg";
import butterquetImage from "@/assets/butterquet-coffee.jpg";

const Products = () => {
  const products = [
    {
      title: "Vanilla Blend",
      description: "Vanila Bourbon alami dengan aftertaste creamy yang lembut. Sempurna untuk menciptakan signature drink yang eksklusif.",
      image: vanillaImage,
    },
    {
      title: "Brown Sugar Roast",
      description: "Karamel gula aren dengan body penuh dan rasa manis alami. Ideal untuk menu specialty yang memukau.",
      image: brownSugarImage,
    },
    {
      title: "Butterquet Signature",
      description: "Butter halus berpadu dengan floral bouquet langka. Profil rasa unik yang tak terlupakan.",
      image: butterquetImage,
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-cinzel font-bold text-3xl sm:text-4xl md:text-5xl text-gold mb-4 md:mb-6">
            Premium Coffee Selection
          </h1>
          <p className="font-lora text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
            Tiga varian eksklusif biji kopi flavored Grade 1 Semi Washed, dirancang khusus untuk bisnis premium yang mengutamakan kualitas exceptional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-6 md:p-12 border border-gold/20 text-center shadow-elegant">
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-3xl text-gold mb-3 md:mb-4">
            Butuh Sample atau Informasi Lebih Lanjut?
          </h2>
          <p className="font-lora text-sm md:text-base text-foreground/80 mb-6 max-w-2xl mx-auto">
            Hubungi kami melalui WhatsApp untuk mendapatkan sample gratis dan penawaran khusus untuk mitra bisnis.
          </p>
          <a
            href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20dengan%20sample%20dan%20penawaran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-espresso font-cinzel font-bold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gold-accent transition-all duration-300 hover:scale-105 shadow-elegant"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
