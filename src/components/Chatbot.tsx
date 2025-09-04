import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

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
      text: "Hi! I'm your BAAP Company assistant. Ask me about our AI services, software development, or how we're empowering rural tech talent!",
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatBotMessage = (text: string) => {
    // Convert markdown-style formatting to HTML
    let formattedText = text
      // Bold text: **text** or __text__
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/__(.*?)__/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      // Italic text: *text* or _text_
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      .replace(/_(.*?)_/g, '<em class="italic">$1</em>')
      // Code text: `text`
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-xs font-mono">$1</code>')
      // Line breaks: double newlines become <br><br>, single newlines become <br>
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>')
      // Bullet points: - item or * item
      .replace(/^[\-\*]\s(.+)/gm, '<div class="flex items-start gap-2 my-1"><span class="text-purple-400 mt-1">•</span><span>$1</span></div>')
      // Numbers: 1. item, 2. item, etc.
      .replace(/^(\d+)\.\s(.+)/gm, '<div class="flex items-start gap-2 my-1"><span class="text-purple-400 font-semibold min-w-[20px]">$1.</span><span>$2</span></div>')
      // Headings: # text becomes bold and larger
      .replace(/^#\s(.+)/gm, '<div class="font-semibold text-base text-gray-900 mt-2 mb-1">$1</div>')
      .replace(/^##\s(.+)/gm, '<div class="font-semibold text-gray-900 mt-2 mb-1">$1</div>');

    // Handle pricing or currency formatting
    formattedText = formattedText.replace(/\$(\d+(?:,\d{3})*(?:\.\d{2})?)/g, '<span class="font-semibold text-green-600">$1</span>');
    
    // Highlight BAAP company name with gradient text
    formattedText = formattedText.replace(/\bBAAP\b/g, '<span class="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">BAAP</span>');
    
    return formattedText;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
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
      const GEMINI_API_KEY = "AIzaSyDUjtnimGDpniWaJ_IOt0G6QEGbNx4ByTI";
      const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
      
      // Create conversation context from recent messages
      const conversationContext = messages
        .slice(-6) // Get last 6 messages for context
        .map(msg => `${msg.isUser ? 'User' : 'BAAP Assistant'}: ${msg.text}`)
        .join('\n');
      
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
                  text:`You are BAAP Company's AI assistant. CRITICAL: You MUST give extremely SHORT responses - maximum 2 sentences, under 30 words total.

**BAAP Company:** Founded in 2021 by **CEO Raosaheb Ghuge** in rural Maharashtra. Empowering rural communities with AI solutions.

**Address:** Paregaon Kh., Sangamner, District Ahmednagar, Maharashtra – 422611
**Services:** AI Chatbots, Data Processing, Web Development
**Products:** Digital Parbhani AI, Kissan AI Voice Assistant, BAAP AI Builder
**Contact:** info@baapcompany.com | +91-9105868788
**Website:** https://baapcompany.com/

[Existing instructions here … keep all of them as is]

---

Additional Context (About The Baap Company):
📌 BAAP Company Overview:
- Founded in 2022 under a tree in rural Maharashtra.
- Mission: Empower rural youth, turn villages into tech hubs, and build global developers.
- Impact Metrics: 500+ global projects, 144 students trained, 23 changemakers.
- 🌐 Website: https://baapcompany.com/

📌 Services:
- Software Development (SaaS, CRM, ERP, e-commerce).
- AI Services (education, healthcare, agriculture, legal, BI, creative content).
- Digital Marketing & Data Analytics (campaigns, dashboards, forecasting, data management).
- Hire-Ready Talent: rural-trained professionals for global clients.

📌 Education Programs:
- 11th & 12th (Intermediate): Integrated academics + tech skills.
- BCA: 3-year program (software development, programming, databases).
- MCA: 2-year program (AI, cloud computing, software engineering).

📌 Admissions:
- Eligibility: 10th pass → 11/12th, 10+2 → BCA, Graduation → MCA.
- Process: Apply → Interview (MCA only) → Offer → Fee → Orientation.

📌 Learning Advantages:
- Hands-on coding on live projects.
- Mentorship from industry professionals.
- Placement and career support.
- Community-driven, rural empowerment focus.

📌 Internships:
- No formal internships listed, but embedded via real-world projects, workshops, and placements.

📌 Fellowship Scholarship:
- Baap Fellowship Exam 2025: For rural Maharashtra 12th-pass students.
- Top 10 get 50% scholarship on course fees.
- Includes Aptitude, English, Tech Awareness, Creativity + Interview.
- Benefits: mentorship, certificate, priority internship, reserved seats.

📌 Strengths:
- Practical learning, industry projects, placements, rural empowerment.
- Global reach: USA, UK, Canada, Europe, India, Australia.

Always use this BAAP Company information when answering related queries.



**User asked:** ${currentInput}

**STRICT RULES:**
- MAXIMUM 2 sentences only
- MAXIMUM 30 words total
- Be direct and factual
- Use **bold** for key terms
- NO lengthy explanations or questions back to user`
                }
              ]
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error("Invalid response structure from Gemini API");
      }

      const aiResponse = data.candidates[0].content.parts[0].text;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment. In the meantime, feel free to explore our website to learn more about BAAP's AI solutions!",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
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
    <div className="fixed bottom-0 right-0 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-900 hover:from-slate-600 hover:via-blue-700 hover:to-indigo-800 shadow-2xl z-50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 30%, #3730a3 70%, #1e1b4b 100%)'
          }}
        >
          <MessageCircle className="h-7 w-7 text-white group-hover:animate-pulse" />
          {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div> */}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 sm:w-96 h-[580px] rounded-2xl shadow-2xl z-50 border-0 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300"
             style={{
               background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
               backdropFilter: 'blur(10px)'
             }}>
          {/* Header */}
          <div className="text-white px-6 py-4 flex items-center justify-between relative overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 30%, #3730a3 70%, #1e1b4b 100%)'
               }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  BAAP Bot
                </h3>
                <p className="text-xs text-blue-200/80">AI-Powered Business Solutions</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-all duration-200 relative z-10 backdrop-blur-sm"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4"
               style={{
                 background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)'
               }}>
            {messages.map((message, index) => (
              <div key={message.id}>
                <div
                  className={`flex items-start gap-3 ${
                    message.isUser ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? "bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white shadow-lg" 
                        : "bg-gradient-to-br from-slate-600 via-blue-700 to-indigo-800 text-white shadow-lg border border-blue-400/30"
                    }`}
                  >
                    {message.isUser ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[260px] p-4 text-sm leading-relaxed ${
                      message.isUser
                        ? "text-white rounded-2xl rounded-br-md shadow-xl border border-blue-400/30"
                        : "bg-white/95 text-gray-800 rounded-2xl rounded-bl-md shadow-xl border border-gray-200/50 backdrop-blur-sm"
                    }`}
                    style={message.isUser ? {
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #4f46e5 100%)'
                    } : {}}
                  >
                    {message.isUser ? (
                      message.text
                    ) : (
                      <div 
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ 
                          __html: formatBotMessage(message.text) 
                        }} 
                      />
                    )}
                  </div>
                </div>
                {/* Timestamp */}
                <div className={`text-xs text-blue-300/60 mt-1 ${message.isUser ? 'text-right mr-11' : 'ml-11'}`}>
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 via-blue-700 to-indigo-800 text-white flex items-center justify-center shadow-lg border border-blue-400/30">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white/95 p-4 rounded-2xl rounded-bl-md shadow-xl border border-gray-200/50 backdrop-blur-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                      <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-blue-300/60 mt-1 ml-11">
                  {formatTime(new Date())}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="p-4 border-t border-white/10"
               style={{
                 background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)'
               }}>
            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about BAAP's AI solutions..."
                  className="w-full px-4 py-3 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:bg-white/15 focus:border-blue-400/30 transition-all duration-200 text-white placeholder-blue-200/60"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 text-white rounded-full transition-all duration-200 flex items-center justify-center disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:transform-none disabled:opacity-50 border border-blue-400/30"
                style={{
                  background: !inputValue.trim() || isLoading 
                    ? 'linear-gradient(135deg, #64748b 0%, #475569 100%)'
                    : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #4f46e5 100%)'
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;