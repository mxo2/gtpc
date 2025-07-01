import { TrendingUp, Users, GraduationCap, Globe, Building, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Consultancy",
      description: "Expert guidance for exporters and importers to navigate international markets, regulations, and business strategies.",
      features: [
        "Market research and analysis",
        "Regulatory compliance guidance",
        "Business strategy development",
        "Risk assessment and mitigation",
        "Documentation support"
      ]
    },
    {
      icon: Users,
      title: "B2B Meetings",
      description: "Virtual and face-to-face business meetings connecting global buyers and sellers for meaningful partnerships.",
      features: [
        "Pre-qualified business matches",
        "Virtual meeting platform",
        "Face-to-face meeting arrangements",
        "Industry-specific networking",
        "Follow-up support"
      ]
    },
    {
      icon: Globe,
      title: "International Trade Services",
      description: "Comprehensive support for all aspects of international trade operations and market entry strategies.",
      features: [
        "Export-import documentation",
        "Customs clearance support",
        "Logistics coordination",
        "Payment terms guidance",
        "Quality certification assistance"
      ]
    },
    {
      icon: Building,
      title: "Market Entry Support",
      description: "Strategic guidance for entering new international markets with confidence and success.",
      features: [
        "Market opportunity assessment",
        "Local partner identification",
        "Distribution channel setup",
        "Cultural adaptation guidance",
        "Legal compliance support"
      ]
    },
    {
      icon: Briefcase,
      title: "Trade Finance Advisory",
      description: "Expert advice on financing options and financial instruments for international trade.",
      features: [
        "Letter of credit guidance",
        "Trade finance options",
        "Currency risk management",
        "Payment security solutions",
        "Credit insurance advice"
      ]
    },
    {
      icon: Calendar,
      title: "ISBBE - B2C Exhibitions",
      description: "Indian Street Beyond Border Events - Taking Indian products directly to global consumers through strategic B2C exhibitions.",
      features: [
        "International consumer exhibitions",
        "Direct market access in 6 countries",
        "Complete exhibition logistics",
        "Brand building opportunities",
        "Post-event order management"
      ]
    },
    {
      icon: GraduationCap,
      title: "Capacity Building",
      description: "Comprehensive training and skill development programs for trade professionals.",
      features: [
        "Export-import training",
        "Digital marketing for exports",
        "Trade documentation workshops",
        "Negotiation skills development",
        "Industry-specific programs"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your international trade success 
            and connect you with global opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help accelerate your international trade success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/membership">
              <Button size="lg" variant="outline">
                Explore Membership
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
