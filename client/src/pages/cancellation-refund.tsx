import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, Clock, CreditCard, FileText, Mail, Phone } from "lucide-react";

export default function CancellationRefund() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-2">Cancellation and Refund Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>

          <Card className="p-8">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">1. Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Global Trade Promotion Corporation (GTPC), we strive to provide exceptional consultancy, 
                    training, and delegation services. This policy outlines the terms and conditions for 
                    cancellations and refunds for all our services.
                  </p>
                </section>

                {/* Training Programs */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">2. Training Programs</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        3-Hour Premium Training Sessions (₹5,999)
                      </h3>
                      <ul className="space-y-2 ml-7">
                        <li>• <strong>More than 48 hours before session:</strong> 100% refund</li>
                        <li>• <strong>24-48 hours before session:</strong> 50% refund</li>
                        <li>• <strong>Less than 24 hours:</strong> No refund</li>
                        <li>• <strong>Rescheduling:</strong> Free rescheduling up to 24 hours before the session</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Online Training Courses</h3>
                      <ul className="space-y-2">
                        <li>• <strong>Within 7 days of purchase:</strong> 100% refund if less than 20% of content accessed</li>
                        <li>• <strong>After 7 days:</strong> No refund</li>
                        <li>• <strong>Technical issues:</strong> Full refund if unable to access due to our technical problems</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Consultancy Services */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">3. Consultancy Services</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      1-Hour Consultancy Sessions (₹2,500)
                    </h3>
                    <ul className="space-y-2 ml-7">
                      <li>• <strong>More than 24 hours before session:</strong> 100% refund</li>
                      <li>• <strong>12-24 hours before session:</strong> 50% refund</li>
                      <li>• <strong>Less than 12 hours:</strong> No refund</li>
                      <li>• <strong>No-show by client:</strong> No refund</li>
                      <li>• <strong>Consultant unavailable:</strong> 100% refund or free rescheduling</li>
                    </ul>
                  </div>
                </section>

                {/* Membership Plans */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">4. Membership Plans</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Annual Membership (₹2,999/year)</h3>
                    <ul className="space-y-2">
                      <li>• <strong>Within 14 days:</strong> 100% refund if no services utilized</li>
                      <li>• <strong>After 14 days:</strong> Pro-rated refund minus services used</li>
                      <li>• <strong>After 30 days:</strong> No refund</li>
                      <li>• <strong>Membership benefits used:</strong> Deducted from refund amount</li>
                    </ul>
                  </div>
                </section>

                {/* Delegation Programs */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">5. Business Delegation Programs</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• <strong>More than 30 days before departure:</strong> 100% refund minus ₹5,000 processing fee</li>
                      <li>• <strong>15-30 days before departure:</strong> 50% refund</li>
                      <li>• <strong>7-14 days before departure:</strong> 25% refund</li>
                      <li>• <strong>Less than 7 days:</strong> No refund</li>
                      <li>• <strong>Visa rejection:</strong> 100% refund minus visa fees and ₹2,000 processing charge</li>
                      <li>• <strong>Force majeure:</strong> Full refund or transfer to next delegation</li>
                    </ul>
                  </div>
                </section>

                {/* ISBBE Exhibitions */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">6. ISBBE Exhibition Participation</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li>• <strong>More than 45 days before event:</strong> 80% refund</li>
                      <li>• <strong>30-45 days before event:</strong> 50% refund</li>
                      <li>• <strong>15-30 days before event:</strong> 25% refund</li>
                      <li>• <strong>Less than 15 days:</strong> No refund</li>
                      <li>• <strong>Booth fees:</strong> Non-refundable after allocation</li>
                    </ul>
                  </div>
                </section>

                {/* Refund Process */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">7. Refund Process</h2>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        How to Request a Refund
                      </h3>
                      <ol className="space-y-2 ml-7 list-decimal">
                        <li>Email your refund request to info@gtpcglobal.com</li>
                        <li>Include your booking/order number and reason for cancellation</li>
                        <li>Attach relevant documentation if applicable</li>
                        <li>Wait for confirmation email (within 24-48 hours)</li>
                      </ol>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">Refund Timeline</h3>
                      <ul className="space-y-2">
                        <li>• <strong>Bank Transfer:</strong> 7-10 business days</li>
                        <li>• <strong>Credit/Debit Card:</strong> 5-7 business days</li>
                        <li>• <strong>UPI:</strong> 2-3 business days</li>
                        <li>• <strong>Processing time:</strong> Additional 2-3 days for approval</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Special Circumstances */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">8. Special Circumstances</h2>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      Exceptions and Special Cases
                    </h3>
                    <ul className="space-y-2 ml-7">
                      <li>• <strong>Medical emergencies:</strong> Full refund with valid medical certificate</li>
                      <li>• <strong>Government restrictions:</strong> Full refund or service credit</li>
                      <li>• <strong>Natural disasters:</strong> Case-by-case basis</li>
                      <li>• <strong>Death in immediate family:</strong> Full refund with documentation</li>
                      <li>• <strong>GTPC service failure:</strong> Full refund plus 20% service credit</li>
                    </ul>
                  </div>
                </section>

                {/* Terms and Conditions */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">9. Terms and Conditions</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All refund requests must be submitted in writing</li>
                    <li>• Refunds are processed to the original payment method only</li>
                    <li>• Partial services rendered will be deducted from refund amount</li>
                    <li>• Service credits are valid for 1 year from issue date</li>
                    <li>• Group bookings may have different cancellation terms</li>
                    <li>• Corporate packages follow separate agreement terms</li>
                  </ul>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Us</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      For cancellation and refund queries, please contact:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>Email: info@gtpcglobal.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>Phone: +91 141 4913077</span>
                      </div>
                      <div className="mt-4">
                        <p className="font-semibold">Office Hours:</p>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p>Saturday: 9:00 AM - 1:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t pt-6">
                  <p className="text-sm text-gray-600">
                    This policy is subject to change without notice. Please check this page regularly for updates. 
                    By using our services, you agree to these cancellation and refund terms.
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