import { useState } from "react";
import { FileText } from "lucide-react";
import { InvoiceForm } from "@/components/invoice-form";
import { InvoicePreview } from "@/components/invoice-preview";
import { RecentInvoices } from "@/components/recent-invoices";
import { Footer } from "@/components/footer";
import { Invoice } from "@/types/invoice";
import { generatePrintPDF } from "@/lib/pdf-generator";

export default function InvoiceGenerator() {
  const [currentInvoice, setCurrentInvoice] = useState<Invoice | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleLoadInvoice = (invoice: Invoice) => {
    setCurrentInvoice(invoice);
    setShowPreview(false);
  };

  const handleNewInvoice = () => {
    setCurrentInvoice(null);
    setShowPreview(false);
  };

  const handleInvoiceChange = (invoice: Invoice) => {
    setCurrentInvoice(invoice);
  };

  const handlePreview = () => {
    setShowPreview(true);
    if (showPreview) {
      document.getElementById('invoice-preview')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    setShowPreview(true);
    setTimeout(() => {
      if (currentInvoice) {
        generatePrintPDF(currentInvoice);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm no-print" data-testid="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="text-primary-foreground text-sm" />
              </div>
              <h1 className="text-xl font-bold text-foreground" data-testid="app-title">InvoicePro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/invoicing-guide" className="text-muted-foreground hover:text-foreground transition-colors">Guide</a>
              <a href="/help-center" className="text-muted-foreground hover:text-foreground transition-colors">Help</a>
              <a href="/contact-us" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Recent Invoices */}
          <div className="lg:col-span-1 no-print">
            <RecentInvoices
              onLoadInvoice={handleLoadInvoice}
              onNewInvoice={handleNewInvoice}
              currentInvoiceId={currentInvoice?.id}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Invoice Form */}
            <InvoiceForm
              invoice={currentInvoice}
              onInvoiceChange={handleInvoiceChange}
              onPreview={handlePreview}
              onPrint={handlePrint}
            />

            {/* Invoice Preview */}
            {showPreview && currentInvoice && (
              <div className="mt-8" id="invoice-preview">
                <InvoicePreview invoice={currentInvoice} />
              </div>
            )}
          </div>
        </div>
        
        {/* Marketing Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Invoice Pro: Free Professional Invoice Generator
            </h2>
            
            <div className="prose prose-lg max-w-none text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Why Choose Our Free Invoice Generator?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Invoice Pro provides a completely free invoice generator that helps freelancers, small businesses, and entrepreneurs create professional-looking invoices in minutes. No hidden fees, no subscriptions, and no limitations on the number of invoices you can create.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our online invoice maker offers customizable templates that can be tailored to match your brand identity. Add your logo, choose your currency, and personalize your payment terms to create professional invoices that get you paid faster.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Features That Make Invoicing Simple
              </h3>
              <ul className="text-gray-600 space-y-3 mb-8 list-disc pl-6">
                <li><strong>Instant PDF Download</strong> - Generate and download professional PDF invoices with a single click</li>
                <li><strong>Multiple Payment Options</strong> - Support for bank transfers, PayPal, UPI, and custom payment links</li>
                <li><strong>Currency Support</strong> - Create invoices in any currency with automatic formatting</li>
                <li><strong>Taxes & Discounts</strong> - Easy calculation of taxes, discounts, and shipping costs</li>
                <li><strong>No Sign-up Required</strong> - Start creating invoices immediately without registration</li>
                <li><strong>100% Free Forever</strong> - No hidden costs or premium features; everything is accessible to everyone</li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Perfect For All Professionals
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're a freelancer, consultant, small business owner, or service provider, our free online invoicing software is designed to meet your needs. Create unlimited professional invoices, track payments, and maintain a professional image with your clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Start using Invoice Pro today and experience how easy it is to create professional invoices in seconds. No credit card required, no trial periods - just a powerful, completely free invoice generator at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
