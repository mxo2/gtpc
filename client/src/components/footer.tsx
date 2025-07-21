import { Link } from "wouter";
import { Globe, Linkedin, Twitter, Facebook, Instagram, Phone, MessageCircle, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [logo, setLogo] = useState<string>("/gtpc-logo.png");
  const [companyInfo, setCompanyInfo] = useState({
    name: "Global Trade Promotion Corporation",
    email: "info@gtpcglobal.com",
    phone: "",
    address: "14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ"
  });

  useEffect(() => {
    const savedLogo = localStorage.getItem("gtpc-logo");
    if (savedLogo) {
      setLogo(savedLogo);
    }

    const savedInfo = localStorage.getItem("gtpc-company-info");
    if (savedInfo) {
      setCompanyInfo(JSON.parse(savedInfo));
    }

    const handleStorageChange = () => {
      const newLogo = localStorage.getItem("gtpc-logo");
      if (newLogo) setLogo(newLogo);
      
      const newInfo = localStorage.getItem("gtpc-company-info");
      if (newInfo) setCompanyInfo(JSON.parse(newInfo));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{companyInfo.name}</h1>
              <p className="text-sm text-gray-400">Connecting Global Markets</p>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting global markets through expert consultancy, strategic partnerships, 
              and comprehensive trade solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/gtpc/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/gtpc_india" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/GTPC/61577775519184/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                <a href="https://wa.me/919829649640" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  WhatsApp: +91 98296 49640
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Send className="w-4 h-4 text-accent" />
                <a href="https://t.me/sam_panwar" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Telegram: @sam_panwar
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Business Consultancy</Link></li>
              <li><Link href="/consultancy" className="text-gray-300 hover:text-white transition-colors">Expert Consultation</Link></li>
              <li><Link href="/delegation" className="text-gray-300 hover:text-white transition-colors">Delegation Programs</Link></li>
              <li><Link href="/training" className="text-gray-300 hover:text-white transition-colors">Training & Workshops</Link></li>
              <li><Link href="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Destinations</h3>
            <ul className="space-y-3">
              <li><Link href="/delegation" className="text-gray-300 hover:text-white transition-colors">Malaysia</Link></li>
              <li><Link href="/delegation" className="text-gray-300 hover:text-white transition-colors">Russia</Link></li>
              <li><Link href="/delegation" className="text-gray-300 hover:text-white transition-colors">USA</Link></li>
              <li><Link href="/delegation" className="text-gray-300 hover:text-white transition-colors">Japan</Link></li>
              <li><Link href="/delegation" className="text-gray-300 hover:text-white transition-colors">UAE</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GTPC Global Trade Promotion Corporation. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center md:justify-end">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
              <Link href="/cookies-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies Policy</Link>
              <Link href="/cancellation-refund" className="text-gray-400 hover:text-white text-sm transition-colors">Cancellation & Refund</Link>
              <Link href="/shipping-delivery" className="text-gray-400 hover:text-white text-sm transition-colors">Service Delivery</Link>
              <Link href="/data-deletion" className="text-gray-400 hover:text-white text-sm transition-colors">Data Deletion</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
