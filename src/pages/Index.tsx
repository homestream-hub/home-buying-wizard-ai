
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import StepByStepGuide from "@/components/home/StepByStepGuide";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AIChatbot from "@/components/home/AIChatbot";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <StepByStepGuide />
        <TestimonialsSection />
        
        {/* CTA Section */}
        <section className="py-16 bg-homestream-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-lg text-homestream-100 mb-8 max-w-2xl mx-auto">
              Join thousands of happy homeowners who saved time and money with Homestream.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate("/signup")}
                className="bg-white text-homestream-800 hover:bg-homestream-50"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/search")}
                className="text-white border-white hover:bg-homestream-700"
              >
                Browse Properties
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Index;
