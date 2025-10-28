import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-glow bg-clip-text text-transparent mb-4">
              AI SaaS
            </h3>
            <p className="text-muted-foreground">
              Empowering businesses with intelligent AI solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Features</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">API</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">About</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 inline-block transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Connect</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-300">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AI SaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
