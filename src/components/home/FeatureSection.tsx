
import { FileText, Home, DollarSign, BookOpen, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Smart Property Search",
    description:
      "AI-powered property recommendations based on your preferences and budget.",
  },
  {
    icon: FileText,
    title: "Document Automation",
    description:
      "Automatically generate and review contracts and legal documents with AI assistance.",
  },
  {
    icon: DollarSign,
    title: "Financing Tools",
    description:
      "Calculate mortgage payments, compare loan options, and find the best rates.",
  },
  {
    icon: BookOpen,
    title: "Education Hub",
    description:
      "Step-by-step guides, video tutorials, and resources to understand the home buying process.",
  },
  {
    icon: MessageCircle,
    title: "24/7 AI Support",
    description:
      "Get answers to your questions anytime with our AI assistant, with human backup when needed.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">All-in-One Home Buying Platform</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've streamlined the entire process so you can focus on finding your dream home, not paperwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-homestream-50 flex items-center justify-center text-homestream-600 mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
