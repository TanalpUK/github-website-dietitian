import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import CredentialsBio from "@/components/CredentialsBio";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <CredentialsBio />
        <ContactInfo />
        <ServicesSnapshot />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
