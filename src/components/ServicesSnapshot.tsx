import { Salad, Dumbbell, Heart, Users, Baby, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSnapshot = () => {
  const services = [
    {
      icon: Salad,
      title: "Kilo Yönetimi",
      description: "Sağlıklı ve sürdürülebilir kilo verme veya alma programları",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Dumbbell,
      title: "Spor Beslenmesi",
      description: "Atletik performansınızı artırmak için özel beslenme planları",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Heart,
      title: "Medikal Beslenme Tedavisi",
      description: "Diyabet, hipertansiyon ve diğer kronik hastalıklar için beslenme desteği",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Users,
      title: "Aile Beslenmesi",
      description: "Tüm aile için sağlıklı beslenme alışkanlıkları oluşturma",
      color: "text-info",
      bgColor: "bg-info/10",
    },
    {
      icon: Baby,
      title: "Çocuk Beslenmesi",
      description: "Çocuklar için büyüme ve gelişime uygun beslenme planları",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Sparkles,
      title: "Detoks & Wellness",
      description: "Vücudu arındıran ve enerji veren wellness programları",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Hizmetlerimiz
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Size Nasıl Yardımcı Olabilirim?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kişiselleştirilmiş beslenme danışmanlığı ile sağlık hedeflerinize ulaşmanız için 
              geniş hizmet yelpazesi sunuyorum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
                >
                  <CardHeader>
                    <div className={`inline-flex p-3 rounded-xl ${service.bgColor} ${service.color} mb-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Hangi hizmetin size uygun olduğundan emin değil misiniz?
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ücretsiz Danışma Talep Edin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
