import { Hand, Beaker, Sparkles, Sun } from "lucide-react";
import { Card } from "@/components/ui/card";

const Process = () => {
  const steps = [
    {
      icon: Hand,
      title: "Pemetikan Selektif",
      description: "Cherry kopi dipetik dengan tangan saat mencapai kematangan optimal. Hanya buah merah sempurna yang dipilih untuk menjamin kualitas Grade 1.",
    },
    {
      icon: Beaker,
      title: "Fermentasi Terkontrol",
      description: "Proses fermentasi singkat dilakukan dalam kondisi yang dipantau ketat untuk menghasilkan kompleksitas rasa yang seimbang tanpa over-fermentation.",
    },
    {
      icon: Sparkles,
      title: "Pengupasan & Pencucian",
      description: "Kulit cherry dilepaskan dan biji dicuci bersih untuk menghilangkan mucilage berlebih, menghasilkan rasa yang jernih dan manis alami.",
    },
    {
      icon: Sun,
      title: "Pengeringan Alami",
      description: "Biji dikeringkan di bawah sinar matahari dengan rotasi teratur hingga mencapai kadar air ideal untuk mengunci profil rasa sempurna.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-cinzel font-bold text-4xl md:text-5xl text-gold mb-6">
            Our Semi Washed Process
          </h1>
          <p className="font-lora text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Setiap biji kopi dirawat melalui proses semi washed yang presisi untuk menghasilkan profil rasa yang sempurna dan konsisten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 bg-secondary border-gold/20 hover:border-gold/60 transition-all duration-500 shadow-soft hover:shadow-elegant group"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-cinzel text-gold/50 text-3xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-cinzel font-bold text-xl text-gold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-lora text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-espresso border-2 border-gold/30 p-8 md:p-12 shadow-elegant">
          <div className="text-center mb-8">
            <h2 className="font-cinzel font-bold text-3xl text-gold mb-4">
              Mengapa Semi Washed?
            </h2>
            <p className="font-lora text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Metode semi washed memberikan keseimbangan sempurna antara kejernihan rasa (seperti washed) dan sweetness natural (seperti natural process).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-cinzel font-bold text-xl">1</span>
              </div>
              <h4 className="font-cinzel font-semibold text-gold mb-2">Clean Cup</h4>
              <p className="font-lora text-sm text-foreground/70">Rasa murni tanpa defect atau off-flavor</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-cinzel font-bold text-xl">2</span>
              </div>
              <h4 className="font-cinzel font-semibold text-gold mb-2">Natural Sweetness</h4>
              <p className="font-lora text-sm text-foreground/70">Manis alami dari gula buah yang tersisa</p>
            </div>
            <div className="text-center">
              <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold font-cinzel font-bold text-xl">3</span>
              </div>
              <h4 className="font-cinzel font-semibold text-gold mb-2">Balanced Body</h4>
              <p className="font-lora text-sm text-foreground/70">Tekstur mulut yang smooth dan kompleks</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Process;
