import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
const ContactHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
              <img src={heroBanner} alt="Diyetisyen Profil" className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium mb-4">
              Sağlıklı yaşam yolculuğunuzda yanınızdayız
            </div>
            
            <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight md:text-5xl">Dyt. Serkan Durmaz</h1>
            
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed md:mx-0 mx-auto">Kişiselleştirilmiş beslenme danışmanlığı için benimle iletişime geçin. Sağlıklı yaşam hedeflerinize birlikte ulaşalım.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center pt-4">
              <Button variant="hero" size="xl" onClick={scrollToForm} className="group">
                Mesaj Gönder
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>;
};
export default ContactHero;