import { Award, Droplet } from "lucide-react";
import { Card } from "@/components/ui/card";

const Business = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-gold mb-6">
            For Business Partners
          </h1>
          <p className="font-lora text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Standar kualitas tertinggi untuk bisnis yang tidak berkompromi dengan excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 md:p-12 bg-secondary border-gold/20 hover:border-gold/60 transition-all duration-300 shadow-soft hover:shadow-elegant">
            <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-gold mb-4">
              Grade 1 Excellence
            </h2>
            <div className="space-y-4 font-lora text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-gold">Zero Defect Beans</strong> – Setiap biji dipilih dengan standar internasional tertinggi. Tidak ada kompromi dalam kualitas.
              </p>
              <p>
                <strong className="text-gold">Standar Ekspor Internasional</strong> – Memenuhi kriteria ketat untuk pasar global, menjadikan produk Anda kompetitif di level internasional.
              </p>
              <p>
                <strong className="text-gold">Konsistensi Terjamin</strong> – Profil rasa yang stabil di setiap batch, memastikan signature drink Anda selalu sempurna.
              </p>
              <p>
                <strong className="text-gold">Sertifikasi Kualitas</strong> – Dilengkapi dokumentasi lengkap untuk kebutuhan bisnis dan ekspor Anda.
              </p>
            </div>
          </Card>

          <Card className="p-8 md:p-12 bg-secondary border-gold/20 hover:border-gold/60 transition-all duration-300 shadow-soft hover:shadow-elegant">
            <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Droplet className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-cinzel font-bold text-2xl md:text-3xl text-gold mb-4">
              Semi Washed Process
            </h2>
            <div className="space-y-4 font-lora text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-gold">Fermentasi Terkontrol</strong> – Proses fermentasi singkat yang dipantau ketat menghasilkan kompleksitas rasa yang seimbang.
              </p>
              <p>
                <strong className="text-gold">Rasa Bersih & Manis Alami</strong> – Metode semi washed menghasilkan cup profile yang jernih dengan sweetness natural tanpa tambahan.
              </p>
              <p>
                <strong className="text-gold">Body yang Seimbang</strong> – Tekstur mulut yang smooth dengan keasaman yang harmonis, ideal untuk berbagai metode brewing.
              </p>
              <p>
                <strong className="text-gold">Profil Flavor Stabil</strong> – Karakteristik rasa yang konsisten memudahkan Anda menciptakan menu yang reliable.
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-espresso rounded-2xl p-8 md:p-12 border-2 border-gold/30 text-center shadow-elegant">
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-gold mb-6">
            Mitra Eksklusif Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-cinzel text-gold text-xl mb-2">Specialty Cafes</p>
              <p className="font-lora text-foreground/70">Kafe premium yang mengutamakan kualitas exceptional</p>
            </div>
            <div>
              <p className="font-cinzel text-gold text-xl mb-2">Premium Roasteries</p>
              <p className="font-lora text-foreground/70">Roastery yang melayani pasar high-end</p>
            </div>
            <div>
              <p className="font-cinzel text-gold text-xl mb-2">5-Star Hotels</p>
              <p className="font-lora text-foreground/70">Hotel bintang 5 dengan standar internasional</p>
            </div>
          </div>
          <a
            href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20untuk%20menjadi%20mitra%20bisnis%20Alfa%20Asia%20Global"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-espresso font-cinzel font-bold px-8 py-4 rounded-lg hover:bg-gold-accent transition-all duration-300 hover:scale-105 shadow-elegant"
          >
            Jadilah Mitra Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Business;
