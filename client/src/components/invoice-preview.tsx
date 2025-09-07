import { Card, CardContent } from "@/components/ui/card";
import { Invoice } from "@/types/invoice";
import { calculateInvoiceTotals } from "@/lib/pdf-generator";

interface InvoicePreviewProps {
  invoice: Invoice;
  className?: string;
}

export function InvoicePreview({ invoice, className = "" }: InvoicePreviewProps) {
  const totals = calculateInvoiceTotals(invoice);

  return (
    <Card className={`bg-white text-gray-900 invoice-preview ${className}`} data-testid="invoice-preview">
      <CardContent className="p-8">
        {/* Preview Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-start space-x-4">
            {invoice.fromLogo && (
              <img
                src={invoice.fromLogo}
                alt="Company logo"
                className="max-w-16 max-h-16 object-contain"
                data-testid="preview-company-logo"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold text-gray-900" data-testid="preview-title">INVOICE</h1>
              <p className="text-gray-600 mt-2" data-testid="preview-invoice-number">
                Invoice #{invoice.invoiceNumber}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-gray-900" data-testid="preview-from-company">
              {invoice.fromCompany || 'Your Company'}
            </div>
            <div className="text-gray-600 whitespace-pre-line" data-testid="preview-from-address">
              {invoice.fromAddress}
            </div>
            <div className="text-gray-600" data-testid="preview-from-email">
              {invoice.fromEmail}
            </div>
          </div>
        </div>

        {/* Preview Dates & Bill To */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Bill To:</h3>
            <div className="text-gray-900 font-medium" data-testid="preview-to-company">
              {invoice.toCompany}
            </div>
            <div className="text-gray-600 whitespace-pre-line" data-testid="preview-to-address">
              {invoice.toAddress}
            </div>
            <div className="text-gray-600" data-testid="preview-to-email">
              {invoice.toEmail}
            </div>
          </div>
          <div className="text-right">
            <div className="mb-2">
              <span className="font-medium text-gray-900">Issue Date:</span>
              <span className="text-gray-600 ml-2" data-testid="preview-issue-date">
                {new Date(invoice.issueDate).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-900">Due Date:</span>
              <span className="text-gray-600 ml-2" data-testid="preview-due-date">
                {new Date(invoice.dueDate).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Preview Items */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 text-gray-900 font-semibold">Description</th>
                <th className="text-center py-3 text-gray-900 font-semibold w-20">Qty</th>
                <th className="text-right py-3 text-gray-900 font-semibold w-24">Rate</th>
                <th className="text-right py-3 text-gray-900 font-semibold w-24">Amount</th>
              </tr>
            </thead>
            <tbody data-testid="preview-items-table">
              {invoice.items.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-100" data-testid={`preview-item-${index}`}>
                  <td className="py-2 text-gray-900" data-testid={`preview-item-description-${index}`}>
                    {item.description}
                  </td>
                  <td className="py-2 text-center text-gray-600" data-testid={`preview-item-quantity-${index}`}>
                    {item.quantity}
                  </td>
                  <td className="py-2 text-right text-gray-600" data-testid={`preview-item-rate-${index}`}>
                    {invoice.currencySymbol}{item.rate.toFixed(2)}
                  </td>
                  <td className="py-2 text-right text-gray-900 font-medium" data-testid={`preview-item-amount-${index}`}>
                    {invoice.currencySymbol}{item.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Preview Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-64">
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-900" data-testid="preview-subtotal">{invoice.currencySymbol}{totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Tax ({invoice.taxRate}%):</span>
              <span className="text-gray-900" data-testid="preview-tax-amount">{invoice.currencySymbol}{totals.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Discount ({invoice.discountRate}%):</span>
              <span className="text-green-600" data-testid="preview-discount-amount">-{invoice.currencySymbol}{totals.discountAmount.toFixed(2)}</span>
            </div>
            {totals.shippingFee > 0 && (
              <div className="flex justify-between py-1">
                <span className="text-gray-600">Shipping:</span>
                <span className="text-gray-900" data-testid="preview-shipping-amount">{invoice.currencySymbol}{totals.shippingFee.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-300 mt-2 pt-2">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900" data-testid="preview-total">
                  {invoice.currencySymbol}{totals.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Payment Methods */}
        {invoice.paymentMethods && invoice.paymentMethods.length > 0 && (
          <div className="mb-6" data-testid="preview-payment-methods-section">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Information:</h3>
            <div className="space-y-3">
              {invoice.paymentMethods.map((method, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-3">
                  <div className="font-medium text-gray-900 text-sm" data-testid={`preview-payment-method-${index}`}>
                    {method}
                  </div>
                  
                  {method === 'Bank Transfer' && invoice.paymentDetails && (
                    <div className="text-xs text-gray-600 mt-1 space-y-1">
                      {invoice.paymentDetails.bankName && (
                        <div>Bank: {invoice.paymentDetails.bankName}</div>
                      )}
                      {invoice.paymentDetails.accountNumber && (
                        <div>Account: {invoice.paymentDetails.accountNumber}</div>
                      )}
                      {invoice.paymentDetails.routingNumber && (
                        <div>Routing: {invoice.paymentDetails.routingNumber}</div>
                      )}
                    </div>
                  )}
                  
                  {method === 'PayPal' && invoice.paymentDetails?.paypalEmail && (
                    <div className="text-xs text-gray-600 mt-1">
                      Email: {invoice.paymentDetails.paypalEmail}
                    </div>
                  )}
                  
                  {method === 'UPI' && invoice.paymentDetails?.upiId && (
                    <div className="text-xs text-gray-600 mt-1">
                      UPI ID: {invoice.paymentDetails.upiId}
                    </div>
                  )}
                  
                  {method === 'bKash' && invoice.paymentDetails?.bkashNumber && (
                    <div className="text-xs text-gray-600 mt-1">
                      bKash: {invoice.paymentDetails.bkashNumber}
                    </div>
                  )}
                  
                  {method === 'Nagad' && invoice.paymentDetails?.nagadNumber && (
                    <div className="text-xs text-gray-600 mt-1">
                      Nagad: {invoice.paymentDetails.nagadNumber}
                    </div>
                  )}
                  
                  {method === 'Payment Link' && invoice.paymentDetails?.paymentLink && (
                    <div className="text-xs text-gray-600 mt-1">
                      Link: <a href={invoice.paymentDetails.paymentLink} className="text-blue-600 underline">{invoice.paymentDetails.paymentLink}</a>
                    </div>
                  )}
                  
                  {method === 'Cash' && (
                    <div className="text-xs text-gray-600 mt-1">
                      Cash payment accepted
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Preview Notes */}
        {invoice.notes.trim() && (
          <div className="mb-6" data-testid="preview-notes-section">
            <h3 className="font-semibold text-gray-900 mb-2">Notes:</h3>
            <p className="text-gray-600 whitespace-pre-line" data-testid="preview-notes">
              {invoice.notes}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
