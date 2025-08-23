import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const Products = () => {
  useScrollToTop();
  
  const products = [
    {
      id: 1,
      title: "AI ChatBot Pro",
      category: "Conversational AI",
      description: "Advanced AI chatbot solution with natural language processing, multi-language support, and seamless integration capabilities.",
      fullDescription: "Our AI ChatBot Pro is a state-of-the-art conversational AI platform designed to revolutionize customer interactions. Built with advanced NLP algorithms and machine learning models, it provides human-like conversations while maintaining high accuracy and context awareness.",
      features: [
        "Natural Language Processing with 99% accuracy",
        "Multi-language support (50+ languages)",
        "Real-time sentiment analysis",
        "Custom training on your data",
        "API integration for all platforms",
        "24/7 automated customer support",
        "Advanced analytics and reporting"
      ],
      technologies: ["Python", "TensorFlow", "BERT", "FastAPI", "WebSocket"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      price: "$299/month",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "DataMiner AI",
      category: "Data Extraction",
      description: "Intelligent data extraction and processing tool that transforms unstructured data into actionable insights using advanced AI algorithms.",
      fullDescription: "DataMiner AI leverages cutting-edge machine learning algorithms to extract, process, and analyze data from various sources. Whether it's web scraping, document processing, or database mining, our tool handles it all with unprecedented accuracy.",
      features: [
        "Automated web scraping with anti-detection",
        "OCR for document processing",
        "Real-time data cleaning and validation",
        "Custom data transformation pipelines",
        "Support for 100+ data formats",
        "Intelligent duplicate detection",
        "Scheduled extraction workflows"
      ],
      technologies: ["Python", "Scrapy", "Pandas", "OpenCV", "Selenium"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      price: "$199/month",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AutoML Studio",
      category: "Machine Learning",
      description: "No-code machine learning platform that enables businesses to build, train, and deploy ML models without extensive technical expertise.",
      fullDescription: "AutoML Studio democratizes machine learning by providing an intuitive, no-code platform for building sophisticated ML models. From data preprocessing to model deployment, everything is automated while maintaining enterprise-grade performance.",
      features: [
        "Drag-and-drop model building",
        "Automated feature engineering",
        "Model performance optimization",
        "One-click deployment to cloud",
        "Real-time model monitoring",
        "A/B testing for models",
        "Custom model templates"
      ],
      technologies: ["Python", "AutoML", "MLOps", "Docker", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      price: "$399/month",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "SmartPredict Analytics",
      category: "Predictive Analytics",
      description: "Advanced predictive analytics platform that forecasts business trends and outcomes using ensemble machine learning models.",
      fullDescription: "SmartPredict Analytics combines multiple AI models to provide accurate predictions for business metrics, market trends, and customer behavior. Our platform processes historical data to generate actionable forecasts with confidence intervals.",
      features: [
        "Time series forecasting",
        "Customer churn prediction",
        "Sales forecasting with 95% accuracy",
        "Risk assessment models",
        "Market trend analysis",
        "Custom prediction models",
        "Interactive dashboards"
      ],
      technologies: ["Python", "Prophet", "XGBoost", "Plotly", "Apache Spark"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      price: "$499/month",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <BackButton className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our AI Products
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-large transition-all duration-300 border-0 bg-gradient-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                        {product.category}
                      </Badge>
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                          <Badge variant="outline" className="text-lg font-bold text-primary border-primary">
                            {product.price}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-lg">{product.fullDescription}</p>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {product.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-primary mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {product.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {/* <Button className="flex-1">
                            <Download className="w-4 h-4 mr-2" />
                            Get Started
                          </Button> */}
                          <Button variant="outline" size="icon">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;