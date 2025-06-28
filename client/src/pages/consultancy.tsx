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
import { insertConsultancyBookingSchema, type InsertConsultancyBooking } from "@shared/schema";
import { Calendar, CheckCircle, IndianRupee, Clock, UserCheck, MessageSquare, Phone } from "lucide-react";

export default function Consultancy() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertConsultancyBooking>({
    resolver: zodResolver(insertConsultancyBookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      consultancyTopic: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const consultancyMutation = useMutation({
    mutationFn: async (data: InsertConsultancyBooking) => {
      const response = await apiRequest("POST", "/api/consultancy-booking", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setIsBookingOpen(false);
      toast({
        title: "Consultancy Booked!",
        description: "We'll contact you within 24 hours to confirm your consultation.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/consultancy-bookings"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to book consultancy session",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultancyBooking) => {
    consultancyMutation.mutate(data);
  };

  const consultancyTopics = [
    {
      title: "Export Business Setup",
      description: "Complete guidance on starting your export business, licensing, and documentation",
      duration: "1 Hour",
      ideal: "New exporters, startups"
    },
    {
      title: "Market Entry Strategy",
      description: "Strategic planning for entering specific international markets",
      duration: "1 Hour", 
      ideal: "Established businesses"
    },
    {
      title: "Trade Finance & Payments",
      description: "Expert advice on international payment methods, letters of credit, and trade finance",
      duration: "1 Hour",
      ideal: "Finance managers, exporters"
    },
    {
      title: "Customs & Compliance",
      description: "Navigate customs procedures, regulations, and compliance requirements",
      duration: "1 Hour",
      ideal: "Logistics teams, importers"
    },
    {
      title: "Digital Marketing for Exports",
      description: "Online strategies to reach international buyers and expand digital presence",
      duration: "1 Hour",
      ideal: "Marketing teams, SMEs"
    },
    {
      title: "Risk Management",
      description: "Identify and mitigate risks in international trade transactions",
      duration: "1 Hour",
      ideal: "Risk managers, traders"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Consultation Booked!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for booking your 1-hour expert consultation. We'll contact you within 24 hours 
              to confirm your session and provide meeting details.
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What to expect:</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Consultation confirmation call within 24 hours
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Pre-session questionnaire for better preparation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  1-hour focused consultation with expert
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Follow-up resources and action plan
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="mt-6"
            >
              Book Another Consultation
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Expert Consultancy Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized expert guidance for your export-import business challenges. 
            One-on-one consultations focused on your specific needs.
          </p>
        </div>

        {/* Consultancy Pricing */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="text-center">
                <Badge className="bg-primary text-white mb-4 w-fit mx-auto">Expert Consultation</Badge>
                <CardTitle className="text-3xl mb-4">1-Hour Focused Consultation</CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <IndianRupee className="w-8 h-8 text-primary mr-2" />
                  <span className="text-5xl font-bold text-primary">2,500</span>
                  <span className="text-xl text-gray-600 ml-2">/hour</span>
                </div>
                <CardDescription className="text-lg">
                  Personalized expert guidance on any specific export-import topic
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">60 Minutes</h4>
                    <p className="text-gray-600 text-sm">Focused consultation session</p>
                  </div>
                  <div>
                    <UserCheck className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Advisor</h4>
                    <p className="text-gray-600 text-sm">Industry professionals</p>
                  </div>
                  <div>
                    <MessageSquare className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Actionable Advice</h4>
                    <p className="text-gray-600 text-sm">Practical solutions & next steps</p>
                  </div>
                </div>
                
                <div className="text-center pt-6">
                  <Button 
                    size="lg" 
                    className="bg-accent text-gray-900 hover:bg-accent/90"
                    onClick={() => setIsBookingOpen(true)}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Consultation Topics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Popular Consultation Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary">{topic.duration}</Badge>
                    <span className="text-gray-500">Ideal for: {topic.ideal}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => {
                      form.setValue("consultancyTopic", topic.title);
                      setIsBookingOpen(true);
                    }}
                  >
                    Book This Topic
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Our Consultancy */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Consultancy?</h2>
            <p className="text-lg text-gray-600">Trusted by hundreds of businesses worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Experts</h3>
              <p className="text-gray-600 text-sm">15+ years of international trade experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tailored Solutions</h3>
              <p className="text-gray-600 text-sm">Customized advice for your specific situation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Immediate Support</h3>
              <p className="text-gray-600 text-sm">Quick response and follow-up assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Results Focused</h3>
              <p className="text-gray-600 text-sm">Practical advice with measurable outcomes</p>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {isBookingOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Book Expert Consultation</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsBookingOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </Button>
                </div>
                <p className="text-gray-600 mt-2">1-Hour Expert Consultation - ₹2,500</p>
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
                      name="consultancyTopic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Consultation Topic</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select consultation topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {consultancyTopics.map((topic) => (
                                <SelectItem key={topic.title} value={topic.title}>
                                  {topic.title}
                                </SelectItem>
                              ))}
                              <SelectItem value="Custom Topic">Custom Topic</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-4">
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
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select preferred time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                                <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                                <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                                <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                                <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specific Questions or Requirements (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your specific challenges or what you'd like to discuss..."
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
                        disabled={consultancyMutation.isPending}
                      >
                        {consultancyMutation.isPending ? "Booking..." : "Book Consultation - ₹2,500"}
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