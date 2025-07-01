import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, GraduationCap, ArrowRight, Check, Ship, Plane, Truck, Globe2, Building, FileText, Calendar, MapPin } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Consultancy",
      description: "Expert guidance for exporters and importers to navigate international markets, regulations, and business strategies.",
      link: "/services"
    },
    {
      icon: Users,
      title: "B2B Meetings",
      description: "Virtual and face-to-face business meetings connecting global buyers and sellers for meaningful partnerships.",
      link: "/services"
    },
    {
      icon: GraduationCap,
      title: "Training & Workshops",
      description: "Comprehensive online and offline training programs to master export-import business fundamentals and advanced strategies.",
      link: "/training"
    }
  ];

  const featuredServices = [
    {
      title: "Premium Training Session",
      description: "3-Hour intensive export-import masterclass",
      price: "₹5,999",
      link: "/training",
      features: ["One-on-one guidance", "Practical tools", "Certificate included"]
    },
    {
      title: "Expert Consultation",
      description: "1-Hour focused consultation on any trade topic",
      price: "₹2,500",
      link: "/consultancy",
      features: ["Expert advisor", "Actionable advice", "Follow-up support"]
    }
  ];

  const delegations = [
    {
      country: "Malaysia",
      description: "Southeast Asia trade hub",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      country: "Russia",
      description: "Eurasian market gateway",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      country: "USA",
      description: "World's largest economy",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      country: "Japan",
      description: "Technology & innovation leader",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      country: "UAE",
      description: "Middle East trade center",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const membershipBenefits = [
    "Priority B2B Meetings - Get first access to exclusive business matching opportunities",
    "Delegation Program Discounts - 20% discount on all international delegation trips",
    "Free Training Access - Unlimited access to all online training programs",
    "Expert Consultancy - Monthly one-on-one sessions with trade experts",
    "Global Network Access - Connect with 500+ verified international partners"
  ];

  return (
    <div>
      <Hero />
      
      {/* Expert Services Banner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to accelerate your international trade success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Trade Consultancy */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trade Consultancy</h3>
              <p className="text-gray-600 text-sm mb-4">
                Expert guidance on export-import procedures and international trade compliance.
              </p>
              <Link href="/consultancy">
                <span className="text-primary font-medium text-sm hover:underline">Learn more →</span>
              </Link>
            </div>

            {/* Training & Workshops */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Training & Workshops</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive training programs on export-import fundamentals and best practices.
              </p>
              <Link href="/training">
                <span className="text-primary font-medium text-sm hover:underline">Learn more →</span>
              </Link>
            </div>

            {/* Business Delegations */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Delegations</h3>
              <p className="text-gray-600 text-sm mb-4">
                Organized business delegations to connect with global partners and explore new markets.
              </p>
              <Link href="/delegation">
                <span className="text-primary font-medium text-sm hover:underline">Learn more →</span>
              </Link>
            </div>

            {/* ISBBE Exhibitions */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <Globe2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISBBE Exhibitions</h3>
              <p className="text-gray-600 text-sm mb-4">
                B2C exhibitions taking Indian products directly to global consumers in 6 countries.
              </p>
              <Link href="/isbbe">
                <span className="text-primary font-medium text-sm hover:underline">Learn more →</span>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ISBBE Section - New B2C Exhibition Initiative */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-4 py-2 rounded-full mb-6">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">New Initiative</span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              ISBBE - Indian Street Beyond Border Events
            </h2>
            <p className="text-xl text-gray-600">
              Taking Indian products directly to global consumers through strategic B2C exhibitions 
              across Africa, South America, Middle East, and Asia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Kenya 🇰🇪</h3>
              <p className="text-gray-600">East African market gateway with growing consumer demand</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Brazil 🇧🇷</h3>
              <p className="text-gray-600">Latin America's largest economy and consumer market</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Chile 🇨🇱</h3>
              <p className="text-gray-600">Stable economy with high purchasing power consumers</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Uzbekistan 🇺🇿</h3>
              <p className="text-gray-600">Central Asian hub on the historic Silk Road</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Malaysia 🇲🇾</h3>
              <p className="text-gray-600">ASEAN business center with diverse consumer base</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Dubai, UAE 🇦🇪</h3>
              <p className="text-gray-600">Global trading hub and luxury market center</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/isbbe">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Explore ISBBE Exhibitions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to accelerate your international trade success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.link}>
                  <Button variant="link" className="text-primary font-semibold p-0 h-auto">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delegation Programs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Delegation Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our exclusive delegation trips to key international markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {delegations.map((delegation, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={delegation.image} 
                  alt={`${delegation.country} business district`} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{delegation.country}</h3>
                  <p className="text-gray-600 text-sm mb-4">{delegation.description}</p>
                  <Link href="/delegation">
                    <Button variant="link" className="text-primary font-semibold text-sm p-0 h-auto">
                      View Program <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Membership</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Unlock exclusive benefits and accelerate your global trade success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 text-gray-900 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold text-primary">₹2,999</span>
                    <span className="text-xl text-gray-600 ml-2">/year</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Annual Membership</h3>
                  <p className="text-gray-600 mb-8">
                    Join our exclusive network of global trade professionals and unlock premium benefits.
                  </p>
                  <Link href="/membership">
                    <Button size="lg" className="bg-accent text-gray-900 hover:bg-accent/90 w-full lg:w-auto">
                      Become a Member
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {membershipBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="text-green-600 w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.split(' - ')[0]}</h4>
                        <p className="text-gray-600 text-sm">{benefit.split(' - ')[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized expert guidance with our premium training and consultation services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-primary">{service.price}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href={service.link}>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Book Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
    </div>
  );
}
