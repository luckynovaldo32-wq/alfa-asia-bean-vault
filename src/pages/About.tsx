const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-gold mb-6">
              About Alfa Asia Global
            </h1>
          </div>

          <div className="bg-espresso rounded-2xl p-12 md:p-16 border-2 border-gold/30 text-center mb-12 shadow-elegant">
            <p className="font-cinzel text-2xl md:text-3xl text-gold leading-relaxed italic">
              "Alfa Asia Global dijalankan oleh Muhammad Alif Saifullah dengan komitmen penuh pada kualitas Grade 1 semi washed."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card backdrop-blur-sm border border-gold/20 rounded-lg p-8 hover:border-gold/60 transition-all duration-300 shadow-soft">
              <h3 className="font-cinzel font-bold text-xl text-gold mb-4">Visi Kami</h3>
              <p className="font-lora text-foreground/80 leading-relaxed">
                Menjadi pemasok terpercaya biji kopi flavored Grade 1 untuk bisnis premium di Indonesia dan pasar ekspor, dengan standar kualitas yang tidak pernah berkompromi.
              </p>
            </div>
            <div className="bg-card backdrop-blur-sm border border-gold/20 rounded-lg p-8 hover:border-gold/60 transition-all duration-300 shadow-soft">
              <h3 className="font-cinzel font-bold text-xl text-gold mb-4">Komitmen Kualitas</h3>
              <p className="font-lora text-foreground/80 leading-relaxed">
                Setiap biji kopi yang kami suplai telah melalui seleksi ketat dan proses semi washed yang presisi untuk memastikan profil rasa exceptional yang konsisten.
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12 border border-gold/20 shadow-elegant">
            <h3 className="font-cinzel font-bold text-2xl text-gold mb-6 text-center">
              Mengapa Memilih Kami?
            </h3>
            <div className="space-y-4 font-lora text-foreground/80">
              <div className="flex gap-3">
                <span className="text-gold flex-shrink-0">✦</span>
                <p><strong className="text-gold">Eksklusivitas Terjamin</strong> – Kami hanya melayani mitra bisnis terpilih yang mengutamakan kualitas premium.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold flex-shrink-0">✦</span>
                <p><strong className="text-gold">Grade 1 Sertifikasi</strong> – Semua produk memenuhi standar internasional dengan zero defect beans.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold flex-shrink-0">✦</span>
                <p><strong className="text-gold">Varian Unik</strong> – Vanilla, Brown Sugar, dan Butterquet flavored yang tidak tersedia di supplier konvensional.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold flex-shrink-0">✦</span>
                <p><strong className="text-gold">Layanan Personal</strong> – Komunikasi langsung dengan owner untuk kebutuhan bisnis Anda.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-gold flex-shrink-0">✦</span>
                <p><strong className="text-gold">Konsistensi Stok</strong> – Pasokan stabil untuk mendukung operasional bisnis Anda tanpa khawatir kehabisan stok.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-lora text-foreground/80 mb-6">
              Tertarik untuk menjadi mitra bisnis kami?
            </p>
            <a
              href="https://wa.me/6282364471520?text=Halo,%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20Alfa%20Asia%20Global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-espresso font-cinzel font-bold px-8 py-4 rounded-lg hover:bg-gold-accent transition-all duration-300 hover:scale-105 shadow-elegant"
            >
              Hubungi Muhammad Alif Saifullah
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
