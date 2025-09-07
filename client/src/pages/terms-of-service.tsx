import { FileText } from "lucide-react";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> January 1, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing and using InvoicePro ("the Service"), you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, please do 
              not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              InvoicePro is a free, web-based invoice generation tool that allows users to create, customize, 
              and download professional invoices. The Service is provided free of charge and does not require 
              user registration or account creation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              All invoice data is stored locally in your browser and is not transmitted to or stored on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Ensuring the accuracy of all information entered into invoices</li>
              <li>Complying with all applicable laws and regulations when using the Service</li>
              <li>Not using the Service for any illegal or unauthorized purposes</li>
              <li>Maintaining the confidentiality of your business and client information</li>
              <li>Backing up your invoice data as needed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              InvoicePro is designed with privacy in mind:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>All invoice data is stored locally in your browser</li>
              <li>No personal or business information is transmitted to our servers</li>
              <li>We do not collect, store, or have access to your invoice data</li>
              <li>Your data remains under your complete control</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              For more detailed information about our privacy practices, please review our 
              <a href="/privacy-policy" className="text-blue-600 hover:underline"> Privacy Policy</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by InvoicePro 
              and are protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You retain all rights to the content you create using the Service, including your invoices 
              and business information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We strive to maintain the Service with minimal downtime. However, we do not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>The Service will be available at all times</li>
              <li>The Service will be uninterrupted or error-free</li>
              <li>Defects will be corrected immediately</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the Service at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              InvoicePro is provided "as is" without any warranties, express or implied. To the fullest 
              extent permitted by law, we disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Non-infringement of third-party rights</li>
              <li>Accuracy, completeness, or reliability of the Service</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Prohibited Uses</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may not use InvoicePro for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>Creating fraudulent or misleading invoices</li>
              <li>Violating any international, federal, provincial, or state regulations or laws</li>
              <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others</li>
              <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating</li>
              <li>Submitting false or misleading information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time. Any changes will be 
              effective immediately upon posting the revised Terms on this page.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Your continued use of the Service after any such changes constitutes your acceptance of 
              the new Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms shall be interpreted and governed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Any disputes arising from these Terms or your use of the Service shall be subject to the 
              exclusive jurisdiction of the courts in New York, NY.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Email:</strong> legal@invoicepro.com<br />
                <strong>Address:</strong> 123 Business Street, Suite 100, New York, NY 10001<br />
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Severability</h2>
            <p className="text-gray-600 leading-relaxed">
              If any provision of these Terms is deemed unenforceable or invalid, such provision shall be 
              changed and interpreted to accomplish the objectives of such provision to the greatest extent 
              possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}