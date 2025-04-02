
import { useState } from "react";
import AppSidebar from "@/components/layout/AppSidebar";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import AIChatbot from "@/components/home/AIChatbot";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Home, Search, User } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-6 gap-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          
          <div className="ml-auto flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
              <Search className="h-4 w-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">
              <User className="h-4 w-4" />
            </button>
          </div>
        </header>
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">Welcome back, Alex</h2>
                <p className="text-gray-500">Let's continue your home buying journey</p>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">
                  <Home className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="favorites">Favorite Properties</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="financing">Financing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <DashboardOverview />
              </TabsContent>
              
              <TabsContent value="favorites" className="mt-6">
                <div className="bg-white rounded-lg p-6 border text-center">
                  <h3 className="text-lg font-medium mb-2">Your favorite properties will appear here</h3>
                  <p className="text-gray-500 mb-4">Start browsing properties and save the ones you like</p>
                  <button className="text-homestream-600 font-medium">Browse Properties</button>
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-6">
                <div className="bg-white rounded-lg p-6 border text-center">
                  <h3 className="text-lg font-medium mb-2">Document management</h3>
                  <p className="text-gray-500">Upload and manage your important documents</p>
                </div>
              </TabsContent>
              
              <TabsContent value="financing" className="mt-6">
                <div className="bg-white rounded-lg p-6 border text-center">
                  <h3 className="text-lg font-medium mb-2">Financing tools</h3>
                  <p className="text-gray-500">Calculate mortgage payments and explore loan options</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      
      <AIChatbot />
    </div>
  );
};

export default Dashboard;
