import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Package, Clock, Globe, FileText, Download, Mail, Shield, Laptop } from "lucide-react";

export default function ShippingDelivery() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">Service Delivery Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>

          <Card className="p-8">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Global Trade Promotion Corporation (GTPC) provides professional consultancy, training, 
                    and business facilitation services. This policy outlines how we deliver our services 
                    to ensure clarity and satisfaction for all our clients.
                  </p>
                </section>

                {/* Digital Services */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">2. Digital Service Delivery</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Laptop className="w-5 h-5 text-primary" />
                        Online Training & Consultancy
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li>• <strong>Access credentials:</strong> Sent within 2 hours of payment confirmation</li>
                        <li>• <strong>Platform access:</strong> Available 24/7 through our learning portal</li>
                        <li>• <strong>Session links:</strong> Sent 24 hours before scheduled sessions</li>
                        <li>• <strong>Recordings:</strong> Available within 48 hours for 30 days</li>
                        <li>• <strong>Support materials:</strong> Instant download after enrollment</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Download className="w-5 h-5 text-primary" />
                        Digital Resources
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li>• <strong>E-books & Guides:</strong> Immediate download after purchase</li>
                        <li>• <strong>Templates:</strong> Accessible through member portal</li>
                        <li>• <strong>Reports:</strong> Delivered via email within committed timeframe</li>
                        <li>• <strong>Certificates:</strong> Generated instantly upon course completion</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Physical Materials */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">3. Physical Material Delivery</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Package className="w-5 h-5 text-primary" />
                        Training Materials & Certificates
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li>• <strong>Within Jaipur:</strong> 2-3 business days</li>
                        <li>• <strong>Within Rajasthan:</strong> 3-5 business days</li>
                        <li>• <strong>Rest of India:</strong> 5-7 business days</li>
                        <li>• <strong>International:</strong> 10-15 business days</li>
                        <li>• <strong>Express delivery:</strong> Available at additional cost</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Shipping Partners</h3>
                      <ul className="space-y-2">
                        <li>• Domestic: India Post, Blue Dart, DTDC</li>
                        <li>• International: DHL, FedEx, India Post</li>
                        <li>• Tracking information provided via email</li>
                        <li>• Signature required for high-value items</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Service Timelines */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">4. Service Delivery Timelines</h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-600" />
                        Consultancy Services
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li>• <strong>Initial consultation:</strong> Within 48 hours of booking</li>
                        <li>• <strong>Report delivery:</strong> 5-7 business days after consultation</li>
                        <li>• <strong>Follow-up support:</strong> 30 days included</li>
                        <li>• <strong>Implementation guidance:</strong> As per agreed timeline</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-green-600" />
                        Documentation Services
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li>• <strong>Export-Import documentation:</strong> 2-3 business days</li>
                        <li>• <strong>Market research reports:</strong> 7-10 business days</li>
                        <li>• <strong>Business plans:</strong> 10-15 business days</li>
                        <li>• <strong>Compliance certificates:</strong> As per regulatory timeline</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Delegation Programs */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">5. Delegation Program Delivery</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      International Business Delegations
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">Pre-Departure (30 days before):</p>
                        <ul className="space-y-1 ml-4">
                          <li>• Visa application assistance begins</li>
                          <li>• Travel itinerary shared</li>
                          <li>• Pre-departure briefing scheduled</li>
                          <li>• B2B meeting confirmations sent</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">During Delegation:</p>
                        <ul className="space-y-1 ml-4">
                          <li>• 24/7 support coordinator</li>
                          <li>• Daily updates to emergency contacts</li>
                          <li>• Real-time schedule management</li>
                          <li>• Immediate issue resolution</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Post-Delegation (within 7 days):</p>
                        <ul className="space-y-1 ml-4">
                          <li>• Follow-up report delivered</li>
                          <li>• B2B contact database shared</li>
                          <li>• Certificate of participation issued</li>
                          <li>• Feedback session conducted</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ISBBE Exhibitions */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">6. ISBBE Exhibition Services</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• <strong>Booth allocation:</strong> Within 7 days of payment</li>
                      <li>• <strong>Exhibition kit:</strong> Delivered 15 days before event</li>
                      <li>• <strong>Product shipping:</strong> Customs clearance support provided</li>
                      <li>• <strong>On-site support:</strong> Available throughout exhibition</li>
                      <li>• <strong>Lead reports:</strong> Within 48 hours of event conclusion</li>
                    </ul>
                  </div>
                </section>

                {/* Quality Assurance */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">7. Quality Assurance</h2>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-yellow-600" />
                      Our Service Commitments
                    </h3>
                    <ul className="space-y-2 ml-7">
                      <li>• All services delivered by certified professionals</li>
                      <li>• Quality checks at every milestone</li>
                      <li>• Client approval before final delivery</li>
                      <li>• Revision policy for documentation services</li>
                      <li>• Satisfaction guarantee on all services</li>
                    </ul>
                  </div>
                </section>

                {/* Delays and Issues */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">8. Handling Delays</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      In case of any delays in service delivery:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Immediate notification via email/SMS</li>
                      <li>• Revised timeline provided</li>
                      <li>• Compensation as per service agreement</li>
                      <li>• Priority handling for affected services</li>
                      <li>• Regular updates until resolution</li>
                    </ul>
                  </div>
                </section>

                {/* Contact for Delivery Issues */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">9. Delivery Support</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      For any delivery-related queries or issues:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>Email: delivery@gtpcglobal.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Package className="w-5 h-5 text-primary" />
                        <span>Track your order: www.gtpcglobal.com/track</span>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">Support Hours:</p>
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                        <p>Emergency Support: +91 141 4913077</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Terms */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">10. Terms and Conditions</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Delivery times are estimates and may vary</li>
                    <li>• Force majeure events may cause delays</li>
                    <li>• Client must provide accurate contact information</li>
                    <li>• Additional charges apply for re-delivery attempts</li>
                    <li>• International deliveries subject to customs clearance</li>
                    <li>• Digital services require stable internet connection</li>
                  </ul>
                </section>

                <section className="border-t pt-6">
                  <p className="text-sm text-gray-600">
                    This policy is subject to change without notice. By using our services, you agree to these 
                    delivery terms. For the most current version, please visit our website.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}