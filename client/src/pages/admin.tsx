import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image, Settings, FileText, Save, Trash2, X, Check, Edit2, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { type Photo, type InsertPhoto } from "@shared/schema";

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
  
  // Photo Gallery Management States
  const [selectedCategory, setSelectedCategory] = useState<string>("B2B Meetings");
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoDescription, setPhotoDescription] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [editingPhoto, setEditingPhoto] = useState<Photo | null>(null);
  
  const photoCategories = [
    "B2B Meetings",
    "Delegation Programs", 
    "Training Sessions",
    "Corporate Events",
    "Trade Exhibitions",
    "Office Facilities"
  ];
  
  // Query to fetch all photos
  const { data: photos = [], isLoading: photosLoading } = useQuery<Photo[]>({
    queryKey: ["/api/photos"],
    enabled: isAuthenticated,
  });
  
  // Mutation to create photo
  const createPhotoMutation = useMutation({
    mutationFn: async (data: InsertPhoto) => {
      return apiRequest("POST", "/api/photos", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/photos"] });
      queryClient.invalidateQueries({ queryKey: ["/api/photos/active"] });
      toast({
        title: "Photo uploaded successfully",
        description: "The photo has been added to the gallery",
      });
      resetPhotoForm();
    },
    onError: () => {
      toast({
        title: "Upload failed",
        description: "Failed to upload photo. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  // Mutation to delete photo
  const deletePhotoMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/photos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/photos"] });
      queryClient.invalidateQueries({ queryKey: ["/api/photos/active"] });
      toast({
        title: "Photo deleted",
        description: "The photo has been removed from the gallery",
      });
    },
  });
  
  // Mutation to update photo
  const updatePhotoMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<Photo> }) => {
      return apiRequest("PATCH", `/api/photos/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/photos"] });
      queryClient.invalidateQueries({ queryKey: ["/api/photos/active"] });
      toast({
        title: "Photo updated",
        description: "The photo details have been updated",
      });
      setEditingPhoto(null);
    },
  });

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
  
  // Reset photo form
  const resetPhotoForm = () => {
    setPhotoTitle("");
    setPhotoDescription("");
    setPhotoFile(null);
    setPhotoPreview("");
    setEditingPhoto(null);
  };
  
  // Handle photo file selection
  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Upload photo
  const handlePhotoUpload = async () => {
    if (!photoFile || !photoTitle || !selectedCategory) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would upload the file to a server/CDN
    // For now, we'll use a placeholder URL
    const photoData: InsertPhoto = {
      title: photoTitle,
      description: photoDescription,
      imageUrl: photoPreview, // In production, this would be the uploaded file URL
      category: selectedCategory,
      uploadedBy: "Admin",
    };
    
    createPhotoMutation.mutate(photoData);
  };
  
  // Toggle photo active status
  const togglePhotoStatus = (photo: Photo) => {
    updatePhotoMutation.mutate({
      id: photo.id,
      data: { isActive: photo.isActive === 1 ? 0 : 1 },
    });
  };
  
  // Filter photos by category
  const photosByCategory = photoCategories.reduce((acc, category) => {
    acc[category] = photos.filter((photo: Photo) => photo.category === category);
    return acc;
  }, {} as Record<string, Photo[]>);

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
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Panel</h1>
            <p className="text-lg text-gray-600">Manage your website content</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/admin/seo'}
            >
              <Search className="w-4 h-4 mr-2" />
              SEO Management
            </Button>
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

        <Tabs defaultValue="logo" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="logo">Logo & Branding</TabsTrigger>
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="photos">Photo Gallery</TabsTrigger>
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

          <TabsContent value="photos">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Photo Gallery Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload New Photo Section */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4">Upload New Photo</h3>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="photo-category">Category *</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger id="photo-category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {photoCategories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="photo-title">Title *</Label>
                      <Input
                        id="photo-title"
                        value={photoTitle}
                        onChange={(e) => setPhotoTitle(e.target.value)}
                        placeholder="Enter photo title"
                      />
                    </div>

                    <div>
                      <Label htmlFor="photo-description">Description</Label>
                      <Textarea
                        id="photo-description"
                        value={photoDescription}
                        onChange={(e) => setPhotoDescription(e.target.value)}
                        placeholder="Enter photo description (optional)"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="photo-file">Photo File *</Label>
                      <Input
                        id="photo-file"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoFileChange}
                      />
                      {photoPreview && (
                        <div className="mt-2">
                          <img
                            src={photoPreview}
                            alt="Preview"
                            className="h-32 w-auto rounded-lg"
                          />
                        </div>
                      )}
                    </div>

                    <Button 
                      onClick={handlePhotoUpload}
                      disabled={!photoFile || !photoTitle || createPhotoMutation.isPending}
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {createPhotoMutation.isPending ? "Uploading..." : "Upload Photo"}
                    </Button>
                  </div>
                </div>

                {/* Photo Gallery by Category */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Manage Photos</h3>
                  {photosLoading ? (
                    <div className="text-center py-8">Loading photos...</div>
                  ) : (
                    <div className="space-y-6">
                      {photoCategories.map((category) => {
                        const categoryPhotos = photosByCategory[category] || [];
                        return (
                          <div key={category} className="border rounded-lg p-4">
                            <h4 className="font-medium mb-3 flex items-center justify-between">
                              <span>{category}</span>
                              <Badge variant="secondary">{categoryPhotos.length} photos</Badge>
                            </h4>
                            {categoryPhotos.length === 0 ? (
                              <p className="text-gray-500 text-sm">No photos in this category yet.</p>
                            ) : (
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {categoryPhotos.map((photo) => (
                                  <div key={photo.id} className="relative group">
                                    <img
                                      src={photo.imageUrl}
                                      alt={photo.title}
                                      className="w-full h-32 object-cover rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                                      <Button
                                        size="sm"
                                        variant={photo.isActive === 1 ? "default" : "secondary"}
                                        onClick={() => togglePhotoStatus(photo)}
                                      >
                                        {photo.isActive === 1 ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={() => deletePhotoMutation.mutate(photo.id)}
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </Button>
                                    </div>
                                    <div className="mt-2">
                                      <p className="text-sm font-medium truncate">{photo.title}</p>
                                      {photo.description && (
                                        <p className="text-xs text-gray-500 truncate">{photo.description}</p>
                                      )}
                                      <div className="flex items-center justify-between mt-1">
                                        <Badge variant={photo.isActive === 1 ? "default" : "secondary"} className="text-xs">
                                          {photo.isActive === 1 ? "Active" : "Inactive"}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}