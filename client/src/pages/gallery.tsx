import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getQueryFn } from "@/lib/queryClient";
import { type Photo } from "@shared/schema";
import { Camera, Calendar, MapPin, Users, ArrowLeft, Globe } from "lucide-react";

// Import all Dubai photos
import dubaiPhoto1 from "@assets/WhatsApp Image 2025-02-02 at 12.37.50 PM_1753252049778.jpeg";
import dubaiPhoto2 from "@assets/WhatsApp Image 2025-02-02 at 12.40.02 PM (1)_1753252049787.jpeg";
import dubaiPhoto3 from "@assets/WhatsApp Image 2025-02-02 at 12.40.02 PM (2)_1753252049787.jpeg";
import dubaiPhoto4 from "@assets/WhatsApp Image 2025-02-02 at 12.40.02 PM_1753252049788.jpeg";
import dubaiPhoto5 from "@assets/WhatsApp Image 2025-02-02 at 12.40.03 PM_1753252049788.jpeg";

// Import all Malaysia photos
import malaysiaPhoto1 from "@assets/PHOTO-2025-07-16-19-39-53 2_1753252207939.jpg";
import malaysiaPhoto2 from "@assets/PHOTO-2025-07-16-19-52-52 4_1753252207943.jpg";
import malaysiaPhoto3 from "@assets/PHOTO-2025-07-16-19-53-25 2_1753252207943.jpg";
import malaysiaPhoto4 from "@assets/PHOTO-2025-07-16-19-53-25 3_1753252207944.jpg";
import malaysiaPhoto5 from "@assets/PHOTO-2025-07-16-19-52-52 3_1753252207944.jpg";

// Map of asset paths to imported images
const assetMap: Record<string, string> = {
  "/assets/WhatsApp Image 2025-02-02 at 12.37.50 PM_1753252049778.jpeg": dubaiPhoto1,
  "/assets/WhatsApp Image 2025-02-02 at 12.40.02 PM (1)_1753252049787.jpeg": dubaiPhoto2,
  "/assets/WhatsApp Image 2025-02-02 at 12.40.02 PM (2)_1753252049787.jpeg": dubaiPhoto3,
  "/assets/WhatsApp Image 2025-02-02 at 12.40.02 PM_1753252049788.jpeg": dubaiPhoto4,
  "/assets/WhatsApp Image 2025-02-02 at 12.40.03 PM_1753252049788.jpeg": dubaiPhoto5,
  "/assets/PHOTO-2025-07-16-19-39-53 2_1753252207939.jpg": malaysiaPhoto1,
  "/assets/PHOTO-2025-07-16-19-52-52 4_1753252207943.jpg": malaysiaPhoto2,
  "/assets/PHOTO-2025-07-16-19-53-25 2_1753252207943.jpg": malaysiaPhoto3,
  "/assets/PHOTO-2025-07-16-19-53-25 3_1753252207944.jpg": malaysiaPhoto4,
  "/assets/PHOTO-2025-07-16-19-52-52 3_1753252207944.jpg": malaysiaPhoto5,
};

