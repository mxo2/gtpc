import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Globe, TrendingUp, Users, Award, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-stats-banner.png" 
          alt="GTPC Global Trade Services" 
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowRight className="w-8 h-8 text-white rotate-90 drop-shadow-lg" />
      </div>
    </section>
  );
}
