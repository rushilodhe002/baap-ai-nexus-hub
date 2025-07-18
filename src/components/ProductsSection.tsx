import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, Zap, Brain, ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI solutions that understand context, provide accurate responses, and learn from interactions to improve customer experience.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training", "Analytics Dashboard"],
      color: "text-blue-600"
    },
    {
      icon: Database,
      title: "Data Processing Platform",
      description: "Advanced data extraction, transformation, and analysis tools that turn raw data into actionable business insights.",
      features: ["Real-time Processing", "API Integration", "Data Visualization", "Automated Reports"],
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Automation Suite",
      description: "Streamline your business operations with our comprehensive automation tools designed to reduce manual work and increase efficiency.",
      features: ["Workflow Automation", "Task Scheduling", "Error Handling", "Performance Monitoring"],
      color: "text-purple-600"
    },
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your business needs, from predictive analytics to recommendation systems.",
      features: ["Predictive Analytics", "Pattern Recognition", "Recommendation Engine", "Continuous Learning"],
      color: "text-orange-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in-left">
            Cutting-Edge AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Discover our comprehensive suite of AI-powered tools designed to transform your business operations and drive growth.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-background/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-background shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                    <product.icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                      {product.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6">
            Get started with our AI solutions today and see the difference.
          </p>
          <Button variant="cta" size="lg">
            Schedule a Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;