export default function Gallery() {
  const { data: photos = [], isLoading } = useQuery<Photo[]>({
    queryKey: ["/api/photos/active"],
  });
  
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const photoCategories = [
    "B2B Meetings",
    "Delegation Programs", 
    "Training Sessions",
    "Corporate Events",
    "Trade Exhibitions",
    "Office Facilities"
  ];
  
  // Define countries and their related keywords for photo grouping
  const countryData = [
    { 
      name: "Dubai, UAE",
      keywords: ["dubai", "uae", "emirates"],
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Strategic partnerships and B2B events in the UAE"
    },
    {
      name: "Malaysia",
      keywords: ["malaysia", "kuala lumpur", "mitec"],
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "ISBBE exhibition planning and trade partnerships"
    },
    {
      name: "Japan",
      keywords: ["japan", "tokyo"],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Technology partnerships and innovation exchange"
    },
    {
      name: "Russia",
      keywords: ["russia", "moscow"],
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Energy sector collaborations and trade missions"
    },
    {
      name: "India",
      keywords: ["india", "jaipur", "delhi", "mumbai"],
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      description: "Headquarters and domestic trade activities"
    }
  ];
  
  // Filter photos by country
  const getPhotosForCountry = (country: typeof countryData[0]) => {
    return displayPhotos.filter(photo => {
      const photoText = `${photo.title} ${photo.description}`.toLowerCase();
      return country.keywords.some(keyword => photoText.includes(keyword));
    });
  };

  // Sample photos for demonstration when database is empty
  const samplePhotos: Photo[] = [
    {
      id: 1,
      title: "Malaysia Business Delegation 2024",
      description: "Successful B2B meetings with Malaysian importers in Kuala Lumpur",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Delegation Programs",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-03-15")
    },
    {
      id: 2,
      title: "Export Training Workshop",
      description: "Intensive 3-hour export-import masterclass with industry experts",
      imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Training Sessions",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-03-10")
    },
    {
      id: 3,
      title: "International Trade Exhibition",
      description: "GTPC pavilion at the Global Trade Expo showcasing member companies",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Trade Exhibitions",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-02-28")
    },
    {
      id: 4,
      title: "UAE Business Roundtable",
      description: "Strategic discussions with UAE Chamber of Commerce officials",
      imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "B2B Meetings",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-02-20")
    },
    {
      id: 5,
      title: "Japan Technology Partnership",
      description: "Meeting with Japanese technology companies for India-Japan trade collaboration",
      imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Delegation Programs",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-02-15")
    },
    {
      id: 6,
      title: "GTPC Head Office - Jaipur",
      description: "Our modern office facilities in Kedia Business Centre, Jaipur",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Office Facilities",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-01-30")
    },
    {
      id: 7,
      title: "Russia Trade Mission",
      description: "Exploring opportunities in Russian energy and technology sectors",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Delegation Programs",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-01-25")
    },
    {
      id: 8,
      title: "Digital Marketing Training",
      description: "Online export marketing strategies workshop for SMEs",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Training Sessions",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-01-20")
    },
    {
      id: 9,
      title: "Annual Members Meeting",
      description: "GTPC's annual gathering with premium members and partners",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      category: "Corporate Events",
      uploadedBy: "GTPC Team",
      isActive: 1,
      createdAt: new Date("2024-01-15")
    }
  ];

  const displayPhotos = photos && photos.length > 0 ? photos : samplePhotos;

  const getCategoryColor = (category: string) => {
    const colors = {
      "B2B Meetings": "bg-blue-100 text-blue-800",
      "Delegation Programs": "bg-green-100 text-green-800",
      "Training Sessions": "bg-purple-100 text-purple-800",
      "Corporate Events": "bg-orange-100 text-orange-800",
      "Trade Exhibitions": "bg-red-100 text-red-800",
      "Office Facilities": "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (isLoading) {
    return (
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h1>
            <p className="text-lg text-gray-600">Loading photos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our journey through international trade missions, training programs, 
            and successful business partnerships worldwide.
          </p>
        </div>

        {!selectedCountry ? (
          <>
            {/* Country Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Select a Country</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countryData.map((country) => {
                  const countryPhotos = getPhotosForCountry(country);
                  return (
                    <Card 
                      key={country.name} 
                      className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                      onClick={() => setSelectedCountry(country.name)}
                    >
                      <div className="relative overflow-hidden h-48">
                        <img 
                          src={country.image} 
                          alt={country.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-6 text-white w-full">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-2xl font-bold">{country.name}</h3>
                              <Badge variant="secondary" className="bg-white/20 text-white">
                                {countryPhotos.length} photos
                              </Badge>
                            </div>
                            <p className="text-sm text-white/90">{country.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* All Photos Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All Photos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {displayPhotos.map((photo, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={assetMap[photo.imageUrl] || photo.imageUrl} 
                        alt={photo.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(photo.category)}>
                          {photo.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center text-sm mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            {new Date(photo.createdAt).toLocaleDateString()}
                          </div>
                          {photo.uploadedBy && (
                            <div className="flex items-center text-sm">
                              <Camera className="w-4 h-4 mr-2" />
                              {photo.uploadedBy}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{photo.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Country Photos Section */}
            <div className="mb-8">
              <Button 
                variant="outline" 
                onClick={() => setSelectedCountry(null)}
                className="mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Countries
              </Button>
              
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">{selectedCountry} Gallery</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getPhotosForCountry(countryData.find(c => c.name === selectedCountry)!).map((photo, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={assetMap[photo.imageUrl] || photo.imageUrl} 
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(photo.category)}>
                        {photo.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center text-sm mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(photo.createdAt).toLocaleDateString()}
                        </div>
                        {photo.uploadedBy && (
                          <div className="flex items-center text-sm">
                            <Camera className="w-4 h-4 mr-2" />
                            {photo.uploadedBy}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{photo.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{photo.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Keep existing statistics section */}

        {/* Statistics */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-lg text-gray-600">Documenting our international trade activities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Countries Visited</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">B2B Meetings Facilitated</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Memorable Moments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Successful Delegations</p>
            </div>
          </div>
        </div>

        {/* Note about photo uploads */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Photo Upload Panel</h3>
            <p className="text-gray-600">
              Administrative panel for uploading and managing gallery photos is available 
              for authorized personnel. Contact us for access to the content management system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}