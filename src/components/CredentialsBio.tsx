import { Award, BookOpen, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dietitianPhoto from "@/assets/dietitian-photo.jpg";
const CredentialsBio = () => {
  const credentials = ["Kayıtlı Diyetisyen (RD)", "Beslenme ve Diyetetik Yüksek Lisans", "Türkiye Diyetisyenler Derneği Üyesi", "Spor Beslenmesi Sertifikası"];
  const achievements = [{
    icon: Heart,
    number: "500+",
    label: "Mutlu Danışan"
  }, {
    icon: Award,
    number: "10+",
    label: "Yıllık Deneyim"
  }, {
    icon: BookOpen,
    number: "15+",
    label: "Sertifika & Eğitim"
  }];
  return <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo & Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
                <img src={dietitianPhoto} alt="Diyetisyen Profil Fotoğrafı" className="relative rounded-3xl shadow-hover w-full aspect-square object-cover" />
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return <Card key={index} className="text-center">
                      <CardContent className="p-4">
                        <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>

            {/* Bio & Credentials */}
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Hakkımda
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Uzman Diyetisyen & Beslenme Danışmanı
                </h2>
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    Merhaba! Ben [Adınız], kayıtlı diyetisyen ve beslenme danışmanıyım. 
                    10 yılı aşkın süredir insanların sağlıklı yaşam hedeflerine ulaşmalarına 
                    yardımcı oluyorum.
                  </p>
                  <p>
                    Beslenme bilimini seviyorum çünkü insanların hayatlarında gerçek ve 
                    kalıcı değişiklikler yaratma fırsatı sunuyor. Her danışanımın benzersiz 
                    ihtiyaçları ve hedefleri olduğuna inanıyorum, bu yüzden kişiselleştirilmiş 
                    yaklaşımlar geliştiriyorum.
                  </p>
                </div>
              </div>

              {/* Credentials List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Uzmanlıklarım</h3>
                <div className="space-y-3">
                  {credentials.map((credential, index) => <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{credential}</span>
                    </div>)}
                </div>
              </div>

              {/* Testimonial */}
              <Card className="bg-secondary/50 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-sm italic text-muted-foreground mb-3">
                    "Sağlıklı beslenme bir diyet değil, yaşam tarzıdır. Size sadece ne yiyeceğinizi 
                    değil, aynı zamanda neden yiyeceğinizi de öğretmeyi hedefliyorum."
                  </p>
                  <div className="font-semibold text-primary">— [Adınız]</div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <Button size="lg" variant="gradient" onClick={() => {
              const formSection = document.getElementById('contact-form');
              formSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Ücretsiz Konsültasyon Rezervasyonu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CredentialsBio;