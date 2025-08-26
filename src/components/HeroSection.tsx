import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 -z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center mt_5">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm border border-border/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white">AI-Powered Business Solutions</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-in-left">
            Build Your AI Solutions with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              BAAP
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            Empowering businesses with cutting-edge AI chatbots, data processing tools, 
            and custom automation solutions. Transform your workflow with our innovative platform.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToProducts}
              className="group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => window.open("#", "_blank")}
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-gray-400">AI Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;