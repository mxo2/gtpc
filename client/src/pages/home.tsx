import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, GraduationCap, ArrowRight, Check, Ship, Plane, Truck, Globe2, Building, FileText } from "lucide-react";

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
      
      {/* International Trade Services Banner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Complete International Trade Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From shipping logistics to expert consultancy, we provide end-to-end services 
              for your global trade success across maritime, air, and land transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Shipping & Logistics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <Ship className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Maritime Shipping</h3>
              <p className="text-gray-600 mb-4">
                Ocean freight services with full container loads (FCL) and less container loads (LCL) 
                to major ports worldwide. Competitive rates and reliable transit times.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Container booking & tracking</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Port-to-port delivery</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Cargo insurance coverage</li>
              </ul>
            </div>

            {/* Air Freight */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <Plane className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Air Freight</h3>
              <p className="text-gray-600 mb-4">
                Fast and secure air cargo services for time-sensitive shipments. 
                Express delivery options with real-time tracking and customs clearance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Express & standard delivery</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Temperature-controlled cargo</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Dangerous goods handling</li>
              </ul>
            </div>

            {/* Land Transportation */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
              <Truck className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Land Transportation</h3>
              <p className="text-gray-600 mb-4">
                Cross-border trucking services and rail freight solutions. 
                Seamless connectivity across neighboring countries and trade corridors.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Cross-border trucking</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Rail freight services</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Multi-modal connectivity</li>
              </ul>
            </div>

            {/* Trade Consultancy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <Building className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Trade Consultancy</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance on export-import procedures, market entry strategies, 
                and international trade compliance. Professional consultation at ₹2,500/hour.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Market research & analysis</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Regulatory compliance</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Business strategy planning</li>
              </ul>
            </div>

            {/* Documentation Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500">
              <FileText className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Documentation</h3>
              <p className="text-gray-600 mb-4">
                Complete documentation support for international trade including 
                customs clearance, certificates, and regulatory compliance paperwork.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Export-import licenses</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Certificate of origin</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Customs clearance</li>
              </ul>
            </div>

            {/* Global Network */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-500">
              <Globe2 className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">Global Network</h3>
              <p className="text-gray-600 mb-4">
                Extensive network of partners and agents across 50+ countries. 
                Delegation programs to Malaysia, Russia, USA, Japan, and UAE.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />50+ country presence</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Business delegations</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />B2B meeting facilitation</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Expand Your Trade Globally?</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of successful exporters and importers who trust GTPC for their international trade needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultancy">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8">
                  Get Expert Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8">
                  View All Services
                </Button>
              </Link>
            </div>
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
