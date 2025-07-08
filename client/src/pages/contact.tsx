import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { MapPin, Phone, Mail, Send, CheckCircle, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      serviceInterest: "",
      message: "",
    },
  });

  const inquiryMutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    inquiryMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "14 & 29, KEDIA BUSINESS CENTRE",
        "KEDIA THE KOTHI, SIRSI-HATHOJ ROAD",
        "JAIPUR-302012 RJ, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+91 141 1234 5678",
        "+91 98765 43210"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@gtpcglobal.com",
        "support@gtpcglobal.com"
      ]
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out to GTPC. Our team will review your inquiry and 
              get back to you within 24 hours with detailed information.
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  We'll review your inquiry and requirements
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Our expert will prepare a customized response
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  You'll receive detailed information via email
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Schedule a consultation call if needed
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline" 
              className="mt-6"
            >
              Send Another Message
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to expand your global trade opportunities? Contact us today to discuss 
            how our services can accelerate your international business success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Office Hours</h3>
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">Monday - Friday</p>
                    <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Saturday</p>
                    <p className="text-gray-600">10:00 AM - 4:00 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sunday</p>
                    <p className="text-gray-600">Closed</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emergency</p>
                    <p className="text-gray-600">24/7 Support Line</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/gtpc/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://twitter.com/gtpc_india" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/people/GTPC/61577775519184/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
              </div>
              <p className="text-gray-600 mt-4">Follow us for updates on trade opportunities and industry insights</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you promptly
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
                    name="serviceInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Business Consultancy">Business Consultancy</SelectItem>
                            <SelectItem value="B2B Meetings">B2B Meetings</SelectItem>
                            <SelectItem value="Delegation Programs">Delegation Programs</SelectItem>
                            <SelectItem value="Training & Workshops">Training & Workshops</SelectItem>
                            <SelectItem value="Membership">Membership</SelectItem>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements and how we can help you..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={inquiryMutation.isPending}
                  >
                    {inquiryMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
