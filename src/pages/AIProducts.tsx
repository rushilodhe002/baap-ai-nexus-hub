import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Brain, Database, MessageSquare, Zap, Code, Users, Globe, Package } from "lucide-react";

const AIProducts = () => {
  useScrollToTop();
  
  const products = [
    {
      id: 1,
      title: "Digital Parbhani AI Project – Smart Assistant for Citizens",
      description: "Advanced conversational AI with natural language processing and multi-language support.",
      longDescription: "The Digital Parbhani AI Chatbot Project is an intelligent conversational system designed to digitize and streamline citizen services in the Parbhani district. Powered by BAAP AI Chatbot Pro, the system offers natural and human-like conversations in multiple languages (including Marathi), integrates with public service APIs, and provides seamless access to essential government and municipal services.",
      features: ["Natural Language Processing (NLP)", "Multi-language Support:", "Sentiment Analysis", "Context Awareness" , "Custom Training"],
      technologies: ["Python & fastapi", "Langchain", "flutter", "Node.js", "postSQL" ,"Gemini"],
      icon: MessageSquare,
      category: "Conversational AI",  
      price: ""
    },
    {
      id: 2,
      title: "Kissan AI Voice Assistant",
      description: "Empowering farmers with voice-based, multilingual conversational AI built for real-time agricultural support, using state-of-the-art AI + voice tech.",
      longDescription: "Kissan AI is a next-gen voice assistant crafted for rural farmers, blending conversational AI, multilingual intelligence, and voice-based query handling. Farmers can simply call and ask anything—from weather updates to crop suggestions—in their local language, and Kissan AI responds like a true krushi dost.With deep integration of Twilio for calls and Gemini AI for brainpower, it delivers context-aware, smart, and simple answers even in low-digital areas..",
      features: ["Conversational AI for Agriculture" ,"Multilingual"  ,"Voice Calling" , "24-hour Chat Memory with Auto Clean-up" , "Farmer Profile Management (via DAO)"],
      technologies: ["Twilio Voice","Qdrant" , "Langchain" ,"python FastAPI" ,"Docker + Render/VPS" , "Gemini"],
      icon: Database,
      category: "Data Processing",
      price: ""
    },
    {
      id: 3,
      title: "FarmerX AI Assistant",
      description: "AI-powered financial and advisory chatbot tailored for Indian farmers with full Marathi language support.",
      longDescription: "Our AI assistant helps farmers manage transactions, get crop and market insights, and ask farming-related questions in their local language. Features include multilingual conversation, financial tracking, context awareness, and seamless integration with databases and dashboards.",
      features: ["Natural Language Processing ", "Marathi & Hindi Language Support", "Transaction Summary & Insights", "AI-Powered Chat Assistance","LangChain + Gemini Integration", "Context-Aware Suggestions"],
      technologies: ["Python","Scikit-learn", "next.js", "FastApi", "Langchain"],
      icon: Brain,
      category: "Artificial Inteligence",
      price: ""
    },
    {
      id: 4,
      title: "BAAP AI ReportGen",
      description: "Smart Reporting Assistant for Organizations",
      longDescription: "BAAP AI ReportGen is an intelligent backend solution designed to simplify data reporting and dashboard generation for organizations of all sizes. Powered by Gemini API and developed under BAAP AI, the system allows users to ask natural language questions and get instant SQL-powered insights — all through a sleek and scalable FastAPI backend.",
      features: ["Natural Language Processing (NLP)", "Dynamic Chart Rendering", "Schema Awareness", "API Integration", "Multi-user Support","Logs & Monitoring"],
      technologies: ["Python", "FastAPI", "Gemini API", "MySQL", "JWT Auth","Chat.js"],
      icon: Zap,
      category: "Artificial Inteligence",
      price: ""
    },
    {
      id: 5,
      title: "BAAP AI Builder",
      description: "Smart BAAP AI Builder – Build Your AI Chatbot in Minutes",
      longDescription: "BAAP AI Builder is a no-code AI chatbot development platform that empowers users to build intelligent, domain-specific chatbots in just minutes. Designed with simplicity and power in mind, it allows individuals, educators, businesses, and government organizations to create multilingual, embeddable, and API-connected chatbot systems without writing a single line of code.Whether you want to turn a website, PDF, or business workflow into an intelligent assistant, BAAP AI Builder does it all – from ingestion to deployment!",
      features: ["Multilingual Support", "PDF & Web Ingestion", "Qdrant Vector Search", "Gemini AI Integration:", "Embeddable Chat Widget","Analytics & Logs"],
      technologies: ["Python & FastAPI", "Gemini API", "Qdrant", "React + Tailwind CSS","PostgreSQ , Docker"],
      icon: Zap,
      category: "Artificial Inteligence",
      price: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-primary">
        <div className="container mx-auto">
          <BackButton className="mb-6" />
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-fade-in text-white/90 bg-white/20 border-white/30">
              <Package className="w-4 h-4 mr-2" />
              AI Products & Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Cutting-Edge <span className="text-white/90">AI Products</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Discover our comprehensive suite of AI-powered solutions designed to transform your business operations and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-0 sm:px-4">
        <div className="container mx-auto px-3 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/20 w-full" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                        <product.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <Badge variant="outline" className="sm:hidden text-xs">{product.category}</Badge>
                    </div>
                    <Badge variant="outline" className="hidden sm:block text-xs">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors break-words">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {product.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
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
                    <h4 className="font-semibold mb-3 flex items-center text-sm sm:text-base">
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
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t gap-3">
                    <span className="text-lg font-semibold text-primary">
                      {product.price}
                    </span>
                    <div className="flex flex-col sm:flex-row gap-2">
                      {/* <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        Learn More
                      </Button>
                      <Button size="sm" className="hover-scale text-xs sm:text-sm">
                        Get Started
                      </Button> */}
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team to discuss custom AI solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="hover-scale w-full sm:w-auto">
              <Users className="w-5 h-5 mr-2" />
              Consult with Experts
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
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