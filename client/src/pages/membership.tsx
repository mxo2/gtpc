import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertMembershipSchema, type InsertMembership } from "@shared/schema";
import { Check, Star, Users, Globe, GraduationCap, Calendar, Shield, Headphones, CheckCircle, CreditCard, Copy } from "lucide-react";

export default function Membership() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertMembership>({
    resolver: zodResolver(insertMembershipSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
    },
  });

  const membershipMutation = useMutation({
    mutationFn: async (data: InsertMembership) => {
      const response = await apiRequest("POST", "/api/membership", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setShowPayment(true);
      toast({
        title: "Application Submitted!",
        description: "Please complete payment to activate your membership.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/memberships"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit membership application",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertMembership) => {
    try {
      // First, send the data to backend for CRM integration
      await apiRequest("POST", "/api/membership", data);
      
      // Store form data in localStorage to pass to external membership portal
      localStorage.setItem('membershipData', JSON.stringify(data));
      
      // Show success message
      toast({
        title: "Redirecting to Membership Portal",
        description: "Taking you to complete your membership registration...",
      });
      
      // Redirect to external membership portal after a short delay
      setTimeout(() => {
        window.location.href = 'https://my.gtpcglobal.com/membership-sdmzb';
      }, 1500);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Priority B2B Meetings",
      description: "Get first access to exclusive business matching opportunities with verified international partners."
    },
    {
      icon: Calendar,
      title: "Delegation Program Discounts",
      description: "Enjoy 20% discount on all international delegation trips to key markets worldwide."
    },
    {
      icon: GraduationCap,
      title: "Free Training Access",
      description: "Unlimited access to all online training programs, workshops, and certification courses."
    },
    {
      icon: Headphones,
      title: "Expert Consultancy",
      description: "Monthly one-on-one sessions with trade experts for personalized guidance and support."
    },
    {
      icon: Globe,
      title: "Global Network Access",
      description: "Connect with 500+ verified international partners across 50+ countries."
    },
    {
      icon: Shield,
      title: "Risk Assessment Support",
      description: "Comprehensive market and partner due diligence services to minimize business risks."
    }
  ];

  const features = [
    "24/7 member support portal",
    "Quarterly market intelligence reports",
    "Exclusive member-only events",
    "Priority customer service",
    "Advanced B2B matching algorithms",
    "Mobile app access",
    "Direct expert hotline",
    "Custom market research requests"
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to GTPC!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for joining our premium membership program. We'll contact you within 24 hours 
              to complete your membership setup and provide access to all exclusive benefits.
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Membership verification and activation
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Access credentials sent to your email
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Welcome orientation call scheduled
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-600 mr-3" />
                  Premium platform access activated
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Premium Membership</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive network of global trade professionals and unlock premium benefits 
            to accelerate your international business success.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader className="text-center">
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-6xl font-bold text-primary">₹2,999</span>
                <span className="text-2xl text-gray-600 ml-2">/year</span>
              </div>
              <CardTitle className="text-3xl mb-2">Annual Membership</CardTitle>
              <CardDescription className="text-lg">
                Comprehensive access to all GTPC services and global network
              </CardDescription>
              <div className="flex items-center justify-center mt-4">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9/5 member satisfaction</span>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Membership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Features</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Join GTPC Today</CardTitle>
              <CardDescription>
                Fill out the form below to start your premium membership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent text-gray-900 hover:bg-accent/90"
                  >
                    Join Now - ₹2,999/year
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center mt-4">
                    You will be redirected to our secure membership portal to complete your registration and payment.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Payment Information Modal */}
        {showPayment && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Membership Application Submitted!</h3>
                <p className="text-gray-600">Please complete your payment to activate your premium membership.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Bank Transfer Details</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-600">Account Name:</span>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900 text-sm">Global Trade Promotion Corporation</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText("Global Trade Promotion Corporation");
                          toast({ title: "Copied!", description: "Account name copied to clipboard" });
                        }}
                        className="ml-2 p-1 h-auto"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-600">Account Number:</span>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900">678605600736</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText("678605600736");
                          toast({ title: "Copied!", description: "Account number copied to clipboard" });
                        }}
                        className="ml-2 p-1 h-auto"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-600">IFSC Code:</span>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900">ICICI0006786</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText("ICICI0006786");
                          toast({ title: "Copied!", description: "IFSC code copied to clipboard" });
                        }}
                        className="ml-2 p-1 h-auto"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-blue-200">
                    <span className="text-gray-600">Branch:</span>
                    <span className="font-semibold text-gray-900">Tilak Marg Branch</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Annual Fee:</span>
                    <span className="font-bold text-lg text-green-600">₹2,999</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <h5 className="font-semibold text-gray-900 mb-2">Important Notes:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Please include your name and "Membership" in the transfer reference</li>
                  <li>• Share payment screenshot/details via WhatsApp or email</li>
                  <li>• Membership will be activated within 24 hours of payment</li>
                  <li>• Online payment integration coming soon</li>
                </ul>
              </div>

              <Button 
                onClick={() => setShowPayment(false)}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Got it, I'll make the payment
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
