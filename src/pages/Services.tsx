import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Database, Globe, Code, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Services = () => {
  useScrollToTop();
  
  const services = [
    {
      id: 1,
      title: "AI Chatbot Development",
      icon: MessageCircle,
      description: "Custom AI chatbots that understand context, learn from interactions, and provide 24/7 customer support.",
      features: [
        "Natural Language Understanding",
        "Multi-platform integration (Web, WhatsApp, Telegram)",
        "Custom training on your business data",
        "Sentiment analysis and emotion detection",
        "Multilingual support (50+ languages)",
        "Advanced analytics and reporting",
        "API integration with existing systems"
      ],
      deliverables: [
        "Fully functional chatbot",
        "Admin dashboard",
        "API documentation",
        "Training materials",
        "3 months free support"
      ],
      timeline: "4-6 weeks",
      price: "Starting from $5,000",
      process: [
        "Requirements analysis and planning",
        "Data collection and preprocessing",
        "Model training and fine-tuning",
        "Integration and testing",
        "Deployment and optimization"
      ]
    },
    {
      id: 2,
      title: "Data Extraction & Processing",
      icon: Database,
      description: "Automated data extraction from any source with intelligent processing and real-time insights.",
      features: [
        "Web scraping with anti-detection",
        "Document processing (PDF, Excel, Images)",
        "API integration and data mining",
        "Real-time data validation",
        "Custom ETL pipelines",
        "Data warehouse integration",
        "Automated quality checks"
      ],
      deliverables: [
        "Data extraction system",
        "Processing pipelines",
        "Quality assurance dashboard",
        "Scheduled automation",
        "Data export formats"
      ],
      timeline: "3-5 weeks",
      price: "Starting from $3,500",
      process: [
        "Data source analysis",
        "Extraction strategy development",
        "Pipeline architecture design",
        "Implementation and testing",
        "Monitoring and optimization"
      ]
    },
    {
      id: 3,
      title: "Web & Automation Services",
      icon: Globe,
      description: "Full-stack web development with intelligent automation to streamline your business processes.",
      features: [
        "Custom web application development",
        "Process automation and workflow optimization",
        "API development and integration",
        "Cloud deployment and scaling",
        "Mobile-responsive design",
        "Security implementation",
        "Performance optimization"
      ],
      deliverables: [
        "Complete web application",
        "Mobile-responsive design",
        "Admin panel",
        "API documentation",
        "Deployment guide"
      ],
      timeline: "6-10 weeks",
      price: "Starting from $8,000",
      process: [
        "Requirements gathering",
        "UI/UX design and prototyping",
        "Frontend and backend development",
        "Testing and quality assurance",
        "Deployment and launch"
      ]
    },
    {
      id: 4,
      title: "Custom Python Libraries",
      icon: Code,
      description: "Tailored Python libraries and packages designed specifically for your business needs and workflows.",
      features: [
        "Custom algorithm development",
        "Performance-optimized code",
        "Comprehensive documentation",
        "Unit testing and validation",
        "PyPI package publishing",
        "Version control and maintenance",
        "Integration support"
      ],
      deliverables: [
        "Custom Python library",
        "Complete documentation",
        "Usage examples",
        "Test suite",
        "Installation guide"
      ],
      timeline: "2-4 weeks",
      price: "Starting from $2,500",
      process: [
        "Requirements specification",
        "Architecture design",
        "Development and testing",
        "Documentation creation",
        "Package deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Professional AI development services tailored to transform your business with cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card 
                  key={service.id} 
                  className="overflow-hidden hover:shadow-large transition-all duration-300 border-0 bg-gradient-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Service Overview */}
                    <div className="lg:col-span-1">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                            <Badge className="mt-2 bg-primary/10 text-primary border-primary">
                              {service.price}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-lg">{service.description}</p>
                      </CardHeader>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Timeline:</h4>
                          <p className="text-sm text-muted-foreground">{service.timeline}</p>
                        </div>
                        <Button className="w-full">
                          Get Quote
                        </Button>
                      </div>
                    </div>

                    {/* Features & Process */}
                    <div className="lg:col-span-2 space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="font-semibold text-primary mb-4">Deliverables:</h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="font-semibold text-primary mb-4">Our Process:</h4>
                        <div className="grid md:grid-cols-5 gap-4">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="text-center">
                              <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold mb-2 mx-auto">
                                {idx + 1}
                              </div>
                              <p className="text-xs text-muted-foreground">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;