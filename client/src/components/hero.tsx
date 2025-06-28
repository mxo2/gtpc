import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="gradient-primary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Expand Your Global Trade <span className="text-accent">Opportunities</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Connect with international markets through our comprehensive export-import services, 
              B2B meetings, delegation programs, and expert consultancy worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership">
                <Button size="lg" className="bg-accent text-gray-900 hover:bg-accent/90 font-semibold">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-semibold"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="International business meeting" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl text-gray-900">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Handshake className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Global Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
