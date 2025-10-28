import { Target, Zap, Shield, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Mission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="mission" className="py-24 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-glow bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize AI technology, making powerful intelligent solutions accessible to businesses of all sizes. Our vision is a future where every organization can harness the power of AI effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mt-16">
          <div 
            className={`text-center group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pushing boundaries with cutting-edge AI technology
            </p>
          </div>

          <div 
            className={`text-center group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground leading-relaxed">
              Instant responses powered by advanced algorithms
            </p>
          </div>

          <div 
            className={`text-center group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your data stays yours, always encrypted and protected
            </p>
          </div>

          <div 
            className={`text-center group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">User Centric</h3>
            <p className="text-muted-foreground leading-relaxed">
              Designed with simplicity and accessibility in mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
