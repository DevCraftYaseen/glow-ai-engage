import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Transform Your Business with
            <span className="block mt-4 bg-gradient-glow bg-clip-text text-transparent">
              AI-Powered Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of intelligent automation. Chat with our AI assistant instantly - no sign-up required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => window.location.href = '/chat'}
              className="bg-gradient-glow hover:opacity-90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 group"
            >
              <MessageSquare className="mr-2 group-hover:scale-110 transition-transform" />
              Start Chatting Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:border-primary hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-3">10K+</div>
              <div className="text-muted-foreground text-lg">Active Users</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-3">99.9%</div>
              <div className="text-muted-foreground text-lg">Uptime</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-muted-foreground text-lg">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
