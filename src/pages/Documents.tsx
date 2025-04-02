
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
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  FileText,
  Upload,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Documents = () => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
  };

  const documentTypes = [
    { name: "Purchase Agreement", description: "Standard contract for buying a home" },
    { name: "Loan Application", description: "Apply for mortgage financing" },
    { name: "Home Inspection", description: "Report on property condition" },
    { name: "Disclosure Form", description: "Seller's disclosure of property issues" },
    { name: "Closing Disclosure", description: "Final costs and loan terms" },
  ];

  const documents = [
    { 
      id: "1", 
      name: "Purchase Agreement.pdf", 
      status: "reviewed", 
      aiNotes: "Contract terms standard. Contingency period: 21 days.", 
      warnings: 0,
      date: "Jun 12, 2023" 
    },
    { 
      id: "2", 
      name: "Home Inspection Report.pdf", 
      status: "warning", 
      aiNotes: "Several issues detected with roof and electrical.", 
      warnings: 3,
      date: "Jun 15, 2023" 
    },
    { 
      id: "3", 
      name: "Loan Estimate.pdf", 
      status: "pending", 
      aiNotes: "Waiting for AI review...", 
      warnings: 0,
      date: "Jun 18, 2023" 
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-6">
          <h1 className="text-lg font-semibold">Document Management</h1>
        </header>
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Documents</h2>
              <p className="text-gray-500">
                Upload, generate, and manage all your home buying documents in one place.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Upload area */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Documents</CardTitle>
                    <CardDescription>
                      Drag and drop files or click to browse
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center ${
                        isDragging
                          ? "border-homestream-500 bg-homestream-50"
                          : "border-gray-300 hover:border-homestream-300"
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="mx-auto flex flex-col items-center">
                        <Upload className="h-10 w-10 text-gray-400 mb-4" />
                        <h3 className="mb-2 font-medium">
                          Drop your files here, or{" "}
                          <label className="text-homestream-600 cursor-pointer">
                            browse
                            <Input
                              type="file"
                              className="hidden"
                              multiple
                              onChange={() => {}}
                            />
                          </label>
                        </h3>
                        <p className="text-sm text-gray-500">
                          Supported formats: PDF, DOCX, JPG, PNG (max 25MB)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Document list */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Documents</CardTitle>
                    <CardDescription>
                      Documents you've uploaded or generated
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between border rounded-lg p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded">
                              <FileText className="h-6 w-6 text-gray-700" />
                            </div>
                            <div>
                              <h4 className="font-medium">{doc.name}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500">{doc.date}</span>
                                {doc.status === "reviewed" && (
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle2 className="h-3 w-3 mr-1" /> Reviewed
                                  </Badge>
                                )}
                                {doc.status === "warning" && (
                                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                    <AlertTriangle className="h-3 w-3 mr-1" /> {doc.warnings} warnings
                                  </Badge>
                                )}
                                {doc.status === "pending" && (
                                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                    Processing
                                  </Badge>
                                )}
                              </div>
                              {doc.aiNotes && (
                                <p className="text-xs text-gray-600 mt-1">
                                  AI: {doc.aiNotes}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Load More</Button>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Generate documents */}
                <Card>
                  <CardHeader>
                    <CardTitle>Generate Documents</CardTitle>
                    <CardDescription>
                      Create commonly used documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {documentTypes.map((docType, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{docType.name}</h4>
                          <p className="text-xs text-gray-500">{docType.description}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Generate
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                {/* AI Document Review */}
                <Card className="bg-homestream-50 border-homestream-100">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      AI Document Review
                    </CardTitle>
                    <CardDescription>
                      Our AI can review your documents and highlight important details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Identify legal terms and requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Highlight potentially problematic clauses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Compare to standard templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Suggest improvements or edits</span>
                      </li>
                    </ul>
                    
                    <Button className="w-full">Enable AI Review</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <AIChatbot />
    </div>
  );
};

export default Documents;
