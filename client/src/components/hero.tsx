import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Globe, TrendingUp, Users, Award, MapPin } from "lucide-react";
import bannerImage from "@assets/ChatGPT Image Jul 1, 2025, 04_26_01 PM_1751367401568.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-accent" />
                <span className="text-accent font-semibold text-lg">Global Trade Excellence</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Expand Your Global Trade 
                <span className="text-accent block">Opportunities</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Connect with international markets through our comprehensive export-import consultancy, 
                B2B meetings, delegation programs, and expert training workshops.
              </p>
            </div>

            {/* Key Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold">Export-Import Consultancy</h3>
                <p className="text-sm text-gray-300">Expert guidance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold">Training & Workshops</h3>
                <p className="text-sm text-gray-300">Skill development</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Globe className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold">Business Delegations</h3>
                <p className="text-sm text-gray-300">Global connections</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-semibold px-8">
                  Start Trading Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/consultancy">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
                >
                  Get Expert Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src={bannerImage} 
                alt="GTPC - Promoting Indian Products Worldwide" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-3xl"></div>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl text-primary max-w-xs z-20">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="text-green-600 w-7 h-7" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Successful Consultations</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl text-primary max-w-xs z-20">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="text-blue-600 w-7 h-7" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-gray-600">Countries Connected</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 bg-accent rounded-2xl p-4 shadow-2xl text-primary z-20">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-lg font-bold">24/7</p>
                <p className="text-xs">Global Support</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Bottom Section - Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-300 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-white/70 font-semibold">ISO 9001 Certified</div>
            <div className="text-white/70 font-semibold">FIATA Member</div>
            <div className="text-white/70 font-semibold">WTO Verified</div>
            <div className="text-white/70 font-semibold">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
