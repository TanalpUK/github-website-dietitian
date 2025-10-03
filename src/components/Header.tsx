import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    label: "Ana Sayfa",
    href: "/"
  }, {
    label: "Hakkımda",
    href: "/hakkimda"
  }, {
    label: "Hizmetler",
    href: "/hizmetler"
  }, {
    label: "Blog",
    href: "/blog"
  }, {
    label: "İletişim",
    href: "/",
    active: true
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leap</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => <a key={index} href={link.href} className={`text-sm font-medium transition-colors ${link.active ? "text-primary" : isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}`}>
                {link.label}
              </a>)}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant={isScrolled ? "default" : "hero"} size="default" onClick={() => {
            const formSection = document.getElementById('contact-form');
            formSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              Randevu Al
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü">
            {isMobileMenuOpen ? <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 bg-background/95 backdrop-blur-md border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => <a key={index} href={link.href} className={`text-sm font-medium transition-colors px-4 py-2 ${link.active ? "text-primary bg-primary/10 rounded-lg" : "text-foreground hover:text-primary"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <div className="px-4 pt-2">
                <Button variant="default" className="w-full" onClick={() => {
              setIsMobileMenuOpen(false);
              const formSection = document.getElementById('contact-form');
              formSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                  Randevu Al
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;