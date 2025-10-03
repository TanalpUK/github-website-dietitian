import { Salad, Dumbbell, Heart, Users, Baby, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const ServicesSnapshot = () => {
  const services = [{
    icon: Salad,
    title: "Kilo Yönetimi",
    description: "Sağlıklı ve sürdürülebilir kilo verme veya alma programları",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }, {
    icon: Dumbbell,
    title: "Spor Beslenmesi",
    description: "Atletik performansınızı artırmak için özel beslenme planları",
    color: "text-accent",
    bgColor: "bg-accent/10"
  }, {
    icon: Heart,
    title: "Medikal Beslenme Tedavisi",
    description: "Diyabet, hipertansiyon ve diğer kronik hastalıklar için beslenme desteği",
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  }, {
    icon: Users,
    title: "Aile Beslenmesi",
    description: "Tüm aile için sağlıklı beslenme alışkanlıkları oluşturma",
    color: "text-info",
    bgColor: "bg-info/10"
  }, {
    icon: Baby,
    title: "Çocuk Beslenmesi",
    description: "Çocuklar için büyüme ve gelişime uygun beslenme planları",
    color: "text-success",
    bgColor: "bg-success/10"
  }, {
    icon: Sparkles,
    title: "Detoks & Wellness",
    description: "Vücudu arındıran ve enerji veren wellness programları",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }];
  return <section className="py-20 bg-background">
      <div className="container px-4">
        
      </div>
    </section>;
};
export default ServicesSnapshot;