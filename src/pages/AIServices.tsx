import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Code, Database, Zap, Users, Clock, Check, ArrowRight } from "lucide-react";

const AIServices = () => {
  const services = [
    {
      category: "AI Development",
      icon: Bot,
      services: [
        {
          title: "Custom AI Chatbot Development",
          description: "Build intelligent conversational agents tailored to your business needs",
          features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training", "Analytics Dashboard"],
          timeline: "4-8 weeks",
          price: "Starting at $5,000"
        },
        {
          title: "Machine Learning Model Development",
          description: "Create predictive models and AI algorithms for your specific use cases",
          features: ["Data Analysis", "Model Training", "Performance Optimization", "Deployment Support"],
          timeline: "6-12 weeks",
          price: "Starting at $8,000"
        }
      ]
    },
    {
      category: "Data Solutions",
      icon: Database,
      services: [
        {
          title: "Data Extraction & Processing",
          description: "Automated data collection and processing from various sources",
          features: ["Web Scraping", "API Integration", "Data Cleaning", "Real-time Processing"],
          timeline: "2-6 weeks",
          price: "Starting at $3,000"
        },
        {
          title: "Business Intelligence Solutions",
          description: "Transform your data into actionable insights with AI-powered analytics",
          features: ["Custom Dashboards", "Predictive Analytics", "Automated Reports", "Data Visualization"],
          timeline: "4-8 weeks",
          price: "Starting at $6,000"
        }
      ]
    },
    {
      category: "Automation",
      icon: Zap,
      services: [
        {
          title: "Process Automation",
          description: "Streamline business processes with intelligent automation solutions",
          features: ["Workflow Design", "AI Decision Making", "System Integration", "Performance Monitoring"],
          timeline: "3-7 weeks",
          price: "Starting at $4,000"
        },
        {
          title: "Web Automation Services",
          description: "Automate repetitive web-based tasks and data collection",
          features: ["Browser Automation", "Form Filling", "Data Extraction", "Scheduled Tasks"],
          timeline: "2-4 weeks",
          price: "Starting at $2,500"
        }
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Development & Testing",
      description: "Our team builds and rigorously tests your AI solution",
      duration: "Varies by project"
    },
    {
      step: 3,
      title: "Deployment & Training",
      description: "We deploy the solution and train your team on its usage",
      duration: "1 week"
    },
    {
      step: 4,
      title: "Support & Maintenance",
      description: "Ongoing support and optimization to ensure peak performance",
      duration: "Ongoing"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      duration: "2-4 weeks",
      description: "Perfect for small businesses starting with AI",
      features: [
        "Basic AI chatbot",
        "Simple automation",
        "Email support",
        "Basic analytics",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$8,000",
      duration: "4-8 weeks",
      description: "Comprehensive AI solutions for growing businesses",
      features: [
        "Advanced AI models",
        "Custom integrations",
        "Priority support",
        "Advanced analytics",
        "3 months support",
        "Training sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "8+ weeks",
      description: "Full-scale AI transformation for large organizations",
      features: [
        "Enterprise AI platform",
        "Custom development",
        "24/7 support",
        "Dedicated team",
        "Unlimited support",
        "On-site training"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 animate-fade-in">
            <Users className="w-4 h-4 mr-2" />
            AI Services & Consulting
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Transform Your Business with <span className="text-primary">AI Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            From custom AI development to process automation, we deliver end-to-end solutions that drive real business value.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="development">AI Development</TabsTrigger>
              <TabsTrigger value="data">Data Solutions</TabsTrigger>
              <TabsTrigger value="automation">Automation</TabsTrigger>
            </TabsList>

            {services.map((category, categoryIndex) => (
              <TabsContent key={category.category} value={category.category.toLowerCase().replace(' ', '')}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.services.map((service, index) => (
                    <Card key={service.title} className="animate-fade-in border-primary/20 hover:shadow-glow transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <category.icon className="w-6 h-6" />
                          </div>
                          <Badge variant="outline">{category.category}</Badge>
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Check className="w-4 h-4 mr-2 text-primary" />
                            What's Included
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="w-3 h-3 text-primary" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {service.timeline}
                            </div>
                            <div className="text-lg font-semibold text-primary">
                              {service.price}
                            </div>
                          </div>
                          <Button className="hover-scale">
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={step.step} className="text-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <Badge variant="secondary">{step.duration}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={pkg.name} className={`animate-fade-in border-primary/20 relative ${pkg.popular ? 'border-primary shadow-glow' : ''}`} style={{animationDelay: `${index * 100}ms`}}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription>{pkg.description}</CardDescription>
                  <Badge variant="outline">{pkg.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 hover-scale ${pkg.popular ? '' : 'variant-outline'}`}>
                    {pkg.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can transform your business operations and drive growth.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="hover-scale">
              <Users className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              <ArrowRight className="w-5 h-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServices;