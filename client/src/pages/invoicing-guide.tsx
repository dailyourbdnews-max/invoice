import { FileText, CheckCircle, AlertCircle, DollarSign, Calendar, Users } from "lucide-react";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InvoicingGuide() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Invoicing Guide</h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about creating professional invoices and getting paid faster.
            </p>
          </div>

          {/* What is an Invoice */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is an Invoice?</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  An invoice is a commercial document that itemizes and records a transaction between a buyer and a seller. 
                  It serves as a formal request for payment and provides a detailed breakdown of goods or services provided, 
                  along with the total amount due.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Professional invoices are essential for maintaining cash flow, tracking business income, and ensuring 
                  legal compliance for tax purposes.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Key Elements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Elements of a Professional Invoice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Essential Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Your business name and contact details</li>
                    <li>• Client's name and billing address</li>
                    <li>• Unique invoice number</li>
                    <li>• Invoice date and due date</li>
                    <li>• Detailed description of goods/services</li>
                    <li>• Quantity, unit price, and total amounts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span>Financial Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Subtotal before taxes</li>
                    <li>• Tax rates and amounts</li>
                    <li>• Any discounts applied</li>
                    <li>• Shipping or handling fees</li>
                    <li>• Total amount due</li>
                    <li>• Payment terms and methods</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Invoicing Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>Timing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Send invoices immediately after delivery</li>
                    <li>• Set clear payment terms (Net 30, Net 15)</li>
                    <li>• Follow up on overdue payments promptly</li>
                    <li>• Use recurring invoices for regular services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Communication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Use professional language and tone</li>
                    <li>• Include detailed descriptions</li>
                    <li>• Add payment instructions clearly</li>
                    <li>• Provide multiple payment options</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    <span>Organization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Use sequential invoice numbers</li>
                    <li>• Keep detailed records for taxes</li>
                    <li>• Track payment status</li>
                    <li>• Archive invoices systematically</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Step-by-Step Guide */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Create an Invoice with InvoicePro</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Enter Your Business Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Start by entering your company details in the "From" section. Include your business name, 
                    address, phone number, and email. This establishes your professional identity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Add Client Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Fill in your client's information in the "Bill To" section. Include their company name, 
                    contact person, and billing address for accurate record-keeping.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Set Invoice Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Choose your invoice number, issue date, and due date. Select your preferred currency from 
                    our extensive list of supported currencies worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step 4: Add Line Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    List each product or service with detailed descriptions, quantities, and rates. 
                    The system automatically calculates line totals and overall amounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step 5: Apply Taxes and Discounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Set appropriate tax rates, apply discounts if needed, and add shipping fees. 
                    All calculations are handled automatically for accuracy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step 6: Set Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Choose from multiple payment methods including bank transfers, PayPal, UPI, and others. 
                    Add specific payment details to make it easy for clients to pay.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Step 7: Preview and Download</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Preview your invoice to ensure everything looks perfect, then generate and download 
                    a professional PDF ready to send to your client.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Invoicing Mistakes to Avoid</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Content Mistakes</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Incomplete client information</li>
                      <li>• Vague service descriptions</li>
                      <li>• Missing invoice numbers</li>
                      <li>• Incorrect calculations</li>
                      <li>• Unclear payment terms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Process Mistakes</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Sending invoices too late</li>
                      <li>• Not following up on payments</li>
                      <li>• Poor record keeping</li>
                      <li>• Inconsistent invoice formatting</li>
                      <li>• Not providing payment options</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}