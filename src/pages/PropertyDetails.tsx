
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/home/AIChatbot";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  DollarSign,
  Heart,
  Home,
  MapPin,
  Share2,
  Star,
} from "lucide-react";

// Sample property details
const propertyDetails = {
  id: "1",
  price: 425000,
  address: "123 Main St, Anytown, CA 91234",
  beds: 3,
  baths: 2,
  sqft: 1850,
  yearBuilt: 2005,
  lotSize: "0.25 acres",
  description: "Beautiful single-family home in a quiet neighborhood. This charming property features an open floor plan with lots of natural light. The updated kitchen includes granite countertops and stainless steel appliances. The spacious backyard is perfect for entertaining.",
  features: [
    "Open Floor Plan",
    "Updated Kitchen",
    "Hardwood Floors",
    "Central Air",
    "Attached Garage",
    "Fenced Yard",
    "Walk-in Closets",
    "Fireplace",
  ],
  images: [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
  ],
  aiAnalysis: {
    priceAnalysis: "This property is priced 5% below market average for similar homes in this area.",
    locationScore: 85,
    investmentPotential: "Good potential for appreciation based on neighborhood development plans.",
    riskFactors: ["Property is in a moderate flood zone", "HOA fees have increased by 15% in the past 2 years"],
  },
};

const PropertyDetails = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={true} />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container">
          {/* Image gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={`${propertyDetails.images[0]}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                alt="Property front view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`${propertyDetails.images[1]}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80`}
                  alt="Property interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`${propertyDetails.images[2]}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80`}
                  alt="Property backyard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{propertyDetails.address}</span>
                  </div>
                  <h1 className="text-3xl font-bold">${propertyDetails.price.toLocaleString()}</h1>
                  <div className="flex items-center gap-3 mt-2 text-gray-700">
                    <span>{propertyDetails.beds} bd</span>
                    <span>•</span>
                    <span>{propertyDetails.baths} ba</span>
                    <span>•</span>
                    <span>{propertyDetails.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={isFavorite ? "default" : "outline"}
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    <Heart className="h-4 w-4 mr-2" fill={isFavorite ? "white" : "none"} />
                    {isFavorite ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="details">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="pt-6">
                  <div className="prose max-w-none">
                    <p>{propertyDetails.description}</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-4">Property Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {propertyDetails.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-homestream-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-4">Property Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                      <div>
                        <p className="text-gray-500 text-sm">Year Built</p>
                        <p className="font-medium">{propertyDetails.yearBuilt}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Lot Size</p>
                        <p className="font-medium">{propertyDetails.lotSize}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Property Type</p>
                        <p className="font-medium">Single Family</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">MLS#</p>
                        <p className="font-medium">ABC123456</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="ai-analysis" className="pt-6">
                  <div className="bg-homestream-50 rounded-lg p-5 border border-homestream-100 mb-6">
                    <h3 className="text-lg font-semibold mb-4">AI Property Analysis</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-homestream-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Price Analysis</h4>
                          <p className="text-gray-700">{propertyDetails.aiAnalysis.priceAnalysis}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-homestream-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Location Score: {propertyDetails.aiAnalysis.locationScore}/100</h4>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                            <div 
                              className="bg-homestream-600 h-2.5 rounded-full" 
                              style={{ width: `${propertyDetails.aiAnalysis.locationScore}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Based on schools, crime rates, amenities, and transit</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Home className="h-5 w-5 text-homestream-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Investment Potential</h4>
                          <p className="text-gray-700">{propertyDetails.aiAnalysis.investmentPotential}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-homestream-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Risk Factors</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            {propertyDetails.aiAnalysis.riskFactors.map((factor, index) => (
                              <li key={index}>{factor}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button>Get Full AI Property Report</Button>
                </TabsContent>
                
                <TabsContent value="documents" className="pt-6">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Access and review important property documents with AI-powered analysis
                    </p>
                    <Button>Generate Offer Documents</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Take the Next Step</h3>
                
                <div className="space-y-4">
                  <Button className="w-full">Schedule a Tour</Button>
                  <Button variant="outline" className="w-full">Request More Info</Button>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Financing</h4>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Est. Monthly Payment</span>
                        <span className="font-medium">$2,150</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">30-yr Fixed, 6%</span>
                        <a href="#" className="text-homestream-600 hover:underline">
                          Customize
                        </a>
                      </div>
                    </div>
                    
                    <Button variant="link" className="mt-2 px-0">
                      View Financing Options
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-4">AI Assistant</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Have questions about this property? Our AI can help you.
                </p>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    What are the nearby schools?
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Is this a good investment?
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Show similar properties
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default PropertyDetails;
