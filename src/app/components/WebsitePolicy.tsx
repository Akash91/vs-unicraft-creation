import { Card, CardContent } from './ui/card';

export function WebsitePolicy() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl mb-8">Website Policy</h1>

        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl mb-4">Privacy Policy</h2>
              <p className="text-muted-foreground mb-3">
                At VS Unicraft Creation, we are committed to protecting your privacy and ensuring the security of
                your personal information. This privacy policy outlines how we collect, use, and safeguard
                your data when you visit our website or make a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We collect information from you when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Register on our website or create an account</li>
                <li>Place an order or make a purchase</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Fill out a form or provide feedback</li>
                <li>Browse our website (through cookies and similar technologies)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                The types of information we may collect include your name, email address, phone number,
                shipping address, billing address, payment information, and browsing behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your orders and account</li>
                <li>To provide customer support and respond to your inquiries</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website, products, and services</li>
                <li>To detect and prevent fraud and security issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. This
                includes using SSL encryption for data transmission, secure servers, and regular security
                assessments. However, no method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-3">
                We use cookies and similar tracking technologies to enhance your browsing experience,
                analyze website traffic, and personalize content. Cookies are small text files stored on
                your device. You can manage your cookie preferences through your browser settings, but
                disabling cookies may affect the functionality of our website.
              </p>
              <p className="text-muted-foreground">
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-3">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors use our website</li>
                <li>Marketing cookies: Used to deliver personalized advertisements</li>
                <li>Preference cookies: Remember your settings and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Third-Party Sharing</h2>
              <p className="text-muted-foreground mb-3">
                We do not sell, trade, or rent your personal information to third parties. However, we may
                share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Service providers who help us operate our business (e.g., payment processors, shipping companies)</li>
                <li>Law enforcement or regulatory authorities when required by law</li>
                <li>Professional advisors such as lawyers and accountants</li>
                <li>Potential buyers in the event of a business sale or merger</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                All third parties we work with are required to maintain the confidentiality and security of
                your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-3">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access: Request a copy of the personal information we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Objection: Object to processing of your personal information</li>
                <li>Portability: Request transfer of your data to another service</li>
                <li>Withdraw consent: Withdraw consent for marketing communications at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under the age of 13. We do not knowingly collect
                personal information from children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes outlined
                in this policy, unless a longer retention period is required by law. When we no longer need
                your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of
                residence. We ensure that appropriate safeguards are in place to protect your information
                in accordance with this policy and applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time to reflect changes in our practices or
                legal requirements. We will notify you of any significant changes by posting the updated
                policy on our website and updating the "Last Updated" date below. We encourage you to review
                this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions, concerns, or requests regarding this privacy policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-3 text-muted-foreground">
                <p>Phone: 7042121</p>
                <p>Address: Flat No. 1403, 23 Tower, Gulmohar Garden, Raj Nagar Extension, Ghaziabad</p>
              </div>
            </section>

            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                Last updated: February 8, 2026
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}