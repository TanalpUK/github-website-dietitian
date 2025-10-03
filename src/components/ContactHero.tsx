import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const ContactHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium mb-4">
            Sağlıklı yaşam yolculuğunuzda yanınızdayız
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            İletişime Geçin
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            Kişiselleştirilmiş beslenme danışmanlığı için benimle iletişime geçin. 
            Sağlıklı yaşam hedeflerinize birlikte ulaşalım.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToForm}
              className="group"
            >
              Mesaj Gönder
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/5 border-white/30 text-white hover:bg-white/15 backdrop-blur-sm"
              onClick={() => {
                const contactInfo = document.getElementById('contact-info');
                contactInfo?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              İletişim Bilgileri
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default ContactHero;
