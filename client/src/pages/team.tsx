import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, Globe } from "lucide-react";
import SeoHead from "@/components/seo-head";
import prSharmaImage from "@assets/IMG_0795-1_1753249706475.png";
import samPanwarImage from "@assets/IMG_2944 5_1753250276990.jpg";
import csBhatiaImage from "@assets/WhatsApp Image 2025-02-02 at 12.06.28 PM_1753250724034.jpeg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  location: string;
  country: string;
  bio: string;
  expertise: string[];
  email?: string;
  linkedin?: string;
  image?: string;
}

// Generate avatar background colors based on name
const getAvatarColor = (name: string) => {
  const colors = [
    'from-blue-400 to-blue-600',
    'from-purple-400 to-purple-600',
    'from-green-400 to-green-600',
    'from-pink-400 to-pink-600',
    'from-indigo-400 to-indigo-600',
    'from-teal-400 to-teal-600',
    'from-orange-400 to-orange-600',
    'from-red-400 to-red-600',
    'from-yellow-400 to-yellow-600',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "P.R. Sharma",
    role: "Director",
    location: "India",
    country: "India",
    bio: "Distinguished leader with 30+ years in government and trade promotion. Former CEO of Rajasthan Export Promotion Council, Joint Director Industries, and Advisor to Chairman MOEFCCPC. Currently serving as Director of GTPC, spearheading global expansion through international expos, delegations, and exporter training programs.",
    expertise: ["Export Promotion", "Government Relations", "Trade Policy", "Industrial Development"],
    email: "director@gtpcglobal.com",
    linkedin: "https://www.linkedin.com/in/p-r-sharma-global-trade-promotion-corporation-gtpc-2b929831/",
    image: prSharmaImage
  },
  {
    id: 2,
    name: "Sam Panwar",
    role: "Chief Operating Officer",
    location: "India",
    country: "India",
    bio: "Dynamic business strategist with expertise in international trade operations. Leading GTPC's operational excellence and digital transformation initiatives. Key contact for business inquiries and partnerships.",
    expertise: ["Operations Management", "Digital Strategy", "Business Development", "International Trade"],
    email: "sam@gtpcglobal.com",
    linkedin: "https://www.linkedin.com/in/sam-panwar-7524b014/",
    image: samPanwarImage
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Director of Operations - Americas",
    location: "New York",
    country: "USA",
    bio: "Expert in North and South American trade regulations. Manages partnerships across 15 countries.",
    expertise: ["Trade Compliance", "Market Analysis", "B2B Networking"],
    email: "sarah.j@gtpcglobal.com",
    linkedin: "https://linkedin.com/in/sarahjohnson"
  },
  {
    id: 4,
    name: "CS Bhatia",
    role: "Regional Director - Middle East",
    location: "Dubai",
    country: "UAE",
    bio: "Veteran business consultant with 40+ years of experience in government relations and Dubai business setup. Expert in facilitating Indian businesses in UAE market, organizing trade delegations, and providing comprehensive business establishment services.",
    expertise: ["Government Relations", "Dubai Business Setup", "Trade Organization", "Business Consulting"],
    email: "cs.bhatia@gtpcglobal.com",
    linkedin: "https://linkedin.com/in/csbhatia",
    image: csBhatiaImage
  },
  {
    id: 5,
    name: "Liu Wei",
    role: "Asia-Pacific Trade Specialist",
    location: "Singapore",
    country: "Singapore",
    bio: "Facilitates trade connections across APAC region. Expert in Asian market entry strategies.",
    expertise: ["Market Research", "Trade Finance", "Supply Chain"],
    email: "liu.w@gtpcglobal.com",
    linkedin: "https://linkedin.com/in/liuwei"
  },
  {
    id: 6,
    name: "Maria Silva",
    role: "Business Development Manager - Latin America",
    location: "São Paulo",
    country: "Brazil",
    bio: "Driving GTPC's expansion in Latin America. Specializes in Brazil-India trade corridors.",
    expertise: ["Business Development", "Portuguese Markets", "ISBBE Exhibitions"],
    email: "maria.s@gtpcglobal.com"
  },
  {
    id: 7,
    name: "John Smith",
    role: "European Trade Consultant",
    location: "London",
    country: "United Kingdom",
    bio: "20 years experience in EU-India trade. Expert in post-Brexit trade opportunities.",
    expertise: ["EU Regulations", "Trade Agreements", "Consultancy"],
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    id: 8,
    name: "Priya Sharma",
    role: "Head of Training & Development",
    location: "Mumbai",
    country: "India",
    bio: "Designs and delivers export-import training programs. Certified international trade educator.",
    expertise: ["Training Design", "Curriculum Development", "Online Education"],
    email: "priya.s@gtpcglobal.com"
  },
  {
    id: 9,
    name: "Carlos Rodriguez",
    role: "Trade Relations Officer - Chile",
    location: "Santiago",
    country: "Chile",
    bio: "Manages Pacific Alliance trade opportunities. Expert in mining and agriculture exports.",
    expertise: ["Pacific Alliance", "Mining Trade", "Agricultural Exports"],
    email: "carlos.r@gtpcglobal.com"
  },
  {
    id: 10,
    name: "Fatima Al-Rashid",
    role: "Kenya Operations Manager",
    location: "Nairobi",
    country: "Kenya",
    bio: "Leading ISBBE exhibitions in East Africa. Specialist in Africa-India trade promotion.",
    expertise: ["Event Management", "African Markets", "Trade Promotion"],
    linkedin: "https://linkedin.com/in/fatimaalrashid"
  },
  {
    id: 11,
    name: "Ivan Petrov",
    role: "Central Asia Trade Specialist",
    location: "Tashkent",
    country: "Uzbekistan",
    bio: "Facilitating trade through the Silk Road region. Expert in Central Asian market dynamics.",
    expertise: ["Silk Road Trade", "Logistics", "Cultural Mediation"],
    email: "ivan.p@gtpcglobal.com"
  }
];

