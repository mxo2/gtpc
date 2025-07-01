import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Globe, Menu } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState<string>("/gtpc-logo.png");
  const [companyInfo, setCompanyInfo] = useState({
    name: "Global Trade Promotion Corporation",
    email: "info@gtpcglobal.com",
    phone: "",
    address: "14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ"
  });

  useEffect(() => {
    // Load saved logo
    const savedLogo = localStorage.getItem("gtpc-logo");
    if (savedLogo) {
      setLogo(savedLogo);
    }

    // Load saved company info
    const savedInfo = localStorage.getItem("gtpc-company-info");
    if (savedInfo) {
      setCompanyInfo(JSON.parse(savedInfo));
    }

    // Listen for storage changes (when admin panel updates)
    const handleStorageChange = () => {
      const newLogo = localStorage.getItem("gtpc-logo");
      if (newLogo) setLogo(newLogo);
      
      const newInfo = localStorage.getItem("gtpc-company-info");
      if (newInfo) setCompanyInfo(JSON.parse(newInfo));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/delegation", label: "Delegation" },
    { href: "/training", label: "Training" },
    { href: "/consultancy", label: "Consultancy" },
    { href: "/isbbe", label: "ISBBE" },
    { href: "/membership", label: "Membership" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col items-center">
              <img 
                src={logo} 
                alt="GTPC Logo" 
                className="h-14 w-auto mb-1"
              />
              <div className="text-center">
                <p className="text-xs font-semibold text-white leading-tight">{companyInfo.name}</p>
              </div>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-white/90 hover:text-white ${
                  isActive(link.href) ? "font-bold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/membership">
              <Button className="hidden sm:inline-flex bg-accent text-primary hover:bg-accent/90">
                Join Now
              </Button>
            </Link>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg transition-colors ${
                        isActive(link.href)
                          ? "text-primary font-medium"
                          : "text-gray-700 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/membership" onClick={() => setIsOpen(false)}>
                    <Button className="w-full mt-4">Join Now</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
