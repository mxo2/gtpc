import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Laptop, Users, Award, Clock, PlayCircle, BookOpen } from "lucide-react";

export default function Training() {
  const trainingPrograms = [
    {
      category: "Online Courses",
      icon: Laptop,
      description: "Self-paced online training covering export-import fundamentals",
      courses: [
        {
          title: "Export-Import Fundamentals",
          duration: "8 hours",
          level: "Beginner",
          topics: ["Export procedures", "Import regulations", "Documentation basics", "Incoterms overview"]
        },
        {
          title: "Documentation & Compliance",
          duration: "12 hours", 
          level: "Intermediate",
          topics: ["Commercial invoices", "Shipping documents", "Customs procedures", "Compliance requirements"]
        },
        {
          title: "Market Research Strategies",
          duration: "6 hours",
          level: "Intermediate", 
          topics: ["Market analysis", "Competitor research", "Opportunity assessment", "Entry strategies"]
        },
        {
          title: "Digital Marketing for Exports",
          duration: "10 hours",
          level: "Advanced",
          topics: ["Online presence", "B2B platforms", "Social media marketing", "Lead generation"]
        }
      ]
    },
    {
      category: "Live Workshops",
      icon: Users,
      description: "Interactive sessions with industry experts and real-world case studies",
      courses: [
        {
          title: "Export Business Setup Workshop",
          duration: "2 days",
          level: "Beginner",
          topics: ["Business registration", "Licensing procedures", "Bank account setup", "Initial documentation"]
        },
        {
          title: "Advanced Trade Finance",
          duration: "1 day",
          level: "Advanced",
          topics: ["Letters of credit", "Trade financing options", "Risk management", "Payment terms"]
        },
        {
          title: "Negotiation Skills for Traders",
          duration: "1 day",
          level: "Intermediate",
          topics: ["Negotiation strategies", "Cultural considerations", "Contract terms", "Conflict resolution"]
        },
        {
          title: "Logistics & Supply Chain",
          duration: "1.5 days",
          level: "Intermediate",
          topics: ["Shipping modes", "Freight forwarding", "Warehouse management", "Cost optimization"]
        }
      ]
    },
    {
      category: "Certification Programs",
      icon: Award,
      description: "Comprehensive certification programs with industry recognition",
      courses: [
        {
          title: "Certified Export Professional (CEP)",
          duration: "3 months",
          level: "Professional",
          topics: ["Complete export process", "International marketing", "Trade regulations", "Business development"]
        },
        {
          title: "Import Specialist Certification",
          duration: "2 months", 
          level: "Professional",
          topics: ["Import procedures", "Customs clearance", "Duty calculations", "Compliance management"]
        },
        {
          title: "International Trade Consultant",
          duration: "4 months",
          level: "Expert",
          topics: ["Consultancy skills", "Market analysis", "Strategy development", "Client management"]
        }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Professional": return "bg-blue-100 text-blue-800";
      case "Expert": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Training & Workshops</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master export-import business with our comprehensive training programs designed 
            by industry experts and trade professionals.
          </p>
        </div>

        <div className="space-y-16">
          {trainingPrograms.map((program, programIndex) => (
            <div key={programIndex}>
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.category}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{program.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {program.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className="hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl">{course.title}</CardTitle>
                        <Badge className={getLevelColor(course.level)}>
                          {course.level}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2 mb-6">
                        {course.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-2">
                        <Button className="bg-primary hover:bg-primary/90">
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Enroll Now
                        </Button>
                        <Button variant="outline" className="text-sm">
                          <BookOpen className="w-4 h-4 mr-2" />
                          View Curriculum
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
              <p className="text-lg text-gray-600">Comprehensive learning experience with practical industry insights</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
                <p className="text-gray-600 text-sm">Learn from industry veterans with decades of experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Practical Content</h3>
                <p className="text-gray-600 text-sm">Real-world case studies and hands-on exercises</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Recognition</h3>
                <p className="text-gray-600 text-sm">Certificates recognized by major trade organizations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <PlayCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600 text-sm">Online, offline, and hybrid learning options available</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/membership">
                <Button size="lg" className="bg-accent text-gray-900 hover:bg-accent/90">
                  Get Free Training Access with Membership
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
