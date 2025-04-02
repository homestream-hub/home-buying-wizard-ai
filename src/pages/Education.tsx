
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/home/AIChatbot";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Check,
  FileText,
  GraduationCap,
  PlayCircle,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: "1",
    title: "Understanding Mortgage Pre-Approval",
    description: "Learn why pre-approval is a crucial first step in your home buying journey.",
    category: "Financing",
    readTime: 5,
    difficulty: "beginner",
  },
  {
    id: "2",
    title: "How to Make a Competitive Offer",
    description: "Strategies for making your offer stand out in a competitive market.",
    category: "Offers",
    readTime: 7,
    difficulty: "intermediate",
  },
  {
    id: "3",
    title: "Home Inspection Checklist",
    description: "What to look for and red flags to watch out during your inspection.",
    category: "Inspection",
    readTime: 8,
    difficulty: "beginner",
  },
  {
    id: "4",
    title: "Fixed-Rate vs. Adjustable-Rate Mortgages",
    description: "Pros and cons of different mortgage types and how to choose.",
    category: "Financing",
    readTime: 6,
    difficulty: "intermediate",
  },
  {
    id: "5",
    title: "Navigating the Closing Process",
    description: "Everything you need to know about closing on your new home.",
    category: "Closing",
    readTime: 10,
    difficulty: "advanced",
  },
  {
    id: "6",
    title: "First-Time Homebuyer Programs",
    description: "Government and private programs that can help first-time buyers.",
    category: "Financing",
    readTime: 7,
    difficulty: "beginner",
  },
];

const videos = [
  {
    id: "1",
    title: "Home Buying 101",
    duration: "12:35",
    thumbnail: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1296&q=80",
  },
  {
    id: "2",
    title: "Understanding Loan Options",
    duration: "8:45",
    thumbnail: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  {
    id: "3",
    title: "Home Inspection Tips",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const steps = [
  {
    number: 1,
    title: "Get Pre-Approved",
    description: "Determine your budget and get pre-approved for a mortgage.",
    completed: true,
  },
  {
    number: 2,
    title: "Find Your Dream Home",
    description: "Search properties that meet your criteria and budget.",
    completed: true,
  },
  {
    number: 3,
    title: "Make an Offer",
    description: "Work with your agent to submit a competitive offer.",
    completed: false,
  },
  {
    number: 4,
    title: "Home Inspection",
    description: "Get the property inspected to identify any issues.",
    completed: false,
  },
  {
    number: 5,
    title: "Secure Financing",
    description: "Complete your mortgage application and loan approval.",
    completed: false,
  },
  {
    number: 6,
    title: "Close the Deal",
    description: "Review closing documents and finalize the purchase.",
    completed: false,
  },
];

const Education = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={true} />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Education Hub</h1>
              <p className="text-lg text-gray-600">
                Expert resources to guide you through the home buying process.
              </p>
            </div>
            
            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for guides, articles, and videos..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="articles">
                  <FileText className="h-4 w-4 mr-2" />
                  Articles & Guides
                </TabsTrigger>
                <TabsTrigger value="videos">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Video Tutorials
                </TabsTrigger>
                <TabsTrigger value="roadmap">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Buyer Roadmap
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="articles">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {article.readTime} min read
                          </span>
                        </div>
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="pt-0 justify-between">
                        <Badge
                          variant="secondary"
                          className={
                            article.difficulty === "beginner"
                              ? "bg-green-50 text-green-700 border-green-200"
                              : article.difficulty === "intermediate"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }
                        >
                          {article.difficulty}
                        </Badge>
                        <Button variant="link" className="p-0">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Button variant="outline" className="rounded-full w-12 h-12 p-0 bg-white/80 backdrop-blur-sm hover:bg-white">
                            <PlayCircle className="h-6 w-6 text-homestream-600" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="link" className="p-0">
                          Watch Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="roadmap">
                <Card>
                  <CardHeader>
                    <CardTitle>Home Buying Roadmap</CardTitle>
                    <CardDescription>
                      Follow our step-by-step guide to navigate the home buying process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <div className="absolute left-7 top-7 bottom-7 w-0.5 bg-gray-200"></div>
                      
                      <div className="space-y-8">
                        {steps.map((step) => (
                          <div key={step.number} className="flex gap-4 relative">
                            <div
                              className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10 ${
                                step.completed
                                  ? "bg-homestream-100 text-homestream-700"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {step.completed ? (
                                <Check className="h-6 w-6" />
                              ) : (
                                <span className="text-lg font-semibold">{step.number}</span>
                              )}
                            </div>
                            
                            <div className={step.completed ? "opacity-60" : ""}>
                              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                              <p className="text-gray-600">{step.description}</p>
                              
                              <Button
                                variant="link"
                                className="p-0 mt-2 text-homestream-600"
                              >
                                Learn more
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            {/* Featured resources */}
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">Featured Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-homestream-50 border-homestream-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      First-Time Buyer's Guide
                    </CardTitle>
                    <CardDescription>
                      A comprehensive guide to buying your first home
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-homestream-600 mt-0.5" />
                        <span>Step-by-step process explanation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-homestream-600 mt-0.5" />
                        <span>Financial preparation checklist</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-homestream-600 mt-0.5" />
                        <span>Common pitfalls to avoid</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-homestream-600 mt-0.5" />
                        <span>Special programs for first-time buyers</span>
                      </li>
                    </ul>
                    
                    <Button>Download Free Guide</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-homestream-600 to-homestream-800 text-white">
                  <CardHeader>
                    <CardTitle>Get Personalized Guidance</CardTitle>
                    <CardDescription className="text-homestream-100">
                      Our AI can create a custom learning path for you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Answer a few questions about your home buying goals, and we'll recommend the most relevant resources for your situation.
                    </p>
                    <Button variant="secondary">Start Assessment</Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Education;
