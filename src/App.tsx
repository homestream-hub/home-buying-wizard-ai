
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

// Pages
import LandingPage from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PropertySearch from "./pages/PropertySearch";
import PropertyDetails from "./pages/PropertyDetails";
import Documents from "./pages/Documents";
import Financing from "./pages/Financing";
import Education from "./pages/Education";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<PropertySearch />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/education" element={<Education />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
