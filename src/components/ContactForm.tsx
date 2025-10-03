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
  return;
};
export default ContactForm;