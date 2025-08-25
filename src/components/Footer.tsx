import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    company: [
      { label: "About Us", action: () => scrollToSection("team") },
      { label: "Our Story", action: () => {} },
      { label: "Careers", action: () => {} },
      { label: "Press", action: () => {} }
    ],
    services: [
      { label: "AI Chatbots", action: () => scrollToSection("services") },
      { label: "Data Processing", action: () => scrollToSection("services") },
      { label: "Automation", action: () => scrollToSection("services") },
      { label: "Custom Development", action: () => scrollToSection("services") }
    ],
    resources: [
      { label: "Documentation", action: () => {} },
      { label: "API Reference", action: () => {} },
      { label: "Blog", action: () => {} },
      { label: "Support", action: () => scrollToSection("contact") }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/baaplogo.png" 
                alt="BAAP Company Logo" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Empowering businesses with cutting-edge AI solutions. From chatbots to automation, 
                we transform how you work with intelligent technology.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={link.action}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-foreground/60" />
              <div>
                <div className="text-sm font-medium">Email Us</div>
                <div className="text-sm text-primary-foreground/80">info@baapcompany.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-foreground/60" />
              <div>
                <div className="text-sm font-medium">Call Us</div>
                <div className="text-sm text-primary-foreground/80">+91 9105868788</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © 2025 BAAP Company. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;