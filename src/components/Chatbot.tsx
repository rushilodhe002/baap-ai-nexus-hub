import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm BAAP AI Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Demo responses for when API is not available
  const getDemoResponse = (question: string): string => {
    const q = question.toLowerCase();
    
    if (q.includes('product') || q.includes('service')) {
      return "BAAP offers AI chatbots, data processing platforms, automation suites, and machine learning models. We also provide custom development services. Would you like to know more about any specific solution?";
    }
    
    if (q.includes('price') || q.includes('cost')) {
      return "Our services start from $1,800 for data processing solutions. AI chatbot development begins at $2,500. Custom solutions are priced based on requirements. Would you like a detailed quote?";
    }
    
    if (q.includes('team') || q.includes('company')) {
      return "BAAP is led by experienced AI developers and data scientists. Our team specializes in machine learning, automation, and custom AI solutions. Visit our Team page to learn more about our experts!";
    }
    
    if (q.includes('contact') || q.includes('demo')) {
      return "You can reach us through our contact form or schedule a demo. We'd love to discuss how our AI solutions can transform your business operations!";
    }
    
    return "I'm here to help you learn about BAAP's AI solutions. Ask me about our products, services, pricing, or team. How can I assist you today?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsLoading(true);

    try {
      // Try API first, fall back to demo response
      const GEMINI_API_KEY = "AIzaSyBHcCpQQVm9qZ_4Fz5lz8mTYQ5XvNV_123";
      const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
      
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are BAAP Company's AI assistant. Answer questions about AI solutions, our products, services, and team. Keep responses concise and helpful. User question: ${currentInput}`
                }
              ]
            }
          ]
        }),
      });

      let aiResponse = "";
      
      if (response.ok) {
        const data = await response.json();
        aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || getDemoResponse(currentInput);
      } else {
        // Fall back to demo response
        aiResponse = getDemoResponse(currentInput);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      
      // Use demo response as fallback
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getDemoResponse(currentInput),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-glow z-50 animate-scale-in"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-large z-50 animate-scale-in bg-background border-primary/20">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Bot className="h-5 w-5" />
                BAAP AI Assistant
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full pb-4">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${
                    message.isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.isUser ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[240px] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? "bg-primary text-primary-foreground ml-auto"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: "0.1s"}}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;