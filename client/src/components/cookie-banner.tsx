import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("gtpc-cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("gtpc-cookie-consent", "all");
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptEssentialOnly = () => {
    localStorage.setItem("gtpc-cookie-consent", "essential");
    setShowBanner(false);
    setShowPreferences(false);
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closeBanner = () => {
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm shadow-lg border border-gray-200">
        <CardContent className="p-6">
          {!showPreferences ? (
            <div className="flex items-start gap-4">
              <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">We use cookies to enhance your experience</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We use essential cookies to make our website work and analytics cookies to understand how you use our site. 
                  This helps us improve our services for you.{" "}
                  <Link href="/cookies-policy" className="text-primary hover:underline">
                    Learn more about our cookie policy
                  </Link>
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={acceptAllCookies} className="bg-primary hover:bg-primary/90">
                    Accept All
                  </Button>
                  <Button onClick={acceptEssentialOnly} variant="outline">
                    Essential Only
                  </Button>
                  <Button onClick={openPreferences} variant="ghost" className="text-primary">
                    <Settings className="w-4 h-4 mr-2" />
                    Preferences
                  </Button>
                </div>
              </div>
              <Button
                onClick={closeBanner}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Cookie Preferences</h3>
                <Button
                  onClick={() => setShowPreferences(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for basic website functionality</p>
                  </div>
                  <div className="text-sm font-medium text-green-600">Always Active</div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how you use our website</p>
                  </div>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded text-primary" />
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">Used to deliver relevant content and track campaigns</p>
                  </div>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded text-primary" />
                  </label>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button onClick={acceptAllCookies} className="bg-primary hover:bg-primary/90">
                  Accept Selected
                </Button>
                <Button onClick={acceptEssentialOnly} variant="outline">
                  Essential Only
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}