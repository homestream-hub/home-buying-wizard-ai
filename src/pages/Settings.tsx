
import { useState } from "react";
import AppSidebar from "@/components/layout/AppSidebar";
import AIChatbot from "@/components/home/AIChatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  BadgeDollarSign,
  Bell,
  CreditCard,
  Lock,
  Shield,
  User,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-6">
          <h1 className="text-lg font-semibold">Settings</h1>
        </header>
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList>
                <TabsTrigger value="profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="subscription">
                  <BadgeDollarSign className="h-4 w-4 mr-2" />
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>
              
              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex flex-col items-center sm:items-start">
                        <Avatar className="h-24 w-24 mb-4">
                          <span className="font-semibold text-2xl">A</span>
                        </Avatar>
                        <Button variant="outline" size="sm">
                          Change Avatar
                        </Button>
                      </div>
                      
                      <div className="space-y-4 flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" defaultValue="Alex" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" defaultValue="Johnson" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="alex@example.com" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Home Buying Preferences</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget</Label>
                          <Input id="budget" defaultValue="$450,000" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Preferred Location</Label>
                          <Input id="location" defaultValue="San Francisco, CA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bedrooms">Bedrooms</Label>
                          <Input id="bedrooms" type="number" defaultValue="3" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bathrooms">Bathrooms</Label>
                          <Input id="bathrooms" type="number" defaultValue="2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <Button variant="ghost">Reset Changes</Button>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Control how and when you receive updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Email Notifications</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="block" htmlFor="email-properties">
                              New Property Matches
                            </Label>
                            <p className="text-sm text-gray-500">
                              Get notified when new properties match your criteria
                            </p>
                          </div>
                          <Switch id="email-properties" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="block" htmlFor="email-documents">
                              Document Updates
                            </Label>
                            <p className="text-sm text-gray-500">
                              Notifications about document reviews and signatures
                            </p>
                          </div>
                          <Switch id="email-documents" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="block" htmlFor="email-news">
                              Market Updates & Tips
                            </Label>
                            <p className="text-sm text-gray-500">
                              Real estate news and home buying tips
                            </p>
                          </div>
                          <Switch id="email-news" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Push Notifications</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="block" htmlFor="push-properties">
                              Property Alerts
                            </Label>
                            <p className="text-sm text-gray-500">
                              Price drops and new matches
                            </p>
                          </div>
                          <Switch id="push-properties" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="block" htmlFor="push-messages">
                              Messages
                            </Label>
                            <p className="text-sm text-gray-500">
                              Notifications when you receive new messages
                            </p>
                          </div>
                          <Switch id="push-messages" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label className="block" htmlFor="push-reminders">
                              Reminders & Deadlines
                            </Label>
                            <p className="text-sm text-gray-500">
                              Important dates and task reminders
                            </p>
                          </div>
                          <Switch id="push-reminders" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Notification Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Subscription Tab */}
              <TabsContent value="subscription">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Subscription Plan</CardTitle>
                        <CardDescription>
                          Manage your subscription and billing
                        </CardDescription>
                      </div>
                      <Badge className="bg-homestream-500">Basic</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="border-2">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex justify-between items-center">
                            <div>Basic</div>
                            <div className="text-xl">Free</div>
                          </CardTitle>
                          <CardDescription>Your current plan</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 my-4">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-green-600" />
                              </div>
                              <span>Property search & recommendations</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-green-600" />
                              </div>
                              <span>Basic document uploads (5 max)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-green-600" />
                              </div>
                              <span>Mortgage calculator</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-500">
                              <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <X className="h-3 w-3 text-gray-500" />
                              </div>
                              <span>AI document review</span>
                            </li>
                            <li className="flex items-start gap-2 text-gray-500">
                              <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <X className="h-3 w-3 text-gray-500" />
                              </div>
                              <span>Premium lender connections</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" disabled>
                            Current Plan
                          </Button>
                        </CardFooter>
                      </Card>
                      
                      <Card className="border-2 border-homestream-200 bg-homestream-50">
                        <CardHeader className="pb-2">
                          <Badge className="w-fit mb-1 bg-homestream-600">Recommended</Badge>
                          <CardTitle className="flex justify-between items-center">
                            <div>Premium</div>
                            <div className="text-xl">$29/mo</div>
                          </CardTitle>
                          <CardDescription>Unlock all features</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2 my-4">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-homestream-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-homestream-600" />
                              </div>
                              <span className="font-medium">Everything in Basic, plus:</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-homestream-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-homestream-600" />
                              </div>
                              <span>Unlimited document uploads & storage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-homestream-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-homestream-600" />
                              </div>
                              <span>AI document review & contract analysis</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-homestream-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-homestream-600" />
                              </div>
                              <span>Priority access to premium lenders</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 rounded-full bg-homestream-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="h-3 w-3 text-homestream-600" />
                              </div>
                              <span>Human expert consultation (1hr/month)</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Upgrade Now</Button>
                        </CardFooter>
                      </Card>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-5 border">
                      <div className="flex items-start gap-4">
                        <CreditCard className="h-6 w-6 text-gray-400 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">Payment Method</h3>
                          <p className="text-sm text-gray-500 mb-4">
                            No payment method added yet
                          </p>
                          <Button variant="outline" size="sm">
                            Add Payment Method
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Security Tab */}
              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Manage your account security and authentication
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Password</h3>
                      
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                          />
                        </div>
                        <Button>Update Password</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="block">Enable 2FA</Label>
                          <p className="text-sm text-gray-500">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch id="twoFA" />
                      </div>
                      
                      <Button variant="outline" className="flex gap-2" disabled>
                        <Lock className="h-4 w-4" />
                        Setup Two-Factor Authentication
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Account Actions</h3>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-destructive">Delete Account</p>
                          <p className="text-sm text-gray-500">
                            Permanently delete your account and all data
                          </p>
                        </div>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      
      <AIChatbot />
    </div>
  );
};

// Helper component for the Check icon in the Subscription tab
const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default Settings;
