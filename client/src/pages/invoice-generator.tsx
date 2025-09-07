import { useState } from "react";
import { FileText } from "lucide-react";
import { InvoiceForm } from "@/components/invoice-form";
import { InvoicePreview } from "@/components/invoice-preview";
import { RecentInvoices } from "@/components/recent-invoices";
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
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help</a>
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
      </div>
    </div>
  );
}
