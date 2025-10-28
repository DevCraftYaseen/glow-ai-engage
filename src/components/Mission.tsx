import { Target, Zap, Shield, Users } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-glow bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to democratize AI technology, making powerful intelligent solutions accessible to businesses of all sizes. Our vision is a future where every organization can harness the power of AI effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
            <p className="text-muted-foreground">
              Pushing boundaries with cutting-edge AI technology
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Instant responses powered by advanced algorithms
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your data stays yours, always encrypted and protected
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Centric</h3>
            <p className="text-muted-foreground">
              Designed with simplicity and accessibility in mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
