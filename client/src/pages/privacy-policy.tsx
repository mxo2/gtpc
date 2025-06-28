import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: December 28, 2024</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Global Trade Promotion Corporation ("GTPC", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
            <ul className="mb-4">
              <li>Name and contact details (email, phone number)</li>
              <li>Company information and business details</li>
              <li>Training preferences and consultancy requirements</li>
              <li>Payment information for our services</li>
              <li>Communication records and correspondence</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
            <ul>
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Device information and preferences</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <ul>
              <li><strong>Service Delivery:</strong> To provide consultancy, training, and delegation services</li>
              <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
              <li><strong>Business Operations:</strong> To process payments and manage memberships</li>
              <li><strong>Improvement:</strong> To enhance our services and website functionality</li>
              <li><strong>Legal Compliance:</strong> To meet regulatory and legal obligations</li>
              <li><strong>Marketing:</strong> To send relevant business opportunities (with your consent)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Data Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">We do not sell your personal data. We may share information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted partners who assist in delivering our services</li>
              <li><strong>Business Partners:</strong> For delegation programs and trade opportunities</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Professional Advisors:</strong> Lawyers, auditors, and consultants as needed</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Data Security</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul>
              <li>Encrypted data transmission and storage</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and staff training</li>
              <li>Secure payment processing systems</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Restriction:</strong> Request limitation of data processing</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:info@gtpcglobal.com" className="text-primary hover:underline">info@gtpcglobal.com</a>
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes. Typically:
            </p>
            <ul>
              <li>Customer records: 7 years from last interaction</li>
              <li>Training records: 5 years from completion</li>
              <li>Marketing data: Until consent is withdrawn</li>
              <li>Website analytics: 26 months maximum</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">International Transfers</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              As we operate internationally, your data may be transferred to countries outside India. We ensure adequate protection through:
            </p>
            <ul>
              <li>Standard contractual clauses</li>
              <li>Adequacy decisions by regulatory authorities</li>
              <li>Binding corporate rules</li>
              <li>Your explicit consent when required</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">For privacy-related questions or concerns, contact us:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Global Trade Promotion Corporation</strong></p>
              <p>14 & 29, KEDIA BUSINESS CENTRE</p>
              <p>JAIPUR-302012 RJ, India</p>
              <p>Email: <a href="mailto:info@gtpcglobal.com" className="text-primary hover:underline">info@gtpcglobal.com</a></p>
              <p>Phone: Available on our Contact page</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We may update this privacy policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through our website or direct communication. Your continued use of our services after such modifications constitutes acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}