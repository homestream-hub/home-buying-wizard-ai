
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Search, FileText, DollarSign, BookOpen, Settings, User, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = ({ isLoggedIn = false }) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setIsSheetOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-homestream-600 h-8 w-8 rounded-md flex items-center justify-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl text-homestream-800">Homestream</span>
          </Link>
          
          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/search" title="Property Search">
                        Find your dream home with AI-powered recommendations
                      </ListItem>
                      <ListItem href="/documents" title="Document Automation">
                        Let AI handle your paperwork and contracts
                      </ListItem>
                      <ListItem href="/financing" title="Financing Tools">
                        Calculate mortgages and explore financing options
                      </ListItem>
                      <ListItem href="/education" title="Education Hub">
                        Learn everything about the home buying process
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/education">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Learn
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/search">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Search
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
        
        {isMobile ? (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Homestream</SheetTitle>
                <SheetDescription>Your AI Home Buying Assistant</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                {isLoggedIn ? (
                  <>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/dashboard")}>
                      <Home className="mr-2 h-4 w-4" /> Dashboard
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/search")}>
                      <Search className="mr-2 h-4 w-4" /> Property Search
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/documents")}>
                      <FileText className="mr-2 h-4 w-4" /> Documents
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/financing")}>
                      <DollarSign className="mr-2 h-4 w-4" /> Financing
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/education")}>
                      <BookOpen className="mr-2 h-4 w-4" /> Education Hub
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/settings")}>
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/education")}>
                      <BookOpen className="mr-2 h-4 w-4" /> Learn
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => handleNavigate("/search")}>
                      <Search className="mr-2 h-4 w-4" /> Search
                    </Button>
                    <div className="mt-4 pt-4 border-t">
                      <Button className="w-full" onClick={() => handleNavigate("/login")}>
                        <LogIn className="mr-2 h-4 w-4" /> Sign In
                      </Button>
                      <Button variant="outline" className="w-full mt-2" onClick={() => handleNavigate("/signup")}>
                        Sign Up Free
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button size="sm" variant="ghost" onClick={() => navigate("/dashboard")}>
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button size="sm" variant="ghost" onClick={() => navigate("/settings")}>
                  <Settings className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate("/login")}>Sign In</Button>
                <Button onClick={() => navigate("/signup")}>Sign Up Free</Button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
