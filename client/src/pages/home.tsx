import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, GraduationCap, ArrowRight, Check } from "lucide-react";

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

      <Stats />
      <Testimonials />
    </div>
  );
}
