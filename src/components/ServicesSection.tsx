import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, MessageSquare, Database, Cog, Library } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "AI Product Development",
      description: "End-to-end AI product development from idea to scalable deployment, aligned with your business goals.",
      features: [
        "Ideation & AI use-case validation",
        "Model design and fine-tuning (LLMs, ML, NLP)",
        "Backend integration (Python, FastAPI)",
        "Frontend dashboards for user interaction",
        "Scalable deployment & monitoring"
      ],
      pricing: "Starting",
      timeline: "4-8 weeks"
    },    
    {
      icon: Database,
      title: "AI Teaching Services",
      description: "Learn AI practically with personalized, project-based teaching tailored to your pace and goals.",
      features: [
        "Beginner to advanced AI & ML topics",
        "Hands-on coding sessions (Python, ML, NLP)",
        "Project-based learning with real datasets",
        "Doubt clearing and mentorship support",
        "Career guidance in AI industry"
      ],
      pricing: "Starting",
      timeline: "2-6 weeks"
    }  
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Cog className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in-left">
            Professional AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            From concept to deployment, we provide end-to-end AI solutions that drive real business value and competitive advantage.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm font-semibold text-primary">{service.pricing}</span>
                      <span className="text-sm text-muted-foreground">{service.timeline}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  {/* <Button 
                    variant="default" 
                    className="flex-1 group hover:bg-primary/90"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                  <Button 
                    variant="outline" 
                    className="flex-1 group"
                    onClick={() => window.location.href = '/ai-services'}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-20 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-8">Our Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and requirements" },
              { step: "02", title: "Design", desc: "Creating the perfect solution architecture" },
              { step: "03", title: "Develop", desc: "Building with cutting-edge technologies" },
              { step: "04", title: "Deploy", desc: "Launch and ongoing support" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Start Your AI Journey?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Let's discuss your project and create a custom solution that drives results.
          </p>
           <Button 
              size="lg" 
              className="hover-scale"
              onClick={() => window.open('https://wa.me/919105868788', '_blank')}
            >
            Schedule Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;