import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Last updated: December 28, 2024</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              By accessing and using the services of Global Trade Promotion Corporation ("GTPC", "we", "us", or "our"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Company Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Global Trade Promotion Corporation</strong></p>
              <p>Registered Address: 14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ, India</p>
              <p>Email: info@gtpcglobal.com</p>
              <p>Business: Export-Import Consultancy, Training, and Business Delegation Services</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Services Provided</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Our Services Include:</h3>
            <ul>
              <li><strong>Export-Import Consultancy:</strong> Professional guidance on international trade (₹2,500 per 1-hour session)</li>
              <li><strong>Training Programs:</strong> Comprehensive 3-hour training workshops (₹5,999 per session)</li>
              <li><strong>Business Delegations:</strong> Organized business trips to Malaysia, Russia, USA, Japan, UAE</li>
              <li><strong>Membership Services:</strong> Annual membership with exclusive benefits (₹2,999/year)</li>
              <li><strong>B2B Meetings:</strong> Facilitated business networking and partnerships</li>
              <li><strong>Trade Documentation:</strong> Assistance with export-import procedures</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Payment Terms</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Payment Methods</h3>
            <p className="mb-4">Currently, we accept payments via bank transfer to:</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p><strong>Account Name:</strong> Global Trade Promotion Corporation</p>
              <p><strong>Account Number:</strong> 678605600736</p>
              <p><strong>IFSC Code:</strong> ICICI0006786</p>
              <p><strong>Branch:</strong> Tilak Marg Branch</p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Payment Policies</h3>
            <ul>
              <li>All payments must be made in advance for training and consultancy services</li>
              <li>Membership fees are annual and non-refundable after 7 days</li>
              <li>Bank transfer charges are to be borne by the client</li>
              <li>Payment confirmation must be shared within 24 hours of transfer</li>
              <li>Services will be activated only after payment verification</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Booking and Cancellation Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Training Sessions</h3>
            <ul className="mb-4">
              <li>Bookings must be made at least 48 hours in advance</li>
              <li>Cancellations allowed up to 24 hours before the session</li>
              <li>Rescheduling is permitted once without additional charges</li>
              <li>No-shows will forfeit the entire session fee</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Consultancy Appointments</h3>
            <ul className="mb-4">
              <li>Appointments can be scheduled with minimum 24 hours notice</li>
              <li>Cancellations allowed up to 12 hours before the appointment</li>
              <li>Late arrivals may result in reduced session time</li>
              <li>Virtual consultations available upon request</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Delegation Programs</h3>
            <ul>
              <li>Advance booking required (minimum 30 days for international programs)</li>
              <li>Cancellation charges apply as per travel policies</li>
              <li>Visa assistance provided but approval not guaranteed</li>
              <li>Travel insurance recommended but not mandatory</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ul>
              <li>All training materials and content are proprietary to GTPC</li>
              <li>Unauthorized reproduction or distribution is prohibited</li>
              <li>Participants may use knowledge for their business purposes</li>
              <li>Recording of sessions requires prior written permission</li>
              <li>Our logo, brand name, and materials are protected by copyright</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">
              GTPC provides consultancy and training services to the best of our ability. However:
            </p>
            <ul>
              <li>We do not guarantee specific business outcomes or profits</li>
              <li>Clients are responsible for implementing advice appropriately</li>
              <li>We are not liable for losses arising from business decisions</li>
              <li>Maximum liability is limited to the service fees paid</li>
              <li>Force majeure events release us from contractual obligations</li>
              <li>We maintain professional indemnity insurance for our services</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Confidentiality</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ul>
              <li>All client information is treated as strictly confidential</li>
              <li>Business details shared during consultancy remain private</li>
              <li>We may use anonymized case studies for marketing purposes</li>
              <li>Clients must not disclose our proprietary methodologies</li>
              <li>Mutual non-disclosure agreements available upon request</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">User Obligations</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Clients Must:</h3>
            <ul>
              <li>Provide accurate information during registration and booking</li>
              <li>Attend sessions punctually and prepared</li>
              <li>Respect other participants and our staff</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any unlawful or harmful activities</li>
              <li>Maintain professional conduct during all interactions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Termination</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">We reserve the right to terminate services if:</p>
            <ul>
              <li>Clients violate these terms and conditions</li>
              <li>Payments are not made as agreed</li>
              <li>Inappropriate behavior disrupts our services</li>
              <li>False information is provided during registration</li>
              <li>Legal compliance issues arise</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ul>
              <li>Any disputes will be resolved through amicable discussion first</li>
              <li>Mediation services may be engaged if direct resolution fails</li>
              <li>Arbitration will be conducted in Jaipur, Rajasthan, India</li>
              <li>Indian laws will govern all disputes and interpretations</li>
              <li>Courts in Jaipur will have exclusive jurisdiction</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              These Terms and Conditions are governed by the laws of India. Any legal proceedings related to these terms will be subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">For questions about these Terms and Conditions:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Global Trade Promotion Corporation</strong></p>
              <p>Email: <a href="mailto:info@gtpcglobal.com" className="text-primary hover:underline">info@gtpcglobal.com</a></p>
              <p>Address: 14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ, India</p>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              These terms may be updated periodically. Continued use of our services constitutes acceptance of any changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}