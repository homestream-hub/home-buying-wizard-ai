
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Tell us about your preferences, budget, and dream home features.",
  },
  {
    number: "02",
    title: "Discover Properties",
    description: "Browse AI-recommended listings that match your unique criteria.",
  },
  {
    number: "03",
    title: "Get Pre-Approved",
    description: "Connect with lenders and secure financing with our tools.",
  },
  {
    number: "04",
    title: "Make Offers",
    description: "Use our AI to generate competitive offers and review contracts.",
  },
  {
    number: "05",
    title: "Close with Confidence",
    description: "We'll guide you through inspections, appraisals, and closing day.",
  },
];

const StepByStepGuide = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Homestream walks you through each step of the home buying process, with AI assistance at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                {/* Step number with circle */}
                <div
                  className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 h-12 w-12 rounded-full bg-white border-4 border-homestream-100 items-center justify-center text-homestream-800 font-bold shadow-sm ${
                    index % 2 === 0 ? "md:-translate-y-1/2" : "md:translate-y-1/2"
                  }`}
                >
                  {step.number}
                </div>
                
                {/* Content alternating sides */}
                <div
                  className={`bg-white rounded-xl p-6 shadow-sm md:shadow-none ${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="flex items-center mb-4 md:hidden">
                    <span className="flex h-8 w-8 rounded-full bg-homestream-100 items-center justify-center text-homestream-800 font-bold text-sm mr-3">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  
                  <h3 className="text-xl font-semibold hidden md:block mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Empty column for alternating layout */}
                <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:block md:col-start-1 md:row-start-1"}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="gap-2">
            Start Your Journey <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
