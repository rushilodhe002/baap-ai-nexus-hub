import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Download, FileText, Terminal, Package, Star } from "lucide-react";

const AIUtilities = () => {
  useScrollToTop();
  
  const pythonLibraries = [
    {
      name: "my-wp-tools",
      description: "Easily send WhatsApp messages from Python using the official Meta WhatsApp Cloud API. Ideal for automating alerts, notifications, and messaging workflows.",
      version: "v0.1.3",
      downloads: "N/A",
      category: "Messaging",
      documentationUrl: "https://pypi.org/project/my-wp-tools/",
      features: [
        "Simple, plug-and-play API",
        "Input validation and clear error messages",
        "Custom exception handling",
        "Support for Meta WhatsApp Cloud API"
      ],
      installation: "pip install my-wp-tools",
      codeExample: "from my_wp_tools.client import WhatsAppClient\n\nclient = WhatsAppClient(\n    access_token=\"YOUR_META_TOKEN\",\n    phone_number_id=\"YOUR_PHONE_NUMBER_ID\",\n    business_account_id=\"YOUR_BUSINESS_ACCOUNT_ID\"\n)\n\ntry:\n    client.send_message(\n        to=\"+1234567890\",\n        message=\"Hello from my library!\"\n    )\nexcept Exception as e:\n    print(\"Error sending message:\", e)"
    },
    {
      name: "ragify-lib",
      description: "A simple and production-ready Python library for Retrieval-Augmented Generation (RAG) with CLI and embedding/vector DB support.",
      version: "v0.1.5",
      downloads: "N/A",
      category: "NLP",
      documentationUrl: "https://pypi.org/project/ragify-lib/",
      features: [
        "Plug-and-play with Quadrant vector database or mock mode",
        "Customizable chunking and embedding for any use case",
        "Returns human-readable results with scores and metadata",
        "Robust CLI for automation and scripting"
      ],
      installation: "pip install ragify-lib",
      codeExample: "from ragify import KaliRAG\n\n# Configure database and model\nrag = KaliRAG()\nrag.configure_database(api_key=\"mock_key\", host=\"localhost\", port=6333, collection=\"my_collection\")\nrag.configure_embedding_model(\"all-MiniLM-L6-v2\")\nrag.configure_chunking(chunk_size=256, chunk_overlap=32)\n\n# Store documents\nfor doc in [\n    \"Retrieval-Augmented Generation (RAG) combines retrieval and generation for better answers.\",\n    \"ragify-lib makes it easy to build RAG pipelines in Python.\",\n    \"You can use Quadrant or mock mode for vector storage.\"\n]:\n    rag.create_store_embedding(doc)\n\n# Retrieve chunks\nresults = rag.retrieve_embedding(\"How does RAG work?\")\nfor chunk in results[\"results\"]:\n    print(f\"Text: {chunk['text']}\\nScore: {chunk['score']}\\n\")"
    },
    {
      name: "rawa-bots",
      description: "Python library for building chatbots using Google Gemini and OpenAI APIs, with built-in support for text and image generation.",
      version: "v0.2.5",
      downloads: "N/A",
      category: "AI",
      documentationUrl: "https://pypi.org/project/rawa-bots/",
      features: [
        "Unified interface for Gemini and OpenAI bots",
        "Supports both text and image generation",
        "No SDKs required — works via HTTP requests",
        "Custom error handling for easy debugging"
      ],
      installation: "pip install rawa-bots",
      codeExample: "from rawa_bots import GeminiBot\n\ngemini = GeminiBot(api_key=\"YOUR_GEMINI_API_KEY\", allow_image_gen=True)\n\n# Text generation\nresponse = gemini.ask(\"Tell me a joke about robots.\")\nprint(\"GeminiBot says:\", response)\n\n# Image generation\nimage_path = gemini.generate_image(\n    \"A futuristic cityscape at sunset\",\n    output_path=\"gemini_image.png\"\n)\nprint(\"GeminiBot image saved to:\", image_path)\n\nfrom rawa_bots import OpenAIBot\n\nopenai = OpenAIBot(api_key=\"YOUR_OPENAI_API_KEY\", allow_image_gen=True)\n\n# Text generation\nresponse = openai.ask(\"Tell me a joke about robots.\")\nprint(\"OpenAIBot says:\", response)\n\n# Image generation\nimage_path = openai.generate_image(\n    \"A futuristic cityscape at sunset\",\n    output_path=\"openai_image.png\"\n)\nprint(\"OpenAIBot image saved to:\", image_path)"
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
              Python Libraries
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Python <span className="text-white/90">Libraries</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
              Accelerate your AI development with our comprehensive collection of Python libraries and tools.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-8">
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
                    <a href={lib.documentationUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our comprehensive documentation, tutorials, and examples to make the most of our Python libraries.
          </p>
          <div className="space-x-4">
            <a href="https://pypi.org/user/staticmast/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="hover-scale">
              <FileText className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
            </a>
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