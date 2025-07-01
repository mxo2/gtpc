import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Globe, TrendingUp, Users, Award, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-stats-banner.png" 
          alt="GTPC Global Trade Services" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Empty spacer to prevent overlap with banner content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            {/* Add scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowRight className="w-8 h-8 text-white rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
