
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "As a first-time buyer, I was completely lost until I found Homestream. Their AI walked me through the entire process and I closed on my dream home in just 45 days!",
    author: "Sarah Johnson",
    title: "First-Time Homebuyer",
  },
  {
    quote:
      "The document review saved me thousands of dollars by catching issues in the contract my agent missed. I'll never buy a home without Homestream again.",
    author: "Michael Chen",
    title: "Tech Professional",
  },
  {
    quote:
      "I've purchased multiple investment properties, and Homestream's financing tools helped me secure the best rates every time. The AI chatbot is incredibly helpful.",
    author: "Amanda Rodriguez",
    title: "Real Estate Investor",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-homestream-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy homeowners who've used Homestream to simplify their home buying journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm relative"
            >
              {/* Quotation mark */}
              <div className="absolute -top-4 -left-2 text-homestream-200 text-7xl font-serif">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 bg-homestream-200">
                    <span className="font-semibold text-sm text-homestream-700">
                      {testimonial.author.charAt(0)}
                    </span>
                  </Avatar>
                  
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