// Group team members by region
const regions = [
  { name: "Asia", countries: ["India", "Singapore", "Uzbekistan"] },
  { name: "Americas", countries: ["USA", "Brazil", "Chile"] },
  { name: "Middle East & Africa", countries: ["UAE", "Kenya"] },
  { name: "Europe", countries: ["United Kingdom"] }
];

export default function Team() {
  const getRegionForCountry = (country: string) => {
    for (const region of regions) {
      if (region.countries.includes(country)) {
        return region.name;
      }
    }
    return "Other";
  };

  const groupedMembers = teamMembers.reduce((acc, member) => {
    const region = getRegionForCountry(member.country);
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
                Our Global Team
              </h1>
              <p className="text-xl mb-8 text-blue-100 animate__animated animate__fadeInUp animate__delay-1s">
                Expert professionals spanning 6 continents, united in our mission to connect global markets
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">10+</div>
                  <div className="text-sm text-blue-100 mt-1">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-sm text-blue-100 mt-1">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100+</div>
                  <div className="text-sm text-blue-100 mt-1">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-blue-100 mt-1">Global Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members by Region */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {Object.entries(groupedMembers).map(([region, members]) => (
              <div key={region} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {region}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member) => (
                    <Card key={member.id} className="hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        {/* Profile Header */}
                        <div className="flex items-start gap-4 mb-4">
                          {member.image ? (
                            <img 
                              src={member.image}
                              alt={member.name}
                              className="w-20 h-20 rounded-full object-cover"
                            />
                          ) : (
                            <img 
                              src={`https://randomuser.me/api/portraits/${
                                member.name.toLowerCase().includes('sarah') || 
                                member.name.toLowerCase().includes('maria') || 
                                member.name.toLowerCase().includes('priya') || 
                                member.name.toLowerCase().includes('fatima') 
                                  ? 'women' 
                                  : 'men'
                              }/${member.name.toLowerCase().includes('liu wei') ? '22' : member.id}.jpg`}
                              alt={member.name}
                              className="w-20 h-20 rounded-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback = document.createElement('div');
                                  fallback.className = `w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${getAvatarColor(member.name)} text-white text-2xl font-bold`;
                                  fallback.textContent = member.name.split(' ').map(n => n[0]).join('');
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          )}
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-sm text-gray-600 font-medium">{member.role}</p>
                            <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                              <MapPin className="w-3 h-3" />
                              <span>{member.location}, {member.country}</span>
                            </div>
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                          {member.bio}
                        </p>

                        {/* Expertise */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Contact Links */}
                        <div className="flex gap-3 pt-4 border-t">
                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              title={`Email ${member.name}`}
                            >
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-blue-600 transition-colors"
                              title={`${member.name} on LinkedIn`}
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          <div className="ml-auto">
                            <Globe className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Global Team</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for talented professionals who share our passion for connecting global markets.
              Be part of our mission to facilitate international trade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Career Opportunities
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}