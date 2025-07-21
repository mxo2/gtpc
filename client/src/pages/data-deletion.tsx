import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Mail, Trash2, CheckCircle } from "lucide-react";

export default function DataDeletion() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Deletion Instructions</h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. Here's how to request deletion of your data.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="w-6 h-6 text-primary" />
                How to Delete Your Data
              </CardTitle>
              <CardDescription>
                Follow these simple steps to request deletion of your personal data from our systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Method 1: Email Request</h3>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Send an email to our data protection team with your deletion request:
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:info@gtpcglobal.com?subject=Data Deletion Request" 
                       className="text-primary hover:underline font-medium">
                      info@gtpcglobal.com
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">
                    Include "Data Deletion Request" in the subject line and provide your registered email address or membership ID.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Method 2: Contact Form</h3>
                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Visit our contact page and submit a data deletion request through our secure form:
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="/contact">Submit Deletion Request</a>
                  </Button>
                  <p className="text-sm text-gray-600 mt-3">
                    Select "Data Deletion Request" as the service interest and provide details in the message field.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Confirmation</p>
                      <p className="text-sm text-gray-600">We'll confirm receipt of your request within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Verification</p>
                      <p className="text-sm text-gray-600">We may contact you to verify your identity for security purposes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Processing</p>
                      <p className="text-sm text-gray-600">Your data will be deleted within 30 days of verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Completion</p>
                      <p className="text-sm text-gray-600">You'll receive confirmation once your data has been deleted</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data We Collect</CardTitle>
              <CardDescription>
                Information that may be deleted upon request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Personal information (name, email, phone number)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Company and business details
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Service inquiries and consultation history
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Membership information and preferences
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Training and delegation program participation records
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              For more information about how we handle your data, please review our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}