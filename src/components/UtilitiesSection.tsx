import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Download, GitBranch, Package, ArrowRight, Plus } from "lucide-react";

const UtilitiesSection = () => {
  const utilities = [
    {
      "title": "my-wp-tools",
      "description": "Easily send WhatsApp messages from Python using the official Meta WhatsApp Cloud API. Perfect for alerts, notifications, and automated messaging tasks.",
      "version": "v0.1.3",
      "downloads": "N/A",
      "language": "Python",
      "tags": ["WhatsApp", "Messaging", "Automation", "API"],
      "features": [
        "Plug-and-play API for sending WhatsApp messages",
        "Supports Meta WhatsApp Cloud API",
        "Clear input validation and error handling",
        "Custom exception handling",
        "Requires minimal setup with access token and IDs"
      ]
    },
    {
      title: "ragify-lib",
      description: "Modern Python library for fast and flexible Retrieval-Augmented Generation (RAG) workflows using embedding models and vector databases.",
      version: "v0.1.5",
      downloads: "N/A",
      language: "Python",
      tags: ["RAG", "NLP", "AI", "Embeddings", "Vector Database"],
      features: [
        "Plug-and-play with Quadrant vector database or mock mode",
        "Customizable chunking and embedding configuration",
        "Human-readable results with scores and metadata",
        "Robust CLI for automation and scripting"
      ]
    },
    {
      title: "rawa-bots",
      description: "A Python library to easily build Gemini- and OpenAI-powered chatbots with support for both text and image generation via HTTP requests.",
      version: "v0.2.5",
      downloads: "N/A",
      language: "Python",
      tags: ["Chatbots", "AI", "Gemini", "OpenAI", "Image Generation"],
      features: [
        "Unified interface for Gemini and OpenAI APIs",
        "Supports both text and image generation",
        "Easy switching between providers",
        "No SDK dependency — uses direct HTTP requests"
      ]
    }
  ];

  const handleViewMore = () => {
    window.location.href = '/ai-utilities';
  };

  return (
    <section id="utilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4 animate-fade-in">
            <Package className="w-4 h-4" />
            <span className="text-sm font-medium">Developer Tools</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-in-left">
            Python Libraries & AI Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-right">
            Powerful, open-source libraries and tools built by BAAP to accelerate your AI and automation projects.
          </p>
        </div>

        {/* Utilities grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {utilities.map((utility, index) => (
            <Card 
              key={utility.title} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-primary">
                        {utility.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {utility.version}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {utility.downloads} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {utility.language}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {utility.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {utility.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {utility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1 group hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Install
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                  >
                    <GitBranch className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* View More Card */}
          <Card 
            className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-scale-in relative overflow-hidden cursor-pointer"
            style={{ animationDelay: '0.3s' }}
            onClick={handleViewMore}
          >
            {/* Blur background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 backdrop-blur-sm"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Plus className="w-8 h-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-primary text-center">
                View More Tools
              </CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                Discover our complete collection of AI utilities, libraries, and developer tools.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="text-center space-y-4">
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
                  <Badge variant="secondary" className="text-xs">Data Processing</Badge>
                  <Badge variant="secondary" className="text-xs">APIs</Badge>
                  <Badge variant="secondary" className="text-xs">Automation</Badge>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full group hover:bg-primary/90 transition-all duration-300"
                  onClick={handleViewMore}
                >
                  Explore All Tools
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Installation guide */}
        <div className="bg-gradient-card rounded-lg p-8 animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Quick Installation Guide
            </h3>
            <p className="text-muted-foreground">
              Get started with our libraries in minutes
            </p>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-muted-foreground mb-2"># Install via pip</div>
            <div className="text-primary">pip install my-wp-tools</div>
            <div className="text-primary">pip install ragify-lib</div>
            <div className="text-primary">pip install rawa-bots</div>
          </div>

          <div className="text-center mt-6">
            <Button 
              size="lg" 
              className="hover-scale"
              onClick={() => window.location.href = '/ai-utilities'}
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesSection;