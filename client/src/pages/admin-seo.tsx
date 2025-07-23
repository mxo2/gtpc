import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft, Save, Search } from "lucide-react";
import { Link } from "wouter";
import { seoConfig } from "@/lib/seo-config";

export default function AdminSEO() {
  const [seoData, setSeoData] = useState<typeof seoConfig>({});
  const [selectedPage, setSelectedPage] = useState<string>('/');

  useEffect(() => {
    // Load SEO data from localStorage
    const savedSEO = localStorage.getItem('gtpc-seo-config');
    if (savedSEO) {
      setSeoData(JSON.parse(savedSEO));
    } else {
      setSeoData(seoConfig);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('gtpc-seo-config', JSON.stringify(seoData));
    toast({
      title: "SEO Configuration Saved",
      description: "All SEO settings have been updated successfully.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setSeoData(prev => ({
      ...prev,
      [selectedPage]: {
        ...prev[selectedPage],
        [field]: value
      }
    }));
  };

  const pages = [
    { path: '/', name: 'Home Page' },
    { path: '/services', name: 'Services' },
    { path: '/delegation', name: 'Delegation Programs' },
    { path: '/training', name: 'Training & Workshops' },
    { path: '/consultancy', name: 'Consultancy' },
    { path: '/isbbe', name: 'ISBBE Exhibitions' },
    { path: '/membership', name: 'Membership' },
    { path: '/contact', name: 'Contact' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/privacy-policy', name: 'Privacy Policy' },
    { path: '/terms-conditions', name: 'Terms & Conditions' },
    { path: '/cookies-policy', name: 'Cookies Policy' },
    { path: '/cancellation-refund', name: 'Cancellation & Refund' },
    { path: '/shipping-delivery', name: 'Service Delivery' },
    { path: '/data-deletion', name: 'Data Deletion' },
  ];

  const currentPageData = seoData[selectedPage] || {
    title: '',
    description: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/admin">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Admin
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">SEO Management</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Page Selection */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Select Page</CardTitle>
                <CardDescription>Choose a page to edit its SEO settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pages.map((page) => (
                    <Button
                      key={page.path}
                      variant={selectedPage === page.path ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedPage(page.path)}
                    >
                      {page.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SEO Editor */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  SEO Settings for: {pages.find(p => p.path === selectedPage)?.name}
                </CardTitle>
                <CardDescription>
                  Optimize this page for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Page Title (60-70 characters)</Label>
                  <Input
                    id="title"
                    value={currentPageData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter page title"
                    maxLength={70}
                  />
                  <p className="text-sm text-gray-500">
                    {currentPageData.title.length}/70 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Meta Description (150-160 characters)</Label>
                  <Textarea
                    id="description"
                    value={currentPageData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter meta description"
                    maxLength={160}
                    rows={3}
                  />
                  <p className="text-sm text-gray-500">
                    {currentPageData.description.length}/160 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                  <Input
                    id="keywords"
                    value={currentPageData.keywords || ''}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Social Media (Open Graph)</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ogTitle">OG Title (Optional)</Label>
                      <Input
                        id="ogTitle"
                        value={currentPageData.ogTitle || ''}
                        onChange={(e) => handleInputChange('ogTitle', e.target.value)}
                        placeholder="Leave empty to use page title"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ogDescription">OG Description (Optional)</Label>
                      <Textarea
                        id="ogDescription"
                        value={currentPageData.ogDescription || ''}
                        onChange={(e) => handleInputChange('ogDescription', e.target.value)}
                        placeholder="Leave empty to use meta description"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                    <Save className="w-4 h-4 mr-2" />
                    Save All SEO Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SEO Tips */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>SEO Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Keep titles between 50-60 characters for optimal display in search results</li>
                <li>• Write unique, compelling meta descriptions that include your target keywords</li>
                <li>• Use relevant keywords naturally - avoid keyword stuffing</li>
                <li>• Make sure each page has a unique title and description</li>
                <li>• Include your brand name in titles for better recognition</li>
                <li>• Use action-oriented language in descriptions to improve click-through rates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}