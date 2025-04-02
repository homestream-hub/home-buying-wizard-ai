
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Home, Search, FileText, DollarSign, BookOpen, Settings, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";

const AppSidebar = ({ onLogout }: { onLogout?: () => void }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(isMobile);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Property Search", path: "/search", icon: Search },
    { name: "Documents", path: "/documents", icon: FileText, badge: "3" },
    { name: "Financing", path: "/financing", icon: DollarSign },
    { name: "Education Hub", path: "/education", icon: BookOpen },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Sidebar defaultOpen={!isMobile} className="border-r">
      <SidebarHeader className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-2">
          <div className="bg-homestream-600 h-8 w-8 rounded-md flex items-center justify-center">
            <Home className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg text-homestream-800">Homestream</span>
        </div>
        <div className="ml-auto">
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    className={
                      location.pathname === item.path
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }
                    onClick={() => handleNavigate(item.path)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <Badge className="ml-auto" variant="secondary">
                        {item.badge}
                      </Badge>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="bg-homestream-50 text-homestream-800">
                  <HelpCircle className="h-4 w-4" />
                  <span>AI Assistant</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <Button 
          variant="outline" 
          className="w-full justify-start" 
          onClick={onLogout || (() => navigate("/"))}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
