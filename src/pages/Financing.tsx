
import { useState } from "react";
import AppSidebar from "@/components/layout/AppSidebar";
import AIChatbot from "@/components/home/AIChatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  BarChart3,
  Building,
  Calculator,
  CreditCard,
  DollarSign,
  LineChart,
  Percent,
  Wallet,
} from "lucide-react";

const Financing = () => {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  
  // Calculate down payment percentage
  const downPaymentPercentage = Math.round((downPayment / purchasePrice) * 100);
  
  // Calculate loan amount
  const loanAmount = purchasePrice - downPayment;
  
  // Calculate monthly payment (principal and interest only)
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment =
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
  // Estimate property tax and insurance
  const monthlyPropertyTax = (purchasePrice * 0.0112) / 12;
  const monthlyInsurance = (purchasePrice * 0.005) / 12;
  
  // Total monthly payment
  const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyInsurance;
  
  // Sample lenders
  const lenders = [
    { name: "HomeBank Financial", rate: 6.25, points: 0.7, fees: 3200 },
    { name: "National Mortgage", rate: 6.375, points: 0, fees: 2800 },
    { name: "Coast Union", rate: 6.5, points: 0, fees: 2500 },
    { name: "Premier Lending", rate: 6.125, points: 1.0, fees: 3600 },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center px-6">
          <h1 className="text-lg font-semibold">Financing Tools</h1>
        </header>
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Mortgage Calculator</h2>
              <p className="text-gray-500">
                Estimate your monthly payments and explore financing options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Calculator</CardTitle>
                    <CardDescription>
                      Adjust the sliders to see how different factors affect your monthly payment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Purchase Price Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Purchase Price</label>
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 text-gray-500" />
                          <Input
                            type="number"
                            value={purchasePrice}
                            onChange={(e) => setPurchasePrice(Number(e.target.value))}
                            className="w-24 h-7 text-right"
                          />
                        </div>
                      </div>
                      <Slider
                        value={[purchasePrice]}
                        min={100000}
                        max={1000000}
                        step={10000}
                        onValueChange={(value) => setPurchasePrice(value[0])}
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>$100k</span>
                        <span>$1M</span>
                      </div>
                    </div>
                    
                    {/* Down Payment Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Down Payment</label>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-3 w-3 text-gray-500" />
                          <Input
                            type="number"
                            value={downPayment}
                            onChange={(e) => setDownPayment(Number(e.target.value))}
                            className="w-24 h-7 text-right"
                          />
                          <span className="text-sm text-gray-500">({downPaymentPercentage}%)</span>
                        </div>
                      </div>
                      <Slider
                        value={[downPayment]}
                        min={0}
                        max={purchasePrice * 0.5}
                        step={5000}
                        onValueChange={(value) => setDownPayment(value[0])}
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>$0</span>
                        <span>{(purchasePrice * 0.5 / 1000).toFixed(0)}k</span>
                      </div>
                    </div>
                    
                    {/* Interest Rate Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Interest Rate</label>
                        <div className="flex items-center">
                          <Input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-16 h-7 text-right"
                            step="0.125"
                          />
                          <Percent className="h-3 w-3 text-gray-500 ml-1" />
                        </div>
                      </div>
                      <Slider
                        value={[interestRate]}
                        min={2}
                        max={10}
                        step={0.125}
                        onValueChange={(value) => setInterestRate(value[0])}
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>2%</span>
                        <span>10%</span>
                      </div>
                    </div>
                    
                    {/* Loan Term */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Loan Term</label>
                      <div className="flex gap-4">
                        {[15, 20, 30].map((term) => (
                          <Button
                            key={term}
                            type="button"
                            variant={loanTerm === term ? "default" : "outline"}
                            className="flex-1"
                            onClick={() => setLoanTerm(term)}
                          >
                            {term} Years
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Compare Lenders</CardTitle>
                    <CardDescription>
                      View current rates from our lending partners
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-5 text-sm font-medium text-gray-500 pb-2 border-b">
                        <div className="col-span-2">Lender</div>
                        <div>Rate</div>
                        <div>Points</div>
                        <div>Fees</div>
                      </div>
                      
                      {lenders.map((lender, i) => (
                        <div key={i} className="grid grid-cols-5 items-center">
                          <div className="col-span-2 font-medium">{lender.name}</div>
                          <div>{lender.rate}%</div>
                          <div>{lender.points}%</div>
                          <div className="flex items-center justify-between">
                            ${lender.fees}
                            <Button size="sm" variant="ghost">
                              Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-6">Connect with a Lender</Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Summary */}
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      Monthly Payment
                      <span className="text-2xl text-homestream-600">
                        ${Math.round(totalMonthlyPayment).toLocaleString()}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Principal & Interest</span>
                          <span>${Math.round(monthlyPayment).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Property Tax</span>
                          <span>${Math.round(monthlyPropertyTax).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Insurance</span>
                          <span>${Math.round(monthlyInsurance).toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="pt-2 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Loan Amount</span>
                          <span>${loanAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Down Payment</span>
                          <span>${downPayment.toLocaleString()} ({downPaymentPercentage}%)</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Loan Term</span>
                          <span>{loanTerm} years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Interest Rate</span>
                          <span>{interestRate}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-homestream-50 rounded-md p-4 border border-homestream-100">
                      <h4 className="font-medium text-sm flex items-center gap-2 mb-2">
                        <Calculator className="h-4 w-4 text-homestream-600" />
                        Affordability Analysis
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Based on the standard 28% debt-to-income ratio guideline, you would need 
                        an annual income of at least ${Math.round(totalMonthlyPayment * 12 / 0.28).toLocaleString()} 
                        to comfortably afford this home.
                      </p>
                      <Button size="sm" variant="link" className="px-0">
                        Get Pre-Approved
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Tools</CardTitle>
                    <CardDescription>
                      Explore more financing options
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Check Credit Score
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Affordability Calculator
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Building className="h-4 w-4 mr-2" />
                      Compare Loan Types
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Wallet className="h-4 w-4 mr-2" />
                      Down Payment Assistance
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <LineChart className="h-4 w-4 mr-2" />
                      Amortization Schedule
                    </Button>
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

export default Financing;
