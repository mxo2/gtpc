import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertTrainingBookingSchema, type InsertTrainingBooking } from "@shared/schema";
import { Link } from "wouter";
import { Laptop, Users, Award, Clock, PlayCircle, BookOpen, Calendar, CheckCircle, IndianRupee } from "lucide-react";

export default function Training() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertTrainingBooking>({
    resolver: zodResolver(insertTrainingBookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      trainingType: "",
      preferredDate: "",
      message: "",
    },
  });

  const trainingMutation = useMutation({
    mutationFn: async (data: InsertTrainingBooking) => {
      const response = await apiRequest("POST", "/api/training-booking", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setIsBookingOpen(false);
      toast({
        title: "Training Booked!",
        description: "We'll contact you within 24 hours to confirm your training session.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/training-bookings"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to book training session",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertTrainingBooking) => {
    trainingMutation.mutate(data);
  };

  const trainingPrograms = [
    {
      category: "Online Courses",
      icon: Laptop,
      description: "Self-paced online training covering export-import fundamentals",
      courses: [
        {
          title: "Export-Import Fundamentals",
          duration: "8 hours",
          level: "Beginner",
          topics: ["Export procedures", "Import regulations", "Documentation basics", "Incoterms overview"]
        },
        {
          title: "Documentation & Compliance",
          duration: "12 hours", 
          level: "Intermediate",
          topics: ["Commercial invoices", "Shipping documents", "Customs procedures", "Compliance requirements"]
        },
        {
          title: "Market Research Strategies",
          duration: "6 hours",
          level: "Intermediate", 
          topics: ["Market analysis", "Competitor research", "Opportunity assessment", "Entry strategies"]
        },
        {
          title: "Digital Marketing for Exports",
          duration: "10 hours",
          level: "Advanced",
          topics: ["Online presence", "B2B platforms", "Social media marketing", "Lead generation"]
        }
      ]
    },
    {
      category: "Live Workshops",
      icon: Users,
      description: "Interactive sessions with industry experts and real-world case studies",
      courses: [
        {
          title: "Export Business Setup Workshop",
          duration: "2 days",
          level: "Beginner",
          topics: ["Business registration", "Licensing procedures", "Bank account setup", "Initial documentation"]
        },
        {
          title: "Advanced Trade Finance",
          duration: "1 day",
          level: "Advanced",
          topics: ["Letters of credit", "Trade financing options", "Risk management", "Payment terms"]
        },
        {
          title: "Negotiation Skills for Traders",
          duration: "1 day",
          level: "Intermediate",
          topics: ["Negotiation strategies", "Cultural considerations", "Contract terms", "Conflict resolution"]
        },
        {
          title: "Logistics & Supply Chain",
          duration: "1.5 days",
          level: "Intermediate",
          topics: ["Shipping modes", "Freight forwarding", "Warehouse management", "Cost optimization"]
        }
      ]
    },
    {
      category: "Certification Programs",
      icon: Award,
      description: "Comprehensive certification programs with industry recognition",
      courses: [
        {
          title: "Certified Export Professional (CEP)",
          duration: "3 months",
          level: "Professional",
          topics: ["Complete export process", "International marketing", "Trade regulations", "Business development"]
        },
        {
          title: "Import Specialist Certification",
          duration: "2 months", 
          level: "Professional",
          topics: ["Import procedures", "Customs clearance", "Duty calculations", "Compliance management"]
        },
        {
          title: "International Trade Consultant",
          duration: "4 months",
          level: "Expert",
          topics: ["Consultancy skills", "Market analysis", "Strategy development", "Client management"]
        }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Professional": return "bg-blue-100 text-blue-800";
      case "Expert": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Session Booked!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for booking our premium 3-hour training session. We'll contact you within 24 hours 
              to confirm your training schedule and provide all necessary details.
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Next Steps:</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Training confirmation and schedule setup
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Pre-training materials sent to your email
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Payment instructions provided
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Training session conducted by expert
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="mt-6"
            >
              Book Another Training
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Training & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master export-import business with our comprehensive training programs designed 
            by industry experts and trade professionals.
          </p>
        </div>

        {/* Premium Training Plan */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="text-center">
                <Badge className="bg-primary text-white mb-4 w-fit mx-auto">Premium Training</Badge>
                <CardTitle className="text-3xl mb-4">Intensive 3-Hour Export-Import Masterclass</CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <IndianRupee className="w-8 h-8 text-primary mr-2" />
                  <span className="text-5xl font-bold text-primary">5,999</span>
                  <span className="text-xl text-gray-600 ml-2">/session</span>
                </div>
                <CardDescription className="text-lg">
                  Comprehensive hands-on training covering all aspects of export-import business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Training Includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Export-import procedures & documentation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Customs clearance & regulations
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        International payment methods
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Market research & opportunity identification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Risk management strategies
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Training Benefits:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        One-on-one expert guidance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Real case study analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Practical templates & tools
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Post-training support for 30 days
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <Button 
                    size="lg" 
                    className="bg-accent text-gray-900 hover:bg-accent/90"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your 3-Hour Training Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-16">
          {trainingPrograms.map((program, programIndex) => (
            <div key={programIndex}>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.category}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{program.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {program.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2 mb-6">
                        {course.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-2">
                        <Button className="bg-primary hover:bg-primary/90">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Enroll Now
                        </Button>
                        <Button variant="outline" className="text-sm">
                          <BookOpen className="w-4 h-4 mr-2" />
                          View Curriculum
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
              <p className="text-lg text-gray-600">Comprehensive learning experience with practical industry insights</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
                <p className="text-gray-600 text-sm">Learn from industry veterans with decades of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Practical Content</h3>
                <p className="text-gray-600 text-sm">Real-world case studies and hands-on exercises</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600 text-sm">Certificates recognized by major trade organizations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600 text-sm">Online, offline, and hybrid learning options available</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/membership">
                <Button size="lg" className="bg-accent text-gray-900 hover:bg-accent/90">
                  Get Free Training Access with Membership
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Training Booking Modal */}
        {isBookingOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Book Premium Training Session</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBookingOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </Button>
                </div>
                <p className="text-gray-600 mt-2">3-Hour Intensive Export-Import Masterclass - ₹5,999</p>
              </div>
              
              <div className="p-6">
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

                    <div className="grid md:grid-cols-2 gap-4">
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
                      name="trainingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Training Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select training type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="3-Hour Export-Import Masterclass">3-Hour Export-Import Masterclass</SelectItem>
                              <SelectItem value="Custom Training Session">Custom Training Session</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input 
                              type="date" 
                              {...field} 
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Requirements (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your specific training needs or any questions..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setIsBookingOpen(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-accent text-gray-900 hover:bg-accent/90 flex-1"
                        disabled={trainingMutation.isPending}
                      >
                        {trainingMutation.isPending ? "Booking..." : "Book Training - ₹5,999"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
