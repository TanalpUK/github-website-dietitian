import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "İsim en az 2 karakter olmalıdır" }).max(100, { message: "İsim en fazla 100 karakter olabilir" }),
  email: z.string().trim().email({ message: "Geçerli bir e-posta adresi giriniz" }).max(255),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(3, { message: "Konu en az 3 karakter olmalıdır" }).max(200),
  message: z.string().trim().min(10, { message: "Mesaj en az 10 karakter olmalıdır" }).max(1000, { message: "Mesaj en fazla 1000 karakter olabilir" }),
  contactMethod: z.enum(["email", "phone", "either"]).default("email"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactMethod: "email",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Mesajınız Gönderildi! ✓",
        description: "En kısa sürede size geri dönüş yapacağız.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        contactMethod: "email",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(formattedErrors);
        
        toast({
          title: "Form Hatası",
          description: "Lütfen tüm alanları doğru şekilde doldurun.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mesaj Gönderin</h2>
            <p className="text-muted-foreground text-lg">
              Sorularınız için formu doldurun, size en kısa sürede dönüş yapalım
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Adınız Soyadınız <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-posta Adresiniz <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon Numaranız (Opsiyonel)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0(5xx) xxx xx xx"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactMethod">Tercih Ettiğiniz İletişim Yöntemi</Label>
                  <select
                    id="contactMethod"
                    value={formData.contactMethod}
                    onChange={(e) => handleChange("contactMethod", e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  >
                    <option value="email">E-posta</option>
                    <option value="phone">Telefon</option>
                    <option value="either">Farketmez</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Konu <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="subject"
                  placeholder="Danışmanlık konusu veya sorunuz"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Mesajınız <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Detaylı olarak mesajınızı yazabilirsiniz..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p>
                  Bu formu göndererek, <a href="#" className="text-primary hover:underline">Gizlilik Politikamızı</a> kabul etmiş olursunuz.
                  Kişisel bilgileriniz güvenli bir şekilde saklanır ve üçüncü şahıslarla paylaşılmaz.
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                variant="gradient"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Mesajı Gönder
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
