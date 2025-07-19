import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Products", id: "products" },
    { label: "Utilities", id: "utilities" },
    { label: "Services", id: "services" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-sm shadow-medium"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={isScrolled ? "/lovable-uploads/68379c0e-884c-437d-98a8-36e7ff259852.png" : "/lovable-uploads/baaplogo.png"}
              alt="BAAP Company Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 font-medium ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="hero" size="sm" onClick={() => scrollToSection("contact")}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={!isScrolled ? "text-white hover:text-white/80 hover:bg-white/10" : ""}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  variant="hero"
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;