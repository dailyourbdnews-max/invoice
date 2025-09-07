import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, FileText } from "lucide-react";
import { Invoice } from "@/types/invoice";
import { InvoiceStorage } from "@/lib/invoice-storage";
import { calculateInvoiceTotals } from "@/lib/pdf-generator";
import { useState, useEffect } from "react";

interface RecentInvoicesProps {
  onLoadInvoice: (invoice: Invoice) => void;
  onNewInvoice: () => void;
  currentInvoiceId?: string;
}

export function RecentInvoices({ onLoadInvoice, onNewInvoice, currentInvoiceId }: RecentInvoicesProps) {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const loadInvoices = () => {
    setInvoices(InvoiceStorage.getAll());
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all invoices? This action cannot be undone.")) {
      InvoiceStorage.clear();
      loadInvoices();
    }
  };

  const handleLoadInvoice = (invoice: Invoice) => {
    onLoadInvoice(invoice);
    loadInvoices(); // Refresh the list
  };

  return (
    <Card className="sticky top-8" data-testid="recent-invoices-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold" data-testid="recent-invoices-title">
            Recent Invoices
          </CardTitle>
          {invoices.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-clear-all-invoices"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {invoices.length === 0 ? (
          <p className="text-muted-foreground text-sm" data-testid="text-no-invoices">
            No recent invoices
          </p>
        ) : (
          invoices.slice(0, 5).map((invoice) => {
            const totals = calculateInvoiceTotals(invoice);
            const isActive = invoice.id === currentInvoiceId;
            
            return (
              <div
                key={invoice.id}
                className={`p-3 border rounded-md cursor-pointer transition-colors hover:bg-muted ${
                  isActive ? 'bg-muted border-primary' : 'border-border'
                }`}
                onClick={() => handleLoadInvoice(invoice)}
                data-testid={`card-invoice-${invoice.id}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-2">
                    <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="font-medium text-sm" data-testid={`text-invoice-number-${invoice.id}`}>
                        {invoice.invoiceNumber}
                      </div>
                      <div className="text-xs text-muted-foreground" data-testid={`text-client-name-${invoice.id}`}>
                        {invoice.toCompany || 'Unknown Client'}
                      </div>
                      <div className="text-xs text-muted-foreground" data-testid={`text-issue-date-${invoice.id}`}>
                        {new Date(invoice.issueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium" data-testid={`text-total-${invoice.id}`}>
                    {invoice.currencySymbol || '$'}{totals.total.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })
        )}
        
        <Button 
          onClick={onNewInvoice} 
          className="w-full mt-4"
          data-testid="button-new-invoice"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Invoice
        </Button>
      </CardContent>
    </Card>
  );
}
