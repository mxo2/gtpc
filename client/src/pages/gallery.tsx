import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getQueryFn } from "@/lib/queryClient";
import { type Photo } from "@shared/schema";
import { Camera, Calendar, MapPin, Users } from "lucide-react";

export default function Gallery() {
  const { data: photos = [], isLoading } = useQuery<Photo[]>({
    queryKey: ["/api/photos/active"],
  });

  const photoCategories = [
    "B2B Meetings",
    "Delegation Programs", 
    "Training Sessions",
    "Corporate Events",
    "Trade Exhibitions",
    "Office Facilities"
  ];

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

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" className="bg-primary text-white">
              All Categories
            </Button>
            {photoCategories.map((category) => (
              <Button key={category} variant="outline">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayPhotos.map((photo, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.imageUrl} 
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