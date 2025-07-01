import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Calendar, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "wouter";

export default function ISBBE() {
  const exhibitions = [
    {
      country: "Kenya",
      continent: "Africa",
      flag: "🇰🇪",
      highlights: ["Nairobi International Trade Fair", "East African Market Gateway", "Growing Consumer Base"],
      status: "Upcoming"
    },
    {
      country: "Brazil",
      continent: "South America",
      flag: "🇧🇷",
      highlights: ["São Paulo Business Hub", "Latin America's Largest Economy", "Diverse Market Opportunities"],
      status: "Planning"
    },
    {
      country: "Chile",
      continent: "South America",
      flag: "🇨🇱",
      highlights: ["Santiago Trade Center", "Pacific Alliance Member", "Stable Economic Environment"],
      status: "Planning"
    },
    {
      country: "Uzbekistan",
      continent: "Central Asia",
      flag: "🇺🇿",
      highlights: ["Tashkent Business District", "Silk Road Trade Route", "Emerging Market Potential"],
      status: "Planning"
    },
    {
      country: "Malaysia",
      continent: "Southeast Asia",
      flag: "🇲🇾",
      highlights: ["Kuala Lumpur Convention Centre", "ASEAN Market Access", "Multicultural Business Hub"],
      status: "Upcoming"
    },
    {
      country: "Dubai, UAE",
      continent: "Middle East",
      flag: "🇦🇪",
      highlights: ["Dubai World Trade Centre", "Global Business Gateway", "Tax-Free Trading Zone"],
      status: "Upcoming"
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Direct entry into high-growth international markets across 4 continents"
    },
    {
      icon: Users,
      title: "B2C Direct Sales",
      description: "Connect directly with international consumers and retail buyers"
    },
    {
      icon: TrendingUp,
      title: "Export Growth",
      description: "Expand your product reach to emerging and established markets"
    },
    {
      icon: Award,
      title: "Brand Recognition",
      description: "Build international brand presence and consumer awareness"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-primary">New Initiative</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ISBBE - Indian Street Beyond Border Events
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Taking Indian products directly to global consumers through strategic B2C exhibitions 
              across Africa, South America, Middle East, and Asia
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                <Calendar className="mr-2 h-5 w-5" />
                View Exhibition Schedule
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <MapPin className="mr-2 h-5 w-5" />
                Explore Locations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About ISBBE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bringing India to the World</h2>
            <p className="text-lg text-muted-foreground">
              ISBBE is GTPC's flagship B2C exhibition program designed to showcase Indian products 
              directly to international consumers. Through strategically located exhibitions in 
              high-growth markets, we create opportunities for Indian businesses to establish 
              their presence globally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Locations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exhibition Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic locations chosen for market potential, consumer demand, and business opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitions.map((exhibition, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{exhibition.flag}</span>
                    <Badge variant={exhibition.status === "Upcoming" ? "default" : "secondary"}>
                      {exhibition.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{exhibition.country}</CardTitle>
                  <CardDescription className="text-base">{exhibition.continent}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exhibition.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Benefits */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Participate in ISBBE?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">For Exhibitors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Direct access to international consumer markets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Brand building in emerging economies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>On-ground market research and consumer feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Networking with local distributors and retailers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Government support and export incentives</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Our Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Complete exhibition logistics management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Pre-event marketing and promotion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Translation and cultural adaptation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Booth design and setup assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Post-event follow-up and order management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Product Categories</h2>
            <p className="text-lg text-muted-foreground">
              Showcasing the best of Indian craftsmanship and innovation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Textiles & Apparel",
              "Handicrafts",
              "Jewelry",
              "Food & Spices",
              "Ayurveda & Wellness",
              "Home Decor",
              "Leather Goods",
              "Electronics",
              "Cosmetics",
              "Organic Products",
              "Traditional Arts",
              "Fashion Accessories"
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-medium">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Products Global?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ISBBE and showcase your products to international consumers in 
            high-growth markets across the world
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                Register Your Interest
              </Button>
            </Link>
            <Link href="/membership">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}