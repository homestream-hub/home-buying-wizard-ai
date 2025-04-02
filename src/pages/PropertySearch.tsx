
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PropertySearchComponent from "@/components/property/PropertySearch";
import PropertyCard from "@/components/property/PropertyCard";
import AIChatbot from "@/components/home/AIChatbot";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  Grid2X2,
  List,
  MapPin,
  SortAsc,
} from "lucide-react";

// Sample property data
const sampleProperties = [
  {
    id: "1",
    price: 425000,
    address: "123 Main St, Anytown, CA 91234",
    beds: 3,
    baths: 2,
    sqft: 1850,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isNew: true,
  },
  {
    id: "2",
    price: 550000,
    address: "456 Oak Ave, Somewhere, CA 91245",
    beds: 4,
    baths: 2.5,
    sqft: 2100,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
  },
  {
    id: "3",
    price: 375000,
    address: "789 Elm St, Nowhere, CA 91256",
    beds: 2,
    baths: 2,
    sqft: 1500,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isPremium: true,
  },
  {
    id: "4",
    price: 625000,
    address: "101 Pine St, Elsewhere, CA 91267",
    beds: 4,
    baths: 3,
    sqft: 2400,
    imageUrl: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80",
  },
  {
    id: "5",
    price: 495000,
    address: "202 Cedar Ave, Anywhere, CA 91278",
    beds: 3,
    baths: 2.5,
    sqft: 1950,
    imageUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
  },
  {
    id: "6",
    price: 750000,
    address: "303 Maple Dr, Someplace, CA 91289",
    beds: 5,
    baths: 3.5,
    sqft: 3200,
    imageUrl: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isNew: true,
    isPremium: true,
  },
];

const PropertySearch = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={true} />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Find Your Dream Home</h1>
            
            <PropertySearchComponent />
            
            <div className="flex flex-wrap justify-between items-center gap-4 my-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="font-medium">California</span>
                <span className="text-gray-500 text-sm">
                  • {sampleProperties.length} homes
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white rounded-md border shadow-sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-r-none ${
                      viewMode === "grid" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid2X2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`rounded-l-none ${
                      viewMode === "list" ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button variant="outline" size="sm" className="flex gap-2">
                  <SortAsc className="h-4 w-4" />
                  Sort
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  price={property.price}
                  address={property.address}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  imageUrl={property.imageUrl}
                  isNew={property.isNew}
                  isPremium={property.isPremium}
                />
              ))}
            </div>
            
            {/* AI recommendation section */}
            <div className="mt-8 bg-homestream-50 rounded-lg p-6 border border-homestream-100">
              <div className="flex items-start gap-4">
                <div className="bg-homestream-500 rounded-full p-3 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI Property Recommendations</h3>
                  <p className="text-gray-600 mb-4">
                    Based on your preferences and search history, our AI has identified properties you might be interested in.
                  </p>
                  <Button>View Personalized Recommendations</Button>
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

export default PropertySearch;
