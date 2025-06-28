import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { MapPin, Calendar, Users, Briefcase } from "lucide-react";

export default function Delegation() {
  const delegations = [
    {
      country: "Malaysia",
      description: "Southeast Asia trade hub with growing opportunities",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      duration: "5 Days",
      participants: "15-20",
      highlights: [
        "Government trade ministry meetings",
        "B2B sessions with Malaysian importers",
        "Port and logistics facility visits",
        "Cultural orientation and networking",
        "Market research presentations"
      ],
      industries: ["Electronics", "Textiles", "Pharmaceuticals", "Agriculture"],
      nextDate: "March 2025"
    },
    {
      country: "Russia",
      description: "Gateway to Eurasian markets with vast potential",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      duration: "6 Days",
      participants: "12-18",
      highlights: [
        "Moscow Chamber of Commerce meetings",
        "Energy sector partnership opportunities",
        "Technology transfer discussions",
        "Industrial zone visits",
        "Legal and regulatory briefings"
      ],
      industries: ["Energy", "Technology", "Mining", "Chemicals"],
      nextDate: "April 2025"
    },
    {
      country: "USA",
      description: "World's largest economy and innovation leader",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      duration: "7 Days",
      participants: "20-25",
      highlights: [
        "Silicon Valley tech company visits",
        "Wall Street financial institutions",
        "Trade exhibition participation",
        "FDA and regulatory consultations",
        "Investment opportunity presentations"
      ],
      industries: ["Technology", "Healthcare", "Finance", "Manufacturing"],
      nextDate: "May 2025"
    },
    {
      country: "Japan",
      description: "Technology and innovation powerhouse",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      duration: "6 Days",
      participants: "15-20",
      highlights: [
        "JETRO collaboration meetings",
        "Automotive industry partnerships",
        "Technology innovation centers",
        "Quality standards workshops",
        "Cultural business etiquette training"
      ],
      industries: ["Automotive", "Electronics", "Robotics", "Precision Instruments"],
      nextDate: "June 2025"
    },
    {
      country: "UAE",
      description: "Middle East trade center and logistics hub",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      duration: "5 Days",
      participants: "18-22",
      highlights: [
        "Dubai Chamber of Commerce sessions",
        "Free zone authority meetings",
        "Logistics and shipping consultations",
        "Islamic finance discussions",
        "Regional market entry strategies"
      ],
      industries: ["Logistics", "Finance", "Construction", "Hospitality"],
      nextDate: "July 2025"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Global Delegation Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exclusive delegation trips to key international markets and build 
            meaningful business relationships with global partners.
          </p>
        </div>

        <div className="space-y-12">
          {delegations.map((delegation, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={delegation.image} 
                    alt={`${delegation.country} business district`}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">
                      Next Trip: {delegation.nextDate}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {delegation.country}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      {delegation.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-gray-900">Duration</p>
                          <p className="text-gray-600">{delegation.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-gray-900">Group Size</p>
                          <p className="text-gray-600">{delegation.participants} participants</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Briefcase className="w-5 h-5 text-primary mr-2" />
                        Program Highlights
                      </h4>
                      <ul className="space-y-2">
                        {delegation.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Focus Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {delegation.industries.map((industry, industryIndex) => (
                          <Badge key={industryIndex} variant="secondary">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 flex-1">
                          Register Interest
                        </Button>
                      </Link>
                      <Link href="/membership">
                        <Button variant="outline" className="flex-1">
                          Member Benefits
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Our Delegations?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Strategic Locations</h3>
                <p className="text-gray-600">Carefully selected markets with high growth potential and business opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quality Networking</h3>
                <p className="text-gray-600">Pre-arranged meetings with verified business partners and government officials.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Accompanied by trade experts who provide insights and facilitate connections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
