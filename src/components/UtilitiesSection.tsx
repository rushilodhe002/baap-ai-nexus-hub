import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Download, GitBranch, Package, ArrowRight } from "lucide-react";

const UtilitiesSection = () => {
  const utilities = [
    {
      title: "BAAP-ML Toolkit",
      description: "Comprehensive machine learning library with pre-built models and easy-to-use APIs for rapid AI development.",
      version: "v2.1.0",
      downloads: "10K+",
      language: "Python",
      tags: ["Machine Learning", "Deep Learning", "Neural Networks"],
      features: [
        "Pre-trained models for common tasks",
        "Easy data preprocessing tools",
        "Model evaluation metrics",
        "Export to various formats"
      ]
    },
    {
      title: "BAAP-Data Pipeline",
      description: "Robust data processing pipeline for ETL operations, data cleaning, and transformation workflows.",
      version: "v1.8.2",
      downloads: "5K+",
      language: "Python",
      tags: ["Data Processing", "ETL", "Pipeline"],
      features: [
        "Real-time data streaming",
        "Automated data validation",
        "Error handling & recovery",
        "Scalable architecture"
      ]
    },
    {
      title: "BAAP-Automation Kit",
      description: "Collection of automation tools for web scraping, API testing, and workflow automation.",
      version: "v3.0.1",
      downloads: "8K+",
      language: "Python",
      tags: ["Automation", "Web Scraping", "Testing"],
      features: [
        "Browser automation",
        "API endpoint testing",
        "Scheduled task execution",
        "Report generation"
      ]
    },
    {
      title: "BAAP-AI Assistant SDK",
      description: "Software development kit for building custom AI assistants with voice and text capabilities.",
      version: "v1.5.0",
      downloads: "3K+",
      language: "JavaScript/Python",
      tags: ["AI Assistant", "SDK", "Voice AI"],
      features: [
        "Voice recognition",
        "Natural language understanding",
        "Multi-language support",
        "Custom integrations"
      ]
    }
  ];

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
            <div className="text-primary">pip install baap-ml-toolkit</div>
            <div className="text-primary">pip install baap-data-pipeline</div>
            <div className="text-primary">pip install baap-automation-kit</div>
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/ai-utilities'}>
              Explore All Tools
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesSection;