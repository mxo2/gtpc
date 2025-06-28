import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image, Settings, FileText, Save, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState("Global Trade Promotion Corporation");
  const [contactEmail, setContactEmail] = useState("info@gtpcglobal.com");
  const [contactPhone, setContactPhone] = useState("");
  const [contactAddress, setContactAddress] = useState("14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ");

  // Simple authentication
  const handleLogin = () => {
    if (password === "gtpc@admin2025") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  // Handle logo upload
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle gallery images
  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setGalleryImages([...galleryImages, ...files]);
    
    // Create previews
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGalleryPreviews(prev => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Save logo
  const saveLogo = async () => {
    if (!logoFile) {
      toast({
        title: "No logo selected",
        description: "Please select a logo file first",
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would upload to a server
    // For now, we'll store in localStorage as base64
    const reader = new FileReader();
    reader.onload = (e) => {
      localStorage.setItem("gtpc-logo", e.target?.result as string);
      toast({
        title: "Logo Updated",
        description: "Your logo has been successfully updated",
      });
    };
    reader.readAsDataURL(logoFile);
  };

  // Save company info
  const saveCompanyInfo = () => {
    const companyInfo = {
      name: companyName,
      email: contactEmail,
      phone: contactPhone,
      address: contactAddress,
    };
    localStorage.setItem("gtpc-company-info", JSON.stringify(companyInfo));
    toast({
      title: "Company Info Updated",
      description: "Your company information has been saved",
    });
  };

  // Load saved data
  useEffect(() => {
    const savedLogo = localStorage.getItem("gtpc-logo");
    if (savedLogo) {
      setLogoPreview(savedLogo);
    }

    const savedInfo = localStorage.getItem("gtpc-company-info");
    if (savedInfo) {
      const info = JSON.parse(savedInfo);
      setCompanyName(info.name || "Global Trade Promotion Corporation");
      setContactEmail(info.email || "info@gtpcglobal.com");
      setContactPhone(info.phone || "");
      setContactAddress(info.address || "14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ");
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                />
              </div>
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Contact administrator for access
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-lg text-gray-600">Manage your website content</p>
        </div>

        <Tabs defaultValue="logo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="logo">Logo & Branding</TabsTrigger>
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="logo">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Logo Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="logo-upload">Upload New Logo</Label>
                  <Input
                    id="logo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Recommended: PNG or JPG, 200x100px minimum
                  </p>
                </div>

                {logoPreview && (
                  <div className="space-y-2">
                    <Label>Logo Preview</Label>
                    <div className="bg-white p-4 rounded-lg border">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="h-20 w-auto mx-auto"
                      />
                    </div>
                  </div>
                )}

                <Button onClick={saveLogo} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Logo
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Enter contact email"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input
                    id="contact-phone"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Enter contact phone"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-address">Address</Label>
                  <Input
                    id="contact-address"
                    value={contactAddress}
                    onChange={(e) => setContactAddress(e.target.value)}
                    placeholder="Enter company address"
                  />
                </div>

                <Button onClick={saveCompanyInfo} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Company Info
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Gallery Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="gallery-upload">Upload Gallery Images</Label>
                  <Input
                    id="gallery-upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryUpload}
                    className="mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Select multiple images for your gallery
                  </p>
                </div>

                {galleryPreviews.length > 0 && (
                  <div>
                    <Label>Gallery Preview</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                      {galleryPreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <Button
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => {
                              setGalleryPreviews(prev => prev.filter((_, i) => i !== index));
                              setGalleryImages(prev => prev.filter((_, i) => i !== index));
                            }}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  onClick={() => {
                    // In real implementation, this would upload to server
                    localStorage.setItem("gtpc-gallery", JSON.stringify(galleryPreviews));
                    toast({
                      title: "Gallery Updated",
                      description: "Gallery images have been saved",
                    });
                  }} 
                  className="w-full"
                  disabled={galleryPreviews.length === 0}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Gallery
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => {
              setIsAuthenticated(false);
              setPassword("");
              toast({
                title: "Logged Out",
                description: "You have been logged out successfully",
              });
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}