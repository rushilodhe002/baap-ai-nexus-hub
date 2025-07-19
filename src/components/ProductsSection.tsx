import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, Zap, Brain, ArrowRight } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Database,
      title: "Digital Parbhani AI Project – Smart Assistant for Citizens",
      description: "The Digital Parbhani AI Chatbot Project is an intelligent conversational system designed to digitize and streamline citizen services in the Parbhani district. Powered by BAAP AI Chatbot Pro, the system offers natural and human-like conversations in multiple languages (including Marathi), integrates with public service APIs, and provides seamless access to essential government and municipal services..",
      features: ["Natural Language Processing (NLP)", "Multi-language Support:", "Sentiment Analysis", "Context Awareness" , "Custom Training"],
      color: "text-green-600"
    },
    {
      icon: Bot,
      title: "Kissan AI Voice Assistant",
      description: "Kissan AI is a next-gen voice assistant crafted for rural farmers, blending conversational AI, multilingual intelligence, and voice-based query handling. Farmers can simply call and ask anything—from weather updates to crop suggestions—in their local language, and Kissan AI responds like a true krushi dost.      With deep integration of Twilio for calls and Gemini AI for brainpower, it delivers context-aware, smart, and simple answers even in low-digital areas",
      features: ["Conversational AI for Agriculture" ,"Multilingual"  ,"Voice Calling" , "24-hour Chat Memory with Auto Clean-up" , "Farmer Profile Management (via DAO)"],
      color: "text-blue-600"
    },
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
                  onClick={() => window.location.href = '/ai-products'}
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
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.location.href = '/ai-products'}
          >
            See Our All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;