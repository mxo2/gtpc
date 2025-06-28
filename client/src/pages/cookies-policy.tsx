import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookies Policy</h1>
          <p className="text-lg text-gray-600">Last updated: December 28, 2024</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">What Are Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">How We Use Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">Global Trade Promotion Corporation uses cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential Functionality:</strong> To enable basic website features and user authentication</li>
              <li><strong>User Experience:</strong> To remember your preferences and settings</li>
              <li><strong>Analytics:</strong> To understand how visitors interact with our website</li>
              <li><strong>Performance:</strong> To optimize website speed and functionality</li>
              <li><strong>Security:</strong> To protect against fraudulent activity and enhance security</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">1. Essential Cookies</h3>
            <p className="mb-4">These cookies are necessary for the website to function properly and cannot be disabled.</p>
            <ul className="mb-6">
              <li>Session management for logged-in users</li>
              <li>Form submission and validation</li>
              <li>Security and fraud prevention</li>
              <li>Load balancing and performance optimization</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">2. Analytics Cookies</h3>
            <p className="mb-4">These help us understand how visitors use our website to improve our services.</p>
            <ul className="mb-6">
              <li>Page views and user journey tracking</li>
              <li>Popular content and features analysis</li>
              <li>Website performance monitoring</li>
              <li>Error tracking and debugging</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">3. Functional Cookies</h3>
            <p className="mb-4">These enhance your experience by remembering your choices and preferences.</p>
            <ul className="mb-6">
              <li>Language and region preferences</li>
              <li>User interface customizations</li>
              <li>Form auto-fill information</li>
              <li>Accessibility settings</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">4. Marketing Cookies</h3>
            <p className="mb-4">These help us deliver relevant content and track the effectiveness of our marketing campaigns.</p>
            <ul>
              <li>Content personalization</li>
              <li>Campaign performance tracking</li>
              <li>Social media integration</li>
              <li>Targeted communication preferences</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">We may use services from third-party providers that set their own cookies:</p>
            
            <h3 className="text-lg font-semibold mb-3">Analytics Services</h3>
            <ul className="mb-4">
              <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
              <li><strong>Hotjar:</strong> User experience and heatmap analysis</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Communication Tools</h3>
            <ul className="mb-4">
              <li><strong>WhatsApp Business:</strong> Customer support integration</li>
              <li><strong>Email Services:</strong> Newsletter and communication tracking</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Payment Processing</h3>
            <ul>
              <li><strong>Payment Gateways:</strong> Secure transaction processing</li>
              <li><strong>Banking Partners:</strong> Payment verification and fraud prevention</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Cookie Duration</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Session Cookies</h3>
            <p className="mb-4">These are temporary cookies that expire when you close your browser.</p>

            <h3 className="text-lg font-semibold mb-3">Persistent Cookies</h3>
            <p className="mb-4">These remain on your device for a specified period or until manually deleted:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Up to 1 year</li>
              <li><strong>Analytics cookies:</strong> Up to 2 years</li>
              <li><strong>Functional cookies:</strong> Up to 1 year</li>
              <li><strong>Marketing cookies:</strong> Up to 1 year</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Managing Your Cookie Preferences</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
            <p className="mb-4">You can control cookies through your browser settings:</p>
            <ul className="mb-4">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Cookie Banner</h3>
            <p className="mb-4">When you first visit our website, you can:</p>
            <ul className="mb-4">
              <li>Accept all cookies for the best experience</li>
              <li>Customize your preferences by category</li>
              <li>Reject non-essential cookies</li>
              <li>Change your preferences anytime through our cookie settings</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3">Impact of Disabling Cookies</h3>
            <p className="mb-4">Disabling certain cookies may affect:</p>
            <ul>
              <li>Website functionality and user experience</li>
              <li>Personalized content and recommendations</li>
              <li>Form submissions and user preferences</li>
              <li>Analytics and website improvement efforts</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">Under applicable privacy laws, you have the right to:</p>
            <ul>
              <li><strong>Consent:</strong> Give or withdraw consent for non-essential cookies</li>
              <li><strong>Access:</strong> Know what cookies are stored on your device</li>
              <li><strong>Delete:</strong> Remove cookies from your browser</li>
              <li><strong>Opt-out:</strong> Disable specific types of tracking</li>
              <li><strong>Information:</strong> Understand how cookies are used</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              We may update this Cookies Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes through our website or direct communication. The "Last updated" date at the top of this policy indicates when the most recent changes were made.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">If you have questions about our use of cookies or this policy:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Global Trade Promotion Corporation</strong></p>
              <p>Email: <a href="mailto:info@gtpcglobal.com" className="text-primary hover:underline">info@gtpcglobal.com</a></p>
              <p>Address: 14 & 29, KEDIA BUSINESS CENTRE, JAIPUR-302012 RJ, India</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Useful Resources</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="mb-4">Learn more about cookies and privacy:</p>
            <ul>
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies</a></li>
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="https://www.cookiesandyou.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cookies and You</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}