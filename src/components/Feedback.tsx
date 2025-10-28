import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "This AI platform has revolutionized how we handle customer inquiries. The instant responses and accuracy are incredible!",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateLabs",
    content: "The no-signup chat feature is brilliant. Our users love the instant access and the AI's natural conversational abilities.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataStream",
    content: "Integration was seamless, and the results exceeded expectations. Best AI solution we've implemented to date.",
    rating: 5,
    avatar: "ER"
  }
];

const Feedback = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="feedback" className="py-24 relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div 
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-glow bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their business with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`backdrop-blur-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 hover:border-primary/50 hover:scale-105 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-glow flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
