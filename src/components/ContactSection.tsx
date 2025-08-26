import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  // Contact form removed. This section now focuses on direct contact information and FAQs.
  const handleWhatsAppClick = () => {
    const phone = "919105868788"; // E.164 without '+' and spaces
    const message = encodeURIComponent("Hi! I'd like to discuss my project.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@baapcompany.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9105868788",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "live, At paregaon, Tal, Sangamner, Maharashtra 422611",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 hours",
      description: "Average response time"
    }
  ];

  return (
    <section id="contact" className="py-10 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in-left">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Ready to transform your business with AI? We'd love to hear about your project and discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={item.title}
                className="border-0 bg-background/50 backdrop-blur-sm hover:shadow-medium transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                      <p className="font-medium text-foreground mb-1">{item.content}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ section */}
          <div className="space-y-6">
            <Card className="border-0 bg-background/50 backdrop-blur-sm shadow-medium animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">How we can help</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  Reach out via email or phone and our team will follow up within 24 hours.
                </p>
                <div className="mt-4">
                  <Button onClick={handleWhatsAppClick} variant="hero" size="lg" className="w-full">
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-primary/5 backdrop-blur-sm animate-fade-in">
              <CardContent className="p-6">
                <h3 className="font-bold text-primary mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">How long does development take?</h4>
                    <p className="text-xs text-muted-foreground">Project timelines vary from 1-8 weeks depending on complexity.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Do you offer ongoing support?</h4>
                    <p className="text-xs text-muted-foreground">Yes, we provide maintenance and support packages for all projects.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Can you work with existing systems?</h4>
                    <p className="text-xs text-muted-foreground">Absolutely! We specialize in integrating AI solutions with existing infrastructure.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA section */}
        {/* <div className="mt-16 text-center bg-primary/5 rounded-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Prefer a Direct Conversation?
          </h3>
          <p className="text-muted-foreground mb-6">
            Schedule a free 30-minute consultation to discuss your AI needs.
          </p>
          <Button variant="cta" size="lg">
            Book a Call
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;