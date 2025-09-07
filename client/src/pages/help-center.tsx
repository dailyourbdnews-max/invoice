import { FileText, Search, BookOpen, MessageCircle, Lightbulb, Download } from "lucide-react";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HelpCenter() {
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
              <a href="/invoicing-guide" className="text-muted-foreground hover:text-foreground transition-colors">Guide</a>
              <a href="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-lg text-gray-600 mb-8">
              Find answers to common questions and learn how to get the most out of InvoicePro.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for help articles..."
                className="pl-10 h-12"
                data-testid="search-help"
              />
            </div>
          </div>

          {/* Quick Help Categories */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span>Getting Started</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn the basics of creating your first invoice and navigating the platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="w-5 h-5 text-green-600" />
                    <span>PDF Generation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Troubleshoot PDF download issues and customize your invoice appearance.
                  </p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    <span>Payment Methods</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Set up payment options and help clients understand how to pay you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I create my first invoice?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Creating your first invoice is simple:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Fill in your business information in the "From" section</li>
                    <li>Add your client's details in the "Bill To" section</li>
                    <li>Set your invoice number, date, and due date</li>
                    <li>Add line items with descriptions, quantities, and rates</li>
                    <li>Apply taxes and discounts as needed</li>
                    <li>Choose payment methods and add payment details</li>
                    <li>Preview and download your professional PDF invoice</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I save and edit invoices?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes! InvoicePro automatically saves your invoices locally on your device. You can access 
                    recent invoices from the sidebar, make edits, and generate updated PDFs. Your data stays 
                    private and secure on your own device.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What currencies are supported?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    InvoicePro supports major currencies worldwide, including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-600 text-sm">
                    <div>• USD ($)</div>
                    <div>• EUR (€)</div>
                    <div>• GBP (£)</div>
                    <div>• JPY (¥)</div>
                    <div>• CAD (C$)</div>
                    <div>• AUD (A$)</div>
                    <div>• INR (₹)</div>
                    <div>• CNY (¥)</div>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Plus many more! Simply select your preferred currency from the dropdown menu.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I add payment methods?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    You can add multiple payment methods to make it easy for clients to pay:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Check the boxes for payment methods you accept</li>
                    <li>Fill in specific details (bank account, PayPal email, etc.)</li>
                    <li>Payment information will appear on your invoice</li>
                    <li>Clients can choose their preferred payment method</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is my data secure?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! InvoicePro stores all your invoice data locally in your browser. 
                    No information is sent to our servers or shared with third parties. Your sensitive 
                    business and client information remains completely private and under your control.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I customize the invoice design?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Currently, InvoicePro uses a clean, professional design that works well for most businesses. 
                    You can customize the content, currency, payment methods, and add your business information. 
                    We're working on additional customization options for future releases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What if I encounter technical issues?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    If you experience any technical issues:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Try refreshing your browser page</li>
                    <li>Clear your browser cache and cookies</li>
                    <li>Make sure you're using an updated browser</li>
                    <li>Check that JavaScript is enabled</li>
                    <li>Contact our support team if issues persist</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    <span>Speed Up Your Workflow</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Save common line items as templates</li>
                    <li>• Use keyboard shortcuts for navigation</li>
                    <li>• Keep client information consistent</li>
                    <li>• Preview before generating PDFs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    <span>Professional Invoicing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use clear, descriptive line items</li>
                    <li>• Set reasonable payment terms</li>
                    <li>• Include all necessary contact info</li>
                    <li>• Double-check calculations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Support */}
          <section>
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span>Still need help?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help you succeed.
                </p>
                <a 
                  href="/contact-us" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  data-testid="link-contact-support"
                >
                  Contact Support
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}