import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Download, FileText, Zap, Terminal, Package, Github, Star } from "lucide-react";

const AIUtilities = () => {
  const pythonLibraries = [
    {
      name: "baap-nlp",
      description: "Natural Language Processing toolkit with advanced sentiment analysis",
      version: "v2.1.0",
      downloads: "15.2K",
      category: "NLP",
      features: ["Sentiment Analysis", "Text Classification", "Named Entity Recognition", "Language Detection"],
      installation: "pip install baap-nlp",
      codeExample: `from baap_nlp import SentimentAnalyzer

analyzer = SentimentAnalyzer()
result = analyzer.analyze("I love this product!")
print(result.sentiment)  # Output: positive (0.95)`
    },
    {
      name: "baap-vision",
      description: "Computer vision utilities for image processing and analysis",
      version: "v1.8.3",
      downloads: "8.7K",
      category: "Computer Vision",
      features: ["Object Detection", "Image Classification", "Face Recognition", "OCR"],
      installation: "pip install baap-vision",
      codeExample: `from baap_vision import ObjectDetector

detector = ObjectDetector()
objects = detector.detect("image.jpg")
print(objects)  # [{'object': 'car', 'confidence': 0.98}]`
    },
    {
      name: "baap-data",
      description: "Data processing and analysis toolkit for business intelligence",
      version: "v3.0.1",
      downloads: "22.5K",
      category: "Data Processing",
      features: ["Data Cleaning", "Statistical Analysis", "Visualization", "Export Tools"],
      installation: "pip install baap-data",
      codeExample: `from baap_data import DataProcessor

processor = DataProcessor()
cleaned_data = processor.clean(raw_data)
insights = processor.analyze(cleaned_data)`
    }
  ];

  const webTools = [
    {
      name: "BAAP API Gateway",
      description: "Unified API gateway for accessing all BAAP AI services",
      type: "REST API",
      features: ["Authentication", "Rate Limiting", "Analytics", "Documentation"],
      endpoint: "https://api.baap.ai/v1/"
    },
    {
      name: "AI Model Playground",
      description: "Interactive testing environment for AI models",
      type: "Web App",
      features: ["Model Testing", "Parameter Tuning", "Real-time Results", "Export Options"],
      url: "https://playground.baap.ai"
    },
    {
      name: "Data Visualization Studio",
      description: "Create stunning visualizations from your data",
      type: "Web Tool",
      features: ["Interactive Charts", "Dashboard Builder", "Export Options", "Collaboration"],
      url: "https://viz.baap.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 animate-fade-in">
            <Package className="w-4 h-4 mr-2" />
            AI Utilities & Tools
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Developer <span className="text-primary">Tools & Libraries</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Accelerate your AI development with our comprehensive collection of Python libraries, APIs, and web tools.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="python" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Python Libraries
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Web Tools
              </TabsTrigger>
            </TabsList>

            <TabsContent value="python" className="space-y-8">
              {pythonLibraries.map((lib, index) => (
                <Card key={lib.name} className="animate-fade-in border-primary/20" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <Package className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{lib.name}</CardTitle>
                          <CardDescription>{lib.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{lib.version}</Badge>
                          <Badge variant="secondary">{lib.category}</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Download className="w-4 h-4" />
                          {lib.downloads} downloads
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {lib.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Terminal className="w-4 h-4 mr-2 text-primary" />
                        Installation
                      </h4>
                      <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                        {lib.installation}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-primary" />
                        Quick Example
                      </h4>
                      <div className="bg-muted p-4 rounded-lg">
                        <pre className="text-sm overflow-x-auto">
                          <code>{lib.codeExample}</code>
                        </pre>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4 border-t">
                      <Button size="sm" className="hover-scale">
                        <Download className="w-4 h-4 mr-2" />
                        Install Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="web" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webTools.map((tool, index) => (
                  <Card key={tool.name} className="animate-fade-in border-primary/20 hover:shadow-glow transition-all duration-300" style={{animationDelay: `${index * 100}ms`}}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Zap className="w-5 h-5" />
                        </div>
                        <Badge variant="outline">{tool.type}</Badge>
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2">Features:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tool.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button size="sm" className="w-full hover-scale">
                          Access Tool
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our comprehensive documentation, tutorials, and examples to make the most of our tools.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="hover-scale">
              <FileText className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
            <Button variant="outline" size="lg">
              <Code className="w-5 h-5 mr-2" />
              Browse Examples
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIUtilities;