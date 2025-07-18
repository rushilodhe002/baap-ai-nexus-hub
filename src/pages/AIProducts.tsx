import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Database, MessageSquare, Zap, Code, Users, Globe } from "lucide-react";

const AIProducts = () => {
  const products = [
    {
      id: 1,
      title: "BAAP AI Chatbot Pro",
      description: "Advanced conversational AI with natural language processing and multi-language support.",
      longDescription: "Our flagship chatbot solution uses cutting-edge machine learning algorithms to provide human-like conversations. Features include sentiment analysis, context awareness, and seamless integration with existing business systems.",
      features: ["Natural Language Processing", "Multi-language Support", "Sentiment Analysis", "API Integration", "Custom Training"],
      technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      icon: MessageSquare,
      category: "Conversational AI",
      price: "Starting at $299/month"
    },
    {
      id: 2,
      title: "Smart Data Processor",
      description: "Intelligent data extraction and processing with automated insights generation.",
      longDescription: "Transform your raw data into actionable insights with our AI-powered data processing engine. Handles structured and unstructured data with automated cleaning, analysis, and reporting capabilities.",
      features: ["Automated Data Cleaning", "Pattern Recognition", "Real-time Processing", "Custom Reports", "API Access"],
      technologies: ["Python", "Pandas", "Apache Spark", "FastAPI", "PostgreSQL"],
      icon: Database,
      category: "Data Processing",
      price: "Starting at $199/month"
    },
    {
      id: 3,
      title: "BAAP Vision AI",
      description: "Computer vision solutions for image recognition, object detection, and visual analytics.",
      longDescription: "Advanced computer vision platform that can identify objects, recognize faces, read text, and analyze visual content with enterprise-grade accuracy and security.",
      features: ["Object Detection", "Face Recognition", "OCR", "Visual Analytics", "Real-time Processing"],
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "AWS"],
      icon: Brain,
      category: "Computer Vision",
      price: "Starting at $399/month"
    },
    {
      id: 4,
      title: "AI Workflow Automation",
      description: "Intelligent automation platform that streamlines business processes using AI.",
      longDescription: "Automate complex business workflows with AI-driven decision making. Reduces manual work by up to 80% while maintaining accuracy and compliance.",
      features: ["Process Automation", "Decision Trees", "Integration Hub", "Performance Analytics", "Compliance Monitoring"],
      technologies: ["Python", "Celery", "Redis", "Docker", "Kubernetes"],
      icon: Zap,
      category: "Automation",
      price: "Starting at $499/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 animate-fade-in">
            <Bot className="w-4 h-4 mr-2" />
            AI Products & Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Cutting-Edge <span className="text-primary">AI Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Discover our comprehensive suite of AI-powered solutions designed to transform your business operations and drive innovation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/20" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <product.icon className="w-8 h-8" />
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {product.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary" />
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-primary" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                      <Button size="sm" className="hover-scale">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team to discuss custom AI solutions tailored to your specific needs.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="hover-scale">
              <Users className="w-5 h-5 mr-2" />
              Consult with Experts
            </Button>
            <Button variant="outline" size="lg">
              <Globe className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIProducts;