import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, Save, FileText, Printer, Eye, Upload } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Invoice, InvoiceItem, PaymentDetails } from "@/types/invoice";
import { InvoiceStorage } from "@/lib/invoice-storage";
import { calculateInvoiceTotals, generatePDF, generatePrintPDF } from "@/lib/pdf-generator";
import { useToast } from "@/hooks/use-toast";

interface InvoiceFormProps {
  invoice: Invoice | null;
  onInvoiceChange: (invoice: Invoice) => void;
  onPreview: () => void;
  onPrint: () => void;
}

export function InvoiceForm({ invoice, onInvoiceChange, onPreview, onPrint }: InvoiceFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Invoice>(() => createEmptyInvoice());

  useEffect(() => {
    if (invoice) {
      setFormData(invoice);
    } else {
      setFormData(createEmptyInvoice());
    }
  }, [invoice]);

  function detectCurrencyFromLocale() {
    try {
      const locale = navigator.language || 'en-US';
      const format = new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
      const parts = format.formatToParts(1000);
      const currencyPart = parts.find(part => part.type === 'currency');
      
      // Detect currency based on locale
      const currencyMap: { [key: string]: { currency: string, symbol: string, methods: string[] } } = {
        'en-US': { currency: 'USD', symbol: '$', methods: ['Bank Transfer', 'PayPal'] },
        'en-GB': { currency: 'GBP', symbol: '£', methods: ['Bank Transfer', 'PayPal'] },
        'en-BD': { currency: 'BDT', symbol: '৳', methods: ['Bank Transfer', 'bKash', 'Nagad'] },
        'bn-BD': { currency: 'BDT', symbol: '৳', methods: ['Bank Transfer', 'bKash', 'Nagad'] },
        'en-IN': { currency: 'INR', symbol: '₹', methods: ['Bank Transfer', 'UPI', 'PayPal'] },
        'hi-IN': { currency: 'INR', symbol: '₹', methods: ['Bank Transfer', 'UPI', 'PayPal'] },
        'en-EU': { currency: 'EUR', symbol: '€', methods: ['Bank Transfer', 'PayPal'] }
      };
      
      const detected = currencyMap[locale] || currencyMap['en-US'];
      return detected;
    } catch (error) {
      return { currency: 'USD', symbol: '$', methods: ['Bank Transfer', 'PayPal'] };
    }
  }

  function createEmptyInvoice(): Invoice {
    const today = new Date();
    const dueDate = new Date();
    dueDate.setDate(today.getDate() + 30);
    const currencyInfo = detectCurrencyFromLocale();

    return {
      id: '',
      invoiceNumber: InvoiceStorage.generateInvoiceNumber(),
      issueDate: today.toISOString().split('T')[0],
      dueDate: dueDate.toISOString().split('T')[0],
      fromCompany: '',
      fromAddress: '',
      fromEmail: '',
      fromLogo: '',
      toCompany: '',
      toAddress: '',
      toEmail: '',
      items: [createEmptyItem()],
      taxRate: 0,
      discountRate: 0,
      notes: '',
      paymentMethods: currencyInfo.methods,
      paymentDetails: {},
      currency: currencyInfo.currency,
      currencyCode: currencyInfo.currency,
      currencySymbol: currencyInfo.symbol,
      createdAt: '',
      updatedAt: ''
    };
  }

  function createEmptyItem(): InvoiceItem {
    return {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      rate: 0,
      amount: 0
    };
  }

  const updateField = (field: keyof Invoice, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    onInvoiceChange(updated);
  };

  const updateItem = (index: number, field: keyof InvoiceItem, value: any) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    
    if (field === 'quantity' || field === 'rate') {
      const quantity = field === 'quantity' ? Number(value) : updatedItems[index].quantity;
      const rate = field === 'rate' ? Number(value) : updatedItems[index].rate;
      updatedItems[index].amount = quantity * rate;
    }
    
    updateField('items', updatedItems);
  };

  const addItem = () => {
    const newItems = [...formData.items, createEmptyItem()];
    updateField('items', newItems);
  };

  const removeItem = (index: number) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      updateField('items', newItems);
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const logoData = e.target?.result as string;
        updateField('fromLogo', logoData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaymentMethodChange = (method: string, checked: boolean) => {
    const currentMethods = formData.paymentMethods || [];
    if (checked) {
      updateField('paymentMethods', [...currentMethods, method]);
    } else {
      updateField('paymentMethods', currentMethods.filter(m => m !== method));
      // Clear payment details for removed method
      const updatedDetails = { ...formData.paymentDetails };
      switch (method) {
        case 'Bank Transfer':
          delete updatedDetails.bankName;
          delete updatedDetails.accountNumber;
          delete updatedDetails.routingNumber;
          break;
        case 'PayPal':
          delete updatedDetails.paypalEmail;
          break;
        case 'UPI':
          delete updatedDetails.upiId;
          break;
        case 'bKash':
          delete updatedDetails.bkashNumber;
          break;
        case 'Nagad':
          delete updatedDetails.nagadNumber;
          break;
        case 'Payment Link':
          delete updatedDetails.paymentLink;
          break;
      }
      updateField('paymentDetails', updatedDetails);
    }
  };

  const updatePaymentDetail = (field: keyof PaymentDetails, value: string) => {
    const updatedDetails = { ...formData.paymentDetails, [field]: value };
    updateField('paymentDetails', updatedDetails);
  };

  const paymentOptions = [
    'Bank Transfer',
    'PayPal',
    'UPI',
    'bKash',
    'Nagad',
    'Payment Link',
    'Cash'
  ];

  const currencyOptions = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
    { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' }
  ];

  const handleCurrencyChange = (currencyCode: string) => {
    const currency = currencyOptions.find(c => c.code === currencyCode);
    if (currency) {
      updateField('currencySymbol', currency.symbol);
      updateField('currencyCode', currency.code);
    }
  };

  const saveInvoice = async () => {
    if (!formData.fromCompany || !formData.toCompany) {
      toast({
        title: "Validation Error",
        description: "Please fill in company names for both sender and recipient.",
        variant: "destructive"
      });
      return;
    }

    try {
      const invoiceToSave = {
        ...formData,
        id: formData.id || `inv-${Date.now()}`,
        paymentMethods: formData.paymentMethods || [],
        paymentDetails: formData.paymentDetails || {}
      };
      
      InvoiceStorage.save(invoiceToSave);
      setFormData(invoiceToSave);
      onInvoiceChange(invoiceToSave);
      
      toast({
        title: "Success",
        description: "Invoice saved successfully! Generating PDF..."
      });

      // Auto-trigger preview and PDF download
      onPreview();
      setTimeout(async () => {
        await generatePDF(invoiceToSave);
      }, 1000);
      
    } catch (error) {
      console.error("Save error:", error);
      toast({
        title: "Error",
        description: "Failed to save invoice. Please try again.",
        variant: "destructive"
      });
    }
  };

  const totals = calculateInvoiceTotals(formData);

  return (
    <Card data-testid="invoice-form-card">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-2xl font-bold" data-testid="form-title">
          {formData.id ? 'Edit Invoice' : 'Create New Invoice'}
        </CardTitle>
        <p className="text-muted-foreground">Fill in the details below to generate your professional invoice</p>
      </CardHeader>

      <CardContent className="p-6 space-y-8">
        {/* Invoice Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Invoice Details</h3>
            <div>
              <Label htmlFor="invoiceNumber" className="text-sm font-medium">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={formData.invoiceNumber}
                onChange={(e) => updateField('invoiceNumber', e.target.value)}
                placeholder="INV-001"
                data-testid="input-invoice-number"
              />
            </div>
            <div>
              <Label htmlFor="issueDate" className="text-sm font-medium">Issue Date</Label>
              <Input
                id="issueDate"
                type="date"
                value={formData.issueDate}
                onChange={(e) => updateField('issueDate', e.target.value)}
                data-testid="input-issue-date"
              />
            </div>
            <div>
              <Label htmlFor="dueDate" className="text-sm font-medium">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => updateField('dueDate', e.target.value)}
                data-testid="input-due-date"
              />
            </div>
            <div>
              <Label htmlFor="currency" className="text-sm font-medium">Currency</Label>
              <Select
                value={formData.currencyCode || 'USD'}
                onValueChange={handleCurrencyChange}
              >
                <SelectTrigger className="w-full" data-testid="select-currency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencyOptions.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.symbol} {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Invoice From</h3>
            <div>
              <Label htmlFor="fromCompany" className="text-sm font-medium">Company Name</Label>
              <Input
                id="fromCompany"
                value={formData.fromCompany}
                onChange={(e) => updateField('fromCompany', e.target.value)}
                placeholder="Your Company Name"
                data-testid="input-from-company"
              />
            </div>
            <div>
              <Label htmlFor="fromAddress" className="text-sm font-medium">Address</Label>
              <Textarea
                id="fromAddress"
                rows={3}
                value={formData.fromAddress}
                onChange={(e) => updateField('fromAddress', e.target.value)}
                placeholder="Your company address"
                data-testid="input-from-address"
              />
            </div>
            <div>
              <Label htmlFor="fromEmail" className="text-sm font-medium">Email</Label>
              <Input
                id="fromEmail"
                type="email"
                value={formData.fromEmail}
                onChange={(e) => updateField('fromEmail', e.target.value)}
                placeholder="your@email.com"
                data-testid="input-from-email"
              />
            </div>
            <div>
              <Label htmlFor="logo" className="text-sm font-medium">Company Logo</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <label htmlFor="logo" className="cursor-pointer">
                    <div className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </div>
                  </label>
                  <span className="text-sm text-muted-foreground">
                    {formData.fromLogo ? 'File selected' : 'No file chosen'}
                  </span>
                  <input
                    id="logo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    data-testid="input-logo-upload"
                  />
                </div>
                {formData.fromLogo && (
                  <div className="mt-2">
                    <img
                      src={formData.fromLogo}
                      alt="Company logo"
                      className="max-w-24 max-h-24 object-contain border border-border rounded"
                      data-testid="preview-logo"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Bill To</h3>
            <div>
              <Label htmlFor="toCompany" className="text-sm font-medium">Client Name</Label>
              <Input
                id="toCompany"
                value={formData.toCompany}
                onChange={(e) => updateField('toCompany', e.target.value)}
                placeholder="Client Company Name"
                data-testid="input-to-company"
              />
            </div>
            <div>
              <Label htmlFor="toAddress" className="text-sm font-medium">Address</Label>
              <Textarea
                id="toAddress"
                rows={3}
                value={formData.toAddress}
                onChange={(e) => updateField('toAddress', e.target.value)}
                placeholder="Client address"
                data-testid="input-to-address"
              />
            </div>
            <div>
              <Label htmlFor="toEmail" className="text-sm font-medium">Email</Label>
              <Input
                id="toEmail"
                type="email"
                value={formData.toEmail}
                onChange={(e) => updateField('toEmail', e.target.value)}
                placeholder="client@email.com"
                data-testid="input-to-email"
              />
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Items</h3>
            <Button onClick={addItem} data-testid="button-add-item">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>

          {/* Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                  <th className="px-4 py-3 text-center text-sm font-medium w-24">Qty</th>
                  <th className="px-4 py-3 text-center text-sm font-medium w-32">Rate</th>
                  <th className="px-4 py-3 text-right text-sm font-medium w-32">Amount</th>
                  <th className="px-4 py-3 text-center text-sm font-medium w-16 no-print"></th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                  <tr key={item.id} className="border-b border-border" data-testid={`row-item-${index}`}>
                    <td className="px-4 py-3">
                      <Input
                        value={item.description}
                        onChange={(e) => updateItem(index, 'description', e.target.value)}
                        placeholder="Description of service or product"
                        className="border-0 p-0 focus-visible:ring-0 shadow-none"
                        data-testid={`input-description-${index}`}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                        className="border-0 p-0 text-center focus-visible:ring-0 shadow-none"
                        data-testid={`input-quantity-${index}`}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) => updateItem(index, 'rate', Number(e.target.value))}
                        placeholder="0.00"
                        className="border-0 p-0 text-right focus-visible:ring-0 shadow-none"
                        data-testid={`input-rate-${index}`}
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-medium" data-testid={`text-amount-${index}`}>
                        {formData.currencySymbol}{item.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center no-print">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(index)}
                        className="text-destructive hover:text-destructive"
                        disabled={formData.items.length === 1}
                        data-testid={`button-remove-item-${index}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end">
          <div className="w-full max-w-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-medium" data-testid="text-subtotal">{formData.currencySymbol}{totals.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">Tax:</span>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.taxRate}
                  onChange={(e) => updateField('taxRate', Number(e.target.value))}
                  className="w-16 h-8 px-2 text-sm"
                  data-testid="input-tax-rate"
                />
                <span className="text-muted-foreground text-sm">%</span>
              </div>
              <span className="font-medium" data-testid="text-tax-amount">{formData.currencySymbol}{totals.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">Discount:</span>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={formData.discountRate}
                  onChange={(e) => updateField('discountRate', Number(e.target.value))}
                  className="w-16 h-8 px-2 text-sm"
                  data-testid="input-discount-rate"
                />
                <span className="text-muted-foreground text-sm">%</span>
              </div>
              <span className="font-medium text-green-600" data-testid="text-discount-amount">
                -{formData.currencySymbol}{totals.discountAmount.toFixed(2)}
              </span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold text-primary" data-testid="text-total">
                  {formData.currencySymbol}{totals.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Payment Methods</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {paymentOptions.map((method) => {
              const isChecked = formData.paymentMethods?.includes(method) || false;
              return (
                <div key={method} className="flex items-center space-x-2">
                  <Checkbox
                    id={method}
                    checked={isChecked}
                    onCheckedChange={(checked) => {
                      console.log('Payment method change:', method, checked);
                      handlePaymentMethodChange(method, !!checked);
                    }}
                    data-testid={`checkbox-payment-${method.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                  <Label htmlFor={method} className="text-sm font-medium cursor-pointer">
                    {method}
                  </Label>
                </div>
              );
            })}
          </div>

          {/* Payment Details Forms */}
          <div className="space-y-4">
            {formData.paymentMethods?.includes('Bank Transfer') && (
              <Card className="p-4 bg-muted/50">
                <h4 className="font-medium mb-3 text-sm">Bank Transfer Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="bankName" className="text-xs">Bank Name</Label>
                    <Input
                      id="bankName"
                      value={formData.paymentDetails?.bankName || ''}
                      onChange={(e) => updatePaymentDetail('bankName', e.target.value)}
                      placeholder="Bank name"
                      className="h-8"
                      data-testid="input-bank-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="accountNumber" className="text-xs">Account Number</Label>
                    <Input
                      id="accountNumber"
                      value={formData.paymentDetails?.accountNumber || ''}
                      onChange={(e) => updatePaymentDetail('accountNumber', e.target.value)}
                      placeholder="Account number"
                      className="h-8"
                      data-testid="input-account-number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="routingNumber" className="text-xs">Routing Number</Label>
                    <Input
                      id="routingNumber"
                      value={formData.paymentDetails?.routingNumber || ''}
                      onChange={(e) => updatePaymentDetail('routingNumber', e.target.value)}
                      placeholder="Routing number"
                      className="h-8"
                      data-testid="input-routing-number"
                    />
                  </div>
                </div>
              </Card>
            )}

            {formData.paymentMethods?.includes('PayPal') && (
              <Card className="p-4 bg-muted/50">
                <h4 className="font-medium mb-3 text-sm">PayPal Details</h4>
                <div>
                  <Label htmlFor="paypalEmail" className="text-xs">PayPal Email</Label>
                  <Input
                    id="paypalEmail"
                    type="email"
                    value={formData.paymentDetails?.paypalEmail || ''}
                    onChange={(e) => updatePaymentDetail('paypalEmail', e.target.value)}
                    placeholder="your@paypal.com"
                    className="h-8"
                    data-testid="input-paypal-email"
                  />
                </div>
              </Card>
            )}

            {formData.paymentMethods?.includes('UPI') && (
              <Card className="p-4 bg-muted/50">
                <h4 className="font-medium mb-3 text-sm">UPI Details</h4>
                <div>
                  <Label htmlFor="upiId" className="text-xs">UPI ID</Label>
                  <Input
                    id="upiId"
                    value={formData.paymentDetails?.upiId || ''}
                    onChange={(e) => updatePaymentDetail('upiId', e.target.value)}
                    placeholder="user@upi"
                    className="h-8"
                    data-testid="input-upi-id"
                  />
                </div>
              </Card>
            )}

            {formData.paymentMethods?.includes('bKash') && (
              <Card className="p-4 bg-muted/50">
                <h4 className="font-medium mb-3 text-sm">bKash Details</h4>
                <div>
                  <Label htmlFor="bkashNumber" className="text-xs">bKash Number</Label>
                  <Input
                    id="bkashNumber"
                    value={formData.paymentDetails?.bkashNumber || ''}
                    onChange={(e) => updatePaymentDetail('bkashNumber', e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="h-8"
                    data-testid="input-bkash-number"
                  />
                </div>
              </Card>
            )}

            {formData.paymentMethods?.includes('Nagad') && (
              <Card className="p-4 bg-muted/50">
                <h4 className="font-medium mb-3 text-sm">Nagad Details</h4>
                <div>
                  <Label htmlFor="nagadNumber" className="text-xs">Nagad Number</Label>
                  <Input
                    id="nagadNumber"
                    value={formData.paymentDetails?.nagadNumber || ''}
                    onChange={(e) => updatePaymentDetail('nagadNumber', e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="h-8"
                    data-testid="input-nagad-number"
                  />
                </div>
              </Card>
            )}

            {formData.paymentMethods?.includes('Payment Link') && (
              <Card className="p-4 bg-muted/50">
                <h4 className="font-medium mb-3 text-sm">Payment Link Details</h4>
                <div>
                  <Label htmlFor="paymentLink" className="text-xs">Payment Link</Label>
                  <Input
                    id="paymentLink"
                    type="url"
                    value={formData.paymentDetails?.paymentLink || ''}
                    onChange={(e) => updatePaymentDetail('paymentLink', e.target.value)}
                    placeholder="https://payment-link.com"
                    className="h-8"
                    data-testid="input-payment-link"
                  />
                </div>
              </Card>
            )}
          </div>
          {/* Notes Section - moved under payment methods */}
          <div className="space-y-4">
            <h4 className="text-md font-medium">Notes</h4>
            <Textarea
              rows={4}
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              placeholder="Additional notes or payment terms..."
              data-testid="input-notes"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 no-print">
          <Button onClick={saveInvoice} data-testid="button-save">
            <Save className="h-4 w-4 mr-2" />
            Save Invoice
          </Button>
          <Button variant="secondary" onClick={onPreview} data-testid="button-preview">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" onClick={onPrint} data-testid="button-print">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
