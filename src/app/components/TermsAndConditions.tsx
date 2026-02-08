import { Card, CardContent } from './ui/card';

export function TermsAndConditions() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl mb-8">Terms and Conditions</h1>

        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to VS Unicraft Creation. By accessing and using our website, you accept and agree to be
                bound by the terms and provisions of this agreement. These Terms and Conditions govern your
                use of this website and all materials, information, and content available on it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-3">
                Permission is granted to temporarily download one copy of the materials (information or
                software) on VS Unicraft Creation's website for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror on another server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">3. Product Information</h2>
              <p className="text-muted-foreground">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant
                that product descriptions, pricing, or other content on this website is accurate, complete,
                reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies,
                or omissions and to change or update information at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">4. Ordering and Payment</h2>
              <p className="text-muted-foreground mb-3">
                When you place an order through our website, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and complete information</li>
                <li>Authorize us to charge the payment method you provide</li>
                <li>Accept that orders are subject to acceptance and availability</li>
                <li>Understand that we reserve the right to refuse or cancel any order</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground">
                We will make every effort to deliver products within the estimated timeframe. However,
                delivery times are estimates only and we are not responsible for delays caused by third-party
                carriers or circumstances beyond our control. Risk of loss and title for items purchased
                pass to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">6. Returns and Refunds</h2>
              <p className="text-muted-foreground">
                We accept returns within 30 days of purchase for most items in their original condition.
                Custom or personalized items, and items marked as final sale, are not eligible for return.
                Refunds will be processed to the original payment method within 7-10 business days of
                receiving the returned item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall VS Unicraft Creation or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption)
                arising out of the use or inability to use the materials on our website, even if we have
                been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of the
                jurisdiction in which we operate, and you irrevocably submit to the exclusive jurisdiction
                of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be
                effective immediately upon posting to the website. Your continued use of the website
                following the posting of changes constitutes your acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms and Conditions, please contact us at
                7042121 or visit us at Flat No. 1403, 23 Tower, Gulmohar Garden, Raj Nagar Extension, Ghaziabad.
              </p>
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