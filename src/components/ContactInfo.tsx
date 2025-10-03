import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const ContactInfo = () => {
  const contactDetails = [{
    icon: Phone,
    title: "Telefon",
    content: "+90 (555) 123 45 67",
    link: "tel:+905551234567",
    color: "text-primary"
  }, {
    icon: Mail,
    title: "E-posta",
    content: "info@diyetisyeniniz.com",
    link: "mailto:info@diyetisyeniniz.com",
    color: "text-accent"
  }, {
    icon: MapPin,
    title: "Adres",
    content: "Sağlık Sokak No:12, Çankaya/Ankara",
    link: "https://maps.google.com",
    color: "text-info"
  }, {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pzt-Cum: 09:00 - 18:00 | Cmt: 10:00 - 15:00",
    color: "text-success"
  }];
  const socialLinks = [{
    icon: Instagram,
    link: "https://instagram.com",
    label: "Instagram"
  }, {
    icon: Facebook,
    link: "https://facebook.com",
    label: "Facebook"
  }, {
    icon: Linkedin,
    link: "https://linkedin.com",
    label: "LinkedIn"
  }];
  return <section id="contact-info" className="py-12 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">İletişim Bilgileri</h2>
            <p className="text-muted-foreground text-lg">
              Sizinle iletişim kurmak için birçok yol
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            const content = detail.link ? <a href={detail.link} className="hover:text-primary transition-colors" target={detail.link.startsWith('http') ? '_blank' : undefined} rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {detail.content}
                </a> : <span>{detail.content}</span>;
            return <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`inline-flex p-4 rounded-full bg-secondary ${detail.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{detail.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {content}
                      </p>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Map Section */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden mb-12">
            
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Sosyal Medyada Takip Edin</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md">
                    <Icon className="h-5 w-5" />
                  </a>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactInfo;