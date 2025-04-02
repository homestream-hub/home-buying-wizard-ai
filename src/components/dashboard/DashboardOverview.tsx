
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Gem, 
  Home, 
  PlusCircle 
} from "lucide-react";

const DashboardOverview = () => {
  const [progress, setProgress] = useState(40);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress card */}
        <Card className="col-span-3 md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Your Home Buying Journey</CardTitle>
              <CardDescription>Track your progress to homeownership</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All Steps</Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium">Create account & set preferences</h4>
                  <p className="text-sm text-gray-500">Completed on May 15, 2023</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium">Get pre-approved for mortgage</h4>
                  <p className="text-sm text-gray-500">Completed on May 18, 2023</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <Clock className="h-5 w-5 text-homestream-600" />
                </div>
                <div>
                  <h4 className="font-medium">Find your dream home</h4>
                  <p className="text-sm text-gray-500">3 properties saved</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <Circle className="h-5 w-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-500">Make an offer</h4>
                  <p className="text-sm text-gray-500">Not started</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  <Circle className="h-5 w-5 text-gray-300" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-500">Close the deal</h4>
                  <p className="text-sm text-gray-500">Not started</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Quick actions card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for home buyers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Continue property search
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <PlusCircle className="mr-2 h-4 w-4" />
              Upload documents
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Gem className="mr-2 h-4 w-4" />
              Upgrade to Premium
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Saved properties */}
      <Card>
        <CardHeader>
          <CardTitle>Your Saved Properties</CardTitle>
          <CardDescription>Properties you're interested in</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded-lg overflow-hidden group property-card">
                <div className="aspect-video bg-gray-100 relative">
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    12 Photos
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-medium">$425,000</h4>
                  <p className="text-sm text-gray-500">3 bd | 2 ba | 1,850 sqft</p>
                  <p className="text-xs truncate">123 Main St, Anytown, CA 91234</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-homestream-600">Added 3 days ago</span>
                    <button className="text-xs text-gray-500 hover:text-homestream-600">View</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="link">View All Saved Properties</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
