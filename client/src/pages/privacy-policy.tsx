import { FileText } from "lucide-react";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="text-primary-foreground text-sm" />
              </div>
              <h1 className="text-xl font-bold text-foreground">InvoicePro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              <a href="/help-center" className="text-muted-foreground hover:text-foreground transition-colors">Help</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At InvoicePro, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our invoice generation service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using InvoicePro, you consent to the data practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Don't Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>InvoicePro is designed with privacy as a core principle.</strong> We want to be clear 
              about what we DON'T collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>We do not collect or store your invoice data</li>
              <li>We do not collect personal information like names, addresses, or email addresses</li>
              <li>We do not collect business information or client details</li>
              <li>We do not collect financial information or payment details</li>
              <li>We do not require account creation or user registration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How Your Data Stays Private</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All invoice data you create using InvoicePro is stored locally in your web browser using 
              browser storage technologies. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Local Storage:</strong> Your invoice data never leaves your device</li>
              <li><strong>No Server Storage:</strong> We don't store your data on our servers</li>
              <li><strong>You Control Your Data:</strong> You can clear your browser data at any time</li>
              <li><strong>No Third-Party Access:</strong> Your data is not shared with any third parties</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Minimal Information We May Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To provide and improve our service, we may collect very limited, non-personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Website Usage Data:</strong> Anonymous usage statistics (page views, session duration)</li>
              <li><strong>Technical Information:</strong> Browser type, device type, and screen resolution for optimization</li>
              <li><strong>Error Logs:</strong> Technical error information to help us fix issues</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              This information is collected anonymously and cannot be used to identify individual users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use minimal cookies and tracking technologies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Local Storage:</strong> To save your invoices locally on your device</li>
              <li><strong>Analytics:</strong> Anonymous analytics to understand how our service is used</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We do not use tracking cookies for advertising or marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              InvoicePro may use third-party services for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Web Analytics:</strong> To understand website usage patterns (anonymized data only)</li>
              <li><strong>Content Delivery:</strong> To serve website assets efficiently</li>
              <li><strong>Error Monitoring:</strong> To identify and fix technical issues</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These services do not have access to your invoice data, as it remains stored locally on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While we don't store your personal data, we still maintain security best practices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>HTTPS Encryption:</strong> All communication with our website is encrypted</li>
              <li><strong>Secure Infrastructure:</strong> Our website is hosted on secure, monitored servers</li>
              <li><strong>Regular Updates:</strong> We keep our systems updated with the latest security patches</li>
              <li><strong>Local Storage Security:</strong> Your data benefits from your browser's built-in security features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              InvoicePro is not intended for use by children under the age of 13. We do not knowingly 
              collect personal information from children under 13.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are a parent or guardian and believe your child has provided us with personal 
              information, please contact us so we can take appropriate action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Your Rights and Control</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since your data is stored locally on your device, you have complete control:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Access:</strong> You can access all your data through the InvoicePro interface</li>
              <li><strong>Export:</strong> You can download your invoices as PDFs</li>
              <li><strong>Delete:</strong> You can clear your browser storage to delete all data</li>
              <li><strong>Modify:</strong> You can edit and update your invoices at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Since InvoicePro stores your data locally on your device, there are no international 
              data transfers of your personal invoice data.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any minimal analytics data we collect may be processed in the United States, where our 
              service is hosted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Email:</strong> privacy@invoicepro.com<br />
                <strong>Address:</strong> 123 Business Street, Suite 100, New York, NY 10001<br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. GDPR Compliance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For users in the European Union, InvoicePro's privacy-by-design approach means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>We minimize data processing by storing everything locally</li>
              <li>You have complete control over your data</li>
              <li>No consent is required for data processing since we don't process personal data</li>
              <li>Data portability is inherent since you can export your invoices</li>
              <li>Right to erasure is fulfilled by clearing your browser storage</li>
            </ul>
          </section>

          <section className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Privacy Summary</h3>
            <p className="text-blue-800">
              <strong>Bottom line:</strong> InvoicePro is designed to keep your data private. Your invoice 
              information stays on your device, under your control. We don't collect, store, or have 
              access to your business or client information. Your privacy is not just protected—it's 
              guaranteed by design.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}