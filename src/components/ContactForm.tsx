import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().trim().min(2, {
    message: "İsim en az 2 karakter olmalıdır"
  }).max(100, {
    message: "İsim en fazla 100 karakter olabilir"
  }),
  email: z.string().trim().email({
    message: "Geçerli bir e-posta adresi giriniz"
  }).max(255),
  phone: z.string().trim().optional(),
  subject: z.string().trim().min(3, {
    message: "Konu en az 3 karakter olmalıdır"
  }).max(200),
  message: z.string().trim().min(10, {
    message: "Mesaj en az 10 karakter olmalıdır"
  }).max(1000, {
    message: "Mesaj en fazla 1000 karakter olabilir"
  }),
  contactMethod: z.enum(["email", "phone", "either"]).default("email")
});
type ContactFormData = z.infer<typeof contactSchema>;
const ContactForm = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactMethod: "email"
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
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
        description: "En kısa sürede size geri dönüş yapacağız."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        contactMethod: "email"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(formattedErrors);
        toast({
          title: "Form Hatası",
          description: "Lütfen tüm alanları doğru şekilde doldurun.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact-form" className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bize Ulaşın</h2>
            <p className="text-muted-foreground text-lg">
              Formu doldurarak bizimle iletişime geçebilirsiniz
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-card">
            <div className="space-y-2">
              <Label htmlFor="name">İsim Soyisim *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Adınız ve soyadınız"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="ornek@email.com"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+90 (555) 123 45 67"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Konu *</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder="Mesajınızın konusu"
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mesajınız *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Mesajınızı buraya yazın..."
                rows={5}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>

            <div className="space-y-2">
              <Label>Tercih Ettiğiniz İletişim Yöntemi</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === "email"}
                    onChange={(e) => handleChange("contactMethod", e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm">E-posta</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === "phone"}
                    onChange={(e) => handleChange("contactMethod", e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm">Telefon</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="either"
                    checked={formData.contactMethod === "either"}
                    onChange={(e) => handleChange("contactMethod", e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm">Farketmez</span>
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
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

            <p className="text-xs text-muted-foreground text-center">
              * Formu göndererek <a href="#" className="text-primary hover:underline">Gizlilik Politikası</a>'mızı kabul etmiş olursunuz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;