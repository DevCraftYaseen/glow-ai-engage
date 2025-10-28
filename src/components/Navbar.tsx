import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border animate-fade-in">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
              <span className="text-2xl font-bold bg-gradient-glow bg-clip-text text-transparent">
                AI SaaS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#home" 
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Home
              </a>
              <a 
                href="#mission" 
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                About Us
              </a>
              <a 
                href="#feedback" 
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Testimonials
              </a>
              <Button 
                onClick={() => window.location.href = '/chat'}
                className="bg-gradient-glow hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                Chat with AI
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border animate-slide-in">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
            <a
              href="#home"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#mission"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a
              href="#feedback"
              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              onClick={() => {
                setIsOpen(false);
                window.location.href = '/chat';
              }}
              className="w-full mt-4 bg-gradient-glow hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Chat with AI
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
