import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feedback from "@/components/Feedback";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Index;
