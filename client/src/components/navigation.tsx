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
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col items-center">
              <img 
                src={logo} 
                alt="GTPC Logo" 
                className="h-14 w-auto mb-1"
              />
              <div className="text-center">
                <p className="text-xs font-semibold text-primary leading-tight">{companyInfo.name}</p>
              </div>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive(link.href)
                    ? "text-primary border-b-2 border-accent pb-1"
                    : "text-gray-700 hover:text-primary hover:border-b-2 hover:border-accent hover:pb-1"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://my.gtpcglobal.com/signup" target="_blank" rel="noopener noreferrer">
              <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
                Join Now
              </Button>
            </a>
            
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
                  <a href="https://my.gtpcglobal.com/signup" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    <Button className="w-full mt-4">Join Now</Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
