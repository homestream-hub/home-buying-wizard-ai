
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-homestream-50 via-white to-blue-50 z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Find Your Dream Home</span>
              <span className="block text-homestream-600">with AI by Your Side</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Homestream simplifies the entire home buying journey—from search to closing—with powerful AI tools that save you time and money.
            </p>
            
            <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter city, zip code, or address"
                  className="pl-10 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="absolute right-1.5 top-1.5"
                >
                  Search
                </Button>
              </div>
            </form>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="px-6"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/education")}
                className="px-6"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-homestream-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-homestream-100 rounded-full opacity-70"></div>
              
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-red-400 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                    <div className="ml-2 text-sm text-gray-500">Homestream AI Dashboard</div>
                  </div>
                </div>
                <div className="flex p-2 pt-0">
                  <div className="w-48 bg-gray-50 p-3 border-r">
                    <div className="h-8 w-full bg-homestream-100 rounded-md mb-3"></div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-6 w-full bg-gray-200 rounded"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <div className="h-8 w-1/2 bg-gray-200 rounded-md mb-4"></div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-24 bg-gray-100 rounded-lg p-3">
                          <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 w-1/4 bg-homestream-200 rounded"></div>
                        </div>
                      ))}
                    </div>
                    <div className="h-32 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by home buyers across the country</p>
          <div className="flex justify-center space-x-8 grayscale opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
